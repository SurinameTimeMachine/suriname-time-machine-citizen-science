import Image from 'next/image';
import Link from 'next/link';
import type {
  ProjectCategory,
  ProjectItem,
  ProjectsContent,
} from '../content/types';

type ProjectsPageProps = {
  content: ProjectsContent;
};

function groupByCategory(
  projects: ProjectItem[],
): Record<ProjectCategory, ProjectItem[]> {
  return projects.reduce(
    (acc, project) => {
      acc[project.category].push(project);
      return acc;
    },
    { maps: [], data: [], interactive: [] } as Record<
      ProjectCategory,
      ProjectItem[]
    >,
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 opacity-60 transition-opacity group-hover:opacity-100"
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

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-sm bg-white shadow-[0_4px_20px_rgba(0,30,24,0.08)] ring-1 ring-ink/5 transition-all hover:shadow-[0_8px_30px_rgba(0,30,24,0.12)] hover:ring-teal-strong/20"
    >
      <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
        <Image
          src={project.thumbnail.src}
          alt={project.thumbnail.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-ink group-hover:text-teal-strong">
            {project.title}
          </h3>
          <ExternalLinkIcon />
        </div>
        <p className="flex-1 text-sm leading-relaxed text-ink/70">
          {project.description}
        </p>
      </div>
    </a>
  );
}

function CategorySection({
  title,
  projects,
}: {
  title: string;
  projects: ProjectItem[];
}) {
  if (projects.length === 0) return null;

  return (
    <section className="space-y-6">
      <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-strong">
        {title}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export function ProjectsPage({ content }: ProjectsPageProps) {
  const { ui, projects } = content;
  const grouped = groupByCategory(projects);
  const otherLocalePath =
    content.locale === 'nl' ? '/en/projects' : '/projects';

  return (
    <div className="min-h-screen bg-(--cream)">
      {/* Navigation */}
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

      {/* Projects Grid */}
      <main className="mx-auto max-w-6xl space-y-12 px-4 py-12 sm:px-6 lg:px-10">
        <CategorySection title={ui.categories.maps} projects={grouped.maps} />
        <CategorySection title={ui.categories.data} projects={grouped.data} />
        <CategorySection
          title={ui.categories.interactive}
          projects={grouped.interactive}
        />
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
