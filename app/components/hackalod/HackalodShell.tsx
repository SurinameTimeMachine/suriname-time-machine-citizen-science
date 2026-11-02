import type { ReactNode } from 'react';
import { Navigation } from '../Navigation';
import { getDomainLinks, getHeaderNavLinks } from '../navigationConfig';
import { SiteFooter } from '../SiteFooter';

/** Shared page frame (navigation + footer) for the Dutch HackaLOD 2026 report. */
export function HackalodShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-(--cream)">
      <Navigation
        navLinks={getHeaderNavLinks('nl')}
        locale="nl"
        languageToggleLabel="EN"
        domainLinks={getDomainLinks('nl')}
      />
      {children}
      <SiteFooter locale="nl" />
    </div>
  );
}

/** Small uppercase section label, as used on the projects page. */
export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`mb-3 text-xs font-semibold uppercase tracking-[0.3em] ${light ? 'text-white/80' : 'text-teal-strong'}`}
    >
      {children}
    </p>
  );
}
