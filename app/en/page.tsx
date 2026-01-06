import type { Metadata } from 'next';
import {
  ApplicationsList,
  Navigation,
  Section01Hero,
  Section02Intro,
  Section03CaseStudy,
  Section04Methodology,
  Section05Partners,
  Section06Contact,
  SetHtmlLang,
  SiteFooter,
} from '../components';
import { homeContent } from '../content/home.en';

export const metadata: Metadata = {
  title: homeContent.seo.title,
  description: homeContent.seo.description,
  alternates: {
    canonical: '/en',
    languages: {
      nl: '/',
      en: '/en',
    },
  },
  openGraph: {
    title: homeContent.seo.title,
    description: homeContent.seo.description,
    url: '/en',
    type: 'website',
    locale: homeContent.seo.openGraphLocale,
  },
  twitter: {
    card: 'summary_large_image',
    title: homeContent.seo.title,
    description: homeContent.seo.description,
  },
};

export default function HomeEn() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <SetHtmlLang lang="en" />
      <Navigation
        navLinks={homeContent.navLinks}
        locale="en"
        locationLabel={homeContent.ui.navigation.locationLabel}
        projectCode={homeContent.ui.navigation.projectCode}
        projectSubtitle={homeContent.ui.navigation.projectSubtitle}
        languageToggleLabel={homeContent.ui.navigation.languageToggleLabel}
      />

      <main className="flex flex-col gap-0">
        <Section01Hero
          quickHighlights={homeContent.section01Hero.highlights}
          heroStats={homeContent.section01Hero.stats}
          backgroundAsset={homeContent.section01Hero.background}
          tagline={homeContent.ui.section01Hero.tagline}
          title={homeContent.ui.section01Hero.title}
          lead={homeContent.ui.section01Hero.lead}
          kicker={homeContent.ui.section01Hero.kicker}
          primaryCtaLabel={homeContent.ui.section01Hero.primaryCtaLabel}
          textureAlt={homeContent.ui.section01Hero.textureAlt}
          textureCaption={homeContent.ui.section01Hero.textureCaption}
          snapshotLabel={homeContent.ui.section01Hero.snapshotLabel}
          snapshotFooter={homeContent.ui.section01Hero.snapshotFooter}
        />

        <section className="relative isolate overflow-hidden bg-white pb-20 pt-16">
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle_at_top,rgba(52,209,179,0.25),transparent_65%)] lg:block" />
          <div className="mx-auto flex max-w-6xl justify-start px-4 sm:px-6 lg:px-10">
            <div className="w-full lg:w-[85%] lg:-translate-x-8">
              <Section02Intro
                storyParagraphs={homeContent.section02Intro.paragraphs}
                sourceParagraph={homeContent.section02Intro.source}
                portraitAsset={homeContent.section02Intro.portrait}
                eyebrow={homeContent.ui.section02Intro.eyebrow}
              >
                <ApplicationsList
                  resources={homeContent.section02Intro.resources}
                />
              </Section02Intro>
            </div>
          </div>
        </section>

        <section className="relative isolate bg-(--cream) py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(11,60,52,0.08),transparent_55%)]" />
          <div className="mx-auto flex max-w-6xl justify-end px-4 sm:px-6 lg:px-10">
            <div className="w-full lg:w-[88%] lg:translate-x-8">
              <Section03CaseStudy
                plantationParagraphs={homeContent.section03CaseStudy.paragraphs}
                plantationCaptions={homeContent.section03CaseStudy.captions}
                plantationAsset={homeContent.section03CaseStudy.plantationAsset}
                sourceParagraph={homeContent.section03CaseStudy.source}
                label={homeContent.ui.section03CaseStudy.label}
                title={homeContent.ui.section03CaseStudy.title}
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
                  homeContent.section04Methodology.missionParagraphs
                }
                mapParagraphs={homeContent.section04Methodology.mapParagraphs}
                mapAsset={homeContent.section04Methodology.mapAsset}
                teamParagraphs={homeContent.section04Methodology.teamParagraphs}
                employees={homeContent.section04Methodology.employees}
                infrastructureParagraph={
                  homeContent.section04Methodology.infrastructureParagraph
                }
                title={homeContent.ui.section04Methodology.title}
                projectTeamTitle={
                  homeContent.ui.section04Methodology.projectTeamTitle
                }
                relatedEmployeesLabel={
                  homeContent.ui.section04Methodology.relatedEmployeesLabel
                }
                digitalInfrastructureTitle={
                  homeContent.ui.section04Methodology.digitalInfrastructureTitle
                }
                departmentsLabel={
                  homeContent.ui.section04Methodology.departmentsLabel
                }
                departmentsValue={
                  homeContent.ui.section04Methodology.departmentsValue
                }
                tagsLabel={homeContent.ui.section04Methodology.tagsLabel}
                tagsValue={homeContent.ui.section04Methodology.tagsValue}
              />
            </div>
          </div>
        </section>

        <section className="relative isolate bg-linear-to-b from-white to-sand py-24">
          <div className="pointer-events-none absolute inset-y-0 right-10 w-48 bg-[linear-gradient(180deg,rgba(11,60,52,0.12),transparent)]" />
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <Section05Partners
              partners={homeContent.section05Partners.partners}
              mapAsset={homeContent.section05Partners.mapAsset}
              title={homeContent.ui.section05Partners.title}
              intro={homeContent.ui.section05Partners.intro}
              figureSuffix={homeContent.ui.section05Partners.figureSuffix}
            />
          </div>
        </section>

        <section className="relative isolate bg-(--deep-teal)/5 pb-24 pt-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,60,52,0.12),transparent_60%)]" />
          <div className="mx-auto flex max-w-6xl justify-end px-4 sm:px-6 lg:px-10">
            <div className="w-full lg:w-[80%] lg:translate-x-6">
              <Section06Contact
                email={homeContent.section06Contact.email}
                phone={homeContent.section06Contact.phone}
                title={homeContent.ui.section06Contact.title}
                calloutTitle={homeContent.ui.section06Contact.calloutTitle}
                calloutBody={homeContent.ui.section06Contact.calloutBody}
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter
        organizationLabel={homeContent.ui.footer.organizationLabel}
        coordinatorLine={homeContent.ui.footer.coordinatorLine}
      />
    </div>
  );
}
