import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { hackalod2026 } from '../../content/hackalod2026.nl';
import {
  STORY_IMAGE_BASE,
  stories,
  storyImages,
  type FamilyTree,
  type ImageGroup,
  type StoryImage,
  type TreePerson,
  type StorySlug,
} from '../../content/hackalod2026Stories';
import { HackalodShell } from './HackalodShell';

const mapToken = /\[([^\]]+)\]\((?:p|g):[^)\s]+\)/g;

/** Story text with the map tokens [words](p:id) / [words](g:id) shown as plain words. */
function plain(text: string): string {
  return text.replace(mapToken, '$1');
}

const storyLink = /\[([^\]]+)\]\(s:([a-z0-9-]+)\)/g;

/** A paragraph in which [words](s:slug) becomes a link to another story. */
function Paragraph({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of plain(text).matchAll(storyLink)) {
    const at = match.index;
    parts.push(match.input.slice(last, at));
    parts.push(
      <Link
        key={`link-${match[2]}`}
        href={`${hackalod2026.path}/verhalen/${match[2]}`}
        className="text-teal-strong underline"
      >
        {match[1]}
      </Link>,
    );
    last = at + match[0].length;
  }
  parts.push(plain(text).slice(last));
  return <p>{parts}</p>;
}

type Section = {
  heading: string;
  text: string | readonly string[];
  ending?: boolean;
  quote?: { text: string; by?: string };
  tree?: FamilyTree;
  events?: readonly { year: string; text: string }[];
  after?: readonly string[];
};

type StoryExtras = {
  meta?: string;
  sources?: string;
  sourceList?: readonly string[];
  timeline?: readonly { date: string; text: string }[];
};

function Quote({ quote }: { quote: NonNullable<Section['quote']> }) {
  return (
    <blockquote className="my-8 border-l-2 border-teal-strong pl-5">
      <p className="text-xl italic leading-snug text-teal-strong">
        “{quote.text}”
      </p>
      {quote.by && (
        <footer className="mt-2 text-sm text-ink/60">— {quote.by}</footer>
      )}
    </blockquote>
  );
}

function TreeCard({ person }: { person: TreePerson }) {
  return (
    <div
      className={`rounded-sm px-3 py-2 text-center ${
        person.highlight
          ? 'bg-teal-strong/10 ring-1 ring-teal-strong'
          : person.minor
            ? 'border border-dashed border-ink/20 bg-white/60'
            : 'bg-white ring-1 ring-ink/10'
      }`}
    >
      <p
        className={
          person.minor
            ? 'text-xs text-ink/60'
            : 'text-sm font-semibold text-ink'
        }
      >
        {person.name}
      </p>
      {person.detail && (
        <p className="mt-0.5 text-xs text-ink/60">{person.detail}</p>
      )}
    </div>
  );
}

const Connector = () => (
  <div aria-hidden className="mx-auto h-4 w-px bg-ink/20" />
);

function FamilyTreeView({ tree }: { tree: FamilyTree }) {
  return (
    <figure className="mt-8 rounded-sm bg-sand p-4 ring-1 ring-ink/5 sm:p-6">
      <figcaption className="mb-5 text-center text-xs uppercase tracking-[0.15em] text-ink/60">
        {tree.title}
      </figcaption>
      <div className="grid gap-8 sm:grid-cols-2 sm:gap-4">
        {tree.branches.map((branch) => (
          <ol key={`branch-${branch[0]?.name}`}>
            {branch.map((person, i) => (
              <li key={`person-${person.name}`}>
                {i > 0 && <Connector />}
                <TreeCard person={person} />
              </li>
            ))}
          </ol>
        ))}
      </div>
      <Connector />
      {tree.join && (
        <p className="text-center text-xs italic text-ink/60">{tree.join}</p>
      )}
      {tree.join && <Connector />}
      <div className="grid items-center gap-2 sm:grid-cols-[1fr_auto_1fr]">
        {tree.couple.map((person, i) => (
          <div key={`couple-${person.name}`} className="contents">
            {i > 0 && (
              <span className="text-center text-lg text-teal-strong">
                &amp;
              </span>
            )}
            <TreeCard person={person} />
          </div>
        ))}
      </div>
      <ol className="mx-auto max-w-xs">
        {tree.descendants.map((person) => (
          <li key={`desc-${person.name}`}>
            <Connector />
            <TreeCard person={person} />
          </li>
        ))}
      </ol>
      {tree.note && (
        <p className="mt-4 text-center text-xs text-ink/60">{tree.note}</p>
      )}
    </figure>
  );
}

function paragraphs(text: string | readonly string[]): string[] {
  return (typeof text === 'string' ? [text] : [...text]).filter(Boolean);
}

function StoryFigure({
  image,
  folder,
  hero = false,
}: {
  image: StoryImage;
  folder: string;
  hero?: boolean;
}) {
  const base = `${STORY_IMAGE_BASE}/${folder}/`;
  const picture = (
    <Image
      src={`${base}${image.file}`}
      alt={image.caption}
      width={image.width}
      height={image.height}
      className="h-auto w-full rounded-sm"
    />
  );
  const link = image.full ? `${base}${image.full}` : image.href;
  return (
    <figure
      className={hero ? 'w-full' : 'mx-auto w-full'}
      style={
        !hero && image.displayWidth
          ? { maxWidth: image.displayWidth }
          : undefined
      }
    >
      {link ? (
        <a href={link} target="_blank" rel="noreferrer">
          {picture}
        </a>
      ) : (
        picture
      )}
      <figcaption className="mt-2 text-sm leading-relaxed text-ink/60">
        {image.caption}
        {image.full && (
          <>
            {' '}
            <a
              className="text-teal-strong underline"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              Bekijk de volledige krantenpagina ↗
            </a>
          </>
        )}
        {!image.full && image.href && (
          <>
            {' '}
            <a
              className="text-teal-strong underline"
              href={image.href}
              target="_blank"
              rel="noreferrer"
            >
              Bekijk de bron ↗
            </a>
          </>
        )}
      </figcaption>
    </figure>
  );
}

function ChapterImages({
  groups,
  folder,
}: {
  groups?: ImageGroup[];
  folder: string;
}) {
  if (!groups) return null;
  return groups.map((group) => (
    <div key={`group-${group.items[0]?.file ?? group.layout}`} className="mt-6">
      {group.label && (
        <p className="mb-3 text-xs uppercase tracking-[0.15em] text-ink/50">
          {group.label}
        </p>
      )}
      <div
        className={
          group.layout === 'single'
            ? 'space-y-6'
            : 'grid items-start gap-4 sm:grid-cols-2'
        }
      >
        {group.items.map((image) => (
          <StoryFigure
            key={`image-${image.file}`}
            image={image}
            folder={folder}
          />
        ))}
      </div>
    </div>
  ));
}

export function HackalodStoryPage({ slug }: { slug: StorySlug }) {
  const story = stories[slug];
  const visuals = storyImages[slug];
  const extras = story as StoryExtras;
  const sections = story.sections as readonly Section[];
  const back = `${hackalod2026.path}#verhalen`;

  return (
    <HackalodShell>
      <main>
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <Link
            href={back}
            className="text-sm text-teal-strong hover:underline"
          >
            ← I Was Here · HackaLOD 2026
          </Link>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-ink/50">
            {story.category}
          </p>
          <h1 className="mt-2 text-4xl font-semibold leading-tight text-ink sm:text-5xl [&_em]:text-teal-strong">
            {story.title}
          </h1>
          <p className="mt-2 text-xl text-ink/70">{story.subtitle}</p>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            {plain(story.introduction)}
          </p>
          {extras.meta && (
            <p className="mt-4 text-sm text-ink/50">{extras.meta}</p>
          )}
        </div>

        {visuals && (
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <StoryFigure image={visuals.hero} folder={visuals.folder} hero />
          </div>
        )}

        <div className="mx-auto max-w-3xl space-y-12 px-4 py-12 sm:px-6">
          {sections.map((section, index) => {
            const ending = section.heading === 'Gebleven' || section.ending;
            return (
              <section
                key={`section-${section.heading}`}
                className={
                  ending ? 'rounded-sm bg-sand p-6 ring-1 ring-ink/5' : ''
                }
              >
                {!ending && (
                  <p className="text-sm font-semibold text-teal-strong">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                )}
                <h2 className="mb-4 text-2xl font-semibold text-ink">
                  {section.heading}
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-ink/80">
                  {paragraphs(section.text).map((text) => (
                    <Paragraph key={`text-${text}`} text={text} />
                  ))}
                </div>
                {section.events && (
                  <dl className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
                    {section.events.map((event) => (
                      <div
                        key={`event-${event.year}`}
                        className="grid grid-cols-[4rem_1fr] gap-4 py-3 text-sm leading-relaxed"
                      >
                        <dt className="font-semibold text-teal-strong">
                          {event.year}
                        </dt>
                        <dd className="text-ink/80">{event.text}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                {section.after && (
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/80">
                    {section.after.map((text) => (
                      <Paragraph key={`after-${text}`} text={text} />
                    ))}
                  </div>
                )}
                {section.quote && <Quote quote={section.quote} />}
                {section.tree && <FamilyTreeView tree={section.tree} />}
                {visuals && (
                  <ChapterImages
                    groups={visuals.chapters[section.heading]}
                    folder={visuals.folder}
                  />
                )}
              </section>
            );
          })}

          {extras.timeline && (
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-ink">Tijdlijn</h2>
              <dl className="divide-y divide-ink/10 border-y border-ink/10">
                {extras.timeline.map((item) => (
                  <div
                    key={`timeline-${item.date}-${item.text}`}
                    className="grid grid-cols-[6.5rem_1fr] gap-4 py-2.5 text-sm leading-relaxed"
                  >
                    <dt className="font-semibold text-teal-strong">
                      {item.date}
                    </dt>
                    <dd className="text-ink/80">{item.text}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          <footer className="border-t border-ink/10 pt-6 text-sm leading-relaxed text-ink/60">
            {extras.sourceList ? (
              <>
                <h2 className="mb-3 text-base font-semibold text-ink">
                  Bronnen
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  {extras.sourceList.map((source) => (
                    <li key={`source-${source}`}>{source}</li>
                  ))}
                </ul>
              </>
            ) : extras.sources ? (
              <p>{extras.sources}</p>
            ) : (
              <p>Dit verhaal wordt verder aangevuld.</p>
            )}
            <Link
              href={back}
              className="mt-4 inline-block font-semibold text-teal-strong"
            >
              ← Alle verhalen
            </Link>
          </footer>
        </div>
      </main>
    </HackalodShell>
  );
}
