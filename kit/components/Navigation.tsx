import type { DomainLink, NavLink } from './types';

type NavigationProps = {
  /** Page navigation links (Story, Participatory, Dashboard, etc). Hidden on mobile. */
  navLinks: NavLink[];
  /** Current language: nl or en. */
  locale: 'nl' | 'en';
  /** All three STM domains. */
  domainLinks: DomainLink[];
  /** Language toggle label (e.g. "EN" or "NL"). */
  languageToggleLabel: string;
};

/**
 * Full-featured navbar with brand, location, page nav, domain switcher, and language toggle.
 * [Left] Brand mark (skewed bullet) + Location label
 * [Center] Page navigation links (Dashboard, Projects, Participatory, Output)
 * [Right] Domain tabs + Language toggle
 *
 * Height: ~80px. Sticky with frosted glass effect.
 */
export function Navigation({
  navLinks,
  locale,
  domainLinks,
  languageToggleLabel,
}: NavigationProps) {
  const otherLocalePath = locale === 'nl' ? '/en' : '/';

  return (
    <header
      id="site-header"
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm font-sans"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        {/* Single row: Brand + Domain tabs | Page nav | Language toggle */}
        <div className="flex items-center justify-between gap-3 py-3">
          {/* Left: Brand mark + Domain tabs */}
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            {/* Skewed bullet brand mark */}
            <div className="flex shrink-0 items-center gap-2">
              <div className="h-3 w-3 -skew-x-12 bg-teal-strong" aria-hidden />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-ink font-sans">
                STM
              </span>
            </div>

            {/* Domain tabs */}
            <nav
              className="flex min-w-0 items-center gap-2 text-sm font-sans whitespace-nowrap"
              aria-label="Domain switcher"
            >
              {domainLinks.map((domain, index) => (
                <div
                  key={`domain-${domain.href}`}
                  className="flex items-center gap-2"
                >
                  <a
                    href={domain.href}
                    aria-current={domain.isCurrent ? 'page' : undefined}
                    className={
                      domain.isCurrent
                        ? 'font-semibold text-ink transition hover:text-teal-strong font-sans'
                        : 'text-ink/60 transition hover:text-ink font-sans'
                    }
                  >
                    {domain.label}
                  </a>
                  {index < domainLinks.length - 1 && (
                    <span className="text-ink/20" aria-hidden>
                      •
                    </span>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Center: Page navigation (hidden on mobile) */}
          <nav
            className="hidden md:flex min-w-0 items-center gap-4 lg:gap-6 text-xs uppercase tracking-[0.2em] flex-1 justify-center font-sans"
            aria-label="Page navigation"
          >
            {navLinks.map((link) => (
              <a
                key={`nav-${link.href}`}
                href={link.href}
                className="truncate text-ink/60 transition hover:text-ink font-medium font-sans"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Language toggle */}
          <div className="shrink-0">
            <a
              href={otherLocalePath}
              className="text-xs text-ink/40 transition hover:text-ink font-medium font-sans uppercase tracking-[0.25em]"
            >
              {languageToggleLabel}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
