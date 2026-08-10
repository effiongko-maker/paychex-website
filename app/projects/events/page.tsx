import type { Metadata } from "next";

import { Reveal } from "@/components/motion/Reveal";
import { WorkEngagement } from "@/components/sections/work/WorkEngagement";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { TextLink } from "@/components/ui/TextLink";
import { eventPortfolioPage } from "@/config/work";
import { cn } from "@/lib/cn";
import {
  beforeFooterClass,
  exhibitionSectionClass,
  pageHeroClass,
} from "@/lib/layout";
import { motionTokens } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Event portfolio",
  description: eventPortfolioPage.hero.lede,
};

/**
 * Events delivery portfolio — linked from Work, not primary navigation.
 * Evidence of institutional event and stakeholder programme delivery.
 */
export default function EventPortfolioPage() {
  const { hero, back, featured, selected, selectedLabel, selectedIntroduction } =
    eventPortfolioPage;

  return (
    <>
      <Section
        background="surface"
        padding="none"
        className={cn(pageHeroClass, "pb-12 md:pb-14 lg:pb-16")}
      >
        <Container>
          <div className="flex max-w-2xl flex-col gap-8 md:gap-10">
            <Reveal direction="up" distance={motionTokens.distance.sm}>
              <TextLink
                href={back.href}
                arrow={false}
                className="text-muted-foreground"
              >
                {back.label}
              </TextLink>
            </Reveal>

            <div className="flex flex-col gap-5 md:gap-6">
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
                    className="text-muted-foreground/50"
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
                <Heading variant="display">{hero.headline}</Heading>
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
        background="inverse"
        padding="none"
        className={exhibitionSectionClass}
      >
        <Container>
          <WorkEngagement
            project={featured}
            inverse
            caption="Featured project"
          />
        </Container>
      </Section>

      <Section
        background="surface"
        padding="none"
        className={cn(exhibitionSectionClass, beforeFooterClass)}
      >
        <Container>
          <div className="flex flex-col gap-14 md:gap-16 lg:gap-20">
            <Reveal direction="up" distance={motionTokens.distance.sm}>
              <div className="flex max-w-2xl flex-col gap-3 md:gap-4">
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
                <Text className="max-w-measure text-[15px] leading-[1.7] text-muted-foreground md:text-base">
                  {selectedIntroduction}
                </Text>
              </div>
            </Reveal>

            <div className="flex flex-col gap-14 md:gap-16 lg:gap-20">
              {selected.map((project) => (
                <WorkEngagement key={project.id} project={project} compact />
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
