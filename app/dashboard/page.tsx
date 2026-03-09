import type { Metadata } from 'next';
import { DashboardPage } from '../components/DashboardPage';
import { createDashboardMetadata } from '../content/dashboardMetadata';
import { getDashboardContent } from '../content/getDashboardContent';

const content = getDashboardContent('nl');

export const metadata: Metadata = createDashboardMetadata({
  content,
  canonicalPath: '/dashboard',
});

export default function DashboardRoute() {
  return <DashboardPage content={content} />;
}
