import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 're:Charted Documentatie | Suriname Tijdmachine',
  description:
    'Nederlandse handleiding voor re:Charted — het annotatieplatform voor historische kaarten.',
  robots: { index: false, follow: false },
};

export default function ReChartedDocumentatiePage() {
  return (
    <div className="min-h-screen bg-(--cream)">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-ink/5 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
          <Link
            href="/burgerwetenschap"
            className="flex items-center gap-2 text-sm text-ink/60 transition-colors hover:text-teal-strong"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Terug naar Burgerwetenschap
          </Link>
          <span className="text-xs uppercase tracking-[0.25em] text-ink/40">
            STM
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-surface px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="flag-label mb-4 text-white/80">Suriname Tijdmachine</p>
          <h1 className="mb-6 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            re:Charted Documentatie
          </h1>
          <p className="max-w-2xl text-lg text-white/80">
            Nederlandse handleiding voor het annoteren van historische kaarten
            met re:Charted.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl space-y-8">
          <div className="rounded-sm border border-slate-200 bg-white p-8 shadow-[0_15px_35px_rgba(0,30,24,0.08)]">
            <div className="space-y-4 text-center">
              <p className="text-lg font-semibold text-ink">
                Binnenkort beschikbaar
              </p>
              <p className="text-sm leading-relaxed text-ink/70">
                De Nederlandse versie van de re:Charted documentatie is in
                voorbereiding. In de tussentijd kunt u de Engelstalige versie
                raadplegen.
              </p>
              <a
                href="https://necessaryreunions.org/documentation"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-teal-strong underline decoration-teal-strong/40 underline-offset-2 transition-colors hover:text-teal-strong/80"
              >
                re:Charted Documentation (English)
                <svg
                  className="h-3.5 w-3.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-ink/5 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-ink/50">
            <p>Projectcoördinator · Huygens Instituut</p>
            <p>Suriname Time Machine © {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
