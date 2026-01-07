import { notFound } from 'next/dist/client/components/not-found';
import type { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
import { ProjectsPage } from '../../components/ProjectsPage';
import { getProjectsContent } from '../../content/getProjectsContent';
import { createProjectsMetadata } from '../../content/projectsMetadata';

type LocaleProjectsPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: 'en' }];
}

export async function generateMetadata({
  params,
}: LocaleProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (locale !== 'en') {
    return {};
  }

  const content = getProjectsContent('en');
  return createProjectsMetadata({ content, canonicalPath: '/en/projects' });
}

export default async function LocaleProjectsPage({
  params,
}: LocaleProjectsPageProps) {
  const { locale } = await params;

  if (locale !== 'en') {
    notFound();
  }

  const content = getProjectsContent('en');
  return <ProjectsPage content={content} />;
}
