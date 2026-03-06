import { citizenScienceEn } from './citizenScience.en';
import { citizenScienceNl } from './citizenScience.nl';
import type { CitizenScienceContent } from './types';

export function getCitizenScienceContent(
  locale: 'nl' | 'en',
): CitizenScienceContent {
  return locale === 'en' ? citizenScienceEn : citizenScienceNl;
}
