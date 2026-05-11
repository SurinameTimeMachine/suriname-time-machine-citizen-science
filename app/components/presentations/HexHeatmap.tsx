'use client';

import { useMemo, useState } from 'react';

// ── Suriname bounding box (approximate) ──────────────────────────────
const BOUNDS = {
  north: 6.05,
  south: 1.85,
  west: -58.1,
  east: -53.9,
};

// Simplified Suriname outline (very coarse, lat/lng pairs). Hand-built; good
// enough for the silhouette behind hex bins. North-clockwise.
const SURINAME_OUTLINE: [number, number][] = [
  [-54.0, 5.6], // NE corner near Marowijne mouth
  [-54.5, 5.55],
  [-55.0, 5.8],
  [-55.45, 5.95],
  [-55.9, 5.95],
  [-56.4, 5.85],
  [-56.95, 5.95],
  [-57.3, 5.9],
  [-57.55, 5.75],
  [-57.9, 5.5], // NW corner
  [-57.85, 5.0],
  [-57.4, 4.5],
  [-57.25, 4.0],
  [-57.4, 3.55],
  [-57.2, 3.0],
  [-57.0, 2.55],
  [-56.6, 2.1],
  [-56.0, 1.95],
  [-55.5, 2.0],
  [-55.1, 2.55],
  [-54.7, 2.35],
  [-54.3, 2.45],
  [-54.0, 2.2],
  [-54.0, 3.05],
  [-54.25, 3.4],
  [-54.05, 3.85],
  [-54.2, 4.4],
  [-54.4, 4.9],
  [-54.0, 5.6],
];

const VIEW_W = 900;
const VIEW_H = 720;

function project(lng: number, lat: number): [number, number] {
  const x = ((lng - BOUNDS.west) / (BOUNDS.east - BOUNDS.west)) * VIEW_W;
  const y = (1 - (lat - BOUNDS.south) / (BOUNDS.north - BOUNDS.south)) * VIEW_H;
  return [x, y];
}

const OUTLINE_PATH = (() => {
  const pts = SURINAME_OUTLINE.map(([lng, lat]) => project(lng, lat));
  return (
    'M' +
    pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' L') +
    ' Z'
  );
})();

// ── Sample dataset (illustrative) ────────────────────────────────────
// Each point: a Rijksmuseum work located at (lng, lat) with positional
// uncertainty in km and year. Real data will replace this from a JSON
// file in public/presentations/rijksmuseum-2026/data/.
export type ImagePoint = {
  lng: number;
  lat: number;
  /** Uncertainty radius in km. 0.5 = street-level, 25 = regional. */
  uncertainty: number;
  year: number;
};

function seedRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function generateSamplePoints(count = 420, seed = 1879): ImagePoint[] {
  const rand = seedRandom(seed);
  const points: ImagePoint[] = [];
  // Three "gravity wells" near plantation belts + Paramaribo.
  const wells: { lng: number; lat: number; weight: number; spread: number }[] =
    [
      { lng: -55.17, lat: 5.85, weight: 0.55, spread: 0.18 }, // Paramaribo
      { lng: -55.05, lat: 5.7, weight: 0.18, spread: 0.35 }, // Commewijne
      { lng: -55.5, lat: 5.65, weight: 0.12, spread: 0.4 }, // Saramacca/Coronie
      { lng: -54.45, lat: 5.55, weight: 0.08, spread: 0.45 }, // Marowijne
      { lng: -57.0, lat: 5.85, weight: 0.05, spread: 0.4 }, // Nickerie
      { lng: -55.5, lat: 4.0, weight: 0.02, spread: 1.2 }, // interior, sparse
    ];
  for (let i = 0; i < count; i++) {
    const r = rand();
    let acc = 0;
    let well = wells[0]!;
    for (const w of wells) {
      acc += w.weight;
      if (r <= acc) {
        well = w;
        break;
      }
    }
    const dx = (rand() - 0.5) * 2 * well.spread;
    const dy = (rand() - 0.5) * 2 * well.spread;
    const lng = well.lng + dx;
    const lat = well.lat + dy;
    if (
      lng < BOUNDS.west ||
      lng > BOUNDS.east ||
      lat < BOUNDS.south ||
      lat > BOUNDS.north
    ) {
      continue;
    }
    // Far-from-coast points have higher uncertainty.
    const coastDist = Math.max(0, 5.95 - lat);
    const uncertainty = 0.5 + coastDist * 8 + rand() * 6;
    const year = 1845 + Math.floor(rand() * 65); // 1845–1909
    points.push({ lng, lat, uncertainty, year });
  }
  return points;
}

// ── Hex binning ──────────────────────────────────────────────────────
const HEX_R = 26; // px (flat-top)
const HEX_W = Math.sqrt(3) * HEX_R; // horizontal spacing
const HEX_H = 1.5 * HEX_R; // vertical row step

function hexCorners(cx: number, cy: number, r: number): string {
  // Pointy-top corners
  const pts: string[] = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i + Math.PI / 6;
    pts.push(
      `${(cx + r * Math.cos(angle)).toFixed(1)},${(
        cy +
        r * Math.sin(angle)
      ).toFixed(1)}`,
    );
  }
  return pts.join(' ');
}

type Bin = {
  col: number;
  row: number;
  cx: number;
  cy: number;
  count: number;
  meanUncertainty: number;
};

function binPoints(points: ImagePoint[]): Bin[] {
  const map = new Map<string, Bin>();
  for (const p of points) {
    const [px, py] = project(p.lng, p.lat);
    const row = Math.round(py / HEX_H);
    const offsetX = row % 2 === 0 ? 0 : HEX_W / 2;
    const col = Math.round((px - offsetX) / HEX_W);
    const cx = col * HEX_W + offsetX;
    const cy = row * HEX_H;
    const key = `${col},${row}`;
    const bin = map.get(key);
    if (bin) {
      bin.count += 1;
      bin.meanUncertainty =
        (bin.meanUncertainty * (bin.count - 1) + p.uncertainty) / bin.count;
    } else {
      map.set(key, {
        col,
        row,
        cx,
        cy,
        count: 1,
        meanUncertainty: p.uncertainty,
      });
    }
  }
  return Array.from(map.values());
}

// ── Component ────────────────────────────────────────────────────────
type HexHeatmapProps = {
  points?: ImagePoint[];
  yearMin?: number;
  yearMax?: number;
};

const DENSITY_RAMP = [
  'var(--teal-soft)',
  'var(--teal-bright)',
  'var(--teal-strong)',
  'var(--deep-teal)',
] as const;

function densityLevel(count: number, max: number): number {
  if (max <= 1) return 0;
  const r = count / max;
  if (r <= 0.2) return 0;
  if (r <= 0.45) return 1;
  if (r <= 0.75) return 2;
  return 3;
}

export function HexHeatmap({ points, yearMin, yearMax }: HexHeatmapProps) {
  const allPoints = useMemo(() => points ?? generateSamplePoints(), [points]);
  const filtered = useMemo(() => {
    if (yearMin === undefined && yearMax === undefined) return allPoints;
    return allPoints.filter(
      (p) =>
        (yearMin === undefined || p.year >= yearMin) &&
        (yearMax === undefined || p.year <= yearMax),
    );
  }, [allPoints, yearMin, yearMax]);
  const bins = useMemo(() => binPoints(filtered), [filtered]);
  const max = useMemo(
    () => bins.reduce((m, b) => Math.max(m, b.count), 0),
    [bins],
  );
  const [hover, setHover] = useState<Bin | null>(null);

  return (
    <div className="relative h-full w-full">
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMidYMid meet"
        className="block h-full w-full"
        role="img"
        aria-label="Hex-bin heatmap of Suriname image locations"
      >
        {/* Suriname silhouette */}
        <path
          d={OUTLINE_PATH}
          fill="rgba(11,60,52,0.06)"
          stroke="rgba(11,60,52,0.35)"
          strokeWidth={1.5}
        />
        {/* Hex bins */}
        <g>
          {bins.map((b) => {
            const lvl = densityLevel(b.count, max);
            const fill = DENSITY_RAMP[lvl];
            // Dash length scales with uncertainty (Gouda velepanden style).
            const dashLen = Math.min(
              14,
              Math.max(0, Math.round(b.meanUncertainty * 0.8)),
            );
            const dash =
              dashLen === 0 ? undefined : `${dashLen} ${dashLen / 2}`;
            return (
              <polygon
                key={`${b.col}-${b.row}`}
                points={hexCorners(b.cx, b.cy, HEX_R - 1)}
                fill={fill}
                fillOpacity={0.85}
                stroke="var(--deep-teal)"
                strokeOpacity={0.85}
                strokeWidth={1.25}
                strokeDasharray={dash}
                onMouseEnter={() => setHover(b)}
                onMouseLeave={() => setHover(null)}
                className="cursor-crosshair transition-opacity hover:opacity-90"
              />
            );
          })}
        </g>
      </svg>
      {/* Legend */}
      <div className="absolute bottom-4 left-4 flex flex-col gap-2 bg-white/90 px-3 py-2 text-[10px] text-ink ring-1 ring-ink/10 backdrop-blur-sm">
        <div>
          <p className="font-semibold uppercase tracking-[0.25em] text-ink/70">
            Density
          </p>
          <div className="mt-1 flex items-center gap-1">
            {DENSITY_RAMP.map((c) => (
              <span
                key={c}
                style={{ background: c }}
                className="block size-3"
              />
            ))}
            <span className="ml-2 opacity-60">low → high</span>
          </div>
        </div>
        <div>
          <p className="font-semibold uppercase tracking-[0.25em] text-ink/70">
            Uncertainty
          </p>
          <div className="mt-1 flex items-center gap-2">
            <svg width="32" height="10">
              <line
                x1="0"
                y1="5"
                x2="32"
                y2="5"
                stroke="var(--deep-teal)"
                strokeWidth="2"
              />
            </svg>
            <span className="opacity-60">precise</span>
            <svg width="32" height="10">
              <line
                x1="0"
                y1="5"
                x2="32"
                y2="5"
                stroke="var(--deep-teal)"
                strokeWidth="2"
                strokeDasharray="10 5"
              />
            </svg>
            <span className="opacity-60">vague</span>
          </div>
        </div>
      </div>
      {hover ? (
        <div className="pointer-events-none absolute right-4 top-4 bg-white/95 px-3 py-2 text-xs text-ink ring-1 ring-ink/10">
          <p>
            <span className="font-semibold">{hover.count}</span> image
            {hover.count === 1 ? '' : 's'} in cell
          </p>
          <p className="opacity-70">
            mean uncertainty: {hover.meanUncertainty.toFixed(1)} km
          </p>
        </div>
      ) : null}
    </div>
  );
}

export { generateSamplePoints };
