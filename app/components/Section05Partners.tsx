import Image from 'next/image';
import { RichText } from './RichText';
import type { MediaAsset } from './types';

type Section05PartnersProps = {
  partners: string[];
  mapAsset: MediaAsset;
  title: string;
  intro: string;
  figureSuffix: string;
};

export function Section05Partners({
  partners,
  mapAsset,
  title,
  intro,
  figureSuffix,
}: Section05PartnersProps) {
  return (
    <section
      id="partners"
      className="cut-corner space-y-6 border border-slate-200 bg-white px-8 py-12"
    >
      <h2 className="text-3xl font-semibold">{title}</h2>
      <RichText>{intro}</RichText>
      <ul className="grid gap-3 text-sm text-ink/85 sm:grid-cols-2">
        {partners.map((partner) => (
          <li
            key={partner}
            className="px-4 py-3 text-ink shadow-[0_10px_25px_rgba(0,30,24,0.05)] ring-1 ring-white/50"
          >
            {partner}
          </li>
        ))}
      </ul>
      <figure className="space-y-2">
        <div className="relative h-64 overflow-hidden ring-1 ring-white/40">
          <Image
            src={mapAsset.src}
            alt={mapAsset.alt}
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="text-sm text-ink/70">
          {mapAsset.caption} {figureSuffix}
        </figcaption>
      </figure>
    </section>
  );
}
