import type { Metadata } from 'next';
import { HackalodReportPage } from '../../components/hackalod/HackalodReportPage';
import { hackalod2026 } from '../../content/hackalod2026.nl';

export const metadata: Metadata = {
  title: hackalod2026.seo.title,
  description: hackalod2026.seo.description,
  alternates: { canonical: hackalod2026.path },
  openGraph: {
    title: hackalod2026.seo.title,
    description: hackalod2026.seo.description,
    locale: 'nl_NL',
    // Absolute: the static export has no metadataBase to resolve relative URLs against.
    images: [
      'https://surinametijdmachine.org/images/hackalod-2026/dias/dia-01.webp',
    ],
  },
};

export default function HackalodRoute() {
  return <HackalodReportPage />;
}
