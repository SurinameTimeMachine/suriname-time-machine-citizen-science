import type { HomeLocale } from '../content/types';
import type { DomainLink, NavLink } from './types';

export function getHeaderNavLinks(locale: HomeLocale): NavLink[] {
  const isEn = locale === 'en';
  const prefix = isEn ? '/en' : '';

  return [
    {
      label: isEn ? 'Dashboard' : 'Dashboard',
      href: `${prefix}/dashboard`,
    },
    {
      label: isEn ? 'Projects' : 'Projecten',
      href: `${prefix}/projects`,
    },
    {
      label: isEn ? 'Participatory Science' : 'Participatie',
      href: isEn ? '/en/participatory-science' : '/participatie',
    },
    {
      label: isEn ? 'Output' : 'Output',
      href: `${prefix}/output`,
    },
  ];
}

export function getDomainLinks(locale: HomeLocale): DomainLink[] {
  return [
    {
      label: locale === 'en' ? 'About' : 'Over',
      href: locale === 'en' ? '/en' : '/',
      isCurrent: true,
    },
    {
      label: 'Images',
      href: 'https://images.surinametijdmachine.org',
    },
    {
      label: 'Data',
      href: 'https://data.surinametijdmachine.org',
    },
  ];
}
