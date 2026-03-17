import type { DashboardContent } from './types';

export const dashboardNl: DashboardContent = {
  locale: 'nl',
  seo: {
    title: 'Voortgang | Suriname Tijdmachine',
    description:
      'Live statistieken over annotaties van burgerwetenschappers en AI voor de Suriname Tijdmachine. Volg de voortgang, bekijk bijdragers en verken de motivatieverdeling.',
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
      lead: 'Realtime overzicht van alle annotaties voor de Suriname Tijdmachine, door mensen én AI. Bekijk wie bijdraagt en hoe de collectie groeit.',
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
        'Wat onze vrijwilligers ontdekken op de historische kaarten. Elke tekst, icoon en locatie telt.',
      textsSpotted: 'Teksten herkend',
      iconsIdentified: 'Iconen geïdentificeerd',
      placesLinked: 'Locaties gekoppeld',
    },
    community: {
      title: 'Gemeenschap',
      description:
        'Samen ontsluiten we de verhalen die verborgen liggen in historische kaarten van Suriname.',
      contributors: 'Vrijwilligers',
      daysActive: 'Dagen actief',
    },
    sections: {
      canvasTitle: 'Annotaties per kaartblad',
      canvasDescription:
        'AI-gegenereerde annotaties en citizen-sciencebijdragen per historisch kaartblad.',
      sortByCitizen: 'Citizen science eerst',
      sortByTotal: 'Meeste annotaties eerst',
      previousPage: 'Vorige',
      nextPage: 'Volgende',
      pageIndicator: 'van',
    },
    activity: {
      title: 'Citizen science activiteit',
      description:
        'Dagelijkse bijdragen van onze vrijwilligers. Elk vakje staat voor een dag citizen science werk.',
      noActivity: 'Geen activiteit',
      annotation: 'bijdrage',
      annotations: 'bijdragen',
    },
    labels: {
      annotations: 'annotaties',
      loading: 'Live data laden uit AnnRepo…',
      error: 'Kan geen data laden uit AnnRepo.',
      retryButton: 'Opnieuw proberen',
      aiLabel: 'AI',
      citizenLabel: 'Citizen science',
    },
    footer: {
      coordinatorLine: 'Projectcoördinator',
      organizationLabel: 'Huygens Instituut',
    },
  },
};
