import type { ProjectsContent } from './types';

export const projectsNl: ProjectsContent = {
  locale: 'nl',
  seo: {
    title: 'Projecten | Suriname Tijdmachine',
    description:
      'Ontdek digitale tools en interactieve toepassingen ontwikkeld binnen het Suriname Tijdmachine project, waaronder historische kaarten, datavisualisaties en onderzoekstools.',
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
  resourcesUi: {
    title: 'Bronnen & Bladwijzers',
    lead: 'Een samengestelde collectie van externe bronnen, archieven en tools gerelateerd aan de Surinaamse geschiedenis en digitale erfgoedprojecten.',
    filters: {
      all: 'Alles',
      archive: 'Archieven',
      tool: 'Tools',
      inspiration: 'Inspiratie',
      reference: 'Referentie',
      collaboration: 'Samenwerking',
    },
    searchPlaceholder: 'Zoek bronnen...',
    noResults: 'Geen bronnen gevonden die voldoen aan uw criteria.',
    tableHeaders: {
      name: 'Naam',
      description: 'Beschrijving',
      purpose: 'Doel',
      keywords: 'Trefwoorden',
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
  resources: [
    {
      id: 'gtm-valeros',
      name: 'Gouda Tijdmachine Valeros',
      description:
        'Interactieve viewer voor het Gouda Tijdmachine-project, met technieken voor historische datavisualisatie.',
      href: 'https://gtm-valeros.vercel.app/',
      purpose: 'inspiration',
      keywords: ['tijdmachine', 'viewer', 'historische data', 'visualisatie'],
    },
    {
      id: 'gouda-tijdmachine-github',
      name: 'Gouda Tijdmachine GitHub',
      description:
        'Open source repository voor het Gouda Tijdmachine-project. Verken code, methodologieën en technische implementaties.',
      href: 'https://github.com/gouda-tijdmachine',
      purpose: 'collaboration',
      keywords: ['open source', 'github', 'code', 'tijdmachine'],
    },
    {
      id: 'gouda-viewer',
      name: 'Gouda Tijdmachine Viewer',
      description:
        'Publieke viewer voor het verkennen van historische kaarten en data uit Gouda, Nederland.',
      href: 'https://viewer.goudatijdmachine.nl/',
      purpose: 'inspiration',
      keywords: ['viewer', 'kaarten', 'historisch', 'nederland'],
    },
    {
      id: 'geonovum-geooptijd',
      name: 'Geonovum Geo op Tijd',
      description:
        'Nederlandse geo-standaarden en best practices voor het werken met historische geografische data door de tijd.',
      href: 'https://geonovum.github.io/geooptijd/',
      purpose: 'reference',
      keywords: ['geospatiaal', 'standaarden', 'temporeel', 'gis'],
      institution: 'Geonovum',
    },
    {
      id: 'plantages-suriname-nl',
      name: 'Plantages in Suriname',
      description:
        'Uitgebreide database en onderzoeksportaal over plantages in Suriname met historische bronnen en genealogische data.',
      href: 'https://www.plantagesinsuriname.nl/',
      purpose: 'reference',
      keywords: ['plantages', 'geschiedenis', 'genealogie', 'database'],
    },
    {
      id: 'iisg-hdsc',
      name: 'HDSC Datasets (IISG)',
      description:
        'Historische Database van Suriname en Curaçao gehost door het Internationaal Instituut voor Sociale Geschiedenis. Rijke datasets voor onderzoek.',
      href: 'https://datasets.iisg.amsterdam/dataverse/HDSC',
      purpose: 'archive',
      keywords: ['datasets', 'onderzoek', 'sociale geschiedenis', 'database'],
      institution: 'IISG Amsterdam',
    },
    {
      id: 'dloc',
      name: 'Digital Library of the Caribbean',
      description:
        'Coöperatieve digitale bibliotheek die toegang biedt tot Caribische culturele, historische en onderzoeksmaterialen.',
      href: 'https://dloc.com/',
      purpose: 'archive',
      keywords: [
        'bibliotheek',
        'caribisch',
        'digitalisering',
        'cultureel erfgoed',
      ],
    },
    {
      id: 'hackalod',
      name: 'HackaLOD Projecten',
      description:
        'Collectie van linked open data projecten en experimenten, inclusief resultaten van historische data hackathons.',
      href: 'https://hackalod.dekok.xyz/',
      purpose: 'collaboration',
      keywords: ['linked data', 'hackathon', 'open data', 'experimenten'],
    },
    {
      id: 'nationaal-archief-sr',
      name: 'Nationaal Archief Suriname',
      description:
        'Officieel nationaal archief van Suriname met toegang tot historische documenten, dossiers en onderzoeksgidsen.',
      href: 'https://nationaalarchief.sr/',
      purpose: 'archive',
      keywords: ['archieven', 'suriname', 'documenten', 'dossiers'],
      institution: 'Nationaal Archief Suriname',
    },
    {
      id: 'nationaal-archief-nl-suriname',
      name: 'NA Nederland - Suriname Collecties',
      description:
        'Overzicht van archiefcollecties over Suriname bij het Nationaal Archief Nederland, inclusief koloniale dossiers.',
      href: 'https://www.nationaalarchief.nl/onderzoeken/zoekhulpen/suriname/overzicht-van-archieven-over-suriname',
      purpose: 'archive',
      keywords: ['archieven', 'koloniaal', 'nederland', 'collecties'],
      institution: 'Nationaal Archief NL',
    },
    {
      id: 'alle-surinamers',
      name: 'Alle Surinamers - Gedigitaliseerde Archieven',
      description:
        'Portaal naar gedigitaliseerde archieven over Surinaamse mensen, genealogie en historische bronnen.',
      href: 'https://www.allesurinamers.org/gedigitaliseerde-archieven/',
      purpose: 'archive',
      keywords: ['genealogie', 'mensen', 'digitalisering', 'dossiers'],
    },
    {
      id: 'suriname-plantages-com',
      name: 'Suriname Plantages',
      description:
        'Onderzoekswebsite gewijd aan de geschiedenis van Surinaamse plantages met kaarten, eigenaren en gegevens over tot slaaf gemaakten.',
      href: 'https://www.surinameplantages.com/',
      purpose: 'reference',
      keywords: ['plantages', 'slavernij', 'onderzoek', 'kaarten'],
    },
    {
      id: '3d-warehouse-suriname',
      name: '3D Warehouse - Suriname Erfgoed',
      description:
        'Collectie van 3D-modellen van Surinaamse erfgoedgebouwen en historische structuren.',
      href: 'https://3dwarehouse.sketchup.com/collection/u75b64c27-da53-437b-a355-49f486deb677/Suriname-heritage',
      purpose: 'inspiration',
      keywords: ['3d modellen', 'architectuur', 'erfgoed', 'gebouwen'],
    },
    {
      id: 'suriname-heritage-guide',
      name: 'Suriname Heritage Guide',
      description:
        'Uitgebreide gids voor cultureel erfgoed, monumenten en historische locaties in Suriname.',
      href: 'https://www.suriname-heritage-guide.com/',
      purpose: 'reference',
      keywords: ['erfgoed', 'monumenten', 'toerisme', 'cultuur'],
    },
    {
      id: 'concordans-paramaribo',
      name: 'Concordans Paramaribo',
      description:
        'Historisch concordantie-project dat historische adressen en locaties in Paramaribo door de tijd in kaart brengt.',
      href: 'https://www.concordansparamaribo.info/',
      purpose: 'tool',
      keywords: ['adressen', 'paramaribo', 'historisch', 'kartering'],
    },
    {
      id: 'atlas-mutual-heritage',
      name: 'Atlas of Mutual Heritage',
      description:
        'Interactieve atlas die gedeeld Nederlands koloniaal erfgoed wereldwijd documenteert, inclusief Suriname.',
      href: 'https://www.atlasofmutualheritage.nl/',
      purpose: 'reference',
      keywords: ['atlas', 'koloniaal', 'erfgoed', 'voc', 'wic'],
      institution: 'Rijksmuseum / Nationaal Archief',
    },
    {
      id: 'necessary-reunions',
      name: 'Necessary Reunions',
      description:
        'Kunst- en onderzoeksproject dat verbindingen verkent tussen historische objecten, archieven en hedendaagse gemeenschappen.',
      href: 'https://necessaryreunions.org/',
      purpose: 'inspiration',
      keywords: ['kunst', 'onderzoek', 'gemeenschappen', 'dekolonisatie'],
    },
    {
      id: 'suriname-database-model',
      name: 'Suriname Tijdmachine Databasemodel',
      description:
        'Interactieve visualisatie van het Linked Open Data-model van de Suriname Tijdmachine, met 1.596 historische plantages gemodelleerd met CIDOC-CRM.',
      href: 'https://suriname-database-model.vercel.app/',
      purpose: 'tool',
      keywords: ['linked data', 'CIDOC-CRM', 'datamodel', 'plantages'],
      institution: 'Huygens Instituut',
    },
    {
      id: 'amsterdam-time-machine',
      name: 'Amsterdam Time Machine',
      description:
        'Publieke onderzoeksbron over de geschiedenis van Amsterdam, met locatiegebonden toegang tot historische informatie als Linked Open Data.',
      href: 'https://www.amsterdamtimemachine.nl/',
      purpose: 'inspiration',
      keywords: ['tijdmachine', 'amsterdam', 'linked data', 'geschiedenis'],
      institution: 'Universiteit van Amsterdam',
    },
    {
      id: 'allmaps',
      name: 'Allmaps',
      description:
        'Open-source platform voor het cureren, georefereren en verkennen van IIIF-kaarten. Gebruikt in de Suriname Tijdmachine voor het georefereren van historische kaarten.',
      href: 'https://allmaps.org/',
      purpose: 'tool',
      keywords: ['IIIF', 'georeferencing', 'kaarten', 'open source'],
    },
    {
      id: 'allmaps-explore',
      name: 'Allmaps Explore – Suriname',
      description:
        'Experimentele interface voor het verkennen van alle kaarten die met Allmaps zijn gerefereerd, gericht op de regio Suriname.',
      href: 'https://dev.explore.allmaps.org/#7.06/5.352/-54.974',
      purpose: 'tool',
      keywords: ['allmaps', 'verkennen', 'georeferencing', 'kaarten'],
    },
    {
      id: 'github-suriname-time-machine',
      name: 'Suriname Tijdmachine GitHub',
      description:
        'GitHub-organisatie met open-source repositories voor het Suriname Tijdmachine-project.',
      href: 'https://github.com/surinameTimeMachine/',
      purpose: 'collaboration',
      keywords: ['open source', 'github', 'code', 'repositories'],
      institution: 'Huygens Instituut',
    },
    {
      id: 'utrecht-time-machine',
      name: 'Utrecht Time Machine',
      description:
        'Locatiegebonden erfgoedplatform met wandel- en fietsroutes door de geschiedenis van Utrecht.',
      href: 'https://utrechttimemachine.nl/routes',
      purpose: 'inspiration',
      keywords: ['tijdmachine', 'utrecht', 'routes', 'erfgoed'],
    },
    {
      id: 'htr-hub',
      name: 'HTR Hub',
      description:
        "Zoekmachine voor miljoenen pagina's handgeschreven historische documenten uit Nederlandstalige archieven, waaronder de Raad van Politie Suriname.",
      href: 'https://htrhub.dekok.xyz/',
      purpose: 'tool',
      keywords: ['HTR', 'handschrift', 'archieven', 'zoeken'],
    },
    {
      id: 'time-machine-europe-ltms',
      name: 'Time Machine Organisation – Local Time Machines',
      description:
        'Overzicht van 86+ Local Time Machines in heel Europa, onderdeel van het Time Machine Organisation-netwerk.',
      href: 'https://www.timemachine.eu/ltms/',
      purpose: 'reference',
      keywords: ['tijdmachine', 'europa', 'netwerk', 'lokaal'],
      institution: 'Time Machine Organisation',
    },
    {
      id: 'adamlink',
      name: 'Adamlink',
      description:
        'Referentiedata-hub voor Amsterdamse collecties, met gekoppelde identifiers voor straten, personen en gebouwen.',
      href: 'https://adamlink.nl/',
      purpose: 'reference',
      keywords: ['linked data', 'amsterdam', 'referentie', 'identifiers'],
      institution: 'Stichting AdamNet',
    },
    {
      id: 'aezel',
      name: 'AEZEL – Limburg Time Machine',
      description:
        'Genealogische en kadastrale databank voor de Nederlandse provincie Limburg, met erfgoed, kaarten en doorzoekbare bronnen.',
      href: 'https://aezel.eu/',
      purpose: 'inspiration',
      keywords: ['tijdmachine', 'limburg', 'genealogie', 'erfgoed'],
    },
    {
      id: 'same-boats',
      name: 'In The Same Boats',
      description:
        "Interactieve visualisatie die de bewegingen volgt van belangrijke culturele actoren uit het Caribisch gebied, de Amerika's, Afrika en Europa in de 20e-eeuwse Afro-Atlantische wereld.",
      href: 'https://sameboats.org/#/',
      purpose: 'inspiration',
      keywords: ['caribisch', 'afro-atlantisch', 'visualisatie', 'bewegingen'],
    },
    {
      id: 'gent-gemapt',
      name: 'Gent Gemapt',
      description:
        'Interactief platform dat plaatsen, historische kaarten en erfgoedcollecties verbindt voor de stad Gent, België.',
      href: 'https://www.gentgemapt.be/',
      purpose: 'inspiration',
      keywords: ['kaarten', 'erfgoed', 'gent', 'platform'],
    },
    {
      id: 'imaginerio',
      name: 'imagineRio',
      description:
        'Doorzoekbare digitale atlas die de sociale en stedelijke evolutie van Rio de Janeiro illustreert via historische en moderne beelden.',
      href: 'https://imaginerio.org/en',
      purpose: 'inspiration',
      keywords: ['atlas', 'rio de janeiro', 'stadsgeschiedenis', 'kaarten'],
      institution: 'Rice University',
    },
    {
      id: 'linkedin-suriname-tijdmachine',
      name: 'Suriname Tijdmachine op LinkedIn',
      description:
        'Officiële LinkedIn-pagina van het Suriname Tijdmachine-project voor nieuws, updates en netwerken.',
      href: 'https://www.linkedin.com/company/suriname-tijdmachine/',
      purpose: 'collaboration',
      keywords: ['linkedin', 'social media', 'netwerken', 'updates'],
    },
  ],
};
