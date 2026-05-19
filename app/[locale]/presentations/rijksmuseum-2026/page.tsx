import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
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

type RawPoint = {
  lat: number;
  lng: number;
  y: number | null;
  r: string;
  reg: string;
};

type Summary = {
  totalObjects: number;
  coverage: Record<string, number>;
  regionCounts: Record<string, number>;
  topPlaces: {
    name: string;
    count: number;
    lat?: number | null;
    lng?: number | null;
  }[];
  topCreators: { name: string; count: number }[];
  decades: {
    decade: number;
    photo: number;
    painting: number;
    drawing: number;
    other: number;
    total: number;
  }[];
  pointsCount: number;
  featuredCount: number;
};

type Featured = {
  obj: string;
  title: string;
  creator: string;
  year: number;
  thumb: string;
  image?: string;
  place: string;
  type?: string;
  pid?: string;
  wikimedia?: string;
};

const DATA_DIR = join(
  process.cwd(),
  'public',
  'presentations',
  'rijksmuseum-2026',
  'data',
);

async function loadJsonOrNull<T>(file: string): Promise<T | null> {
  try {
    const raw = await readFile(join(DATA_DIR, file), 'utf-8');
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

function pointsToImagePoints(points: RawPoint[]): {
  lat: number;
  lng: number;
  uncertainty: number;
  year: number;
}[] {
  const uncertaintyFor = (r: string) => {
    if (r === 'e') return 1;
    if (r === 'b') return 25;
    return 12;
  };
  const out: {
    lat: number;
    lng: number;
    uncertainty: number;
    year: number;
  }[] = [];
  for (const p of points) {
    if (p.y == null) continue;
    out.push({
      lat: p.lat,
      lng: p.lng,
      uncertainty: uncertaintyFor(p.r),
      year: p.y,
    });
  }
  return out;
}

async function augmentSlides(
  content: PresentationContent,
): Promise<PresentationContent> {
  const [summary, points, featured] = await Promise.all([
    loadJsonOrNull<Summary>('summary.json'),
    loadJsonOrNull<RawPoint[]>('points.json'),
    loadJsonOrNull<Featured[]>('featured.json'),
  ]);

  const imagePoints = points ? pointsToImagePoints(points) : null;

  let coverageRows: { field: string; coverage: number }[] | null = null;
  if (summary) {
    const cv = summary.coverage;
    coverageRows = [
      { field: 'Title', coverage: 100 },
      { field: 'Date / year', coverage: cv.year ?? 0 },
      { field: 'Creator (non-anonymous)', coverage: cv.creator ?? 0 },
      { field: 'Description', coverage: cv.description ?? 0 },
      { field: 'IIIF / thumbnail', coverage: cv.thumbnail ?? 0 },
      { field: 'Place name (free-text)', coverage: cv.geoKeyword ?? 0 },
      { field: 'Place → coordinates', coverage: cv.mapReady ?? 0 },
      { field: 'Place → Wikidata', coverage: cv.wikidataLink ?? 0 },
      { field: 'Place → Getty TGN', coverage: cv.gettyLink ?? 0 },
      { field: 'Persons depicted', coverage: cv.persons ?? 0 },
      { field: 'Subject keywords', coverage: cv.subjects ?? 0 },
    ];
  }

  const slides = await Promise.all(
    content.slides.map(async (slide): Promise<SlideContent> => {
      if (slide.component === 'qrCodes') {
        const targets =
          (slide.componentProps?.targets as QrTarget[] | undefined) ?? [];
        const enriched = await Promise.all(
          targets.map(async (t) => ({
            ...t,
            // eslint-disable-next-line @typescript-eslint/no-base-to-string -- calling qrcode library's toString API, not Object.prototype.toString
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
      }

      if (
        imagePoints &&
        (slide.component === 'hexHeatmap' ||
          slide.component === 'surinameMap' ||
          slide.component === 'timeSlider')
      ) {
        const yearStart =
          (slide.componentProps?.yearStart as number | undefined) ?? 1845;
        const yearEnd =
          (slide.componentProps?.yearEnd as number | undefined) ?? 1970;
        return {
          ...slide,
          componentProps: {
            ...slide.componentProps,
            points: imagePoints,
            yearStart,
            yearEnd,
          },
        };
      }

      if (slide.component === 'metadataGapsChart' && coverageRows) {
        return {
          ...slide,
          componentProps: { ...slide.componentProps, data: coverageRows },
        };
      }

      if (slide.component === 'topPlacesChart' && summary) {
        return {
          ...slide,
          componentProps: {
            ...slide.componentProps,
            places: summary.topPlaces.filter(
              (p) => p.name !== 'niet-nederland',
            ),
          },
        };
      }

      if (slide.component === 'mediumOverTime' && summary) {
        return {
          ...slide,
          componentProps: { ...slide.componentProps, decades: summary.decades },
        };
      }

      if (slide.component === 'featuredGrid' && featured) {
        return {
          ...slide,
          componentProps: { ...slide.componentProps, items: featured },
        };
      }

      return slide;
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

  const content = await augmentSlides(getRijksmuseum2026Content());
  return <SlideDeck content={content} />;
}
