import { notFound } from 'next/dist/client/components/not-found';
import type { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
import { HomePage } from '../components/HomePage';
import { getHomeContent } from '../content/getHomeContent';
import { createHomeMetadata } from '../content/homeMetadata';

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: 'en' }];
}

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (locale !== 'en') {
    return {};
  }

  const homeContent = getHomeContent('en');
  return createHomeMetadata({ content: homeContent, canonicalPath: '/en' });
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (locale !== 'en') {
    notFound();
  }

  const homeContent = getHomeContent('en');
  return <HomePage content={homeContent} />;
}
