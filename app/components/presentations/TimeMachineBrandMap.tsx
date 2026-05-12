// Sister Time Machines we want to call out in the talk.
// Displayed as a clean federation grid rather than a tiny world-map dot plot.
type Node = {
  name: string;
  region: string;
  href?: string;
  emphasis?: boolean;
};

const NODES: Node[] = [
  {
    name: 'Suriname Time Machine',
    region: 'Suriname',
    href: 'https://surinametijdmachine.org',
    emphasis: true,
  },
  {
    name: 'Venice Time Machine',
    region: 'Italy',
    href: 'https://www.timemachine.eu/local-time-machines/',
  },
  {
    name: 'Amsterdam Time Machine',
    region: 'Netherlands',
    href: 'https://www.amsterdamtimemachine.nl/',
  },
  {
    name: 'Gouda Tijdmachine',
    region: 'Netherlands',
    href: 'https://www.goudatijdmachine.nl/',
  },
  { name: 'Antwerp Time Machine', region: 'Belgium' },
  { name: 'Budapest Time Machine', region: 'Hungary' },
  { name: 'Jerusalem Time Machine', region: 'Israel' },
  { name: 'Nuremberg Time Machine', region: 'Germany' },
];

export function TimeMachineBrandMap() {
  return (
    <div className="w-full">
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {NODES.map((n) => {
          const cardClass = n.emphasis
            ? 'cut-corner bg-(--deep-teal) p-4 text-white ring-2 ring-(--teal-bright)'
            : 'cut-corner bg-white p-4 text-ink ring-1 ring-ink/10';
          const labelClass = n.emphasis
            ? 'text-xs uppercase tracking-[0.18em] text-(--teal-bright)'
            : 'text-xs uppercase tracking-[0.18em] text-ink/50';
          const inner = (
            <>
              <div className={labelClass}>{n.region}</div>
              <div className="mt-1 text-base font-semibold sm:text-lg">
                {n.name}
              </div>
            </>
          );
          return (
            <li key={n.name} className={cardClass}>
              {n.href ? (
                <a
                  href={n.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {inner}
                </a>
              ) : (
                inner
              )}
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-sm opacity-70">
        Part of the European Time Machine federation · timemachine.eu
      </p>
    </div>
  );
}
