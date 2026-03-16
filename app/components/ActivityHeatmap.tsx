'use client';

import { useMemo, useState } from 'react';
import type { DailyActivity } from '../lib/annorepo';

type ActivityHeatmapProps = {
  data: DailyActivity[];
  locale: string;
  labels: {
    noActivity: string;
    annotation: string;
    annotations: string;
  };
};

const CELL = 8;
const GAP = 2;
const STEP = CELL + GAP;
const ROWS = 7;
const WEEKS = 14; // ~3.5 months
const LABEL_W = 24;
const HEADER_H = 14;

const LEVELS = [
  'var(--teal-soft)',
  'var(--teal-bright)',
  'var(--teal-strong)',
  'var(--deep-teal)',
] as const;

function getLevel(count: number, max: number): number {
  if (count === 0) return -1;
  if (max <= 1) return 0;
  const ratio = count / max;
  if (ratio <= 0.25) return 0;
  if (ratio <= 0.5) return 1;
  if (ratio <= 0.75) return 2;
  return 3;
}

function buildGrid(data: DailyActivity[]) {
  const lookup = new Map(data.map((d) => [d.date, d.count]));

  const today = new Date();
  // Start from (WEEKS * 7 - 1) days ago, aligned to Monday
  const start = new Date(today);
  start.setDate(start.getDate() - WEEKS * 7 + 1);
  // Align to previous Monday (getDay: 0=Sun, 1=Mon, ...)
  const dayOfWeek = start.getDay();
  const daysToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  start.setDate(start.getDate() - daysToMonday);

  const cells: { date: string; count: number; col: number; row: number }[] = [];
  let maxCount = 0;

  const cursor = new Date(start);
  while (cursor <= today) {
    const dateStr = cursor.toISOString().slice(0, 10);
    const count = lookup.get(dateStr) ?? 0;
    if (count > maxCount) maxCount = count;

    // Days since start
    const diffDays = Math.round(
      (cursor.getTime() - start.getTime()) / (1000 * 60 * 60 * 24),
    );
    const col = Math.floor(diffDays / 7);
    const row = diffDays % 7;

    cells.push({ date: dateStr, count, col, row });
    cursor.setDate(cursor.getDate() + 1);
  }

  return { cells, maxCount, start };
}

function formatDate(dateStr: string, locale: string): string {
  return new Date(dateStr + 'T12:00:00').toLocaleDateString(
    locale === 'nl' ? 'nl-NL' : 'en-US',
    { month: 'short', day: 'numeric', year: 'numeric' },
  );
}

function getMonthLabels(
  start: Date,
  totalCols: number,
  locale: string,
): { label: string; col: number }[] {
  const labels: { label: string; col: number }[] = [];
  let lastMonth = -1;

  for (let col = 0; col < totalCols; col++) {
    const d = new Date(start);
    d.setDate(d.getDate() + col * 7);
    const month = d.getMonth();
    if (month !== lastMonth) {
      labels.push({
        label: d.toLocaleDateString(locale === 'nl' ? 'nl-NL' : 'en-US', {
          month: 'short',
        }),
        col,
      });
      lastMonth = month;
    }
  }

  return labels;
}

const DAY_LABELS_EN = ['Mon', '', 'Wed', '', 'Fri', '', ''];
const DAY_LABELS_NL = ['Ma', '', 'Wo', '', 'Vr', '', ''];

export function ActivityHeatmap({
  data,
  locale,
  labels,
}: ActivityHeatmapProps) {
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    text: string;
  } | null>(null);

  const { cells, maxCount, start } = useMemo(() => buildGrid(data), [data]);

  const totalCols =
    cells.length > 0 ? (cells[cells.length - 1]?.col ?? 0) + 1 : WEEKS;
  const svgW = LABEL_W + totalCols * STEP;
  const svgH = HEADER_H + ROWS * STEP;

  const monthLabels = useMemo(
    () => getMonthLabels(start, totalCols, locale),
    [start, totalCols, locale],
  );

  const dayLabels = locale === 'nl' ? DAY_LABELS_NL : DAY_LABELS_EN;

  return (
    <div className="overflow-x-auto">
      <svg
        width={svgW}
        height={svgH + 28}
        viewBox={`0 0 ${svgW} ${svgH + 28}`}
        role="img"
        aria-label="Activity heatmap calendar"
      >
        {/* Month labels */}
        {monthLabels.map((m) => (
          <text
            key={`month-${m.col}`}
            x={LABEL_W + m.col * STEP}
            y={HEADER_H - 5}
            className="fill-ink/50"
            fontSize={8}
            fontFamily="var(--font-geist-sans)"
          >
            {m.label}
          </text>
        ))}

        {/* Day-of-week labels */}
        {dayLabels.map(
          (label, i) =>
            label && (
              <text
                key={`day-${label}`}
                x={LABEL_W - 4}
                y={HEADER_H + i * STEP + CELL / 2 + 3}
                className="fill-ink/40"
                fontSize={7}
                fontFamily="var(--font-geist-sans)"
                textAnchor="end"
              >
                {label}
              </text>
            ),
        )}

        {/* Day cells */}
        {cells.map((cell) => {
          const level = getLevel(cell.count, maxCount);
          const fill = level === -1 ? 'var(--ink)' : LEVELS[level];
          const opacity = level === -1 ? 0.04 : 1;

          return (
            <rect
              key={`cell-${cell.date}`}
              x={LABEL_W + cell.col * STEP}
              y={HEADER_H + cell.row * STEP}
              width={CELL}
              height={CELL}
              rx={0}
              fill={fill}
              opacity={opacity}
              className="transition-opacity duration-100"
              onMouseEnter={(e) => {
                const countText =
                  cell.count === 0
                    ? labels.noActivity
                    : `${cell.count} ${cell.count === 1 ? labels.annotation : labels.annotations}`;
                setTooltip({
                  x: e.clientX,
                  y: e.clientY,
                  text: `${countText} — ${formatDate(cell.date, locale)}`,
                });
              }}
              onMouseLeave={() => setTooltip(null)}
            />
          );
        })}

        {/* Legend */}
        <text
          x={LABEL_W}
          y={svgH + 20}
          className="fill-ink/40"
          fontSize={9}
          fontFamily="var(--font-geist-sans)"
        >
          Less
        </text>
        {[-1, 0, 1, 2, 3].map((level, i) => (
          <rect
            key={`legend-${level}`}
            x={LABEL_W + 30 + i * (CELL + 2)}
            y={svgH + 10}
            width={CELL}
            height={CELL}
            rx={0}
            fill={level === -1 ? 'var(--ink)' : LEVELS[level]}
            opacity={level === -1 ? 0.04 : 1}
          />
        ))}
        <text
          x={LABEL_W + 30 + 5 * (CELL + 2) + 2}
          y={svgH + 20}
          className="fill-ink/40"
          fontSize={9}
          fontFamily="var(--font-geist-sans)"
        >
          More
        </text>
      </svg>

      {/* Tooltip (positioned fixed to avoid SVG overflow issues) */}
      {tooltip && (
        <div
          className="pointer-events-none fixed z-50 bg-(--deep-teal) px-3 py-1.5 text-xs font-medium text-white shadow-lg"
          style={{
            left: tooltip.x + 12,
            top: tooltip.y - 32,
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
}
