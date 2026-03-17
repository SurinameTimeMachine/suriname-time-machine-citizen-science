import { outputEn } from './output.en';
import { outputNl } from './output.nl';
import type { OutputContent } from './types';

export function getOutputContent(locale: 'nl' | 'en'): OutputContent {
  return locale === 'en' ? outputEn : outputNl;
}
