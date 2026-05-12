export type PresentationLocale = 'en';

export type SlideLayout =
  | 'title'
  | 'split'
  | 'full-media'
  | 'text'
  | 'embed'
  | 'qr'
  | 'two-col';

/**
 * Identifies an interactive component to mount inside a slide.
 * Looked up via the registry in `app/components/presentations/registry.ts`.
 */
export type SlideComponentKey =
  | 'hexHeatmap'
  | 'surinameMap'
  | 'timeSlider'
  | 'iiifViewer'
  | 'metadataGapsChart'
  | 'featuredGrid'
  | 'topPlacesChart'
  | 'mediumOverTime'
  | 'embedRijksmuseum'
  | 'embedGazetteer'
  | 'qrCodes'
  | 'timeMachineBrandMap'
  | 'partnersGrid';

export type SlideMediaAsset = {
  src: string;
  alt: string;
  caption?: string;
};

export type SlideContent = {
  /** Stable id used for the URL hash, e.g. `#slide-title`. */
  id: string;
  /** Visual variant. */
  layout: SlideLayout;
  /** Short act / section label (e.g. "Act I · Framing"). */
  eyebrow?: string;
  /** Slide title. */
  title: string;
  /** Optional subtitle / lead-in. */
  subtitle?: string;
  /** Body paragraphs (supports inline `[label](href)` links via RichText). */
  body?: string[];
  /** Bullet points. */
  bullets?: string[];
  /** Optional static image. */
  media?: SlideMediaAsset;
  /** Interactive component key. */
  component?: SlideComponentKey;
  /** Free-form payload passed to the interactive component. */
  componentProps?: Record<string, unknown>;
  /** Speaker notes shown when pressing `s`. */
  notes?: string[];
  /** Background variant: brand surface for hero slides. */
  background?: 'default' | 'hero' | 'cream' | 'deep';
};

export type PresentationSeo = {
  title: string;
  description: string;
  openGraphLocale: string;
};

export type PresentationMeta = {
  conference: string;
  conferenceUrl: string;
  date: string;
  location: string;
  presenters: string[];
  institution: string;
  slug: string;
};

export type PresentationContent = {
  locale: PresentationLocale;
  seo: PresentationSeo;
  meta: PresentationMeta;
  ui: {
    nextSlide: string;
    previousSlide: string;
    slideOf: string;
    speakerNotesTitle: string;
    speakerNotesHint: string;
    helpTitle: string;
    offlineFallback: string;
    loading: string;
  };
  slides: SlideContent[];
};
