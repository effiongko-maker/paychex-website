import type { Metadata } from "next";

import { Reveal } from "@/components/motion/Reveal";
import { EventCaseStudy } from "@/components/sections/work/EventCaseStudy";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { TextLink } from "@/components/ui/TextLink";
import { eventPortfolioPage } from "@/config/work";
import { cn } from "@/lib/cn";
import { beforeFooterClass, pageHeroClass } from "@/lib/layout";
import { motionTokens } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Event portfolio",
  description: eventPortfolioPage.hero.lede,
};

/**
 * Events delivery portfolio — linked from Work, not primary navigation.
 * Editorial case-study archive of institutional event delivery.
 */
export default function EventPortfolioPage() {
  const { hero, back, selectedLabel, selectedIntroduction, cases } =
    eventPortfolioPage;

  return (
    <>
      <Section
        background="surface"
        padding="none"
        className={cn(pageHeroClass, "pb-10 md:pb-12 lg:pb-14")}
      >
        <Container>
          <div className="flex max-w-2xl flex-col gap-7 md:gap-8">
            <Reveal direction="up" distance={motionTokens.distance.sm}>
              <TextLink
                href={back.href}
                arrow={false}
                className="text-muted-foreground"
              >
                {back.label}
              </TextLink>
            </Reveal>

            <div className="flex flex-col gap-4 md:gap-5">
              <Reveal
                direction="up"
                distance={motionTokens.distance.sm}
                duration={motionTokens.duration.slow}
              >
                <div className="flex items-center gap-3">
                  <span className="h-px w-5 bg-accent" aria-hidden />
                  <Text
                    variant="caption"
                    as="span"
                    className="tracking-[0.14em] uppercase text-muted-foreground/50"
                  >
                    {hero.label}
                  </Text>
                </div>
              </Reveal>
              <Reveal
                direction="up"
                distance={motionTokens.distance.md}
                delay={0.06}
                duration={motionTokens.duration.slow}
              >
                <Heading variant="display" className="tracking-tight">
                  {hero.headline}
                </Heading>
              </Reveal>
              <Reveal
                direction="up"
                distance={motionTokens.distance.sm}
                delay={0.12}
                duration={motionTokens.duration.slow}
              >
                <Heading variant="lead" className="max-w-measure">
                  {hero.lede}
                </Heading>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section
        background="surface"
        padding="none"
        className={cn("pt-2 md:pt-4", beforeFooterClass)}
      >
        <Container>
          <div className="flex flex-col gap-10 md:gap-12 lg:gap-14">
            <Reveal direction="up" distance={motionTokens.distance.sm}>
              <div className="flex max-w-2xl flex-col gap-2.5 border-t border-border-subtle pt-8 md:gap-3 md:pt-10">
                <div className="flex items-center gap-3">
                  <span className="h-px w-5 bg-accent" aria-hidden />
                  <Text
                    variant="caption"
                    as="span"
                    className="tracking-[0.14em] uppercase text-muted-foreground/45"
                  >
                    {selectedLabel}
                  </Text>
                </div>
                <Text className="max-w-measure text-[15px] leading-[1.7] text-muted-foreground">
                  {selectedIntroduction}
                </Text>
              </div>
            </Reveal>

            <div className="flex flex-col">
              {cases.map((study, index) => (
                <div
                  key={study.id}
                  className={cn(
                    index > 0 &&
                      "mt-12 border-t border-border-subtle pt-12 md:mt-14 md:pt-14 lg:mt-16 lg:pt-16",
                  )}
                >
                  <EventCaseStudy study={study} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
