import type {
  PresentationContent,
  SlideContent,
} from '../../content/presentationTypes';
import { RichText } from '../RichText';
import { EmbedGazetteer, EmbedRijksmuseum } from './EmbedFrame';
import { HexHeatmap } from './HexHeatmap';
import { IIIFViewer } from './IIIFViewer';
import { MetadataGapsChart } from './MetadataGapsChart';
import { QrCodes } from './QrCodes';
import { TimeMachineBrandMap } from './TimeMachineBrandMap';
import { TimeSlider } from './TimeSlider';

type SlideProps = {
  slide: SlideContent;
  index: number;
  total: number;
  meta: PresentationContent['meta'];
  ui: PresentationContent['ui'];
  printMode?: boolean;
};

const BG_CLASSES: Record<NonNullable<SlideContent['background']>, string> = {
  default: 'bg-white text-ink',
  hero: 'hero-surface text-white',
  cream: 'bg-(--cream) text-ink',
  deep: 'bg-(--deep-teal) text-white',
};

function SlideHeader({
  slide,
  printMode,
}: {
  slide: SlideContent;
  printMode?: boolean;
}) {
  if (!slide.eyebrow && !slide.title) return null;
  return (
    <header className={printMode ? 'mb-4' : 'mb-6 max-w-5xl'}>
      {slide.eyebrow ? (
        <p className="flag-label opacity-90">{slide.eyebrow}</p>
      ) : null}
      <h1 className="mt-3 text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
        {slide.title}
      </h1>
      {slide.subtitle ? (
        <p className="mt-3 text-pretty text-base opacity-80 sm:text-lg lg:text-xl">
          {slide.subtitle}
        </p>
      ) : null}
    </header>
  );
}

function SlideBody({ body }: { body: string[] }) {
  return (
    <div className="space-y-3 text-base leading-relaxed sm:text-lg">
      {body.map((p) => (
        <RichText key={p} className="text-pretty">
          {p}
        </RichText>
      ))}
    </div>
  );
}

function SlideBullets({ bullets }: { bullets: string[] }) {
  return (
    <ul className="space-y-2 text-base sm:text-lg">
      {bullets.map((b) => (
        <li key={b} className="flex gap-3">
          <span
            aria-hidden
            className="mt-2 inline-block size-2 shrink-0 -skew-x-12 bg-(--teal-bright)"
          />
          <span className="text-pretty">
            <RichText as="span">{b}</RichText>
          </span>
        </li>
      ))}
    </ul>
  );
}

function SlideInteractive({ slide }: { slide: SlideContent }) {
  if (!slide.component) return null;
  const props = (slide.componentProps ?? {}) as Record<string, unknown>;
  switch (slide.component) {
    case 'hexHeatmap':
    case 'surinameMap':
      return <HexHeatmap {...props} />;
    case 'timeSlider':
      return <TimeSlider {...props} />;
    case 'iiifViewer':
      return <IIIFViewer {...props} />;
    case 'metadataGapsChart':
      return <MetadataGapsChart />;
    case 'embedRijksmuseum':
      return <EmbedRijksmuseum />;
    case 'embedGazetteer':
      return <EmbedGazetteer />;
    case 'qrCodes':
      return <QrCodes {...props} />;
    case 'timeMachineBrandMap':
      return <TimeMachineBrandMap />;
    default:
      return null;
  }
}

export function Slide({
  slide,
  index,
  total,
  meta,
  ui,
  printMode,
}: SlideProps) {
  const bg = BG_CLASSES[slide.background ?? 'default'];

  const inner = (() => {
    switch (slide.layout) {
      case 'title':
        return (
          <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-8 py-16 lg:px-20">
            <p className="flag-label text-white/80">{slide.eyebrow}</p>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
              {slide.title}
            </h1>
            {slide.subtitle ? (
              <p className="mt-4 text-2xl text-(--teal-bright) sm:text-3xl">
                {slide.subtitle}
              </p>
            ) : null}
            {slide.body ? (
              <div className="mt-12 space-y-1 text-lg opacity-90">
                {slide.body.map((p) => (
                  <RichText key={p}>{p}</RichText>
                ))}
              </div>
            ) : null}
            <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm uppercase tracking-[0.3em] text-white/70">
              <span>{meta.conference}</span>
              <span aria-hidden>·</span>
              <span>{meta.date}</span>
              <span aria-hidden>·</span>
              <span>{meta.location}</span>
            </div>
          </div>
        );

      case 'split':
        return (
          <div className="mx-auto grid h-full max-w-7xl grid-cols-1 gap-10 px-8 py-12 lg:grid-cols-2 lg:px-16 lg:py-16">
            <div className="flex flex-col justify-center">
              <SlideHeader slide={slide} printMode={printMode} />
              {slide.body ? <SlideBody body={slide.body} /> : null}
            </div>
            <div className="flex flex-col justify-center">
              {slide.bullets ? (
                <div className="angled-card bg-white p-8 text-ink">
                  <SlideBullets bullets={slide.bullets} />
                </div>
              ) : null}
              {slide.component ? <SlideInteractive slide={slide} /> : null}
              {slide.media ? (
                <figure className="cut-corner">
                  {}
                  <img
                    src={slide.media.src}
                    alt={slide.media.alt}
                    className="block h-full w-full object-cover"
                  />
                  {slide.media.caption ? (
                    <figcaption className="bg-white/90 px-4 py-2 text-xs text-ink">
                      {slide.media.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ) : null}
            </div>
          </div>
        );

      case 'two-col':
        return (
          <div className="mx-auto grid h-full max-w-7xl grid-cols-1 gap-10 px-8 py-12 lg:grid-cols-[1fr_1.2fr] lg:px-16 lg:py-16">
            <div className="flex flex-col justify-center">
              <SlideHeader slide={slide} printMode={printMode} />
              {slide.body ? <SlideBody body={slide.body} /> : null}
              {slide.bullets ? (
                <div className="mt-6">
                  <SlideBullets bullets={slide.bullets} />
                </div>
              ) : null}
            </div>
            <div className="flex items-center justify-center">
              {slide.component ? <SlideInteractive slide={slide} /> : null}
            </div>
          </div>
        );

      case 'text':
        return (
          <div className="mx-auto flex h-full max-w-5xl flex-col justify-center px-8 py-16 lg:px-16">
            <SlideHeader slide={slide} printMode={printMode} />
            {slide.body ? <SlideBody body={slide.body} /> : null}
            {slide.bullets ? (
              <div className="mt-8">
                <SlideBullets bullets={slide.bullets} />
              </div>
            ) : null}
          </div>
        );

      case 'embed':
        return (
          <div className="mx-auto flex h-full max-w-[1600px] flex-col px-6 py-6 lg:px-10 lg:py-8">
            <SlideHeader slide={slide} printMode={printMode} />
            <div className="relative min-h-0 flex-1 overflow-hidden ring-1 ring-(--deep-teal)/15">
              {slide.component ? <SlideInteractive slide={slide} /> : null}
            </div>
          </div>
        );

      case 'full-media':
        return (
          <div className="mx-auto flex h-full max-w-[1600px] flex-col px-6 py-6 lg:px-10 lg:py-8">
            <SlideHeader slide={slide} printMode={printMode} />
            <div className="relative min-h-0 flex-1">
              {slide.component ? <SlideInteractive slide={slide} /> : null}
            </div>
            {slide.body ? (
              <div className="mt-4 max-w-4xl text-sm opacity-80">
                <SlideBody body={slide.body} />
              </div>
            ) : null}
          </div>
        );

      case 'qr':
        return (
          <div className="mx-auto flex h-full max-w-6xl flex-col justify-center px-8 py-16 lg:px-16">
            <SlideHeader slide={slide} printMode={printMode} />
            {slide.component ? (
              <div className="mt-8">
                <SlideInteractive slide={slide} />
              </div>
            ) : null}
          </div>
        );

      default:
        return null;
    }
  })();

  return (
    <article
      data-slide-id={slide.id}
      data-slide-kind={slide.layout}
      aria-roledescription="slide"
      aria-label={`${slide.title} (${index + 1} ${ui.slideOf} ${total})`}
      className={`deck-slide relative h-full w-full overflow-hidden ${bg}`}
    >
      {inner}
      {printMode ? (
        <div className="absolute bottom-4 right-6 text-xs opacity-50">
          {index + 1} {ui.slideOf} {total}
        </div>
      ) : null}
    </article>
  );
}
