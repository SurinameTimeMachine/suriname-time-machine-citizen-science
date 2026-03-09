import type { DashboardContent } from './types';

export const dashboardEn: DashboardContent = {
  locale: 'en',
  seo: {
    title: 'Annotation Dashboard | Suriname Time Machine',
    description:
      'Live statistics on annotations created by citizen scientists and AI for the Suriname Time Machine — track progress, view contributors, and explore motivation breakdowns.',
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
      lead: 'Real-time overview of all annotations created for the Suriname Time Machine — by humans and AI alike. See who is contributing and how the collection grows.',
    },
    stats: {
      totalAnnotations: 'Total annotations',
      aiAnnotations: 'AI annotations',
      humanAnnotations: 'Human annotations',
      lastUpdated: 'Last updated',
    },
    sections: {
      motivationTitle: 'Annotations by motivation',
      motivationDescription:
        'Breakdown of annotation types: textspotting, linking, iconography and more.',
      leaderboardTitle: 'Top contributors',
      leaderboardDescription:
        'Human contributors ranked by the number of annotations they created.',
      purposeTitle: 'Annotations by purpose',
      purposeDescription:
        'How annotations are categorised by their intended purpose.',
      canvasTitle: 'Annotations per canvas',
      canvasDescription:
        'Which historic map sheets have received the most annotations so far.',
    },
    labels: {
      annotations: 'annotations',
      loading: 'Loading live data from AnnRepo…',
      error: 'Could not load data from AnnRepo.',
      retryButton: 'Retry',
      rank: '#',
      contributor: 'Contributor',
      count: 'Annotations',
      canvas: 'Canvas',
    },
    footer: {
      coordinatorLine: 'Project coordinator',
      organizationLabel: 'Huygens Institute',
    },
  },
};
