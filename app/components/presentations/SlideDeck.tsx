'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { PresentationContent } from '../../content/presentationTypes';
import { Slide } from './Slide';
import { SlideKeyHelp } from './SlideKeyHelp';
import { SlideProgress } from './SlideProgress';
import { SpeakerNotes } from './SpeakerNotes';

type SlideDeckProps = {
  content: PresentationContent;
};

function parseHashIndex(hash: string, slideIds: string[]): number | null {
  const trimmed = hash.replace(/^#/, '');
  if (!trimmed) return null;
  // Support both `#slide-3` (1-based) and `#title` (id-based).
  const numMatch = /^slide-(\d+)$/.exec(trimmed);
  if (numMatch?.[1]) {
    const i = Number.parseInt(numMatch[1], 10) - 1;
    if (i >= 0 && i < slideIds.length) return i;
  }
  const byId = slideIds.indexOf(trimmed);
  if (byId !== -1) return byId;
  return null;
}

function parseQueryIndex(search: string, total: number): number | null {
  const params = new URLSearchParams(search);
  const raw = params.get('slide');
  if (!raw) return null;
  const i = Number.parseInt(raw, 10) - 1;
  return i >= 0 && i < total ? i : null;
}

export function SlideDeck({ content }: SlideDeckProps) {
  const { slides, ui, meta } = content;
  const slideIds = useMemo(() => slides.map((s) => s.id), [slides]);
  const [index, setIndex] = useState(0);
  const [notesOpen, setNotesOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [printMode, setPrintMode] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  // Initial sync from URL (hash > query).
  useEffect(() => {
    const fromHash = parseHashIndex(window.location.hash, slideIds);
    const fromQuery = parseQueryIndex(window.location.search, slides.length);
    const initial = fromHash ?? fromQuery ?? 0;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from window URL on mount
    setIndex(initial);
    if (new URLSearchParams(window.location.search).get('print') === '1') {
      setPrintMode(true);
    }
  }, [slideIds, slides.length]);

  // Keep hash in sync when index changes (without scrolling).
  useEffect(() => {
    const id = slideIds[index];
    if (!id) return;
    const newHash = `#${id}`;
    if (window.location.hash !== newHash) {
      window.history.replaceState(null, '', newHash);
    }
  }, [index, slideIds]);

  // Listen for back/forward and external hash changes.
  useEffect(() => {
    const onHash = () => {
      const i = parseHashIndex(window.location.hash, slideIds);
      if (i !== null) setIndex(i);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [slideIds]);

  const go = useCallback(
    (next: number) => {
      setIndex((curr) => {
        const clamped = Math.max(0, Math.min(slides.length - 1, next));
        return clamped === curr ? curr : clamped;
      });
    },
    [slides.length],
  );

  const goNext = useCallback(() => go(index + 1), [go, index]);
  const goPrev = useCallback(() => go(index - 1), [go, index]);

  // Keyboard navigation.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLElement) {
        const tag = e.target.tagName;
        if (
          tag === 'INPUT' ||
          tag === 'TEXTAREA' ||
          e.target.isContentEditable
        ) {
          return;
        }
      }
      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
          e.preventDefault();
          goNext();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          goPrev();
          break;
        case 'Home':
          e.preventDefault();
          go(0);
          break;
        case 'End':
          e.preventDefault();
          go(slides.length - 1);
          break;
        case 's':
        case 'S':
          setNotesOpen((v) => !v);
          break;
        case '?':
          setHelpOpen((v) => !v);
          break;
        case 'f':
        case 'F':
          if (document.fullscreenElement) {
            document.exitFullscreen().catch(() => undefined);
          } else {
            rootRef.current?.requestFullscreen().catch(() => undefined);
          }
          break;
        case 'p':
        case 'P':
          setPrintMode((v) => !v);
          break;
        case 'Escape':
          setNotesOpen(false);
          setHelpOpen(false);
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, goNext, goPrev, slides.length]);

  const current = slides[index];
  if (!current) return null;

  if (printMode) {
    return (
      <div className="deck-print">
        {slides.map((slide, i) => (
          <Slide
            key={`slide-${slide.id}`}
            slide={slide}
            index={i}
            total={slides.length}
            meta={meta}
            ui={ui}
            printMode
          />
        ))}
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      className="deck-shell relative h-screen w-screen overflow-hidden bg-(--deep-teal) text-white"
      aria-roledescription="presentation slide deck"
    >
      <Slide
        slide={current}
        index={index}
        total={slides.length}
        meta={meta}
        ui={ui}
      />

      {/* Edge click targets for tap-to-advance (does not block content). */}
      <button
        type="button"
        onClick={goPrev}
        aria-label={ui.previousSlide}
        className="pointer-events-auto absolute inset-y-0 left-0 z-30 w-16 cursor-w-resize bg-transparent opacity-0 hover:opacity-10 focus:opacity-10"
      />
      <button
        type="button"
        onClick={goNext}
        aria-label={ui.nextSlide}
        className="pointer-events-auto absolute inset-y-0 right-0 z-30 w-16 cursor-e-resize bg-transparent opacity-0 hover:opacity-10 focus:opacity-10"
      />

      <SlideProgress
        current={index}
        total={slides.length}
        ofLabel={ui.slideOf}
        onJump={go}
        slides={slides}
        meta={meta}
      />

      <SpeakerNotes
        open={notesOpen}
        onClose={() => setNotesOpen(false)}
        notes={current.notes ?? []}
        title={ui.speakerNotesTitle}
        hint={ui.speakerNotesHint}
      />

      <SlideKeyHelp
        open={helpOpen}
        onClose={() => setHelpOpen(false)}
        title={ui.helpTitle}
      />
    </div>
  );
}
