import type { Metadata } from "next";

import { Reveal } from "@/components/motion/Reveal";
import { WorkEngagement } from "@/components/sections/work/WorkEngagement";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { workPage } from "@/config/work";
import { cn } from "@/lib/cn";
import { exhibitionSectionClass, pageHeroClass } from "@/lib/layout";
import { motionTokens } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Evidence of PayChex delivery across technology, infrastructure and operations—for government, enterprise and development partners since 2008.",
};

/** Exhibition rhythm: hero (light) → dark → light → dark → light (final) → footer (dark) */
const engagementBackgrounds = [
  "inverse",
  "surface",
  "inverse",
  "surface",
] as const;

export default function WorkPage() {
  const lastIndex = workPage.engagements.length - 1;

  return (
    <>
      <Section background="surface" padding="none" className={pageHeroClass}>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col gap-5 lg:col-span-7 md:gap-6">
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
                    {workPage.hero.label}
                  </Text>
                </div>
              </Reveal>
              <Reveal
                direction="up"
                distance={motionTokens.distance.md}
                delay={0.06}
                duration={motionTokens.duration.slow}
              >
                <Heading variant="display">{workPage.hero.headline}</Heading>
              </Reveal>
              <Reveal
                direction="up"
                distance={motionTokens.distance.sm}
                delay={0.12}
                duration={motionTokens.duration.slow}
              >
                <Heading variant="lead" className="max-w-measure">
                  {workPage.hero.lede}
                </Heading>
              </Reveal>
            </div>
            <div className="flex flex-col justify-end lg:col-span-5 lg:col-start-8">
              <Reveal
                direction="up"
                distance={motionTokens.distance.sm}
                delay={0.16}
                duration={motionTokens.duration.slow}
              >
                <Text variant="muted" className="max-w-measure">
                  {workPage.hero.body}
                </Text>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {workPage.engagements.map((engagement, index) => {
        const background = engagementBackgrounds[index] ?? "surface";
        const inverse = background === "inverse";
        const isLast = index === lastIndex;

        return (
          <Section
            key={engagement.id}
            id={engagement.id}
            background={background}
            padding="none"
            className={cn(
              exhibitionSectionClass,
              /* Final project ends with deliberate pause before the global footer */
              isLast && "pb-0",
            )}
          >
            <Container>
              <WorkEngagement engagement={engagement} inverse={inverse} />
            </Container>

            {isLast ? (
              <div className="pt-[7.5rem] md:pt-36 lg:pt-40" aria-hidden>
                <Container>
                  <div className="h-px w-full bg-border-subtle" />
                </Container>
                <div className="h-16 md:h-20 lg:h-24" />
              </div>
            ) : null}
          </Section>
        );
      })}
    </>
  );
}
