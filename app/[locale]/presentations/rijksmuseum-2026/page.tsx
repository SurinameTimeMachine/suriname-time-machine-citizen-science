import { notFound } from 'next/dist/client/components/not-found';
import type { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
import QRCode from 'qrcode';
import { SlideDeck } from '../../../components/presentations/SlideDeck';
import { getRijksmuseum2026Content } from '../../../content/getRijksmuseum2026Content';
import type {
  PresentationContent,
  SlideContent,
} from '../../../content/presentationTypes';
import { createRijksmuseum2026Metadata } from '../../../content/rijksmuseum2026Metadata';

type QrTarget = { label: string; url: string; description?: string };

async function augmentWithQrSvgs(
  content: PresentationContent,
): Promise<PresentationContent> {
  const slides = await Promise.all(
    content.slides.map(async (slide): Promise<SlideContent> => {
      if (slide.component !== 'qrCodes') return slide;
      const targets =
        (slide.componentProps?.targets as QrTarget[] | undefined) ?? [];
      const enriched = await Promise.all(
        targets.map(async (t) => ({
          ...t,
          svg: await QRCode.toString(t.url, {
            type: 'svg',
            margin: 0,
            errorCorrectionLevel: 'M',
            color: { dark: '#003c34', light: '#00000000' },
          }),
        })),
      );
      return {
        ...slide,
        componentProps: { ...slide.componentProps, targets: enriched },
      };
    }),
  );
  return { ...content, slides };
}

type PresentationPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: 'en' }];
}

export async function generateMetadata({
  params,
}: PresentationPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== 'en') return {};
  const content = getRijksmuseum2026Content();
  return createRijksmuseum2026Metadata({
    content,
    canonicalPath: '/en/presentations/rijksmuseum-2026',
  });
}

export default async function Rijksmuseum2026Page({
  params,
}: PresentationPageProps) {
  const { locale } = await params;
  if (locale !== 'en') notFound();

  const content = await augmentWithQrSvgs(getRijksmuseum2026Content());
  return <SlideDeck content={content} />;
}
