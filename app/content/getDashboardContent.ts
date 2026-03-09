import { dashboardEn } from './dashboard.en';
import { dashboardNl } from './dashboard.nl';
import type { DashboardContent } from './types';

export function getDashboardContent(locale: 'nl' | 'en'): DashboardContent {
  return locale === 'en' ? dashboardEn : dashboardNl;
}
