'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  src: string;
  style: React.CSSProperties;
};

/**
 * Stil, herhalend fragment op een dia, met een pauzeknop (WCAG 2.2.2).
 * Bij 'prefers-reduced-motion' start het fragment niet automatisch.
 */
export function SlideClip({ src, style }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (reduce) return;
    video.play().then(
      () => setPlaying(true),
      () => setPlaying(false),
    );
  }, []);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(
        () => setPlaying(true),
        () => setPlaying(false),
      );
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="absolute" style={style}>
      <video
        ref={ref}
        className="h-full w-full object-cover"
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={src} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggle}
        aria-label={
          playing ? 'Pauzeer bewegend beeld' : 'Speel bewegend beeld af'
        }
        className="absolute right-2 bottom-2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink/80 text-white transition-colors hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <span aria-hidden="true">{playing ? '❚❚' : '▶'}</span>
      </button>
    </div>
  );
}
