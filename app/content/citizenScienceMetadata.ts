import type { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
import type { CitizenScienceContent } from './types';

type CreateCitizenScienceMetadataParams = {
  content: CitizenScienceContent;
  canonicalPath: '/burgerwetenschap' | '/en/participatory-science';
};

export function createCitizenScienceMetadata({
  content,
  canonicalPath,
}: CreateCitizenScienceMetadataParams): Metadata {
  return {
    title: content.seo.title,
    description: content.seo.description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        nl: '/burgerwetenschap',
        en: '/en/participatory-science',
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
