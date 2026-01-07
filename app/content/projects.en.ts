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
};
