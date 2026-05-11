'use client';

import { useMemo, useState } from 'react';
import { generateSamplePoints, HexHeatmap } from './HexHeatmap';

type TimeSliderProps = {
  yearStart?: number;
  yearEnd?: number;
};

export function TimeSlider({
  yearStart = 1845,
  yearEnd = 1910,
}: TimeSliderProps) {
  const [year, setYear] = useState<number>(yearStart + 25);
  const window = 5; // ± years
  const points = useMemo(() => generateSamplePoints(), []);

  const filteredCount = useMemo(
    () =>
      points.filter((p) => p.year >= year - window && p.year <= year + window)
        .length,
    [points, year],
  );

  return (
    <div className="flex h-full w-full flex-col">
      <div className="relative min-h-0 flex-1">
        <HexHeatmap
          points={points}
          yearMin={year - window}
          yearMax={year + window}
        />
      </div>
      <div className="mt-4 px-2">
        <div className="flex items-end justify-between text-xs text-ink/70">
          <span>{yearStart}</span>
          <span className="text-3xl font-semibold tabular-nums text-(--deep-teal)">
            {year - window} – {year + window}
          </span>
          <span>{yearEnd}</span>
        </div>
        <input
          type="range"
          min={yearStart + window}
          max={yearEnd - window}
          step={1}
          value={year}
          onChange={(e) => setYear(Number.parseInt(e.target.value, 10))}
          className="mt-2 w-full accent-(--teal-strong)"
          aria-label="Year"
        />
        <p className="mt-2 text-xs uppercase tracking-[0.25em] text-ink/60">
          {filteredCount} works in this window
        </p>
      </div>
    </div>
  );
}
