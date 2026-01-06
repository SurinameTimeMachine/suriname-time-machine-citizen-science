'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { ResourceItem } from './types';

type ApplicationsListProps = {
  resources: ResourceItem[];
};

export function ApplicationsList({ resources }: ApplicationsListProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="space-y-0">
      {resources.map((resource) => {
        const isExpanded = expandedId === resource.id;

        return (
          <div
            key={resource.id}
            className="border-t border-slate-100/70 first:border-0"
          >
            <button
              onClick={() => setExpandedId(isExpanded ? null : resource.id)}
              className="applications-row w-full py-4 text-left transition-colors hover:bg-slate-50/50"
              aria-expanded={isExpanded}
            >
              <div className="text-xs font-semibold text-teal-strong">
                {resource.id}
              </div>
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden border border-slate-200 [clip-path:polygon(25%_0,100%_0,100%_75%,75%_100%,0_100%,0_25%)]">
                  <Image
                    src={resource.asset.src}
                    alt={resource.asset.alt}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-ink">{resource.description}</p>
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

            {/* Expanded image area */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isExpanded
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-4">
                  <figure className="inline-block overflow-hidden rounded-sm border border-slate-200 bg-slate-50">
                    <Image
                      src={resource.asset.src}
                      alt={resource.asset.alt}
                      width={600}
                      height={400}
                      sizes="(min-width: 768px) 400px, 100vw"
                      className="h-auto max-h-[400px] w-auto max-w-full"
                    />
                    {resource.asset.caption && (
                      <figcaption className="border-t border-slate-100 bg-white px-3 py-2 text-xs text-ink/60">
                        {resource.asset.caption}
                      </figcaption>
                    )}
                  </figure>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
