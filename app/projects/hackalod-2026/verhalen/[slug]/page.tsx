import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HackalodStoryPage } from '../../../../components/hackalod/HackalodStoryPage';
import { hackalod2026 } from '../../../../content/hackalod2026.nl';
import {
  stories,
  type StorySlug,
} from '../../../../content/hackalod2026Stories';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(stories).map((slug) => ({ slug }));
}

export const dynamicParams = false;

function isSlug(slug: string): slug is StorySlug {
  return slug in stories;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isSlug(slug)) return {};
  const story = stories[slug];
  return {
    title: `${story.subtitle} · I Was Here | Suriname Tijdmachine`,
    description: story.introduction.replace(
      /\[([^\]]+)\]\((?:p|g):[^)\s]+\)/g,
      '$1',
    ),
    alternates: { canonical: `${hackalod2026.path}/verhalen/${slug}` },
  };
}

export default async function HackalodStoryRoute({ params }: Props) {
  const { slug } = await params;
  if (!isSlug(slug)) notFound();
  return <HackalodStoryPage slug={slug} />;
}
