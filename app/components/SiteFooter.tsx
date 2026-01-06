type SiteFooterProps = {
  organizationLabel: string;
  coordinatorLine: string;
};

export function SiteFooter({
  organizationLabel,
  coordinatorLine,
}: SiteFooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-ink/70 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
        <p>
          © {new Date().getFullYear()} {organizationLabel}
        </p>
        <p>{coordinatorLine}</p>
      </div>
    </footer>
  );
}
