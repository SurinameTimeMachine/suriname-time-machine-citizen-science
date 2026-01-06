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
