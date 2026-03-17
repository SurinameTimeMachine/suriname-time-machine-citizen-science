import type { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
import type { OutputContent } from './types';

type CreateOutputMetadataParams = {
  content: OutputContent;
  canonicalPath: '/output' | '/en/output';
};

export function createOutputMetadata({
  content,
  canonicalPath,
}: CreateOutputMetadataParams): Metadata {
  return {
    title: content.seo.title,
    description: content.seo.description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        nl: '/output',
        en: '/en/output',
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
