'use client';

import 'leaflet/dist/leaflet.css';
import { useEffect, useMemo, useRef, useState } from 'react';

export type ImagePoint = {
  lat: number;
  lng: number;
  uncertainty: number;
  year: number;
};

type Focus = 'suriname' | 'paramaribo';

type AllmapsMapProps = {
  points?: ImagePoint[];
  yearMin?: number;
  yearMax?: number;
  annotationUrl?: string;
  focus?: Focus;
  /** 'hex' = honeycomb density overlay (default), 'points' = circle markers */
  mode?: 'hex' | 'points';
  /** Hex cell radius in screen pixels. Default 22. */
  hexRadius?: number;
};

const SURINAME_ANNOTATION =
  'https://annotations.allmaps.org/manifests/5178b46e14dc211e';
const PARAMARIBO_ANNOTATION =
  'https://annotations.allmaps.org/maps/a8b80690c8e2e4cb';

// Approximate Suriname bbox (south, west) → (north, east) for initial view.
const SURINAME_BOUNDS: [[number, number], [number, number]] = [
  [1.85, -58.1],
  [6.05, -53.9],
];
// Tighter view centred on the historical Paramaribo street grid.
const PARAMARIBO_BOUNDS: [[number, number], [number, number]] = [
  [5.815, -55.24],
  [5.86, -55.13],
];

type LeafletNS = typeof import('leaflet');

type MapState = {
  L: LeafletNS;
  map: import('leaflet').Map;
  markers: import('leaflet').LayerGroup;
  hexSvg: SVGSVGElement;
  hexGroup: SVGGElement;
};

export function AllmapsMap({
  points,
  yearMin,
  yearMax,
  annotationUrl,
  focus = 'suriname',
  mode = 'hex',
  hexRadius = 22,
}: AllmapsMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<MapState | null>(null);
  const [ready, setReady] = useState(false);

  const resolvedAnnotation =
    annotationUrl ??
    (focus === 'paramaribo' ? PARAMARIBO_ANNOTATION : SURINAME_ANNOTATION);
  const initialBounds =
    focus === 'paramaribo' ? PARAMARIBO_BOUNDS : SURINAME_BOUNDS;

  // Initialize Leaflet + Allmaps layer once.
  useEffect(() => {
    let cancelled = false;
    async function init() {
      // eslint-disable-next-line @typescript-eslint/naming-convention -- L is the conventional Leaflet namespace alias
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
      map.fitBounds(initialBounds, { padding: [10, 10] });

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
      // eslint-disable-next-line @typescript-eslint/naming-convention -- WarpedMapLayer is a constructor (PascalCase is intentional)
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
        .addGeoreferenceAnnotationByUrl(resolvedAnnotation)
        .catch((err: unknown) => {
          // Non-fatal: the modern basemap remains visible if the historical
          // layer fails to load (e.g. offline).
          console.warn('Allmaps annotation failed to load', err);
        });

      const markers = L.layerGroup().addTo(map);

      // SVG overlay for the hex-bin layer, pinned over the map container.
      const svgNS = 'http://www.w3.org/2000/svg';
      const hexSvg = document.createElementNS(svgNS, 'svg');
      hexSvg.setAttribute(
        'style',
        'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:400;',
      );
      const hexGroup = document.createElementNS(svgNS, 'g');
      hexSvg.appendChild(hexGroup);
      containerRef.current.appendChild(hexSvg);

      stateRef.current = { L, map, markers, hexSvg, hexGroup };
      setReady(true);
    }
    init().catch((err) => {
      console.error('AllmapsMap init failed', err);
    });
    return () => {
      cancelled = true;
      const st = stateRef.current;
      if (st) {
        st.hexSvg.remove();
        st.map.remove();
      }
      stateRef.current = null;
      setReady(false);
    };
  }, [resolvedAnnotation, initialBounds]);

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

  // Render points + hex bins whenever the data, mode, or viewport changes.
  useEffect(() => {
    const state = stateRef.current;
    if (!ready || !state) return;
    // eslint-disable-next-line @typescript-eslint/naming-convention -- L is the conventional Leaflet namespace alias
    const { L, map, markers, hexGroup } = state;

    function render() {
      markers.clearLayers();
      while (hexGroup.firstChild) hexGroup.removeChild(hexGroup.firstChild);
      if (filtered.length === 0) return;

      if (mode === 'points') {
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
        return;
      }

      // Hex-bin overlay
      const projected = filtered.map((p) => {
        const pt = map.latLngToContainerPoint([p.lat, p.lng]);
        return { x: pt.x, y: pt.y, u: p.uncertainty };
      });
      const bins = hexBin(projected, hexRadius);
      if (bins.length === 0) return;

      let maxCount = 0;
      for (const b of bins) if (b.count > maxCount) maxCount = b.count;

      const hexPath = hexPolygon(hexRadius);
      for (const b of bins) {
        const t = Math.log1p(b.count) / Math.log1p(maxCount);
        const fill = teal(t);
        const meanU = b.uSum / b.count;
        const dash = meanU > 20 ? '3 2' : meanU > 5 ? '1.5 1.5' : '';
        const poly = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'path',
        );
        poly.setAttribute('d', hexPath);
        poly.setAttribute('transform', `translate(${b.x}, ${b.y})`);
        poly.setAttribute('fill', fill);
        poly.setAttribute('fill-opacity', String(0.55 + 0.35 * t));
        poly.setAttribute('stroke', '#003c34');
        poly.setAttribute('stroke-width', '0.7');
        if (dash) poly.setAttribute('stroke-dasharray', dash);
        const title = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'title',
        );
        title.textContent = `${b.count} works · mean uncertainty ~${meanU.toFixed(1)} km`;
        poly.appendChild(title);
        hexGroup.appendChild(poly);
      }
    }

    render();
    map.on('moveend zoomend resize', render);
    return () => {
      map.off('moveend zoomend resize', render);
    };
  }, [filtered, ready, mode, hexRadius]);

  return (
    <div className="relative h-full w-full">
      <div
        ref={containerRef}
        className="h-full w-full"
        style={{ background: '#f5f1e9' }}
        role="img"
        aria-label={
          focus === 'paramaribo'
            ? 'Image locations overlaid on a historical street map of Paramaribo (via Allmaps)'
            : 'Image locations overlaid on the 1930 Suriname map (Leiden University Libraries, via Allmaps)'
        }
      />
      <div className="pointer-events-none absolute bottom-2 left-2 bg-white/90 px-2 py-1 text-[10px] text-ink/80 ring-1 ring-ink/10">
        {focus === 'paramaribo'
          ? 'Base map: historical Paramaribo · georeferenced via Allmaps'
          : 'Base map: Kaart van Suriname, 1930 · Leiden University Libraries · georeferenced via Allmaps'}
      </div>
      <div className="pointer-events-none absolute bottom-2 right-2 bg-white/90 px-2 py-1 text-[10px] text-ink/80 ring-1 ring-ink/10">
        {filtered.length} works shown
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────
// Hex-bin helpers (pointy-top, d3-hexbin compatible math).

type ProjPoint = { x: number; y: number; u: number };
type Bin = { x: number; y: number; count: number; uSum: number };

function hexBin(points: ProjPoint[], r: number): Bin[] {
  const dx = r * 2 * Math.sin(Math.PI / 3);
  const dy = r * 1.5;
  const bins = new Map<string, Bin>();
  for (const p of points) {
    const py = p.y / dy;
    let pj = Math.round(py);
    const px = p.x / dx - (pj & 1) / 2;
    let pi = Math.round(px);
    const py1 = py - pj;
    if (Math.abs(py1) * 3 > 1) {
      const px1 = px - pi;
      const pi2 = pi + (px < pi ? -1 : 1) / 2;
      const pj2 = pj + (py < pj ? -1 : 1);
      const px2 = px - pi2;
      const py2 = py - pj2;
      if (px1 * px1 + py1 * py1 > px2 * px2 + py2 * py2) {
        pi = pi2 + (pj & 1 ? 1 : -1) / 2;
        pj = pj2;
      }
    }
    const key = `${pi}|${pj}`;
    let bin = bins.get(key);
    if (!bin) {
      bin = { x: (pi + (pj & 1) / 2) * dx, y: pj * dy, count: 0, uSum: 0 };
      bins.set(key, bin);
    }
    bin.count++;
    bin.uSum += p.u;
  }
  return [...bins.values()];
}

function hexPolygon(r: number): string {
  // Pointy-top hexagon centered at origin.
  const a = (Math.PI / 3) * 0; // start angle
  const pts: string[] = [];
  for (let i = 0; i < 6; i++) {
    const angle = a + (Math.PI / 3) * i + Math.PI / 6;
    const x = r * Math.cos(angle);
    const y = r * Math.sin(angle);
    pts.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return `M${pts.join('L')}Z`;
}

// Cream → teal-bright ramp on log scale (handled by caller).
function teal(t: number): string {
  // Cream (#f5f1e9) → teal (#3fa996) → deep teal (#003c34)
  const c0: [number, number, number] = [245, 241, 233];
  const c1: [number, number, number] = [63, 169, 150];
  const c2: [number, number, number] = [0, 60, 52];
  const lerp = (
    a: [number, number, number],
    b: [number, number, number],
    f: number,
  ): [number, number, number] => [
    a[0] + (b[0] - a[0]) * f,
    a[1] + (b[1] - a[1]) * f,
    a[2] + (b[2] - a[2]) * f,
  ];
  const c =
    t <= 0.55 ? lerp(c0, c1, t / 0.55) : lerp(c1, c2, (t - 0.55) / 0.45);
  return `rgb(${Math.round(c[0])}, ${Math.round(c[1])}, ${Math.round(c[2])})`;
}
