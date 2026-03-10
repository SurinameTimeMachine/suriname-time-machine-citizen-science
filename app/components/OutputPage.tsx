import Link from 'next/link';
import type { OutputCategory, OutputContent, OutputItem } from '../content/types';

type OutputPageProps = {
  content: OutputContent;
};

function groupByCategory(
  items: OutputItem[],
): Record<OutputCategory, OutputItem[]> {
  const grouped = items.reduce(
    (acc, item) => {
      acc[item.category].push(item);
      return acc;
    },
    {
      events: [],
      articles: [],
      presentations: [],
      data: [],
      code: [],
      media: [],
    } as Record<OutputCategory, OutputItem[]>,
  );

  // Sort each category by date descending
  for (const key of Object.keys(grouped) as OutputCategory[]) {
    grouped[key].sort((a, b) => b.isoDate.localeCompare(a.isoDate));
  }

  return grouped;
}

function ExternalLinkIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0 opacity-50 transition-opacity group-hover:opacity-100"
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
  );
}

function OutputCard({ item }: { item: OutputItem }) {
  const isExternal =
    item.href.startsWith('http://') || item.href.startsWith('https://');

  const content = (
    <>
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-semibold text-ink group-hover:text-teal-strong">
          {item.title}
        </h3>
        {isExternal && <ExternalLinkIcon />}
      </div>
      <p className="mt-1 text-sm leading-relaxed text-ink/70">
        {item.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink/50">
        <span>{item.date}</span>
        {item.authors && <span>{item.authors}</span>}
        {item.venue && <span className="italic">{item.venue}</span>}
        {item.doi && (
          <span className="font-mono text-[0.65rem]">
            DOI: {item.doi}
          </span>
        )}
      </div>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-sm border border-ink/5 bg-white p-5 shadow-[0_2px_12px_rgba(0,30,24,0.06)] transition-all hover:shadow-[0_4px_20px_rgba(0,30,24,0.10)] hover:ring-1 hover:ring-teal-strong/20"
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={item.href}
      className="group block rounded-sm border border-ink/5 bg-white p-5 shadow-[0_2px_12px_rgba(0,30,24,0.06)] transition-all hover:shadow-[0_4px_20px_rgba(0,30,24,0.10)] hover:ring-1 hover:ring-teal-strong/20"
    >
      {content}
    </Link>
  );
}

function CategorySection({
  title,
  items,
}: {
  title: string;
  items: OutputItem[];
}) {
  if (items.length === 0) return null;

  return (
    <section className="space-y-4">
      <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-strong">
        {title}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <OutputCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export function OutputPage({ content }: OutputPageProps) {
  const { ui, items } = content;
  const grouped = groupByCategory(items);
  const otherLocalePath =
    content.locale === 'nl' ? '/en/output' : '/output';

  return (
    <div className="min-h-screen bg-(--cream)">
      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b border-ink/5 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
          <div className="flex items-center gap-4">
            <Link
              href={content.locale === 'nl' ? '/' : '/en'}
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
              {ui.navigation.backToHome}
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-[0.25em] text-ink/40">
              {ui.navigation.projectCode}
            </span>
            <Link
              href={otherLocalePath}
              className="rounded-sm border border-ink/10 px-2.5 py-1 text-xs font-medium uppercase tracking-[0.2em] text-ink/60 transition-colors hover:border-teal-strong/30 hover:text-teal-strong"
            >
              {ui.navigation.languageToggleLabel}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-surface px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="flag-label mb-4 text-white/80">{ui.hero.tagline}</p>
          <h1 className="mb-6 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            {ui.hero.title}
          </h1>
          <p className="max-w-2xl text-lg text-white/80">{ui.hero.lead}</p>
        </div>
      </section>

      {/* Output Grid */}
      <main className="mx-auto max-w-6xl space-y-12 px-4 py-12 sm:px-6 lg:px-10">
        <CategorySection
          title={ui.categories.events}
          items={grouped.events}
        />
        <CategorySection
          title={ui.categories.articles}
          items={grouped.articles}
        />
        <CategorySection
          title={ui.categories.presentations}
          items={grouped.presentations}
        />
        <CategorySection title={ui.categories.data} items={grouped.data} />
        <CategorySection title={ui.categories.code} items={grouped.code} />
        <CategorySection title={ui.categories.media} items={grouped.media} />
      </main>

      {/* Footer */}
      <footer className="border-t border-ink/5 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-ink/50">
            <p>
              {ui.footer.coordinatorLine} · {ui.footer.organizationLabel}
            </p>
            <p>Suriname Time Machine © {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
