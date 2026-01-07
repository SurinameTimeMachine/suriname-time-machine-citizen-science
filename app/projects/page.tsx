import type { Metadata } from 'next';
import { ProjectsPage } from '../components/ProjectsPage';
import { getProjectsContent } from '../content/getProjectsContent';
import { createProjectsMetadata } from '../content/projectsMetadata';

const content = getProjectsContent('nl');

export const metadata: Metadata = createProjectsMetadata({
  content,
  canonicalPath: '/projects',
});

export default function ProjectsRoute() {
  return <ProjectsPage content={content} />;
}
