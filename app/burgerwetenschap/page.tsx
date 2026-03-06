import type { Metadata } from 'next';
import { CitizenSciencePage } from '../components/CitizenSciencePage';
import { createCitizenScienceMetadata } from '../content/citizenScienceMetadata';
import { getCitizenScienceContent } from '../content/getCitizenScienceContent';

const content = getCitizenScienceContent('nl');

export const metadata: Metadata = createCitizenScienceMetadata({
  content,
  canonicalPath: '/burgerwetenschap',
});

export default function BurgerwetenschapRoute() {
  return <CitizenSciencePage content={content} />;
}
