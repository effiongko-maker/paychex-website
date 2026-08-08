import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { aboutApproach } from "@/config/about";
import { cn } from "@/lib/cn";
import { chapterSectionClass } from "@/lib/layout";
import { motionTokens } from "@/lib/motion";

export function AboutApproach() {
  return (
    <Section background="surface" className={chapterSectionClass}>
      <Container>
        <div className="flex flex-col gap-14 md:gap-16 lg:gap-20">
          <Reveal
            direction="up"
            distance={motionTokens.distance.sm}
            className="w-full max-w-statement"
          >
            <div className="flex flex-col gap-5 md:gap-6">
              <Heading variant="h1" className="font-medium">
                {aboutApproach.headline}
              </Heading>
              <Heading variant="lead" className="max-w-measure">
                {aboutApproach.supporting}
              </Heading>
            </div>
          </Reveal>

          <ol className="grid list-none grid-cols-1 gap-0 border-t border-border sm:grid-cols-2 lg:grid-cols-4">
            {aboutApproach.principles.map((principle, index) => (
              <Reveal
                key={principle.title}
                direction="up"
                distance={motionTokens.distance.sm}
                delay={index * 0.06}
              >
                <li
                  className={cn(
                    "flex h-full flex-col gap-5 border-border py-8",
                    "border-b last:border-b-0",
                    "sm:px-6 sm:py-10 sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0",
                    "lg:gap-6 lg:border-b-0 lg:border-r lg:px-8 lg:py-12 lg:last:border-r-0",
                    index === 0 && "sm:pl-0",
                    index === aboutApproach.principles.length - 1 && "sm:pr-0",
                  )}
                >
                  <span className="font-sans text-3xl font-medium tracking-tight text-foreground/90 sm:text-4xl">
                    {principle.index}
                  </span>
                  <Heading as="h3" variant="h3" className="font-medium">
                    {principle.title}
                  </Heading>
                  <Text variant="muted" className="text-sm leading-[1.8]">
                    {principle.description}
                  </Text>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
