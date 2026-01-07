import type { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
import type { ProjectsContent } from './types';

type CreateProjectsMetadataParams = {
  content: ProjectsContent;
  canonicalPath: '/projects' | '/en/projects';
};

export function createProjectsMetadata({
  content,
  canonicalPath,
}: CreateProjectsMetadataParams): Metadata {
  return {
    title: content.seo.title,
    description: content.seo.description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        nl: '/projects',
        en: '/en/projects',
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
