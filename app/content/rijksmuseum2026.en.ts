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
      layout: 'full-media',
      title: 'Where STM sits',
      subtitle:
        'Between the Dutch Time Machines and the global community of Atlantic-world and diaspora heritage projects.',
      body: [
        'Left: sister Time Machines in NL/BE that share our data culture — open, IIIF, citizen science (Amsterdam, Gouda, Utrecht, Aezel, Gent Gemapt). Right: Atlantic-world and diaspora heritage projects that share our research scope ([HDSC](https://surinametijdmachine.org), [imagineRio](https://imaginerio.org/en), [Same Boats](https://sameboats.org/), [Enslaved](https://enslaved.org), [SlaveVoyages](https://slavevoyages.com)).',
      ],
      component: 'timeMachineBrandMap',
      notes: [
        'The Venn shows the position: STM borrows the Time Machine playbook (gazetteer, IIIF, citizen science) and applies it to a colonial subject.',
        'Be explicit about the limit of the Time Machine federation: it is European-focused. For our scope we look outward — to HDSC for the source data, to imagineRio for a comparable colonial-city digital twin, to Same Boats for Atlantic mobility / black diaspora linked data.',
        'Avoid framing as "we are part of Europe". The point is the methodological overlap, not the geographical one.',
      ],
    },
    {
      id: 'stm-foundations',
      layout: 'split',
      title: 'STM’s foundations',
      subtitle:
        'A gazetteer + a place-data model that other sources can plug into.',
      body: [
        'STM’s data model is anchored on **historic maps and images, almanak registers, plantations, addresses, and the network of roads, creeks and rivers** of colonial Suriname.',
        'Future inclusion: person databases (slave registers, civil records, censuses).',
        'See it live: [data.surinametijdmachine.org](https://data.surinametijdmachine.org).',
        'Image collection: [images.surinametijdmachine.org](https://images.surinametijdmachine.org).',
      ],
      bullets: [
        'Historic maps and images, georeferenced and linked',
        'Almanakken and registers, transcribed and linked',
        'Plantations and addresses as anchor entities',
        'Future inclusion: person databases (slave registers, civil records, censuses)',
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
      title: 'What the Rijksmuseum gave us',
      subtitle:
        'Public-domain visual heritage of Suriname, already IIIF-ready.',
      body: [
        'The [Rijksmuseum online collection](https://www.rijksmuseum.nl/en/collection) holds an extensive body of Suriname-related imagery. Most works are released under a **public domain mark** and ship with a [IIIF manifest](https://iiif.io/), so we can zoom, reuse and redistribute.',
        'We especially want to acknowledge Shannon van Muijen and Digna van Nielen (Rijksmuseum) for their support in opening up and contextualising this collection for collaborative research.',
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
      title: 'State of the data',
      subtitle: 'Titles and dates are nearly complete.',
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
      title: 'What we did to the data',
      subtitle: 'A hybrid pipeline: scripts first, humans second.',
      bullets: [
        '1 · Fetch every Suriname work via the Rijksmuseum API + IIIF (3,668 records)',
        '2 · Normalise metadata; extract candidate place strings from titles and keywords',
        '3 · Disambiguate against the STM gazetteer, Wikidata and Getty TGN',
        '4 · Manual verification',
        '5 · Map the images in order to visualise the collection',
        '6 · Next step: publish enriched, provenance-tracked links back to Wikidata',
        '7 · Next step: enrich STM place information with linked images',
      ],
      notes: [
        'The pipeline is documented at github.com/SurinameTimeMachine/rijksmuseum-suriname-collection.',
        'Stress the *manual* sprint step. Scripted disambiguation gets us most of the way, but it is not sufficient for colonial place names that repeat across regions.',
      ],
    },

    // ── Act III · Live exploration ─────────────────────────────────────
    {
      id: 'demo-collection',
      layout: 'embed',
      title: 'Explore the collection live',
      subtitle: 'images.surinametijdmachine.org, click to open in a new tab',
      component: 'embedImages',
      notes: [
        'This is the live site. Click around to show filtering by place, year, and medium.',
        'The "Open" button top-right opens it in a new tab for the audience to explore themselves.',
        'If offline, the iframe will not load — mention the URL and move on.',
      ],
    },
    {
      id: 'reading-the-map',
      layout: 'text',
      background: 'cream',
      title: 'Reading the data',
      subtitle: 'Two patterns that stand out, and an open invitation.',
      bullets: [
        '**Capital follows capital.** The dense image corridor traces colonial infrastructure (river, road, bauxite rail), not the country itself.',
        '**Ten famous streets.** "Paramaribo" at street scale collapses onto a handful of administrative blocks. Entire neighbourhoods stay invisible.',
        'There is much more to uncover here. We would love to keep exploring this together with the Rijksmuseum collection team.',
      ],
      notes: [
        'Keep this light. Two clear observations, then the invitation.',
        'The third bullet is deliberately open: it signals collaboration rather than conclusions.',
      ],
    },

    // ── Act IV · Critique & outlook ────────────────────────────────────
    {
      id: 'critique-where',
      layout: 'split',
      background: 'cream',
      title: 'A partial archive',
      subtitle: 'What is missing, and who made what we have.',
      body: [
        'The empty halves of the map are a brief for future collecting. A spatial reading turns absence into a research question: which regions, which communities, which kinds of place are systematically un-imaged?',
        'These gaps could be read as acquisition priorities, and as conversation starters with archives elsewhere (Suriname, the UK, France).',
        'The gaps are not neutral either. The collection was produced by a very small, colonially-positioned circle of photographers, missionaries and administrators. What we see is their Suriname, not the country.',
      ],
      bullets: [
        'Interior / Maroon villages: almost no coverage',
        'Indigenous territories: near-total absence',
        'Domestic life of enslaved and freed people: invisible',
        'Surviving voices left their record elsewhere: oral history, song, material culture, the landscape itself',
      ],
      notes: [
        'Frame this as constructive, not accusatory.',
        'On the producer point: family scenes and female subjects do appear, but always mediated by that same small colonial circle.',
        'Our contribution is making absences visible and addressable, and pointing to where community knowledge can fill them.',
      ],
    },
    {
      id: 'sranan-story',
      layout: 'split',
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
      id: 'going-back',
      layout: 'split',
      background: 'cream',
      title: 'Future direction · Open co-creation',
      subtitle:
        'An intentionally unfinished idea: museum collections, community stories and STM in one evolving space.',
      media: {
        src: '/presentations/rijksmuseum-2026/screenshots/proposal-layers.svg',
        alt: 'Concept sketch showing overlap between museums, citizen science and Suriname Time Machine with oral histories and community images feeding into a future co-curated exhibition.',
      },
      notes: [
        'Frame this as a concrete next-phase proposal: not only analysing the archive, but building a shared storytelling environment around it.',
        'Stress that oral histories are not decorative metadata. They are primary knowledge layers with community governance.',
        'Close with invitation: pilot with one district (for example Commewijne/Paramaribo), then scale to additional regions and partner museums.',
      ],
    },
    {
      id: 'partners',
      layout: 'qr',
      background: 'cream',
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
            logo: '/images/partners/allard-pierson.svg?v=20260519',
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
          {
            name: 'Surinaamse Genealogie',
            logo: '/images/partners/surinaamse-genealogie.jpg',
            href: 'https://www.surinaamsegenealogie.nl/',
            role: 'Genealogy community',
          },
          {
            name: 'Nationaal Archief Suriname',
            logo: '/images/partners/nationaal-archief-suriname.png',
            href: 'https://nationaalarchief.sr/',
            role: 'National archive',
          },
        ],
      },
      notes: [
        'Acknowledge specifically: HDSC for the underlying data; the libraries for the historical maps; Allmaps for georeferencing; Wikimedia NL for reconciliation help; Stichting Pica for funding parts of this work.',
        'The Rijksmuseum is the host today, name it warmly.',
      ],
    },
    {
      id: 'thanks-qr',
      layout: 'qr',
      background: 'deep',
      title: 'Thank you for your attention',
      subtitle: 'Explore the projects — scan a QR code or visit the URL below.',
      component: 'qrCodes',
      componentProps: {
        targets: [
          {
            label: 'Rijksmuseum × Suriname',
            url: 'https://images.surinametijdmachine.org',
            description: 'Place-enriched image collection',
          },
          {
            label: 'STM gazetteer',
            url: 'https://data.surinametijdmachine.org',
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
