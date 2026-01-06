import { homeContent as homeEn } from './home.en';
import { homeContent as homeNl } from './home.nl';
import type { HomeContent, HomeLocale } from './types';

export function getHomeContent(locale: HomeLocale): HomeContent {
  return locale === 'en' ? homeEn : homeNl;
}
