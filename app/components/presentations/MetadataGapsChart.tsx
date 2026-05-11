'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

// Illustrative — refine against real coverage stats from the
// rijksmuseum-suriname-collection dataset.
const DATA = [
  { field: 'Title', coverage: 100 },
  { field: 'Creator', coverage: 92 },
  { field: 'Date', coverage: 88 },
  { field: 'Medium', coverage: 84 },
  { field: 'IIIF manifest', coverage: 100 },
  { field: 'Subject keywords', coverage: 71 },
  { field: 'Place name (free-text)', coverage: 58 },
  { field: 'Place name (linked)', coverage: 12 },
  { field: 'Coordinates', coverage: 4 },
];

function color(v: number) {
  if (v >= 80) return 'var(--teal-strong)';
  if (v >= 50) return 'var(--teal-bright)';
  if (v >= 20) return 'var(--teal-soft)';
  return 'rgba(11,60,52,0.25)';
}

export function MetadataGapsChart() {
  return (
    <div className="h-full w-full min-h-[320px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={DATA}
          layout="vertical"
          margin={{ top: 8, right: 32, bottom: 8, left: 0 }}
        >
          <CartesianGrid horizontal={false} stroke="rgba(11,60,52,0.08)" />
          <XAxis
            type="number"
            domain={[0, 100]}
            tickFormatter={(v) => `${v}%`}
            stroke="rgba(11,60,52,0.5)"
            fontSize={11}
          />
          <YAxis
            type="category"
            dataKey="field"
            stroke="rgba(11,60,52,0.7)"
            width={170}
            fontSize={12}
          />
          <Bar dataKey="coverage" radius={[0, 2, 2, 0]}>
            {DATA.map((d) => (
              <Cell key={d.field} fill={color(d.coverage)} />
            ))}
            <LabelList
              dataKey="coverage"
              position="right"
              formatter={(v: unknown) => `${String(v)}%`}
              fill="rgba(11,60,52,0.7)"
              fontSize={11}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
