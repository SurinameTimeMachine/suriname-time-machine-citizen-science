'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { DashboardContent } from '../content/types';
import type { DashboardData } from '../lib/annorepo';
import { ActivityHeatmap } from './ActivityHeatmap';

type DashboardPageProps = {
  content: DashboardContent;
};

function formatNumber(n: number): string {
  return n.toLocaleString('en-US');
}

function tooltipFormatter(
  value: number | string | ReadonlyArray<number | string> | undefined,
) {
  return formatNumber(Number(value ?? 0));
}

function StatCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-sm px-6 py-5 ring-1 ${accent ? 'bg-(--deep-teal) text-white ring-white/10' : 'bg-white ring-ink/5'}`}
    >
      <p
        className={`text-xs font-semibold uppercase tracking-[0.2em] ${accent ? 'text-white/60' : 'text-ink/50'}`}
      >
        {label}
      </p>
      <p className="mt-1 text-3xl font-bold tabular-nums">{value}</p>
    </div>
  );
}

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-ink sm:text-2xl">{title}</h2>
      <p className="mt-1 text-sm text-ink/60">{description}</p>
    </div>
  );
}

function ActivityCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-sm bg-white px-6 py-5 ring-1 ring-ink/5">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
        {label}
      </p>
      <p className="mt-1 text-2xl font-bold tabular-nums text-ink">
        {formatNumber(value)}
      </p>
    </div>
  );
}

/**
 * Truncate long map names for the canvas chart axis labels.
 */
function truncateLabel(label: string, max = 42): string {
  if (label.length <= max) return label;
  return label.slice(0, max - 1) + '…';
}

export function DashboardPage({ content }: DashboardPageProps) {
  const { ui } = content;
  const otherLocalePath =
    content.locale === 'nl' ? '/en/dashboard' : '/dashboard';

  const [data, setData] = useState<DashboardData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/data/annorepo-stats.json');
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      const result: DashboardData | null = await res.json();
      if (!result) throw new Error('No data available');
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadData();
  }, [loadData]);

  return (
    <div className="min-h-screen bg-(--cream)">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-ink/5 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
          <div className="flex items-center gap-4">
            <Link
              href={content.locale === 'nl' ? '/' : '/en'}
              className="flex items-center gap-2 text-sm text-ink/60 transition-colors hover:text-teal-strong"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              {ui.navigation.backToHome}
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-[0.25em] text-ink/40">
              {ui.navigation.projectCode}
            </span>
            <Link
              href={otherLocalePath}
              className="rounded-sm border border-ink/10 px-2.5 py-1 text-xs font-medium uppercase tracking-[0.2em] text-ink/60 transition-colors hover:border-teal-strong/30 hover:text-teal-strong"
            >
              {ui.navigation.languageToggleLabel}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-surface px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="flag-label mb-4 text-white/80">{ui.hero.tagline}</p>
          <h1 className="mb-6 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            {ui.hero.title}
          </h1>
          <p className="max-w-2xl text-lg text-white/80">{ui.hero.lead}</p>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-6xl space-y-12 px-4 py-12 sm:px-6 lg:px-10">
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="flex items-center gap-3 text-ink/60">
              <svg
                className="h-5 w-5 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              <span className="text-sm">{ui.labels.loading}</span>
            </div>
          </div>
        )}

        {error && !loading && (
          <div className="flex flex-col items-center justify-center gap-4 py-20">
            <p className="text-sm text-red-600">{ui.labels.error}</p>
            <button
              type="button"
              onClick={loadData}
              className="rounded-sm bg-teal-strong px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-deep-teal"
            >
              {ui.labels.retryButton}
            </button>
          </div>
        )}

        {data && !loading && (
          <>
            {/* Stats overview */}
            <section>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard
                  label={ui.stats.totalAnnotations}
                  value={formatNumber(data.totalAnnotations)}
                  accent
                />
                <StatCard
                  label={ui.stats.humanAnnotations}
                  value={formatNumber(data.humanAnnotations)}
                />
                <StatCard
                  label={ui.stats.aiAnnotations}
                  value={formatNumber(data.aiAnnotations)}
                />
                <StatCard
                  label={ui.stats.canvasesAnnotated}
                  value={formatNumber(data.canvasesAnnotated)}
                />
              </div>
              <p className="mt-3 text-xs text-ink/40">
                {ui.stats.lastUpdated}:{' '}
                {new Date(data.fetchedAt).toLocaleString(
                  content.locale === 'nl' ? 'nl-NL' : 'en-US',
                )}
              </p>
            </section>

            {/* Citizen Science Spotlight */}
            <section>
              <SectionHeading
                title={ui.citizenScience.title}
                description={ui.citizenScience.description}
              />
              <div className="grid gap-4 sm:grid-cols-3">
                <ActivityCard
                  label={ui.citizenScience.textsSpotted}
                  value={data.citizenScience.textsSpotted}
                />
                <ActivityCard
                  label={ui.citizenScience.iconsIdentified}
                  value={data.citizenScience.iconsIdentified}
                />
                <ActivityCard
                  label={ui.citizenScience.placesLinked}
                  value={data.citizenScience.placesLinked}
                />
              </div>
            </section>

            {/* Community */}
            <section>
              <SectionHeading
                title={ui.community.title}
                description={ui.community.description}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <StatCard
                  label={ui.community.contributors}
                  value={formatNumber(data.contributorCount)}
                />
                <StatCard
                  label={ui.community.daysActive}
                  value={formatNumber(data.daysActive)}
                />
              </div>
            </section>

            {/* Activity Heatmap */}
            {data.dailyActivity.length > 0 && (
              <section>
                <SectionHeading
                  title={ui.activity.title}
                  description={ui.activity.description}
                />
                <div className="overflow-hidden rounded-sm bg-white p-6 ring-1 ring-ink/5">
                  <ActivityHeatmap
                    data={data.dailyActivity}
                    locale={content.locale}
                    labels={{
                      noActivity: ui.activity.noActivity,
                      annotation: ui.activity.annotation,
                      annotations: ui.activity.annotations,
                    }}
                  />
                </div>
              </section>
            )}

            {/* Top canvases — stacked AI vs citizen science */}
            <section>
              <SectionHeading
                title={ui.sections.canvasTitle}
                description={ui.sections.canvasDescription}
              />
              <div className="overflow-hidden rounded-sm bg-white p-6 ring-1 ring-ink/5">
                <ResponsiveContainer
                  width="100%"
                  height={Math.max(400, data.topCanvases.length * 36)}
                >
                  <BarChart
                    data={data.topCanvases.map((c) => ({
                      name: truncateLabel(c.label),
                      fullLabel: c.label,
                      ai: c.count - c.citizenCount,
                      citizen: c.citizenCount,
                    }))}
                    layout="vertical"
                    margin={{ top: 5, right: 20, bottom: 5, left: 10 }}
                  >
                    <XAxis
                      type="number"
                      tick={{ fontSize: 12 }}
                      tickLine={false}
                    />
                    <YAxis
                      type="category"
                      dataKey="name"
                      tick={{ fontSize: 11 }}
                      tickLine={false}
                      width={240}
                    />
                    <Tooltip
                      formatter={tooltipFormatter}
                      labelFormatter={(label, payload) => {
                        void label;
                        const entry = payload[0]?.payload as
                          | { fullLabel?: string }
                          | undefined;
                        return entry?.fullLabel ?? '';
                      }}
                    />
                    <Legend />
                    <Bar
                      dataKey="ai"
                      name={ui.labels.aiLabel}
                      stackId="a"
                      fill="var(--teal-strong)"
                      radius={[0, 0, 0, 0]}
                    />
                    <Bar
                      dataKey="citizen"
                      name={ui.labels.citizenLabel}
                      stackId="a"
                      fill="var(--teal-bright)"
                      radius={[0, 4, 4, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </section>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-ink/5 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-ink/50">
            <p>
              {ui.footer.coordinatorLine} · {ui.footer.organizationLabel}
            </p>
            <p>Suriname Time Machine © {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
