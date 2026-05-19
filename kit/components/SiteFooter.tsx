type SiteFooterProps = {
  organizationLabel: string;
  coordinatorLine: string;
  /** Overrides the auto-derived year. */
  year?: number;
};

/**
 * Slim two-column footer.
 * Requires id="site-footer" for BackToTop component overlap-avoidance.
 */
export function SiteFooter({
  organizationLabel,
  coordinatorLine,
  year,
}: SiteFooterProps) {
  const displayYear = year ?? new Date().getFullYear();
  return (
    <footer id="site-footer" className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-ink/70 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
        <p>
          © {displayYear} {organizationLabel}
        </p>
        <p>{coordinatorLine}</p>
      </div>
    </footer>
  );
}
