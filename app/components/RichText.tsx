import type { ReactNode } from 'react';

/**
 * Parses markdown-style links [text](url) in a string and returns React elements.
 * Supports external links (opens in new tab) and internal anchors.
 * Handles URLs with parentheses (e.g., Wikipedia links).
 */
export function parseInlineLinks(text: string): ReactNode {
  // Match markdown links: [label](url)
  // The URL pattern handles balanced parentheses for Wikipedia-style links
  const linkRegex = /\[([^\]]+)\]\(((?:[^()]+|\([^()]*\))+)\)/g;

  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const [, label, href] = match;
    const isExternal =
      href.startsWith('http://') || href.startsWith('https://');

    parts.push(
      <a
        key={`${href}-${match.index}`}
        href={href}
        className="rich-text-link"
        {...(isExternal && {
          target: '_blank',
          rel: 'noopener noreferrer',
        })}
      >
        {label}
      </a>,
    );

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text after the last link
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  // If no links found, return original text
  return parts.length > 0 ? parts : text;
}

type RichTextProps = {
  children: string;
  className?: string;
  as?: 'p' | 'span';
};

/**
 * Renders text with inline markdown-style links [text](url).
 */
export function RichText({
  children,
  className,
  as: Tag = 'p',
}: RichTextProps) {
  return <Tag className={className}>{parseInlineLinks(children)}</Tag>;
}
