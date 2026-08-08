import { Reveal } from "@/components/motion/Reveal";
import { CapabilityCatalogue } from "@/components/patterns/CapabilityCatalogue";
import { CapabilityStory } from "@/components/patterns/CapabilityStory";
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
        <div className="flex flex-col gap-16 md:gap-20">
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

          <div className="flex flex-col">
            <div className="flex flex-col gap-24 md:gap-28 lg:gap-32">
              {homeCapabilities.stories.map((story) => (
                <CapabilityStory key={story.title} story={story} />
              ))}
            </div>

            <div className="mt-14 md:mt-16 lg:mt-20">
              <CapabilityCatalogue
                label={homeCapabilities.catalogueLabel}
                items={homeCapabilities.catalogue}
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
