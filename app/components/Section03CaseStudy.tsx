import Image from 'next/image';
import { RichText } from './RichText';
import { SourcesPanel } from './SourcesPanel';
import type { MediaAsset } from './types';

type Source = {
  label: string;
  href: string;
  institution?: string;
};

type Section03CaseStudyProps = {
  plantationParagraphs: string[];
  plantationCaptions: string[];
  plantationAsset: MediaAsset;
  sourceParagraph: string;
  sources: Source[];
  sourcesTitle: string;
  sourcesDescription: string;
  label: string;
  title: string;
};

export function Section03CaseStudy({
  plantationParagraphs,
  plantationCaptions,
  plantationAsset,
  sourceParagraph,
  sources,
  sourcesTitle,
  sourcesDescription,
  label,
  title,
}: Section03CaseStudyProps) {
  return (
    <section
      id="case-study"
      className="relative overflow-hidden border border-white/15 bg-[(--deep-teal) px-8 py-14 shadow-[0_45px_90px_rgba(0,0,0,0.35)] [clip-path:polygon(3.5rem_0,100%_0,100%_100%,0_100%,0_3.5rem)]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-20 top-10 h-40 w-72 rotate-12 bg-white/10" />
        <div className="absolute bottom-0 right-0 h-48 w-64 -translate-y-6 translate-x-10 bg-(--teal-bright)/20" />
      </div>
      <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr,0.9fr]">
        <div className="space-y-6">
          <p className="flag-label">{label}</p>
          <h2 className="text-3xl font-semibold">{title}</h2>
          {plantationParagraphs.map((paragraph, index) => (
            <RichText key={index}>{paragraph}</RichText>
          ))}
          <p>{sourceParagraph}</p>
          <SourcesPanel
            title={sourcesTitle}
            description={sourcesDescription}
            sources={sources}
          />
        </div>
        <div className="space-y-4">
          <figure className="space-y-3">
            <div className="relative h-60 overflow-hidden border border-white/20">
              <Image
                src={plantationAsset.src}
                alt={plantationAsset.alt}
                fill
                sizes="(min-width: 1024px) 360px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="text-xs uppercase tracking-[0.3em] ">
              {plantationAsset.caption}
            </figcaption>
          </figure>
          <div className="grid gap-3 text-sm">
            {plantationCaptions.map((caption, index) => (
              <p
                key={`${caption}-${index}`}
                className="border border-white/20 px-4 py-3"
              >
                {caption}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
