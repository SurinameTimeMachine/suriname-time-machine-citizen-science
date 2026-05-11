import type { PresentationContent } from './presentationTypes';

export const rijksmuseum2026Content: PresentationContent = {
  locale: 'en',
  seo: {
    title:
      'The Suriname Time Machine: Mapping Visual Heritage — Rijksmuseum 2&3D Photography 2026',
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
      'Offline preview — open the live project at the URL above when online.',
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
        'Thunnis van Oort & Jona Schlegel — Huygens Institute',
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
        'A digital infrastructure linking people, places and visual heritage across colonial Suriname.',
      body: [
        'The Suriname Time Machine (STM) connects scattered archives into a single, geographically-anchored knowledge graph — built with and for Dutch-Surinamese communities.',
        'It already serves tens of thousands of users researching genealogical and historical connections through the [Historical Database of Suriname and the Caribbean](https://www.surinameheritage.org).',
      ],
      bullets: [
        'Standardised historical place data (a gazetteer)',
        'CIDOC-CRM linked-data backbone',
        'Open, Wikidata-published outputs',
        'Co-creation with descendant communities',
      ],
      notes: [
        'STM is not a website — it is an infrastructure: a gazetteer + a knowledge graph + tooling that other projects can build on.',
        'Stress the existing user base: this is not greenfield, the Historical Database already has tens of thousands of users.',
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
        'Each one builds local gazetteers and visualisations from its own archives — together forming a European-scale linked heritage commons.',
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
      subtitle: 'Gazetteer + place-data model',
      body: [
        'Our data model focuses on **historic maps, almanak registers, plantations, and the network of roads, creeks and rivers** — modelled in CIDOC-CRM and published as JSON-LD.',
        'See it live: [suriname-database-model.vercel.app](https://suriname-database-model.vercel.app/).',
      ],
      bullets: [
        '375 plantations · 1700–1863',
        '22,999 almanak rows · 1818–1861',
        '1,596 georeferenced QGIS polygons · 1930',
        '38,371 entities in the JSON-LD graph',
      ],
      notes: [
        'These numbers come from the suriname-database-model README.',
        'Plantations are our anchor entity — they appear in almanakken, civil registers, slave registers, and on the maps. They are the glue.',
      ],
    },

    // ── Act II · The Rijksmuseum dataset ───────────────────────────────
    {
      id: 'rijks-dataset-intro',
      layout: 'split',
      eyebrow: 'Act II · The Rijksmuseum dataset',
      title: 'What the Rijksmuseum gave us',
      subtitle:
        'Public-domain visual heritage of 19th-century Suriname — already IIIF-ready.',
      body: [
        'The [Rijksmuseum online collection](https://www.rijksmuseum.nl/en/collection) holds an extensive body of Suriname-related imagery: photographs, prints, drawings.',
        'Crucially: a permissive **public-domain license** and a [IIIF manifest](https://iiif.io/) for every work.',
      ],
      bullets: [
        '≈ 2,300 Suriname-related works',
        'Photographs, lithographs, drawings, books',
        'Most c. 1850–1910',
        'IIIF manifests + structured metadata via API',
      ],
      notes: [
        'Numbers are illustrative — refine before the talk against the latest snapshot in rijksmuseum-suriname-collection.',
        'Emphasise that IIIF + public domain is what makes the rest possible. Without that, we could not redistribute or zoom.',
      ],
    },
    {
      id: 'metadata-gaps',
      layout: 'split',
      eyebrow: 'Act II · The Rijksmuseum dataset',
      title: 'State of the data',
      subtitle: 'Rich titles and creators — geography is the gap.',
      body: [
        'Metadata coverage is uneven. Creator and date are well-populated; **places** are often buried in free-text titles or absent entirely.',
        'That gap is the opening for our intervention.',
      ],
      component: 'metadataGapsChart',
      notes: [
        'Walk through the bars: creator > title > date > medium > … > place coordinates.',
        'Punchline: the catalog speaks about *who made* and *what was made*, but not *where it happened*.',
      ],
    },
    {
      id: 'what-we-did',
      layout: 'text',
      eyebrow: 'Act II · The Rijksmuseum dataset',
      title: 'What we did to the data',
      subtitle: 'A hybrid pipeline: scripts first, humans second.',
      bullets: [
        '1 · Fetch every Suriname work via the Rijksmuseum API + IIIF',
        '2 · Normalise metadata; extract candidate place strings from titles',
        '3 · Disambiguate against the STM gazetteer (plantations + almanak registers)',
        '4 · Manual verification in data sprints with Wiki Goes Caribbean',
        '5 · Publish enriched links back to Wikidata',
      ],
      notes: [
        'The pipeline is documented at github.com/SurinameTimeMachine/rijksmuseum-suriname-collection.',
        'Stress the *manual* sprint step — automated disambiguation is necessary but not sufficient for colonial place names that repeat across regions.',
      ],
    },

    // ── Act III · Live exploration ─────────────────────────────────────
    {
      id: 'demo-collection',
      layout: 'embed',
      eyebrow: 'Act III · Live exploration',
      title: 'Demo · Rijksmuseum × Suriname collection',
      subtitle: 'Browsing the linked, place-enriched imagery.',
      component: 'embedRijksmuseum',
      notes: [
        'Live click-through: filter by place, click a work, show the IIIF zoom + Wikidata link.',
        'If offline at the venue, fall back to the static screenshot.',
      ],
    },
    {
      id: 'demo-gazetteer',
      layout: 'embed',
      eyebrow: 'Act III · Live exploration',
      title: 'Demo · STM gazetteer',
      subtitle: 'The place infrastructure behind the imagery.',
      component: 'embedGazetteer',
      notes: [
        'Open the map view. Click a plantation, show the almanak observations, the polygon from the 1930 QGIS layer, and the linked Rijksmuseum thumbnails.',
      ],
    },
    {
      id: 'geo-coverage',
      layout: 'full-media',
      eyebrow: 'Act III · Live exploration',
      title: 'Where the lens was pointed',
      subtitle:
        'Hex-bin density of image locations · stroke encodes positional uncertainty.',
      body: [
        'Following the Gouda Tijdmachine "velepanden" pattern — fill = density, dashed stroke = mean uncertainty radius.',
      ],
      component: 'hexHeatmap',
      notes: [
        'Read the map: dense cluster around Paramaribo and the lower Suriname / Commewijne river plantation belt.',
        'Almost nothing in the interior — the southern half of the country is essentially blank in the Rijksmuseum collection.',
      ],
    },
    {
      id: 'temporal',
      layout: 'full-media',
      eyebrow: 'Act III · Live exploration',
      title: 'When the lens was open',
      subtitle: 'Filter the same map by year, 1850–1910.',
      component: 'timeSlider',
      notes: [
        'Drag the slider. Pre-1870 = mostly drawings and lithographs, post-1880 = the photographic boom.',
        'The geographical footprint barely changes — even the boom in photography stays in the same coastal corridor.',
      ],
    },
    {
      id: 'iiif-zoom',
      layout: 'full-media',
      eyebrow: 'Act III · Live exploration',
      title: 'Close-reading at deep zoom',
      subtitle:
        'One image, one place, one moment — at the resolution the IIIF manifest allows.',
      component: 'iiifViewer',
      componentProps: {
        info: '/presentations/rijksmuseum-2026/iiif/sample-info.json',
        fallback: '/presentations/rijksmuseum-2026/iiif/sample-fallback.svg',
      },
      notes: [
        'Walk through one well-located photograph. Zoom into a corner — visible faces, signage, plantation buildings — and link those back to gazetteer entries.',
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
        'The Rijksmuseum can read these gaps as **acquisition priorities** — and as conversation starters with archives elsewhere (Suriname, the UK, France).',
      ],
      bullets: [
        'Interior / Maroon villages: almost no coverage',
        'Indigenous territories: near-total absence',
        'Religious life outside the Moravian mission: under-documented',
        'Domestic interiors of enslaved and freed people: invisible',
      ],
      notes: [
        'Frame this as constructive, not accusatory.',
        'The Rijksmuseum is already aware — our contribution is making the absences *visible and addressable*.',
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
        'The voices that are missing — Surinamese, indigenous, enslaved and formerly enslaved — left their record in different media: oral history, song, material culture, the landscape itself.',
        'Our infrastructure has to make space for those media too.',
      ],
      notes: [
        'This is the pivot to the Sranan Story Collective and the outlook.',
        'Be explicit: the Rijksmuseum collection is a *partial* archive. Treating it as comprehensive reproduces the colonial gaze.',
      ],
    },
    {
      id: 'sranan-story',
      layout: 'split',
      eyebrow: 'Act IV · Outlook',
      title: 'Sranan Story Collective',
      subtitle: 'A co-creation partnership with Dutch-Surinamese communities.',
      body: [
        'We are working with the [Sranan Story Collective](https://www.surinameheritage.org/) to bring the dataset back to community settings — and to record the stories that the catalog cannot hold on its own.',
      ],
      bullets: [
        'Place-elicited interviews using map + image prompts',
        'Stories linked back to gazetteer entries (not just transcribed)',
        'Audio + transcripts published under community-set licenses',
        'Iterative — the dataset improves the next session',
      ],
      notes: [
        'Highlight that "co-creation" here is not a buzzword — community members shape what counts as a relevant place and what gets recorded.',
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
        '… and that story becomes part of the linked record — citable, durable, theirs',
        'Repeat across collectives, regions, and generations',
      ],
      notes: [
        'Land the emotional close. This is the *point* of the infrastructure.',
        'Acknowledge that we are early — this is a roadmap, not a completed programme.',
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
            label: 'STM citizen science',
            url: 'https://surinameheritage.org/',
            description: 'Project home & data sprints',
          },
          {
            label: 'These slides',
            url: 'https://surinameheritage.org/en/presentations/rijksmuseum-2026',
            description: 'Bookmark & share',
          },
        ],
      },
      notes: [
        'Thanks to: Huygens Institute, Rijksmuseum, Wiki Goes Caribbean, Sranan Story Collective, all sprint participants.',
        'Invite questions — and invite the audience to scan now while we discuss.',
      ],
    },
  ],
};
