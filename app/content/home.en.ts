import type { HomeContent } from './types';

const sharedSourceParagraph =
  'This kind of information comes from a variety of sources: the Civil Registry of Suriname, the Paramaribo Ward Register, the Slave Register (via the National Archives of Suriname), the Emancipation Register (Netherlands National Archives), and digital collections like DBNL and Delpher. Reconstructing the story of a family like Ellis-de Hart means painstakingly piecing together fragments from all these different archives.';

const sharedSources = [
  {
    label: 'Civil Registry',
    href: 'https://nationaalarchief.sr/onderzoeken/alle-genealogie/genealogie-burgerlijke-stand/persons?f=%7B%22search_s_type_title%22:%7B%22v%22:%22Vader%22%7D%7D&ss=%7B%22q%22:%22johannes%20ellis%22%7D',
    institution: 'National Archives Suriname',
  },
  {
    label: 'Ward Register Paramaribo',
    href: 'https://www.nationaalarchief.nl/onderzoeken/archief/2.10.77/invnr/4/file/NL-HaNA_2.10.77_4_0082',
    institution: 'National Archives NL',
  },
  {
    label: 'Slave Register',
    href: 'https://nationaalarchief.sr/onderzoeken/alle-genealogie/genealogie-slavenregister/persons?ss=%7B%22q%22:%22johannes%20ellis%22%7D',
    institution: 'National Archives Suriname',
  },
  {
    label: 'Emancipation Register',
    href: 'https://www.nationaalarchief.nl/',
    institution: 'National Archives NL',
  },
  {
    label: 'DBNL',
    href: 'https://www.dbnl.org/',
    institution: 'Royal Library NL',
  },
  {
    label: 'Delpher',
    href: 'https://www.delpher.nl/',
    institution: 'Royal Library NL',
  },
];

export const homeContent: HomeContent = {
  locale: 'en',
  seo: {
    title: 'Suriname Time Machine',
    description:
      "Discover how archives, maps, and citizen scientists bring Suriname's layered histories to life in the Suriname Time Machine.",
    openGraphLocale: 'en_US',
  },
  ui: {
    navigation: {
      locationLabel: 'Paramaribo • Suriname',
      projectCode: 'SCiTMI',
      projectSubtitle: 'Suriname Citizen Time Machine Incubator',
      languageToggleLabel: 'Nederlands',
    },
    section01Hero: {
      tagline: 'SCiTMI • Suriname Citizen Time Machine Incubator',
      title: 'The Suriname Time Machine brings together scattered sources.',
      lead: 'Users can access everything in one place, without constant cross-checking whether data refer to the same people, streets or plantations.',
      kicker:
        'Combining the Suriname Time Machine with the KNAW Citizen Science Incubator.',
      primaryCtaLabel: 'Discover SCiTMI',
      textureAlt: 'Geometric texture grid representing SCiTMI datasets.',
      snapshotLabel: 'Project overview',
    },
    section02Intro: {
      eyebrow: 'Our technology story',
      sourcesTitle: 'Sources',
      sourcesDescription: 'Explore the original archives:',
    },
    section03CaseStudy: {
      label: 'Paramaribo focus',
      title: 'Ellis–de Hart and Sardam',
    },
    section04Methodology: {
      title: 'Research hub and methodology',
      projectTeamTitle: 'Project team',
      relatedEmployeesLabel: 'Related employees',
      digitalInfrastructureTitle: 'Digital infrastructure',
      departmentsLabel: 'Departments',
      departmentsValue: 'LivesLab',
      tagsLabel: 'Tags',
      tagsValue: 'heritage · overseas territories · society',
    },
    section05Partners: {
      title: 'Partners',
      intro:
        'The Suriname Time Machine is not only a digital platform but also a collaborative network, connecting a wide range of heritage institutions and researchers in both Suriname and the Netherlands. Project partners include:',
      figureSuffix:
        'The Suriname Time Machine brings this kind of historical data digitally to life, making it easy to search and explore.',
    },
    section06Contact: {
      title: 'Contact',
      calloutTitle: 'Stay aligned with Suriname’s heritage work.',
      calloutBody:
        'Share datasets, plan workshops, or align citizen science efforts with the Suriname Time Machine network.',
      linksTitle: 'Official project pages',
    },
    footer: {
      organizationLabel: 'SCiTMI · Suriname Citizen Time Machine Incubator',
      coordinatorLine:
        'Coordinated by Huygens Institute and partners across Suriname and the Netherlands.',
    },
  },
  navLinks: [
    { label: 'Overview', href: '#overview' },
    { label: 'Story', href: '#story' },
    { label: 'Case study', href: '#case-study' },
    { label: 'Methodology', href: '#methodology' },
    { label: 'Partners', href: '#partners' },
    { label: 'Contact', href: '#contact' },
  ],
  section01Hero: {
    highlights: ['Historical data from the 19th century on 1 interactive map'],
    stats: [
      { label: 'Duration', value: '2025-2026, with possible extension' },
      { label: 'Subsidy provider', value: 'Pica Foundation' },
    ],
    background: {
      src: '/images/section-01-hero-map.png',
      alt: '19th-century map of Paramaribo showing plantations and waterways.',
      width: 704,
      height: 396,
      caption:
        'A detail from a 19th-century map of Suriname shows how Paramaribo was once surrounded by plantations.',
    },
  },
  section02Intro: {
    paragraphs: [
      'The Suriname Time Machine brings together scattered sources. Users can access everything in one place, without constant cross-checking whether data refer to the same people, streets or plantations. Easy research helps to reveal broader patterns, such as those linked to migration and slavery, and makes it easier to trace individual family histories.',
      'Take, for example, a portrait from the Rijksmuseum collection. It shows the Surinamese couple Johannes Ellis and Maria Louisa de Hart, painted in 1846, the year their marriage took place. He was 33 at the time; she was 19. The caption notes that he was born in Ghana, but her origins are unknown.',
      "A little online digging tells us more. Johannes Ellis was born in [Fort Elmina](https://www.nationaalarchief.nl/onderzoeken/archief/1.05.11.09/invnr/64/file/NL-HaNA_1.05.11.09_64_0016) (present-day Ghana) and moved to Suriname, where he became a civil servant in the 1830s. Maria Louisa was the daughter of [Mozes Meijer de Hart](https://www.nationaalarchief.nl/onderzoeken/archief/1.05.11.09/invnr/64/file/NL-HaNA_1.05.11.09_64_0016), a Jewish merchant. She was born into slavery, but freed by her father at a young age. The couple lived in Keizerstraat, one of Paramaribo's most prestigious addresses. They had five children, one son and four daughters.",
      'Like many middle- and upperclass households in 19th-century Suriname, they owned enslaved people: in 1846, their household included three men, two women and five children. One of these women, Marietje, was the same age as Maria Louisa and had two young children of her own.',
    ],
    source: sharedSourceParagraph,
    sources: sharedSources,
    portrait: {
      src: '/images/section-02-intro-portrait.png',
      alt: 'Portrait of Johannes Ellis and Maria Louisa de Hart.',
      width: 396,
      height: 396,
      caption: 'Portrait of Johannes Ellis and Maria Louisa de Hart.',
    },
    resources: [
      {
        id: '01',
        description: 'Page from the slave register.',
        asset: {
          src: '/images/section-02-intro-archive.png',
          alt: 'Page from the Suriname slave register listing individuals and household details.',
          width: 704,
          height: 396,
          caption: 'Page from the slave register.',
        },
      },
      {
        id: '02',
        description:
          'Image of a sugar plantation in 1850 from the collection of the Surinamese Museum Foundation.',
        asset: {
          src: '/images/section-03-case-study-plantation.png',
          alt: 'Illustration of labourers working on a Surinamese sugar plantation around 1850.',
          width: 704,
          height: 396,
          caption:
            'Image of a sugar plantation in 1850 from the collection of the Surinamese Museum Foundation.',
        },
      },
    ],
  },
  section03CaseStudy: {
    paragraphs: [
      'The couple were also co-owners and managers of the [Sardam sugar plantation](https://nl.wikipedia.org/wiki/Sardam_(plantage)), located on the Cottica River. According to the [1847 Surinaamsche Almanak](https://www.dbnl.org/tekst/_sur001184701_01/_sur001184701_01_0050.php), around 200 enslaved people were forced to work there. An [old newspaper clipping](https://resolver.kb.nl/resolve?urn=ddd:010504287:mpeg21:a0011) suggests the couple still partially owned the plantation in 1868. When slavery was abolished in 1863, [287 people were freed from Sardam](https://www.nationaalarchief.nl/onderzoeken/index/nt00341?activeTab=nt&qf_nt-rdf_groupLabel=Slaven&qf_nt-rdf_groupLabelLabel=Slaven%20(287)&qf_nt-rdf_pla_naam_plantage_stadsslaven=Sardam&searchTerm=sardam&sortering=prs_achternaam_stadsslaven&volgorde=asc).',
    ],
    captions: [
      'Sardam plantation records detailing the number of enslaved workers in 1847.',
      'Image of a sugar plantation in 1850 from the collection of the Surinamese Museum Foundation.',
    ],
    plantationAsset: {
      src: '/images/section-03-case-study-plantation.png',
      alt: 'Illustration of labourers working on a Surinamese sugar plantation around 1850.',
      width: 704,
      height: 396,
      caption:
        'Image of a sugar plantation in 1850 from the collection of the Surinamese Museum Foundation.',
    },
    source: sharedSourceParagraph,
    sources: sharedSources,
  },
  section04Methodology: {
    missionParagraphs: [
      'This is what the Suriname Time Machine is designed to solve. The project aims to bring together these disparate datasets in one central hub. This makes it easier to uncover stories like that of Ellis and de Hart. Surely, wealthy individuals like them tend to leave more records, but by linking sources, we can also start to uncover the lives of those who left fewer traces, like people of modest means and those who lived in slavery.',
      'The Time Machine integrates an ever-expanding set of databases from Suriname’s past, maintained by different heritage institutions, into a single digital map. Researchers will be able to work more efficiently and accurately. Those tracing their family roots will have an easier time locating records, even when names or addresses have changed.',
      'Institutions like the Rijksmuseum can also benefit: a tool like this allows them to better contextualise objects in their collections, whether a portrait like the one of Ellis-de Hart, or an image of a plantation. This is particularly useful in a country like Suriname, where multiple plantations often shared the same name. At least five plantations were named [Libanon](https://www.wikidata.org/w/index.php?search=libanon+plantation&language=en&title=Special%3ASearch&ns0=1), each located on a different river or creek.',
    ],
    mapParagraphs: [
      'A map of Paramaribo from 1846 showing, by address, the ethnicity of both free and unfree inhabitants, based on the skin colour classifications used in that year’s District Register. Blue represents residents of African descent, red indicates (white) Europeans, and green denotes individuals of mixed or indigenous heritage. The larger the circle, the greater the number of inhabitants.',
      'The Suriname Time Machine draws inspiration from the [European Time Machine](https://www.timemachine.eu/), which fuses technology and heritage to digitally reconstruct the histories of cities and societies. While similar projects exist in the Netherlands, like the [Amsterdam Time Machine](https://www.amsterdamtimemachine.nl/) and [Gouda Time Machine](https://www.goudatijdmachine.nl/), this one looks beyond Europe, turning its focus to a country in the global South.',
    ],
    mapAsset: {
      src: '/images/section-04-methodology-map.png',
      alt: '1846 Paramaribo map with coloured markers representing residents.',
      width: 704,
      height: 396,
      caption:
        'A map of Paramaribo from 1846 showing, by address, the ethnicity of both free and unfree inhabitants.',
    },
    teamParagraphs: [
      'The Suriname Time Machine is led by researcher Thunnis van Oort, together with Gerhard de Kok of Datacollecties. Van Oort previously worked on the [Historical Database of Suriname and the Caribbean (HDSC)](https://www.ru.nl/onderzoek/onderzoeksprojecten/historische-database-van-suriname-en-de-cariben), a large-scale research project based at Radboud University, in which hundreds of citizen scientists helped digitise historical records.',
      "In 2023, the digitised slave registers of Suriname and Curaçao, developed through the HDSC, were internationally recognised and added to [UNESCO's Memory of the World Register](https://www.nationaalarchief.nl/beleven/nieuws/archieven-over-slavernij-op-de-unesco-lijst), the UN's programme for the preservation of documentary heritage. HDSC is one of the key partners in the Suriname Time Machine.",
    ],
    employees: [
      'Thunnis van Oort – Huygens Institute',
      'Jona Schlegel - Huygens Institute',
      'Gerhard de Kok – Huygens Institute',
      'Jelle van Lottum – Huygens Institute',
      'Matthias Rosenbaum-Feldbrügge – Radboud University',
      'Leon van Wissen – University of Amsterdam',
    ],
    infrastructureParagraph:
      "The project's digital infrastructure is built on [Linked Open Data principles](https://iisg.amsterdam/nl/data/linked-open-data), ensuring that datasets are interoperable and openly accessible. The platform is designed to grow continuously, with new collections and sources being added over time. The underlying technology will also be adaptable for future use in other regions, for example the (former) Netherlands Antilles.",
  },
  section05Partners: {
    partners: [
      'National Archives of Suriname',
      'National Archives of the Netherlands',
      'Foundation for Surinamese Genealogy',
      'Philip Dikland, architect in Paramaribo and curator of the Suriname Heritage Guide',
      'Historical Database of Suriname and the Caribbean (HDSC), Radboud University',
      'Amsterdam Time Machine, University of Amsterdam',
      'Allard Pierson Museum and Library, UvA / HvA',
      'Leiden University Library',
      'International Institute of Social History',
      'Wikidata',
    ],
    mapAsset: {
      src: '/images/section-05-partners-map.png',
      alt: '19th-century map of Paramaribo showing plantations and waterways.',
      width: 704,
      height: 396,
      caption:
        'A detail from a 19th-century map of Suriname shows how Paramaribo was once surrounded by plantations.',
    },
  },
  section06Contact: {
    email: 'thunnis.van.oort[AT]huygens.knaw.nl',
    links: [
      {
        label: 'Huygens project page (English)',
        href: 'https://www.huygens.knaw.nl/en/projecten/suriname-time-machine/',
      },
      {
        label: 'Huygens project page (Dutch)',
        href: 'https://www.huygens.knaw.nl/projecten/suriname-tijdmachine/',
      },
    ],
  },
};
