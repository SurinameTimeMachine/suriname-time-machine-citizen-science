type Section06ContactProps = {
  email: string;
  title: string;
  calloutTitle: string;
  calloutBody: string;
  linksTitle: string;
  links?: Array<{ label: string; href: string }>;
};

export function Section06Contact({
  email,
  title,
  calloutTitle,
  calloutBody,
  linksTitle,
  links,
}: Section06ContactProps) {
  return (
    <section
      id="contact"
      className="cut-corner space-y-6 border border-slate-200 bg-white px-8 py-10"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-semibold">{title}</h2>
          <p className="mt-2">{email}</p>
        </div>
        <div className="bg-sand px-6 py-4 text-sm shadow-[0_15px_35px_rgba(0,30,24,0.08)] ring-1 ring-white/40">
          <p className="font-semibold text-ink">{calloutTitle}</p>
          <p className="mt-1 text-ink/80">{calloutBody}</p>

          {!!links?.length && (
            <div className="mt-4 border-t border-ink/10 pt-3">
              <p className="text-xs font-medium tracking-wide text-ink/60 uppercase">
                {linksTitle}
              </p>
              <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      className="text-teal-strong underline decoration-teal-strong/40 underline-offset-2 transition-colors hover:text-teal-strong/80 hover:decoration-teal-strong/60"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
