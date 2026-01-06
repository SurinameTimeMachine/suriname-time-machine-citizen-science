import type { Metadata } from 'next';
import { HomePage } from './components/HomePage';
import { getHomeContent } from './content/getHomeContent';
import { createHomeMetadata } from './content/homeMetadata';

const homeContent = getHomeContent('nl');

export const metadata: Metadata = {
  ...createHomeMetadata({ content: homeContent, canonicalPath: '/' }),
};

export default function Home() {
  return <HomePage content={homeContent} />;
}
