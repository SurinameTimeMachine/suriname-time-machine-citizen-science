import Image from 'next/image';
import Link from 'next/link';
import type {
  CitizenScienceContent,
  CitizenScienceEvent,
  Workshop,
} from '../content/types';
import { RichText } from './RichText';

type CitizenSciencePageProps = {
  content: CitizenScienceContent;
};

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? 'h-4 w-4 shrink-0 opacity-60'}
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

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? 'h-5 w-5 shrink-0 text-teal-strong'}
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

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? 'h-5 w-5 shrink-0 text-teal-strong'}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-teal-strong"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function WorkshopCard({ workshop }: { workshop: Workshop }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-sm bg-white shadow-[0_4px_20px_rgba(0,30,24,0.08)] ring-1 ring-ink/5">
      <div className="border-b border-ink/5 bg-sand px-5 py-4">
        <h3 className="text-lg font-semibold text-ink">{workshop.title}</h3>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <RichText className="text-sm leading-relaxed text-ink/70">
          {workshop.description}
        </RichText>
        <div className="mt-auto space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-strong">
            Resources
          </p>
          <ul className="space-y-2">
            {workshop.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={link.href.startsWith('/') ? undefined : '_blank'}
                  rel={
                    link.href.startsWith('/')
                      ? undefined
                      : 'noopener noreferrer'
                  }
                  className="group flex items-start gap-2 rounded-sm bg-ink/2 px-3 py-2.5 ring-1 ring-ink/5 transition-colors hover:bg-teal-strong/5 hover:ring-teal-strong/20"
                >
                  <ExternalLinkIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-strong opacity-60 transition-opacity group-hover:opacity-100" />
                  <div className="min-w-0">
                    <span className="text-sm font-medium text-ink group-hover:text-teal-strong">
                      {link.label}
                    </span>
                    {link.description && (
                      <p className="mt-0.5 text-xs leading-snug text-ink/50">
                        {link.description}
                      </p>
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? 'h-5 w-5'}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function EventBlock({
  entry,
  ui,
  defaultOpen,
}: {
  entry: CitizenScienceEvent;
  ui: CitizenScienceContent['ui'];
  defaultOpen?: boolean;
}) {
  const { event, partners, workshops } = entry;

  return (
    <article className="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-[0_15px_35px_rgba(0,30,24,0.08)]">
      <details open={defaultOpen}>
        {/* Collapsible summary: event title + meta */}
        <summary className="group cursor-pointer list-none bg-(--deep-teal) px-6 py-5 [&::-webkit-details-marker]:hidden">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                {event.title}
              </h2>
              <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-white/70">
                <span className="flex items-center gap-1.5">
                  <CalendarIcon className="h-4 w-4 shrink-0 text-white/70" />
                  {event.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <ClockIcon className="h-4 w-4 shrink-0 text-white/70" />
                  {event.time}
                </span>
              </div>
            </div>
            <ChevronIcon className="mt-1 h-5 w-5 shrink-0 text-white/60 transition-transform group-open:rotate-180" />
          </div>
        </summary>

        {/* Expandable body */}
        <div className="divide-y divide-ink/5">
          {/* Event details */}
          <div className="space-y-4 px-6 py-6">
            <div className="flex flex-wrap gap-6 text-sm text-ink/80">
              <span className="flex items-center gap-2">
                <MapPinIcon />
                {event.locationHref ? (
                  <a
                    href={event.locationHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-ink/20 underline-offset-2 transition-colors hover:text-teal-strong"
                  >
                    {event.location}
                  </a>
                ) : (
                  event.location
                )}
              </span>
            </div>

            <RichText className="text-sm leading-relaxed text-ink/70">
              {event.description}
            </RichText>

            {event.externalEventHref && (
              <a
                href={event.externalEventHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-teal-strong underline decoration-teal-strong/40 underline-offset-2 transition-colors hover:text-teal-strong/80"
              >
                {event.externalEventLabel}
                <ExternalLinkIcon className="h-3.5 w-3.5 shrink-0" />
              </a>
            )}
          </div>

          {/* Partners subcard */}
          <div className="px-6 py-6">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-teal-strong">
              {ui.sections.partners}
            </h3>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {partners.map((partner) => {
                const inner = (
                  <div className="flex h-full items-center gap-3 rounded-sm bg-(--cream) px-4 py-3 ring-1 ring-ink/5 transition-all hover:ring-teal-strong/20">
                    {partner.logo && (
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-sm ${partner.darkBg ? 'bg-(--deep-teal) p-1' : ''}`}
                      >
                        <Image
                          src={partner.logo}
                          alt=""
                          width={32}
                          height={32}
                          className="h-full w-full object-contain"
                          unoptimized
                        />
                      </div>
                    )}
                    <span className="text-sm font-medium text-ink">
                      {partner.name}
                    </span>
                  </div>
                );

                return partner.href ? (
                  <a
                    key={partner.id}
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={partner.id}>{inner}</div>
                );
              })}
            </div>
          </div>

          {/* Workshops subcard */}
          <div className="px-6 py-6">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-teal-strong">
              {ui.sections.workshops}
            </h3>

            <div className="grid gap-6 lg:grid-cols-3">
              {workshops.map((workshop) => (
                <WorkshopCard key={workshop.id} workshop={workshop} />
              ))}
            </div>
          </div>
        </div>
      </details>
    </article>
  );
}

export function CitizenSciencePage({ content }: CitizenSciencePageProps) {
  const { ui, events } = content;
  const otherLocalePath =
    content.locale === 'nl' ? '/en/participatory-science' : '/burgerwetenschap';

  return (
    <div className="min-h-screen bg-(--cream)">
      {/* Header */}
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

      {/* Events */}
      <main className="mx-auto max-w-6xl space-y-10 px-4 py-12 sm:px-6 lg:px-10">
        {events.map((entry, index) => (
          <EventBlock
            key={entry.id}
            entry={entry}
            ui={ui}
            defaultOpen={index === 0}
          />
        ))}
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
