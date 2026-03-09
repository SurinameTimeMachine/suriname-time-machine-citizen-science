import { notFound } from 'next/dist/client/components/not-found';
import type { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
import { DashboardPage } from '../../components/DashboardPage';
import { createDashboardMetadata } from '../../content/dashboardMetadata';
import { getDashboardContent } from '../../content/getDashboardContent';

type LocaleDashboardPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: 'en' }];
}

export async function generateMetadata({
  params,
}: LocaleDashboardPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (locale !== 'en') {
    return {};
  }

  const content = getDashboardContent('en');
  return createDashboardMetadata({
    content,
    canonicalPath: '/en/dashboard',
  });
}

export default async function LocaleDashboardPage({
  params,
}: LocaleDashboardPageProps) {
  const { locale } = await params;

  if (locale !== 'en') {
    notFound();
  }

  const content = getDashboardContent('en');
  return <DashboardPage content={content} />;
}
