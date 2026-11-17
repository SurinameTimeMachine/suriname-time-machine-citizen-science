import type { Metadata } from 'next';
import { GeobuzzPage } from '../../components/geobuzz/GeobuzzPage';
import { geobuzz2026 } from '../../content/geobuzz2026.nl';

export const metadata: Metadata = {
  title: geobuzz2026.seo.title,
  description: geobuzz2026.seo.description,
  alternates: { canonical: geobuzz2026.path },
  openGraph: {
    title: geobuzz2026.seo.title,
    description: geobuzz2026.seo.description,
    locale: 'nl_NL',
    // Absolute: the static export has no metadataBase to resolve relative URLs against.
    images: [
      'https://surinametijdmachine.org/images/geobuzz-2026/dias/dia-01.webp',
    ],
  },
};

export default function GeobuzzRoute() {
  return <GeobuzzPage />;
}
