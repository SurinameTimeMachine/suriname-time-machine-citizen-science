import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 're:Charted Documentatie | Suriname Tijdmachine',
  description:
    'Nederlandse handleiding voor re:Charted — het annotatieplatform voor historische kaarten.',
  robots: { index: false, follow: false },
};

/* ------------------------------------------------------------------ */
/*  Tiny utility components                                           */
/* ------------------------------------------------------------------ */

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? 'h-3.5 w-3.5 shrink-0'}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8.132v3.736a1 1 0 001.555.832l3.197-1.868a1 1 0 000-1.664L9.555 7.168z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/** Styled link to an external resource */
function ExtLink({
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
      className="font-medium text-teal-strong underline decoration-teal-strong/40 underline-offset-2 transition-colors hover:text-teal-strong/80"
    >
      {children}
    </a>
  );
}

/** Small video link card */
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
      className="group mt-2 flex items-center gap-2.5 rounded-sm bg-ink/2 px-4 py-3 ring-1 ring-ink/5 transition-colors hover:bg-teal-strong/5 hover:ring-teal-strong/20"
    >
      <PlayIcon />
      <span className="text-sm font-medium text-ink group-hover:text-teal-strong">
        {children}
      </span>
      <ExternalLinkIcon className="ml-auto h-3.5 w-3.5 text-ink/30 group-hover:text-teal-strong/60" />
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  Section wrapper — deep-teal header + white body                    */
/* ------------------------------------------------------------------ */

function DocSection({
  id,
  number,
  title,
  badge,
  children,
}: {
  id: string;
  number: number;
  title: string;
  badge?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-20 overflow-hidden rounded-sm border border-slate-200 bg-white shadow-[0_15px_35px_rgba(0,30,24,0.08)]"
    >
      <div className="border-b border-ink/5 bg-(--deep-teal) px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
            {number}
          </span>
          <h2 className="text-lg font-semibold text-white sm:text-xl">
            {title}
          </h2>
        </div>
        {badge && (
          <p className="mt-1.5 pl-10 text-xs uppercase tracking-[0.2em] text-white/50">
            {badge}
          </p>
        )}
      </div>
      <div className="space-y-4 px-6 py-6 text-sm leading-relaxed text-ink/70">
        {children}
      </div>
    </section>
  );
}

/** Subsection card inside the editing guide */
function SubStep({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-sm border border-ink/5 bg-(--cream) p-5">
      <h3 className="mb-3 text-base font-semibold text-ink">{title}</h3>
      <div className="space-y-3 text-sm leading-relaxed text-ink/70">
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function ReChartedDocumentatiePage() {
  return (
    <div className="min-h-screen bg-(--cream)">
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
            re:Charted Documentatie
          </h1>
          <p className="max-w-2xl text-lg text-white/80">
            Nederlandse handleiding voor het annoteren van historische kaarten
            met re:Charted.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl space-y-8">
          {/* ---- Table of contents ---- */}
          <nav className="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-[0_15px_35px_rgba(0,30,24,0.08)]">
            <div className="border-b border-ink/5 bg-sand px-6 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-strong">
                Inhoud
              </p>
            </div>
            <ol className="space-y-0 divide-y divide-ink/5 text-sm">
              {[
                { id: 'inleiding', label: 'Inleiding' },
                { id: 'inloggen', label: 'Inloggen en starten' },
                { id: 'switchen', label: 'Switchen tussen NeRu en STM' },
                { id: 'overzicht', label: 'Hoe ziet re:Charted eruit?' },
                { id: 'basis', label: 'De basis: kaarten bekijken' },
                { id: 'oud-op-nieuw', label: 'Oud op Nieuw (Map-tab)' },
                { id: 'annotaties', label: 'Verrijkingen door annotaties' },
                {
                  id: 'taken',
                  label: 'Annotaties verbeteren en toevoegen',
                },
                {
                  id: 'bewerkmodus',
                  label: 'Zelf markeringen aanpassen (bewerkmodus)',
                },
              ].map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="flex items-center gap-3 px-6 py-3 transition-colors hover:bg-teal-strong/5"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-strong/10 text-xs font-bold text-teal-strong">
                      {i + 1}
                    </span>
                    <span className="text-ink/70">{item.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ---- 1. Inleiding ---- */}
          <DocSection id="inleiding" number={1} title="Inleiding">
            <p>
              Voor deze mapathon gaan we aan de slag met het toegankelijk maken
              van informatie op historische kaarten van Suriname. Op deze manier
              wordt het gemakkelijker om historische plaatsen terug te vinden,
              onder andere plaatsen die van naam zijn veranderd of in de loop
              der tijd zijn verdwenen (denk aan plantages, verouderde
              straatnamen, enz.)
            </p>
            <p>
              We maken hiervoor gebruik van een instrument{' '}
              <strong>re:Charted</strong> dat is ontwikkeld in een eerder
              project genaamd{' '}
              <ExtLink href="https://necessaryreunions.org/">
                Necessary Reunions
              </ExtLink>
              , dat zich richtte op historische kaarten van Kerala, hedendaags
              India. In deze handleiding wordt stap voor stap uitgelegd hoe het
              werkt.
              <sup className="text-ink/40">1</sup>
            </p>
            <p>
              De informatie die uit deze mapathon voortkomt, komt als open data
              voor iedereen beschikbaar in het kader van de Suriname
              Tijdmachine.
            </p>
            <p className="mt-4 rounded-sm bg-sand px-4 py-3 text-xs text-ink/50">
              <sup>1</sup> Voor deze mapathon is de handleiding voldoende, maar
              voor wie meer wil weten is een meer uitgebreide handleiding hier
              te vinden:{' '}
              <ExtLink href="https://necessaryreunions.org/documentation">
                necessaryreunions.org/documentation
              </ExtLink>
              .
            </p>
          </DocSection>

          {/* ---- 2. Inloggen en starten ---- */}
          <DocSection id="inloggen" number={2} title="Inloggen en starten">
            <p>
              Ga naar deze website:{' '}
              <ExtLink href="https://necessaryreunions.org/viewer?project=suriname">
                necessaryreunions.org/viewer?project=suriname
              </ExtLink>
            </p>
            <p>
              Op deze website kan je alle informatie bekijken. Als je ook
              informatie wil toevoegen (en dat is het hele doel van de mapathon)
              dan heb je een (gratis) <strong>ORCID-account</strong> nodig.
            </p>
            <p>
              ORCID is een soort burgerservicenummer voor de wetenschappelijke
              wereld: het is een uniek nummer gekoppeld aan jouw persoon. Als je
              nog geen ORCID-account hebt, kan je er hier een aanmaken:{' '}
              <ExtLink href="https://orcid.org/register">
                orcid.org/register
              </ExtLink>
              . Het enige dat je nodig hebt is een werkend mailadres waar je
              toegang toe hebt.
            </p>
            <p>Met je ORCID-account kan je je rechtsboven aanmelden.</p>
          </DocSection>

          {/* ---- 3. Switchen ---- */}
          <DocSection
            id="switchen"
            number={3}
            title="Switchen tussen NeRu en STM"
          >
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
          </DocSection>

          {/* ---- 4. Overzicht ---- */}
          <DocSection
            id="overzicht"
            number={4}
            title="Hoe ziet de tool re:Charted eruit?"
          >
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                {
                  title: 'Linkerpaneel',
                  desc: 'Een overzicht van de beschikbare kaarten.',
                },
                {
                  title: 'Middenpaneel',
                  desc: 'Het kaartscherm (nadere uitleg hieronder).',
                },
                {
                  title: 'Rechterpaneel',
                  desc: 'Drie tabbladen — Info, Annotations, Map.',
                },
              ].map((panel) => (
                <div
                  key={panel.title}
                  className="rounded-sm bg-(--cream) p-4 ring-1 ring-ink/5"
                >
                  <p className="mb-1 text-sm font-semibold text-ink">
                    {panel.title}
                  </p>
                  <p className="text-xs text-ink/60">{panel.desc}</p>
                </div>
              ))}
            </div>
          </DocSection>

          {/* ---- 5. De Basis ---- */}
          <DocSection
            id="basis"
            number={5}
            title="De basis: kaarten bekijken"
            badge="Middenpaneel · Info-tabblad"
          >
            <p>
              In het linkerpaneel selecteer je een kaart naar keuze. In het
              middenpaneel kun je de historische kaarten tot in de kleinste
              details bestuderen. In het rechterpaneel (Info-tabblad) vind je
              informatie over de kaart en onder andere een link naar de
              bewaarplaats.
            </p>
            <ul className="list-inside list-disc space-y-1.5">
              <li>
                <strong>Slepen:</strong> Klik en houd de muisknop ingedrukt om
                de kaart te bewegen.
              </li>
              <li>
                <strong>Zoomen:</strong> Gebruik je muiswieltje of de knoppen op
                het scherm om in en uit te zoomen (net als bij Google Maps).
              </li>
              <li>
                <strong>Draaien:</strong> Je kunt de kaart een slag draaien als
                de tekst ondersteboven staat.
              </li>
              <li>
                <strong>Volledig scherm:</strong> Gebruik deze knop voor een
                rustig beeld zonder afleiding.
              </li>
              <li>
                <strong>Mini-kaart:</strong> Als je bent ingezoomd zie je in het
                minikaartje waar je je bevindt op de kaart.
              </li>
            </ul>
            <VideoLink href="https://necessaryreunions.org/video/neru_recharted_annotation-tab-view-mode.mp4">
              Video: kaartinformatie bekijken
            </VideoLink>
          </DocSection>

          {/* ---- 6. Oud op Nieuw ---- */}
          <DocSection
            id="oud-op-nieuw"
            number={6}
            title="Oud op Nieuw (Map-tab)"
          >
            <p>
              In dit venster kun je de historische kaart vergelijken met de
              wereld van nu. Deze functie is nog niet actief. Zodra deze functie
              actief is en de kaart is gegeorefereerd kan je de oude kaart over
              de moderne OpenStreetMaps-kaart leggen. Met een schuifbalk kun je
              de oude kaart doorzichtig maken. Zo zie je precies waar een oud
              fort of dorp nu zou liggen op een moderne landkaart.
            </p>
          </DocSection>

          {/* ---- 7. Verrijkingen door annotaties ---- */}
          <DocSection
            id="annotaties"
            number={7}
            title="Verrijkingen door annotaties"
            badge="Annotation-tabblad"
          >
            <p>
              Dit is de kern van de tool: in dit tabblad kunnen we de informatie
              van de kaart halen zodat deze doorzoekbaar wordt en kan worden
              gekoppeld aan andere bronnen. We hebben met kunstmatige
              intelligentie (AI) al geprobeerd op de kaart geschreven teksten te
              herkennen en te lezen. Soms werkt dit, maar lang niet altijd: de
              computer ziet veel tekst over het hoofd en kan de tekst ook niet
              altijd goed lezen. Hier kan jij dus helpen!
            </p>
            <p>
              Alle informatie die we van de kaart overnemen, noemen we{' '}
              <strong>annotaties</strong>: het zijn eigenlijk opmerkingen die
              horen bij een specifieke plek op de kaart. Er zijn twee soorten
              annotaties: <strong>teksten</strong> (bijvoorbeeld de naam van een
              plaats) en <strong>iconen</strong> (dat kan een symbool zijn van
              een vuurtoren, maar ook het perceel van een plantage). Tijdens de
              mapathon richten we ons alleen op de teksten, de iconen doen we
              een volgende keer.
            </p>
            <p>
              In de filteropties kan je bepalen of je teksten en/of iconen ziet
              en of je door AI en/of door mensen gemaakte annotaties wil zien.
              Er is ook een zoekveld waarmee je bestaande annotaties kan
              doorzoeken.{' '}
              <strong>
                Let op: als er veel annotaties zijn, kan het even duren voordat
                de pagina wordt ingeladen!
              </strong>
            </p>
            <p>
              Onder het zoekveld zie je hoeveel annotaties er zijn op de gekozen
              kaart en hoeveel daarvan door mensen is bewerkt. Daaronder begint
              de daadwerkelijke lijst met annotaties.
            </p>
          </DocSection>

          {/* ---- 8. Annotaties verbeteren en toevoegen ---- */}
          <DocSection
            id="taken"
            number={8}
            title="Annotaties verbeteren en toevoegen"
          >
            <p>
              Voor de mapathon richten we ons op <strong>3 taken</strong>:
            </p>
            <ol className="list-inside list-decimal space-y-2">
              <li>
                <strong>
                  Het markeren van tekstvelden op de kaart waar tekst is
                  geschreven
                </strong>{' '}
                — ofwel verbeteren of bevestigen van AI, ofwel het tekenen van
                nieuwe tekstvelden.
              </li>
              <li>
                <strong>Het verbeteren van de inhoud van de tekstvelden</strong>{' '}
                — verbeteren of bevestigen van AI, of tekst invullen.
              </li>
              <li>
                <strong>Koppelen van verbonden tekstvelden</strong> — Als één
                begrip uit meerdere woorden bestaat, is het van belang dat we de
                velden koppelen. Bijvoorbeeld:{' '}
                <em>&lsquo;Houtgrond Weltevreeden&rsquo;</em> bestaat uit 2
                woorden die één begrip vormen. Hetzelfde geldt voor de{' '}
                <em>&lsquo;Rust en Vredestraat&rsquo;</em>.
              </li>
            </ol>

            <div className="mt-4 rounded-sm border border-ink/5 bg-sand px-5 py-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-strong">
                Optioneel voor de liefhebber
              </p>
              <div className="space-y-3">
                <p>
                  <strong>Linken aan locaties.</strong> Een annotatie is alleen
                  nog een naam op een kaart. Als je zeker weet dat die naam
                  correspondeert met een bekende locatie, is het waardevol om
                  die koppeling te maken. We maken daarbij vooral gebruik van{' '}
                  <ExtLink href="https://www.wikidata.org/">Wikidata</ExtLink>,
                  omdat de meeste plantages daar in zijn vermeld.
                </p>
                <p>
                  De in het vorige voorbeeld genoemde houtgrond Weltevreden: is
                  dat de plantage aan de{' '}
                  <ExtLink href="https://www.wikidata.org/wiki/Q124805954">
                    Commewijne
                  </ExtLink>
                  ,{' '}
                  <ExtLink href="https://www.wikidata.org/wiki/Q2854713">
                    Surinamerivier
                  </ExtLink>{' '}
                  of{' '}
                  <ExtLink href="https://www.wikidata.org/wiki/Q124805910">
                    Saramacca
                  </ExtLink>
                  ? Je kan het Q-nummer van Wikidata invoeren en dan verschijnt
                  de plantage. Vergeet niet te saven!
                </p>
              </div>
            </div>
          </DocSection>

          {/* ---- 9. Bewerkmodus ---- */}
          <DocSection
            id="bewerkmodus"
            number={9}
            title="Zelf markeringen aanpassen"
            badge="Annotation-tab · Bewerkmodus"
          >
            <p>
              Om aanpassingen te kunnen doen, moet je zijn aangemeld (zie
              stap&nbsp;2).
            </p>

            <div className="mt-2 space-y-5">
              <SubStep title="Tekstvelden aanpassen: verwijderen, corrigeren, samenvoegen">
                <p>
                  Soms maakt de computer een fout, bijvoorbeeld een vlek die als
                  tekst wordt gezien. Soms zijn tekstvelden over elkaar
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
                <VideoLink href="https://necessaryreunions.org/video/neru_recharted_correct.mp4">
                  Video: tekstveld aanpassen
                </VideoLink>
                <p className="mt-3">
                  Als er bijvoorbeeld per ongeluk twee tekstvelden zijn
                  aangemaakt voor één woord, dan kan je één veld verwijderen en
                  het andere veld aanpassen zodat het om het hele woord past. Je
                  kan ook meteen de inhoud van het tekstveld aanpassen.
                </p>
                <VideoLink href="https://necessaryreunions.org/video/neru_recharted_deleting.mp4">
                  Video: meerdere tekstvelden verwijderen
                </VideoLink>
              </SubStep>

              <SubStep title="Nieuwe tekstvelden aanmaken">
                <p>
                  De computer ziet regelmatig tekst over het hoofd. In dat geval
                  kan je zelf een nieuw tekstveld aanmaken. Klik op het icoon
                  met de <strong>T en een potlood</strong>. Teken het veld om de
                  tekst heen en klik op het groene vinkje om te bevestigen.
                  Vervolgens kan je de tekst in het tekstveld invoeren (ook weer
                  bevestigen met groen vinkje).
                </p>
                <VideoLink href="https://necessaryreunions.org/video/neru_recharted_addnew.mp4">
                  Video: nieuwe tekstvelden aanmaken
                </VideoLink>
              </SubStep>

              <SubStep title="Tekstvelden koppelen">
                <p>
                  Vaak zijn er meerdere woorden die samen een naam vormen.
                  Eerder werd het voorbeeld al genoemd van{' '}
                  <em>&lsquo;Houtgrond Weltevreeden&rsquo;</em>. We willen deze
                  woorden aan elkaar koppelen zodat we weten dat dit één term
                  is.
                </p>
                <p>Hoe doe je dit?</p>
                <ol className="list-inside list-decimal space-y-1.5">
                  <li>
                    Klik op de annotatie die je wil koppelen. Je kan eventueel
                    de tekst verbeteren.
                  </li>
                  <li>
                    Onder de tekst zie je een blokje <strong>Enrichment</strong>{' '}
                    en daarin het kopje <strong>Link annotations</strong>.
                  </li>
                  <li>
                    Klik daarop — er verschijnt een knop{' '}
                    <strong>+ Start selecting</strong>.
                  </li>
                  <li>
                    Klik op de kaart de verschillende tekstvelden aan. Let op
                    dat je de goede volgorde aanhoudt (af te lezen aan de
                    nummers die de tekstvelden krijgen).
                  </li>
                  <li>
                    Als je de juiste tekstvelden hebt aangeklikt, klik je op{' '}
                    <strong>Save</strong>.
                  </li>
                </ol>
              </SubStep>

              <SubStep title="Teksten verbeteren of invoeren">
                <p>
                  Door AI gelezen teksten kunnen worden gecontroleerd en
                  verbeterd. Als AI de tekst goed heeft gelezen, bevestig dan
                  dat de tekst correct is door op het <strong>potloodje</strong>{' '}
                  naast de tekst te klikken. Als de tekst moet worden verbeterd,
                  kan dat in het tekstveld, gevolgd door bevestiging met het
                  groene vinkje.
                </p>
                <p>
                  Neem de tekst zo exact mogelijk over: afkortingen,
                  interpunctie, hoofdlettergebruik. Bij twijfel kan je ook
                  altijd een comment achterlaten (<em>Add a comment</em>).
                </p>
              </SubStep>

              <SubStep title="Voor de liefhebber: koppelen locatie">
                <p>
                  In de mapathon ligt de nadruk op het in orde maken van de
                  tekstvelden en de teksten. Een volgende stap is het koppelen
                  met locatiegegevens, zoals de namen van plaatsen, plantages,
                  straatnamen enzovoorts. We richten ons daarbij vooral op{' '}
                  <ExtLink href="https://www.wikidata.org/">Wikidata</ExtLink>.
                </p>
                <p>
                  Je kan het beste eerst de locatie opzoeken op{' '}
                  <ExtLink href="https://www.wikidata.org/">
                    wikidata.org
                  </ExtLink>{' '}
                  en als je zeker bent dat het de juiste is, het unieke Q-nummer
                  invoeren:{' '}
                  <strong>
                    Add Location → zoekveld &lsquo;Search for a place&rsquo; →
                    Q-nummer invoeren → juiste item aanklikken → Save
                  </strong>
                  .
                </p>
                <VideoLink href="https://necessaryreunions.org/video/neru_recharted_linking.mp4">
                  Video: tekst koppelen aan een locatie
                </VideoLink>
              </SubStep>
            </div>
          </DocSection>
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
