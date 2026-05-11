import type { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
import type { PresentationContent } from './presentationTypes';

type CreatePresentationMetadataParams = {
  content: PresentationContent;
  canonicalPath: string;
};

export function createRijksmuseum2026Metadata({
  content,
  canonicalPath,
}: CreatePresentationMetadataParams): Metadata {
  return {
    title: content.seo.title,
    description: content.seo.description,
    robots: { index: false, follow: false },
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: content.seo.title,
      description: content.seo.description,
      url: canonicalPath,
      type: 'article',
      locale: content.seo.openGraphLocale,
    },
    twitter: {
      card: 'summary_large_image',
      title: content.seo.title,
      description: content.seo.description,
    },
  };
}
