import Image from 'next/image';
import Link from 'next/link';
import {
  HACKALOD_BASE,
  hackalod2026 as c,
  type HackalodVideo,
} from '../../content/hackalod2026.nl';
import {
  offlineStories,
  storyOverview,
  storyOverviewImageSizes,
} from '../../content/hackalod2026Stories';
import { Eyebrow, HackalodShell } from './HackalodShell';

function Video({ video }: { video: HackalodVideo }) {
  return (
    <figure className={video.portrait ? 'mx-auto w-full max-w-xs' : 'w-full'}>
      {/* No caption files exist yet for these recordings. */}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        className="w-full rounded-sm bg-black shadow-[0_4px_20px_rgba(0,30,24,0.12)]"
        controls
        preload="none"
        playsInline
        poster={video.poster}
      >
        <source src={video.src} type="video/mp4" />
      </video>
      <figcaption className="mt-3 text-sm text-ink/70">
        <span className="font-semibold text-ink">{video.title}</span>{' '}
        {video.caption}
      </figcaption>
    </figure>
  );
}

function YouTubeVideo({
  video,
}: {
  video: NonNullable<typeof c.projectionVideo>;
}) {
  return (
    <figure className="w-full">
      <div className="aspect-video min-h-[200px] w-full overflow-hidden rounded-sm bg-black shadow-[0_4px_20px_rgba(0,30,24,0.12)]">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
          title={video.title}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <figcaption className="mt-3 text-sm text-ink/70">
        <span className="font-semibold text-ink">{video.title}</span>{' '}
        {video.caption}
      </figcaption>
    </figure>
  );
}

type Part = (typeof c.parts.items)[number];

/** Animated GIF or looping muted clip for a part, with the slide as fallback. */
function PartMedia({ part }: { part: Part }) {
  const fit =
    part.animation?.fit === 'contain'
      ? 'object-contain bg-[#f2eee7]'
      : 'object-cover';
  if (part.animation?.kind === 'video') {
    return (
      <video
        className={`aspect-video w-full ${fit}`}
        autoPlay
        muted
        loop
        playsInline
        poster={part.image}
        aria-label={part.alt}
      >
        <source src={part.animation.src} type="video/mp4" />
      </video>
    );
  }
  return (
    <Image
      src={part.animation?.src ?? part.image}
      alt={part.alt}
      width={1600}
      height={900}
      unoptimized={part.animation?.kind === 'gif'}
      className={`aspect-video w-full ${fit}`}
    />
  );
}

function SectionHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="mb-8 max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-2xl font-semibold leading-tight text-ink sm:text-3xl">
        {title}
      </h2>
      {lead && (
        <p className="mt-4 text-lg leading-relaxed text-ink/75">{lead}</p>
      )}
    </header>
  );
}

const card =
  'rounded-sm bg-white shadow-[0_4px_20px_rgba(0,30,24,0.08)] ring-1 ring-ink/5';

export function HackalodReportPage() {
  return (
    <HackalodShell>
      <section className="hero-surface px-4 py-16 sm:px-6 lg:px-10">
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[3fr_2fr]">
          <div>
            <Link
              href="/projects"
              className="mb-6 inline-block text-sm text-white/70 hover:text-white"
            >
              ← Projecten
            </Link>
            <Eyebrow light>{c.hero.eyebrow}</Eyebrow>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              {c.hero.title}
            </h1>
            <p className="mt-2 text-xl text-white/85 sm:text-2xl">
              {c.hero.subtitle}
            </p>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              {c.hero.lead}
            </p>
            <p className="mt-8 text-sm text-white/70">
              <span className="font-semibold text-white">
                {c.hero.teamLabel}
              </span>
              <br />
              {c.hero.team}
            </p>
          </div>
          {/* Juryprijs */}
          <figure>
            <Image
              src={c.hero.prizePhoto.src}
              alt={c.hero.prizePhoto.alt}
              width={c.hero.prizePhoto.width}
              height={c.hero.prizePhoto.height}
              priority
              className="w-full rounded-sm shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
            />
            <figcaption className="mt-3 text-sm text-white/75">
              {c.hero.prizePhoto.caption}
            </figcaption>
          </figure>
        </div>
      </section>

      <main className="mx-auto max-w-6xl space-y-20 px-4 py-14 sm:px-6 lg:px-10">
        {/* De vraag */}
        <section>
          <SectionHeader
            eyebrow={c.question.eyebrow}
            title={c.question.title}
          />
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr]">
            <div className="space-y-4 text-base leading-relaxed text-ink/80">
              {c.question.body.map((p) => (
                <p key={`p-${p}`}>{p}</p>
              ))}
            </div>
            <div className="space-y-4">
              <figure>
                <Image
                  src={c.question.image.src}
                  alt={c.question.image.alt}
                  width={c.question.image.width}
                  height={c.question.image.height}
                  className={`${card} w-full`}
                />
                <figcaption className="mt-2 text-sm text-ink/60">
                  {c.question.image.caption}
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Drie onderdelen */}
        <section>
          <SectionHeader eyebrow={c.parts.eyebrow} title={c.parts.title} />
          <div className="grid gap-6 md:grid-cols-3">
            {c.parts.items.map((part) => (
              <article
                key={`part-${part.title}`}
                className={`${card} overflow-hidden`}
              >
                <PartMedia part={part} />
                <div className="p-5">
                  <h3 className="mb-2 text-lg font-semibold text-ink">
                    {part.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink/75">
                    {part.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 grid items-start gap-8 md:grid-cols-[2fr_1fr]">
            {c.videos.map((video) => (
              <Video key={`video-${video.src}`} video={video} />
            ))}
          </div>
        </section>

        {/* Schermopname (verschijnt zodra de video is toegevoegd) */}
        {(c.screenRecording ?? c.projectionVideo) && (
          <section>
            <SectionHeader eyebrow="Demo" title="Zo werkt het" />
            <div className="space-y-10">
              {c.screenRecording && <Video video={c.screenRecording} />}
              {c.projectionVideo && <YouTubeVideo video={c.projectionVideo} />}
            </div>
          </section>
        )}

        {/* Koppelfunctie */}
        <section>
          <SectionHeader
            eyebrow={c.linking.eyebrow}
            title={c.linking.title}
            lead={c.linking.lead}
          />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {c.linking.steps.map((step, i) => (
              <li
                key={`step-${step.title}`}
                className={`${card} border-t-4 border-teal-strong p-5`}
              >
                <p className="text-xs font-semibold text-teal-strong">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-1 mb-2 font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink/75">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-xl font-semibold text-teal-strong">
            {c.linking.motto}
          </p>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink/75">
            {c.linking.extra}
          </p>
        </section>

        {/* Verhalen */}
        <section id="verhalen">
          <SectionHeader
            eyebrow={c.stories.eyebrow}
            title={c.stories.title}
            lead={c.stories.lead}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {storyOverview
              .filter((story) => !offlineStories.has(story.slug))
              .map((story) => {
                const [w, h] = storyOverviewImageSizes[story.slug] ?? [
                  604, 408,
                ];
                return (
                  <Link
                    key={`story-${story.slug}`}
                    href={`${c.path}/verhalen/${story.slug}`}
                    className={`${card} group flex flex-col overflow-hidden transition-all hover:ring-teal-strong/20`}
                  >
                    <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                      <Image
                        src={story.image}
                        alt={story.alt}
                        width={w}
                        height={h}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-2 p-5">
                      <p className="text-[11px] uppercase tracking-[0.15em] text-ink/50">
                        {story.eyebrow}
                      </p>
                      <h3 className="text-xl font-semibold text-ink group-hover:text-teal-strong">
                        {story.title}
                      </h3>
                      <p className="text-sm font-medium text-ink/70">
                        {story.subtitle}
                      </p>
                      <p className="flex-1 text-sm leading-relaxed text-ink/70">
                        {story.description}
                      </p>
                      <span className="mt-2 text-sm font-semibold text-teal-strong">
                        Lees het verhaal →
                      </span>
                    </div>
                  </Link>
                );
              })}
          </div>
        </section>

        {/* Eerlijk over de demo */}
        <section>
          <SectionHeader eyebrow={c.honest.eyebrow} title={c.honest.title} />
          <div className="grid gap-6 md:grid-cols-3">
            <div className={`${card} p-6`}>
              <h3 className="mb-3 font-semibold text-teal-strong">
                Werkt echt
              </h3>
              <ul className="list-disc space-y-1 pl-5 text-sm text-ink/80">
                {c.honest.works.map((x) => (
                  <li key={`x-${x}`}>{x}</li>
                ))}
              </ul>
            </div>
            <div className={`${card} p-6`}>
              <h3 className="mb-3 font-semibold text-ink">Nog niet</h3>
              <ul className="list-disc space-y-1 pl-5 text-sm text-ink/80">
                {c.honest.notYet.map((x) => (
                  <li key={`x-${x}`}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-sm bg-sand p-6 ring-1 ring-ink/5">
              <h3 className="mb-3 font-semibold text-ink">Spelregels</h3>
              <ul className="list-disc space-y-1 pl-5 text-sm text-ink/80">
                {c.honest.rules.map((x) => (
                  <li key={`x-${x}`}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink/75">
            {c.honest.note}
          </p>
        </section>

        {/* Architectuur */}
        <section>
          <SectionHeader
            eyebrow={c.architecture.eyebrow}
            title={c.architecture.title}
          />
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div className="space-y-4 text-base leading-relaxed text-ink/80">
              {c.architecture.body.map((p) => (
                <p key={`p-${p}`}>{p}</p>
              ))}
            </div>
            <a href={c.architecture.image} target="_blank" rel="noreferrer">
              <Image
                src={c.architecture.image}
                alt={c.architecture.alt}
                width={1600}
                height={900}
                className={`${card} w-full`}
              />
            </a>
          </div>
        </section>

        {/* Presentatie */}
        <section id="presentatie">
          <SectionHeader
            eyebrow={c.slides.eyebrow}
            title={c.slides.title}
            lead={c.slides.lead}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.slides.items.map((label, i) => {
              const src = `${HACKALOD_BASE}/dias/dia-${String(i + 1).padStart(2, '0')}.webp`;
              return (
                <a
                  key={`src-${src}`}
                  href={src}
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <Image
                    src={src}
                    alt={`Dia ${i + 1}: ${label}`}
                    width={1600}
                    height={900}
                    className={`${card} w-full transition group-hover:ring-teal-strong/30`}
                  />
                  <span className="mt-2 block text-xs text-ink/60">
                    {i + 1}. {label}
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        {/* Afsluiting */}
        <section className="border-t border-ink/10 pt-10">
          <p className="max-w-3xl text-2xl font-medium leading-snug text-ink">
            {c.links.closing}
          </p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink/75">
            {c.links.datasets}
          </p>
          <ul className="mt-6 flex flex-wrap gap-4 text-sm">
            {c.links.items.map((l) => (
              <li key={`l-${l.href}`}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex border border-teal-strong px-4 py-2 font-semibold text-teal-strong hover:bg-white"
                >
                  {l.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </HackalodShell>
  );
}
