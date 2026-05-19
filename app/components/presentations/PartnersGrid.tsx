type Partner = {
  name: string;
  logo: string;
  href?: string;
  role?: string;
};

type PartnersGridProps = {
  partners?: Partner[];
};

const DEFAULT_PARTNERS: Partner[] = [];

export function PartnersGrid({
  partners = DEFAULT_PARTNERS,
}: PartnersGridProps) {
  if (!partners.length) return null;
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
      {partners.map((p) => {
        const inner = (
          <>
            <div className="flex h-14 items-center justify-center">
              {}
              <img
                src={p.logo}
                alt={`${p.name} logo`}
                className="max-h-10 max-w-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="mt-2 text-center text-xs text-ink/80">
              <div className="font-medium text-ink">{p.name}</div>
              {p.role ? (
                <div className="mt-0.5 text-[11px] text-ink/60">{p.role}</div>
              ) : null}
            </div>
          </>
        );
        return (
          <li
            key={`partner-${p.name}`}
            className="cut-corner bg-white p-3 ring-1 ring-ink/10"
          >
            {p.href ? (
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {inner}
              </a>
            ) : (
              inner
            )}
          </li>
        );
      })}
    </ul>
  );
}
