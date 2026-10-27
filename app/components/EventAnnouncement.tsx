import Image from 'next/image';
import type { HomeLocale } from '../content/types';

const eventCopy = {
  nl: {
    label: 'Kom erbij · 29 november 2026',
    title: 'Lancering Sranan Story Collective',
    intro:
      'Samen met Suriname Tijd Machine lanceert Sranan Story Collective het nieuwe collectief. Kom langs voor een talkshow, ontmoetingen en een afsluitende borrel.',
    date: 'Zondag 29 november 2026',
    time: 'Inloop 14:00 · programma 14:15–17:30 uur',
    location: 'Zandkasteel, Amsterdam-Zuidoost',
    address: 'Bijlmerplein 888 · vlak bij station Bijlmer-ArenA',
    signup: 'Meld je aan',
    capacity: 'Maximaal 100 plaatsen · aanmelden via Google Forms',
    more: 'Meer over het evenement',
    flyer: 'Bekijk de flyer',
    flyerAlt:
      'Flyer voor de lancering van Sranan Story Collective op 29 november 2026 in Zandkasteel, Amsterdam-Zuidoost.',
  },
  en: {
    label: 'Join us · 29 November 2026',
    title: 'Sranan Story Collective launch',
    intro:
      'Sranan Story Collective is launching together with Suriname Time Machine. Join us for a talk show, networking and drinks.',
    date: 'Sunday 29 November 2026',
    time: 'Doors open 14:00 · programme 14:15–17:30',
    location: 'Zandkasteel, Amsterdam-Zuidoost',
    address: 'Bijlmerplein 888 · near Bijlmer-ArenA station',
    signup: 'Sign up',
    capacity: 'Limited to 100 places · register via Google Forms',
    more: 'More about the event',
    flyer: 'View the flyer (Dutch)',
    flyerAlt:
      'Dutch flyer for the Sranan Story Collective launch on 29 November 2026 at Zandkasteel, Amsterdam-Zuidoost.',
  },
};

export function EventAnnouncement({ locale }: { locale: HomeLocale }) {
  const copy = eventCopy[locale];

  return (
    <section
      id="ssc-lancering"
      aria-labelledby="ssc-launch-title"
      className="bg-(--cream) px-4 py-10 sm:px-6 sm:py-14 lg:px-10"
    >
      <div className="cut-corner mx-auto grid max-w-6xl gap-8 border border-ink/15 bg-white p-5 sm:p-8 md:grid-cols-[minmax(0,1fr)_220px] md:items-center lg:p-10">
        <div className="min-w-0">
          <p className="flag-label text-ink/80">{copy.label}</p>
          <h2
            id="ssc-launch-title"
            className="mt-3 text-2xl leading-tight font-semibold text-ink sm:text-3xl"
          >
            {copy.title}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-ink/85">
            {copy.intro}
          </p>
          <div className="mt-5 space-y-3 border-l-2 border-teal-bright pl-4 text-base leading-7">
            <p>
              <time dateTime="2026-11-29" className="block font-semibold">
                {copy.date}
              </time>
              <span className="block">{copy.time}</span>
            </p>
            <p>
              <span className="block font-semibold">{copy.location}</span>
              <span className="block">{copy.address}</span>
            </p>
          </div>
          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
            <a
              href="https://forms.gle/JXyYdhcaZqjm9niN7"
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 bg-ink px-6 py-3 font-semibold text-white! transition-colors hover:bg-teal-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink sm:w-auto"
            >
              {copy.signup}
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://srananstorycollective.com/#save-the-date"
              className="inline-flex min-h-11 items-center underline decoration-teal-strong/60 underline-offset-4 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            >
              {copy.more}
            </a>
          </div>
          <p className="mt-3 text-sm leading-6 text-ink/80">{copy.capacity}</p>
        </div>
        <a
          href="/images/ssc-lancering-29-november-2026.png"
          className="mx-auto block w-full max-w-56 underline underline-offset-4 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
        >
          <Image
            src="/images/ssc-lancering-29-november-2026.png"
            alt={copy.flyerAlt}
            width={1120}
            height={1584}
            sizes="224px"
            className="h-auto w-full border border-ink/10"
          />
          <span className="mt-2 inline-flex min-h-11 items-center text-sm">
            {copy.flyer}
          </span>
        </a>
      </div>
    </section>
  );
}
