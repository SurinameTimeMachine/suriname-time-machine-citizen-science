import { LanguageToggle } from '@/app/components/LanguageToggle';
import { NavLink } from './types';

type NavigationProps = {
  navLinks: NavLink[];
  locale: 'nl' | 'en';
  locationLabel: string;
  projectCode: string;
  projectSubtitle: string;
  languageToggleLabel: string;
};

export function Navigation({
  navLinks,
  locale,
  locationLabel,
  projectCode,
  projectSubtitle,
  languageToggleLabel,
}: NavigationProps) {
  return (
    <header id="site-header" className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-10">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-teal-strong">
            {locationLabel}
          </p>
          <p className="text-xl font-semibold tracking-wide">{projectCode}</p>
          <p className="text-sm text-ink/70">{projectSubtitle}</p>
        </div>
        <nav className="flex flex-wrap items-center gap-5 text-sm text-ink">
          <div className="flex flex-wrap items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="uppercase tracking-[0.2em] text-ink/70 transition hover:text-teal-strong"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="ml-1 flex items-center border-l border-slate-200 pl-4">
            <LanguageToggle
              locale={locale}
              label={languageToggleLabel}
              className=""
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
