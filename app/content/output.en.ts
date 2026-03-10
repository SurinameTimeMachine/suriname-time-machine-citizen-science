import type { OutputContent } from './types';

export const outputEn: OutputContent = {
  locale: 'en',
  seo: {
    title: 'Output | Suriname Time Machine',
    description:
      'Publications, presentations, datasets, events, and open-source code produced by the Suriname Time Machine project.',
    openGraphLocale: 'en_US',
  },
  ui: {
    navigation: {
      locationLabel: 'Output',
      projectCode: 'STM',
      projectSubtitle: 'Project Output',
      languageToggleLabel: 'NL',
      backToHome: 'Back to Home',
    },
    hero: {
      tagline: 'Suriname Time Machine',
      title: 'Project Output',
      lead: 'An overview of events, scientific publications, presentations, published datasets, open-source code, and media produced within the Suriname Time Machine project.',
    },
    categories: {
      events: 'Events',
      articles: 'Scientific Articles & Book Chapters',
      presentations: 'Scientific Presentations',
      data: 'Published Data',
      code: 'Published Code',
      media: 'Media & Commentary',
    },
    footer: {
      coordinatorLine: 'Project coordinator',
      organizationLabel: 'Huygens Institute',
    },
  },
  items: [
    // ── Events ──────────────────────────────────────────────────────────
    {
      id: 'mapathon-2026-03',
      title: 'Mapathon: Maps as a Source for Surinamese History',
      description:
        'Hands-on mapathon at the Bushuis / Oost-Indisch Huis in Amsterdam, where participants georeferenced historic maps, enriched Wikidata, and annotated archival sources.',
      href: '/en/participatory-science',
      category: 'events',
      date: '9 March 2026',
      isoDate: '2026-03-09',
      venue: 'Bushuis / Oost-Indisch Huis, Amsterdam',
    },
    {
      id: 'ecsa-2026',
      title:
        'Sranan Story Collective: Starting a Citizen Science Project on Surinamese Heritage',
      description:
        'Presentation at the European Citizen Science Association (ECSA) 2026 conference in Oulu, Finland, on the citizen science ambitions and methods of the Suriname Time Machine.',
      href: '/ecsa2026/',
      category: 'events',
      date: 'March 2026',
      isoDate: '2026-03-01',
      venue: 'ECSA 2026, Oulu, Finland',
    },

    // ── Scientific Articles & Book Chapters ─────────────────────────────
    {
      id: 'palgrave-citizen-science',
      title:
        'Citizen Science and Participatory Engagement with a Contentious Past: The Historical Database of Suriname and the Caribbean',
      description:
        'Book chapter exploring how citizen science offers meaningful engagement with a painful colonial past, through the case of the Historical Database of Suriname and the Caribbean (HDSC).',
      href: 'https://link.springer.com/rwe/10.1007/978-3-030-61493-5_319-1',
      category: 'articles',
      date: '2025',
      isoDate: '2025-01-01',
      authors:
        'van Oort, T., Prats López, M., Ganzevoort, W. & van Galen, C.',
      venue:
        'The Palgrave Encyclopedia of Cultural Heritage and Conflict (Springer)',
    },
    {
      id: 'archipelagos-trans-caribbean',
      title:
        'An Invitation to a Trans-Caribbean Data Project: A Pipeline for Historical Caribbean Population Databases',
      description:
        'Article presenting the HDSC pipeline for creating open-access historical population databases across the Caribbean, discussing workflows, data linking, and an invitation to collaborate on a trans-Caribbean scale.',
      href: 'https://doi.org/10.7916/ARCHIPELAGOS-WKX1-PD50',
      category: 'articles',
      date: 'April 2025',
      isoDate: '2025-04-08',
      authors:
        'Quanjer, B., van Oort, T., Rosenbaum-Feldbrügge, M., Van Galen, C., Hoek, L. & Tjong Kim Sang, E.',
      venue: 'archipelagos: a journal of Caribbean digital praxis, 2025(8)',
      doi: '10.7916/ARCHIPELAGOS-WKX1-PD50',
    },

    // ── Presentations ───────────────────────────────────────────────────
    {
      id: 'ecsa-2026-presentation',
      title:
        'Sranan Story Collective: Starting a Citizen Science Project on Surinamese Heritage',
      description:
        'Presentation at ECSA 2026 on how the Suriname Time Machine engages communities in citizen science around Surinamese heritage, combining georeferencing, Wikidata editing, and map annotation.',
      href: '/ecsa2026/',
      category: 'presentations',
      date: 'March 2026',
      isoDate: '2026-03-01',
      venue: 'ECSA 2026, Oulu, Finland',
    },
    {
      id: 'dhbenelux-pico-2025',
      title:
        'Modelling the Enslaved as Historical Persons: Extending the Persons in Context (PiCo) Model to Fit Enslaved Individuals',
      description:
        'Conference abstract presented at Digital Humanities Benelux 2025 on extending the PiCo data model to represent enslaved individuals as historical persons using Linked Open Data.',
      href: 'https://doi.org/10.5281/zenodo.15586904',
      category: 'presentations',
      date: 'June 2025',
      isoDate: '2025-06-03',
      authors:
        'Mourits, R., Pepping, K., van Oort, T., Konings, P. & van Duijvenvoorde, B.',
      venue: 'Digital Humanities Benelux 2025, Amsterdam',
      doi: '10.5281/zenodo.15586904',
    },
    {
      id: 'enslaved-historical-persons-2025',
      title: 'Modelling the Enslaved as Historical Persons',
      description:
        'Academic talk on modelling enslaved people as historical persons within the PiCo framework, presented at a dedicated research event.',
      href: 'https://pure.knaw.nl/portal/en/activities/modelling-the-enslaved-as-historical-persons/',
      category: 'presentations',
      date: 'November 2025',
      isoDate: '2025-11-20',
      authors:
        'Mourits, R., van Oort, T., Pepping, K., Konings, P. & van Duijvenvoorde, B.',
    },
    {
      id: 'slave-demography-2025',
      title: 'New Findings in the Slave Demography of Suriname',
      description:
        'Academic presentation discussing new demographic findings from the Suriname slave registers, presented by a multi-institutional team of researchers.',
      href: 'https://pure.knaw.nl/portal/en/activities/new-findings-in-the-slave-demography-of-suriname/',
      category: 'presentations',
      date: 'September 2025',
      isoDate: '2025-09-17',
      authors:
        'Kok, J., Quanjer, B., Rosenbaum-Feldbrügge, M., van Oort, T., Van Galen, C., MacDonald, A. & Mourits, R.',
    },

    // ── Published Data ──────────────────────────────────────────────────
    {
      id: 'plantations-almanakken',
      title: 'Plantations Surinaamse Almanakken',
      description:
        'Dataset of plantation records transcribed from the Surinaamsche Almanak (1818–1847) and the Almanak voor de Nederlandsche West-Indische bezittingen (1856–1861), linked to Wikidata entities.',
      href: 'https://hdl.handle.net/10622/4VOJYS',
      category: 'data',
      date: 'January 2025',
      isoDate: '2025-01-14',
      authors:
        'van Oort, T., Altink, N., Swaters, D., Smits, E., Pikulić, D., Rosenbaum-Feldbrügge, M., Quanjer, B. & Van Galen, C.',
    },
    {
      id: 'iiif-maps-collection',
      title: 'IIIF Historic Maps of Suriname',
      description:
        'A curated IIIF collection of digitized historic maps of Suriname from the university libraries of Amsterdam and Leiden, available for georeferencing and annotation.',
      href: 'https://surinametimemachine.github.io/iiif-suriname/manifest.json',
      category: 'data',
      date: '2025',
      isoDate: '2025-01-01',
    },

    // ── Published Code ──────────────────────────────────────────────────
    {
      id: 'github-citizen-science',
      title: 'Suriname Time Machine — Citizen Science Website',
      description:
        'Open-source Next.js website for the Suriname Time Machine project: participatory science events, interactive project gallery, annotation dashboard, and bilingual content.',
      href: 'https://github.com/SurinameTimeMachine/suriname-time-machine-citizen-science',
      category: 'code',
      date: '2025–2026',
      isoDate: '2025-01-01',
    },
    {
      id: 'github-iiif-suriname',
      title: 'IIIF Suriname — Map Collection Pipeline',
      description:
        'Python scripts for generating and maintaining the IIIF manifest of digitized historic Suriname maps from multiple archives.',
      href: 'https://github.com/SurinameTimeMachine/iiif-suriname',
      category: 'code',
      date: '2025',
      isoDate: '2025-01-01',
    },
  ],
};
