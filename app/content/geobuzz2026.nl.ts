// Inhoud van de Geobuzz-presentatie (17 november 2026), gegenereerd uit
// presentatie-hackalod/geobuzz-2026-11-17-DEFINITIEF.pptx. Dia's staan als
// webp in public/images/geobuzz-2026/dias, bewegend beeld als stille mp4.

export const GEOBUZZ_BASE = '/images/geobuzz-2026';
export const GEOBUZZ_PDF =
  '/presentations/geobuzz-2026/geobuzz-2026-suriname-time-machine.pdf';

export type GeobuzzSlide = {
  title: string;
  /** Volledige tekst van de dia, voor schermlezers en zoekmachines. */
  text: string;
  /** Bewegend beeld op de plek waar het in de dia staat (fracties van breedte/hoogte). */
  video?: {
    src: string;
    left: number;
    top: number;
    width: number;
    height: number;
  };
};

export const geobuzz2026 = {
  path: '/output/geobuzz-2026',
  seo: {
    title: 'Samen kaarten lezen · Geobuzz 2026 | Suriname Time Machine',
    description:
      'De presentatie van Thunnis van Oort op Geobuzz 2026 (17 november): van Suriname Time Machine naar een citizen-sciencetool voor historische kaarten.',
  },
  eyebrow: 'Presentatie · Geobuzz 2026',
  title: 'Samen kaarten lezen',
  subtitle:
    'Van Suriname Time Machine naar een citizen-sciencetool voor historische kaarten',
  meta: 'Thunnis van Oort · Huygens Instituut · Geobuzz, 17 november 2026',
  lead: 'Op Geobuzz 2026 vertelde Thunnis van Oort hoe de Suriname Time Machine bronnen over Suriname via plaatsen verbindt, wat dat opleverde op HackaLOD 2026, en hoe de annotatietool re:charted vanaf 2027 samen met gebruikers een citizen-sciencetool wordt. Hieronder staan alle dia’s, met het bewegend beeld zoals het in de zaal te zien was.',
  download: 'Download de dia’s (pdf, 9 MB)',
  backToOutput: 'Terug naar Output',
  slides: [
    {
      title: 'Suriname Time Machine',
      text: 'Samen kaarten lezen Van Suriname Time Machine naar een citizen-sciencetool voor historische kaarten Thunnis van Oort · Huygens Instituut · Geobuzz, 17 november 2026 Kaart: Paramaribo, 1916',
    },
    {
      title:
        'Steeds meer erfgoed over Suriname is digitaal. Hoe benutten we dit optimaal?',
      text: "Digitaal beschikbaar, maar verspreid Registers en akten Nationaal Archief Suriname, Nationaal Archief Kaarten via IIIF UvA / Allard Pierson, UB Leiden, Nationaal Archief Foto's en beeldbanken Erfgoedinstellingen in Nederland en Suriname Verhalen en oral history Uit de gemeenschappen; o.a. STICHJI Suriname Time Machine: één portal Zoveel mogelijk data op één plek aanbieden En met elkaar verbinden: via plaatsen, personen, organisaties en bronnen Voor en met Surinaamse (diaspora) gemeenschappen Volgens de afspraken van het Netwerk Digitaal Erfgoed: open standaarden, IIIF en duurzame identifiers Time Machine: bestaand concept (d.a. Venetië, Amsterdam, Utrecht enz.)",
    },
    {
      title: 'Van HDSC naar Suriname Time Machine, 2020–2028',
      text: '2020–2024 HDSC Historische Database van Suriname en de Cariben (Radboud): de basis van STM STM 1 Verbonden digitaal erfgoed (Stichting Pica) feb 2026 Sranan Story Collective Citizen science met Surinaamse (diaspora) gemeenschappen (KNAW) mrt 2026 Mapathon Kaarten georefereren en annoteren met het publiek nov 2026 STM 2 Erfgoed en Migratie, tot april 2028 (Stichting Pica) Kaarttool Re:charted wordt een citizen-sciencetool mei 2028 Afronding Huidige projecten lopen af (SSC/KNAW tot mei 2028) Partners o.a.: Nationaal Archief Suriname (NAS), KB Nationale Bibliotheek, Stichting Surinaamse Genealogie (SSG), Nationaal Archief, UvA / Allard Pierson, UB Leiden, Radboud Universiteit, Allmaps, Wikimedia Nederland, STICHJI, Our HERitage, Anton de Kom Universiteit, Nationaal Instituut voor Geschiedenis en Cultuur (Suriname), Historische Database van Suriname en de Cariben (Radboud Universiteit).',
    },
    {
      title:
        'De Suriname Time Machine verbindt bronnen via vier kernentiteiten',
      text: "Plaatsen Plantages, straten, adressen, gebouwen en rivieren, met coördinaten en historische namen. Personen Persoonsvermeldingen uit registers en akten; elke vermelding blijft een eigen observatie. Organisaties Plantages als onderneming, overheidsinstellingen, kerken en scholen. Bronnen Registers, akten, almanakken, kaarten, foto's en oral history, met verwijzing naar het archief. Nu gekoppeld: slavenregisters en emancipatieregisters, wijkregisters van Paramaribo, Surinaamsche Almanakken, collectie Dikland (documentatie over plaatsen), beeldbank Rijksmuseum en Wikidata. Binnenkort: burgerlijke stand, volkstellingen 1921 en 1950, migratieregisters en de oral-historycollectie van STICHJI.",
    },
    {
      title: 'Plaats is de ruggengraat',
      text: 'Historische gazetteer Eén register van plaatsen met varianten van namen, door de tijd heen. Verrijkingen (vectorisaties) Plantages, (water)wegen, locatiepunten (adressen Paramaribo), divisies en districten, enz. Geogerefereerde kaarten Tientallen kaarten van Suriname via IIIF, gegeorefereerd via Allmaps. Paramaribo, 1916',
    },
    {
      title: 'Bronnenpublicaties: verrijkingen als open data',
      text: 'GIS plantages 1882 · Cateau van Rosevelt 1930 · Bakhuis & De Quant Plantages, (water)wegen, nederzettingen in Suriname als GIS-laag, op basis van de kaarten van 1882 en 1930. doi.org/10.34894/TE6FXN · CC BY 4.0 Locatiepunten Paramaribo 1885 · A.J. Meyer 1916–17 · Opnemingsdienst Locatiepunten van erven (adressen), met de straten van 1885 en 1916 en de wijkgrenzen. doi.org/10.34894/UNFLPK · CC BY 4.0',
    },
    {
      title: 'Demo: Suriname Time Machine',
      text: 'Let op: werk in uitvoering  nog geen publieksvriendelijke interface Scan en kijk mee',
    },
    {
      title: 'Sranan Story Collective: erfgoed samen met gemeenschappen',
      text: '“Jouw verhaal hoort erbij.” Het Sranan Story Collective is het citizen-science-onderdeel van STM, aan het Huygens Instituut met steun van de KNAW. Community builders bouwen relaties op met (diaspora)gemeenschappen en organisaties. Deel je kennis Familieverhalen, beelden, plekken en herinneringen. Denk mee Over het gebruik van bronnen en de vragen die ze oproepen. Ontmoet elkaar Bijeenkomsten, workshops en mapathons. Waarom kaarten lezen met gemeenschappen? Kennis van plaatsen, namen en verhalen die niet in de archieven staat Zeggenschap over het eigen koloniale erfgoed Meedoen geeft groepsgevoel Gebruikers bepalen mee hoe de tool wordt, vanaf het begin Alle resultaten zijn openbaar en voor iedereen beschikbaar srananstorycollective.com',
    },
    {
      title:
        'Kom naar de lancering van het Sranan Story Collective, 29 november 2026',
      text: 'Zondag 29 november 2026, Zandkasteel, Amsterdam-Zuidoost. Aanmelden via srananstorycollective.com.',
    },
    {
      title: 'Deel 2',
      text: 'Wat koppelen via plaatsen oplevert Een voorbeeld uit HackaLOD 2026: “I Was Here”, werkend prototype gebouwd in 24 uur. Winnaar van de juryprijs Uitreiking Juryprijs HackaLOD 2026, Nieuwe Kerk Middelburg (31 oktober 2026)',
    },
    {
      title:
        'Het Militair Hospitaal in Paramaribo (Julius Eduard Muller, 1898–1902, Rijksmuseum)',
      text: '',
    },
    {
      title: '‘I was here’ geprojecteerd op de namenmuur op een locatie',
      text: 'Elke plek op de kaart heeft zijn eigen muur met de namen van iedereen die er in de archieven voorkomt, met het jaar waarin ze er waren. Ons startpunt: ‘s Lands Hospitaal in Paramaribo',
    },
    {
      title: 'Een familie uit de migratieregisters op de kaart',
      text: 'Van de namenmuur naar een familienetwerk, en van daar naar de plaatsen waar ze woonden en werkten.',
      video: {
        src: `${GEOBUZZ_BASE}/clip-familie.mp4`,
        left: 0.1025,
        top: 0.1933,
        width: 0.795,
        height: 0.6713,
      },
    },
    {
      title: 'Eén plek, tienduizenden mensen',
      text: 'Vanaf een verhaal inzoomen op ’s Lands Hospitaal aan de Gravenstraat: 88.127 persoonsvermeldingen op één adres',
      video: {
        src: `${GEOBUZZ_BASE}/clip-namenmuur.mp4`,
        left: 0.1025,
        top: 0.1937,
        width: 0.795,
        height: 0.6713,
      },
    },
    {
      title: 'Je eigen verhaal toevoegen, met je telefoon',
      text: 'Scan de QR-code bij een naam Op de namenmuur of in de kaart. Geen app store, geen account. Vertel wat je weet Je spreekt in; er loopt een live transcript mee. AI doet voorstellen Personen, plaatsen, datums, gebouwen, beroepen en relaties. Jij beslist Je bevestigt of verbetert. De AI beslist nooit zelf. Direct zichtbaar in de projectie Wijzigingen verschijnen live op de namenmuur, met bronvermelding. Demo: youtube.com/watch?v=29jwLlPVJ84',
      video: {
        src: `${GEOBUZZ_BASE}/clip-webapp.mp4`,
        left: 0.0475,
        top: 0.1936,
        width: 0.2713,
        height: 0.643,
      },
    },
    {
      title: 'Deel 3',
      text: 'Van mapathon naar re:charted Wat we leerden toen we het publiek uitnodigden om kaarten te lezen',
    },
    {
      title:
        'Mapathon, 9 maart 2026: kaarten als bron voor Surinaamse geschiedenis',
      text: 'Mapathon in het Bushuis, Amsterdam, met kaarten van de universiteitsbibliotheken van Amsterdam en Leiden (ca. 80 deelnemers) Georefereren Kaarten op moderne coördinaten leggen in Allmaps. Wikidata verrijken Plantages en erfgoedlocaties aanvullen, met Wiki Goes Caribbean. Annoteren Namen en details op kaartbeelden vastleggen in re:charted.',
    },
    {
      title: 'Re:charted: annoteren op het kaartbeeld',
      text: 'Kaarten van Suriname verkennen en annoteren in re:charted (necessaryreunions.org/viewer?project=suriname) Annotaties en transcripties direct op de kaart 293 kaarten via één IIIF-manifest Opslag in AnnoRepo, volgens W3C Web Annotation Werkt samen met Allmaps Gebouwd in Necessary Reunions (NWO) door Jona Schlegel en Leon van Wissen',
      video: {
        src: `${GEOBUZZ_BASE}/clip-recharted.mp4`,
        left: 0.0252,
        top: 0.1968,
        width: 0.5898,
        height: 0.5284,
      },
    },
    {
      title: 'Een onderzoekerstool, nog geen publiekstool',
      text: 'Veel gebruikers tegelijk De tool is niet gebouwd op tientallen mensen die tegelijk werken. Snelheid Grote kaartbeelden laden soms traag. Complexe taken Taken zijn niet op te knippen in kleine, haalbare stappen. Lokale kennis Deelnemers die de geografie van Suriname kennen, moeten die kennis makkelijk kunnen inbrengen.',
    },
    {
      title: 'Deel 4',
      text: 'Een citizen-sciencetool voor IIIF-kaarten Wat we in 2027 bouwen, hoe we dat doen, en waar we hulp bij zoeken',
    },
    {
      title: 'Generiek, zodat elke IIIF-kaartcollectie het kan gebruiken',
      text: 'We bouwen re:charted uit tot een open tool waarmee iedereen historische kaarten kan annoteren. Eerst voor Suriname, daarna voor elke collectie die kaarten via IIIF aanbiedt. Binnen de Citizen Science Incubator van de KNAW (Huygens PACT), met het Sranan Story Collective. Onze kaartbronnen, en daarna andere Allard Pierson / UB Amsterdam Universitaire Bibliotheken Leiden Nationaal Archief en elke andere IIIF-collectie',
    },
    {
      title: 'Iteratief bouwen, met gebruikers vanaf de eerste dag',
      text: 'Ontwerpen Taken opknippen in kleine stappen Testen Met de community: deelnemers die Suriname en zijn plaatsen kennen Verbeteren Interface en snelheid, op basis van hun input Openstellen Voor andere IIIF-collecties Open standaarden en aansluiting IIIF W3C Web Annotation AnnoRepo (CLARIAH) NDE-annotatiepilot Loghi (tekstherkenning) Planning: start januari 2027 · testrondes en mapathons in de loop van 2027 · tool klaar eind 2027',
    },
    {
      title: 'Wie we in 2027 zoeken',
      text: 'Kenners van Suriname Deelnemers met een Surinaamse achtergrond die Paramaribo en de plaatsen in Suriname kennen. Geo-enthousiastelingen Mensen die graag met kaarten, georefereren en plaatsnamen werken. Testers Meedoen aan testrondes en mapathons, en zeggen wat beter kan. Doe mee Zet je naam en e-mailadres op de lijst die rondgaat. We nemen in 2027 contact op.',
    },
    {
      title: 'Lees mee',
      text: 'surinametijdmachine.org/participatie necessaryreunions.org/viewer?project=suriname thunnis.van.oort@huygens.knaw.nl Een project van Gefinancierd door',
    },
  ] satisfies GeobuzzSlide[],
};
