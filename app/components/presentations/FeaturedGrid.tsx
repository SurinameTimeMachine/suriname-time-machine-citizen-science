'use client';

export type FeaturedItem = {
  obj: string;
  title: string;
  creator: string;
  year: number;
  thumb: string;
  image?: string;
  place: string;
  type?: string;
  pid?: string;
  wikimedia?: string;
};

type FeaturedGridProps = {
  items?: FeaturedItem[];
  /** Maximum items rendered (sampled across decades). */
  max?: number;
};

/**
 * Image-tile grid for real Rijksmuseum × Suriname highlights.
 * Each tile shows the thumbnail (from Micr.io / IIIF) plus year & place.
 */
export function FeaturedGrid({ items = [], max = 24 }: FeaturedGridProps) {
  const visible = items.slice(0, max);
  return (
    <div className="grid h-full w-full auto-rows-fr grid-cols-2 gap-2 overflow-hidden sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {visible.map((it) => (
        <a
          key={it.obj}
          href={it.pid ?? '#'}
          target="_blank"
          rel="noreferrer noopener"
          className="relative block overflow-hidden bg-(--deep-teal) ring-1 ring-white/10 transition hover:ring-(--teal-bright)"
          title={`${it.title} · ${it.creator}, ${it.year}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- external IIIF host */}
          <img
            src={it.thumb}
            alt={it.title || it.place}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-90 transition group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-2 py-1.5 text-[10px] leading-tight text-white">
            <div className="font-semibold tabular-nums">{it.year}</div>
            <div className="truncate opacity-85">{it.place}</div>
          </div>
        </a>
      ))}
    </div>
  );
}
