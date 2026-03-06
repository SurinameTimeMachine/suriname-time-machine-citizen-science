import { notFound } from 'next/dist/client/components/not-found';
import type { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
import { CitizenSciencePage } from '../../components/CitizenSciencePage';
import { createCitizenScienceMetadata } from '../../content/citizenScienceMetadata';
import { getCitizenScienceContent } from '../../content/getCitizenScienceContent';

type LocaleCitizenSciencePageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: 'en' }];
}

export async function generateMetadata({
  params,
}: LocaleCitizenSciencePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (locale !== 'en') {
    return {};
  }

  const content = getCitizenScienceContent('en');
  return createCitizenScienceMetadata({
    content,
    canonicalPath: '/en/participatory-science',
  });
}

export default async function LocaleCitizenSciencePage({
  params,
}: LocaleCitizenSciencePageProps) {
  const { locale } = await params;

  if (locale !== 'en') {
    notFound();
  }

  const content = getCitizenScienceContent('en');
  return <CitizenSciencePage content={content} />;
}
