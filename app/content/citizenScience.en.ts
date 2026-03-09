import type { CitizenScienceContent } from './types';

export const citizenScienceEn: CitizenScienceContent = {
  locale: 'en',
  seo: {
    title: 'Participatory Science | Suriname Time Machine',
    description:
      'Join hands-on workshops and events organized by the Suriname Time Machine — georeferencing historic maps, enriching Wikidata, and annotating archival sources together.',
    openGraphLocale: 'en_US',
  },
  ui: {
    navigation: {
      locationLabel: 'Participatory Science',
      projectCode: 'STM',
      projectSubtitle: 'Participatory Science',
      languageToggleLabel: 'NL',
      backToHome: 'Back to Home',
    },
    hero: {
      tagline: 'Suriname Time Machine',
      title: 'Participatory Science & Events',
      lead: 'Contribute to historical research through hands-on workshops, mapathons, and collaborative data sessions. Everyone can help unlock the past.',
    },
    sections: {
      partners: 'Participating Organizations',
      workshops: 'Workshop Tables',
    },
    footer: {
      coordinatorLine: 'Project coordinator',
      organizationLabel: 'Huygens Institute',
    },
  },
  events: [
    {
      id: 'mapathon-2026-03',
      event: {
        title: 'Mapathon: Maps as a Source for Surinamese History',
        description:
          'The university libraries of Amsterdam and Leiden hold rich collections of historic Surinamese maps. These contain valuable data about plantations, rivers, streets, and buildings. During this Mapathon we will digitally capture that information — laying a foundation for linking it with other sources such as images and digitized documents about the people who lived there. There are different activities, suitable for both beginners and experienced tech enthusiasts. We provide coffee, tea, and drinks at the closing get-together. Just bring your laptop.',
        date: '9 March 2026',
        isoDate: '2026-03-09',
        time: '13:00 – 18:00',
        location:
          'Bushuis / Oost-Indisch Huis, Kloveniersburgwal 48, Amsterdam',
        locationHref:
          'https://amsterdamhumanitieshub.nl/shared/locaties/nl/binnenstad/bushuis.html',
        externalEventHref:
          'https://amsterdamhumanitieshub.nl/gedeelde-content/evenementen/2026/03/mapathon-surinaamse-geschiedenis.html',
        externalEventLabel: 'Event page at Amsterdam Humanities Hub',
      },
      partners: [
        {
          id: 'suriname-tijdmachine',
          name: 'Suriname Tijdmachine',
          href: 'https://www.huygens.knaw.nl/projecten/suriname-tijdmachine/',
        },
        {
          id: 'huygens',
          name: 'Huygens Instituut / Stichting Pica',
          href: 'https://www.huygens.knaw.nl/',
          logo: '/images/partners/huygens.png',
        },
        {
          id: 'allard-pierson',
          name: 'Allard Pierson / Universiteitsbibliotheek Amsterdam',
          href: 'https://allardpierson.nl/',
          logo: '/images/partners/allard-pierson.svg',
          darkBg: true,
        },
        {
          id: 'ub-leiden',
          name: 'Universiteitsbibliotheek Leiden',
          href: 'https://www.library.universiteitleiden.nl/',
          logo: '/images/partners/ub-leiden.png',
        },
        {
          id: 'allmaps',
          name: 'Allmaps / TU Delft',
          href: 'https://allmaps.org/',
          logo: '/images/partners/allmaps.svg',
        },
        {
          id: 'wikimedia-nl',
          name: 'Wikimedia Nederland',
          href: 'https://www.wikimedia.nl/',
          logo: '/images/partners/wikimedia-nl.png',
        },
        {
          id: 'hdsc',
          name: 'Historische Database van Suriname en de Cariben',
          href: 'http://www.hdsc.ning.com/',
          logo: '/images/partners/hdsc.png',
        },
        {
          id: 'create-uva',
          name: 'CREATE / Humanities Labs, UvA',
          href: 'https://aihr.uva.nl/humanities-labs/humanities-labs.html',
          logo: '/images/partners/create-uva.png',
        },
      ],
      workshops: [
        {
          id: 'georeferencing',
          title: 'Georeferencing Workshop',
          description:
            'Help place historic Suriname maps onto modern coordinates using Allmaps. By georeferencing archival maps, you make them searchable and comparable with contemporary satellite imagery.',
          links: [
            {
              label: 'Allmaps Editor',
              href: 'https://dev.explore.allmaps.org/#7.06/5.352/-54.974',
              description: 'Open the Allmaps georeferencing environment',
            },
            {
              label: 'Map List (Google Sheet)',
              href: 'https://docs.google.com/spreadsheets/d/1EmZpAuGE-UbB5z9CHYv_eZ7JBNzfGxdW2u9cUOa-QAw/edit?usp=sharing',
              description:
                'Spreadsheet with all maps available for georeferencing',
            },
            {
              label: 'IIIF Manifest',
              href: 'https://surinametimemachine.github.io/iiif-suriname/manifest.json',
              description: 'The IIIF manifest containing all digitized maps',
              copyable: true,
            },
          ],
        },
        {
          id: 'wikidata',
          title: 'Wikidata / Wikimedia / Wikipedia Workshop',
          description:
            'Improve the historical-geographical information about Suriname on Wikidata, as part of the Wiki goes Caribbean initiative. Add missing data, photographs, and structured knowledge about heritage sites.',
          links: [
            {
              label: 'WikiProject Plantations in Suriname',
              href: 'https://www.wikidata.org/wiki/Wikidata:WikiProject_Plantations_in_Suriname/Todo#s',
              description:
                'List of Wikidata items about Surinamese plantations that still need information',
            },
            {
              label: 'WikiShootMe — Suriname',
              href: 'https://wikishootme.toolforge.org/#lat=5.607704545696418&lng=-55.802306961268194&zoom=9&layers=wikidata_image,wikidata_no_image&sparql_filter=%3Fq%20wdt%3AP31%20wd%3AQ188913%3B%20wdt%3AP17%20wd%3AQ7646305%3B%20wdt%3AP625%20%3Flocation.&worldwide=1',
              description:
                'Map of Wikidata items in Suriname — find locations that still need a photo',
            },
            {
              label: 'Suriname Heritage Guide',
              href: 'https://www.suriname-heritage-guide.com/',
              description:
                'Reference guide to cultural heritage sites in Suriname',
            },
            {
              label: '3D Warehouse — Suriname Heritage',
              href: 'https://3dwarehouse.sketchup.com/collection/u75b64c27-da53-437b-a355-49f486deb677/Suriname-heritage',
              description: '3D models of Surinamese heritage buildings',
            },
          ],
        },
        {
          id: 'map-annotation',
          title: 'Map Annotation Workshop',
          description:
            'Annotate historic maps with re:Charted — a tool for adding structured notes and transcriptions directly onto map images. Your annotations help make handwritten map details machine-readable and searchable.',
          links: [
            {
              label: 're:Charted — Suriname Project',
              href: 'https://necessaryreunions.org/viewer?project=suriname&canvas=c1',
              description: 'Open the re:Charted annotation viewer for Suriname',
            },
            {
              label: 're:Charted Documentation (EN)',
              href: 'https://necessaryreunions.org/documentation',
              description: 'How to use re:Charted — English guide',
            },
            {
              label: 're:Charted Documentatie (NL)',
              href: '/documentatie/recharted',
              description: 'Handleiding voor re:Charted — Nederlandse versie',
            },
            {
              label: 'IIIF Manifest (for other viewers)',
              href: 'https://surinametimemachine.github.io/iiif-suriname/manifest.json',
              description:
                'Use the manifest with Mirador, Theseus Viewer, IIIF Live, Universal Viewer, or other IIIF-compatible tools',
              copyable: true,
            },
            {
              label: 'ORCID for annotation attribution',
              href: 'https://docs.google.com/spreadsheets/d/1SPGA--E5eslwkssQfhgH9JHP4zipg3vM8Oe1bY1nQhI/edit?usp=sharing',
              description:
                'Add your ORCID to the excel sheet to get access to re:Charted for Suriname maps.',
            },
            {
              label: 'Dashboard with live annotation stats',
              href: '/dashboard',
              description:
                'View real-time statistics of annotations made on Suriname maps',
            },
          ],
        },
      ],
    },
  ],
};
