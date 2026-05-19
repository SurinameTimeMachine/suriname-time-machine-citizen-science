import type { ReactNode } from 'react';

/**
 * Parses inline markdown: **bold** and *italic* inside a plain string.
 * Bold is matched first to avoid the inner asterisks being picked up as italic.
 */
function parseEmphasis(text: string, keyPrefix: string): ReactNode[] {
  // Tokenise on **bold** or *italic* (single-line, no nesting).
  const regex = /(\*\*([^*]+)\*\*)|(\*([^*\s][^*]*?)\*)/g;
  const out: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      out.push(text.slice(lastIndex, match.index));
    }
    if (match[2] !== undefined) {
      out.push(
        <strong key={`${keyPrefix}-b-${match.index}`} className="font-semibold">
          {match[2]}
        </strong>,
      );
    } else if (match[4] !== undefined) {
      out.push(
        <em key={`${keyPrefix}-i-${match.index}`} className="italic">
          {match[4]}
        </em>,
      );
    }
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
    if (match.index > lastIndex) {
      parts.push(
        ...parseEmphasis(
          text.slice(lastIndex, match.index),
          `pre-${match.index}`,
        ),
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

  if (lastIndex < text.length) {
    parts.push(...parseEmphasis(text.slice(lastIndex), `post-${lastIndex}`));
  }

  return parts.length > 0 ? parts : parseEmphasis(text, 'all');
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
