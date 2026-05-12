import type { ReactNode } from 'react';

/**
 * Parses markdown-style links [text](url) in a string and returns React elements.
 * Supports external links (opens in new tab) and internal anchors.
 * Handles URLs with parentheses (e.g., Wikipedia links).
 */
function parseBold(text: string, keyPrefix: string): ReactNode[] {
  const boldRegex = /\*\*([^*]+)\*\*/g;
  const out: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      out.push(text.slice(lastIndex, match.index));
    }
    out.push(
      <strong key={`${keyPrefix}-b-${match.index}`} className="font-semibold">
        {match[1]}
      </strong>,
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    out.push(text.slice(lastIndex));
  }
  return out.length > 0 ? out : [text];
}

export function parseInlineLinks(text: string): ReactNode {
  // Match markdown links: [label](url)
  // The URL pattern handles balanced parentheses for Wikipedia-style links
  const linkRegex = /\[([^\]]+)\]\(((?:[^()]+|\([^()]*\))+)\)/g;

  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link (with bold parsing)
    if (match.index > lastIndex) {
      parts.push(
        ...parseBold(text.slice(lastIndex, match.index), `pre-${match.index}`),
      );
    }

    const [, label, href] = match;
    const isExternal =
      (href?.startsWith('http://') ?? false) ||
      (href?.startsWith('https://') ?? false);

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

  // Add remaining text after the last link (with bold parsing)
  if (lastIndex < text.length) {
    parts.push(...parseBold(text.slice(lastIndex), `post-${lastIndex}`));
  }

  // If no links found, parse the whole string for bold
  return parts.length > 0 ? parts : parseBold(text, 'all');
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
