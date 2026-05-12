'use client';

import { useEffect, useState } from 'react';

type EmbedFrameProps = {
  src: string;
  title: string;
  fallbackSrc?: string;
};

export function EmbedFrame({ src, title, fallbackSrc }: EmbedFrameProps) {
  const [online, setOnline] = useState<boolean>(true);
  const [iframeFailed, setIframeFailed] = useState(false);

  useEffect(() => {
    const update = () => setOnline(navigator.onLine);
    update();
    window.addEventListener('online', update);
    window.addEventListener('offline', update);
    return () => {
      window.removeEventListener('online', update);
      window.removeEventListener('offline', update);
    };
  }, []);

  const showFallback = (!online || iframeFailed) && fallbackSrc;

  return (
    <div className="relative h-full w-full bg-(--cream) text-ink">
      {showFallback ? (
        <div className="relative h-full w-full">
          {}
          <img
            src={fallbackSrc}
            alt={`${title} (offline preview)`}
            className="h-full w-full object-contain"
          />
          <div className="absolute left-4 top-4 bg-(--deep-teal) px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white">
            Offline preview
          </div>
        </div>
      ) : (
        <iframe
          src={src}
          title={title}
          className="block h-full w-full border-0 bg-white"
          loading="lazy"
          onError={() => setIframeFailed(true)}
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        />
      )}
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-3 top-3 bg-white/95 px-2 py-1 text-[10px] uppercase tracking-[0.25em] text-teal-strong ring-1 ring-ink/10 hover:bg-white"
      >
        Open ↗
      </a>
    </div>
  );
}

export function EmbedRijksmuseum() {
  return (
    <EmbedFrame
      src="https://rijksmuseum-suriname-collection.vercel.app/"
      title="Rijksmuseum × Suriname collection"
      fallbackSrc="/presentations/rijksmuseum-2026/screenshots/rijksmuseum-collection.svg"
    />
  );
}

export function EmbedGazetteer() {
  return (
    <EmbedFrame
      src="https://suriname-database-model.vercel.app/"
      title="Suriname Time Machine · gazetteer"
      fallbackSrc="/presentations/rijksmuseum-2026/screenshots/database-model.svg"
    />
  );
}
