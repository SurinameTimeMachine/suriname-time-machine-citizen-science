// Rapportage HackaLOD 2026 (Middelburg, 30–31 oktober 2026): project "I Was Here".
// Tekst gebaseerd op de pitchpresentatie van het team en de gecureerde verhalen.

export const HACKALOD_BASE = '/images/hackalod-2026';

export type HackalodVideo = {
  src: string;
  poster: string;
  title: string;
  caption: string;
  /** Portrait videos (phone recordings) are shown narrower. */
  portrait?: boolean;
};

export const hackalod2026 = {
  path: '/projects/hackalod-2026',
  seo: {
    title: 'I Was Here · HackaLOD 2026 | Suriname Tijdmachine',
    description:
      'Rapportage van I Was Here, het project van Suriname Time Machine / Shadows of the Past op HackaLOD 2026 in Middelburg: ’s Lands Hospitaal in Paramaribo verbonden met Zeeland.',
  },
  hero: {
    eyebrow: 'HackaLOD 2026 · Middelburg · 31 oktober 2026',
    title: 'I Was Here',
    subtitle: '’s Lands Hospitaal × Zeeland',
    lead: 'In 24 uur bouwde ons team een muur met namen, een mobiele webapp om verhalen in te spreken en een 3D-kaart van ’s Lands Hospitaal in Paramaribo. Samen met gecureerde familieverhalen laten ze zien hoe archieven, nazaten en vrijwilligers elkaar kunnen vinden.',
    team: 'Jona Schlegel · Thunnis van Oort · Kay Pepping · Arthur van Schravendijk · Nisha Marapin · Martijn Arts',
    teamLabel: 'Suriname Time Machine / Shadows of the Past',
  },
  question: {
    eyebrow: 'De vraag',
    title: 'Wie wordt herinnerd, en wie niet?',
    body: [
      'In de Nieuwe Kerk in Middelburg staat het praalgraf van Johan en Cornelis Evertsen, “ter eeuwige nagedachtenis”. Twee Zeeuwse namen in marmer. De mensen op Zeeuwse schepen en plantages staan vaak alleen als nummer in een journaal of register. Een directe link tussen de Evertsens en het hospitaal is er niet: zij sneuvelden in 1666, een jaar vóór de Zeeuwse verovering van Suriname. Voor ons is de kerk het symbool van wie herinnerd wordt en wie niet.',
      'I Was Here geeft de anderen dezelfde eer: een naam, een jaar, een plek. We beginnen bij ’s Lands Hospitaal, het Militair Hospitaal aan de Gravenstraat in Paramaribo. Bijna elke Surinaamse familie heeft er ooit iemand gehad: geboren, verpleegd, gestorven of aan het werk.',
    ],
    quotes: [
      {
        text: 'Ik weet niet wie mijn voorouders zijn.',
        who: 'Nisha Marapin, vrijwilliger Surinaams Slavenregister',
      },
      {
        text: 'Iedereen is wel eens in ’s Lands Hospitaal geweest. Daar starten we!',
        who: 'Het team',
      },
      {
        text: 'Wie is je vader, wie is je moeder.',
        who: 'Tante Es (Jörgen Raymann)',
      },
    ],
  },
  parts: {
    eyebrow: 'Wat we bouwden',
    title: 'Drie onderdelen, live gekoppeld',
    items: [
      {
        title: 'De muur op locatie',
        text: 'In de gang van ’s Lands Hospitaal verschijnen namen op de planken wand, op handhoogte. Een tijdslider loopt vanaf 1765. Onbevestigde namen staan er vaag, als krijt; bewezen namen worden ingekerfd.',
        image: `${HACKALOD_BASE}/dias/dia-05.webp`,
        alt: 'Ontwerp van de muur: de gang van ’s Lands Hospitaal met geprojecteerde namen op de planken wand',
      },
      {
        title: 'De mobiele webapp',
        text: 'Je scant een QR-code bij een naam: geen app store, geen account. Je spreekt in wat je weet. Het transcript loopt live mee en de AI markeert personen, plaatsen, data, gebouwen, beroepen en relaties. De inspreker bevestigt of corrigeert die voorstellen; de AI beslist nooit zelf.',
        image: `${HACKALOD_BASE}/dias/dia-07.webp`,
        alt: 'Ontwerp van de mobiele webapp waarin je een verhaal inspreekt',
      },
      {
        title: 'De 3D-kaart',
        text: '“Wie was er ooit in ’s Lands Hospitaal?” Elk lichtje is een mens: aankomend uit een plantage, een straat of van een schip, of vertrekkend. Naast de kaart staan voorgestelde personen met hun bewijsniveau (bewezen, waarschijnlijk, mogelijk), onderin een tijdlijn van 1765 tot 2026 met slavernij, contractarbeid en migratie naar Nederland.',
        image: `${HACKALOD_BASE}/dias/dia-08.webp`,
        alt: 'De 3D-kaart van ’s Lands Hospitaal met personen als lichtjes en een tijdlijn',
      },
    ],
  },
  videos: [
    {
      src: `${HACKALOD_BASE}/video-1.mp4`,
      poster: `${HACKALOD_BASE}/video-1-poster.jpg`,
      title: 'De kaart in actie',
      caption:
        'Inzoomen op ’s Lands Hospitaal, met voorgestelde personen en de tijdlijn.',
    },
    {
      src: `${HACKALOD_BASE}/video-2.mp4`,
      poster: `${HACKALOD_BASE}/video-2-poster.jpg`,
      title: '“Dat gaat echt werken!”',
      caption:
        'Naast Nisha toetsten we het idee met Steven in Paramaribo. Hij wilde direct Jörgen Raymann erbij halen.',
      portrait: true,
    },
  ] satisfies HackalodVideo[],
  /** Schermopname van de website (verhalen en kaart). Op null zetten om de sectie te verbergen. */
  screenRecording: {
    src: `${HACKALOD_BASE}/schermopname.mp4`,
    poster: `${HACKALOD_BASE}/schermopname-poster.jpg`,
    title: 'Verhalen en kaart',
    caption:
      'Een rondgang door de HackaLOD-website: van de verhalen naar de kaart, ’s Lands Hospitaal en de namenmuur.',
  } as HackalodVideo | null,
  linking: {
    eyebrow: 'De kern',
    title: 'De koppelfunctie',
    lead: 'Eén persoonsprofiel dat vanuit twee kanten groeit: uit de archieven en uit de herinneringen van nazaten. Pas na validatie verschijnt een naam op beide muren.',
    steps: [
      {
        title: 'Bronnen delen',
        text: 'Archief, families en vrijwilligers delen akten, boekhoudingen en brieven.',
      },
      {
        title: 'Verhalen inspreken',
        text: 'Nazaten vertellen wat zij weten: namen, plekken, een plantage, een herinnering.',
      },
      {
        title: 'Matchen',
        text: 'AI stelt koppelingen voor op namen, plantages, data en plekken.',
      },
      {
        title: 'Valideren',
        text: 'Peers, experts en archivarissen bepalen het bewijsniveau. Een stippellijn staat voor nog niet gevalideerde kennis.',
      },
      {
        title: 'Zichtbaar maken',
        text: 'De naam verschijnt op beide muren, de lijn op de kaart.',
      },
    ],
    motto: 'AI doet voorstellen. Mensen beslissen.',
    extra:
      'Een idee voor later: “Adopteer een bron”. Net als bij Vele Handen kan iemand een plantage, document of schip adopteren en uitzoeken wie erin voorkomt. Zo worden Zeeuwen actieve bijdragers in plaats van alleen erfgenamen van een archief.',
  },
  honest: {
    eyebrow: 'Eerlijk over de demo',
    title: 'Wat werkt er, na 24 uur?',
    works: [
      'Twee muren, live gekoppeld',
      'Spraakinvoer via de telefoon',
      'De validatiestap',
      'Interactieve kaart',
      'Gecureerde verhalen',
    ],
    notYet: [
      'Kleine dataset, deels gesimuleerd en gemarkeerd',
      'Nog geen volwaardige PiCo-datasets (RDF)',
    ],
    rules: [
      'Nazaten bepalen wat zichtbaar wordt',
      'Elke bewering toont haar bron',
      'Levende personen alleen met toestemming',
    ],
    note: 'Het gat in de koppeling naar een schip is geen zwakte van de demo, maar laat zien waarom dit project nodig is. Zeeuwse families worden uitgenodigd, niet beschuldigd: het gaat om delen wat ze bewaren. Historische termen uit de bronnen tonen we met context en uitleg.',
  },
  architecture: {
    eyebrow: 'Techniek',
    title: 'Architectuur',
    body: [
      'Open bronnen en het Netwerk van Termen (AAT, GeoNames, Wikidata) voeden de I Was Here-kennisgraaf, gemodelleerd met SCHEMA-AP-NDE en PiCo. Daaruit lopen twee routes naar de schermen: een kennisgraaf-API voor personen, relaties, verhalen en bijdragen (REST volgens de NDE Integration Layer, SPARQL en IIIF), en de Cultuurindex voor erfgoedobjecten met wat, waar en wanneer.',
      'De Cultuurindex is geen nieuwe standaard, maar een smaldeel van SCHEMA-AP-NDE: elf bestaande velden, verplicht en met één waarde, vastgelegd in één SHACL-profiel. In de index staan alleen erfgoedobjecten, zoals gebouwen per bouwfase en historisch beeld (Rothe 1793, aquarel 1865, foto’s 1911 en 1924). Personen en verhalen blijven in de graaf, ook vanwege privacy. Graaf, verrijkingen en index worden als datasets in het Datasetregister gepubliceerd.',
    ],
    image: `${HACKALOD_BASE}/dias/dia-12.webp`,
    alt: 'Architectuurschema: presentatie, integratie, datalaag en NDE-netwerk',
  },
  stories: {
    eyebrow: 'Verhalen',
    title: 'Wie ging hier door de poort?',
    lead: 'Achter elk lichtje op de kaart zit een mens. Soms weten we alleen een naam en een jaartal. Soms reconstrueren familie en onderzoekers een leven aan de hand van akten, kranten en foto’s. Deze verhalen zijn tijdens en rond de HackaLOD samengesteld.',
  },
  slides: {
    eyebrow: 'Presentatie',
    title: 'De pitch van 31 oktober',
    lead: 'De dia’s waarmee het team het project in Middelburg presenteerde. Klik op een dia voor een grotere versie.',
    items: [
      'Titel: I Was Here, ’s Lands Hospitaal × Zeeland',
      'Twee Zeeuwse namen in marmer',
      '“Ik weet niet wie mijn voorouders zijn.”',
      '’s Lands Hospitaal: daar starten we',
      'Ontwerp: de muur',
      '“Wie is je vader, wie is je moeder.”',
      'Ontwerp: de webapp',
      'De 3D-kaart',
      'Ontwerp: de reactie',
      'De koppelfunctie',
      'Eerlijk over de demo',
      'Architectuur',
      'Afsluiting',
    ],
  },
  links: {
    eyebrow: 'Verder',
    items: [
      {
        label: 'Code en data op GitHub',
        href: 'https://github.com/SurinameTimeMachine/Hackalod2026',
      },
      { label: 'HackaLOD', href: 'https://hackalod.dekok.xyz/' },
    ],
    closing:
      '“Je hoeft geen Zeeuwse voorouders te hebben om in Middelburg je geschiedenis te vinden.”',
  },
};
