import type { DashboardContent } from './types';

export const dashboardNl: DashboardContent = {
  locale: 'nl',
  seo: {
    title: 'Voortgang | Suriname Tijdmachine',
    description:
      'Live statistieken over annotaties van burgerwetenschappers en AI voor de Suriname Tijdmachine — volg de voortgang, bekijk bijdragers en verken de motivatieverdeling.',
    openGraphLocale: 'nl_NL',
  },
  ui: {
    navigation: {
      locationLabel: 'Voortgang',
      projectCode: 'STM',
      projectSubtitle: 'Annotatiedashboard',
      languageToggleLabel: 'EN',
      backToHome: 'Terug naar Home',
    },
    hero: {
      tagline: 'Suriname Tijdmachine',
      title: 'Annotatiedashboard',
      lead: 'Realtime overzicht van alle annotaties voor de Suriname Tijdmachine — door mensen én AI. Bekijk wie bijdraagt en hoe de collectie groeit.',
    },
    stats: {
      totalAnnotations: 'Totaal annotaties',
      aiAnnotations: 'AI-annotaties',
      humanAnnotations: 'Menselijke annotaties',
      canvasesAnnotated: 'Kaartbladen geannoteerd',
      lastUpdated: 'Laatst bijgewerkt',
    },
    citizenScience: {
      title: 'Citizen Science Spotlight',
      description:
        'Wat onze vrijwilligers ontdekken op de historische kaarten — elke tekst, icoon en locatie telt.',
      textsSpotted: 'Teksten herkend',
      iconsIdentified: 'Iconen geïdentificeerd',
      placesLinked: 'Locaties gekoppeld',
    },
    sections: {
      leaderboardTitle: 'Topbijdragers',
      leaderboardDescription:
        'Menselijke bijdragers gerangschikt op het aantal annotaties dat zij hebben gemaakt.',
      canvasTitle: 'Meest geannoteerde kaartbladen',
      canvasDescription:
        'Welke historische kaartbladen tot nu toe de meeste annotaties hebben ontvangen.',
    },
    labels: {
      annotations: 'annotaties',
      loading: 'Live data laden uit AnnRepo…',
      error: 'Kan geen data laden uit AnnRepo.',
      retryButton: 'Opnieuw proberen',
      rank: '#',
      contributor: 'Bijdrager',
      count: 'Annotaties',
      canvas: 'Kaartblad',
    },
    footer: {
      coordinatorLine: 'Projectcoördinator',
      organizationLabel: 'Huygens Instituut',
    },
  },
};
