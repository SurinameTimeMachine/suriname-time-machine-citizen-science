/**
 * Fetches annotation statistics from AnnRepo and writes them to
 * public/data/annorepo-stats.json so the dashboard can read same-origin JSON
 * without CORS issues. Runs at build time via the "prebuild" npm script.
 *
 * Uses optional env vars for authenticated access:
 *   SURINAME_ANNOREPO_TOKEN  – Bearer token for the AnnRepo API
 *   SURINAME_ROOT_API_KEY    – Root API key (sent as x-api-key header)
 */

import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const BASE_URL = 'https://annorepo.surinametijdmachine.org';
const CONTAINER = 'suriname-time-machine';
const IIIF_MANIFEST =
  'https://surinametimemachine.github.io/iiif-suriname/manifest.json';
const OUT_PATH = resolve('public/data/annorepo-stats.json');
const MAX_CONCURRENCY = 3; // max parallel requests to avoid overwhelming AnnRepo
const REQUEST_TIMEOUT = 15_000; // 15s per request

function authHeaders() {
  /** @type {Record<string, string>} */
  const headers = {};
  if (process.env.SURINAME_ANNOREPO_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.SURINAME_ANNOREPO_TOKEN}`;
  }
  if (process.env.SURINAME_ROOT_API_KEY) {
    headers['x-api-key'] = process.env.SURINAME_ROOT_API_KEY;
  }
  return headers;
}

async function fetchJson(url) {
  const res = await fetch(url, {
    headers: { Accept: 'application/json', ...authHeaders() },
    signal: AbortSignal.timeout(REQUEST_TIMEOUT),
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} – ${url}`);
  return await res.json();
}

const delay = (ms) =>
  new Promise((r) => {
    setTimeout(r, ms);
  });

async function searchCount(query) {
  // Step 1: POST creates a search result set, returns 201 + Location header
  const createRes = await fetch(`${BASE_URL}/services/${CONTAINER}/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...authHeaders(),
    },
    redirect: 'manual',
    body: JSON.stringify(query),
    signal: AbortSignal.timeout(REQUEST_TIMEOUT),
  });
  const location = createRes.headers.get('location');
  if (!location) return 0;

  // Step 2: Paginate through result pages and count items
  let total = 0;
  let page = 0;
  for (;;) {
    const pageRes = await fetch(`${location}?page=${page}`, {
      headers: { Accept: 'application/json', ...authHeaders() },
      signal: AbortSignal.timeout(REQUEST_TIMEOUT),
    });
    if (!pageRes.ok) break;
    const data = await pageRes.json();
    const items = data.items ?? [];
    total += items.length;
    if (items.length === 0 || !data.next) break;
    page++;
  }
  return total;
}

/**
 * Fetch all items from a search (use only for small result sets).
 */
async function searchItems(query) {
  const createRes = await fetch(`${BASE_URL}/services/${CONTAINER}/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...authHeaders(),
    },
    redirect: 'manual',
    body: JSON.stringify(query),
    signal: AbortSignal.timeout(REQUEST_TIMEOUT),
  });
  const location = createRes.headers.get('location');
  if (!location) return [];

  const items = [];
  let page = 0;
  for (;;) {
    const pageRes = await fetch(`${location}?page=${page}`, {
      headers: { Accept: 'application/json', ...authHeaders() },
      signal: AbortSignal.timeout(REQUEST_TIMEOUT),
    });
    if (!pageRes.ok) break;
    const data = await pageRes.json();
    items.push(...(data.items ?? []));
    if (!data.items?.length || !data.next) break;
    page++;
  }
  return items;
}

/**
 * Run async tasks with limited concurrency to avoid overwhelming the server.
 * @template T, R
 * @param {T[]} items
 * @param {(item: T) => Promise<R>} fn
 * @returns {Promise<R[]>}
 */
async function mapWithLimit(items, fn) {
  const results = new Array(items.length);
  let index = 0;

  async function worker() {
    while (index < items.length) {
      const i = index++;
      results[i] = await fn(items[i]);
      await delay(200); // be gentle to the server
    }
  }

  const workers = Array.from(
    { length: Math.min(MAX_CONCURRENCY, items.length) },
    () => worker(),
  );
  await Promise.all(workers);
  return results;
}

/**
 * Fetch the IIIF manifest and build a map from canvas short-id to label.
 * e.g. "c9" → "Algemeene Kaart van de Colonie of Provintie van Suriname"
 */
async function fetchCanvasLabels() {
  /** @type {Record<string, string>} */
  const map = {};
  try {
    const manifest = await fetchJson(IIIF_MANIFEST);
    for (const item of manifest.items ?? []) {
      const id = (item.id ?? '').split('/').pop();
      const labelObj = item.label ?? {};
      const label =
        labelObj.en?.[0] ?? labelObj.nl?.[0] ?? labelObj.none?.[0] ?? '';
      if (id && label) map[id] = label;
    }
    console.log(
      `  Resolved ${Object.keys(map).length} canvas labels from IIIF manifest`,
    );
  } catch (err) {
    console.warn(
      '  Could not fetch IIIF manifest for canvas labels:',
      err.message,
    );
  }
  return map;
}

async function main() {
  console.log('Fetching AnnoRepo statistics');

  const [meta, fields, canvasLabels] = await Promise.all([
    fetchJson(`${BASE_URL}/services/${CONTAINER}/metadata`),
    fetchJson(`${BASE_URL}/services/${CONTAINER}/fields`),
    fetchCanvasLabels(),
  ]);

  const total = meta.size;
  const humanAnnotations = fields['body.creator.id'] ?? 0;
  const aiAnnotations = total - humanAnnotations;

  const motivations = await fetchJson(
    `${BASE_URL}/services/${CONTAINER}/distinct-values/motivation`,
  );
  const creators = await fetchJson(
    `${BASE_URL}/services/${CONTAINER}/distinct-values/body.creator.label`,
  );
  const sources = await fetchJson(
    `${BASE_URL}/services/${CONTAINER}/distinct-values/target.source`,
  );

  // Run searches sequentially in batches to avoid overloading the server
  const motivationCounts = await mapWithLimit(motivations, async (m) => ({
    motivation: m,
    count: await searchCount({ motivation: m }),
  }));

  const canvasCounts = await mapWithLimit(sources, async (src) => {
    const count = await searchCount({ 'target.source': src });
    const id = src.split('/').pop() || src;
    return { canvas: id, label: canvasLabels[id] || id, count };
  });

  // Fetch all citizen-science annotations (small sets) and group by canvas + day
  console.log(
    '  Fetching citizen-science annotation items for per-canvas breakdown…',
  );
  const [textspottingItems, iconographyItems, linkingItems] = await Promise.all(
    [
      searchItems({ motivation: 'textspotting' }),
      searchItems({ motivation: 'iconography' }),
      searchItems({ motivation: 'linking' }),
    ],
  );
  /** @type {Record<string, number>} */
  const citizenByCanvas = {};
  /** @type {Record<string, number>} */
  const dailyActivity = {};
  const allCitizenItems = [
    ...textspottingItems,
    ...iconographyItems,
    ...linkingItems,
  ];
  for (const item of allCitizenItems) {
    // textspotting / iconography have canvas in target.source
    // linking annotations store the canvas in body[].source where purpose="selecting"
    let src = typeof item.target?.source === 'string' ? item.target.source : '';
    if (!src && Array.isArray(item.body)) {
      const selecting = item.body.find(
        (b) => b.purpose === 'selecting' && typeof b.source === 'string',
      );
      if (selecting) src = selecting.source;
    }
    if (src) {
      const id = src.split('/').pop();
      if (id) citizenByCanvas[id] = (citizenByCanvas[id] ?? 0) + 1;
    }
    // Extract daily activity from annotation created timestamp
    const created = item.created ?? item.modified ?? '';
    if (created) {
      const day = created.slice(0, 10); // YYYY-MM-DD
      if (/^\d{4}-\d{2}-\d{2}$/.test(day)) {
        dailyActivity[day] = (dailyActivity[day] ?? 0) + 1;
      }
    }
  }

  // Attach citizenCount to each canvas
  for (const c of canvasCounts) {
    c.citizenCount = citizenByCanvas[c.canvas] ?? 0;
  }

  // Extract citizen-science activity counts from motivations
  const motMap = Object.fromEntries(
    motivationCounts.map((m) => [m.motivation, m.count]),
  );
  const citizenScience = {
    textsSpotted: motMap['textspotting'] ?? 0,
    iconsIdentified: motMap['iconography'] ?? 0,
    placesLinked: motMap['linking'] ?? 0,
  };

  // Community stats
  const contributorCount = creators.length;
  const daysActive = Math.max(
    1,
    Math.ceil(
      (Date.now() - new Date(meta.created).getTime()) / (1000 * 60 * 60 * 24),
    ),
  );

  // Total canvases that received annotations
  const canvasesAnnotated = canvasCounts.filter((c) => c.count > 0).length;

  // Convert dailyActivity map to sorted array
  const dailyActivityArray = Object.entries(dailyActivity)
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => a.date.localeCompare(b.date));

  const stats = {
    metadata: { label: meta.label, total, created: meta.created },
    totalAnnotations: total,
    humanAnnotations,
    aiAnnotations,
    canvasesAnnotated,
    contributorCount,
    daysActive,
    citizenScience,
    dailyActivity: dailyActivityArray,
    motivationCounts: motivationCounts.sort((a, b) => b.count - a.count),
    topCanvases: canvasCounts.sort((a, b) => b.count - a.count),
    fetchedAt: new Date().toISOString(),
  };

  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, JSON.stringify(stats, null, 2));
  console.log(
    `Wrote ${OUT_PATH} (${stats.totalAnnotations.toLocaleString()} annotations)`,
  );
}

main().catch((err) => {
  console.warn('Failed to fetch AnnoRepo stats:', err.message);
  if (existsSync(OUT_PATH)) {
    console.log('   Using existing', OUT_PATH);
  } else {
    console.log('   Writing empty fallback so the build can continue.');
    mkdirSync(dirname(OUT_PATH), { recursive: true });
    writeFileSync(OUT_PATH, JSON.stringify(null));
  }
});
