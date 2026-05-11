'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export type DecadeRow = {
  decade: number;
  photo: number;
  painting: number;
  drawing: number;
  other: number;
  total: number;
};

type MediumOverTimeProps = {
  decades?: DecadeRow[];
  /** Lower-bound decade to show (inclusive). */
  from?: number;
  /** Upper-bound decade to show (inclusive). */
  to?: number;
};

/**
 * Stacked bar chart showing how the medium of Suriname-related works in
 * the Rijksmuseum collection shifts from drawings/paintings to
 * photographs over the 19th and early 20th centuries.
 */
export function MediumOverTime({
  decades = [],
  from = 1820,
  to = 1970,
}: MediumOverTimeProps) {
  const data = decades.filter((d) => d.decade >= from && d.decade <= to);
  return (
    <div className="h-full w-full min-h-[320px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 8, right: 16, bottom: 24, left: 0 }}
        >
          <CartesianGrid stroke="rgba(11,60,52,0.08)" vertical={false} />
          <XAxis
            dataKey="decade"
            stroke="rgba(11,60,52,0.6)"
            fontSize={11}
            tickFormatter={(v: unknown) => `${String(v)}s`}
          />
          <YAxis stroke="rgba(11,60,52,0.5)" fontSize={11} />
          <Tooltip
            cursor={{ fill: 'rgba(11,60,52,0.04)' }}
            labelFormatter={(v: unknown) => `${String(v)}s`}
            contentStyle={{
              background: 'white',
              border: '1px solid rgba(11,60,52,0.15)',
              fontSize: 12,
            }}
          />
          <Legend
            verticalAlign="bottom"
            height={28}
            iconType="square"
            wrapperStyle={{ fontSize: 11 }}
          />
          <Bar
            dataKey="drawing"
            stackId="m"
            fill="var(--teal-soft)"
            name="Drawing / print"
          />
          <Bar
            dataKey="painting"
            stackId="m"
            fill="var(--teal-bright)"
            name="Painting"
          />
          <Bar
            dataKey="photo"
            stackId="m"
            fill="var(--teal-strong)"
            name="Photograph"
          />
          <Bar
            dataKey="other"
            stackId="m"
            fill="rgba(11,60,52,0.35)"
            name="Other"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
