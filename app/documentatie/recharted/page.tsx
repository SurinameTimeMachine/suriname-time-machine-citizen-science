import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 're:Charted Documentatie | Suriname Tijdmachine',
  description:
    'Nederlandse handleiding voor re:Charted — het annotatieplatform voor historische kaarten.',
  robots: { index: false, follow: false },
};

/* ------------------------------------------------------------------ */
/*  Tiny reusable pieces                                              */
/* ------------------------------------------------------------------ */

const linkCls =
  'font-medium text-teal-strong underline decoration-teal-strong/40 underline-offset-2 hover:text-teal-strong/80 transition-colors';

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkCls}
    >
      {children}
    </a>
  );
}

function VideoLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-2 flex items-center gap-2 rounded-sm bg-(--deep-teal)/5 px-4 py-2.5 ring-1 ring-(--deep-teal)/10 transition-colors hover:bg-(--deep-teal)/10"
    >
      <svg
        className="h-5 w-5 shrink-0 text-teal-strong"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className="text-sm font-medium text-teal-strong group-hover:text-teal-strong/80">
        {children}
      </span>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function ReChartedDocumentatiePage() {
  return (
    <div className="min-h-screen bg-(--cream) text-ink">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-ink/5 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
          <Link
            href="/participatie"
            className="flex items-center gap-2 text-sm text-ink/60 transition-colors hover:text-teal-strong"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Terug naar Participatie
          </Link>
          <span className="text-xs uppercase tracking-[0.25em] text-ink/40">
            STM
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-surface px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="flag-label mb-4 text-white/80">Suriname Tijdmachine</p>
          <h1 className="mb-6 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            re:Charted Handleiding
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-white/80">
            Stapsgewijze handleiding voor het annoteren van historische kaarten
            met re:Charted — het annotatieplatform voor de Suriname Tijdmachine.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="relative mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-10">
        {/* ── TOC: sticky in the left viewport gutter, only visible below hero ── */}
        <aside
          className="pointer-events-none absolute inset-y-0 right-full top-12 mr-6 hidden w-44 xl:block"
          aria-hidden="true"
        >
          <nav
            className="pointer-events-auto sticky top-12 rounded-sm border border-slate-200 bg-white px-4 py-4 shadow-[0_15px_35px_rgba(0,30,24,0.08)]"
            aria-label="Inhoudsopgave"
          >
            <p className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-teal-strong">
              <span
                className="inline-flex h-2 w-2 -skew-x-12 bg-teal-strong"
                aria-hidden
              />
              Inhoud
            </p>
            <ol className="space-y-1.5 text-xs">
              {[
                ['#inleiding', 'Inleiding'],
                ['#inloggen', 'Inloggen en starten'],
                ['#switchen', 'Switchen NeRu / STM'],
                ['#overzicht', 'Interface-overzicht'],
                ['#basis', 'Kaarten bekijken'],
                ['#oud-op-nieuw', 'Oud op Nieuw'],
                ['#annotaties', 'Annotaties'],
                ['#taken', 'Taken bij de mapathon'],
                ['#bewerkmodus', 'Bewerkmodus'],
              ].map(([href, label], i) => (
                <li key={href}>
                  <a
                    href={href}
                    className="flex gap-2 py-0.5 text-ink/60 transition-colors hover:text-teal-strong"
                  >
                    <span className="shrink-0 font-mono text-[10px] text-ink/30">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <div className="space-y-10">
          {/* 1. Inleiding */}
          <section
            id="inleiding"
            className="scroll-mt-20 angled-card px-8 py-8"
          >
            <p className="flag-label mb-3 text-ink/60">01</p>
            <h2 className="mb-4 text-2xl font-semibold">Inleiding</h2>
            <div className="space-y-3 text-sm leading-relaxed text-ink/70">
              <p>
                Voor deze mapathon gaan we aan de slag met het toegankelijk
                maken van informatie op historische kaarten van Suriname. Op
                deze manier wordt het gemakkelijker om historische plaatsen
                terug te vinden, onder andere plaatsen die van naam zijn
                veranderd of in de loop der tijd zijn verdwenen (denk aan
                plantages, verouderde straatnamen, enz.)
              </p>
              <p>
                We maken hiervoor gebruik van een instrument{' '}
                <strong>re:Charted</strong> dat is ontwikkeld in een eerder
                project genaamd{' '}
                <ExternalLink href="https://necessaryreunions.org/">
                  Necessary Reunions
                </ExternalLink>
                , dat zich richtte op historische kaarten van Kerala, hedendaags
                India. In deze handleiding wordt stap voor stap uitgelegd hoe
                het werkt.
                <sup className="ml-0.5 text-xs text-teal-strong">1</sup>
              </p>
              <p>
                De informatie die uit deze mapathon voortkomt, komt als open
                data voor iedereen beschikbaar in het kader van de Suriname
                Tijdmachine.
              </p>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-ink/40">
              <sup>1</sup> Voor deze mapathon is de handleiding voldoende maar
              voor wie meer wil weten, is een meer uitgebreide handleiding hier
              te vinden:{' '}
              <ExternalLink href="https://necessaryreunions.org/documentation">
                necessaryreunions.org/documentation
              </ExternalLink>
              .
            </p>
          </section>

          {/* 2. Inloggen en starten */}
          <section id="inloggen" className="scroll-mt-20 angled-card px-8 py-8">
            <p className="flag-label mb-3 text-ink/60">02</p>
            <h2 className="mb-4 text-2xl font-semibold">Inloggen en starten</h2>
            <div className="space-y-3 text-sm leading-relaxed text-ink/70">
              <p>
                Ga naar deze website:{' '}
                <ExternalLink href="https://necessaryreunions.org/viewer?project=suriname">
                  necessaryreunions.org/viewer?project=suriname
                </ExternalLink>
              </p>
              <p>
                Op deze website kan je alle informatie <em>bekijken</em>. Als je
                ook informatie wil <em>toevoegen</em> dan heb je een (gratis){' '}
                <strong>ORCID-account</strong> nodig om in te loggen.
              </p>
              <p>
                ORCID is een soort burgerservicenummer voor de wetenschappelijke
                wereld: het is een uniek nummer gekoppeld aan jouw persoon. Als
                je nog geen ORCID-account hebt, kan je er hier een aanmaken:{' '}
                <ExternalLink href="https://orcid.org/register">
                  orcid.org/register
                </ExternalLink>
                . Het enige dat je nodig hebt is een werkend mailadres waar je
                toegang toe hebt.
              </p>
              <p>
                <strong>
                  Je moet je ORCID-account eenmalig bij ons aanmelden!
                </strong>{' '}
                Stuur je naam en ORCID-nummer per mail naar{' '}
                <a
                  href="mailto:jona.schlegel@huygens.knaw.nl"
                  className={linkCls}
                >
                  jona.schlegel@huygens.knaw.nl
                </a>
                , dan zetten wij je in het systeem.
              </p>
              <p>
                Met je ORCID-account kan je je rechtsboven aanmelden (&apos;Sign
                in&apos;): je krijgt een scherm te zien waar je je toestemming (&apos;authorisation&apos;) geeft om je ORCID te gebruiken voor het inloggen (het kan zijn dat je een stukje naar beneden moet scrollen om de &apos;authorisation&apos; knop te zien).
              </p>
            </div>
          </section>

          {/* 3. Switchen */}
          <section id="switchen" className="scroll-mt-20 angled-card px-8 py-8">
            <p className="flag-label mb-3 text-ink/60">03</p>
            <h2 className="mb-4 text-2xl font-semibold">
              Switchen tussen NeRu en STM
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-ink/70">
              <p>
                Linksboven in het scherm in de balk naast <em>re:Charted</em> is
                een knop om te wisselen tussen <strong>NeRu</strong> (Necessary
                Reunions, Indiase kaarten) en <strong>STM</strong> (Suriname
                Tijdmachine). In de mapathon richten we ons op de Suriname
                Tijdmachine (STM).
              </p>
              <p>
                We gebruiken in de mapathon alleen de tool re:Charted, de andere
                tools laten we voor nu buiten beschouwing (Gazetteer, GAVOC).
              </p>
            </div>
          </section>

          {/* 4. Overzicht */}
          <section
            id="overzicht"
            className="scroll-mt-20 angled-card px-8 py-8"
          >
            <p className="flag-label mb-3 text-ink/60">04</p>
            <h2 className="mb-4 text-2xl font-semibold">
              Hoe ziet de tool re:Charted eruit?
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['Linkerpaneel', 'Een overzicht van de beschikbare kaarten.'],
                ['Middenpaneel', 'Het kaartscherm — nadere uitleg hieronder.'],
                ['Rechterpaneel', 'Drie tabbladen — Info, Annotations, Map.'],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-sm bg-sand px-5 py-4 ring-1 ring-ink/5"
                >
                  <p className="text-sm font-semibold text-ink">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-ink/60">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 5. De Basis */}
          <section id="basis" className="scroll-mt-20 angled-card px-8 py-8">
            <p className="flag-label mb-3 text-ink/60">05</p>
            <h2 className="mb-1 text-2xl font-semibold">
              De basis: kaarten bekijken
            </h2>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-ink/40">
              Middenpaneel · Info-tabblad
            </p>
            <div className="space-y-3 text-sm leading-relaxed text-ink/70">
              <p>
                In het linkerpaneel selecteer je een kaart naar keuze. In het
                middenpaneel kun je de historische kaarten tot in de kleinste
                details bestuderen. In het rechterpaneel (Info-tabblad) vind je
                informatie over de kaart en onder andere een link naar de
                bewaarplaats.
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  [
                    'Slepen',
                    'Klik en houd de muisknop ingedrukt om de kaart te bewegen.',
                  ],
                  [
                    'Zoomen',
                    'Gebruik je muiswieltje of de knoppen op het scherm (net als bij Google Maps).',
                  ],
                  [
                    'Draaien',
                    'Je kunt de kaart een slag draaien als de tekst ondersteboven staat.',
                  ],
                  [
                    'Volledig scherm',
                    'Gebruik deze knop voor een rustig beeld zonder afleiding.',
                  ],
                  [
                    'Mini-kaart',
                    'Als je bent ingezoomd, zie je in het minikaartje waar je je bevindt op de kaart.',
                  ],
                ].map(([title, desc]) => (
                  <div
                    key={title}
                    className="flex gap-3 rounded-sm bg-white px-4 py-3 ring-1 ring-ink/5"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-strong/10 text-[10px] font-bold text-teal-strong">
                      {title![0]}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">{title}</p>
                      <p className="text-xs leading-relaxed text-ink/60">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <VideoLink href="https://necessaryreunions.org/video/neru_recharted_annotation-tab-view-mode.mp4">
              Video: kaartinformatie bekijken
            </VideoLink>
          </section>

          {/* 6. Oud op Nieuw */}
          <section
            id="oud-op-nieuw"
            className="scroll-mt-20 angled-card px-8 py-8"
          >
            <p className="flag-label mb-3 text-ink/60">06</p>
            <h2 className="mb-1 text-2xl font-semibold">Oud op Nieuw</h2>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-ink/40">
              Map-tab
            </p>
            <div className="space-y-3 text-sm leading-relaxed text-ink/70">
              <p>
                In dit venster kun je de historische kaart vergelijken met de
                wereld van nu. Deze functie is nog niet actief. Zodra deze
                functie actief is en de kaart is gegeorefereerd kan je de oude
                kaart over de moderne OpenStreetMaps-kaart leggen. Met een
                schuifbalk kun je de oude kaart doorzichtig maken. Zo zie je
                precies waar een oud fort of dorp nu zou liggen op een moderne
                landkaart.
              </p>
            </div>
          </section>

          {/* 7. Verrijkingen door annotaties */}
          <section
            id="annotaties"
            className="scroll-mt-20 angled-card px-8 py-8"
          >
            <p className="flag-label mb-3 text-ink/60">07</p>
            <h2 className="mb-1 text-2xl font-semibold">
              Verrijkingen door annotaties
            </h2>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-ink/40">
              Annotation-tabblad
            </p>
            <div className="space-y-3 text-sm leading-relaxed text-ink/70">
              <p>
                Dit is de kern van de tool: in dit tabblad kunnen we de
                informatie van de kaart halen zodat deze doorzoekbaar wordt en
                kan worden gekoppeld aan andere bronnen. We hebben met
                kunstmatige intelligentie (AI) al geprobeerd op de kaart
                geschreven teksten te herkennen en te lezen. Soms werkt dit,
                maar lang niet altijd: de computer ziet veel tekst over het
                hoofd en kan de tekst ook niet altijd goed lezen. Hier kan jij
                dus helpen!
              </p>
              <p>
                Alle informatie die we van de kaart overnemen, noemen we{' '}
                <strong>annotaties</strong>: het zijn eigenlijk opmerkingen die
                horen bij een specifieke plek op de kaart. Er zijn twee soorten
                annotaties: <strong>teksten</strong> (bijvoorbeeld de naam van
                een plaats) en <strong>iconen</strong> (dat kan een symbool zijn
                van een vuurtoren, maar ook het perceel van een plantage).
                Tijdens de mapathon richten we ons alleen op de teksten, de
                iconen doen we een volgende keer.
              </p>
              <p>
                In de filteropties kan je bepalen of je teksten en/of iconen
                ziet en of je door AI en/of door mensen gemaakte annotaties wil
                zien. Er is ook een zoekveld waarmee je bestaande annotaties kan
                doorzoeken.
              </p>
              <div className="rounded-sm border-l-2 border-amber-400 bg-amber-50 px-4 py-3 text-ink/70">
                <strong>Let op:</strong> als er veel annotaties zijn, kan het
                even duren voordat de pagina wordt ingeladen!
              </div>
              <p>
                Onder het zoekveld zie je hoeveel annotaties er zijn op de
                gekozen kaart en hoeveel daarvan door mensen is bewerkt.
                Daaronder begint de daadwerkelijke lijst met annotaties.
              </p>
            </div>
          </section>

          {/* 8. Taken bij de mapathon */}
          <section id="taken" className="scroll-mt-20 angled-card px-8 py-8">
            <p className="flag-label mb-3 text-ink/60">08</p>
            <h2 className="mb-4 text-2xl font-semibold">
              Annotaties verbeteren en toevoegen
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-ink/70">
              Voor de mapathon richten we ons op <strong>3 taken</strong>:
            </p>
            <div className="space-y-3">
              {[
                {
                  n: '1',
                  title: 'Tekstvelden markeren',
                  desc: 'Markeer tekstvelden op de kaart waar tekst is geschreven — ofwel verbeteren of bevestigen van AI, ofwel het tekenen van nieuwe tekstvelden.',
                },
                {
                  n: '2',
                  title: 'Inhoud verbeteren',
                  desc: 'Verbeter de inhoud van de tekstvelden — verbeteren of bevestigen van AI, of tekst invullen.',
                },
                {
                  n: '3',
                  title: 'Tekstvelden koppelen',
                  desc: "Als één begrip uit meerdere woorden bestaat, is het van belang dat we de velden koppelen. Bijvoorbeeld: 'Houtgrond Weltevreeden' bestaat uit 2 woorden die één begrip vormen. Hetzelfde geldt voor de 'Rust en Vredestraat'.",
                },
              ].map((task) => (
                <div
                  key={task.n}
                  className="flex gap-4 rounded-sm bg-white px-5 py-4 shadow-[0_4px_20px_rgba(0,30,24,0.06)] ring-1 ring-ink/5"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-(--deep-teal) text-xs font-bold text-white">
                    {task.n}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      {task.title}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink/60">
                      {task.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Optional: locatie koppelen */}
            <div className="mt-6 rounded-sm border border-ink/5 bg-sand px-6 py-5">
              <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-strong">
                <span
                  className="inline-flex h-2.5 w-2.5 -skew-x-12 bg-teal-strong"
                  aria-hidden
                />
                Optioneel voor de liefhebber
              </p>
              <div className="space-y-3 text-sm leading-relaxed text-ink/70">
                <p>
                  <strong>Linken aan locaties.</strong> Een annotatie is alleen
                  nog een naam op een kaart. Als je zeker weet dat die naam
                  correspondeert met een bekende locatie, is het waardevol om
                  die koppeling te maken. We maken daarbij vooral gebruik van{' '}
                  <ExternalLink href="https://www.wikidata.org/">
                    Wikidata
                  </ExternalLink>
                  , omdat de meeste plantages daar in zijn vermeld.
                </p>
                <p>
                  De in het vorige voorbeeld genoemde houtgrond Weltevreden: is
                  dat de plantage aan de{' '}
                  <ExternalLink href="https://www.wikidata.org/wiki/Q124805954">
                    Commewijne
                  </ExternalLink>
                  ,{' '}
                  <ExternalLink href="https://www.wikidata.org/wiki/Q2854713">
                    Surinamerivier
                  </ExternalLink>{' '}
                  of{' '}
                  <ExternalLink href="https://www.wikidata.org/wiki/Q124805910">
                    Saramacca
                  </ExternalLink>
                  ? Je kan het Q-nummer van Wikidata invoeren en dan verschijnt
                  de plantage. Vergeet niet te saven!
                </p>
              </div>
            </div>
          </section>

          {/* 9. Bewerkmodus */}
          <section id="bewerkmodus" className="scroll-mt-20 space-y-6">
            <div className="angled-card px-8 py-8">
              <p className="flag-label mb-3 text-ink/60">09</p>
              <h2 className="mb-1 text-2xl font-semibold">
                Zelf markeringen aanpassen
              </h2>
              <p className="mb-4 text-xs font-medium uppercase tracking-wider text-ink/40">
                Annotation-tab · Bewerkmodus
              </p>
              <p className="text-sm leading-relaxed text-ink/70">
                Om aanpassingen te kunnen doen, moet je zijn aangemeld (zie
                stap&nbsp;2).
              </p>
            </div>

            {/* Sub-cards for each editing action */}
            <div className="space-y-4 pl-4 sm:pl-8">
              {/* a. Tekstvelden aanpassen */}
              <div className="cut-corner border border-slate-200 bg-white px-6 py-6">
                <h3 className="mb-3 text-base font-semibold text-ink">
                  Tekstvelden aanpassen
                </h3>
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-ink/40">
                  Verwijderen · corrigeren · samenvoegen
                </p>
                <div className="space-y-3 text-sm leading-relaxed text-ink/70">
                  <p>
                    Soms maakt de computer een fout, bijvoorbeeld een vlek die
                    als tekst wordt gezien. Soms zijn tekstvelden over elkaar
                    aangemaakt of ten onrechte in meerdere delen gesplitst.
                  </p>
                  <p>
                    De tekstvelden kan je aanpassen met de icoontjes die
                    rechtsboven in het middenpaneel staan. Het{' '}
                    <strong>prullenbakje</strong> verwijdert een tekstveld, met
                    het <strong>stippellijn-icoontje</strong> kan je het
                    aanpassen. Zorg dat de getekende vorm de letters (inclusief
                    leestekens) helemaal omsluit, maar raak andere onderdelen op
                    de kaart zo min mogelijk aan. Bevestig daarna met het{' '}
                    <strong>groene vinkje</strong> of annuleer de wijziging met
                    het <strong>rode kruisje</strong>.
                  </p>
                  <p>
                    Als er bijvoorbeeld per ongeluk twee tekstvelden zijn
                    aangemaakt voor één woord, dan kan je één veld verwijderen
                    en het andere veld aanpassen zodat het om het hele woord
                    past. Je kan ook meteen de inhoud van het tekstveld
                    aanpassen.
                  </p>
                </div>
                <VideoLink href="https://necessaryreunions.org/video/neru_recharted_correct.mp4">
                  Video: tekstveld aanpassen
                </VideoLink>
                <VideoLink href="https://necessaryreunions.org/video/neru_recharted_deleting.mp4">
                  Video: meerdere tekstvelden verwijderen
                </VideoLink>
              </div>

              {/* b. Nieuwe tekstvelden */}
              <div className="cut-corner border border-slate-200 bg-white px-6 py-6">
                <h3 className="mb-3 text-base font-semibold text-ink">
                  Nieuwe tekstvelden aanmaken
                </h3>
                <div className="space-y-3 text-sm leading-relaxed text-ink/70">
                  <p>
                    De computer ziet regelmatig tekst over het hoofd. In dat
                    geval kan je zelf een nieuw tekstveld aanmaken. Klik op het
                    icoon met de <strong>T en een potlood</strong>. Teken het
                    veld om de tekst heen en klik op het groene vinkje om te
                    bevestigen. Vervolgens kan je de tekst in het tekstveld
                    invoeren (ook weer bevestigen met groen vinkje).
                  </p>
                </div>
                <VideoLink href="https://necessaryreunions.org/video/neru_recharted_addnew.mp4">
                  Video: nieuwe tekstvelden aanmaken
                </VideoLink>
              </div>

              {/* c. Tekstvelden koppelen */}
              <div className="cut-corner border border-slate-200 bg-white px-6 py-6">
                <h3 className="mb-3 text-base font-semibold text-ink">
                  Tekstvelden koppelen
                </h3>
                <div className="space-y-3 text-sm leading-relaxed text-ink/70">
                  <p>
                    Vaak zijn er meerdere woorden die samen een naam vormen.
                    Eerder werd het voorbeeld al genoemd van{' '}
                    <em>&lsquo;Houtgrond Weltevreeden&rsquo;</em>. We willen
                    deze woorden aan elkaar koppelen zodat we weten dat dit één
                    term is.
                  </p>
                  <ol className="list-inside list-decimal space-y-1.5 pl-1">
                    <li>
                      Klik op de annotatie die je wil koppelen. Je kan eventueel
                      de tekst verbeteren.
                    </li>
                    <li>
                      Onder de tekst zie je{' '}
                      <strong>Enrichment → Link annotations</strong>.
                    </li>
                    <li>
                      Klik op <strong>+ Start selecting</strong>.
                    </li>
                    <li>
                      Klik op de kaart de tekstvelden aan in de juiste volgorde
                      (af te lezen aan de nummers).
                    </li>
                    <li>
                      Klik op <strong>Save</strong>.
                    </li>
                  </ol>
                </div>
              </div>

              {/* d. Teksten verbeteren */}
              <div className="cut-corner border border-slate-200 bg-white px-6 py-6">
                <h3 className="mb-3 text-base font-semibold text-ink">
                  Teksten verbeteren of invoeren
                </h3>
                <div className="space-y-3 text-sm leading-relaxed text-ink/70">
                  <p>
                    Door AI gelezen teksten kunnen worden gecontroleerd en
                    verbeterd. Als AI de tekst goed heeft gelezen, bevestig dan
                    dat de tekst correct is door op het{' '}
                    <strong>potloodje</strong> naast de tekst te klikken. Als de
                    tekst moet worden verbeterd, kan dat in het tekstveld,
                    gevolgd door bevestiging met het groene vinkje.
                  </p>
                  <p>
                    Neem de tekst zo exact mogelijk over: afkortingen,
                    interpunctie, hoofdlettergebruik. Bij twijfel kan je ook
                    altijd een comment achterlaten (<em>Add a comment</em>).
                  </p>
                </div>
              </div>

              {/* e. Koppelen locatie */}
              <div className="cut-corner border border-slate-200 bg-white px-6 py-6">
                <h3 className="mb-3 text-base font-semibold text-ink">
                  Voor de liefhebber: koppelen locatie
                </h3>
                <div className="space-y-3 text-sm leading-relaxed text-ink/70">
                  <p>
                    In de mapathon ligt de nadruk op het in orde maken van de
                    tekstvelden en de teksten. Een volgende stap is het koppelen
                    met locatiegegevens, zoals de namen van plaatsen, plantages,
                    straatnamen enzovoorts. We richten ons daarbij vooral op{' '}
                    <ExternalLink href="https://www.wikidata.org/">
                      Wikidata
                    </ExternalLink>
                    .
                  </p>
                  <p>
                    Je kan het beste eerst de locatie opzoeken op{' '}
                    <ExternalLink href="https://www.wikidata.org/">
                      wikidata.org
                    </ExternalLink>{' '}
                    en als je zeker bent dat het de juiste is, het unieke
                    Q-nummer invoeren:{' '}
                    <strong>
                      Add Location → zoekveld &lsquo;Search for a place&rsquo; →
                      Q-nummer invoeren → juiste item aanklikken → Save
                    </strong>
                    .
                  </p>
                </div>
                <VideoLink href="https://necessaryreunions.org/video/neru_recharted_linking.mp4">
                  Video: tekst koppelen aan een locatie
                </VideoLink>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-ink/5 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-ink/50">
            <p>Projectcoördinator · Huygens Instituut</p>
            <p>Suriname Time Machine © {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
