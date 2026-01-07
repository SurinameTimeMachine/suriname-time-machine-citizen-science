import type { ProjectsContent } from './types';

export const projectsNl: ProjectsContent = {
  locale: 'nl',
  seo: {
    title: 'Projecten | Suriname Tijdmachine',
    description:
      'Ontdek digitale tools en interactieve toepassingen ontwikkeld binnen het Suriname Tijdmachine project — historische kaarten, datavisualisaties en onderzoekstools.',
    openGraphLocale: 'nl_NL',
  },
  ui: {
    navigation: {
      locationLabel: 'Projecten',
      projectCode: 'STM',
      projectSubtitle: 'Digitale Tools',
      languageToggleLabel: 'EN',
      backToHome: 'Terug naar Home',
    },
    hero: {
      tagline: 'Suriname Tijdmachine',
      title: 'Digitale Projecten & Tools',
      lead: 'Een verzameling interactieve toepassingen, visualisaties en onderzoekstools ontwikkeld binnen het Suriname Tijdmachine project om historische data toegankelijk en verkenbaar te maken.',
    },
    categories: {
      maps: 'Historische Kaarten',
      data: 'Data Tools',
      interactive: 'Interactieve Toepassingen',
    },
    footer: {
      coordinatorLine: 'Projectcoördinator',
      organizationLabel: 'Huygens Instituut',
    },
  },
  projects: [
    {
      id: 'iiif-maps',
      title: 'IIIF Historische Kaartencollectie',
      description:
        'Een samengestelde collectie van gedigitaliseerde historische kaarten van Suriname uit verschillende archieven, toegankelijk via de IIIF-standaard. Bevat plantagenkaarten, stadsplattegronden en regionale landmeetkundige kaarten uit de 18e en 19e eeuw.',
      href: 'https://surinametimemachine.github.io/iiif-suriname/manifest.json',
      category: 'maps',
      thumbnail: {
        src: '/images/projects/iiif-maps.svg',
        alt: 'Historische kaart van Suriname uit de IIIF-collectie',
      },
    },
    {
      id: 'allmaps-georeferenced',
      title: 'Gerefereerde Kaarten op Allmaps',
      description:
        'Historische Suriname-kaarten die zijn gerefereerd en over moderne kaarten kunnen worden gelegd. Ontdek hoe het landschap door de eeuwen heen is veranderd door historische cartografie te vergelijken met hedendaagse satellietbeelden.',
      href: 'https://dev.explore.allmaps.org/#7.06/5.352/-54.974',
      category: 'maps',
      thumbnail: {
        src: '/images/projects/allmaps.svg',
        alt: 'Gerefereerde historische kaartoverlay op Allmaps',
      },
    },
    {
      id: 'wikidata-filter',
      title: 'Wikidata Suriname Filter',
      description:
        'Een aangepaste filtertool voor het verkennen van Wikidata-items gerelateerd aan Suriname. Zoek en blader door gestructureerde data over mensen, plaatsen, gebeurtenissen en objecten verbonden met de Surinaamse geschiedenis.',
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
        "Kaartgebaseerde visualisatie van Wikidata-items in Suriname, met markering van locaties die foto's nodig hebben. Draag bij aan open kennis door historische plaatsen en monumenten te identificeren en te fotograferen.",
      href: 'https://wikishootme.toolforge.org/#lat=5.607704545696418&lng=-55.802306961268194&zoom=9&layers=wikidata_image,wikidata_no_image&sparql_filter=%3Fq%20wdt%3AP31%20wd%3AQ188913%3B%20wdt%3AP17%20wd%3AQ7646305%3B%20wdt%3AP625%20%3Flocation.&worldwide=1',
      category: 'data',
      thumbnail: {
        src: '/images/projects/wikishootme.svg',
        alt: 'WikiShootMe kaart met Suriname-locaties',
      },
    },
    {
      id: 'htr-search',
      title: 'HTR Zoektool',
      description:
        'Zoek door handschriftherkenning (HTR) resultaten van historische Surinaamse documenten. Vind vermeldingen van mensen, plaatsen en gebeurtenissen in getranscribeerde archiefbronnen.',
      href: 'https://dekok.xyz/htrsearch/',
      category: 'data',
      thumbnail: {
        src: '/images/projects/htr-search.svg',
        alt: 'HTR Zoekinterface voor historische documenten',
      },
    },
    {
      id: 'suriname-plantations-old',
      title: 'Suriname Plantages (Klassiek)',
      description:
        'De oorspronkelijke interactieve kaart met gedigitaliseerde plantagedata over historische kaarten. Verken de locaties en details van Surinaamse plantages uit historische bronnen.',
      href: 'https://dekok.xyz/suriname/',
      category: 'interactive',
      thumbnail: {
        src: '/images/projects/plantations-old.svg',
        alt: 'Klassieke Suriname plantages kaartinterface',
      },
    },
    {
      id: 'suriname-plantations-new',
      title: 'Suriname Plantages (Nieuw)',
      description:
        'De herontworpen en verbeterde plantage-verkenner met verbeterde navigatie, extra datalagen en betere integratie met archiefbronnen. De nieuwste evolutie van ons plantagenkarteringsproject.',
      href: 'https://suriname.dekok.xyz/',
      category: 'interactive',
      thumbnail: {
        src: '/images/projects/plantations-new.svg',
        alt: 'Nieuwe Suriname plantages verkenner interface',
      },
    },
  ],
};
