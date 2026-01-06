import Image from 'next/image';
import { RichText } from './RichText';
import type { MediaAsset } from './types';

type Section04MethodologyProps = {
  missionParagraphs: string[];
  mapParagraphs: string[];
  mapAsset: MediaAsset;
  teamParagraphs: string[];
  employees: string[];
  infrastructureParagraph: string;
  title: string;
  projectTeamTitle: string;
  relatedEmployeesLabel: string;
  digitalInfrastructureTitle: string;
  departmentsLabel: string;
  departmentsValue: string;
  tagsLabel: string;
  tagsValue: string;
};

export function Section04Methodology({
  missionParagraphs,
  mapParagraphs,
  mapAsset,
  teamParagraphs,
  employees,
  infrastructureParagraph,
  title,
  projectTeamTitle,
  relatedEmployeesLabel,
  digitalInfrastructureTitle,
  departmentsLabel,
  departmentsValue,
  tagsLabel,
  tagsValue,
}: Section04MethodologyProps) {
  return (
    <section
      id="methodology"
      className="cut-corner space-y-10 border border-slate-200 bg-white px-8 py-12"
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">{title}</h2>
          {missionParagraphs.map((paragraph, index) => (
            <RichText key={index}>{paragraph}</RichText>
          ))}
        </div>
        <div className="space-y-4 bg-sand px-6 py-6 text-sm shadow-[0_15px_35px_rgba(0,30,24,0.08)] ring-1 ring-white/40">
          <figure className="space-y-2">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={mapAsset.src}
                alt={mapAsset.alt}
                fill
                sizes="(min-width: 1024px) 360px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="text-xs uppercase tracking-[0.3em] text-ink/70">
              {mapAsset.caption}
            </figcaption>
          </figure>
          {mapParagraphs.map((paragraph, index) => (
            <RichText key={index} className="text-ink/80">
              {paragraph}
            </RichText>
          ))}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <article className="h-full bg-white px-6 py-6 text-sm shadow-[0_15px_35px_rgba(0,30,24,0.08)] ring-1 ring-white/40">
          <h3 className="text-lg font-semibold text-ink">{projectTeamTitle}</h3>
          <div className="mt-3 space-y-4 text-ink">
            {teamParagraphs.map((paragraph, index) => (
              <RichText key={index}>{paragraph}</RichText>
            ))}
          </div>
          <p className="mt-5 text-xs uppercase tracking-[0.3em] text-teal-strong">
            {relatedEmployeesLabel}
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-ink">
            {employees.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="bg-white px-6 py-6 text-sm shadow-[0_15px_35px_rgba(0,30,24,0.08)] ring-1 ring-white/40">
          <h3 className="text-lg font-semibold text-ink">
            {digitalInfrastructureTitle}
          </h3>
          <RichText className="mt-3 text-ink">
            {infrastructureParagraph}
          </RichText>
          <div className="mt-5 grid gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-teal-strong">
                {departmentsLabel}
              </p>
              <p className="text-ink">{departmentsValue}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-teal-strong">
                {tagsLabel}
              </p>
              <p className="text-ink">{tagsValue}</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
