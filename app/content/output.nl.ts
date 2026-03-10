import type { OutputContent } from './types';

export const outputNl: OutputContent = {
  locale: 'nl',
  seo: {
    title: 'Output | Suriname Tijdmachine',
    description:
      'Publicaties, presentaties, datasets, evenementen en open-source code van het Suriname Tijdmachine-project.',
    openGraphLocale: 'nl_NL',
  },
  ui: {
    navigation: {
      locationLabel: 'Output',
      projectCode: 'STM',
      projectSubtitle: 'Projectoutput',
      languageToggleLabel: 'EN',
      backToHome: 'Terug naar Home',
    },
    hero: {
      tagline: 'Suriname Tijdmachine',
      title: 'Projectoutput',
      lead: 'Een overzicht van evenementen, wetenschappelijke publicaties, presentaties, gepubliceerde datasets, open-source code en media van het Suriname Tijdmachine-project.',
    },
    categories: {
      events: 'Evenementen',
      articles: 'Wetenschappelijke Artikelen & Boekhoofstukken',
      presentations: 'Wetenschappelijke Presentaties',
      data: 'Gepubliceerde Data',
      code: 'Gepubliceerde Code',
      media: 'Media & Commentaar',
    },
    footer: {
      coordinatorLine: 'Projectcoördinator',
      organizationLabel: 'Huygens Instituut',
    },
  },
  items: [
    // ── Evenementen ─────────────────────────────────────────────────────
    {
      id: 'mapathon-2026-03',
      title: 'Mapathon: Kaarten als Bron voor Surinaamse Geschiedenis',
      description:
        'Hands-on mapathon in het Bushuis / Oost-Indisch Huis in Amsterdam. Deelnemers georefereerden historische kaarten, verrijkten Wikidata en annoteerden archiefbronnen.',
      href: '/participatie',
      category: 'events',
      date: '9 maart 2026',
      isoDate: '2026-03-09',
      venue: 'Bushuis / Oost-Indisch Huis, Amsterdam',
    },
    {
      id: 'ecsa-2026',
      title:
        'Sranan Story Collective: Een Citizen Science Project starten over Surinaams Erfgoed',
      description:
        'Presentatie op de European Citizen Science Association (ECSA) 2026-conferentie in Oulu, Finland, over de citizen-science-ambities en -methoden van de Suriname Tijdmachine.',
      href: '/ecsa2026/',
      category: 'events',
      date: 'Maart 2026',
      isoDate: '2026-03-01',
      venue: 'ECSA 2026, Oulu, Finland',
    },

    // ── Wetenschappelijke Artikelen & Boekhoofstukken ───────────────────
    {
      id: 'palgrave-citizen-science',
      title:
        'Citizen Science and Participatory Engagement with a Contentious Past: The Historical Database of Suriname and the Caribbean',
      description:
        'Boekhoofstuk dat onderzoekt hoe citizen science zinvolle betrokkenheid biedt bij een pijnlijk koloniaal verleden, aan de hand van de Historical Database of Suriname and the Caribbean (HDSC).',
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
        'Artikel over de HDSC-pipeline voor het creëren van open-access historische bevolkingsdatabases in het Caribisch gebied, met workflows, datakoppeling en een uitnodiging tot trans-Caribische samenwerking.',
      href: 'https://doi.org/10.7916/ARCHIPELAGOS-WKX1-PD50',
      category: 'articles',
      date: 'April 2025',
      isoDate: '2025-04-08',
      authors:
        'Quanjer, B., van Oort, T., Rosenbaum-Feldbrügge, M., Van Galen, C., Hoek, L. & Tjong Kim Sang, E.',
      venue: 'archipelagos: a journal of Caribbean digital praxis, 2025(8)',
      doi: '10.7916/ARCHIPELAGOS-WKX1-PD50',
    },

    // ── Presentaties ────────────────────────────────────────────────────
    {
      id: 'ecsa-2026-presentation',
      title:
        'Sranan Story Collective: Een Citizen Science Project starten over Surinaams Erfgoed',
      description:
        'Presentatie op ECSA 2026 over hoe de Suriname Tijdmachine gemeenschappen betrekt bij citizen science rond Surinaams erfgoed, met georeferencing, Wikidata-bewerking en kaartannotatie.',
      href: '/ecsa2026/',
      category: 'presentations',
      date: 'Maart 2026',
      isoDate: '2026-03-01',
      venue: 'ECSA 2026, Oulu, Finland',
    },
    {
      id: 'dhbenelux-pico-2025',
      title:
        'Modelling the Enslaved as Historical Persons: Extending the Persons in Context (PiCo) Model to Fit Enslaved Individuals',
      description:
        'Conferentie-abstract gepresenteerd op Digital Humanities Benelux 2025 over het uitbreiden van het PiCo-datamodel om tot slaaf gemaakte personen als historische personen te representeren met Linked Open Data.',
      href: 'https://doi.org/10.5281/zenodo.15586904',
      category: 'presentations',
      date: 'Juni 2025',
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
        'Academische lezing over het modelleren van tot slaaf gemaakte mensen als historische personen binnen het PiCo-framework.',
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
        'Academische presentatie over nieuwe demografische bevindingen uit de Surinaamse slavenregisters, gepresenteerd door een multi-institutioneel onderzoeksteam.',
      href: 'https://pure.knaw.nl/portal/en/activities/new-findings-in-the-slave-demography-of-suriname/',
      category: 'presentations',
      date: 'September 2025',
      isoDate: '2025-09-17',
      authors:
        'Kok, J., Quanjer, B., Rosenbaum-Feldbrügge, M., van Oort, T., Van Galen, C., MacDonald, A. & Mourits, R.',
    },

    // ── Gepubliceerde Data ──────────────────────────────────────────────
    {
      id: 'plantations-almanakken',
      title: 'Plantations Surinaamse Almanakken',
      description:
        'Dataset van plantagegegevens getranscribeerd uit de Surinaamsche Almanak (1818–1847) en de Almanak voor de Nederlandsche West-Indische bezittingen (1856–1861), gekoppeld aan Wikidata-entiteiten.',
      href: 'https://hdl.handle.net/10622/4VOJYS',
      category: 'data',
      date: 'Januari 2025',
      isoDate: '2025-01-14',
      authors:
        'van Oort, T., Altink, N., Swaters, D., Smits, E., Pikulić, D., Rosenbaum-Feldbrügge, M., Quanjer, B. & Van Galen, C.',
    },
    {
      id: 'iiif-maps-collection',
      title: 'IIIF Historische Kaarten van Suriname',
      description:
        'Een samengestelde IIIF-collectie van gedigitaliseerde historische kaarten van Suriname uit de universiteitsbibliotheken van Amsterdam en Leiden, beschikbaar voor georeferencing en annotatie.',
      href: 'https://surinametimemachine.github.io/iiif-suriname/manifest.json',
      category: 'data',
      date: '2025',
      isoDate: '2025-01-01',
    },

    // ── Gepubliceerde Code ──────────────────────────────────────────────
    {
      id: 'github-citizen-science',
      title: 'Suriname Tijdmachine — Citizen Science Website',
      description:
        'Open-source Next.js-website voor het Suriname Tijdmachine-project: participatieve wetenschapsevenementen, interactieve projectgalerij, annotatie-dashboard en tweetalige content.',
      href: 'https://github.com/SurinameTimeMachine/suriname-time-machine-citizen-science',
      category: 'code',
      date: '2025–2026',
      isoDate: '2025-01-01',
    },
    {
      id: 'github-iiif-suriname',
      title: 'IIIF Suriname — Kaartcollectie Pipeline',
      description:
        'Python-scripts voor het genereren en onderhouden van het IIIF-manifest van gedigitaliseerde historische Surinaamse kaarten uit meerdere archieven.',
      href: 'https://github.com/SurinameTimeMachine/iiif-suriname',
      category: 'code',
      date: '2025',
      isoDate: '2025-01-01',
    },
  ],
};
