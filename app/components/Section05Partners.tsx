import Image from 'next/image';
import type { MediaAsset } from './types';

type Section05PartnersProps = {
  partners: string[];
  mapAsset: MediaAsset;
};

export function Section05Partners({
  partners,
  mapAsset,
}: Section05PartnersProps) {
  return (
    <section
      id="partners"
      className="cut-corner space-y-6 border border-slate-200 bg-white px-8 py-12"
    >
      <h2 className="text-3xl font-semibold">Partners</h2>
      <p>
        The Suriname Time Machine is not only a digital platform but also a
        collaborative network, connecting a wide range of heritage institutions
        and researchers in both Suriname and the Netherlands. Project partners
        include:
      </p>
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
          {mapAsset.caption} The Suriname Time Machine brings this kind of
          historical data digitally to life, making it easy to search and
          explore.
        </figcaption>
      </figure>
    </section>
  );
}
