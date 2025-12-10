import { NavLink } from './types';

type NavigationProps = {
  navLinks: NavLink[];
};

export function Navigation({ navLinks }: NavigationProps) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-10">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-teal-strong">
            Paramaribo • Suriname
          </p>
          <p className="text-xl font-semibold tracking-wide">SCiTMI</p>
          <p className="text-sm text-ink/70">
            Suriname Citizen Time Machine Incubator
          </p>
        </div>
        <nav className="flex flex-wrap gap-5 text-sm text-ink">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="uppercase tracking-[0.2em] text-ink/70 transition hover:text-teal-strong"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
