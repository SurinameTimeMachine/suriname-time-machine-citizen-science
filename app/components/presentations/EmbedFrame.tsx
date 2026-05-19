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
  const [iframeLoaded, setIframeLoaded] = useState(false);

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

  useEffect(() => {
    setIframeFailed(false);
    setIframeLoaded(false);
  }, [src, online]);

  useEffect(() => {
    if (!fallbackSrc || !online || iframeLoaded || iframeFailed) return;
    const timeout = window.setTimeout(() => {
      setIframeFailed(true);
    }, 4000);
    return () => window.clearTimeout(timeout);
  }, [fallbackSrc, iframeFailed, iframeLoaded, online]);

  const showFallback = (!online || iframeFailed) && fallbackSrc;

  return (
    <div className="h-full w-full bg-(--cream) p-3 text-ink lg:p-4">
      <div className="relative h-full w-full overflow-hidden rounded-xl bg-white shadow-[0_24px_56px_rgba(10,40,46,0.2)] ring-1 ring-(--deep-teal)/20">
        <div className="flex items-center justify-between border-b border-ink/10 bg-(--cream) px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#d06c4f]" />
            <span className="size-2 rounded-full bg-[#e2a84a]" />
            <span className="size-2 rounded-full bg-[#67a589]" />
          </div>
          <p className="truncate px-3 text-[10px] uppercase tracking-[0.2em] text-ink/70 sm:text-xs">
            {src.replace(/^https?:\/\//, '')}
          </p>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-teal-strong ring-1 ring-ink/10 hover:bg-white/90"
          >
            Open ↗
          </a>
        </div>

        <div className="relative h-[calc(100%-43px)] w-full">
          {showFallback ? (
            <div className="relative h-full w-full bg-white">
              <img
                src={fallbackSrc}
                alt={`${title} (offline preview)`}
                className="h-full w-full object-cover object-top-left"
                style={{ transform: 'scale(1.2)', transformOrigin: 'top left' }}
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
              onLoad={() => setIframeLoaded(true)}
              onError={() => setIframeFailed(true)}
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export function EmbedRijksmuseum() {
  return (
    <EmbedFrame
      src="https://images.surinametijdmachine.org"
      title="Rijksmuseum × Suriname collection"
      fallbackSrc="/presentations/rijksmuseum-2026/screenshots/rijksmuseum-collection.svg"
    />
  );
}

export function EmbedGazetteer() {
  return (
    <EmbedFrame
      src="https://data.surinametijdmachine.org"
      title="Suriname Time Machine · gazetteer"
      fallbackSrc="/presentations/rijksmuseum-2026/screenshots/database-model.svg"
    />
  );
}
