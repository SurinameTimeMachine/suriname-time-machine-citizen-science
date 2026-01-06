'use client';

import { useEffect, useState } from 'react';

type LanguageToggleProps = {
  locale: 'nl' | 'en';
  label: string;
  className?: string;
};

export function LanguageToggle({
  locale,
  label,
  className,
}: LanguageToggleProps) {
  const targetBasePath = locale === 'nl' ? '/en' : '/';
  const [hash, setHash] = useState<string>(() => {
    if (typeof window === 'undefined') return '';
    return window.location.hash || '';
  });

  useEffect(() => {
    const update = () => {
      setHash(window.location.hash || '');
    };

    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);

  const href = `${targetBasePath}${hash}`;

  const baseClassName =
    'inline-flex items-center border border-slate-200 bg-sand px-3 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-teal-strong transition hover:bg-white';

  return (
    <a
      href={href}
      className={[baseClassName, className].filter(Boolean).join(' ')}
    >
      {label}
    </a>
  );
}
