import type { NavLink, ResourceItem, Stat } from '../components';

export type HomeLocale = 'nl' | 'en';

export type HomeUiStrings = {
  navigation: {
    locationLabel: string;
    projectCode: string;
    projectSubtitle: string;
    languageToggleLabel: string;
  };
  section01Hero: {
    tagline: string;
    title: string;
    lead: string;
    kicker: string;
    primaryCtaLabel: string;
    textureAlt: string;
    snapshotLabel: string;
  };
  section02Intro: {
    eyebrow: string;
    sourcesTitle: string;
    sourcesDescription: string;
  };
  section03CaseStudy: {
    label: string;
    title: string;
  };
  section04Methodology: {
    title: string;
    projectTeamTitle: string;
    relatedEmployeesLabel: string;
    digitalInfrastructureTitle: string;
    departmentsLabel: string;
    departmentsValue: string;
    tagsLabel: string;
    tagsValue: string;
  };
  section05Partners: {
    title: string;
    intro: string;
    figureSuffix: string;
  };
  section06Contact: {
    title: string;
    calloutTitle: string;
    calloutBody: string;
    linksTitle: string;
  };
  footer: {
    coordinatorLine: string;
    organizationLabel: string;
  };
};

export type ExternalLink = {
  label: string;
  href: string;
};

export type ArchiveSource = {
  label: string;
  href: string;
  institution?: string;
};

export type HomeSeo = {
  title: string;
  description: string;
  openGraphLocale: string;
};

export type HomeContent = {
  locale: HomeLocale;
  seo: HomeSeo;
  ui: HomeUiStrings;
  navLinks: NavLink[];
  section01Hero: {
    highlights: string[];
    stats: Stat[];
    background: {
      src: string;
      alt: string;
      width: number;
      height: number;
      caption: string;
    };
  };
  section02Intro: {
    paragraphs: string[];
    source: string;
    sources: ArchiveSource[];
    portrait: {
      src: string;
      alt: string;
      width: number;
      height: number;
      caption: string;
    };
    resources: ResourceItem[];
  };
  section03CaseStudy: {
    paragraphs: string[];
    captions: string[];
    plantationAsset: {
      src: string;
      alt: string;
      width: number;
      height: number;
      caption: string;
    };
    source: string;
    sources: ArchiveSource[];
  };
  section04Methodology: {
    missionParagraphs: string[];
    mapParagraphs: string[];
    mapAsset: {
      src: string;
      alt: string;
      width: number;
      height: number;
      caption: string;
    };
    teamParagraphs: string[];
    employees: string[];
    infrastructureParagraph: string;
  };
  section05Partners: {
    partners: string[];
    mapAsset: {
      src: string;
      alt: string;
      width: number;
      height: number;
      caption: string;
    };
  };
  section06Contact: {
    email: string;
    links?: ExternalLink[];
  };
};

// Projects page types
export type ProjectCategory = 'maps' | 'data' | 'interactive';

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  category: ProjectCategory;
  thumbnail: {
    src: string;
    alt: string;
  };
};

export type ProjectsUiStrings = {
  navigation: {
    locationLabel: string;
    projectCode: string;
    projectSubtitle: string;
    languageToggleLabel: string;
    backToHome: string;
  };
  hero: {
    tagline: string;
    title: string;
    lead: string;
  };
  categories: {
    maps: string;
    data: string;
    interactive: string;
  };
  footer: {
    coordinatorLine: string;
    organizationLabel: string;
  };
};

export type ProjectsSeo = {
  title: string;
  description: string;
  openGraphLocale: string;
};

// Resource/Bookmark types
export type ResourcePurpose =
  | 'archive'
  | 'tool'
  | 'inspiration'
  | 'reference'
  | 'collaboration';

export type BookmarkLink = {
  id: string;
  name: string;
  description: string;
  href: string;
  purpose: ResourcePurpose;
  keywords: string[];
  institution?: string;
};

export type ResourcesUiStrings = {
  title: string;
  lead: string;
  filters: {
    all: string;
    archive: string;
    tool: string;
    inspiration: string;
    reference: string;
    collaboration: string;
  };
  searchPlaceholder: string;
  noResults: string;
  tableHeaders: {
    name: string;
    description: string;
    purpose: string;
    keywords: string;
  };
};

export type ProjectsContent = {
  locale: HomeLocale;
  seo: ProjectsSeo;
  ui: ProjectsUiStrings;
  projects: ProjectItem[];
  resourcesUi: ResourcesUiStrings;
  resources: BookmarkLink[];
};
