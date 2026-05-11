'use client';

import { useEffect, useRef, useState } from 'react';

type IIIFViewerProps = {
  info?: string;
  fallback?: string;
};

/**
 * Zoom-and-pan IIIF placeholder. If a `fallback` JPG is provided it is shown
 * with CSS-transform pan/zoom — no extra dependency required. The deck stays
 * fully offline-capable; OpenSeadragon can be slotted in later by replacing
 * this component.
 */
export function IIIFViewer({ fallback }: IIIFViewerProps) {
  const [scale, setScale] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragRef = useRef<{ x: number; y: number } | null>(null);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reset on fallback prop change
    setImgError(false);
  }, [fallback]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-black select-none">
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- drag-to-pan zoom surface; keyboard alternative provided via buttons below */}
      <div
        role="application"
        aria-label="Zoomable image viewer"
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: `translate3d(${tx}px, ${ty}px, 0) scale(${scale})`,
          transformOrigin: 'center center',
          transition: dragging ? 'none' : 'transform 0.15s ease-out',
        }}
        onMouseDown={(e) => {
          dragRef.current = { x: e.clientX - tx, y: e.clientY - ty };
          setDragging(true);
        }}
        onMouseMove={(e) => {
          if (!dragRef.current) return;
          setTx(e.clientX - dragRef.current.x);
          setTy(e.clientY - dragRef.current.y);
        }}
        onMouseUp={() => {
          dragRef.current = null;
          setDragging(false);
        }}
        onMouseLeave={() => {
          dragRef.current = null;
          setDragging(false);
        }}
        onWheel={(e) => {
          e.preventDefault();
          setScale((s) =>
            Math.min(8, Math.max(1, s + (e.deltaY < 0 ? 0.2 : -0.2))),
          );
        }}
      >
        {fallback && !imgError ? (
          <img
            src={fallback}
            alt="IIIF zoom sample"
            className="max-h-full max-w-full object-contain"
            draggable={false}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-(--deep-teal) text-white/70">
            <p className="text-center text-sm">
              IIIF sample · drop a JPG at
              <br />
              <code className="text-xs">{fallback}</code>
            </p>
          </div>
        )}
      </div>
      <div className="absolute bottom-4 right-4 flex gap-2 bg-white/95 px-2 py-1.5 text-xs text-ink ring-1 ring-ink/10">
        <button
          type="button"
          onClick={() => setScale((s) => Math.min(8, s + 0.5))}
          className="cursor-pointer px-2"
          aria-label="Zoom in"
        >
          +
        </button>
        <span className="tabular-nums">{scale.toFixed(1)}×</span>
        <button
          type="button"
          onClick={() => setScale((s) => Math.max(1, s - 0.5))}
          className="cursor-pointer px-2"
          aria-label="Zoom out"
        >
          −
        </button>
        <button
          type="button"
          onClick={() => {
            setScale(1);
            setTx(0);
            setTy(0);
          }}
          className="cursor-pointer px-2"
          aria-label="Reset"
        >
          ⟲
        </button>
      </div>
      <p className="pointer-events-none absolute left-4 top-4 text-[10px] uppercase tracking-[0.3em] text-white/70">
        Scroll / drag · IIIF preview
      </p>
    </div>
  );
}
