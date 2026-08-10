import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { aboutCapabilities } from "@/config/about";
import { chapterSectionClass } from "@/lib/layout";
import { motionTokens } from "@/lib/motion";

export function AboutCapabilities() {
  return (
    <Section background="muted" className={chapterSectionClass}>
      <Container>
        <div className="flex flex-col gap-14 md:gap-16">
          <Reveal
            direction="up"
            distance={motionTokens.distance.sm}
            className="w-full max-w-statement"
          >
            <div className="flex flex-col gap-5 md:gap-6">
              <Heading variant="h1" className="font-medium">
                {aboutCapabilities.headline}
              </Heading>
              <Heading variant="lead" className="max-w-measure">
                {aboutCapabilities.supporting}
              </Heading>
            </div>
          </Reveal>

          <ul className="grid list-none grid-cols-1 gap-px overflow-hidden bg-border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {aboutCapabilities.pillars.map((pillar, index) => (
              <Reveal
                key={pillar.title}
                direction="up"
                distance={motionTokens.distance.sm}
                delay={index * 0.05}
                className="h-full"
              >
                <li className="flex h-full flex-col gap-5 bg-muted p-7 md:gap-6 md:p-8">
                  <Text
                    variant="caption"
                    as="span"
                    className="text-muted-foreground/55"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Text>
                  <Heading as="h3" variant="h3" className="font-medium">
                    {pillar.title}
                  </Heading>
                  <Text variant="muted" className="text-sm leading-[1.8]">
                    {pillar.description}
                  </Text>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
