const BASE_URL = 'https://annorepo.surinametijdmachine.org';
const CONTAINER = 'suriname-time-machine';

export type ContainerMetadata = {
  label: string;
  total: number;
  created: string;
};

export type FieldCounts = Record<string, number>;

export type MotivationCount = {
  motivation: string;
  count: number;
};

export type CanvasCount = {
  canvas: string;
  label: string;
  count: number;
  citizenCount: number;
};

export type CitizenScienceStats = {
  textsSpotted: number;
  iconsIdentified: number;
  placesLinked: number;
};

export type DailyActivity = {
  date: string;
  count: number;
};

export type DashboardData = {
  metadata: ContainerMetadata;
  totalAnnotations: number;
  humanAnnotations: number;
  aiAnnotations: number;
  canvasesAnnotated: number;
  contributorCount: number;
  daysActive: number;
  citizenScience: CitizenScienceStats;
  dailyActivity: DailyActivity[];
  motivationCounts: MotivationCount[];
  topCanvases: CanvasCount[];
  fetchedAt: string;
};

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    headers: { Accept: 'application/json' },
  });
  if (!res.ok) {
    throw new Error(`AnnRepo request failed: ${res.status} ${res.statusText}`);
  }
  return await (res.json() as Promise<T>);
}

type ServiceMetadata = {
  label: string;
  created: string;
  size: number;
};

async function getContainerInfo(): Promise<ContainerMetadata> {
  const meta = await fetchJson<ServiceMetadata>(
    `${BASE_URL}/services/${CONTAINER}/metadata`,
  );
  return {
    label: meta.label,
    total: meta.size,
    created: meta.created,
  };
}

async function getFieldCounts(): Promise<FieldCounts> {
  return await fetchJson<FieldCounts>(
    `${BASE_URL}/services/${CONTAINER}/fields`,
  );
}

async function getDistinctValues(field: string): Promise<string[]> {
  return await fetchJson<string[]>(
    `${BASE_URL}/services/${CONTAINER}/distinct-values/${encodeURIComponent(field)}`,
  );
}

async function searchCount(query: Record<string, unknown>): Promise<number> {
  // Step 1: POST creates a search result set → 201 + Location header
  const createRes = await fetch(`${BASE_URL}/services/${CONTAINER}/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    redirect: 'manual',
    body: JSON.stringify(query),
  });
  const location = createRes.headers.get('location');
  if (!location) return 0;

  // Step 2: Paginate through result pages and count items
  let total = 0;
  let page = 0;
  for (;;) {
    const pageRes = await fetch(`${location}?page=${page}`, {
      headers: { Accept: 'application/json' },
    });
    if (!pageRes.ok) break;
    const data = (await pageRes.json()) as {
      items?: unknown[];
      next?: string;
    };
    const items = data.items ?? [];
    total += items.length;
    if (items.length === 0 || !data.next) break;
    page++;
  }
  return total;
}

async function getMotivationCounts(
  motivations: string[],
): Promise<MotivationCount[]> {
  const results = await Promise.all(
    motivations.map(async (motivation) => {
      const count = await searchCount({ motivation });
      return { motivation, count };
    }),
  );
  return results.sort((a, b) => b.count - a.count);
}

async function getTopCanvases(
  sources: string[],
  limit = 20,
): Promise<CanvasCount[]> {
  const results = await Promise.all(
    sources.map(async (source) => {
      const count = await searchCount({ 'target.source': source });
      const parts = source.split('/');
      const canvas = parts[parts.length - 1] || source;
      return { canvas, label: canvas, count, citizenCount: 0 };
    }),
  );
  return results.sort((a, b) => b.count - a.count).slice(0, limit);
}

export async function fetchDashboardData(): Promise<DashboardData> {
  const [containerInfo, fields] = await Promise.all([
    getContainerInfo(),
    getFieldCounts(),
  ]);

  const [motivations, creators, sources] = await Promise.all([
    getDistinctValues('motivation'),
    getDistinctValues('body.creator.label'),
    getDistinctValues('target.source'),
  ]);

  const humanAnnotations = fields['body.creator.id'] ?? 0;
  const aiAnnotations = containerInfo.total - humanAnnotations;

  const [motivationCounts, topCanvases] = await Promise.all([
    getMotivationCounts(motivations),
    getTopCanvases(sources),
  ]);

  const motMap = Object.fromEntries(
    motivationCounts.map((m) => [m.motivation, m.count]),
  );

  const daysActive = Math.max(
    1,
    Math.ceil(
      (Date.now() - new Date(containerInfo.created).getTime()) /
        (1000 * 60 * 60 * 24),
    ),
  );

  return {
    metadata: containerInfo,
    totalAnnotations: containerInfo.total,
    humanAnnotations,
    aiAnnotations,
    canvasesAnnotated: topCanvases.filter((c) => c.count > 0).length,
    contributorCount: creators.length,
    daysActive,
    citizenScience: {
      textsSpotted: motMap['textspotting'] ?? 0,
      iconsIdentified: motMap['iconography'] ?? 0,
      placesLinked: motMap['linking'] ?? 0,
    },
    dailyActivity: [],
    motivationCounts,
    topCanvases,
    fetchedAt: new Date().toISOString(),
  };
}
