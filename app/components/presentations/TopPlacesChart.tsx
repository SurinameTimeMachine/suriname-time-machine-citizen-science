'use client';

import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

export type TopPlace = {
  name: string;
  count: number;
  lat?: number | null;
  lng?: number | null;
};

type TopPlacesChartProps = {
  places?: TopPlace[];
  max?: number;
};

function colour(count: number, top: number): string {
  const r = count / top;
  if (r > 0.6) return 'var(--deep-teal)';
  if (r > 0.3) return 'var(--teal-strong)';
  if (r > 0.1) return 'var(--teal-bright)';
  return 'var(--teal-soft)';
}

/**
 * Horizontal bar chart of the most-represented Suriname-region place
 * names in the Rijksmuseum dataset.
 */
export function TopPlacesChart({ places = [], max = 12 }: TopPlacesChartProps) {
  const data = places.slice(0, max);
  const top = data[0]?.count ?? 1;
  return (
    <div className="h-full w-full min-h-[320px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 8, right: 56, bottom: 8, left: 0 }}
        >
          <XAxis
            type="number"
            stroke="rgba(11,60,52,0.5)"
            fontSize={11}
            tickFormatter={(v: unknown) => String(v)}
          />
          <YAxis
            type="category"
            dataKey="name"
            stroke="rgba(11,60,52,0.75)"
            width={170}
            fontSize={12}
          />
          <Bar dataKey="count" radius={[0, 2, 2, 0]}>
            {data.map((d) => (
              <Cell key={d.name} fill={colour(d.count, top)} />
            ))}
            <LabelList
              dataKey="count"
              position="right"
              fill="rgba(11,60,52,0.75)"
              fontSize={11}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
