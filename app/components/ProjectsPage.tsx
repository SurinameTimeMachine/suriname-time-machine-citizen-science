import Image from 'next/image';
import type {
  ProjectCategory,
  ProjectItem,
  ProjectsContent,
} from '../content/types';
import { Navigation } from './Navigation';
import { getDomainLinks, getHeaderNavLinks } from './navigationConfig';
import { ResourcesSection } from './ResourcesSection';
import { SiteFooter } from './SiteFooter';

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
          <ProjectCard key={`project-${project.id}`} project={project} />
        ))}
      </div>
    </section>
  );
}

export function ProjectsPage({ content }: ProjectsPageProps) {
  const { ui, projects } = content;
  const grouped = groupByCategory(projects);
  const headerNavLinks = getHeaderNavLinks(content.locale);
  const domainLinks = getDomainLinks(content.locale);

  return (
    <div className="min-h-screen bg-(--cream)">
      <Navigation
        navLinks={headerNavLinks}
        locale={content.locale}
        languageToggleLabel={ui.navigation.languageToggleLabel}
        domainLinks={domainLinks}
      />

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

        {/* Divider */}
        <hr className="border-ink/10" />

        {/* Resources Section */}
        <ResourcesSection
          ui={content.resourcesUi}
          resources={content.resources}
        />
      </main>

      <SiteFooter locale={content.locale} />
    </div>
  );
}
