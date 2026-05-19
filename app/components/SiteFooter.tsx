import type { HomeLocale } from '../content/types';

type SiteFooterProps = {
  locale: HomeLocale;
  projectName?: string;
  projectLeadName?: string;
  funderName?: string;
  partnerHref?: string;
  dataSourcesHref?: string;
  /** Overrides the auto-derived year. */
  year?: number;
};

export function SiteFooter({
  locale,
  projectName = 'Suriname Time Machine',
  projectLeadName = 'Thunnis',
  funderName = 'Stichting Pica',
  partnerHref,
  dataSourcesHref,
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
          {dataSourcesHref ? (
            <a
              href={dataSourcesHref}
              className="transition hover:text-teal-strong"
            >
              {labels.dataSources}
            </a>
          ) : (
            <span>
              {labels.dataSources} {labels.comingSoon}
            </span>
          )}
        </div>
      </div>
    </footer>
  );
}
