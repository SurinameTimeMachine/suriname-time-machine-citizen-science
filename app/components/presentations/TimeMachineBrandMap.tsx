// A two-circle Venn diagram positioning the Suriname Time Machine between
// (A) sibling Time Machines with similar open / IIIF / citizen-science data,
// and (B) digital projects on colonial / Atlantic-world heritage that sit
// outside the European Time Machine federation but share our research scope.

type Peer = {
  name: string;
  href?: string;
  // Position in the 1000×600 viewBox.
  x: number;
  y: number;
};

// Left circle: Time Machine peers with similar data culture (open, IIIF,
// citizen-science driven).
const TM_PEERS: Peer[] = [
  {
    name: 'Amsterdam Time Machine',
    href: 'https://www.amsterdamtimemachine.nl/',
    x: 215,
    y: 200,
  },
  {
    name: 'Gouda Tijdmachine',
    href: 'https://www.goudatijdmachine.nl/',
    x: 130,
    y: 320,
  },
  {
    name: 'Utrecht Time Machine',
    href: 'https://utrechttimemachine.nl/',
    x: 235,
    y: 420,
  },
  { name: 'Aezel', href: 'https://aezel.eu/', x: 105, y: 220 },
  { name: 'Gent Gemapt', href: 'https://www.gentgemapt.be/', x: 110, y: 410 },
];

// Right circle: colonial / Atlantic-world heritage peers we look at *outside*
// the European Time Machine federation.
const COLONIAL_PEERS: Peer[] = [
  { name: 'HDSC', href: 'https://surinametijdmachine.org', x: 785, y: 210 },
  { name: 'imagineRio', href: 'https://imaginerio.org/en', x: 870, y: 320 },
  { name: 'Same Boats', href: 'https://sameboats.org/', x: 770, y: 430 },
];

export function TimeMachineBrandMap() {
  // Two big circles, overlapping in the middle. STM sits in the overlap.
  const LEFT_CX = 340;
  const RIGHT_CX = 660;
  const CY = 310;
  const R = 240;

  return (
    <div className="flex h-full w-full items-center justify-center">
      <svg
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid meet"
        className="block max-h-full w-full"
        role="img"
        aria-label="Venn diagram: Suriname Time Machine between Time Machine peers and colonial-heritage peers"
      >
        {/* Left circle: Time Machine peers */}
        <circle
          cx={LEFT_CX}
          cy={CY}
          r={R}
          fill="var(--teal-bright)"
          fillOpacity={0.12}
          stroke="var(--teal-strong)"
          strokeOpacity={0.35}
          strokeWidth={1.5}
        />
        {/* Right circle: colonial heritage peers */}
        <circle
          cx={RIGHT_CX}
          cy={CY}
          r={R}
          fill="var(--deep-teal)"
          fillOpacity={0.1}
          stroke="var(--deep-teal)"
          strokeOpacity={0.35}
          strokeWidth={1.5}
        />

        {/* Circle headings */}
        <text
          x={LEFT_CX - R + 20}
          y={CY - R + 30}
          fontSize={20}
          fontWeight={600}
          fill="var(--deep-teal)"
          fontFamily="var(--font-geist-sans)"
        >
          Sibling Time Machines
        </text>
        <text
          x={LEFT_CX - R + 20}
          y={CY - R + 54}
          fontSize={13}
          fill="var(--deep-teal)"
          fillOpacity={0.7}
          fontFamily="var(--font-geist-sans)"
        >
          open data · IIIF · citizen science
        </text>

        <text
          x={RIGHT_CX + R - 20}
          y={CY - R + 30}
          fontSize={20}
          fontWeight={600}
          textAnchor="end"
          fill="var(--deep-teal)"
          fontFamily="var(--font-geist-sans)"
        >
          Colonial heritage peers
        </text>
        <text
          x={RIGHT_CX + R - 20}
          y={CY - R + 54}
          fontSize={13}
          textAnchor="end"
          fill="var(--deep-teal)"
          fillOpacity={0.7}
          fontFamily="var(--font-geist-sans)"
        >
          outside the European TM federation
        </text>

        {/* Peer labels — left circle */}
        {TM_PEERS.map((p) => (
          <PeerLabel key={p.name} peer={p} anchor="start" />
        ))}
        {/* Peer labels — right circle */}
        {COLONIAL_PEERS.map((p) => (
          <PeerLabel key={p.name} peer={p} anchor="end" />
        ))}

        {/* Center: Suriname Time Machine */}
        <g>
          <circle
            cx={500}
            cy={CY}
            r={70}
            fill="var(--deep-teal)"
            stroke="var(--teal-bright)"
            strokeWidth={3}
          />
          <text
            x={500}
            y={CY - 8}
            fontSize={15}
            fontWeight={700}
            textAnchor="middle"
            fill="white"
            fontFamily="var(--font-geist-sans)"
          >
            Suriname
          </text>
          <text
            x={500}
            y={CY + 12}
            fontSize={15}
            fontWeight={700}
            textAnchor="middle"
            fill="white"
            fontFamily="var(--font-geist-sans)"
          >
            Time Machine
          </text>
          <text
            x={500}
            y={CY + 32}
            fontSize={11}
            textAnchor="middle"
            fill="var(--teal-bright)"
            fontFamily="var(--font-geist-sans)"
          >
            both methods · both audiences
          </text>
        </g>
      </svg>
    </div>
  );
}

function PeerLabel({ peer, anchor }: { peer: Peer; anchor: 'start' | 'end' }) {
  const dotR = 4;
  return (
    <g>
      <circle cx={peer.x} cy={peer.y} r={dotR} fill="var(--teal-strong)" />
      <text
        x={peer.x + (anchor === 'start' ? 10 : -10)}
        y={peer.y + 4}
        fontSize={14}
        fontWeight={500}
        textAnchor={anchor}
        fill="var(--deep-teal)"
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
    </g>
  );
}
