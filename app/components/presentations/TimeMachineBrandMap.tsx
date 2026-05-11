'use client';

// Sister Time Machines we want to call out in the talk. Lat/lng for a quick
// recognisable layout, not a precise geographical projection.
const NODES: { name: string; lat: number; lng: number; emphasis?: boolean }[] =
  [
    { name: 'Venice', lat: 45.4, lng: 12.3 },
    { name: 'Amsterdam', lat: 52.4, lng: 4.9 },
    { name: 'Gouda', lat: 52.0, lng: 4.7 },
    { name: 'Antwerp', lat: 51.2, lng: 4.4 },
    { name: 'Budapest', lat: 47.5, lng: 19.0 },
    { name: 'Jerusalem', lat: 31.8, lng: 35.2 },
    { name: 'Nuremberg', lat: 49.5, lng: 11.1 },
    { name: 'Suriname', lat: 5.85, lng: -55.17, emphasis: true },
  ];

// Simple equirectangular projection across a window that includes Suriname
// and Europe.
const VIEW_W = 800;
const VIEW_H = 460;
const BOUNDS = { minLng: -65, maxLng: 40, minLat: -5, maxLat: 60 };

function project(lng: number, lat: number): [number, number] {
  const x = ((lng - BOUNDS.minLng) / (BOUNDS.maxLng - BOUNDS.minLng)) * VIEW_W;
  const y =
    (1 - (lat - BOUNDS.minLat) / (BOUNDS.maxLat - BOUNDS.minLat)) * VIEW_H;
  return [x, y];
}

export function TimeMachineBrandMap() {
  const [surinameX, surinameY] = project(-55.17, 5.85);
  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      preserveAspectRatio="xMidYMid meet"
      className="h-full max-h-[60vh] w-full"
      role="img"
      aria-label="Map of sister Time Machine projects"
    >
      {/* Backdrop */}
      <rect width={VIEW_W} height={VIEW_H} fill="var(--cream)" />
      {/* Grid lines */}
      {Array.from({ length: 6 }, (_, i) => (
        <line
          key={`v${i}`}
          x1={(i / 5) * VIEW_W}
          y1={0}
          x2={(i / 5) * VIEW_W}
          y2={VIEW_H}
          stroke="rgba(11,60,52,0.05)"
        />
      ))}
      {Array.from({ length: 4 }, (_, i) => (
        <line
          key={`h${i}`}
          x1={0}
          y1={(i / 3) * VIEW_H}
          x2={VIEW_W}
          y2={(i / 3) * VIEW_H}
          stroke="rgba(11,60,52,0.05)"
        />
      ))}
      {/* Connection lines: Suriname → each */}
      {NODES.filter((n) => !n.emphasis).map((n) => {
        const [x, y] = project(n.lng, n.lat);
        return (
          <line
            key={`l-${n.name}`}
            x1={surinameX}
            y1={surinameY}
            x2={x}
            y2={y}
            stroke="var(--teal-strong)"
            strokeOpacity={0.25}
            strokeDasharray="4 4"
            strokeWidth={1}
          />
        );
      })}
      {/* Nodes */}
      {NODES.map((n) => {
        const [x, y] = project(n.lng, n.lat);
        const r = n.emphasis ? 10 : 5;
        return (
          <g key={n.name}>
            <circle
              cx={x}
              cy={y}
              r={r}
              fill={n.emphasis ? 'var(--teal-bright)' : 'var(--teal-strong)'}
              stroke="var(--deep-teal)"
              strokeWidth={n.emphasis ? 2 : 1}
            />
            <text
              x={x + r + 4}
              y={y + 3}
              fontSize={n.emphasis ? 14 : 11}
              fontWeight={n.emphasis ? 600 : 400}
              fill="var(--deep-teal)"
              fontFamily="var(--font-geist-sans)"
            >
              {n.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
