'use client';

import { useState } from 'react';

type Source = {
  label: string;
  href: string;
  institution?: string;
};

type SourcesPanelProps = {
  title: string;
  description: string;
  sources: Source[];
};

export function SourcesPanel({
  title,
  description,
  sources,
}: SourcesPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside className="mt-6 rounded-sm bg-ink/[0.02] ring-1 ring-ink/10 transition-all">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-ink/[0.03]"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-2">
          <svg
            className="h-4 w-4 text-teal-strong transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/70">
            {title}
          </span>
          <span className="rounded-full bg-ink/10 px-2 py-0.5 text-[10px] font-medium text-ink/60">
            {sources.length}
          </span>
        </div>
        <svg
          className={`h-4 w-4 text-ink/50 transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`grid transition-all duration-200 ease-in-out ${
          isExpanded
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-ink/5 px-4 pb-4 pt-3">
            <p className="mb-3 text-xs text-ink/60">{description}</p>
            <ul className="flex flex-wrap gap-2">
              {sources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-sm bg-white px-2.5 py-1.5 text-xs font-medium text-ink/80 ring-1 ring-ink/10 transition-all hover:bg-teal-strong/10 hover:text-teal-strong hover:ring-teal-strong/30"
                  >
                    <span>{source.label}</span>
                    {source.institution && (
                      <span className="text-ink/40">
                        · {source.institution}
                      </span>
                    )}
                    <svg
                      className="h-3 w-3 opacity-50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
