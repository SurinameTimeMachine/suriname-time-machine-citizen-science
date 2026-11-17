import Image from 'next/image';
import Link from 'next/link';
import {
  GEOBUZZ_BASE,
  GEOBUZZ_PDF,
  geobuzz2026,
} from '../../content/geobuzz2026.nl';
import { Eyebrow, HackalodShell } from '../hackalod/HackalodShell';

const pct = (n: number) => `${(n * 100).toFixed(2)}%`;

/** De Geobuzz-presentatie als doorscrolbare dia's, met bewegend beeld op de dia's zelf. */
export function GeobuzzPage() {
  const c = geobuzz2026;

  return (
    <HackalodShell>
      <main className="mx-auto max-w-5xl px-4 pb-20 pt-10 sm:px-6 lg:px-10">
        <Link
          href="/output"
          className="inline-flex min-h-11 items-center text-sm underline decoration-teal-strong/60 underline-offset-4 hover:decoration-2"
        >
          ← {c.backToOutput}
        </Link>

        <header className="mt-6 mb-10">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h1 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            {c.title}
          </h1>
          <p className="mt-2 text-lg text-ink/80">{c.subtitle}</p>
          <p className="mt-2 text-sm text-ink/60">{c.meta}</p>
          <p className="mt-6 max-w-3xl text-base leading-7 text-ink/85">
            {c.lead}
          </p>
          <a
            href={GEOBUZZ_PDF}
            download
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 bg-ink px-6 py-3 font-semibold text-white! transition-colors hover:bg-teal-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink sm:w-auto"
          >
            {c.download}
            <span aria-hidden="true">↓</span>
          </a>
        </header>

        <ol className="space-y-10">
          {c.slides.map((slide, i) => {
            const n = String(i + 1).padStart(2, '0');
            return (
              <li key={`dia-${n}`} id={`dia-${i + 1}`}>
                <figure>
                  <div className="relative overflow-hidden border border-ink/10 bg-white shadow-[0_15px_35px_rgba(0,30,24,0.08)]">
                    <Image
                      src={`${GEOBUZZ_BASE}/dias/dia-${n}.webp`}
                      alt={`Dia ${i + 1}: ${slide.title}`}
                      width={1600}
                      height={900}
                      sizes="(min-width: 1024px) 960px, 100vw"
                      className="h-auto w-full"
                      priority={i === 0}
                    />
                    {slide.video && (
                      <video
                        className="absolute object-cover"
                        style={{
                          left: pct(slide.video.left),
                          top: pct(slide.video.top),
                          width: pct(slide.video.width),
                          height: pct(slide.video.height),
                        }}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        aria-hidden="true"
                      >
                        <source src={slide.video.src} type="video/mp4" />
                      </video>
                    )}
                  </div>
                  <figcaption className="mt-2 text-sm text-ink/70">
                    <span className="tabular-nums text-ink/50">{i + 1}.</span>{' '}
                    {slide.title}
                    {slide.text && (
                      <span className="sr-only"> {slide.text}</span>
                    )}
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ol>
      </main>
    </HackalodShell>
  );
}
