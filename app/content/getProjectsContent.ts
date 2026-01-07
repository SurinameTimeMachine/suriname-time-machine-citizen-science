import { projectsEn } from './projects.en';
import { projectsNl } from './projects.nl';
import type { ProjectsContent } from './types';

export function getProjectsContent(locale: 'nl' | 'en'): ProjectsContent {
  return locale === 'en' ? projectsEn : projectsNl;
}
