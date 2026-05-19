'use client';

type QrTargetWithSvg = {
  label: string;
  url: string;
  description?: string;
  svg: string;
};

type QrCodesProps = {
  targets?: QrTargetWithSvg[];
};

export function QrCodes({ targets }: QrCodesProps) {
  const list = targets ?? [];
  return (
    <div className="mx-auto max-w-xl">
      <div className="grid grid-cols-4 gap-4">
        {list.map((t) => (
          <div
            key={`qr-${t.url}`}
            className="flex flex-col items-center gap-2 bg-white p-3 text-ink"
          >
            <div
              className="aspect-square w-full [&_svg]:h-full [&_svg]:w-full"
              dangerouslySetInnerHTML={{ __html: t.svg }}
            />
            <div className="text-center">
              <p className="text-sm font-semibold">{t.label}</p>
              {t.description ? (
                <p className="mt-1 text-xs text-ink/60">{t.description}</p>
              ) : null}
              <p className="mt-2 break-all font-mono text-[10px] text-ink/50">
                {t.url.replace(/^https?:\/\//, '')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
