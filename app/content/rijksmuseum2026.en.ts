import type { PresentationContent } from './presentationTypes';

export const rijksmuseum2026Content: PresentationContent = {
  locale: 'en',
  seo: {
    title:
      'The Suriname Time Machine: Mapping Visual Heritage, Rijksmuseum 2&3D Photography 2026',
    description:
      'Conference talk by Thunnis van Oort & Jona Schlegel (Huygens Institute) at the Rijksmuseum 2&3D Photography symposium, 20 May 2026. Geographical mapping of colonial-era Rijksmuseum imagery linked to the Suriname Time Machine gazetteer.',
    openGraphLocale: 'en_GB',
  },
  meta: {
    conference: 'Rijksmuseum 2&3D Photography 2026',
    conferenceUrl:
      'https://www.rijksmuseum.nl/en/whats-on/lectures-symposiums/2and3d-photography',
    date: '20 May 2026',
    location: 'Rijksmuseum, Amsterdam',
    presenters: ['Thunnis van Oort', 'Jona Schlegel'],
    institution: 'Huygens Institute',
    slug: 'rijksmuseum-2026',
  },
  ui: {
    nextSlide: 'Next slide',
    previousSlide: 'Previous slide',
    slideOf: 'of',
    speakerNotesTitle: 'Speaker notes',
    speakerNotesHint: 'Press S to toggle',
    helpTitle: 'Keyboard shortcuts',
    offlineFallback:
      'Offline preview, open the live project at the URL above when online.',
    loading: 'Loading…',
  },
  slides: [
    // ── Act I · Framing ─────────────────────────────────────────────────
    {
      id: 'title',
      layout: 'title',
      background: 'hero',
      eyebrow: 'Rijksmuseum · 2&3D Photography · 20 May 2026',
      title: 'The Suriname Time Machine',
      subtitle: 'Mapping Visual Heritage',
      body: [
        'Thunnis van Oort & Jona Schlegel, Huygens Institute',
        'Session P03 · Rijksmuseum Amsterdam',
      ],
      notes: [
        'Welcome. We are Thunnis and Jona from Huygens Institute.',
        'In the next 20 minutes we will walk through how the Suriname Time Machine turns the Rijksmuseum’s colonial-era imagery into a geographically-linked, explorable infrastructure.',
        'Three things to listen for: (1) what we did with the data, (2) what the spatial picture reveals, (3) what is still missing and how communities help us fill that.',
      ],
    },
    {
      id: 'what-is-stm',
      layout: 'split',
      eyebrow: 'Act I · Framing',
      title: 'What is the Suriname Time Machine?',
      subtitle:
        'Technical infrastructure built on the Historical Database of Suriname & the Caribbean (HDSC).',
      body: [
        'The [Suriname Time Machine](https://surinametijdmachine.org) (STM) connects maps, registers and historical images into a Linked Open Data architecture, so that ordinary people in colonial Suriname can be followed across the sources that name them.',
        'STM builds on [HDSC](https://surinametijdmachine.org), the community-funded Historical Database that opened up the slave registers and civil records (1830–1950).',
      ],
      bullets: [
        'HDSC: slave registers + civil records, open access',
        'STM: gazetteer + Linked Open Data graph on top',
        'Maps + registers + images, all linked',
        'Co-designed with Surinamese-diaspora communities',
      ],
      notes: [
        'Be clear about the relationship: HDSC is the data; STM is the architecture that links it spatially and to other sources.',
        'HDSC was crowdfunded and demand-driven, anchored in genealogy and family history.',
      ],
    },
    {
      id: 'time-machine-brand',
      layout: 'two-col',
      eyebrow: 'Act I · Framing',
      title: 'The Time Machine brand',
      subtitle:
        'A network of city- and region-scale historical infrastructures.',
      body: [
        'STM joins a growing federation: [Venice Time Machine](https://www.timemachine.eu/local-time-machines/), [Amsterdam Time Machine](https://www.amsterdamtimemachine.nl/), [Gouda Tijdmachine](https://www.goudatijdmachine.nl/), and many more.',
        'Each one builds local gazetteers and visualisations from its own archives, together forming a European-scale linked heritage commons.',
      ],
      component: 'timeMachineBrandMap',
      notes: [
        'Briefly name-drop other Time Machines.',
        'The point: this is a shared methodology, not an isolated experiment. We can compare approaches across cities.',
      ],
    },
    {
      id: 'stm-foundations',
      layout: 'split',
      eyebrow: 'Act I · Framing',
      title: 'STM’s foundations',
      subtitle: 'A gazetteer + a place-data model that other sources can plug into.',
      body: [
        'STM’s data model is anchored on **historic maps, almanak registers, plantations, and the network of roads, creeks and rivers** of colonial Suriname.',
        'See it live: [suriname-database-model.vercel.app](https://suriname-database-model.vercel.app/).',
      ],
      bullets: [
        'Historic maps, georeferenced via Allmaps',
        'Almanakken and registers, transcribed and linked',
        'Plantations as anchor entities',
        'Open and reusable; published alongside the source code',
      ],
      notes: [
        'Plantations are the anchor entity: they appear in almanakken, civil registers, slave registers, and on the maps. They are the glue that links Rijksmuseum images to people.',
        'Avoid quoting precise counts on the slide unless verified live, the model is actively growing.',
      ],
    },

    // ── Act II · The Rijksmuseum dataset ───────────────────────────────
    {
      id: 'rijks-dataset-intro',
      layout: 'split',
      eyebrow: 'Act II · The Rijksmuseum dataset',
      title: 'What the Rijksmuseum gave us',
      subtitle:
        'Public-domain visual heritage of Suriname, already IIIF-ready.',
      body: [
        'The [Rijksmuseum online collection](https://www.rijksmuseum.nl/en/collection) holds an extensive body of Suriname-related imagery. Most works are released under a **public domain mark** and ship with a [IIIF manifest](https://iiif.io/), so we can zoom, reuse and redistribute.',
        'Our working snapshot of the [Suriname slice](https://github.com/SurinameTimeMachine/rijksmuseum-suriname-collection) currently contains **3,668 objects**.',
      ],
      bullets: [
        '3,668 Suriname-related works',
        '2,912 with IIIF thumbnails (79%)',
        'Photographs dominate (foto, stereofoto, prentbriefkaart…)',
        'Date span: late-18th c. → mid-20th c.',
      ],
      notes: [
        'Numbers come from the live build script (scripts/build-rijksmuseum-2026-data.mjs) reading the working collection.json snapshot.',
        'Emphasise that IIIF + public domain is what makes the rest possible.',
      ],
    },
    {
      id: 'metadata-gaps',
      layout: 'split',
      eyebrow: 'Act II · The Rijksmuseum dataset',
      title: 'State of the data',
      subtitle:
        'Titles and dates are nearly complete. Linked places used to be the gap, then we worked on it.',
      body: [
        'Coverage measured across all 3,668 records in the working snapshot. After the curation work, **90.5% of objects are now map-ready** (at least one geo-keyword with coordinates).',
        'Wikidata / Getty links are attached to **88% / 86%** of geo-keyword occurrences.',
      ],
      component: 'metadataGapsChart',
      notes: [
        'Walk the bars: title → date → creator → thumbnail → place keyword → place → coords → wikidata.',
        'Point out: persons depicted = 52%, subject keywords = 4%. There is still huge headroom for content-level enrichment.',
      ],
    },
    {
      id: 'what-we-did',
      layout: 'text',
      eyebrow: 'Act II · The Rijksmuseum dataset',
      title: 'What we did to the data',
      subtitle: 'A hybrid pipeline: scripts first, humans second.',
      bullets: [
        '1 · Fetch every Suriname work via the Rijksmuseum API + IIIF (3,668 records)',
        '2 · Normalise metadata; extract candidate place strings from titles and keywords',
        '3 · Disambiguate against the STM gazetteer, Wikidata and Getty TGN',
        '4 · Manual verification in data sprints with Wikimedia Nederland and partner libraries',
        '5 · Publish enriched, provenance-tracked links back to Wikidata',
      ],
      notes: [
        'The pipeline is documented at github.com/SurinameTimeMachine/rijksmuseum-suriname-collection.',
        'Stress the *manual* sprint step. Scripted disambiguation gets us most of the way, but it is not sufficient for colonial place names that repeat across regions.',
      ],
    },

    // ── Act III · Live exploration ─────────────────────────────────────
    {
      id: 'demo-collection',
      layout: 'full-media',
      eyebrow: 'Act III · Live exploration',
      title: 'A sample of the collection',
      subtitle: 'One row per decade, sampled from the place-enriched corpus.',
      component: 'featuredGrid',
      componentProps: { max: 24 },
      notes: [
        'Tiles are real Rijksmuseum thumbnails from the working dataset, each is linked to a Suriname place + a year.',
        'Point out the visible shift from drawings/lithographs (early decades) to studio + documentary photographs (later decades).',
        'If online, click a tile to open the Rijksmuseum PID page.',
      ],
    },
    {
      id: 'demo-gazetteer',
      layout: 'split',
      eyebrow: 'Act III · Live exploration',
      title: 'Where the place names cluster',
      subtitle:
        'Top Suriname-region matched place names in the working dataset.',
      body: [
        'Once free-text strings are reconciled to the STM gazetteer + Wikidata, a clear topography emerges: a coastal photographic corridor from Paramaribo eastward, the bauxite town of Moengo, and a constellation of named plantations.',
        '*Surinam* is the catch-all label assigned when no narrower place was identified, a useful tally of records still in need of disambiguation.',
      ],
      component: 'topPlacesChart',
      notes: [
        'Paramaribo is the obvious centre; Moengo (~395 records) is striking, the Suralco bauxite-mining industrial photography archive.',
        'Almost every plantation that appears was a former sugar / coffee estate along the Commewijne / Suriname rivers.',
      ],
    },
    {
      id: 'medium-shift',
      layout: 'full-media',
      eyebrow: 'Act III · Live exploration',
      title: 'A medium-shift, decade by decade',
      subtitle:
        'Drawings and prints give way to photographs from the 1860s onward.',
      component: 'mediumOverTime',
      componentProps: { from: 1820, to: 1970 },
      notes: [
        'The wedge of teal-strong (photographs) takes over from the 1860s and dominates by the 1880s.',
        'This is *not* news historically, but it lets us pose the question: did the geography of what was photographed change, or just the medium? (Spoiler: see the next slide.)',
      ],
    },
    {
      id: 'geo-coverage',
      layout: 'full-media',
      eyebrow: 'Act III · Live exploration',
      title: 'Where the lens was pointed',
      subtitle:
        'Hex-bin density of real image locations · stroke encodes positional uncertainty.',
      body: [
        'Fill = density on a log scale. Dashed stroke = mean positional uncertainty (street-level → regional).',
        'Three patterns jump off the 1930 map:',
      ],
      bullets: [
        'A **coastal corridor** from Paramaribo east along the Commewijne plantation belt to Moengo, one continuous teal ribbon following rivers, road and rail.',
        'A **near-empty interior**, the southern two-thirds of the country is blank, even after our enrichment.',
        '**Moengo as an outlier**, an isolated hot cell far east of the capital: the Suralco bauxite archive accidentally captured a 20th-century landscape the older drawing tradition never reached.',
      ],
      component: 'hexHeatmap',
      notes: [
        'Read the map: the corridor is *infrastructural*, capital, not country.',
        'The blankness in the south is an argument, not a flaw: it is the brief for the citizen-science project and for partnerships with Maroon and indigenous archives.',
      ],
    },
    {
      id: 'paramaribo-zoom',
      layout: 'full-media',
      eyebrow: 'Act III · Live exploration',
      title: 'Zooming in · Paramaribo street by street',
      subtitle:
        'Same data, tighter frame, on a historical street map of the capital.',
      body: [
        'At country scale "Paramaribo" is a single hot cell. Zoomed to the city it collapses onto a handful of streets:',
      ],
      bullets: [
        'Waterkant, Gouvernementsplein, the streets around the Palmentuin, Combé, the colonial administrative and wealthier residential core.',
        'Working-class quarters and the markets that *existed* in 1900 are barely represented.',
        'Whose Paramaribo got photographed? A question the hex bins make impossible to dodge.',
      ],
      component: 'hexHeatmap',
      componentProps: { focus: 'paramaribo', hexRadius: 16 },
      notes: [
        'Most "Paramaribo" records collapse onto the same ten famous streets.',
        'Pair this with the critique slides, the city-scale empty bins are a research and acquisition brief.',
      ],
    },
    {
      id: 'temporal',
      layout: 'full-media',
      eyebrow: 'Act III · Live exploration',
      title: 'When the lens was open',
      subtitle: 'Filter the same real points by year.',
      component: 'timeSlider',
      componentProps: { yearStart: 1840, yearEnd: 1970 },
      notes: [
        'Drag the slider. Pre-1870 = a thin scatter of drawings and prints. Post-1880 = the photographic boom.',
        'The geographical footprint barely changes. The photographic boom *intensifies* the existing corridor; it does not broaden it.',
      ],
    },
    {
      id: 'reading-the-map',
      layout: 'text',
      background: 'cream',
      eyebrow: 'Act III · Synthesis',
      title: 'Reading the map · five stories the patterns tell',
      subtitle: 'What the hex bins say before we add a single new image.',
      bullets: [
        '**Capital follows capital.** The dense corridor traces colonial infrastructure (river → road → bauxite rail), not the country itself.',
        '**Medium changed, geography did not.** The photographic boom from c. 1880 *intensifies* the same corridor rather than expanding it.',
        '**Ten famous streets.** "Paramaribo" at street scale is a handful of administrative and wealthier blocks. Entire neighbourhoods stay invisible.',
        '**Plantation-name half-life.** Lower-Commewijne bins thin out in the 20th c. not because the places vanished, but because their names were renamed, abandoned or absorbed, a slow toponymic erasure visible on the map.',
        '**Uncertainty as a citizen-science prompt.** Hexes with dashed strokes (mean uncertainty > 5 km) are exactly where community geotagging would move the needle most.',
      ],
      notes: [
        'This is the slide where we move from *describing* the dataset to *arguing* with it. Five sentences, five questions for the curators.',
        'It also sets up Act IV: each pattern points to a critique (whose gaze) and a programme (the upcoming citizen-science project).',
      ],
    },

    // ── Act IV · Critique & outlook ────────────────────────────────────
    {
      id: 'critique-where',
      layout: 'split',
      background: 'cream',
      eyebrow: 'Act IV · Critique',
      title: 'Critique 1 · Where the lens did *not* look',
      subtitle:
        'The empty halves of the map are a brief for future collecting.',
      body: [
        'A spatial reading turns absence into a research question: which regions, which communities, which kinds of place are systematically un-imaged?',
        'The Rijksmuseum can read these gaps as **acquisition priorities**, and as conversation starters with archives elsewhere (Suriname, the UK, France).',
      ],
      bullets: [
        'Interior / Maroon villages: almost no coverage',
        'Indigenous territories: near-total absence',
        'Religious life outside the Moravian mission: under-documented',
        'Domestic interiors of enslaved and freed people: invisible',
      ],
      notes: [
        'Frame this as constructive, not accusatory.',
        'The Rijksmuseum is already aware. Our contribution is making the absences *visible and addressable*.',
      ],
    },
    {
      id: 'critique-whose',
      layout: 'split',
      background: 'cream',
      eyebrow: 'Act IV · Critique',
      title: 'Critique 2 · Whose gaze, whose medium',
      subtitle: 'A visual archive made by a narrow slice of colonial society.',
      body: [
        'Nearly every photograph and print we have was made **by, for, and about** wealthy white Dutch men in Suriname.',
        'The voices that are missing, Surinamese, indigenous, enslaved and formerly enslaved, left their record in different media: oral history, song, material culture, the landscape itself.',
        'Our infrastructure has to make space for those media too.',
      ],
      notes: [
        'This is the pivot to the citizen-science project and the outlook.',
        'Be explicit: the Rijksmuseum collection is a *partial* archive. Treating it as comprehensive reproduces the colonial gaze.',
      ],
    },
    {
      id: 'sranan-story',
      layout: 'split',
      eyebrow: 'Act IV · Outlook',
      title: 'A citizen-science project on Surinamese heritage',
      subtitle:
        'KNAW-funded, Nov 2025 – Jun 2028. Co-designed with community builders before scope is fixed.',
      body: [
        'The Huygens Institute team is starting a citizen-science project that uses STM’s data as **input**, not as a finished product. Scope, outputs and audiences are co-designed with Surinamese community builders and an Advisory Board (currently being established).',
        'The aim is to escape the "consultation trap": feedback on a finished product is not co-creation. So co-design happens now, before objectives are fixed.',
      ],
      bullets: [
        'Three Community Builder roles: fundraising, coordination, events',
        'Advisory Board with Surinamese organisations',
        'Research team at Huygens Institute (KNAW)',
        'Built on HDSC + STM, but scope is open',
      ],
      notes: [
        '"Co-creation" here is not a buzzword: community builders shape what counts as a relevant question, not just what gets transcribed.',
        'Be careful not to over-claim. The Advisory Board is being established, not yet active.',
      ],
    },
    {
      id: 'partners',
      layout: 'text',
      background: 'cream',
      eyebrow: 'Act IV · Outlook',
      title: 'Partners and funders',
      subtitle:
        'This work is only possible because of a network of institutional and community partners.',
      component: 'partnersGrid',
      componentProps: {
        partners: [
          {
            name: 'Huygens Institute (KNAW)',
            logo: '/images/partners/huygens.png',
            href: 'https://www.huygens.knaw.nl/',
            role: 'Research host',
          },
          {
            name: 'HDSC',
            logo: '/images/partners/hdsc.png',
            href: 'https://surinametijdmachine.org',
            role: 'Historical Database of Suriname & the Caribbean',
          },
          {
            name: 'Wikimedia Nederland',
            logo: '/images/partners/wikimedia-nl.png',
            href: 'https://wikimedia.nl/',
            role: 'Wikidata reconciliation',
          },
          {
            name: 'Allmaps',
            logo: '/images/partners/allmaps.svg',
            href: 'https://allmaps.org/',
            role: 'Map georeferencing',
          },
          {
            name: 'Allard Pierson',
            logo: '/images/partners/allard-pierson.svg',
            href: 'https://allardpierson.nl/',
            role: 'Map collections',
          },
          {
            name: 'UB Leiden',
            logo: '/images/partners/ub-leiden.png',
            href: 'https://www.library.universiteitleiden.nl/',
            role: 'Map collections',
          },
          {
            name: 'CREATE · UvA',
            logo: '/images/partners/create-uva.png',
            href: 'https://www.create.humanities.uva.nl/',
            role: 'Digital humanities',
          },
          {
            name: 'Stichting Pica',
            logo: '/images/partners/stichting-pica.svg',
            href: 'https://stichtingpica.nl/',
            role: 'Funder',
          },
        ],
      },
      notes: [
        'Acknowledge specifically: HDSC for the underlying data; the libraries for the historical maps; Allmaps for georeferencing; Wikimedia NL for reconciliation help; Stichting Pica for funding parts of this work.',
        'The Rijksmuseum is the host today, name it warmly.',
      ],
    },
    {
      id: 'going-back',
      layout: 'text',
      eyebrow: 'Act IV · Outlook',
      title: 'Going back to the community',
      subtitle: 'What success looks like',
      bullets: [
        'A community member opens an image of the plantation their family came from',
        '… sees the gazetteer entry alongside it: dates, neighbours, surrounding creeks',
        '… records a story, in their own language, about a relative or a place name',
        '… and that story becomes part of the linked record, citable, durable, theirs',
        'Repeat across collectives, regions, and generations',
      ],
      notes: [
        'Land the emotional close. This is the *point* of the infrastructure.',
        'Acknowledge that we are early, this is a roadmap, not a completed programme.',
      ],
    },
    {
      id: 'thanks-qr',
      layout: 'qr',
      background: 'deep',
      eyebrow: 'Thank you',
      title: 'Explore the projects',
      subtitle: 'Scan to open · or visit the URLs below.',
      component: 'qrCodes',
      componentProps: {
        targets: [
          {
            label: 'Rijksmuseum × Suriname',
            url: 'https://rijksmuseum-suriname-collection.vercel.app/',
            description: 'Place-enriched image collection',
          },
          {
            label: 'STM gazetteer',
            url: 'https://suriname-database-model.vercel.app/',
            description: 'Place data model + map viewer',
          },
          {
            label: 'Suriname Time Machine',
            url: 'https://surinametijdmachine.org',
            description: 'Project home, HDSC, citizen science',
          },
          {
            label: 'These slides',
            url: 'https://surinametijdmachine.org/en/presentations/rijksmuseum-2026',
            description: 'Bookmark & share',
          },
        ],
      },
      notes: [
        'Thanks to: Huygens Institute, the Rijksmuseum, HDSC contributors, Wikimedia Nederland, Allmaps, Allard Pierson, UB Leiden, CREATE, Stichting Pica, and the community builders shaping the next phase.',
        'Invite questions, and invite the audience to scan now while we discuss.',
      ],
    },
  ],
};
