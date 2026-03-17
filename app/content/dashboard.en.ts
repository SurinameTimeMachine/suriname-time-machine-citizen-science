import type { DashboardContent } from './types';

export const dashboardEn: DashboardContent = {
  locale: 'en',
  seo: {
    title: 'Annotation Dashboard | Suriname Time Machine',
    description:
      'Live statistics on annotations created by citizen scientists and AI for the Suriname Time Machine. Track progress, view contributors, and explore motivation breakdowns.',
    openGraphLocale: 'en_US',
  },
  ui: {
    navigation: {
      locationLabel: 'Dashboard',
      projectCode: 'STM',
      projectSubtitle: 'Annotation Dashboard',
      languageToggleLabel: 'NL',
      backToHome: 'Back to Home',
    },
    hero: {
      tagline: 'Suriname Time Machine',
      title: 'Annotation Dashboard',
      lead: 'Real-time overview of all annotations created for the Suriname Time Machine, by humans and AI alike. See who is contributing and how the collection grows.',
    },
    stats: {
      totalAnnotations: 'Total annotations',
      aiAnnotations: 'AI annotations',
      humanAnnotations: 'Human annotations',
      canvasesAnnotated: 'Map sheets annotated',
      lastUpdated: 'Last updated',
    },
    citizenScience: {
      title: 'Citizen Science Spotlight',
      description:
        'What our volunteers are discovering on the historic maps. Every text, icon, and place counts.',
      textsSpotted: 'Texts spotted',
      iconsIdentified: 'Icons identified',
      placesLinked: 'Places linked',
    },
    community: {
      title: 'Community',
      description:
        'Together we are unlocking the stories hidden in historic maps of Suriname.',
      contributors: 'Volunteers',
      daysActive: 'Days active',
    },
    sections: {
      canvasTitle: 'Annotations per map sheet',
      canvasDescription:
        'AI-generated annotations and citizen science contributions per historic map sheet.',
      sortByCitizen: 'Citizen science first',
      sortByTotal: 'Most annotations first',
      previousPage: 'Previous',
      nextPage: 'Next',
      pageIndicator: 'of',
    },
    activity: {
      title: 'Citizen science activity',
      description:
        'Daily contributions by our volunteers. Every square represents a day of citizen science work.',
      noActivity: 'No activity',
      annotation: 'contribution',
      annotations: 'contributions',
    },
    labels: {
      annotations: 'annotations',
      loading: 'Loading live data from AnnRepo…',
      error: 'Could not load data from AnnRepo.',
      retryButton: 'Retry',
      aiLabel: 'AI',
      citizenLabel: 'Citizen science',
    },
    footer: {
      coordinatorLine: 'Project coordinator',
      organizationLabel: 'Huygens Institute',
    },
  },
};
