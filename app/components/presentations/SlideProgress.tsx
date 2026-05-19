'use client';

import type {
  PresentationContent,
  SlideContent,
} from '../../content/presentationTypes';

type SlideProgressProps = {
  current: number;
  total: number;
  ofLabel: string;
  slides: SlideContent[];
  meta: PresentationContent['meta'];
  onJump: (index: number) => void;
};

export function SlideProgress({
  current,
  total,
  ofLabel,
  slides,
  meta,
  onJump,
}: SlideProgressProps) {
  const isTitle = current === 0;

  // Footer text for slide 1: use the eyebrow from the title slide.
  // Footer text for slides 2+: show the presentation title and presenter byline.
  const firstSlide = slides[0];
  const presentationTitle =
    firstSlide?.title && firstSlide.subtitle
      ? `${firstSlide.title}: ${firstSlide.subtitle}`
      : (firstSlide?.title ?? '');
  const byline = [meta.presenters.join(' & '), meta.date].join(' \u00B7 ');

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 flex flex-col gap-1.5 bg-linear-to-t from-black/50 to-transparent px-6 pb-3 pt-4">
      <div className="pointer-events-auto flex h-1 w-full gap-0.5">
        {slides.map((s, i) => {
          const active = i === current;
          const done = i < current;
          return (
            <button
              key={`progress-${s.id}`}
              type="button"
              onClick={() => onJump(i)}
              aria-label={`${s.title} (${i + 1} ${ofLabel} ${total})`}
              aria-current={active ? 'true' : undefined}
              className={[
                'h-full flex-1 cursor-pointer transition-colors',
                active
                  ? 'bg-teal-bright'
                  : done
                    ? 'bg-(--teal-soft)/70'
                    : 'bg-white/15 hover:bg-white/30',
              ].join(' ')}
            />
          );
        })}
      </div>
      <div className="pointer-events-none flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.3em] text-white/70">
        {isTitle ? (
          <>
            <span className="truncate">{slides[current]?.eyebrow ?? ''}</span>
            <span className="shrink-0">
              {current + 1} {ofLabel} {total}
            </span>
          </>
        ) : (
          <>
            <span className="truncate">{presentationTitle}</span>
            <span className="shrink-0 text-right">
              {byline} &middot; {current + 1} {ofLabel} {total}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
