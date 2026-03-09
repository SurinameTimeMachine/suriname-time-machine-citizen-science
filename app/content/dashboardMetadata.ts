import type { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
import type { DashboardContent } from './types';

type CreateDashboardMetadataParams = {
  content: DashboardContent;
  canonicalPath: '/dashboard' | '/en/dashboard';
};

export function createDashboardMetadata({
  content,
  canonicalPath,
}: CreateDashboardMetadataParams): Metadata {
  return {
    title: content.seo.title,
    description: content.seo.description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        nl: '/dashboard',
        en: '/en/dashboard',
      },
    },
    openGraph: {
      title: content.seo.title,
      description: content.seo.description,
      url: canonicalPath,
      type: 'website',
      locale: content.seo.openGraphLocale,
    },
    twitter: {
      card: 'summary_large_image',
      title: content.seo.title,
      description: content.seo.description,
    },
    robots: {
      index: false,
      follow: false,
    },
  };
}
