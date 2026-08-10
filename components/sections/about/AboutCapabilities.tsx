import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { aboutCapabilities } from "@/config/about";
import { cn } from "@/lib/cn";
import { chapterSectionClass } from "@/lib/layout";
import { motionTokens } from "@/lib/motion";

export function AboutCapabilities() {
  return (
    <Section background="muted" className={chapterSectionClass}>
      <Container className="max-w-[90rem]">
        <div className="flex flex-col gap-16 md:gap-20 lg:gap-24">
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

          <ul className="grid list-none grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-14 xl:grid-cols-5 xl:gap-0">
            {aboutCapabilities.pillars.map((pillar, index) => (
              <li
                key={pillar.title}
                className={cn(
                  "min-w-0",
                  "xl:border-l xl:border-border-subtle xl:px-8",
                  "xl:first:border-l-0 xl:first:pl-0 xl:last:pr-0",
                )}
              >
                <Reveal
                  direction="up"
                  distance={motionTokens.distance.sm}
                  delay={index * 0.05}
                  className="flex h-full min-w-0 flex-col gap-4 md:gap-5"
                >
                  <Text
                    variant="caption"
                    as="span"
                    className="text-muted-foreground/55"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Text>
                  <Heading
                    as="h3"
                    variant="h3"
                    className="font-medium text-pretty"
                  >
                    {pillar.title}
                  </Heading>
                  <Text variant="muted" className="text-sm leading-[1.8]">
                    {pillar.description}
                  </Text>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
