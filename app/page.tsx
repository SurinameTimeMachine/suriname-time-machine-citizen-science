import {
  ApplicationsList,
  Navigation,
  Section01Hero,
  Section02Intro,
  Section03CaseStudy,
  Section04Methodology,
  Section05Partners,
  Section06Contact,
  SiteFooter,
} from './components';
import {
  navLinks,
  section01HeroContent,
  section02IntroContent,
  section03CaseStudyContent,
  section04MethodologyContent,
  section05PartnersContent,
  section06ContactContent,
} from './content/home';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Navigation navLinks={navLinks} />

      <main className="flex flex-col gap-0">
        <Section01Hero
          quickHighlights={section01HeroContent.highlights}
          heroStats={section01HeroContent.stats}
          backgroundAsset={section01HeroContent.background}
        />

        <section className="relative isolate overflow-hidden bg-white pb-20 pt-16">
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle_at_top,rgba(52,209,179,0.25),transparent_65%)] lg:block" />
          <div className="mx-auto flex max-w-6xl justify-start px-4 sm:px-6 lg:px-10">
            <div className="w-full lg:w-[85%] lg:-translate-x-8">
              <Section02Intro
                storyParagraphs={section02IntroContent.paragraphs}
                sourceParagraph={section02IntroContent.source}
                portraitAsset={section02IntroContent.portrait}
              >
                <ApplicationsList resources={section02IntroContent.resources} />
              </Section02Intro>
            </div>
          </div>
        </section>

        <section className="relative isolate bg-(--cream) py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(11,60,52,0.08),transparent_55%)]" />
          <div className="mx-auto flex max-w-6xl justify-end px-4 sm:px-6 lg:px-10">
            <div className="w-full lg:w-[88%] lg:translate-x-8">
              <Section03CaseStudy
                plantationParagraphs={section03CaseStudyContent.paragraphs}
                plantationCaptions={section03CaseStudyContent.captions}
                plantationAsset={section03CaseStudyContent.plantationAsset}
                sourceParagraph={section03CaseStudyContent.source}
              />
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-white py-24">
          <div className="pointer-events-none absolute -left-10 top-0 hidden h-full w-1/3 bg-[linear-gradient(135deg,rgba(52,209,179,0.15),transparent)] lg:block" />
          <div className="mx-auto flex max-w-6xl justify-start px-4 sm:px-6 lg:px-10">
            <div className="w-full lg:w-[90%]">
              <Section04Methodology
                missionParagraphs={
                  section04MethodologyContent.missionParagraphs
                }
                mapParagraphs={section04MethodologyContent.mapParagraphs}
                mapAsset={section04MethodologyContent.mapAsset}
                teamParagraphs={section04MethodologyContent.teamParagraphs}
                employees={section04MethodologyContent.employees}
                infrastructureParagraph={
                  section04MethodologyContent.infrastructureParagraph
                }
              />
            </div>
          </div>
        </section>

        <section className="relative isolate bg-linear-to-b from-white to-sand py-24">
          <div className="pointer-events-none absolute inset-y-0 right-10 w-48 bg-[linear-gradient(180deg,rgba(11,60,52,0.12),transparent)]" />
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <Section05Partners
              partners={section05PartnersContent.partners}
              mapAsset={section05PartnersContent.mapAsset}
            />
          </div>
        </section>

        <section className="relative isolate bg-(--deep-teal)/5 pb-24 pt-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,60,52,0.12),transparent_60%)]" />
          <div className="mx-auto flex max-w-6xl justify-end px-4 sm:px-6 lg:px-10">
            <div className="w-full lg:w-[80%] lg:translate-x-6">
              <Section06Contact
                email={section06ContactContent.email}
                phone={section06ContactContent.phone}
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter organizationLabel="SCiTMI · Suriname Citizen Time Machine Incubator" />
    </div>
  );
}
