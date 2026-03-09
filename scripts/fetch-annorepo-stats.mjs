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
const OUT_PATH = resolve('public/data/annorepo-stats.json');

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
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} – ${url}`);
  return res.json();
}

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
  });
  const location = createRes.headers.get('location');
  if (!location) return 0;

  // Step 2: Paginate through result pages and count items
  let total = 0;
  let page = 0;
  while (true) {
    const pageRes = await fetch(`${location}?page=${page}`, {
      headers: { Accept: 'application/json', ...authHeaders() },
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

async function main() {
  console.log('⏳ Fetching AnnRepo statistics…');

  const [meta, fields] = await Promise.all([
    fetchJson(`${BASE_URL}/services/${CONTAINER}/metadata`),
    fetchJson(`${BASE_URL}/services/${CONTAINER}/fields`),
  ]);

  const total = meta.size;
  const humanAnnotations = fields['body.creator.id'] ?? 0;
  const aiAnnotations = total - humanAnnotations;

  const [motivations, creators, purposes, sources] = await Promise.all([
    fetchJson(`${BASE_URL}/services/${CONTAINER}/distinct-values/motivation`),
    fetchJson(
      `${BASE_URL}/services/${CONTAINER}/distinct-values/body.creator.label`,
    ),
    fetchJson(`${BASE_URL}/services/${CONTAINER}/distinct-values/body.purpose`),
    fetchJson(
      `${BASE_URL}/services/${CONTAINER}/distinct-values/target.source`,
    ),
  ]);

  const [motivationCounts, creatorCounts, purposeCounts, canvasCounts] =
    await Promise.all([
      Promise.all(
        motivations.map(async (m) => ({
          motivation: m,
          count: await searchCount({ motivation: m }),
        })),
      ),
      Promise.all(
        creators.map(async (label) => ({
          label,
          count: await searchCount({ 'body.creator.label': label }),
        })),
      ),
      Promise.all(
        purposes.map(async (p) => ({
          purpose: p,
          count: await searchCount({ 'body.purpose': p }),
        })),
      ),
      Promise.all(
        sources.map(async (src) => {
          const count = await searchCount({ 'target.source': src });
          const parts = src.split('/');
          return { canvas: parts[parts.length - 1] || src, count };
        }),
      ),
    ]);

  const stats = {
    metadata: { label: meta.label, total, created: meta.created },
    totalAnnotations: total,
    humanAnnotations,
    aiAnnotations,
    motivationCounts: motivationCounts.sort((a, b) => b.count - a.count),
    creatorCounts: creatorCounts.sort((a, b) => b.count - a.count),
    purposeCounts: purposeCounts.sort((a, b) => b.count - a.count),
    topCanvases: canvasCounts.sort((a, b) => b.count - a.count).slice(0, 20),
    fetchedAt: new Date().toISOString(),
  };

  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, JSON.stringify(stats, null, 2));
  console.log(
    `✅ Wrote ${OUT_PATH} (${stats.totalAnnotations.toLocaleString()} annotations)`,
  );
}

main().catch((err) => {
  console.warn('⚠️  Failed to fetch AnnRepo stats:', err.message);
  if (existsSync(OUT_PATH)) {
    console.log('   Using existing', OUT_PATH);
  } else {
    console.log('   Writing empty fallback so the build can continue.');
    mkdirSync(dirname(OUT_PATH), { recursive: true });
    writeFileSync(OUT_PATH, JSON.stringify(null));
  }
});
