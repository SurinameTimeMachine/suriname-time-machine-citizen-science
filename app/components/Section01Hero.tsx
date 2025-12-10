import Image from 'next/image';
import type { MediaAsset, Stat } from './types';

type Section01HeroProps = {
  quickHighlights: string[];
  heroStats: Stat[];
  backgroundAsset?: MediaAsset;
};

export function Section01Hero({
  quickHighlights,
  heroStats,
  backgroundAsset,
}: Section01HeroProps) {
  return (
    <section id="overview" className="hero-surface px-0 py-0">
      <div className="relative overflow-hidden px-6 py-16 lg:px-20">
        {backgroundAsset ? (
          <div className="absolute inset-0">
            <Image
              src={backgroundAsset.src}
              alt="Contextual imagery from the Suriname Time Machine collections"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-35 mix-blend-luminosity"
            />
          </div>
        ) : null}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(0,60,52,0.95),rgba(0,60,52,0.4),rgba(0,60,52,0.9))]" />
        <div className="pointer-events-none absolute -right-16 top-0 h-80 w-80 rotate-12 border border-white/20" />
        <div className="pointer-events-none absolute -right-4 bottom-8 h-48 w-64 bg-(--teal-bright)/50" />
        <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-72 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent)] lg:block" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="flag-label text-white/80">
                SCiTMI • Suriname Citizen Time Machine Incubator
              </p>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                The Suriname Time Machine brings together scattered sources.
              </h1>
              <p className="text-lg text-white/80">
                Users can access everything in one place, without constant
                cross-checking whether data refer to the same people, streets or
                plantations.
              </p>
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">
                Combining the Suriname Time Machine with the KNAW Citizen
                Science Incubator.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                {quickHighlights.map((item) => (
                  <span
                    key={item}
                    className="border border-white/30 px-4 py-1 uppercase tracking-[0.3em]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 pt-2 text-sm">
                <a
                  href="#story"
                  className="inline-flex items-center gap-2 border border-white/40 px-5 py-2 uppercase tracking-[0.25em] text-white transition hover:border-white"
                >
                  Discover SCiTMI
                  <span aria-hidden>↘</span>
                </a>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 bg-white/15 px-5 py-2 uppercase tracking-[0.25em] text-white transition hover:bg-white/25"
                >
                  Download brief
                </button>
              </div>
            </div>
            <div className="space-y-6">
              <figure className="relative h-[360px] overflow-hidden border border-white/20 bg-white/5">
                <Image
                  src="/texture-grid.svg"
                  alt="Geometric texture grid representing SCiTMI datasets."
                  fill
                  sizes="(min-width: 1024px) 360px, 100vw"
                  className="object-cover opacity-50"
                />
                <figcaption className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.35em] text-white/80">
                  SCiTMI field datasets
                </figcaption>
              </figure>
              <aside className="grid gap-4 border border-white/25 bg-white/5 p-6 text-sm text-white/85">
                <p className="text-xs uppercase tracking-[0.35em]">
                  Project snapshot
                </p>
                <dl className="grid gap-4">
                  {heroStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="border-b border-white/15 pb-3 last:border-0"
                    >
                      <dt className="text-[0.8rem] uppercase tracking-[0.3em] text-white/70">
                        {stat.label}
                      </dt>
                      <dd className="text-lg font-semibold text-white">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="text-xs text-white/70">
                  Rooted in Paramaribo and extending across the Atlantic
                  archives network.
                </p>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
