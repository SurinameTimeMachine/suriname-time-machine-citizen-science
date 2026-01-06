import type { HomeContent } from './types';

const sharedSourceParagraph =
  'Dit soort informatie komt uit allerlei bronnen: de Burgerlijke Stand van Suriname, het Wijkregister van Paramaribo, het Slavenregister (beschikbaar via het Nationaal Archief Suriname), het Emancipatieregister (Nationaal Archief Nederland) en digitale collecties zoals DBNL en Delpher, beheerd door de Koninklijke Bibliotheek. Het reconstrueren van het verhaal van een familie als Ellis-de Hart betekent het geduldig samenbrengen van fragmenten uit al deze verschillende archieven.';

export const homeContent: HomeContent = {
  locale: 'nl',
  seo: {
    title: 'Suriname Tijdmachine',
    description:
      'Ontdek hoe archieven, kaarten en citizen scientists de gelaagde geschiedenissen van Suriname tot leven brengen in de Suriname Tijdmachine.',
    openGraphLocale: 'nl_NL',
  },
  ui: {
    navigation: {
      locationLabel: 'Paramaribo • Suriname',
      projectCode: 'SCiTMI',
      projectSubtitle: 'Suriname Citizen Time Machine Incubator',
      languageToggleLabel: 'English',
    },
    section01Hero: {
      tagline: 'SCiTMI • Suriname Citizen Time Machine Incubator',
      title: 'De Suriname Time Machine brengt verspreide bronnen samen.',
      lead: 'Gebruikers hebben alles op één plek, zonder telkens te moeten controleren of gegevens over dezelfde mensen, straten of plantages gaan.',
      kicker:
        'De Suriname Time Machine in combinatie met de KNAW Citizen Science Incubator.',
      primaryCtaLabel: 'Ontdek SCiTMI',
      textureAlt: 'Geometrisch raster dat SCiTMI-datasets verbeeldt.',
      textureCaption: 'SCiTMI velddata',
      snapshotLabel: 'Projectoverzicht',
      snapshotFooter:
        'Geworteld in Paramaribo en verbonden met een Atlantisch netwerk van archieven.',
    },
    section02Intro: {
      eyebrow: 'Ons technologieverhaal',
    },
    section03CaseStudy: {
      label: 'Focus op Paramaribo',
      title: 'Ellis–de Hart en Sardam',
    },
    section04Methodology: {
      title: 'Onderzoekshub en methodologie',
      projectTeamTitle: 'Projectteam',
      relatedEmployeesLabel: 'Gerelateerde medewerkers',
      digitalInfrastructureTitle: 'Digitale infrastructuur',
      departmentsLabel: 'Afdelingen',
      departmentsValue: 'LivesLab',
      tagsLabel: 'Tags',
      tagsValue: 'erfgoed · overzeese gebieden · samenleving',
    },
    section05Partners: {
      title: 'Partners',
      intro:
        'De Suriname Time Machine is niet alleen een digitaal platform, maar ook een samenwerkingsnetwerk dat een brede groep erfgoedinstellingen en onderzoekers in Suriname en Nederland met elkaar verbindt. Projectpartners zijn onder andere:',
      figureSuffix:
        'De Suriname Time Machine brengt dit soort historische data digitaal tot leven en maakt zoeken en verkennen eenvoudig.',
    },
    section06Contact: {
      title: 'Contact',
      calloutTitle: 'Blijf verbonden met het erfgoedwerk in Suriname.',
      calloutBody:
        'Deel datasets, plan workshops of verbind citizen-science-initiatieven met het netwerk van de Suriname Time Machine.',
    },
    footer: {
      organizationLabel: 'SCiTMI · Suriname Citizen Time Machine Incubator',
      coordinatorLine:
        'Gecoördineerd door het Huygens Instituut en partners in Suriname en Nederland.',
    },
  },
  navLinks: [
    { label: 'Overzicht', href: '#overview' },
    { label: 'Verhaal', href: '#story' },
    { label: 'Casestudy', href: '#case-study' },
    { label: 'Methodologie', href: '#methodology' },
    { label: 'Partners', href: '#partners' },
    { label: 'Contact', href: '#contact' },
  ],
  section01Hero: {
    highlights: [
      'Historische gegevens vanaf de 19e eeuw',
      '1 interactieve kaart',
    ],
    stats: [
      { label: 'Looptijd', value: '2025–2026, met mogelijke verlenging' },
      { label: 'Subsidieverstrekker', value: 'Pica Foundation' },
      { label: 'Subsidiebedrag', value: '150.000,- euro' },
    ],
    background: {
      src: '/images/section-01-hero-map.png',
      alt: '19e-eeuwse kaart van Paramaribo met plantages en waterwegen.',
      width: 704,
      height: 396,
      caption:
        'Een detail uit een 19e-eeuwse kaart van Suriname laat zien hoe Paramaribo ooit werd omringd door plantages.',
    },
  },
  section02Intro: {
    paragraphs: [
      'De Suriname Time Machine brengt verspreide bronnen samen. Gebruikers hebben alles op één plek, zonder constant te hoeven controleren of gegevens over dezelfde mensen, straten of plantages gaan. Makkelijker onderzoek helpt om bredere patronen zichtbaar te maken, bijvoorbeeld rond migratie en slavernij, en maakt het eenvoudiger om individuele familiegeschiedenissen te volgen.',
      'Neem bijvoorbeeld een portret uit de collectie van het Rijksmuseum. Het toont het Surinaamse echtpaar Johannes Ellis en Maria Louisa de Hart, geschilderd in 1846, het jaar waarin hun huwelijk plaatsvond. Hij was toen 33; zij 19. Het bijschrift vermeldt dat hij in Ghana is geboren, maar haar herkomst is onbekend.',
      'Een beetje online speurwerk levert meer op. Johannes Ellis werd geboren in Fort Elmina (het huidige Ghana) en verhuisde naar Suriname, waar hij in de jaren 1830 ambtenaar werd. Maria Louisa was de dochter van Mozes Meijer de Hart, een Joodse koopman. Zij werd in slavernij geboren, maar op jonge leeftijd door haar vader vrijgemaakt. Het echtpaar woonde aan de Keizerstraat, een van Paramaribo’s meest prestigieuze adressen. Ze kregen vijf kinderen: één zoon en vier dochters.',
      'Zoals veel midden- en hogereklassehuishoudens in 19e-eeuws Suriname bezaten ze tot slaaf gemaakte mensen: in 1846 bestond hun huishouden uit drie mannen, twee vrouwen en vijf kinderen. Een van deze vrouwen, Marietje, was even oud als Maria Louisa en had zelf twee jonge kinderen.',
    ],
    source: sharedSourceParagraph,
    portrait: {
      src: '/images/section-02-intro-portrait.png',
      alt: 'Portret van Johannes Ellis en Maria Louisa de Hart.',
      width: 396,
      height: 396,
      caption: 'Portret van Johannes Ellis en Maria Louisa de Hart.',
    },
    resources: [
      {
        id: '01',
        description: 'Pagina uit het slavenregister.',
        asset: {
          src: '/images/section-02-intro-archive.png',
          alt: 'Pagina uit het Surinaamse slavenregister met personen en huishoudgegevens.',
          width: 704,
          height: 396,
          caption: 'Pagina uit het slavenregister.',
        },
      },
      {
        id: '02',
        description:
          'Afbeelding van een suikerplantage in 1850 uit de collectie van de Surinaams Museum Stichting.',
        asset: {
          src: '/images/section-03-case-study-plantation.png',
          alt: 'Illustratie van arbeiders op een Surinaamse suikerplantage rond 1850.',
          width: 704,
          height: 396,
          caption:
            'Afbeelding van een suikerplantage in 1850 uit de collectie van de Surinaams Museum Stichting.',
        },
      },
    ],
  },
  section03CaseStudy: {
    paragraphs: [
      'Het echtpaar was ook mede-eigenaar en beheerder van de suikerplantage Sardam, gelegen aan de Cotticarivier. Volgens de Surinaamsche Almanak van 1847 werden daar ongeveer 200 tot slaaf gemaakte mensen gedwongen te werken. Een oude krantenknipsel suggereert dat het echtpaar in 1868 nog deels eigenaar was. Toen de slavernij in 1863 werd afgeschaft, werden 287 mensen op Sardam vrijgemaakt.',
    ],
    captions: [
      'Plantagerecords van Sardam met het aantal tot slaaf gemaakte arbeiders in 1847.',
      'Afbeelding van een suikerplantage in 1850 uit de collectie van de Surinaams Museum Stichting.',
    ],
    plantationAsset: {
      src: '/images/section-03-case-study-plantation.png',
      alt: 'Illustratie van arbeiders op een Surinaamse suikerplantage rond 1850.',
      width: 704,
      height: 396,
      caption:
        'Afbeelding van een suikerplantage in 1850 uit de collectie van de Surinaams Museum Stichting.',
    },
    source: sharedSourceParagraph,
  },
  section04Methodology: {
    missionParagraphs: [
      'Dit is precies het probleem dat de Suriname Time Machine wil oplossen. Het project wil deze uiteenlopende datasets samenbrengen in één centrale hub. Zo wordt het makkelijker om verhalen zoals dat van Ellis en de Hart te ontsluiten. Rijke personen laten doorgaans meer sporen na, maar door bronnen te koppelen kunnen we ook het leven zichtbaar maken van mensen die minder documenten achterlieten, zoals mensen van bescheiden middelen en mensen die in slavernij leefden.',
      'De Time Machine integreert een steeds groeiend aantal databanken uit Surinames verleden, beheerd door verschillende erfgoedinstellingen, in één digitale kaart. Onderzoekers kunnen daardoor efficiënter en nauwkeuriger werken. Mensen die hun familiegeschiedenis onderzoeken vinden records gemakkelijker terug, ook wanneer namen of adressen in de loop van de tijd zijn veranderd.',
      'Ook instellingen zoals het Rijksmuseum kunnen profiteren: met zo’n tool kunnen zij objecten in hun collecties beter contextualiseren, of het nu een portret zoals dat van Ellis-de Hart is, of een afbeelding van een plantage. Dit is extra relevant in een land als Suriname, waar meerdere plantages vaak dezelfde naam hadden. Minstens vijf plantages heetten Libanon, elk gelegen aan een andere rivier of kreek.',
    ],
    mapParagraphs: [
      'Een kaart van Paramaribo uit 1846 die per adres de etniciteit van zowel vrije als onvrije inwoners laat zien, gebaseerd op de huidskleurclassificaties in het Districtsregister van dat jaar. Blauw staat voor inwoners van Afrikaanse afkomst, rood voor (witte) Europeanen en groen voor mensen van gemengde of inheemse herkomst. Hoe groter de cirkel, hoe groter het aantal inwoners.',
      'De Suriname Time Machine laat zich inspireren door de European Time Machine, die technologie en erfgoed combineert om de geschiedenis van steden en samenlevingen digitaal te reconstrueren. Hoewel er vergelijkbare projecten bestaan in Nederland, zoals de Amsterdam Time Machine en de Gouda Time Machine, richt dit project zich buiten Europa en kijkt het naar een land in het mondiale Zuiden.',
    ],
    mapAsset: {
      src: '/images/section-04-methodology-map.png',
      alt: 'Kaart van Paramaribo (1846) met gekleurde markeringen voor inwoners.',
      width: 704,
      height: 396,
      caption:
        'Een kaart van Paramaribo uit 1846 die per adres de etniciteit van zowel vrije als onvrije inwoners laat zien.',
    },
    teamParagraphs: [
      'De Suriname Time Machine wordt geleid door onderzoeker Thunnis van Oort, samen met Gerhard de Kok van Datacollecties. Van Oort werkte eerder aan de Historical Database of Suriname and the Caribbean (HDSC), een grootschalig onderzoeksproject aan de Radboud Universiteit, waarbij honderden citizen scientists hielpen met het digitaliseren van historische registers.',
      'In 2023 werden de gedigitaliseerde slavenregisters van Suriname en Curaçao, ontwikkeld via de HDSC, internationaal erkend en toegevoegd aan UNESCO’s Memory of the World Register, het VN-programma voor het behoud van documentair erfgoed. HDSC is een van de belangrijkste partners van de Suriname Time Machine.',
    ],
    employees: [
      'Thunnis van Oort – Dr. – postdoconderzoeker',
      'Gerhard de Kok – Dr. – projectcoördinator Netwerk Maritieme Bronnen (Network of Maritime Sources)',
      'Jelle van Lottum – Prof. dr. – hoofd onderzoeksgroep LivesLab',
      'Matthias Rosenbaum-Feldbrügge – Radboud Universiteit',
      'Leon van Wissen – MA – Universiteit van Amsterdam',
    ],
    infrastructureParagraph:
      'De digitale infrastructuur van het project is gebouwd op Linked Open Data-principes, zodat datasets interoperabel en open toegankelijk zijn. Het platform is ontworpen om continu door te groeien, met nieuwe collecties en bronnen die in de loop van de tijd worden toegevoegd. De onderliggende technologie is bovendien aanpasbaar voor toekomstig gebruik in andere regio’s, bijvoorbeeld de (voormalige) Nederlandse Antillen.',
  },
  section05Partners: {
    partners: [
      'Nationaal Archief Suriname',
      'Nationaal Archief Nederland',
      'Stichting Surinaamse Genealogie',
      'Philip Dikland, architect in Paramaribo en curator van de Suriname Heritage Guide',
      'Historical Database of Suriname and the Caribbean (HDSC), Radboud University',
      'Amsterdam Time Machine, University of Amsterdam',
      'Allard Pierson Museum en Bibliotheek, UvA / HvA',
      'Universiteitsbibliotheek Leiden',
      'Internationaal Instituut voor Sociale Geschiedenis',
      'Wikidata',
    ],
    mapAsset: {
      src: '/images/section-05-partners-map.png',
      alt: '19e-eeuwse kaart van Paramaribo met plantages en waterwegen.',
      width: 704,
      height: 396,
      caption:
        'Een detail uit een 19e-eeuwse kaart van Suriname laat zien hoe Paramaribo ooit werd omringd door plantages.',
    },
  },
  section06Contact: {
    email: 'communicatie[AT]huygens.knaw.nl',
    phone: 'Thijs van der Veen, +31 20 224 68 18',
  },
};
