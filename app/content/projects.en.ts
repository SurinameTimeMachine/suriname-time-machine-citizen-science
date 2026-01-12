import type { ProjectsContent } from './types';

export const projectsEn: ProjectsContent = {
  locale: 'en',
  seo: {
    title: 'Projects | Suriname Time Machine',
    description:
      'Explore digital tools and interactive applications created as part of the Suriname Time Machine project — historic maps, data visualizations, and research tools.',
    openGraphLocale: 'en_US',
  },
  ui: {
    navigation: {
      locationLabel: 'Projects',
      projectCode: 'STM',
      projectSubtitle: 'Digital Tools',
      languageToggleLabel: 'NL',
      backToHome: 'Back to Home',
    },
    hero: {
      tagline: 'Suriname Time Machine',
      title: 'Digital Projects & Tools',
      lead: 'A collection of interactive applications, visualizations, and research tools developed within the Suriname Time Machine project to make historical data accessible and explorable.',
    },
    categories: {
      maps: 'Historic Maps',
      data: 'Data Tools',
      interactive: 'Interactive Applications',
    },
    footer: {
      coordinatorLine: 'Project coordinator',
      organizationLabel: 'Huygens Institute',
    },
  },
  resourcesUi: {
    title: 'Resources & Bookmarks',
    lead: 'A curated collection of external resources, archives, and tools related to Surinamese history and digital heritage projects.',
    filters: {
      all: 'All',
      archive: 'Archives',
      tool: 'Tools',
      inspiration: 'Inspiration',
      reference: 'Reference',
      collaboration: 'Collaboration',
    },
    searchPlaceholder: 'Search resources...',
    noResults: 'No resources found matching your criteria.',
    tableHeaders: {
      name: 'Name',
      description: 'Description',
      purpose: 'Purpose',
      keywords: 'Keywords',
    },
  },
  projects: [
    {
      id: 'iiif-maps',
      title: 'IIIF Historic Maps Collection',
      description:
        'A curated collection of digitized historic maps of Suriname from various archives, accessible via the IIIF standard. Includes plantation maps, city plans, and regional surveys from the 18th and 19th centuries.',
      href: 'https://surinametimemachine.github.io/iiif-suriname/manifest.json',
      category: 'maps',
      thumbnail: {
        src: '/images/projects/iiif-maps.svg',
        alt: 'Historic map of Suriname from the IIIF collection',
      },
    },
    {
      id: 'allmaps-georeferenced',
      title: 'Georeferenced Maps on Allmaps',
      description:
        'Historic Suriname maps that have been georeferenced and can be overlaid on modern maps. Explore how the landscape has changed over centuries by comparing historical cartography with contemporary satellite imagery.',
      href: 'https://dev.explore.allmaps.org/#7.06/5.352/-54.974',
      category: 'maps',
      thumbnail: {
        src: '/images/projects/allmaps.svg',
        alt: 'Georeferenced historic map overlay on Allmaps',
      },
    },
    {
      id: 'wikidata-filter',
      title: 'Wikidata Suriname Filter',
      description:
        'A custom filtering tool for exploring Wikidata entries related to Suriname. Search and browse structured data about people, places, events, and objects connected to Surinamese history.',
      href: 'https://wikidata-suriname-filter.vercel.app/',
      category: 'data',
      thumbnail: {
        src: '/images/projects/wikidata-filter.svg',
        alt: 'Wikidata Suriname filter interface',
      },
    },
    {
      id: 'wikishootme',
      title: 'WikiShootMe Suriname',
      description:
        'Map-based visualization of Wikidata items in Suriname, highlighting locations that need photographs. Contribute to open knowledge by identifying and photographing historical sites and landmarks.',
      href: 'https://wikishootme.toolforge.org/#lat=5.607704545696418&lng=-55.802306961268194&zoom=9&layers=wikidata_image,wikidata_no_image&sparql_filter=%3Fq%20wdt%3AP31%20wd%3AQ188913%3B%20wdt%3AP17%20wd%3AQ7646305%3B%20wdt%3AP625%20%3Flocation.&worldwide=1',
      category: 'data',
      thumbnail: {
        src: '/images/projects/wikishootme.svg',
        alt: 'WikiShootMe map showing Suriname locations',
      },
    },
    {
      id: 'htr-search',
      title: 'HTR Search Tool',
      description:
        'Search through handwritten text recognition (HTR) results from historical Suriname documents. Find mentions of people, places, and events in transcribed archival sources.',
      href: 'https://dekok.xyz/htrsearch/',
      category: 'data',
      thumbnail: {
        src: '/images/projects/htr-search.svg',
        alt: 'HTR Search interface for historical documents',
      },
    },
    {
      id: 'suriname-plantations-old',
      title: 'Suriname Plantations (Classic)',
      description:
        'The original interactive map showing digitized plantation data overlaid on historic maps. Explore the locations and details of Surinamese plantations from historical records.',
      href: 'https://dekok.xyz/suriname/',
      category: 'interactive',
      thumbnail: {
        src: '/images/projects/plantations-old.svg',
        alt: 'Classic Suriname plantations map interface',
      },
    },
    {
      id: 'suriname-plantations-new',
      title: 'Suriname Plantations (New)',
      description:
        'The redesigned and enhanced plantation explorer with improved navigation, additional data layers, and better integration with archival sources. The latest evolution of our plantation mapping project.',
      href: 'https://suriname.dekok.xyz/',
      category: 'interactive',
      thumbnail: {
        src: '/images/projects/plantations-new.svg',
        alt: 'New Suriname plantations explorer interface',
      },
    },
  ],
  resources: [
    {
      id: 'gtm-valeros',
      name: 'Gouda Time Machine Valeros',
      description:
        'Interactive viewer for the Gouda Time Machine project, showcasing historical data visualization techniques.',
      href: 'https://gtm-valeros.vercel.app/',
      purpose: 'inspiration',
      keywords: ['time machine', 'viewer', 'historical data', 'visualization'],
    },
    {
      id: 'gouda-tijdmachine-github',
      name: 'Gouda Tijdmachine GitHub',
      description:
        'Open source repository for the Gouda Time Machine project. Explore code, methodologies, and technical implementations.',
      href: 'https://github.com/gouda-tijdmachine',
      purpose: 'collaboration',
      keywords: ['open source', 'github', 'code', 'time machine'],
    },
    {
      id: 'gouda-viewer',
      name: 'Gouda Tijdmachine Viewer',
      description:
        'Public viewer for exploring historical maps and data from Gouda, Netherlands.',
      href: 'https://viewer.goudatijdmachine.nl/',
      purpose: 'inspiration',
      keywords: ['viewer', 'maps', 'historical', 'netherlands'],
    },
    {
      id: 'geonovum-geooptijd',
      name: 'Geonovum Geo op Tijd',
      description:
        'Dutch geospatial standards and best practices for working with historical geographic data over time.',
      href: 'https://geonovum.github.io/geooptijd/',
      purpose: 'reference',
      keywords: ['geospatial', 'standards', 'temporal', 'gis'],
      institution: 'Geonovum',
    },
    {
      id: 'plantages-suriname-nl',
      name: 'Plantages in Suriname',
      description:
        'Comprehensive database and research portal about plantations in Suriname with historical records and genealogical data.',
      href: 'https://www.plantagesinsuriname.nl/',
      purpose: 'reference',
      keywords: ['plantations', 'history', 'genealogy', 'database'],
    },
    {
      id: 'iisg-hdsc',
      name: 'HDSC Datasets (IISG)',
      description:
        'Historical Database of Suriname and Curaçao hosted by the International Institute of Social History. Rich datasets for research.',
      href: 'https://datasets.iisg.amsterdam/dataverse/HDSC',
      purpose: 'archive',
      keywords: ['datasets', 'research', 'social history', 'database'],
      institution: 'IISG Amsterdam',
    },
    {
      id: 'dloc',
      name: 'Digital Library of the Caribbean',
      description:
        'Cooperative digital library providing access to Caribbean cultural, historical, and research materials.',
      href: 'https://dloc.com/',
      purpose: 'archive',
      keywords: ['library', 'caribbean', 'digitization', 'cultural heritage'],
    },
    {
      id: 'hackalod',
      name: 'HackaLOD Projects',
      description:
        'Collection of linked open data projects and experiments, including historical data hackathon results.',
      href: 'https://hackalod.dekok.xyz/',
      purpose: 'collaboration',
      keywords: ['linked data', 'hackathon', 'open data', 'experiments'],
    },
    {
      id: 'nationaal-archief-sr',
      name: 'Nationaal Archief Suriname',
      description:
        'Official national archives of Suriname with access to historical documents, records, and research guides.',
      href: 'https://nationaalarchief.sr/',
      purpose: 'archive',
      keywords: ['archives', 'suriname', 'documents', 'records'],
      institution: 'Nationaal Archief Suriname',
    },
    {
      id: 'nationaal-archief-nl-suriname',
      name: 'NA Netherlands - Suriname Collections',
      description:
        'Dutch National Archives overview of archival collections related to Suriname, including colonial records.',
      href: 'https://www.nationaalarchief.nl/onderzoeken/zoekhulpen/suriname/overzicht-van-archieven-over-suriname',
      purpose: 'archive',
      keywords: ['archives', 'colonial', 'netherlands', 'collections'],
      institution: 'Nationaal Archief NL',
    },
    {
      id: 'alle-surinamers',
      name: 'Alle Surinamers - Digitized Archives',
      description:
        'Portal to digitized archives related to Surinamese people, genealogy, and historical records.',
      href: 'https://www.allesurinamers.org/gedigitaliseerde-archieven/',
      purpose: 'archive',
      keywords: ['genealogy', 'people', 'digitization', 'records'],
    },
    {
      id: 'suriname-plantages-com',
      name: 'Suriname Plantages',
      description:
        'Research website dedicated to the history of Surinamese plantations with maps, owners, and enslaved people records.',
      href: 'https://www.surinameplantages.com/',
      purpose: 'reference',
      keywords: ['plantations', 'slavery', 'research', 'maps'],
    },
    {
      id: '3d-warehouse-suriname',
      name: '3D Warehouse - Suriname Heritage',
      description:
        'Collection of 3D models representing Surinamese heritage buildings and historical structures.',
      href: 'https://3dwarehouse.sketchup.com/collection/u75b64c27-da53-437b-a355-49f486deb677/Suriname-heritage',
      purpose: 'inspiration',
      keywords: ['3d models', 'architecture', 'heritage', 'buildings'],
    },
    {
      id: 'suriname-heritage-guide',
      name: 'Suriname Heritage Guide',
      description:
        'Comprehensive guide to cultural heritage sites, monuments, and historical locations in Suriname.',
      href: 'https://www.suriname-heritage-guide.com/',
      purpose: 'reference',
      keywords: ['heritage', 'monuments', 'tourism', 'culture'],
    },
    {
      id: 'concordans-paramaribo',
      name: 'Concordans Paramaribo',
      description:
        'Historical concordance project mapping historical addresses and locations in Paramaribo over time.',
      href: 'https://www.concordansparamaribo.info/',
      purpose: 'tool',
      keywords: ['addresses', 'paramaribo', 'historical', 'mapping'],
    },
    {
      id: 'atlas-mutual-heritage',
      name: 'Atlas of Mutual Heritage',
      description:
        'Interactive atlas documenting shared Dutch colonial heritage sites worldwide, including Suriname.',
      href: 'https://www.atlasofmutualheritage.nl/',
      purpose: 'reference',
      keywords: ['atlas', 'colonial', 'heritage', 'voc', 'wic'],
      institution: 'Rijksmuseum / Nationaal Archief',
    },
    {
      id: 'necessary-reunions',
      name: 'Necessary Reunions',
      description:
        'Art and research project exploring connections between historical objects, archives, and contemporary communities.',
      href: 'https://necessaryreunions.org/',
      purpose: 'inspiration',
      keywords: ['art', 'research', 'communities', 'decolonization'],
    },
  ],
};
