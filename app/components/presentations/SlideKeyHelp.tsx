'use client';

type SlideKeyHelpProps = {
  open: boolean;
  onClose: () => void;
  title: string;
};

const SHORTCUTS: { keys: string; description: string }[] = [
  { keys: '→ · Space · PageDown', description: 'Next slide' },
  { keys: '← · PageUp', description: 'Previous slide' },
  { keys: 'Home / End', description: 'First / last slide' },
  { keys: 'S', description: 'Toggle speaker notes' },
  { keys: 'F', description: 'Toggle fullscreen' },
  { keys: 'P', description: 'Toggle print / handout mode' },
  { keys: '?', description: 'Toggle this help' },
  { keys: 'Esc', description: 'Close overlay' },
];

export function SlideKeyHelp({ open, onClose, title }: SlideKeyHelpProps) {
  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="absolute inset-0 z-50 flex items-center justify-center bg-(--deep-teal)/85 px-6 backdrop-blur-sm"
    >
      <button
        type="button"
        aria-label="Close help overlay"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-transparent"
      />
      <div className="angled-card relative w-full max-w-md bg-white p-8 text-ink">
        <p className="flag-label text-ink/70">{title}</p>
        <ul className="mt-6 space-y-3 text-sm">
          {SHORTCUTS.map((s) => (
            <li
              key={s.keys}
              className="flex items-center justify-between gap-6"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-ink/70">
                {s.keys}
              </span>
              <span className="text-right">{s.description}</span>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={onClose}
          className="mt-8 cursor-pointer text-xs uppercase tracking-[0.3em] text-teal-strong hover:text-(--deep-teal)"
        >
          Close
        </button>
      </div>
    </div>
  );
}
