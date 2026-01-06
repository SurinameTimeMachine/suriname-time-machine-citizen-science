import type { HomeContent } from '../content/types';
import { ApplicationsList } from './ApplicationsList';
import { Navigation } from './Navigation';
import { Section01Hero } from './Section01Hero';
import { Section02Intro } from './Section02Intro';
import { Section03CaseStudy } from './Section03CaseStudy';
import { Section04Methodology } from './Section04Methodology';
import { Section05Partners } from './Section05Partners';
import { Section06Contact } from './Section06Contact';
import { SetHtmlLang } from './SetHtmlLang';
import { SiteFooter } from './SiteFooter';

type HomePageProps = {
  content: HomeContent;
};

export function HomePage({ content }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white text-ink">
      <SetHtmlLang lang={content.locale} />
      <Navigation
        navLinks={content.navLinks}
        locale={content.locale}
        locationLabel={content.ui.navigation.locationLabel}
        projectCode={content.ui.navigation.projectCode}
        projectSubtitle={content.ui.navigation.projectSubtitle}
        languageToggleLabel={content.ui.navigation.languageToggleLabel}
      />

      <main className="flex flex-col gap-0">
        <Section01Hero
          quickHighlights={content.section01Hero.highlights}
          heroStats={content.section01Hero.stats}
          backgroundAsset={content.section01Hero.background}
          tagline={content.ui.section01Hero.tagline}
          title={content.ui.section01Hero.title}
          lead={content.ui.section01Hero.lead}
          kicker={content.ui.section01Hero.kicker}
          primaryCtaLabel={content.ui.section01Hero.primaryCtaLabel}
          textureAlt={content.ui.section01Hero.textureAlt}
          snapshotLabel={content.ui.section01Hero.snapshotLabel}
        />

        <section className="relative isolate overflow-hidden bg-white pb-20 pt-16">
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle_at_top,rgba(52,209,179,0.25),transparent_65%)] lg:block" />
          <div className="mx-auto flex max-w-6xl justify-start px-4 sm:px-6 lg:px-10">
            <div className="w-full lg:w-[85%] lg:-translate-x-8">
              <Section02Intro
                storyParagraphs={content.section02Intro.paragraphs}
                sourceParagraph={content.section02Intro.source}
                sources={content.section02Intro.sources}
                sourcesTitle={content.ui.section02Intro.sourcesTitle}
                sourcesDescription={
                  content.ui.section02Intro.sourcesDescription
                }
                portraitAsset={content.section02Intro.portrait}
                eyebrow={content.ui.section02Intro.eyebrow}
              >
                <ApplicationsList
                  resources={content.section02Intro.resources}
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
                plantationParagraphs={content.section03CaseStudy.paragraphs}
                plantationCaptions={content.section03CaseStudy.captions}
                plantationAsset={content.section03CaseStudy.plantationAsset}
                sourceParagraph={content.section03CaseStudy.source}
                sources={content.section03CaseStudy.sources}
                sourcesTitle={content.ui.section02Intro.sourcesTitle}
                sourcesDescription={
                  content.ui.section02Intro.sourcesDescription
                }
                label={content.ui.section03CaseStudy.label}
                title={content.ui.section03CaseStudy.title}
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
                  content.section04Methodology.missionParagraphs
                }
                mapParagraphs={content.section04Methodology.mapParagraphs}
                mapAsset={content.section04Methodology.mapAsset}
                teamParagraphs={content.section04Methodology.teamParagraphs}
                employees={content.section04Methodology.employees}
                infrastructureParagraph={
                  content.section04Methodology.infrastructureParagraph
                }
                title={content.ui.section04Methodology.title}
                projectTeamTitle={
                  content.ui.section04Methodology.projectTeamTitle
                }
                relatedEmployeesLabel={
                  content.ui.section04Methodology.relatedEmployeesLabel
                }
                digitalInfrastructureTitle={
                  content.ui.section04Methodology.digitalInfrastructureTitle
                }
                departmentsLabel={
                  content.ui.section04Methodology.departmentsLabel
                }
                departmentsValue={
                  content.ui.section04Methodology.departmentsValue
                }
                tagsLabel={content.ui.section04Methodology.tagsLabel}
                tagsValue={content.ui.section04Methodology.tagsValue}
              />
            </div>
          </div>
        </section>

        <section className="relative isolate bg-linear-to-b from-white to-sand py-24">
          <div className="pointer-events-none absolute inset-y-0 right-10 w-48 bg-[linear-gradient(180deg,rgba(11,60,52,0.12),transparent)]" />
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <Section05Partners
              partners={content.section05Partners.partners}
              mapAsset={content.section05Partners.mapAsset}
              title={content.ui.section05Partners.title}
              intro={content.ui.section05Partners.intro}
              figureSuffix={content.ui.section05Partners.figureSuffix}
            />
          </div>
        </section>

        <section className="relative isolate bg-(--deep-teal)/5 pb-24 pt-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,60,52,0.12),transparent_60%)]" />
          <div className="mx-auto flex max-w-6xl justify-end px-4 sm:px-6 lg:px-10">
            <div className="w-full lg:w-[80%] lg:translate-x-6">
              <Section06Contact
                email={content.section06Contact.email}
                title={content.ui.section06Contact.title}
                calloutTitle={content.ui.section06Contact.calloutTitle}
                calloutBody={content.ui.section06Contact.calloutBody}
                linksTitle={content.ui.section06Contact.linksTitle}
                links={content.section06Contact.links}
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter
        organizationLabel={content.ui.footer.organizationLabel}
        coordinatorLine={content.ui.footer.coordinatorLine}
      />
    </div>
  );
}
