import { notFound } from 'next/dist/client/components/not-found';
import type { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
import { OutputPage } from '../../components/OutputPage';
import { getOutputContent } from '../../content/getOutputContent';
import { createOutputMetadata } from '../../content/outputMetadata';

type LocaleOutputPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: 'en' }];
}

export async function generateMetadata({
  params,
}: LocaleOutputPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (locale !== 'en') {
    return {};
  }

  const content = getOutputContent('en');
  return createOutputMetadata({ content, canonicalPath: '/en/output' });
}

export default async function LocaleOutputPage({
  params,
}: LocaleOutputPageProps) {
  const { locale } = await params;

  if (locale !== 'en') {
    notFound();
  }

  const content = getOutputContent('en');
  return <OutputPage content={content} />;
}
