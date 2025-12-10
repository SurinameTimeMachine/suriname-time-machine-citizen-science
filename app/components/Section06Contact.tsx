type Section06ContactProps = {
  email: string;
  phone: string;
};

export function Section06Contact({ email, phone }: Section06ContactProps) {
  return (
    <section
      id="contact"
      className="cut-corner space-y-6 border border-slate-200 bg-white px-8 py-10"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p className="mt-2">{email}</p>
          <p>{phone}</p>
        </div>
        <div className="bg-sand px-6 py-4 text-sm shadow-[0_15px_35px_rgba(0,30,24,0.08)] ring-1 ring-white/40">
          <p className="font-semibold text-ink">
            Stay aligned with Suriname’s heritage work.
          </p>
          <p className="mt-1 text-ink/80">
            Share datasets, plan workshops, or align citizen science efforts
            with the Suriname Time Machine network.
          </p>
        </div>
      </div>
    </section>
  );
}
