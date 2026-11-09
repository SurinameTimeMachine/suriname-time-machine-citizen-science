// Serves the current STM gazetteer (maintained in suriname-database-model)
// under a stable URL on our own domain, with the JSON-LD media type that the
// NDE Datasetregister expects for the declared distribution.
const SOURCE =
  'https://raw.githubusercontent.com/SurinameTimeMachine/suriname-database-model/main/data/places-gazetteer.jsonld';

export default async () => {
  const upstream = await fetch(SOURCE);
  if (!upstream.ok) {
    return new Response('Gazetteer temporarily unavailable', { status: 502 });
  }
  return new Response(upstream.body, {
    status: 200,
    headers: {
      'content-type': 'application/ld+json; charset=utf-8',
      'cache-control': 'public, max-age=3600',
      'access-control-allow-origin': '*',
    },
  });
};

export const config = { path: '/datasets/gazetteer.jsonld' };
