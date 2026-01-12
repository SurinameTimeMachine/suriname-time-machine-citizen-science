'use client';

import { useState, useMemo } from 'react';
import type {
  BookmarkLink,
  ResourcePurpose,
  ResourcesUiStrings,
} from '../content/types';

type ResourcesSectionProps = {
  ui: ResourcesUiStrings;
  resources: BookmarkLink[];
};

const PURPOSE_COLORS: Record<ResourcePurpose, string> = {
  archive: 'bg-amber-100 text-amber-800 border-amber-200',
  tool: 'bg-blue-100 text-blue-800 border-blue-200',
  inspiration: 'bg-purple-100 text-purple-800 border-purple-200',
  reference: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  collaboration: 'bg-rose-100 text-rose-800 border-rose-200',
};

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
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
  );
}

function PurposeBadge({
  purpose,
  label,
}: {
  purpose: ResourcePurpose;
  label: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${PURPOSE_COLORS[purpose]}`}
    >
      {label}
    </span>
  );
}

function KeywordTag({ keyword }: { keyword: string }) {
  return (
    <span className="inline-flex items-center rounded bg-ink/5 px-1.5 py-0.5 text-xs text-ink/60">
      {keyword}
    </span>
  );
}

function ResourceRow({
  resource,
  purposeLabel,
}: {
  resource: BookmarkLink;
  purposeLabel: string;
}) {
  return (
    <a
      href={resource.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid grid-cols-1 gap-3 border-b border-ink/5 px-4 py-4 transition-colors hover:bg-teal-soft/20 sm:grid-cols-[1fr_2fr_auto] sm:items-center sm:gap-4"
    >
      {/* Name + Institution */}
      <div className="flex items-start justify-between gap-2 sm:flex-col sm:items-start sm:justify-start sm:gap-1">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-medium text-ink group-hover:text-teal-strong">
            {resource.name}
          </h3>
          <ExternalLinkIcon className="h-3.5 w-3.5 shrink-0 text-ink/40 transition-colors group-hover:text-teal-strong" />
        </div>
        {resource.institution && (
          <span className="text-xs text-ink/50">{resource.institution}</span>
        )}
        <div className="sm:hidden">
          <PurposeBadge purpose={resource.purpose} label={purposeLabel} />
        </div>
      </div>

      {/* Description + Keywords */}
      <div className="space-y-2">
        <p className="text-sm leading-relaxed text-ink/70">
          {resource.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {resource.keywords.slice(0, 4).map((keyword) => (
            <KeywordTag key={keyword} keyword={keyword} />
          ))}
        </div>
      </div>

      {/* Purpose badge (desktop) */}
      <div className="hidden sm:block">
        <PurposeBadge purpose={resource.purpose} label={purposeLabel} />
      </div>
    </a>
  );
}

export function ResourcesSection({ ui, resources }: ResourcesSectionProps) {
  const [activeFilter, setActiveFilter] = useState<ResourcePurpose | 'all'>(
    'all',
  );
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      // Filter by purpose
      if (activeFilter !== 'all' && resource.purpose !== activeFilter) {
        return false;
      }

      // Filter by search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = resource.name.toLowerCase().includes(query);
        const matchesDescription = resource.description
          .toLowerCase()
          .includes(query);
        const matchesKeywords = resource.keywords.some((k) =>
          k.toLowerCase().includes(query),
        );
        const matchesInstitution = resource.institution
          ?.toLowerCase()
          .includes(query);

        if (
          !matchesName &&
          !matchesDescription &&
          !matchesKeywords &&
          !matchesInstitution
        ) {
          return false;
        }
      }

      return true;
    });
  }, [resources, activeFilter, searchQuery]);

  const filterButtons: { key: ResourcePurpose | 'all'; label: string }[] = [
    { key: 'all', label: ui.filters.all },
    { key: 'archive', label: ui.filters.archive },
    { key: 'tool', label: ui.filters.tool },
    { key: 'reference', label: ui.filters.reference },
    { key: 'inspiration', label: ui.filters.inspiration },
    { key: 'collaboration', label: ui.filters.collaboration },
  ];

  const getPurposeLabel = (purpose: ResourcePurpose): string => {
    return ui.filters[purpose];
  };

  return (
    <section className="space-y-6">
      {/* Section header */}
      <div className="space-y-2">
        <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-strong">
          {ui.title}
        </h2>
        <p className="max-w-2xl text-sm text-ink/60">{ui.lead}</p>
      </div>

      {/* Filters + Search */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Filter pills */}
        <div className="flex flex-wrap gap-2">
          {filterButtons.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                activeFilter === key
                  ? 'border-teal-strong bg-teal-strong text-white'
                  : 'border-ink/10 text-ink/60 hover:border-teal-strong/30 hover:text-teal-strong'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={ui.searchPlaceholder}
            className="w-full rounded-sm border border-ink/10 bg-white px-3 py-2 pl-9 text-sm text-ink placeholder:text-ink/40 focus:border-teal-strong/50 focus:outline-none focus:ring-1 focus:ring-teal-strong/20 sm:w-64"
          />
          <svg
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Resources list */}
      <div className="overflow-hidden rounded-sm border border-ink/10 bg-white shadow-sm">
        {/* Table header (desktop only) */}
        <div className="hidden border-b border-ink/10 bg-ink/2 px-4 py-3 sm:grid sm:grid-cols-[1fr_2fr_auto] sm:gap-4">
          <span className="text-xs font-medium uppercase tracking-wider text-ink/50">
            {ui.tableHeaders.name}
          </span>
          <span className="text-xs font-medium uppercase tracking-wider text-ink/50">
            {ui.tableHeaders.description}
          </span>
          <span className="text-xs font-medium uppercase tracking-wider text-ink/50">
            {ui.tableHeaders.purpose}
          </span>
        </div>

        {/* Resource rows */}
        {filteredResources.length > 0 ? (
          <div className="divide-y divide-ink/5">
            {filteredResources.map((resource) => (
              <ResourceRow
                key={resource.id}
                resource={resource}
                purposeLabel={getPurposeLabel(resource.purpose)}
              />
            ))}
          </div>
        ) : (
          <div className="px-4 py-12 text-center">
            <p className="text-sm text-ink/50">{ui.noResults}</p>
          </div>
        )}
      </div>

      {/* Results count */}
      <p className="text-xs text-ink/40">
        {filteredResources.length} / {resources.length}
      </p>
    </section>
  );
}
