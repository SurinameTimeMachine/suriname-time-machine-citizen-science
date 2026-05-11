'use client';

import { RichText } from '../RichText';

type SpeakerNotesProps = {
  open: boolean;
  onClose: () => void;
  notes: string[];
  title: string;
  hint: string;
};

export function SpeakerNotes({
  open,
  onClose,
  notes,
  title,
  hint,
}: SpeakerNotesProps) {
  if (!open) return null;
  return (
    <aside
      role="dialog"
      aria-label={title}
      className="absolute inset-x-4 bottom-8 z-50 max-h-[40vh] overflow-auto bg-white/95 p-5 text-ink shadow-2xl ring-1 ring-ink/10 backdrop-blur-sm sm:inset-x-8 lg:inset-x-16"
    >
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="flag-label text-ink/70">{title}</p>
          <p className="mt-1 text-xs text-ink/50">{hint}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="cursor-pointer text-xs uppercase tracking-[0.3em] text-ink/60 hover:text-teal-strong"
        >
          Close · Esc
        </button>
      </div>
      {notes.length === 0 ? (
        <p className="italic text-ink/50">No notes for this slide.</p>
      ) : (
        <ul className="space-y-2 text-sm leading-relaxed">
          {notes.map((n) => (
            <li key={n}>
              <RichText as="span">{n}</RichText>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
