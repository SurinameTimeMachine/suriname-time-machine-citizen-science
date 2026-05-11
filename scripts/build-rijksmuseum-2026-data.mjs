#!/usr/bin/env node
/**
 * Builds compact data artifacts for the Rijksmuseum 2026 slide deck
 * from the rijksmuseum-suriname-collection repo. Reads collection.json
 * from a local clone (default) or a custom path supplied via
 * RIJKS_COLLECTION_JSON env var.
 *
 * Outputs to public/presentations/rijksmuseum-2026/data/:
 *   - summary.json   (totals, coverage, top places/creators, decades)
 *   - points.json    (lat/lng/year/region/resolution per geo-detail)
 *   - featured.json  (~70 image highlights with thumb + coords + year)
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(
  __dirname,
  '..',
  'public',
  'presentations',
  'rijksmuseum-2026',
  'data',
);

const candidatePaths = [
  process.env.RIJKS_COLLECTION_JSON,
  '/tmp/rijks-suriname/data/collection.json',
  resolve(
    __dirname,
    '..',
    '..',
    'rijksmuseum-suriname-collection',
    'data',
    'collection.json',
  ),
].filter(Boolean);

const sourcePath = candidatePaths.find((p) => p && existsSync(p));
if (!sourcePath) {
  console.error(
    'Could not find collection.json. Set RIJKS_COLLECTION_JSON or clone',
    'SurinameTimeMachine/rijksmuseum-suriname-collection (branch gemini-cli-batch).',
  );
  process.exit(1);
}

console.log('Reading', sourcePath);
const collection = JSON.parse(readFileSync(sourcePath, 'utf-8'));
const n = collection.length;

const isInt = (v) => typeof v === 'number' && Number.isInteger(v);

// Coordinates that act as "generic" anchors — the whole country (Surinam) and
// the Paramaribo city centroid. Many objects only have these as their geo tag,
// which clutters the map with noise. Excluded from points/featured below.
const GENERIC_ANCHORS = [
  { lat: 4, lng: -56 }, // Surinam (country)
  { lat: 5.86667, lng: -55.16667 }, // Paramaribo (city centroid)
];
const isGenericAnchor = (lat, lng) =>
  GENERIC_ANCHORS.some(
    (a) => Math.abs(a.lat - lat) < 0.001 && Math.abs(a.lng - lng) < 0.001,
  );

const mediumOf = (o) => {
  const types = o.objectTypes ?? [];
  const mats = o.materials ?? [];
  const photoTypes = new Set([
    'foto',
    'stereofoto',
    'documentaire foto',
    'filmnegatief',
    'prentbriefkaart',
    'fotomechanische afdruk',
    'albumblad',
  ]);
  if (types.some((t) => photoTypes.has(t)) || mats.includes('fotodrager')) {
    return 'photo';
  }
  if (types.includes('schilderij')) return 'painting';
  if (types.some((t) => ['tekening', 'prent', 'aquarel'].includes(t)))
    return 'drawing';
  return 'other';
};

const points = [];
let genericSkipped = 0;
for (const o of collection) {
  const y = isInt(o.year) ? o.year : null;
  for (const d of o.geoKeywordDetails ?? []) {
    if (d.lat == null || d.lng == null) continue;
    if (isGenericAnchor(d.lat, d.lng)) {
      genericSkipped += 1;
      continue;
    }
    points.push({
      lat: Math.round(d.lat * 1e5) / 1e5,
      lng: Math.round(d.lng * 1e5) / 1e5,
      y,
      r: (d.resolutionLevel ?? 'u')[0],
      reg: (d.region ?? 'oth').slice(0, 3),
    });
  }
}

const placeCounts = new Map();
const placeCoords = new Map();
for (const o of collection) {
  for (const d of o.geoKeywordDetails ?? []) {
    const label = (d.matchedLabel ?? d.term ?? '').trim();
    if (!label) continue;
    if (d.region === 'suriname') {
      placeCounts.set(label, (placeCounts.get(label) ?? 0) + 1);
    }
    if (d.lat != null && !placeCoords.has(label)) {
      placeCoords.set(label, [
        Math.round(d.lat * 1e5) / 1e5,
        Math.round(d.lng * 1e5) / 1e5,
      ]);
    }
  }
}
const topPlaces = [...placeCounts.entries()]
  .sort((a, b) => b[1] - a[1])
  .slice(0, 20)
  .map(([name, count]) => {
    const coords = placeCoords.get(name) ?? [null, null];
    return { name, count, lat: coords[0], lng: coords[1] };
  });

const creatorCounts = new Map();
for (const o of collection) {
  for (const c of o.creators ?? []) {
    if (!c || c === 'anoniem') continue;
    creatorCounts.set(c, (creatorCounts.get(c) ?? 0) + 1);
  }
}
const topCreators = [...creatorCounts.entries()]
  .sort((a, b) => b[1] - a[1])
  .slice(0, 15)
  .map(([name, count]) => ({ name, count }));

const decades = new Map();
for (const o of collection) {
  const y = o.year;
  if (!isInt(y) || y < 1700 || y > 2020) continue;
  const d = Math.floor(y / 10) * 10;
  const row = decades.get(d) ?? {
    decade: d,
    photo: 0,
    painting: 0,
    drawing: 0,
    other: 0,
    total: 0,
  };
  row[mediumOf(o)] += 1;
  row.total += 1;
  decades.set(d, row);
}
const decadeRows = [...decades.values()].sort((a, b) => a.decade - b.decade);

const pct = (count) => Math.round((1000 * count) / n) / 10;
const has = (pred) => collection.filter(pred).length;
const coverage = {
  objects: n,
  image: pct(has((o) => o.hasImage)),
  thumbnail: pct(has((o) => o.thumbnailUrl)),
  year: pct(has((o) => isInt(o.year))),
  creator: pct(
    has(
      (o) =>
        Array.isArray(o.creators) &&
        o.creators.length > 0 &&
        !(o.creators.length === 1 && o.creators[0] === 'anoniem'),
    ),
  ),
  description: pct(has((o) => Boolean(o.description))),
  geoKeyword: pct(
    has(
      (o) =>
        Array.isArray(o.geographicKeywords) && o.geographicKeywords.length > 0,
    ),
  ),
  mapReady: pct(
    has((o) =>
      (o.geoKeywordDetails ?? []).some((d) => d.lat != null && d.lng != null),
    ),
  ),
  wikidataLink: pct(
    has((o) => (o.geoKeywordDetails ?? []).some((d) => d.wikidataUri)),
  ),
  gettyLink: pct(
    has((o) => (o.geoKeywordDetails ?? []).some((d) => d.gettyUri)),
  ),
  persons: pct(has((o) => Array.isArray(o.persons) && o.persons.length > 0)),
  subjects: pct(has((o) => Array.isArray(o.subjects) && o.subjects.length > 0)),
};

const regionCounts = {};
for (const o of collection) {
  const regs = new Set();
  for (const d of o.geoKeywordDetails ?? []) {
    if (d.lat != null && d.region) regs.add(d.region);
  }
  for (const r of regs) {
    regionCounts[r] = (regionCounts[r] ?? 0) + 1;
  }
}

// Featured images: image + Suriname coords + year in 1840–1980, ~6 per decade across distinct places.
const featuredPool = [];
for (const o of collection) {
  if (!o.hasImage || !o.thumbnailUrl) continue;
  const coords = (o.geoKeywordDetails ?? []).filter(
    (d) =>
      d.lat != null &&
      d.region === 'suriname' &&
      !isGenericAnchor(d.lat, d.lng),
  );
  if (coords.length === 0) continue;
  const y = o.year;
  if (!isInt(y) || y < 1840 || y > 1980) continue;
  featuredPool.push({
    obj: o.objectnummer,
    title: ((o.titles ?? [''])[0] ?? '').slice(0, 140),
    creator: (o.creators ?? ['anoniem'])[0],
    year: y,
    thumb: o.thumbnailUrl,
    image: o.imageUrl,
    place: coords[0].matchedLabel ?? coords[0].term ?? '',
    lat: Math.round(coords[0].lat * 1e5) / 1e5,
    lng: Math.round(coords[0].lng * 1e5) / 1e5,
    type: (o.objectTypes ?? [''])[0],
    pid: o.pidWork,
    wikimedia: o.wikimediaUrl,
  });
}
const byDecade = new Map();
for (const f of featuredPool) {
  const k = Math.floor(f.year / 10) * 10;
  const arr = byDecade.get(k) ?? [];
  arr.push(f);
  byDecade.set(k, arr);
}
const featured = [];
for (const k of [...byDecade.keys()].sort((a, b) => a - b)) {
  const seenPlaces = new Set();
  let picked = 0;
  for (const f of byDecade.get(k) ?? []) {
    if (seenPlaces.has(f.place)) continue;
    seenPlaces.add(f.place);
    featured.push(f);
    picked += 1;
    if (picked >= 6) break;
  }
}

const summary = {
  generatedAt: new Date().toISOString(),
  generatedFrom:
    'SurinameTimeMachine/rijksmuseum-suriname-collection@gemini-cli-batch',
  totalObjects: n,
  coverage,
  regionCounts,
  topPlaces,
  topCreators,
  decades: decadeRows,
  pointsCount: points.length,
  featuredCount: featured.length,
};

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/summary.json`, JSON.stringify(summary, null, 2));
writeFileSync(`${OUT_DIR}/points.json`, JSON.stringify(points));
writeFileSync(
  `${OUT_DIR}/featured.json`,
  JSON.stringify(featured.slice(0, 80), null, 2),
);
console.log(
  `Wrote summary.json, points.json (${points.length}, skipped ${genericSkipped} generic-anchor points), featured.json (${Math.min(
    featured.length,
    80,
  )})`,
);
