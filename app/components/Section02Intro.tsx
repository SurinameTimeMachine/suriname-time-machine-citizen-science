import Image from 'next/image';
import type { ReactNode } from 'react';
import type { MediaAsset } from './types';

type Section02IntroProps = {
  storyParagraphs: string[];
  sourceParagraph: string;
  portraitAsset: MediaAsset;
  eyebrow: string;
  children?: ReactNode;
};

export function Section02Intro({
  storyParagraphs,
  sourceParagraph,
  portraitAsset,
  eyebrow,
  children,
}: Section02IntroProps) {
  return (
    <section id="story" className="relative isolate -mt-12 space-y-10 pt-8">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(11,60,52,0.05),transparent_60%)]" />
      <div className="angled-card relative z-10 -mt-6 px-8 py-10">
        <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-ink/70">
          <span
            className="inline-flex h-3 w-3 -skew-x-12 bg-teal-strong"
            aria-hidden
          />
          {eyebrow}
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-4">
            {storyParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="space-y-4">
            <figure className="space-y-2">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={portraitAsset.src}
                  alt={portraitAsset.alt}
                  fill
                  sizes="(min-width: 1024px) 320px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="text-xs uppercase tracking-[0.3em] text-ink/70">
                {portraitAsset.caption}
              </figcaption>
            </figure>
            <p className="text-sm text-ink/70">{sourceParagraph}</p>
          </div>
        </div>
      </div>
      {children ? (
        <div className="relative z-10">
          <div className="pointer-events-none absolute inset-y-0 -left-6 hidden w-6 bg-[linear-gradient(180deg,rgba(11,60,52,0.12),transparent)] lg:block" />
          <div className="relative bg-white/95 px-6 py-6 shadow-[0_25px_60px_rgba(0,30,24,0.08)] ring-1 ring-white/60">
            {children}
          </div>
        </div>
      ) : null}
    </section>
  );
}
