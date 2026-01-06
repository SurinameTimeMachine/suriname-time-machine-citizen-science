import type { HomeContent } from './types';

const sharedSourceParagraph =
  'Dit soort informatie komt uit allerlei bronnen: de Burgerlijke Stand van Suriname, het Wijkregister van Paramaribo, het Slavenregister (beschikbaar via het Nationaal Archief Suriname), het Emancipatieregister (Nationaal Archief Nederland) en digitale collecties zoals DBNL en Delpher, beheerd door de Koninklijke Bibliotheek. Het reconstrueren van het verhaal van een familie als Ellis-de Hart betekent het geduldig samenbrengen van fragmenten uit al deze verschillende archieven.';

export const homeContent: HomeContent = {
  locale: 'nl',
  seo: {
    title: 'Suriname Tijdmachine',
    description:
      'Ontdek hoe archiefmateriaal over Suriname samenkomt op historische kaarten in de Suriname Tijdmachine.',
    openGraphLocale: 'nl_NL',
  },
  ui: {
    navigation: {
      locationLabel: 'Paramaribo • Suriname',
      projectCode: 'Suriname Tijdmachine',
      languageToggleLabel: 'Nederlands',
    },
    section01Hero: {
      tagline: 'Huygens Instituut | Historische Database Suriname en de Cariben | Stichting Pica | KNAW Citizen Science Incubator',
      title: 'De Suriname Tijdmachine brengt verspreide historische bronnen samen op de kaart.',
      lead: 'Gebruikers vinden alle informatie op één plek, zonder telkens te moeten controleren of gegevens over dezelfde mensen, straten of plantages gaan. Zo wordt het gemakkelijker om de weg te vinden in het verleden. De herkomst van informatie wordt altijd vermeld zodat gebruikers zelf de originele bron kunnen raadplegen en hun eigen oordeel vellen. ',
      kicker:
        'De Suriname Tijdmachine is een samenwerkingsverband van burgerwetenschappers, erfgoedinstellingen en onderzoekers.',
      primaryCtaLabel: 'Ontdek de Tijdmachine',
      textureAlt: 'Geometrisch raster dat SCiTMI-datasets verbeeldt.',
      textureCaption: 'data',
    },
    section02Intro: {
      eyebrow: 'De Suriname Tijdmachine',
    },
    section03CaseStudy: {
      label: 'Focus op Paramaribo',
      title: 'Ellis–de Hart en Sardam',
    },
    section04Methodology: {
      title: 'Onderzoekshub en methodologie',
      projectTeamTitle: 'Projectteam',
      relatedEmployeesLabel: 'Medewerkers',
      digitalInfrastructureTitle: 'Digitale infrastructuur',
      departmentsLabel: 'Afdeling',
      departmentsValue: 'LivesLab, Huygens Instituut (KNAW)',
      tagsLabel: 'Tags',
      tagsValue: 'erfgoed · koloniale geschiedenis · linked open data · burgerwetenschap',
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
        'Meehelpen? Deel datasets, organiseer workshops mee of kom met burgerwetenschappelijke initiatieven en help het netwerk groeien.',
    },
    footer: {
      organizationLabel: 'Suriname Tijdmachine',
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
      'Surinaamse bronnen uit de 19e eeuw',
      'interactieve kaarten van Paramaribo en de Surinaamse plantages',
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
      'De Suriname Time Machine brengt verspreide bronnen samen. Met de Suriname Tijdmachine hoeven gebruikers niet langer op verschillende plekken bronnen te raadplegen en dubbel te checken of het om dezelfde personen, straten of plantages gaat. Dit maakt het makkelijker om patronen uit het verleden te herkennen, zoals rondom migratie en slavernij, en ook om individuele familiegeschiedenissen beter in kaart te brengen.',
      'Neem bijvoorbeeld een portret uit de collectie van het Rijksmuseum, de eerste bekende foto gemaakt in Suriname. Het toont het Surinaamse echtpaar Johannes Ellis en Maria Louisa de Hart, geschilderd in 1846, het jaar waarin hun huwelijk plaatsvond. Hij was toen 33 jaar, Maria Louisa was 19. Het bijschrift vermeldt dat hij in Ghana is geboren, maar haar herkomst is niet vermeld.',
      'Wat online speurwerk levert al snel meer informatie op. Johannes Ellis werd geboren in Fort Elmina (in het huidige Ghana). Hij verhuisde naar Suriname, waar hij in de jaren 1830 was hij opgeklommen tot ambtenaar. Maria Louisa was de dochter van de Joodse koopman Mozes Meijer de Hart maar werd geboren in slavernij. Zij werd door hem op jonge leeftijd vrijgemaakt. Het stel Ellis-de Hart woonde in de deftige Keizerstraat in Paramaribo. Ze kregen een groot gezin met 1 zoon en 4 dochters.',
      'Zoals veel midden- en hogereklassehuishoudens in 19e-eeuws Suriname bezaten ze tot slaaf gemaakte mensen: in 1846 waren dat 3 mannen, 2 vrouwen en 5 kinderen. Een van deze vrouwen in slavernij heette Marietje. Zij was even oud als Maria Louisa en moeder van 1 zoon en 1 dochter.',
      'Voor meer informatie over deze iconische afbeelding, zie: Carl Haarnack, Garrelt Verhoeven en Eveline Sint Nicolaas, Suriname in beeld. Fotografie in Suriname 1845-1975 (Terra, 2025), p. 22.',
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
            'Afbeelding van een suikerplantage in 1850 uit de collectie van de Stichting Surinaams Museum.',
        },
      },
    ],
  },
  section03CaseStudy: {
    paragraphs: [
      'Ook was het echtpaar mede-eigenaar en beheerder van de suikerplantage Sardam aan de Cottica rivier, waar volgens de Surinaamsche Almanak van 1847 tweehonderd mensen in slavernij te werk werden gesteld. Volgens een kort krantenbericht was het echtpaar in 1868 nog altijd deels eigenaar van deze plantage. In 1863 zijn op Sardam 287 mensen vrijgemaakt door de afschaffing van de slavernij.',
    ],
    captions: [
      'Plantagerecords van Sardam met het aantal tot slaaf gemaakte arbeiders in 1847.',
      'Afbeelding van een suikerplantage in 1850 uit de collectie van de Stichting Surinaams Museum.',
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
      'Voor deze informatie zijn meerdere online databestanden bezocht: de Burgerlijke Stand van Suriname, het Wijkregister van Paramaribo en het Slavenregister, allemaal te raadplegen op de website van het Nationaal Archief Suriname, het Emancipatieregister (Nationaal Archief Nederland) en daarnaast de Digitale Bibliotheek voor de Nederlandse Letteren (DBNL) en Delpher, beide beheerd door de Koninklijke Bibliotheek. We moeten het verhaal van Ellis-de Hart letterlijk bij elkaar sprokkelen.',
      'Dit is precies het probleem dat de Suriname Tijdmachine wil oplossen. Door één centrale plek voor zulke databestanden te maken, kan straks informatie over het echtpaar Ellis-de Hart veel sneller worden gevonden. De Suriname Tijdmachine wordt zo’n knooppunt dat verschillende bronnen samenbrengt. Zo kunnen we meer te weten komen over het leven van Surinamers in het verleden. Dat is weliswaar makkelijker bij rijkere mensen zoals Ellis-de Hart, omdat zij meer sporen hebben achtergelaten. Maar ook over minder rijke mensen en mensen die in slavernij leefden, valt meer te ontdekken als we bronnen op één plek combineren.',
      'De Tijdmachine integreert een steeds groeiend aantal databanken uit Surinames verleden, beheerd door verschillende erfgoedinstellingen, op één digitale kaart. Onderzoekers kunnen daardoor efficiënter en nauwkeuriger werken. Mensen die hun familiegeschiedenis onderzoeken vinden informatie gemakkelijker terug, ook wanneer namen of adressen in de loop van de tijd zijn veranderd.',
      'Erfgoedinstellingen, zoals het Rijksmuseum, kunnen de tijdmachine gebruiken om objecten in hun collectie beter te begrijpen en beschrijven, zoals het portret van het echtpaar Ellis-de Hart, of afbeeldingen van verschillende plantages met dezelfde naam, iets dat veel voorkwam in Suriname. Zo waren er minstens vijf plantages genaamd Libanon, allemaal gelegen aan een andere rivier of kreek.',
    ],
    mapParagraphs: [
      'Een kaart van Paramaribo uit 1846 met per adres de etniciteit van zowel vrije als onvrije inwoners, volgens de aanduidingen van huidskleur gehanteerd in het Wijkregister van dat jaar. Blauw staat voor inwoners van Afrikaanse herkomst, rood voor (witte) Europeanen en groen voor personen van gemengde of inheemse afkomst. Hoe groter de cirkel hoe meer bewoners.',
      'De Suriname Tijdmachine is geïnspireerd op het Europese Time Machine project, dat technologie en erfgoed samenbrengt om het verleden van steden en samenlevingen digitaal tot leven te wekken. In Nederland zijn diverse tijdmachineprojecten zoals Amsterdam Time Machine en Gouda tijdmachine. De Suriname tijdmachine richt de blik buiten Europa, op een land in het mondiale Zuiden.',
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
      'De Suriname Tijdmachine wordt geleid door onderzoeker Thunnis van Oort. Van Oort werkte eerder mee aan de Historische Database van Suriname en de Cariben (HDSC), een grootschalig onderzoeksproject aan de Radboud Universiteit, waarbij honderden burgerwetenschappers hielpen met het digitaliseren van historische gegevens.',
      'In 2023 kregen de gedigitaliseerde slavenregisters van Suriname en Curaçao internationale erkenning: ze werden opgenomen in het Memory of the World Register van UNESCO, de VN-organisatie voor erfgoedbehoud. De HDSC is één van de partners van het Suriname tijdmachine.',
    ],
    employees: [
      'Thunnis van Oort – Huygens Instituut',
      'Jona Schlegel – Huygens Instituut',
      'Gerhard de Kok – Huygens Instituut',
      'Jelle van Lottum – Huygens Instituut',
      'Matthias Rosenbaum-Feldbrügge – Radboud Universiteit',
      'Leon van Wissen – Universiteit van Amsterdam',
    ],
    infrastructureParagraph:
      'De digitale infrastructuur van het project is gebouwd op Linked Open Data-principes, zodat datasets interoperabel en open toegankelijk zijn. Het platform is ontworpen om continu door te groeien, met nieuwe collecties en bronnen die in de loop van de tijd worden toegevoegd. De onderliggende technologie is bovendien aanpasbaar voor toekomstig gebruik in andere regio’s, bijvoorbeeld de (voormalige) Nederlandse Antillen.',
  },
  section05Partners: {
    partners: [
      'Nationaal Archief Suriname',
      'Nationaal Archief Nederland',
      'Stichting Surinaamse Genealogie',
      'Suriname Heritage Guide (Philip Dikland)',
      'Historische Database van Suriname en de Cariben (HDSC), Radboud Universiteit',
      'Amsterdam Time Machine, UvA',
      'Allard Pierson Museum en Bibliotheek UvA / HvA',
      'Universiteitsbibliotheek Leiden',
      'Internationaal Instituut voor Sociale Geschiedenis',
      'Wikimedia Nederland',
      'Rijksmuseum',
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
