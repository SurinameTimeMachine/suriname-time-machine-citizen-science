// Gecureerde verhalen van HackaLOD 2026 (I Was Here).
// Overgenomen uit SurinameTimeMachine/Hackalod2026, apps/map-webapp/app/stories.
// In de tekst verwijst [woorden](p:id) naar een persoon en [woorden](g:id) naar een plek op de HackaLOD-kaart;
// op deze site worden die als gewone tekst getoond. [woorden](s:slug) linkt naar een ander verhaal op deze site.

export const STORY_IMAGE_BASE = '/images/hackalod-2026/verhalen';

export type StoryImage = {
  file: string;
  width: number;
  height: number;
  caption: string;
  full?: string;
  displayWidth?: number;
  href?: string;
};
export type ImageGroup = {
  layout: 'single' | 'portraits' | 'clippings';
  label?: string;
  items: StoryImage[];
};
export type TreePerson = {
  name: string;
  detail?: string;
  highlight?: boolean;
  minor?: boolean;
};
export type FamilyTree = {
  title: string;
  branches: readonly (readonly TreePerson[])[];
  join?: string;
  couple: readonly TreePerson[];
  descendants: readonly TreePerson[];
  note?: string;
};
export const storyImages: Record<
  string,
  { folder: string; hero: StoryImage; chapters: Record<string, ImageGroup[]> }
> = {
  'gekomen-gebleven': {
    folder: '01-gekomen-gebleven',
    hero: {
      file: '01-familieportret-paramaribo.jpg',
      width: 1362,
      height: 530,
      caption: 'Familieportret, Paramaribo, datum onbekend.',
    },
    chapters: {
      'Een huwelijk, vier kinderen': [
        {
          layout: 'single',
          items: [
            {
              file: '02-krant-huwelijk-1896-knipsel.jpg',
              width: 450,
              height: 185,
              displayWidth: 470,
              caption: 'Rubriek Burgerlijke Stand – Huwelijken, november 1896.',
              full: '03-krant-huwelijk-1896-hele-pagina.jpg',
            },
          ],
        },
      ],
      'Portier aan de Gravenstraat': [
        {
          layout: 'single',
          items: [
            {
              file: '04-register-regel4-van-bochove.jpg',
              width: 1328,
              height: 937,
              displayWidth: 664,
              caption:
                'Register, regel 4: Jacobus Carolus van Bochove, portier Mil. H.',
            },
          ],
        },
      ],
      Gebleven: [
        {
          layout: 'single',
          items: [
            {
              file: '05-portret-jacobus.jpg',
              width: 520,
              height: 529,
              displayWidth: 260,
              caption:
                'Vermoedelijk Jacobus Carolus van Bochove op latere leeftijd.',
            },
          ],
        },
      ],
    },
  },
  'door-dezelfde-poort': {
    folder: '02-door-dezelfde-poort',
    hero: {
      file: '01-groepsfoto-vervuurt-donner.jpg',
      width: 604,
      height: 408,
      caption:
        'Familie Vervuurt en Donner, Paramaribo, ca. 1915–1917. In het midden Emeline Zechiel en Gustaaf Vervuurt; de namen zijn later in rood bijgeschreven. Hilda Louise staat er niet bij: zij overleed in 1912.',
    },
    chapters: {
      'De Donners': [
        {
          layout: 'portraits',
          items: [
            {
              file: '02-donner-en-naharen.jpg',
              width: 678,
              height: 462,
              caption:
                'Johann Wilhelm Anton Donner en Elmina Albertina Naharen, Stevens betovergrootouders.',
            },
            {
              file: '03-paul-donner-geschilderd.jpg',
              width: 592,
              height: 880,
              caption: 'Geschilderd portret van Paul Donner, broer van Ida.',
            },
            {
              file: '04-antoinette-donner.jpg',
              width: 664,
              height: 960,
              caption:
                'Antoinette Donner, zus van Ida en moeder van Hilda Louise.',
            },
          ],
        },
        {
          layout: 'clippings',
          label: 'Uit de krant · via Delpher',
          items: [
            {
              file: '05-krant-bevallen-1886.jpg',
              width: 460,
              height: 156,
              caption:
                'Rubriek ‘Bevallen’, 11 juni 1886: “E. Donner, geb. Naharen, z.”',
            },
            {
              file: '06-advertentie-boekhouden.jpg',
              width: 239,
              height: 289,
              caption: 'Advertentie van J.W.A. Donner, Gonggrijpstraat.',
            },
            {
              file: '07-advertentie-waterverfportretten.jpg',
              width: 460,
              height: 277,
              caption: 'Advertentie ‘Waterverf-Portretten’ van J.W.H. Donner.',
            },
            {
              file: '08-dankbetuiging-1917.jpg',
              width: 302,
              height: 265,
              caption:
                'Dankbetuiging na het overlijden van Elmina, Paramaribo, 1 november 1917.',
            },
          ],
        },
      ],
      Walther: [
        {
          layout: 'single',
          items: [
            {
              file: '09-vier-portretten-donner.jpg',
              width: 1328,
              height: 493,
              displayWidth: 664,
              caption:
                'Vier portretten uit de familie Donner. Rechts J.W.A. Donner en Elmina Naharen.',
            },
          ],
        },
        {
          layout: 'single',
          items: [
            {
              file: '10-jean-donner.jpg',
              width: 800,
              height: 1067,
              displayWidth: 400,
              caption:
                'Jean Donner, broer van Ida, met John William Donner uit Brazilië.',
            },
          ],
        },
      ],
    },
  },
  'klerk-marechaussee-boer': {
    folder: '04-klerk-marechaussee-boer',
    hero: {
      href: 'https://hdl.handle.net/21.12113/06B809D30F104853A7C5DBFDBB34DA6D',
      file: '01-straatgezicht-middelburg.jpg',
      width: 1018,
      height: 632,
      caption:
        'Straatgezicht in Middelburg, negentiende eeuw. Hier werd Johannes Pieter de Graaff op 14 mei 1845 geboren. Zeeuws Archief.',
    },
    chapters: {
      'Middelburg, 14 mei 1845': [
        {
          layout: 'single',
          items: [
            {
              href: 'https://www.openarchieven.nl/zar:53A1BDAE-81A0-41B8-90AE-1146F5BDD60C',
              file: '02-geboorteakte-middelburg-1845.jpg',
              width: 937,
              height: 742,
              displayWidth: 664,
              caption:
                'Geboorteakte van Johannes Pieter de Graaff, Middelburg, 15 mei 1845 (nr. 222). Aangever was de verloskundige Jacobus Johannes Pieterse; de moeder wordt genoemd als weduwe van Boudewijn de Graaff. Zeeuws Archief.',
            },
          ],
        },
      ],
      'Kantoorklerk op plantage Waterloo': [
        {
          layout: 'single',
          items: [
            {
              href: 'http://hdl.handle.net/1887.1/item:808307',
              file: '03-plantage-waterloo.jpg',
              width: 600,
              height: 357,
              displayWidth: 600,
              caption:
                'Prentbriefkaart “Plantage Waterloo, Suriname, S. Amerika”. Universitaire Bibliotheken Leiden (KITLV), item 808307.',
            },
          ],
        },
      ],
      'Marechaussee aan de Saramacca': [
        {
          layout: 'single',
          items: [
            {
              href: 'http://hdl.handle.net/1887.1/item:925082',
              file: '04-politiepost-rivier.jpg',
              width: 600,
              height: 357,
              displayWidth: 600,
              caption:
                'Een politiepost aan de rivier. Een foto van marechaussees uit zijn tijd is niet gevonden. Universitaire Bibliotheken Leiden (KITLV), item 925082.',
            },
          ],
        },
      ],
      'Weduwnaar en landbouwer': [
        {
          layout: 'single',
          items: [
            {
              href: 'https://commons.wikimedia.org/wiki/File:Tropenmuseum_Royal_Tropical_Institute_Objectnumber_60006571_Boeren_kolonisatie_in_Suriname._Rijsd.jpg',
              file: '05-boeroe-echtpaar.jpg',
              width: 960,
              height: 769,
              displayWidth: 480,
              caption:
                'Een boeroe-echtpaar voor hun houten huis. Dit zijn niet De Graaff en zijn vrouw, maar leden van een andere boerenfamilie. Tropenmuseum, objectnummer 60006571, via Wikimedia Commons.',
            },
          ],
        },
      ],
      '24 juli 1907, Gravenstraat B 2': [
        {
          layout: 'single',
          items: [
            {
              href: 'https://www.nationaalarchief.nl/onderzoeken/archief/2.10.61/invnr/@1117/file/NL-HaNA_2.10.61_1117_0174',
              file: '06-overlijdensakte-1907.jpg',
              width: 1100,
              height: 1679,
              displayWidth: 550,
              caption:
                'Overlijdensakte van Johannes Pieter de Graaff, Paramaribo, 24 juli 1907 (folio 775). Aangever Joseph van de Winkel, administrateur van het Militair Hospitaal. Nationaal Archief Suriname 2.10.61, inv. 1117, scan 0174.',
            },
          ],
        },
      ],
    },
  },
  'geboren-in-het-hospitaal': {
    folder: '05-geboren-in-het-hospitaal',
    hero: {
      href: 'https://www.rijksmuseum.nl/nl/collectie/object/Jodenbreestraat-in-Paramaribo--ad00791191eab7a2ebd2391a9e786967',
      file: '01-jodenbreestraat.jpg',
      width: 1400,
      height: 839,
      caption:
        'De Jodenbreestraat in Paramaribo, waar June-Tjauw Won-Ton-Tja in 1880 werd geboren. Rijksmuseum.',
    },
    chapters: {
      'Een huwelijk aan huis, 1907': [
        {
          layout: 'single',
          items: [
            {
              file: '02-huwelijksakte-1907-nr161.jpg',
              width: 1600,
              height: 1296,
              displayWidth: 664,
              caption:
                'Huwelijksakte nr. 161, Paramaribo, september 1907. Omdat de bruid ziek was, werd het huwelijk gesloten in het huis aan de Saramaccastraat, letter E nummer 21.',
            },
            {
              file: '03-huwelijksakte-1907-handtekeningen.jpg',
              width: 1600,
              height: 1282,
              displayWidth: 664,
              caption:
                'Het slot van de akte, met de handtekening “J. T. Won Ton Tja”. De bruidegom en de vader van de bruid verklaarden niet te kunnen schrijven; de akte werd voor hen in het Chinees vertolkt.',
            },
          ],
        },
      ],
      'Vijf kinderen': [
        {
          layout: 'single',
          items: [
            {
              href: 'https://commons.wikimedia.org/wiki/File:Het_zendingsdorp_Ephrata_aan_de_Cotticarivier,_Suriname._-_Collectie_stichting_Nationaal_Museum_van_Wereldculturen_-_TM-60007145.jpg',
              file: '04-ephrata-cottica.jpg',
              width: 800,
              height: 540,
              displayWidth: 664,
              caption:
                'Het zendingsdorp Ephrata aan de Cotticarivier, waar Cornelis Richenel in 1914 werd geboren. Nationaal Museum van Wereldculturen, TM-60007145, via Wikimedia Commons.',
            },
          ],
        },
      ],
    },
  },
  'vrij-sinds-1836': {
    folder: '03-vrij-sinds-1836',
    hero: {
      href: 'https://commons.wikimedia.org/wiki/File:De_Zwartenhovenbrugstraat_in_Paramaribo,_Bestanddeelnr_252-4935.jpg',
      file: '01-zwartenhovenbrugstraat-1955.jpg',
      width: 1280,
      height: 730,
      caption:
        'De Zwartenhovenbrugstraat in 1955. Het familiehuis stond hier op erf E 218. Foto: Nationaal Archief, bestanddeelnr. 252-4935, via Wikimedia Commons.',
    },
    chapters: {
      'Vrij geworden, 17 februari 1836': [
        {
          layout: 'single',
          items: [
            {
              href: 'https://resolver.kb.nl/resolve?urn=ddd:010670226:mpeg21:a0002',
              file: '02-krant-vrijlating-1835.jpg',
              width: 447,
              height: 199,
              displayWidth: 447,
              caption:
                'Het vrijlatingsverzoek voor “de Slaven Jantje, Doris, Charles en Christiana”, Surinaamsche Courant, 18 april 1835 (Delpher).',
            },
          ],
        },
      ],
      'Een erf aan de Zwartenhovenbrugstraat': [
        {
          layout: 'single',
          items: [
            {
              href: 'https://www.nationaalarchief.nl/onderzoeken/archief/1.05.08.01/invnr/663/file/NL-HaNA_1.05.08.01_663_0451',
              file: '03-wijkregister-1839.jpg',
              width: 1600,
              height: 1059,
              displayWidth: 664,
              caption:
                'Wijkregister 1839, Zwartenhovenbrugstraat. Christiana Biervliet is de op een na onderste naam; erboven staan Amelia van Leesten en leden van de familie Boschman. Nationaal Archief 1.05.08.01, inv. 663, scan 0451.',
            },
          ],
        },
      ],
      'Bezitters van mensen': [
        {
          layout: 'single',
          items: [
            {
              file: '04-slavenregister-folio-2203.jpg',
              width: 1600,
              height: 1219,
              displayWidth: 664,
              caption:
                'Slavenregister, folio 2203: de minderjarige kinderen Van Leesten en Biervliet, onder wie Henriëtte Floortje Biervliet, als eigenaars van Jan, Charles, Lambertus, Adriaan en Marianna, op 3 april 1850 gekocht van C.H. Boschman. Van het emancipatieregister zijn geen scans.',
            },
          ],
        },
      ],
      'Gouddelver tussen twee tochten': [
        {
          layout: 'single',
          items: [
            {
              href: 'https://www.rijksmuseum.nl/nl/collectie/object/NG-2009-131-23--cda4a4d3f781a9c83d1160f5c23cda70',
              file: '05-goudplacer-1905-1910.jpg',
              width: 1000,
              height: 1273,
              displayWidth: 500,
              caption:
                'Goudwasserij op een placer en arbeiders die een spoorweg graven, Suriname, 1905–1910. Fotograaf onbekend. Rijksmuseum, NG-2009-131-23, publiek domein.',
            },
          ],
        },
      ],
      'Twee keer in het hospitaal, 1921': [
        {
          layout: 'single',
          items: [
            {
              href: 'https://resolver.kb.nl/resolve?urn=ddd:011217294:mpeg21:a0047',
              file: '06-overlijdensbericht-1922.jpg',
              width: 412,
              height: 334,
              displayWidth: 412,
              caption:
                'Rubriek Overleden, De Surinamer, 22 januari 1922: “12 Jan. … Biervliet, Michel J. 51 j.” (Delpher).',
            },
          ],
        },
      ],
    },
  },
  'de-naam-middelburg': {
    folder: '06-de-naam-middelburg',
    hero: {
      href: 'https://www.rijksmuseum.nl/nl/collectie/RP-P-AO-15-161-3',
      file: '01-stadhuis-middelburg-1743.jpg',
      width: 1220,
      height: 950,
      caption:
        'Het stadhuis van Middelburg in 1743. Geen bron legt een verband tussen deze stad en de familie aan de Weidestraat. Rijksmuseum, RP-P-AO-15-161-3, publiek domein.',
    },
    chapters: {
      'Een huis aan de Weidestraat': [
        {
          layout: 'single',
          items: [
            {
              href: 'https://www.nationaalarchief.nl/onderzoeken/archief/1.05.08.01/invnr/681/file/NL-HaNA_1.05.08.01_681_0098',
              file: '02-wijkregister-1842.jpg',
              width: 1400,
              height: 733,
              displayWidth: 664,
              caption:
                'Wijkregister 1842, Weidestraat. Onder elkaar staan Andresa Petronella Müller, 62 jaar, lid van de Broedergemeente (M.B.), en Jan Albertinus May, 31, met zijn gezin. De tot slaaf gemaakte mensen staan alleen als aantallen in de rechterkolommen. Nationaal Archief 1.05.08.01, inv. 681, scan 0098.',
            },
          ],
        },
      ],
      'Besmet verklaard, 24 mei 1851': [
        {
          layout: 'single',
          items: [
            {
              href: 'https://www.rijksmuseum.nl/nl/collectie/RP-F-2009-282-59',
              file: '03-batavia-coppename-1895.jpg',
              width: 1370,
              height: 545,
              displayWidth: 664,
              caption:
                'Batavia, “vroeger leprosen-établissement a/d Coppename”, 7 augustus 1895. Album Van Lelyveld, Rijksmuseum RP-F-2009-282-59, publiek domein.',
            },
          ],
        },
      ],
      'Verkocht naar Nickerie': [
        {
          layout: 'single',
          items: [
            {
              href: 'http://hdl.handle.net/1887.1/item:808307',
              file: '04-plantage-waterloo.jpg',
              width: 600,
              height: 357,
              displayWidth: 600,
              caption:
                'Prentbriefkaart “Plantage Waterloo, Suriname, S. Amerika”. Hier werkte Frits vanaf 1860. Universitaire Bibliotheken Leiden (KITLV), item 808307.',
            },
          ],
        },
      ],
      'Een huwelijk in 1872': [
        {
          layout: 'single',
          items: [
            {
              href: 'https://www.nationaalarchief.nl/onderzoeken/archief/2.10.61/invnr/@1517/file/NL-HaNA_2.10.61_1517_0058',
              file: '05-huwelijksakte-1872.jpg',
              width: 969,
              height: 1700,
              displayWidth: 485,
              caption:
                'Huwelijksakte van Frederik Kambel en Antje Johanna Middelburg, Paramaribo, 11 december 1872 (folio 100). Hij is de zoon van “wijlen Minerva, toebehoord hebbende aan wijlen Colin Campbell”, zij de dochter van “wijlen Nanette, toebehoord hebbende aan wijlen Jan May”. Nationaal Archief 2.10.61, inv. 1517, scan 0058.',
            },
          ],
        },
      ],
      'Tweede Buitenwijk 68': [
        {
          layout: 'single',
          items: [
            {
              href: 'https://www.openarchieven.nl/nas:108293b4-443c-a9f6-cba5-5fbb0550de45',
              file: '07-overlijdensakte-1901.jpg',
              width: 1100,
              height: 1650,
              displayWidth: 550,
              caption:
                'Overlijdensakte van Antje Johanna Middelburg, “echtgenoote van Frederik Kambel”, “dochter van wijlen Nanette”, Paramaribo, 20 november 1901 (folio 918). Nationaal Archief Suriname 2.10.61, inv. 1098, scan 0061.',
            },
          ],
        },
        {
          layout: 'single',
          items: [
            {
              href: 'https://www.nationaalarchief.nl/onderzoeken/archief/2.10.61/invnr/@145/file/NL-HaNA_2.10.61_145_0143',
              file: '06-erkenning-1913.jpg',
              width: 1078,
              height: 1700,
              displayWidth: 540,
              caption:
                'Frederik Kambel erkent Georgina als zijn natuurlijk kind, Paramaribo, 7 maart 1913 (folio 309). Onderaan: de comparant verklaarde “het schrijven niet te kennen”. Nationaal Archief 2.10.61, inv. 145, scan 0143.',
            },
          ],
        },
      ],
    },
  },
};

export const stories = {
  'gekomen-gebleven': {
    category: 'Familiegeschiedenis · Rotterdam – Paramaribo · 1841–1954',
    title: (
      <>
        Gekomen, <em>gebleven</em>
      </>
    ),
    subtitle: 'Het leven van Jacobus Carolus van Bochove',
    introduction:
      'Hij werd in 1866 in Rotterdam geboren en kwam als soldaat naar Suriname. In Paramaribo trouwde hij met Susanna van Zorgen, met wie hij toen al vier kinderen had. Hij ging nooit meer terug. Een reconstructie aan de hand van akten uit Nederlandse en Surinaamse archieven.',
    sections: [
      {
        heading: 'Rotterdam, 9 maart 1866',
        text: 'Op 9 maart 1866 wordt in Rotterdam [Jacobus Carolus van Bochove](p:629316) geboren. Zijn geboortedatum en geboorteplaats staan vermeld in een register dat het Nationaal Archief in Den Haag bewaart.',
      },
      {
        heading: 'Soldaat in Paramaribo',
        text: 'In 1889 duikt zijn naam op in de Surinaamse burgerlijke stand. Bij de aangifte van een geboorte in Paramaribo tekent hij als getuige. Achter zijn naam staat: militair.',
      },
      {
        heading: 'De familie Van Zorgen',
        text: 'De vrouw met wie Jacobus zijn leven zal delen, is [Susanna Maria Francina van Zorgen](p:629315). Haar vader is kleermaker. Haar moeder, [Catharina Elisabeth Baank](p:481266), is geboren op 15 april 1841.',
      },
      {
        heading: '14 september 1889, Gravenstraat B 2',
        text: '[Petronella Lodevica Esther van Zorgen](p:150549) overlijdt op 14 september 1889. Als plaats van overlijden noteert de ambtenaar: [Gravenstraat B 2, het Militair Hospitaal](g:stm-1885-address-0327).',
      },
      {
        heading: 'Een huwelijk, vier kinderen',
        text: 'Op 25 november 1896 trouwen Jacobus en Susanna in [Paramaribo](g:stm-06330). Bij het huwelijk worden vier kinderen erkend en gewettigd als hun natuurlijke kinderen.',
      },
      {
        heading: 'Portier aan de Gravenstraat',
        text: 'In 1914 staat Jacobus opnieuw als getuige in een akte, dit keer bij een overlijden. Zijn beroep is veranderd: hij is portier bij het Militair Hospitaal.',
      },
      {
        heading: 'Gebleven',
        text: 'Volgens FamilySearch overlijdt Jacobus Carolus van Bochove in 1954, op 88-jarige leeftijd. Hij kwam als militair, trouwde met een vrouw uit Paramaribo en bleef.',
      },
    ],
  },
  'door-dezelfde-poort': {
    category: 'Familiegeschiedenis · Weeze – Curaçao – Paramaribo · 1682–2023',
    title: (
      <>
        Door dezelfde <em>poort</em>
      </>
    ),
    subtitle: 'Het verhaal van Steven Walther Coutinho',
    introduction:
      'Steven woont in Paramaribo. In 2020 komt hij op doktersbezoek in [’s Lands Hospitaal](g:stm-1885-address-0327) aan de Gravenstraat. Niets ernstigs. Ruim honderd jaar geleden was het anders: toen stierven daar twee van zijn familieleden en werd er een neefje geboren. Een reconstructie langs twee familielijnen: Vervuurt en Donner van vaderskant, Coutinho van moederskant.',
    meta: 'Leestijd ± 9 minuten · Bronnen: Nationaal Archief Suriname, Delpher, familiearchieven Vervuurt, Donner en Coutinho',
    sections: [
      {
        heading: 'Een wachtkamer aan de Gravenstraat',
        text: [
          'Het verhaal begint in een wachtkamer. In 2020 heeft Steven Walther Coutinho voor het eerst een afspraak bij een arts in ’s Lands Hospitaal in Paramaribo. De laatste keer is rond juli 2023, bij dr. Bernardo Panka. Opgenomen is hij er nooit.',
          'Steven is op 15 september 1976 geboren in Leidschendam. Hij groeit op in Australië, bij zijn moeder Yvonne Gisela Coutinho en zijn stiefvader. In 1990, hij is dan dertien, verhuist hij naar Paramaribo, omdat zijn moeder daar wil wonen.',
          'Zijn vader, de econoom prof. dr. Walther Donner, ziet hij af en aan. Pas als Steven in Delft gaat studeren, leert hij hem echt kennen.',
          'Wat Steven in die wachtkamer niet weet: zijn familie ging al ruim een eeuw eerder door dezelfde poort.',
        ],
        quote: {
          text: 'Het is een mooi gebouw, maar wel oud en slecht onderhouden. Je moet uitkijken dat het niet uit elkaar valt als je ertegenaan stoot.',
          by: 'Steven Coutinho over ’s Lands Hospitaal',
        },
      },
      {
        heading: 'Het meisje dat ontbreekt',
        text: [
          'Op 28 mei 1912 overlijdt in het Militair Hospitaal Hilda Louise Vervuurt. Ze is drie jaar en negen maanden oud. De chef van het hospitaal, Tiddo Reddingius, doet zelf aangifte bij de burgerlijke stand.',
          'Hilda is een dochter van Edwin Vervuurt en Catharina Antoinette Donner. Edwin is een broer van Stevens overgrootvader Gustaaf Vervuurt. Antoinette is een zus van zijn overgrootmoeder Ida Donner. Twee broers trouwden met twee zussen. Zo was Hilda een dubbele nicht van Stevens grootmoeder Gusta.',
          'Een paar jaar later laat de familie een groepsfoto maken voor een houten huis. Ruim vijftig mensen staan erop. Edwin en Antoinette staan rechts, met hun kinderen Charlie, Bert, Julie, Richinel, George, Lex, Annie, Betsy en August. Hilda staat er niet bij.',
        ],
        quote: {
          text: 'Ruim vijftig familieleden op één foto. Eén naam ontbreekt.',
        },
      },
      {
        heading: 'Van De Drie Gebroeders naar de Gonggrijpstraat',
        text: [
          'De familie van Stevens vader komt uit twee richtingen. De ene begint rond 1740 in Weeze, net over de Duitse grens. Daar wordt Petrus Vervuurt geboren. Zijn zoon Jan komt via Heteren in de Betuwe naar Paramaribo en sterft daar in 1820.',
          'De andere begint op plantage De Drie Gebroeders aan de Boven-Suriname. Daar leeft Santje, tot slaaf gemaakt, overleden vóór 1848. Haar dochter Brunette is veldmeid. Brunettes dochter Julia, geboren op 17 maart 1847, is huismeid.',
          'Op 1 juli 1863 worden moeder en dochter vrij. Ze krijgen de naam Zechiel. In 1881 trouwt Julia met schoenmaker Carel Constantijn Vervuurt, kleinzoon van Jan. Hun zoon Gustaaf Egbert, in 1871 geboren als Zechiel, heet vanaf dat huwelijk Vervuurt.',
          'Gustaaf wordt schrijnwerker en meubelmaker. Met Ida Henriëtte (Jetje) Donner krijgt hij minstens negen kinderen; sommigen heten Vervuurt, anderen Donner. In 1921 woont het hele gezin in de Gonggrijpstraat. Een van de dochters is Augusta Egbertina, Gusta, geboren in 1906: Stevens grootmoeder.',
        ],
        tree: {
          title: 'Vaderskant · Van Weeze en De Drie Gebroeders naar Steven',
          branches: [
            [
              {
                name: 'Santje',
                detail: 'De Drie Gebroeders · overleden vóór 1848',
              },
              {
                name: 'Brunette Dorothea Zechiel',
                detail: 'ca. 1823 · vrij 1 juli 1863',
              },
              {
                name: 'Emelina Julia Zechiel',
                detail: '1847–1917 · vrij 1 juli 1863',
              },
            ],
            [
              { name: 'Petrus Vervuurt', detail: 'Weeze, ca. 1740' },
              {
                name: 'Jan Vervuurt',
                detail: 'Heteren 1766 – Paramaribo 1820',
              },
              {
                name: 'Mathijs Godlieb Vervuurt',
                detail: '1800–1874 · met Constantia Francina Bruining',
              },
              {
                name: 'Carel Constantijn Vervuurt',
                detail: '1837–1909 · schoenmaker',
              },
            ],
          ],
          join: 'getrouwd 23 maart 1881',
          couple: [
            { name: 'Gustaaf Egbert Vervuurt', detail: '1871 · meubelmaker' },
            {
              name: 'Ida Henriëtte Donner',
              detail: '1879 · Rencontre, Boven-Para',
            },
          ],
          descendants: [
            { name: 'Augusta Egbertina (Gusta) Donner', detail: '1906' },
            { name: 'Walther Donner', detail: 'Paramaribo, 9 december 1929' },
            {
              name: 'Steven Walther Coutinho',
              detail: 'Leidschendam, 15 september 1976',
              highlight: true,
            },
          ],
        },
      },
      {
        heading: 'De Donners',
        text: [
          'Ida Donner wordt in 1879 geboren op Rencontre aan de Boven-Para. Haar ouders zijn Johann Wilhelm Anton Donner en Elmina Albertina Naharen: Stevens betovergrootouders.',
          'J.W.A. Donner is brigadier bij het Korps Marechaussee en later ambtenaar. In de krant kondigt hij een cursus aan in boekhouden en handelsrekenen, vanuit de Gonggrijpstraat. Een J.W.H. Donner biedt waterverfportretten aan, met als voorbeeld een portret van den Duitschen Keizer. Ruim een halve eeuw later wordt zijn achterkleinzoon Walther boekhouder.',
          'Ida’s zus Antoinette trouwt met Edwin Vervuurt; zij zijn de ouders van Hilda. Hun broers Paul en Jean staan op de foto’s die de familie bewaarde. Elmina overlijdt in oktober 1917, na wat de dankbetuiging in de krant een smartelijke ziekte noemt.',
        ],
      },
      {
        heading: 'Walther',
        text: [
          'Op 9 december 1929 krijgt Gusta Donner in Paramaribo een zoon: Walther. Hij groeit op bij zijn grootouders in de Gonggrijpstraat en werkt na de lagere school in de meubelzaak van opa Vervuurt. ’s Avonds gaat hij naar school.',
          'Rond zijn achttiende vertrekt hij naar Aruba, waar hij boekhouder wordt. Hij trouwt, studeert in Nederland en promoveert. Hij is lid van de Rekenkamer op Curaçao en werkt daarna als econoom bij de Surinaamse ministeries van Economische Zaken en Landbouw.',
          'In de jaren zeventig geeft hij economieles in Wassenaar en Den Haag. Dan wordt in Leidschendam Steven geboren, uit zijn relatie met Yvonne Coutinho. Daarna werkt Walther op Barbados, in Miami en in Costa Rica. Zijn laatste jaren woont hij in Huize Margriet in Paramaribo, de stad waar het begon.',
        ],
      },
      {
        heading: 'Van Penedono naar de Jodensavanne',
        text: [
          'Stevens moeder brengt een heel andere geschiedenis mee. Zijn eigen stamboom van de Coutinho’s begint in Penedono, in Noord-Portugal, bij D. Vasco Fernandes Coutinho, heer van Leomil in de veertiende eeuw.',
          'De eerste Coutinho in de Nieuwe Wereld op zijn stamblad is Mosseh Henriques Coutinho. Op 17 juni 1682 trouwt hij op Curaçao met Rahel de Ishak Henriquez Moron. Steven noteerde dat Mosseh waarschijnlijk een zoon is van een van de eerste joodse families die in 1659 op Curaçao aankwamen.',
          'Hun zoon Jahacob woont al in Suriname. Hij sterft in 1788 en ligt begraven op de Jodensavanne. Daarna volgen vier generaties in Paramaribo, tot Aaron Mozes Coutinho (1850–1917). Zijn zoon Leonel Edwin, geboren in 1901, is Stevens grootvader.',
          'Leonel Edwin trouwt met Hilda Mendeszoon. Via haar loopt de lijn die Steven liet vastleggen als halachische vaststelling: van moeder op moeder, terug tot Ester Princeza Fernandes. Zo heeft Steven twee Hilda’s in zijn familie: zijn grootmoeder, en het meisje dat in 1912 in het hospitaal stierf.',
        ],
        tree: {
          title: 'Moederskant · Coutinho en de halachische lijn',
          branches: [
            [
              {
                name: 'Mosseh Henriques Coutinho',
                detail: 'ca. 1663 · trouwt Curaçao 1682',
              },
              {
                name: 'Jahacob Henriques Coutinho',
                detail: 'ca. 1700–1788 · Jodensavanne',
              },
              {
                name: 'Mosseh (1724) · Jahacob (1759) · Mosseh (1796)',
                minor: true,
              },
              {
                name: 'Aaron Mozes Coutinho',
                detail: '1850–1917 · met Wilhelmina Halfhide',
              },
              { name: 'Leonel Edwin Coutinho', detail: '1901' },
            ],
            [
              { name: 'Ester Princeza Fernandes', detail: 'met Carel Meyer' },
              {
                name: 'Esther Carolina Meyer',
                detail: '1833 · met Jan M.F. Grunberg',
              },
              {
                name: 'Jacqueline Ferdina Grunberg',
                detail: '1884 · met Gustaaf R. Mendeszoon',
              },
              { name: 'Hilda Mendeszoon', detail: 'Stevens grootmoeder' },
            ],
          ],
          couple: [
            { name: 'Yvonne Gisela Coutinho', detail: '18 januari 1939' },
            { name: 'Walther Donner', detail: '1929' },
          ],
          descendants: [
            {
              name: 'Steven Walther Coutinho',
              detail: '1976',
              highlight: true,
            },
          ],
          note: 'Rechts de halachische lijn, van moeder op moeder.',
        },
      },
      {
        heading: 'Gravenstraat B 2',
        text: 'In de akten van rond 1900 heet ’s Lands Hospitaal nog Militair Hospitaal, Gravenstraat B 2. Drie keer staat Stevens familie er in de burgerlijke stand. Telkens doet de leiding van het hospitaal zelf aangifte.',
        events: [
          {
            year: '1907',
            text: 'Frederik Jacobus (Frits) Vervuurt overlijdt, 64 jaar. Hij is een broer van Stevens betovergrootvader Carel Constantijn. Aangever: Joseph van de Winkel, administrateur.',
          },
          {
            year: '1912',
            text: 'Hilda Louise Vervuurt overlijdt, drie jaar en negen maanden. Aangever: Tiddo Reddingius, chef.',
          },
          {
            year: '1914',
            text: 'Etienne Ludwig Vervuurt wordt geboren, zoon van Gustaafs broer Reinhard Constantijn. Aangever: H.A. Hovenkamp, chef.',
          },
        ],
        after: [
          'Ook in de zorg zelf staan familienamen. In 1884 is Francois Albertus Vervuurt ziekenoppasser in het hospitaal; hij tekent bij minstens tien overlijdens. Of hij familie is, is nog niet bewezen. Aan moederskant is Salomon Coutinho, broer van Stevens betovergrootvader Aaron Mozes, in 1891 ziekenoppasser. In welk hospitaal staat er niet bij.',
          'In 1914, het jaar waarin Etienne er wordt geboren, staat aan dezelfde poort een portier: Jacobus Carolus van Bochove, van wie het verhaal [‘Gekomen, gebleven’](s:gekomen-gebleven) vertelt.',
        ],
        quote: {
          text: 'Twee ziekenoppassers, aan twee kanten van één stamboom.',
        },
      },
      {
        heading: 'Door dezelfde poort',
        ending: true,
        text: 'Twee families, twee wegen. De ene loopt van Weeze en plantage De Drie Gebroeders naar de Gonggrijpstraat. De andere van Penedono via Curaçao en de Jodensavanne naar de Keizerstraat. Ze komen samen in Steven, en in een gebouw aan de Gravenstraat. Ruim een eeuw na Frits, Hilda en Etienne zit hij er zelf in de wachtkamer.',
      },
    ],
    timeline: [
      {
        date: '17-06-1682',
        text: 'Mosseh Henriques Coutinho trouwt op Curaçao met Rahel de Ishak Henriquez Moron',
      },
      { date: 'ca. 1740', text: 'Petrus Vervuurt geboren in Weeze' },
      {
        date: '07-08-1788',
        text: 'Jahacob Henriques Coutinho overleden, begraven op de Jodensavanne',
      },
      { date: '10-03-1820', text: 'Jan Vervuurt overleden in Paramaribo' },
      {
        date: '17-03-1847',
        text: 'Julia geboren op plantage De Drie Gebroeders, dochter van Brunette',
      },
      {
        date: '01-07-1863',
        text: 'Brunette en Julia vrij, met de naam Zechiel',
      },
      {
        date: '17-06-1871',
        text: 'Gustaaf Egbert Zechiel geboren, later Vervuurt',
      },
      {
        date: '22-02-1879',
        text: 'Ida Henriëtte Donner geboren op Rencontre, Boven-Para',
      },
      {
        date: '23-03-1881',
        text: 'Huwelijk Julia Zechiel en Carel Constantijn Vervuurt',
      },
      {
        date: '1907',
        text: 'Frits Vervuurt overleden in het Militair Hospitaal',
      },
      {
        date: '28-05-1912',
        text: 'Hilda Louise Vervuurt overleden in het Militair Hospitaal, 3 jaar',
      },
      {
        date: '1914',
        text: 'Etienne Ludwig Vervuurt geboren in het Militair Hospitaal',
      },
      { date: '10-1917', text: 'Elmina Albertina Donner-Naharen overleden' },
      {
        date: '1921',
        text: 'Gezin Vervuurt-Donner in de Gonggrijpstraat (volkstelling)',
      },
      { date: '09-12-1929', text: 'Walther Donner geboren in Paramaribo' },
      { date: '18-01-1939', text: 'Yvonne Gisela Coutinho geboren' },
      {
        date: '15-09-1976',
        text: 'Steven Walther Coutinho geboren in Leidschendam',
      },
      { date: '1990', text: 'Steven verhuist van Australië naar Paramaribo' },
      {
        date: '2020–2023',
        text: 'Steven op doktersbezoek in ’s Lands Hospitaal',
      },
    ],
    sourceList: [
      'Overlijden Hilda Louise Vervuurt, 1912: SR-NA_2.10.61_1132_0111-l',
      'Overlijden Frits Vervuurt, 1907, en geboorte Etienne Ludwig Vervuurt, 1914: Nationaal Archief Suriname, burgerlijke stand',
      'Geboorte Gustaaf Egbert Zechiel, 1871: SR-NA_2.10.61_47_0167-l',
      'Overlijden Carel Constantijn Vervuurt, 1909: SR-NA_2.10.61_1123_0241-l',
      'Brunette Dorothea en Julia Emelina Zechiel: slavenregisters en emancipatieregister, Id_person 16883 en 16924',
      'Gezin Vervuurt-Donner: volkstelling 1921, Gonggrijpstraat, kring XXIII, lijst 131',
      'Overlijden Rebecca Goedschalk, 1858: SR-NA_2.10.61_1000_0081-l',
      'Overlijden Salomon Coutinho, 1894: SR-NA_2.10.61_1076_0162-l',
      'Krantenberichten J.W.A. Donner en Elmina Naharen: Delpher',
      'Descendants of Petrus Vervuurt (Legacy, 11 april 2002)',
      'Stamboom van Coutinho en Joods-Halachische Genealogie Yvonne G. Coutinho (Steven Coutinho; o.a. dr. John de Bye)',
      'Levensloop Walther Donner (3 september 2022)',
    ],
  },
  'klerk-marechaussee-boer': {
    category: 'Familiegeschiedenis · Middelburg – Paramaribo · 1845–1907',
    title: (
      <>
        Klerk, marechaussee, <em>boer</em>
      </>
    ),
    subtitle: 'Het leven van Johannes Pieter de Graaff',
    introduction:
      'Hij werd in 1845 in Middelburg geboren, twee maanden na de dood van zijn vader. In Suriname was hij kantoorklerk op een plantage in Nickerie, marechaussee aan de Saramacca en daarna landbouwer in de Tweede Buitenwijk. Hij trouwde twee keer in een Nederlandse boerenfamilie en stierf in 1907 in het [Militair Hospitaal](g:stm-1885-address-0327). Zestien akten vertellen zijn verhaal.',
    sections: [
      {
        heading: 'Middelburg, 14 mei 1845',
        text: [
          '[Johannes Pieter](p:274243) was de jongste van een arbeidersgezin. Zijn vader, de dagloner Boudewijn de Graaff, overleed op 18 maart 1845, twee maanden voor zijn geboorte. Zijn moeder Jacomijntje Adriaanse uit Goes was dienstbode en later werkvrouw. Van haar kinderen, geboren tussen 1832 en 1845, stierven er meerdere jong.',
          'Jacomijntje overleed op 11 februari 1864 in het Gasthuis van Middelburg. Johannes Pieter was toen achttien. Wanneer hij naar Suriname vertrok, staat in geen enkele bron die we nu kennen.',
        ],
      },
      {
        heading: 'Kantoorklerk op plantage Waterloo',
        text: [
          'In 1875 duikt zijn naam voor het eerst op in Suriname. Hij is dertig jaar en kantoorklerk op [plantage Waterloo](g:stm-01345) in Nickerie. Als klerk tekende hij als getuige bij de overlijdensaangiften van arbeiders: [Beekha](p:433620), contractarbeider 1124/B uit Brits-Indië, [Joseph Clarck](p:433668) uit Barbados en [Cornelis Woisk](p:433674).',
          'Zo staat de Zeeuwse klerk in de akten naast mensen die van de andere kant van de wereld naar dezelfde plantage waren gehaald.',
        ],
      },
      {
        heading: 'Marechaussee aan de Saramacca',
        text: [
          'In 1880 is hij marechaussee tweede klasse op het station [Groningen](g:stm-06248) aan de Saramacca, onder brigadier [Meindert Verschuur](p:559374). Tot 1884 noemen de akten hem marechaussee, eerst in Saramacca en daarna in de Tweede Buitenwijk van Paramaribo.',
          'Groningen was ook de plek waar in 1845 boerenkolonisten uit Gelderland en Utrecht aan land waren gegaan. Een van hen was [Evert van der Klift](p:344758), zijn latere schoonvader.',
        ],
      },
      {
        heading: 'Een boeroefamilie in de Tweede Buitenwijk',
        text: [
          'Op 24 augustus 1881 trouwde hij in Paramaribo met de 21-jarige [Cornelia van der Klift](p:161611). Hij kon geen geboorteakte overleggen en verklaarde zijn geboorte onder ede; haar moeder, landbouwster, gaf toestemming. Cornelia’s ouders, Evert van der Klift uit Amerongen en [Jansien Perkementis](p:163846) uit Zwolle, waren boeroes: zij hadden het kolonisatieproject van 1845 overleefd en boerden aan het kanaal naar [Kwatta](g:stm-01948) en de [Wanicastraat](g:stm-street-wanicastraat).',
          'Hun zoon kreeg de namen van beide grootvaders, [Boudewijn Evert Johannes](p:112305). Hij werd geboren op 20 januari 1884 en stierf een maand later, in het familiehuis Tweede Buitenwijk 47. De vader deed zelf aangifte. In 1886 volgde een dochter, [Cornelia Maria](p:606131).',
          'Op 1 mei 1891 overleed Cornelia, dertig jaar oud, in Tweede Buitenwijk 238. Haar moeder Jansien stierf twee maanden later in hetzelfde huis.',
        ],
      },
      {
        heading: 'Weduwnaar en landbouwer',
        text: [
          'Op 18 mei 1893 trouwde hij opnieuw, met [Wilhelmina Velthuizen](p:274247) (46). Ze was een dochter van de boeroe Gerardus Velthuizen en Gijsbertje van den Berg; haar broer [Teunis](p:1917774), landbouwer op [De Drie Gebroeders](g:stm-01933), was getuige. Beide vrouwen van De Graaff kwamen dus uit boeroefamilies. Hij was 48, weduwnaar en landbouwer.',
          'Een half jaar later, op 29 november 1893, trouwde op [plantage Beekhuizen](g:stm-01983) in Beneden-Para de 24-jarige [Willem Gerhardus Lodewijk van Velthuizen](p:1932259). In zijn huwelijksakte staan als ouders Wilhelmina van Velthuizen en “Johannes Pieter de Graaf”, vader, in leven. Als dat klopt, kende De Graaff Wilhelmina al rond 1868, en waren Mathilda (1887) en Willem Gijsbertus (1891) zijn kleinkinderen. Het is de enige bron voor dit vaderschap.',
          'De akten laten ook zijn kring zien: steeds dezelfde buren en boeren tekenen samen als getuige, zoals [Theodorus Hugo Monsanto](p:25488) en de landbouwer [Frederic Fraser](p:120645) van de [Steenbakkersgracht](g:stm-street-steenbakkersgracht).',
        ],
      },
      {
        heading: '24 juli 1907, Gravenstraat B 2',
        text: [
          'Johannes Pieter de Graaff stierf op 24 juli 1907 om één uur ’s nachts “in het huis aan de [Gravenstraat](g:stm-street-gravenstraat) bekend als letter B nummer twee (Militair Hospitaal)”. Hij was 62, landbouwer, en woonde in het district Beneden-Suriname.',
          'Aangifte deed [Joseph van de Winkel](p:266112), de administrateur van het hospitaal. Familie was daar niet bij. Acht jaar later werd zijn kleindochter [Cornelia Henriette](p:751898) in hetzelfde hospitaal geboren.',
        ],
      },
      {
        heading: 'Wie er bleef',
        ending: true,
        text: [
          'In de volkstelling van 1921 woont zijn dochter Cornelia Maria aan de [Idsingastraat](g:stm-street-van-idsingastraat) met waarschijnlijk haar broer J.J. de Graaff (1882) en haar dochters Johanna Cornelia Maria (1910) en Cornelia Henriette (1915), al onder de naam Van der Erf. Hun vader, de fuselier [Gerardus Henderikus van der Erf](p:343778), had beide meisjes in 1918 samen met Cornelia Maria erkend. Cornelia Maria overleed in 1958 in Paramaribo.',
        ],
      },
    ],
    sources:
      'Bronnen: Zeeuws Archief (geboorte 1845, overlijden vader 1845, huwelijk ouders 1831, overlijden moeder 1864), overlijdens- en geboorteakten Paramaribo (Nationaal Archief Suriname 2.10.61), huwelijksakten 1881 en 1893, erkenning 1918, volkstellingen 1921 en 1950. Redactie: Nisha Marapin en Thunnis van Oort.',
  },
  'geboren-in-het-hospitaal': {
    category:
      'Familiegeschiedenis · China – Paramaribo – Commewijne · 1869–1950',
    title: (
      <>
        Geboren in het <em>hospitaal</em>
      </>
    ),
    subtitle: 'Het gezin van Sjiew-Oe-Joen en June-Tjauw Won-Ton-Tja',
    introduction:
      'In de volkstelling van 1921 staat een kind uit het gezin [Sjiew-Oe-Joen](p:712147) als patiënt in ’s Lands Hospitaal. Twee van de kinderen werden er geboren. Het verhaal van een Chinees-Surinaams gezin tussen de Jodenbreestraat, de plantages aan de Commewijne en het hospitaal aan de Gravenstraat.',
    sections: [
      {
        heading: 'Jodenbreestraat C 87, 25 juni 1880',
        text: [
          '[June-Tjauw Won-Ton-Tja](p:582445) werd geboren op 25 juni 1880 in de [Jodenbreestraat](g:stm-street-jodenbreestraat), huis C 87, als kind van [Won-Ton-Tja](p:582447), winkelier, en [Ho-Alan](p:264647).',
          'Ho-Alan was in China geboren. Zij overleed op 25 april 1906 in de Tweede Buitenwijk, nummer 90, zestig jaar oud.',
        ],
      },
      {
        heading: 'Een huwelijk aan huis, 1907',
        text: [
          'Sjiew-Oe-Joen en June trouwden in september 1907 in [Paramaribo](g:stm-06330). Hij was 38 jaar en winkelier, geboren in China rond 1869 als zoon van Sjiew Ngie en Tjoeng-Shee. Een geboorteakte kon hij niet overleggen; hij bevestigde zijn verklaring onder ede.',
          'June was ziek. Daarom kwam de ambtenaar naar het huis aan de [Saramaccastraat](g:stm-street-saramaccastraat), letter E nummer 21. Haar vader was erbij en gaf toestemming. Omdat de bruidegom en de vader geen Nederlands spraken, werd de akte voor hen in het Chinees vertolkt.',
        ],
      },
      {
        heading: 'Vijf kinderen',
        text: [
          'Met June-Tjauw Won-Ton-Tja kreeg hij vijf kinderen: [Elize Helena Rosalina Sjiew-Oe-Joen](p:712145), geboren op 21 juni 1908 in Paramaribo; [Celina Anna Marie Won-Ton-Tja](p:721832), geboren op 26 januari 1910 in het [Militair Hospitaal](g:stm-1885-address-0327); [Mathilde Harriette Won-Ton-Tja](p:733076), geboren op 18 december 1911 in Paramaribo; [Cornelis Richenel Sjiew-Oe-Joen](p:1431205), geboren op 30 augustus 1914 in [Ephrata](g:stm-01327) aan de Cottica; en [Emelie](p:786932), geboren op 7 november 1920 in Paramaribo, ook in het Militair Hospitaal.',
          'Bij beide geboorten in het hospitaal deed niet de vader aangifte, maar het hospitaal zelf: in 1910 de administrateur, in 1920 de chef, een officier van gezondheid.',
        ],
      },
      {
        heading: 'Een kind bij een ander gezin',
        text: [
          'Opmerkelijk is dat het paar nog een kind had dat bij de volkstelling niet bij hen inwoonde, maar bij een ander paar, als “niet verwante bestedeling”: [Francis Eleonor Sjiew-Oe-Joen](p:1451372), geboren op 10 september 1916 op [Guadeloupe](g:stm-01255) in Beneden-Commewijne.',
          'Francis is ook te vinden in de volkstelling van 1950. Zij is dan de echtgenote van Kees Dragt; het paar woont aan de Mauritsstraat 16.',
        ],
      },
      {
        heading: 'In het hospitaal, 1921',
        ending: true,
        text: [
          'In de volkstelling van 1921 woont het gezin op plantage [Johan en Margaretha](g:stm-01253) aan de Commewijne. Op de lijst van ’s Lands Hospitaal staat dan een [M. Sjieuw Oe Joen](p:1450781), geboren in 1912: vrijwel zeker de tienjarige Mathilde Harriette, die ook thuis op de lijst staat.',
        ],
      },
    ],
    sources:
      'Bronnen: geboorteakten Paramaribo 1880, 1908, 1910, 1911 en 1920 en overlijdensakte 1906 (Nationaal Archief Suriname 2.10.61), huwelijksakte nr. 161 Paramaribo 1907, volkstelling 1921 (Nationaal Archief 2.10.19.01, inv. 54, scans 0656 en 0785), lijst van patiënten ’s Lands Hospitaal 1921, volkstelling 1950.',
  },
  'vrij-sinds-1836': {
    category: 'Familiegeschiedenis · Paramaribo · 1835–1922',
    title: (
      <>
        Vrij sinds <em>1836</em>
      </>
    ),
    subtitle: 'Het leven van Michel Jacob Biervliet',
    introduction:
      '[Michel Jacob Biervliet](p:546189) stamt uit een vrije familie: zijn grootmoeder [Christiana](p:831685) werd al op 17 februari 1836 vrijgemaakt en kreeg toen de naam Biervliet, 27 jaar vóór de afschaffing van de slavernij in 1863, maar het staatstoezicht, met de verplichting om op de plantages te blijven werken, eindigde pas op 1 juli 1873. Haar kleinzoon Michel Jacob was gouddelver en stoker in Paramaribo. In de volkstelling van 1921 staat hij twee keer in het [Militair Hospitaal](g:stm-1885-address-0327), kort voor zijn dood.',
    sections: [
      {
        heading: 'Vrij geworden, 17 februari 1836',
        text: [
          'In april 1835 vroeg F. Bothe, liquidateur van de opgeheven firma Bothe en Fuchs, namens de erven van Johann Gottlieb Schubert de vrijlating aan van “de Slaven Jantje, Doris, Charles en Christiana”. De firma had Christiana kort daarvoor gekocht uit de boedel van H. Jacobs.',
          'Op 17 februari 1836 staat bij haar naam in het slavenregister: “vrij geworden en heet C Biervliet” (inv. 43, folio 5236). Haar zoon uit 1841 kreeg de naam Schubert Andreas, vrijwel zeker naar de overleden eigenaar.',
        ],
      },
      {
        heading: 'Een erf aan de Zwartenhovenbrugstraat',
        text: [
          'In het wijkregister van 1839 staat Christiana als “kleurling”, hervormd, aan de [Zwartenhovenbrugstraat](g:stm-street-zwartenhovenbrugstraat). Ze kreeg tussen 1837 en 1850 zeven kinderen. Bij drie van hen deed [Charles Hendrik Boschman](p:478243) de aangifte; hij werd later hun voogd. Of hij de vader was, zeggen de akten niet.',
          'In 1841 kochten Christiana en [Amelia van Leesten](p:831682), zelf vrijgelaten in 1833, voor hun minderjarige kinderen het erf Zwartenhovenbrugstraat E 218. Daar zou Christiana’s dochter Floortje later haar kinderen krijgen.',
        ],
      },
      {
        heading: 'Bezitters van mensen',
        text: [
          'Vrij zijn betekende in deze familie ook: eigenaar worden. In 1850 kochten de minderjarige kinderen Van Leesten en Biervliet vijf mensen van C.H. Boschman: Charles, Adriaan, Marjanna, Lambertus en Jan. Een van de kopers op papier was [H.F. Biervliet](p:485062), Michels moeder, toen zes jaar oud.',
          'Lambertus werd in 1855 verkocht en verdronk in 1859. Adriaan werd in 1857 verkocht en vluchtte in 1861. [Marianna](p:35967) en haar dochters werden op 1 juli 1863 vrij onder de achternaam Bleijenhoop, de naam van de grond van de familie aan het Pad van Wanica.',
        ],
      },
      {
        heading: 'Floortje en haar zonen',
        text: [
          '[Henriette Floortje Biervliet](p:485062), geboren in 1843, trouwde nooit. Ze kreeg vijf zonen in het huis aan de Zwartenhovenbrugstraat; geen enkele akte noemt een vader. De tweeling uit 1869 heette [Michel Jacob](p:541635) en Christiaan Charles. Michel Jacob stierf na een maand.',
          'Op 8 november 1870 kreeg Floortje weer een zoon, en hij kreeg dezelfde naam: Michel Jacob. Zijn oom [Willem](p:546176), twintig jaar en letterzetter, deed aangifte.',
          'Toen Floortje in 1890 stierf, plaatsten haar broers J.H. en W. Biervliet “mede voor de overige familie” een dankbetuiging voor “onze zuster Henriette Floortje” (De West-Indiër, 6 april 1890).',
        ],
      },
      {
        heading: 'Gouddelver tussen twee tochten',
        text: [
          'Michel Jacob woonde zijn hele leven in de oude binnenstad: de [Koningsstraat](g:stm-street-koningstraat), de [Prinsenstraat](g:stm-street-prinsenstraat), de [Pontewerfstraat](g:stm-street-pontewerfstraat), de [Weidestraat](g:stm-street-weidestraat). In de akten is hij gouddelver, in 1904 stoker en in 1917 kok. Nog in 1911 en 1917 was hij getuige bij een erkenning.',
          'Hij tekende vaak als getuige, en meestal samen met andere gouddelvers: in 1903 zetten drie gouddelvers samen hun naam onder één akte. Dat past bij mannen die tussen twee tochten naar het binnenland in de stad waren. Zijn jongere broer [Marius](p:193252) stierf in 1895 als achttienjarige zeeman in Boven-Saramacca, een goudgebied.',
        ],
      },
      {
        heading: 'Twee keer in het hospitaal, 1921',
        text: [
          'In de volkstelling van 1921 staat Michel drie keer. Thuis woont hij alleen, aan de [Rust en Vredestraat](g:stm-street-rust-en-vredestraat). Daarnaast staan een “M.J. Biervliet” en een “M. Biervliet, geb. 1872” op de lijst van het Militair Hospitaal.',
          'Dat hij die patiënt is, is aannemelijk maar niet zeker: het geboortejaar wijkt twee jaar af, wat in deze telling vaker gebeurt. Ruim drie maanden later, op 12 januari 1922, stierf hij in Paramaribo, 51 jaar oud. Waar precies, weten we nog niet.',
          'De familie bleef het hospitaal kennen: zijn nicht [Johanna Charlotte Wilhelmina](p:594469) kreeg er drie kinderen, en ook een [Salvador Christiaan Biervliet](p:776466) liet er tussen 1919 en 1921 drie kinderen geboren worden.',
        ],
      },
      {
        heading: 'Waarom Biervliet?',
        ending: true,
        text: [
          'Geen bron zegt waarom Christiana in 1836 de naam Biervliet kreeg. Het Zeeuws-Vlaamse stadje ligt voor de hand, maar de mensen rond haar vrijlating, Schubert, Bothe, Fuchs en Forster in Leipzig, wijzen eerder naar Duitsland. Het vrijlatingsrekest in de Gouvernementssecretarie kan het antwoord bevatten.',
        ],
      },
    ],
    sources:
      'Bronnen: slaven- en emancipatieregisters, wijkregisters 1835 en 1839, geboorte- en overlijdensakten (Nationaal Archief Suriname 2.10.61), erkenningen 1911 en 1917, volkstelling 1921 (ids 40639, 40640, 40645), Surinaamsche Courant 1835, 1841 en 1865, De West-Indiër 1864, 1869 en 1890, De Surinamer 22-01-1922 (Delpher). Redactie: Nisha Marapin en Thunnis van Oort.',
  },
  'de-naam-middelburg': {
    category:
      'Familiegeschiedenis · Paramaribo – Batavia – Nickerie · 1827–1928',
    title: (
      <>
        De naam <em>Middelburg</em>
      </>
    ),
    subtitle: 'Annette, haar kinderen en een achternaam uit 1863',
    introduction:
      'Op 1 juli 1863 kregen drie mensen uit één huishouden aan de Weidestraat de achternaam Middelburg: [Antje Johanna](p:963515), haar broer [Louis](p:963531) en haar dochter [Georgina](p:963542). Hun moeder en grootmoeder Annette was twaalf jaar eerder naar de leprakolonie gestuurd, een broer was naar Nickerie verkocht. Waarom juist Middelburg, zegt geen enkele bron. Een reconstructie aan de hand van slavenregisters, wijkregisters, akten en kranten.',
    sections: [
      {
        heading: 'Een huis aan de Weidestraat',
        text: [
          '[Andresa Petronella Muller](p:851573) was een vrije vrouw van kleur, geboren rond 1780 en lid van de Evangelische Broedergemeente. Vanaf 1833 woonde ze aan de [Weidestraat](g:stm-street-weidestraat), samen met haar zoon [Jan Albertinus Maij](p:851574), schrijver van beroep. In 1837 kocht ze er een huis; in 1838 droeg ze een ander huis aan dezelfde straat over aan twee leden van de familie Maij.',
          'In haar huishouden leefden tien tot veertien tot slaaf gemaakte mensen. Onder hen was [Annette](p:1242853), geboren rond 1813, met haar kinderen Antje (ca. 1827), Frits (ca. 1832) en Francina (ca. 1836). Op 5 januari 1839 kreeg Annette een zoon, Louis. Het slavenregister noteert hem als eigendom van Muller, “uit Annette”.',
          'Annette had eerder aan iemand anders toebehoord. Bij het huwelijk van haar dochter in 1872 schreef de ambtenaar dat Antje de dochter was van “wijlen Nanette, toebehoord hebbende aan wijlen Jan May”. Wie Jan May was, weten we nog niet. Hij droeg dezelfde achternaam als de zonen van Andresa Petronella Muller.',
        ],
      },
      {
        heading: 'Besmet verklaard, 24 mei 1851',
        text: [
          'Op 30 juni 1848 kreeg Antje, ongeveer 21 jaar oud, een dochter: Georgina. Twee maanden later stierf haar zusje Francina, twaalf jaar oud.',
          'Drie jaar later staat bij Annettes naam in het slavenregister: “1851 24 Mei besmet verklaard en naar Batavia verzonden.” [Batavia](g:stm-06412) aan de Coppename was de plek waar mensen met lepra werden afgezonderd. Wie erheen ging, kwam meestal niet terug. In de registers komt Annette daarna niet meer voor. Vijftig jaar later noemt de overlijdensakte van Antje haar moeder nog: “wijlen Nanette”.',
        ],
      },
      {
        heading: 'Verkocht naar Nickerie',
        text: [
          'Op 12 april 1854 verkocht Muller [Frits](p:963499), toen ongeveer 22, aan de erven van James Balfour. Het gouvernement gaf toestemming om hem “naar Nickerie over te voeren”, ver van zijn familie in Paramaribo. Vanaf 1860 staat hij op de lijst van [plantage Waterloo](g:stm-01345).',
          'Datzelfde jaar stierf Antjes dochter Helena, drie jaar oud. Haar zoon Frans, geboren in januari 1854, overleed eind 1858.',
          'Op 1 juli 1863 werd Frits vrij als [Frits Meij](p:963505), delver op Waterloo. Die naam lijkt op die van Jan Albertinus Maij, en op die van Jan May aan wie zijn moeder ooit had toebehoord. Hij stierf op 3 januari 1871 in Nickerie als [veldarbeider](p:397631).',
        ],
      },
      {
        heading: '1 juli 1863',
        text: [
          'Op 1 juli 1863 werd de slavernij in Suriname afgeschaft. Wie vrij werd, kwam in het emancipatieregister, en wie nog geen achternaam had, kreeg er een. Onder eigenaar A.P. Muller staan drie mensen: Antje, nu Antje Johanna, Louis en Georgina, alle drie huisbediende. Ze kregen de achternaam Middelburg. In het hele register komt die naam verder niet voor: hij werd voor deze familie gekozen.',
          'Louis had weinig tijd als vrij man. Op 3 januari 1866 verdronk [Louis Middelburg](p:360521) in Commewijne, 32 jaar oud. Hij was fabrieksarbeider.',
        ],
      },
      {
        heading: 'Een huwelijk in 1872',
        text: [
          'Op 11 december 1872 trouwde [Antje Johanna Middelburg](p:1899312), 45 jaar en wasvrouw, in het gemeentehuis van Paramaribo met [Frederik Kambel](p:1899311), 40 jaar en timmerman. Ook hij was in 1863 vrij geworden. Tot dan heette hij [Anthonij](p:1066023) en was hij eigendom van de minderjarige Marij Theresa Campbell. Zijn achternaam Kambel is de naam van zijn vroegere eigenaren, geschreven zoals hij werd uitgesproken.',
          'De akte noemt beide moeders, en aan wie zij hadden toebehoord. Frederik was de zoon van “wijlen Minerva, toebehoord hebbende aan wijlen Colin Campbell”, Antje de dochter van “wijlen Nanette, toebehoord hebbende aan wijlen Jan May”.',
        ],
      },
      {
        heading: 'Tweede Buitenwijk 68',
        text: [
          'Antje en Frederik woonden in de Tweede Buitenwijk, op nummer 68. Daar stierf [Antje Johanna Middelburg](p:231123) op 19 november 1901, 74 jaar oud. De timmerman Adriaan Matthijs Goede, een buurman, deed aangifte.',
          'Georgina trouwde op 2 september 1896, 48 jaar oud, met [Beharij](p:1920530), koewachter. Hij was als contractarbeider uit Brits-Indië gekomen en stond in het immigrantenregister onder nummer 105/B. Haar zoon James Kastir Beharij stierf in 1908, veertig jaar oud; Beharij een jaar later.',
          'Op 7 maart 1913 ging [Frederik Kambel](p:1771473), tachtig jaar en weduwnaar, naar de burgerlijke stand. Hij verklaarde Georgina, “geboren in Suriname omstreeks het jaar 1848 uit Antje Johanna Middelburg”, te erkennen als zijn natuurlijk kind. Georgina was toen 64. Of hij werkelijk haar vader was, valt niet te zeggen: volgens het slavenregister was hij in 1848 zelf pas zestien.',
          'Frederik Kambel stierf op 6 april 1918, 85 jaar oud. Georgina Middelburg overleed op 24 maart 1928, 79 jaar oud: geboren als eigendom van Muller, gestorven 65 jaar na de afschaffing.',
        ],
      },
      {
        heading: 'Waarom Middelburg?',
        ending: true,
        text: [
          'Geen bron zegt waarom deze familie Middelburg ging heten. In 1863 kregen meer mensen een Zeeuwse plaatsnaam, zoals Axel, Biervliet, Tholen, Vlissingen en Zeeland, en op plantage Domburg heette een man al in 1838 Middleburg. Maar als achternaam werd Middelburg alleen aan dit huishouden gegeven.',
          'Het nieuwste spoor is Jan May, aan wie Annette ooit toebehoorde. Was hij familie van de Maij’s in het huis van Muller, en had hij een band met Zeeland? Het Zeeuws Archief en de doopboeken van de Broedergemeente kunnen daar misschien antwoord op geven.',
        ],
      },
    ],
    sources:
      'Bronnen: slaven- en emancipatieregisters (inv. 9 fo. 1345, inv. 14 fo. 1128, inv. 26 fo. 880, inv. 24 fo. 196), wijkregisters Paramaribo 1828–1846, huwelijksakten 1872 en 1896, erkenning 1913, overlijdensakten 1866, 1869, 1871, 1901, 1908 en 1909 (Nationaal Archief Suriname 2.10.61), Surinaamsche Courant 1837 en 1838, Suriname 1872 en 1918, De West-Indiër 1896, De Surinamer 1909 en 1928 (Delpher).',
  },
} as const;

export type StorySlug = keyof typeof stories;

export const storyOverview = [
  {
    slug: 'gekomen-gebleven',
    image:
      '/images/hackalod-2026/verhalen/01-gekomen-gebleven/01-familieportret-paramaribo.jpg',
    alt: 'Familieportret in Paramaribo, datum onbekend',
    eyebrow: 'Familiegeschiedenis · Rotterdam – Paramaribo · 1841–1954',
    title: (
      <>
        Gekomen, <em>gebleven</em>
      </>
    ),
    subtitle: 'Het leven van Jacobus Carolus van Bochove',
    description:
      'Hij werd in 1866 in Rotterdam geboren en kwam als soldaat naar Suriname. Hij trouwde met Susanna van Zorgen, werd portier bij het Militair Hospitaal en ging nooit meer terug.',
    tags: ['Portier', 'Militair', '1866–1954'],
  },
  {
    slug: 'door-dezelfde-poort',
    image:
      '/images/hackalod-2026/verhalen/02-door-dezelfde-poort/01-groepsfoto-vervuurt-donner.jpg',
    alt: 'Familie Vervuurt en Donner, circa 1915–1917',
    eyebrow: 'Familiegeschiedenis · Weeze – Curaçao – Paramaribo · 1682–2023',
    title: (
      <>
        Door dezelfde <em>poort</em>
      </>
    ),
    subtitle: 'Het verhaal van Steven Walther Coutinho',
    description:
      'In 2020 zit Steven in de wachtkamer van ’s Lands Hospitaal. Ruim een eeuw eerder stierven daar twee van zijn familieleden en werd er een neefje geboren.',
    tags: ['Vervuurt · Donner', 'Coutinho', '1907 · 1912 · 1914'],
  },
  {
    slug: 'vrij-sinds-1836',
    image:
      '/images/hackalod-2026/verhalen/03-vrij-sinds-1836/01-zwartenhovenbrugstraat-1955.jpg',
    alt: 'De Zwartenhovenbrugstraat in Paramaribo, 1955',
    eyebrow: 'Familiegeschiedenis · Paramaribo · 1835–1922',
    title: (
      <>
        Vrij sinds <em>1836</em>
      </>
    ),
    subtitle: 'Het leven van Michel Jacob Biervliet',
    description:
      'Zijn grootmoeder Christiana werd in 1836 vrijgemaakt en heette voortaan Biervliet. Haar kleinzoon was gouddelver in Paramaribo en staat in 1921 twee keer in het Militair Hospitaal.',
    tags: ['Gouddelver', 'Vrijlating 1836', '1870–1922'],
  },
  {
    slug: 'klerk-marechaussee-boer',
    image:
      '/images/hackalod-2026/verhalen/04-klerk-marechaussee-boer/01-straatgezicht-middelburg.jpg',
    alt: 'Straatgezicht in Middelburg, negentiende eeuw',
    eyebrow: 'Familiegeschiedenis · Middelburg – Paramaribo · 1845–1907',
    title: (
      <>
        Klerk, marechaussee, <em>boer</em>
      </>
    ),
    subtitle: 'Het leven van Johannes Pieter de Graaff',
    description:
      'Geboren in Middelburg, twee maanden na de dood van zijn vader. In Suriname klerk, marechaussee en boer; hij trouwde twee keer in een boeroefamilie en stierf in 1907 in het Militair Hospitaal.',
    tags: ['Marechaussee', 'Boeroes', '1845–1907'],
  },
  {
    slug: 'geboren-in-het-hospitaal',
    image:
      '/images/hackalod-2026/verhalen/05-geboren-in-het-hospitaal/01-jodenbreestraat.jpg',
    alt: 'De Jodenbreestraat in Paramaribo',
    eyebrow:
      'Familiegeschiedenis · China – Paramaribo – Commewijne · 1869–1950',
    title: (
      <>
        Geboren in het <em>hospitaal</em>
      </>
    ),
    subtitle: 'Het gezin van Sjiew-Oe-Joen en June-Tjauw Won-Ton-Tja',
    description:
      'Een Chinees-Surinaams gezin met zes kinderen, van wie er twee in het Militair Hospitaal werden geboren. In 1921 staat dochter Mathilde er als patiënt.',
    tags: ['Chinees-Surinaams', 'Commewijne', '1880–1950'],
  },
  {
    slug: 'de-naam-middelburg',
    image:
      '/images/hackalod-2026/verhalen/06-de-naam-middelburg/01-stadhuis-middelburg-1743.jpg',
    alt: 'Het stadhuis van Middelburg in 1743',
    eyebrow:
      'Familiegeschiedenis · Paramaribo – Batavia – Nickerie · 1827–1928',
    title: (
      <>
        De naam <em>Middelburg</em>
      </>
    ),
    subtitle: 'Annette, haar kinderen en een achternaam uit 1863',
    description:
      'Op 1 juli 1863 kregen Antje Johanna, Louis en Georgina de achternaam Middelburg. Hun moeder en grootmoeder Annette was naar de leprakolonie gestuurd, een broer naar Nickerie verkocht. Waarom Middelburg, zegt geen bron.',
    tags: ['Emancipatie 1863', 'Weidestraat', '1827–1928'],
  },
];

export const storyOverviewImageSizes: Record<string, [number, number]> = {
  'gekomen-gebleven': [1362, 530],
  'door-dezelfde-poort': [604, 408],
  'vrij-sinds-1836': [1280, 730],
  'klerk-marechaussee-boer': [1018, 632],
  'geboren-in-het-hospitaal': [1400, 839],
  'de-naam-middelburg': [1220, 950],
};
