type Section06ContactProps = {
  email: string;
  phone: string;
  title: string;
  calloutTitle: string;
  calloutBody: string;
};

export function Section06Contact({
  email,
  phone,
  title,
  calloutTitle,
  calloutBody,
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
          <p>{phone}</p>
        </div>
        <div className="bg-sand px-6 py-4 text-sm shadow-[0_15px_35px_rgba(0,30,24,0.08)] ring-1 ring-white/40">
          <p className="font-semibold text-ink">{calloutTitle}</p>
          <p className="mt-1 text-ink/80">{calloutBody}</p>
        </div>
      </div>
    </section>
  );
}
