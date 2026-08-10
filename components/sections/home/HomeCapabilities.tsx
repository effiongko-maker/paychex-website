import { Reveal } from "@/components/motion/Reveal";
import { CapabilityCatalogue } from "@/components/patterns/CapabilityCatalogue";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { homeCapabilities } from "@/config/home";
import { chapterSectionClass } from "@/lib/layout";
import { motionTokens } from "@/lib/motion";

export function HomeCapabilities() {
  return (
    <Section background="surface" className={chapterSectionClass}>
      <Container>
        <div className="flex flex-col gap-14 md:gap-16">
          <Reveal
            direction="up"
            distance={motionTokens.distance.sm}
            className="w-full max-w-statement"
          >
            <div className="flex flex-col gap-5 md:gap-6">
              <Heading variant="h1" className="font-medium">
                {homeCapabilities.headline}
              </Heading>
              <Heading variant="lead" className="max-w-measure">
                {homeCapabilities.supporting}
              </Heading>
            </div>
          </Reveal>

          <Reveal
            direction="up"
            distance={motionTokens.distance.sm}
            delay={0.06}
          >
            <CapabilityCatalogue items={homeCapabilities.catalogue} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
