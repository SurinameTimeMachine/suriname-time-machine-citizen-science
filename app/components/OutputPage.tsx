import Link from 'next/link';
import type {
  OutputCategory,
  OutputContent,
  OutputItem,
} from '../content/types';

type OutputPageProps = {
  content: OutputContent;
};

const CATEGORY_ORDER: OutputCategory[] = [
  'events',
  'articles',
  'presentations',
  'data',
  'code',
  'media',
];

const categoryAccent: Record<OutputCategory, string> = {
  events: 'border-l-[var(--deep-teal)]',
  articles: 'border-l-[var(--teal-strong)]',
  presentations: 'border-l-[var(--teal-bright)]',
  data: 'border-l-[var(--teal-soft)]',
  code: 'border-l-[var(--deep-teal)]',
  media: 'border-l-[var(--teal-strong)]',
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

  for (const key of Object.keys(grouped) as OutputCategory[]) {
    grouped[key].sort((a, b) => b.isoDate.localeCompare(a.isoDate));
  }

  return grouped;
}

/* ── Category icons ───────────────────────────────────────────────── */

function CalendarIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  );
}

function MicrophoneIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4M12 15a3 3 0 003-3V5a3 3 0 00-6 0v7a3 3 0 003 3z"
      />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  );
}

function NewspaperIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
      />
    </svg>
  );
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

const categoryIcon: Record<OutputCategory, () => React.JSX.Element> = {
  events: CalendarIcon,
  articles: BookIcon,
  presentations: MicrophoneIcon,
  data: DatabaseIcon,
  code: CodeIcon,
  media: NewspaperIcon,
};

/* ── Cards ────────────────────────────────────────────────────────── */

function OutputCard({
  item,
  isNewest,
}: {
  item: OutputItem;
  isNewest: boolean;
}) {
  const isExternal =
    item.href.startsWith('http://') || item.href.startsWith('https://');

  const accentBorder = categoryAccent[item.category];

  const cardBody = (
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
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink/60">
        <span>{item.date}</span>
        {item.authors && <span>{item.authors}</span>}
        {item.venue && <span className="italic">{item.venue}</span>}
        {item.doi && (
          <span className="font-mono text-[0.65rem]">DOI: {item.doi}</span>
        )}
      </div>
    </>
  );

  const className = [
    'group block border border-slate-200 border-l-[3px] bg-white p-5',
    'shadow-[0_15px_35px_rgba(0,30,24,0.08)]',
    'transition-all hover:shadow-[0_20px_45px_rgba(0,30,24,0.12)] hover:ring-1 hover:ring-teal-strong/20',
    accentBorder,
    isNewest ? 'ring-1 ring-teal-strong/15' : '',
  ].join(' ');

  if (isExternal) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {cardBody}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className}>
      {cardBody}
    </Link>
  );
}

/* ── Category sections ────────────────────────────────────────────── */

function CategorySection({
  title,
  items,
  category,
  even,
}: {
  title: string;
  items: OutputItem[];
  category: OutputCategory;
  even: boolean;
}) {
  if (items.length === 0) return null;

  const Icon = categoryIcon[category];
  const newestId = items[0]?.id;

  return (
    <section className={`relative ${even ? 'bg-white' : 'bg-(--cream)'}`}>
      {/* Subtle gradient overlay on white sections */}
      {even && (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(52,209,179,0.06),transparent_60%)]" />
      )}
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-10">
        <div className="mb-6 flex items-center gap-3">
          <span className="text-teal-strong">
            <Icon />
          </span>
          <h2 className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-strong">
            {title}
          </h2>
          <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-teal-strong/10 px-1.5 text-[0.65rem] font-semibold tabular-nums text-teal-strong">
            {items.length}
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <OutputCard
              key={`output-${item.id}`}
              item={item}
              isNewest={item.id === newestId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Summary stats strip ──────────────────────────────────────────── */

function StatsStrip({
  grouped,
  ui,
}: {
  grouped: Record<OutputCategory, OutputItem[]>;
  ui: OutputContent['ui'];
}) {
  const stats: { label: string; count: number }[] = CATEGORY_ORDER.filter(
    (cat) => grouped[cat].length > 0,
  ).map((cat) => ({
    label: ui.categories[cat],
    count: grouped[cat].length,
  }));

  return (
    <div className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-4 sm:px-6 lg:px-10">
        {stats.map((s) => (
          <span
            key={`stat-${s.label}`}
            className="flex items-center gap-1.5 text-xs text-ink/60"
          >
            <span className="font-semibold tabular-nums text-teal-strong">
              {s.count}
            </span>
            {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Page ──────────────────────────────────────────────────────────── */

export function OutputPage({ content }: OutputPageProps) {
  const { ui, items } = content;
  const grouped = groupByCategory(items);
  const otherLocalePath = content.locale === 'nl' ? '/en/output' : '/output';

  const categories: {
    key: OutputCategory;
    title: string;
    items: OutputItem[];
  }[] = CATEGORY_ORDER.filter((cat) => grouped[cat].length > 0).map((cat) => ({
    key: cat,
    title: ui.categories[cat],
    items: grouped[cat],
  }));

  return (
    <div className="min-h-screen bg-(--cream) text-ink">
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

      {/* Stats strip */}
      <StatsStrip grouped={grouped} ui={ui} />

      {/* Category sections with alternating backgrounds */}
      <main>
        {categories.map((cat, i) => (
          <CategorySection
            key={`cat-${cat.key}`}
            title={cat.title}
            items={cat.items}
            category={cat.key}
            even={i % 2 === 0}
          />
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-10">
          <div className="flex flex-col gap-2 text-sm text-ink/70 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {ui.footer.organizationLabel}
            </p>
            <p>{ui.footer.coordinatorLine}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
