// A two-ellipse Venn diagram showing the Suriname Time Machine bridging
// (A) Dutch/BE Time Machine methodology peers, and
// (B) Atlantic-world and diaspora heritage projects.
//
// Geometry (viewBox 0 0 1200 560):
//   LCX=360  RCX=840  CY=340  RX=320  RY=215
//   Left  ellipse: x 40–680,   y 125–555
//   Right ellipse: x 520–1160, y 125–555
//   Overlap zone:  x 520–680,  centre x=600
//   Left-only zone centre:  (40+520)/2  = 280
//   Right-only zone centre: (680+1160)/2 = 920
//
// Font sizes: headings 36px bold, peer labels 28px — readable from the back row.

type Peer = { name: string; href?: string; y: number };

const LCX = 360;
const RCX = 840;
const CY = 340;
const RX = 320;
const RY = 215;
const LEFT_X = 280;
const RIGHT_X = 920;

// TM peers — 5 items, y 205–485, spacing 70
const TM_PEERS: Peer[] = [
  {
    name: 'Amsterdam Time Machine',
    href: 'https://www.amsterdamtimemachine.nl/',
    y: 275,
  },
  { name: 'Aezel', href: 'https://aezel.eu/', y: 205 },
  {
    name: 'Gouda Tijdmachine',
    href: 'https://www.goudatijdmachine.nl/',
    y: 345,
  },
  { name: 'Gent Gemapt', href: 'https://www.gentgemapt.be/', y: 415 },
  {
    name: 'Utrecht Time Machine',
    href: 'https://utrechttimemachine.nl/',
    y: 485,
  },
];

// Atlantic peers — 3 items, y 240–480, spacing 120
const ATLANTIC_PEERS: Peer[] = [
  { name: 'HDSC', href: 'https://surinametijdmachine.org', y: 240 },
  { name: 'imagineRio', href: 'https://imaginerio.org/en', y: 360 },
  { name: 'Same Boats', href: 'https://sameboats.org/', y: 480 },
];

export function TimeMachineBrandMap() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <svg
        viewBox="0 0 1200 560"
        preserveAspectRatio="xMidYMid meet"
        className="block max-h-full w-full"
        role="img"
        aria-label="Venn diagram: Suriname Time Machine at the intersection of sibling Time Machines and Atlantic-world heritage projects"
      >
        <defs>
          <clipPath id="clip-left">
            <ellipse cx={LCX} cy={CY} rx={RX} ry={RY} />
          </clipPath>
        </defs>

        {/* ── Fills ─────────────────────────────────────────────────────── */}
        <ellipse
          cx={LCX}
          cy={CY}
          rx={RX}
          ry={RY}
          fill="#34d1b3"
          fillOpacity={0.25}
        />
        <ellipse
          cx={RCX}
          cy={CY}
          rx={RX}
          ry={RY}
          fill="#006d5b"
          fillOpacity={0.15}
        />
        {/* Intersection: clipped extra fill makes it visually distinct */}
        <ellipse
          cx={RCX}
          cy={CY}
          rx={RX}
          ry={RY}
          clipPath="url(#clip-left)"
          fill="#34d1b3"
          fillOpacity={0.2}
        />

        {/* ── Outlines ──────────────────────────────────────────────────── */}
        <ellipse
          cx={LCX}
          cy={CY}
          rx={RX}
          ry={RY}
          fill="none"
          stroke="#006d5b"
          strokeWidth={3}
        />
        <ellipse
          cx={RCX}
          cy={CY}
          rx={RX}
          ry={RY}
          fill="none"
          stroke="#003c34"
          strokeWidth={3}
        />

        {/* ── Headings — above the ellipses (top edge y=125) ────────────── */}
        {/* Left heading starts at x=45; at 36px "Sibling Time Machines" ends ~460, before overlap at 520 */}
        <text
          x={45}
          y={58}
          fontSize={36}
          fontWeight={800}
          textAnchor="start"
          fill="#003c34"
          fontFamily="var(--font-geist-sans)"
        >
          Sibling Time Machines
        </text>
        <text
          x={45}
          y={92}
          fontSize={20}
          textAnchor="start"
          fill="#006d5b"
          fontFamily="var(--font-geist-sans)"
        >
          open data · IIIF · citizen science
        </text>

        {/* Right heading ends at x=1155; at 36px "Atlantic-world heritage" starts ~700, after overlap end at 680 */}
        <text
          x={1155}
          y={58}
          fontSize={36}
          fontWeight={800}
          textAnchor="end"
          fill="#003c34"
          fontFamily="var(--font-geist-sans)"
        >
          Atlantic-world heritage
        </text>
        <text
          x={1155}
          y={92}
          fontSize={20}
          textAnchor="end"
          fill="#006d5b"
          fontFamily="var(--font-geist-sans)"
        >
          diaspora · community archives · global
        </text>

        {/* ── Peer labels — 28px, centred in their non-overlapping zone ─── */}
        {TM_PEERS.map((p) => (
          <PeerLabel key={`tm-${p.name}`} peer={p} x={LEFT_X} />
        ))}
        {ATLANTIC_PEERS.map((p) => (
          <PeerLabel key={`atlantic-${p.name}`} peer={p} x={RIGHT_X} />
        ))}

        {/* ── STM label in the intersection — one word per line ─────────── */}
        <text
          x={600}
          y={CY - 38}
          fontSize={30}
          fontWeight={800}
          textAnchor="middle"
          fill="#003c34"
          fontFamily="var(--font-geist-sans)"
        >
          Suriname
        </text>
        <text
          x={600}
          y={CY + 4}
          fontSize={30}
          fontWeight={800}
          textAnchor="middle"
          fill="#003c34"
          fontFamily="var(--font-geist-sans)"
        >
          Time
        </text>
        <text
          x={600}
          y={CY + 46}
          fontSize={30}
          fontWeight={800}
          textAnchor="middle"
          fill="#003c34"
          fontFamily="var(--font-geist-sans)"
        >
          Machine
        </text>
      </svg>
    </div>
  );
}

function PeerLabel({ peer, x }: { peer: Peer; x: number }) {
  return (
    <text
      x={x}
      y={peer.y}
      fontSize={28}
      fontWeight={600}
      textAnchor="middle"
      fill="#003c34"
      fontFamily="var(--font-geist-sans)"
    >
      {peer.href ? (
        <a href={peer.href} target="_blank" rel="noopener noreferrer">
          {peer.name}
        </a>
      ) : (
        peer.name
      )}
    </text>
  );
}
