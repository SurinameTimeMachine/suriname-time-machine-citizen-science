type HomeLocale = 'nl' | 'en';

type SiteFooterProps = {
  locale: HomeLocale;
  projectName?: string;
  projectLeadName?: string;
  funderName?: string;
  partnerHref?: string;
  /** Overrides the auto-derived year. */
  year?: number;
};

/**
 * Compact global footer for STM identity and project metadata.
 * Requires id="site-footer" for BackToTop component overlap-avoidance.
 */
export function SiteFooter({
  locale,
  projectName = 'Suriname Time Machine',
  projectLeadName = 'Thunnis van Oort',
  funderName = 'Stichting Pica',
  partnerHref,
  year,
}: SiteFooterProps) {
  const displayYear = year ?? new Date().getFullYear();
  const partnerSectionHref =
    partnerHref ?? (locale === 'en' ? '/en#partners' : '/#partners');
  const labels =
    locale === 'en'
      ? {
          projectLead: 'Project lead',
          funder: 'Funder',
          partners: 'Partners',
          dataSources: 'Data sources',
          comingSoon: '(coming soon)',
        }
      : {
          projectLead: 'Projectleider',
          funder: 'Funder',
          partners: 'Partners',
          dataSources: 'Databronnen',
          comingSoon: '(binnenkort)',
        };

  return (
    <footer id="site-footer" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] text-ink/65">
          <span className="font-medium text-ink/85">{projectName}</span>
          <span className="text-ink/25" aria-hidden>
            •
          </span>
          <span>{displayYear}</span>
          <span className="text-ink/25" aria-hidden>
            •
          </span>
          <span>
            {labels.projectLead}: {projectLeadName}
          </span>
          <span className="text-ink/25" aria-hidden>
            •
          </span>
          <span>
            {labels.funder}: {funderName}
          </span>
        </div>

        <div className="mt-1.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] text-ink/55">
          <a
            href={partnerSectionHref}
            className="transition hover:text-teal-strong"
          >
            {labels.partners}
          </a>
          <span className="text-ink/25" aria-hidden>
            •
          </span>
        </div>
      </div>
    </footer>
  );
}
