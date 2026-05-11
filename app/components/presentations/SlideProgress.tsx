'use client';

import type { SlideContent } from '../../content/presentationTypes';

type SlideProgressProps = {
  current: number;
  total: number;
  ofLabel: string;
  slides: SlideContent[];
  onJump: (index: number) => void;
};

export function SlideProgress({
  current,
  total,
  ofLabel,
  slides,
  onJump,
}: SlideProgressProps) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 flex flex-col gap-1.5 px-6 pb-3">
      <div className="pointer-events-auto flex h-1 w-full gap-[2px]">
        {slides.map((s, i) => {
          const active = i === current;
          const done = i < current;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => onJump(i)}
              aria-label={`${s.title} (${i + 1} ${ofLabel} ${total})`}
              aria-current={active ? 'true' : undefined}
              className={[
                'h-full flex-1 cursor-pointer transition-colors',
                active
                  ? 'bg-(--teal-bright)'
                  : done
                    ? 'bg-(--teal-soft)/70'
                    : 'bg-white/15 hover:bg-white/30',
              ].join(' ')}
            />
          );
        })}
      </div>
      <div className="pointer-events-none flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-white/60 mix-blend-difference">
        <span>{slides[current]?.eyebrow ?? ''}</span>
        <span>
          {current + 1} {ofLabel} {total}
        </span>
      </div>
    </div>
  );
}
