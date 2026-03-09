import type { CitizenScienceContent } from './types';

export const citizenScienceNl: CitizenScienceContent = {
  locale: 'nl',
  seo: {
    title: 'Participatie | Suriname Tijdmachine',
    description:
      'Doe mee aan workshops en evenementen van de Suriname Tijdmachine — georefereer historische kaarten, verrijk Wikidata en annoteer archiefbronnen samen.',
    openGraphLocale: 'nl_NL',
  },
  ui: {
    navigation: {
      locationLabel: 'Participatie',
      projectCode: 'STM',
      projectSubtitle: 'Participatie',
      languageToggleLabel: 'EN',
      backToHome: 'Back to Home',
    },
    hero: {
      tagline: 'Suriname Tijdmachine',
      title: 'Participatie & Evenementen',
      lead: 'Draag bij aan historisch onderzoek via hands-on workshops, mapathons en gezamenlijke datasessies. Iedereen kan helpen het verleden te ontsluiten.',
    },
    sections: {
      partners: 'Deelnemende organisaties',
      workshops: 'Workshoptafels',
    },
    footer: {
      coordinatorLine: 'Projectcoördinator',
      organizationLabel: 'Huygens Instituut',
    },
  },
  events: [
    {
      id: 'mapathon-2026-03',
      event: {
        title: 'Mapathon: Kaarten als bron voor Surinaamse geschiedenis',
        description:
          'De universiteitsbibliotheken van Amsterdam en Leiden hebben rijke collecties Surinaamse historische kaarten. Daarop staan waardevolle gegevens over bijvoorbeeld plantages, rivieren, straten en gebouwen. Tijdens deze Mapathon willen we die informatie digitaal vastleggen. Zo leggen we een basis waar we in de nabije toekomst allerlei andere informatie aan kunnen koppelen, zoals afbeeldingen of gedigitaliseerde documenten over de mensen die daar leefden. Er zijn verschillende activiteiten, geschikt voor zowel beginners als ervaren tech-geeks. Wij zorgen voor koffie, thee en een drankje bij de afsluitende borrel. Jij hoeft alleen je laptop mee te nemen.',
        date: '9 maart 2026',
        isoDate: '2026-03-09',
        time: '13:00 – 18:00',
        location:
          'Bushuis / Oost-Indisch Huis, Kloveniersburgwal 48, Amsterdam',
        locationHref:
          'https://amsterdamhumanitieshub.nl/shared/locaties/nl/binnenstad/bushuis.html',
        externalEventHref:
          'https://amsterdamhumanitieshub.nl/gedeelde-content/evenementen/2026/03/mapathon-surinaamse-geschiedenis.html',
        externalEventLabel: 'Evenementpagina bij Amsterdam Humanities Hub',
      },
      partners: [
        {
          id: 'suriname-tijdmachine',
          name: 'Suriname Tijdmachine',
          href: 'https://www.huygens.knaw.nl/projecten/suriname-tijdmachine/',
        },
        {
          id: 'huygens',
          name: 'Huygens Instituut / Stichting Pica',
          href: 'https://www.huygens.knaw.nl/',
          logo: '/images/partners/huygens.png',
        },
        {
          id: 'allard-pierson',
          name: 'Allard Pierson / Universiteitsbibliotheek Amsterdam',
          href: 'https://allardpierson.nl/',
          logo: '/images/partners/allard-pierson.svg',
          darkBg: true,
        },
        {
          id: 'ub-leiden',
          name: 'Universiteitsbibliotheek Leiden',
          href: 'https://www.library.universiteitleiden.nl/',
          logo: '/images/partners/ub-leiden.png',
        },
        {
          id: 'allmaps',
          name: 'Allmaps / TU Delft',
          href: 'https://allmaps.org/',
          logo: '/images/partners/allmaps.svg',
        },
        {
          id: 'wikimedia-nl',
          name: 'Wikimedia Nederland',
          href: 'https://www.wikimedia.nl/',
          logo: '/images/partners/wikimedia-nl.png',
        },
        {
          id: 'hdsc',
          name: 'Historische Database van Suriname en de Cariben',
          href: 'http://www.hdsc.ning.com/',
          logo: '/images/partners/hdsc.png',
        },
        {
          id: 'create-uva',
          name: 'CREATE / Humanities Labs, UvA',
          href: 'https://aihr.uva.nl/humanities-labs/humanities-labs.html',
          logo: '/images/partners/create-uva.png',
        },
      ],
      workshops: [
        {
          id: 'georeferencing',
          title: 'Georefereren',
          description:
            'Help historische kaarten van Suriname op moderne coördinaten te plaatsen met Allmaps. Door archiefkaarten te georefereren worden ze doorzoekbaar en vergelijkbaar met hedendaagse satellietbeelden.',
          links: [
            {
              label: 'Allmaps Editor',
              href: 'https://editor.allmaps.org/images?url=https%3A%2F%2Fsurinametijdmachine.org%2Fiiif%2Fmapathon%2Fcollection.json',
              description: 'Open geselecteerde kaarten in Allmaps Editor',
            },
            {
              label: 'Kaart van Suriname (1930)',
              href: 'https://surinametijdmachine.org/iiif/mapathon/kaart-van-suriname-1930.json',
              description:
                'Georeferentie Annotatie van de Kaart van Suriname (1930)',
              copyable: true,
            },
            {
              label: 'Allmaps Explore',
              href: 'https://dev.explore.allmaps.org/#7.06/5.352/-54.974',
              description: 'Open Allmaps Explore',
            },
            {
              label: 'Kaartenlijst (Google Sheet)',
              href: 'https://docs.google.com/spreadsheets/d/1EmZpAuGE-UbB5z9CHYv_eZ7JBNzfGxdW2u9cUOa-QAw/edit?usp=sharing',
              description:
                'Spreadsheet met alle beschikbare kaarten om te georefereren',
            },
            {
              label: 'Allmaps Tutorial (Google Doc)',
              href: 'https://docs.google.com/document/d/1FbgURG-H2uPdrc4qYX4c7x9aGeBwIpHhehlYlkfYcNA/edit?usp=sharing',
              description:
                'Tutorial voor het georefereren van kaarten met Allmaps (deels verouderd ivm veranderingen in de interface!)',
            },
            {
              label: 'IIIF Manifest',
              href: 'https://surinametimemachine.github.io/iiif-suriname/manifest.json',
              description: 'IIIF-manifest met alle gedigitaliseerde kaarten',
              copyable: true,
            },
          ],
        },
        {
          id: 'wikidata',
          title: 'Wikidata / Wikimedia / Wikipedia',
          description:
            "Verbeter de historisch-geografische informatie over Suriname op Wikidata, in het kader van het Wiki goes Caribbean-initiatief. Voeg ontbrekende gegevens, foto's en gestructureerde kennis over erfgoedlocaties toe.",
          links: [
            {
              label: 'WikiProject Plantations in Suriname',
              href: 'https://www.wikidata.org/wiki/Wikidata:WikiProject_Plantations_in_Suriname/Todo#s',
              description:
                'Lijst van Wikidata-items over Surinaamse plantages die nog informatie nodig hebben',
            },
            {
              label: 'WikiShootMe — Suriname',
              href: 'https://wikishootme.toolforge.org/#lat=5.607704545696418&lng=-55.802306961268194&zoom=9&layers=wikidata_image,wikidata_no_image&sparql_filter=%3Fq%20wdt%3AP31%20wd%3AQ188913%3B%20wdt%3AP17%20wd%3AQ7646305%3B%20wdt%3AP625%20%3Flocation.&worldwide=1',
              description:
                'Kaart met Wikidata-items in Suriname — vind locaties die nog een foto nodig hebben',
            },
            {
              label: 'Suriname Heritage Guide',
              href: 'https://www.suriname-heritage-guide.com/',
              description:
                'Naslagwerk over culturele erfgoedlocaties in Suriname',
            },
            {
              label: '3D Warehouse — Suriname Heritage',
              href: 'https://3dwarehouse.sketchup.com/collection/u75b64c27-da53-437b-a355-49f486deb677/Suriname-heritage',
              description: '3D-modellen van Surinaams erfgoed',
            },
          ],
        },
        {
          id: 'map-annotation',
          title: 'Kaartannotatie',
          description:
            'Annoteer historische kaarten met re:Charted — een tool waarmee je gestructureerde notities en transcripties direct op kaartafbeeldingen kunt plaatsen. Jouw annotaties helpen handgeschreven kaartdetails machineleesbaar en doorzoekbaar te maken.',
          links: [
            {
              label: 'liiive Suriname kaartannotatie alternatief',
              href: 'https://edu.nl/h8veg',
              description: 'Plan B - kaartannotatie-omgeving voor Suriname',
            },
            {
              label: 're:Charted — Suriname Project',
              href: 'https://necessaryreunions.org/viewer?project=suriname&canvas=c1',
              description: 'Open de re:Charted annotatieviewer voor Suriname',
            },
            {
              label: 're:Charted Documentation (EN)',
              href: 'https://necessaryreunions.org/documentation',
              description: 'Handleiding voor re:Charted — Engelse versie',
            },
            {
              label: 're:Charted Documentatie (NL)',
              href: '/documentatie/recharted',
              description: 'Handleiding voor re:Charted — Nederlandse versie',
            },
            {
              label: 'IIIF Manifest (voor andere viewers)',
              href: 'https://surinametimemachine.github.io/iiif-suriname/manifest.json',
              description:
                'Gebruik het manifest met Mirador, Theseus Viewer, IIIF Live, Universal Viewer of andere IIIF-compatibele tools',
              copyable: true,
            },
            {
              label: 'ORCID voor annotatie-toekenning',
              href: 'https://docs.google.com/spreadsheets/d/1SPGA--E5eslwkssQfhgH9JHP4zipg3vM8Oe1bY1nQhI/edit?usp=sharing',
              description:
                'Voeg je ORCID toe aan het Excel-blad om toegang te krijgen tot re:Charted voor Surinaamse kaarten.',
            },
            {
              label: 'Dashboard met live annotatiestatistieken',
              href: '/dashboard',
              description:
                'Bekijk real-time statistieken van annotaties op Surinaamse kaarten',
            },
          ],
        },
      ],
    },
  ],
};
