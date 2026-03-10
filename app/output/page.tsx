import type { Metadata } from 'next';
import { OutputPage } from '../components/OutputPage';
import { createOutputMetadata } from '../content/outputMetadata';
import { getOutputContent } from '../content/getOutputContent';

const content = getOutputContent('nl');

export const metadata: Metadata = createOutputMetadata({
  content,
  canonicalPath: '/output',
});

export default function OutputRoute() {
  return <OutputPage content={content} />;
}
