import Image from 'next/image';
import Link from 'next/link';
import { hackalod2026 } from '../../content/hackalod2026.nl';
import {
  STORY_IMAGE_BASE,
  stories,
  storyImages,
  type ImageGroup,
  type StoryImage,
  type StorySlug,
} from '../../content/hackalod2026Stories';
import { HackalodShell } from './HackalodShell';

const mapToken = /\[([^\]]+)\]\((?:p|g):[^)\s]+\)/g;

/** Story text with the map tokens [words](p:id) / [words](g:id) shown as plain words. */
function plain(text: string): string {
  return text.replace(mapToken, '$1');
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
    <div
      key={`group-${group.items[0]?.file ?? group.layout}`}
      className={
        group.layout === 'single'
          ? 'mt-6 space-y-6'
          : 'mt-6 grid items-start gap-4 sm:grid-cols-2'
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
  ));
}

export function HackalodStoryPage({ slug }: { slug: StorySlug }) {
  const story = stories[slug];
  const visuals = storyImages[slug];
  const chapterNumbers: Record<string, number> =
    slug === 'door-dezelfde-poort'
      ? {
          'Een wachtkamer als beginpunt': 1,
          'De Donners': 4,
          Vader: 5,
          'Door dezelfde poort': 7,
        }
      : {};
  const back = `${hackalod2026.path}#verhalen`;

  return (
    <HackalodShell>
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Link href={back} className="text-sm text-teal-strong hover:underline">
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
      </main>

      {visuals && (
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <StoryFigure image={visuals.hero} folder={visuals.folder} hero />
        </div>
      )}

      <div className="mx-auto max-w-3xl space-y-12 px-4 py-12 sm:px-6">
        {story.sections.map((section, index) => {
          const ending =
            section.heading === 'Gebleven' ||
            ('ending' in section && section.ending);
          return (
            <section
              key={`section-${section.heading}`}
              className={
                ending ? 'rounded-sm bg-sand p-6 ring-1 ring-ink/5' : ''
              }
            >
              {!ending && (
                <p className="text-sm font-semibold text-teal-strong">
                  {String(
                    chapterNumbers[section.heading] ?? index + 1,
                  ).padStart(2, '0')}
                </p>
              )}
              <h2 className="mb-4 text-2xl font-semibold text-ink">
                {section.heading}
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-ink/80">
                {paragraphs(section.text).map((text) => (
                  <p key={`text-${text}`}>{plain(text)}</p>
                ))}
              </div>
              {visuals && (
                <ChapterImages
                  groups={visuals.chapters[section.heading]}
                  folder={visuals.folder}
                />
              )}
            </section>
          );
        })}

        <footer className="border-t border-ink/10 pt-6 text-sm leading-relaxed text-ink/60">
          {'sources' in story ? (
            <p>{story.sources}</p>
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
    </HackalodShell>
  );
}
