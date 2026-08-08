import { AudienceCards } from "@/components/patterns/AudienceCards";
import { CredibilityFacts } from "@/components/patterns/CredibilityFacts";
import { Reveal } from "@/components/motion/Reveal";
import { HomeWorkPreview } from "@/components/sections/home/HomeWorkPreview";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { homeCredibility } from "@/config/home";
import { chapterSectionClass } from "@/lib/layout";
import { motionTokens } from "@/lib/motion";

export function HomeCredibility() {
  return (
    <Section background="surface" padding="none" className={chapterSectionClass}>
      <Container>
        <div className="flex flex-col gap-20 md:gap-24 lg:gap-28">
          <Reveal
            direction="up"
            distance={motionTokens.distance.sm}
            className="w-full max-w-statement"
          >
            <div className="flex flex-col gap-5 md:gap-6">
              <Heading variant="h1">{homeCredibility.headline}</Heading>
              <Heading variant="lead" className="max-w-measure">
                {homeCredibility.supporting}
              </Heading>
            </div>
          </Reveal>

          <Reveal
            direction="up"
            distance={motionTokens.distance.sm}
            delay={0.06}
          >
            <CredibilityFacts facts={homeCredibility.facts} />
          </Reveal>

          <HomeWorkPreview />

          <div className="flex flex-col gap-10 md:gap-12">
            <div className="flex max-w-statement flex-col gap-4">
              <Text variant="eyebrow" as="p">
                {homeCredibility.audiencesLabel}
              </Text>
              <Heading variant="h2">Who we work with.</Heading>
            </div>
            <AudienceCards audiences={homeCredibility.audiences} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
