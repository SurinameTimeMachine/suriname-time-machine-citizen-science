'use client';

import 'leaflet/dist/leaflet.css';
import { useEffect, useMemo, useRef, useState } from 'react';

export type ImagePoint = {
  lat: number;
  lng: number;
  uncertainty: number;
  year: number;
};

type AllmapsMapProps = {
  points?: ImagePoint[];
  yearMin?: number;
  yearMax?: number;
  annotationUrl?: string;
};

const DEFAULT_ANNOTATION =
  'https://annotations.allmaps.org/manifests/5178b46e14dc211e';

// Approximate Suriname bbox (south, west) → (north, east) for initial view.
const SURINAME_BOUNDS: [[number, number], [number, number]] = [
  [1.85, -58.1],
  [6.05, -53.9],
];

type LeafletNS = typeof import('leaflet');

type MapState = {
  L: LeafletNS;
  map: import('leaflet').Map;
  markers: import('leaflet').LayerGroup;
};

export function AllmapsMap({
  points,
  yearMin,
  yearMax,
  annotationUrl = DEFAULT_ANNOTATION,
}: AllmapsMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<MapState | null>(null);
  const [ready, setReady] = useState(false);

  // Initialize Leaflet + Allmaps layer once.
  useEffect(() => {
    let cancelled = false;
    async function init() {
      const [L, allmaps] = await Promise.all([
        import('leaflet'),
        import('@allmaps/leaflet'),
      ]);
      if (cancelled || !containerRef.current) return;

      const map = L.map(containerRef.current, {
        preferCanvas: true,
        scrollWheelZoom: false,
        attributionControl: false,
        zoomControl: true,
      });
      map.fitBounds(SURINAME_BOUNDS, { padding: [10, 10] });

      // Light, low-contrast modern base for context outside the historical map.
      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',
        {
          maxZoom: 19,
          subdomains: 'abcd',
          opacity: 0.6,
        },
      ).addTo(map);

      // The 1930 Allmaps georeferenced map series.
      const WarpedMapLayer = (
        allmaps as unknown as {
          WarpedMapLayer: new () => import('leaflet').Layer & {
            addGeoreferenceAnnotationByUrl: (url: string) => Promise<unknown>;
          };
        }
      ).WarpedMapLayer;
      const warpedMapLayer = new WarpedMapLayer();
      warpedMapLayer.addTo(map);
      warpedMapLayer
        .addGeoreferenceAnnotationByUrl(annotationUrl)
        .catch((err: unknown) => {
          // Non-fatal: the modern basemap remains visible if the historical
          // layer fails to load (e.g. offline).
          console.warn('Allmaps annotation failed to load', err);
        });

      const markers = L.layerGroup().addTo(map);

      stateRef.current = { L, map, markers };
      setReady(true);
    }
    init().catch((err) => {
      console.error('AllmapsMap init failed', err);
    });
    return () => {
      cancelled = true;
      stateRef.current?.map.remove();
      stateRef.current = null;
      setReady(false);
    };
  }, [annotationUrl]);

  // Compute filtered points once per change.
  const filtered = useMemo(() => {
    if (!points) return [];
    if (yearMin === undefined && yearMax === undefined) return points;
    return points.filter(
      (p) =>
        (yearMin === undefined || p.year >= yearMin) &&
        (yearMax === undefined || p.year <= yearMax),
    );
  }, [points, yearMin, yearMax]);

  // Render markers whenever the filtered set changes (and the map is ready).
  useEffect(() => {
    const state = stateRef.current;
    if (!ready || !state) return;
    const { L, markers } = state;
    markers.clearLayers();
    for (const p of filtered) {
      const radius = p.uncertainty <= 2 ? 3 : p.uncertainty <= 10 ? 4 : 5;
      L.circleMarker([p.lat, p.lng], {
        radius,
        color: '#003c34',
        weight: 0.6,
        fillColor: '#3fa996',
        fillOpacity: 0.7,
      }).addTo(markers);
    }
  }, [filtered, ready]);

  return (
    <div className="relative h-full w-full">
      <div
        ref={containerRef}
        className="h-full w-full"
        style={{ background: '#f5f1e9' }}
        role="img"
        aria-label="Image locations overlaid on the 1930 Suriname map (Leiden University Libraries, via Allmaps)"
      />
      <div className="pointer-events-none absolute bottom-2 left-2 bg-white/90 px-2 py-1 text-[10px] text-ink/80 ring-1 ring-ink/10">
        Base map: Kaart van Suriname, 1930 · Leiden University Libraries ·
        georeferenced via Allmaps
      </div>
      <div className="pointer-events-none absolute bottom-2 right-2 bg-white/90 px-2 py-1 text-[10px] text-ink/80 ring-1 ring-ink/10">
        {filtered.length} works shown
      </div>
    </div>
  );
}
