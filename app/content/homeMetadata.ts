import type { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
import type { HomeContent } from './types';

type CreateHomeMetadataParams = {
  content: HomeContent;
  canonicalPath: '/' | '/en';
};

export function createHomeMetadata({
  content,
  canonicalPath,
}: CreateHomeMetadataParams): Metadata {
  return {
    title: content.seo.title,
    description: content.seo.description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        nl: '/',
        en: '/en',
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
  };
}
