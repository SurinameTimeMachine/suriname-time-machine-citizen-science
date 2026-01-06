import fs from 'node:fs';
import path from 'node:path';

const W = 32;
const H = 32;

const COLORS = {
  deepTeal: hexToRgb('#003c34'),
  tealStrong: hexToRgb('#006d5b'),
  tealBright: hexToRgb('#34d1b3'),
};

const outPath = path.join(process.cwd(), 'app', 'favicon.ico');

function hexToRgb(hex) {
  const h = hex.replace('#', '').trim();
  const n = Number.parseInt(h, 16);
  return {
    r: (n >> 16) & 255,
    g: (n >> 8) & 255,
    b: n & 255,
  };
}

// 2x2 supersampling for smoother edges
const SUB = [0.25, 0.75];

function covRoundedRect(x, y, left, top, right, bottom, radius) {
  let inside = 0;
  for (const ox of SUB) {
    for (const oy of SUB) {
      const px = x + ox;
      const py = y + oy;

      if (px < left || px > right || py < top || py > bottom) continue;

      const dx = Math.max(left + radius - px, 0, px - (right - radius));
      const dy = Math.max(top + radius - py, 0, py - (bottom - radius));

      if (dx * dx + dy * dy <= radius * radius) inside++;
    }
  }
  return inside / (SUB.length * SUB.length);
}

function covRing(x, y, cx, cy, innerR, outerR) {
  let inside = 0;
  for (const ox of SUB) {
    for (const oy of SUB) {
      const px = x + ox;
      const py = y + oy;
      const dx = px - cx;
      const dy = py - cy;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d >= innerR && d <= outerR) inside++;
    }
  }
  return inside / (SUB.length * SUB.length);
}

function covCircle(x, y, cx, cy, r) {
  let inside = 0;
  for (const ox of SUB) {
    for (const oy of SUB) {
      const px = x + ox;
      const py = y + oy;
      const dx = px - cx;
      const dy = py - cy;
      if (dx * dx + dy * dy <= r * r) inside++;
    }
  }
  return inside / (SUB.length * SUB.length);
}

// premultiplied alpha compositing (then un-premultiply for BMP BGRA)
function over(dst, srcRgb, srcA) {
  const a = clamp01(srcA);

  const srcPr = (srcRgb.r / 255) * a;
  const srcPg = (srcRgb.g / 255) * a;
  const srcPb = (srcRgb.b / 255) * a;

  const outA = a + dst.a * (1 - a);
  const outPr = srcPr + dst.pr * (1 - a);
  const outPg = srcPg + dst.pg * (1 - a);
  const outPb = srcPb + dst.pb * (1 - a);

  return { pr: outPr, pg: outPg, pb: outPb, a: outA };
}

function clamp01(v) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

function clampByte(n) {
  return n < 0 ? 0 : n > 255 ? 255 : n;
}

// Build pixel BGRA bottom-up
const pixelBuf = Buffer.alloc(W * H * 4);
const maskStride = Math.ceil(W / 32) * 4; // bytes per row, 32-bit aligned
const maskBuf = Buffer.alloc(maskStride * H, 0);

// Design tuned for 32x32
const bgInset = 2;
const bgRadius = 7;

const ringCx = 16;
const ringCy = 16;
const ringOuter = 12;
const ringInner = 9;

const dotCx = 24;
const dotCy = 9;
const dotR = 3;

for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    // Start transparent
    let acc = { pr: 0, pg: 0, pb: 0, a: 0 };

    // Rounded square background
    const bgA = covRoundedRect(
      x,
      y,
      bgInset,
      bgInset,
      W - 1 - bgInset,
      H - 1 - bgInset,
      bgRadius,
    );
    acc = over(acc, COLORS.deepTeal, bgA);

    // Ring
    const ringA = covRing(x, y, ringCx, ringCy, ringInner, ringOuter);
    acc = over(acc, COLORS.tealStrong, ringA);

    // Dot
    const dotA = covCircle(x, y, dotCx, dotCy, dotR);
    acc = over(acc, COLORS.tealBright, dotA);

    // Convert premult -> straight RGB for storage
    const a = acc.a;
    let r = 0;
    let g = 0;
    let b = 0;
    if (a > 0) {
      r = acc.pr / a;
      g = acc.pg / a;
      b = acc.pb / a;
    }

    const A = clampByte(Math.round(a * 255));
    const R = clampByte(Math.round(r * 255));
    const G = clampByte(Math.round(g * 255));
    const B = clampByte(Math.round(b * 255));

    // BMP stores rows bottom-up
    const row = H - 1 - y;
    const pxIndex = (row * W + x) * 4;
    pixelBuf[pxIndex + 0] = B;
    pixelBuf[pxIndex + 1] = G;
    pixelBuf[pxIndex + 2] = R;
    pixelBuf[pxIndex + 3] = A;

    // AND mask bit: 1 means transparent.
    const maskRowOffset = row * maskStride;
    const byteIndex = maskRowOffset + (x >> 3);
    const bit = 7 - (x & 7);
    if (A === 0) {
      maskBuf[byteIndex] |= 1 << bit;
    }
  }
}

// BITMAPINFOHEADER for ICO BMP/DIB
const dibHeader = Buffer.alloc(40);
dibHeader.writeUInt32LE(40, 0); // biSize
// biWidth
// biHeight is doubled (color + mask)
dibHeader.writeInt32LE(W, 4);
dibHeader.writeInt32LE(H * 2, 8);
dibHeader.writeUInt16LE(1, 12); // biPlanes
dibHeader.writeUInt16LE(32, 14); // biBitCount
dibHeader.writeUInt32LE(0, 16); // biCompression (BI_RGB)
dibHeader.writeUInt32LE(pixelBuf.length + maskBuf.length, 20); // biSizeImage

const imageData = Buffer.concat([dibHeader, pixelBuf, maskBuf]);

// ICO header + single entry
const iconDir = Buffer.alloc(6);
iconDir.writeUInt16LE(0, 0); // reserved
iconDir.writeUInt16LE(1, 2); // type
iconDir.writeUInt16LE(1, 4); // count

const entry = Buffer.alloc(16);
entry.writeUInt8(W, 0); // width
entry.writeUInt8(H, 1); // height
entry.writeUInt8(0, 2); // color count
entry.writeUInt8(0, 3); // reserved
entry.writeUInt16LE(1, 4); // planes
entry.writeUInt16LE(32, 6); // bit count
entry.writeUInt32LE(imageData.length, 8); // bytes
entry.writeUInt32LE(6 + 16, 12); // offset

const ico = Buffer.concat([iconDir, entry, imageData]);
fs.writeFileSync(outPath, ico);

console.log(`Wrote ${ico.length} bytes to ${outPath}`);
