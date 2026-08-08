import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { aboutCredibility } from "@/config/about";
import { cn } from "@/lib/cn";
import { compactSectionClass } from "@/lib/layout";
import { motionTokens } from "@/lib/motion";

export function AboutCredibility() {
  return (
    <Section
      background="surface"
      padding="none"
      className={compactSectionClass}
    >
      <Container>
        <Reveal direction="up" distance={motionTokens.distance.sm}>
          <ul className="grid list-none grid-cols-2 border-y border-border-subtle lg:grid-cols-4">
            {aboutCredibility.facts.map((fact, index) => {
              const isFirst = index === 0;
              const isLast = index === aboutCredibility.facts.length - 1;

              return (
                <li
                  key={fact.label}
                  className={cn(
                    "flex flex-col gap-3 border-border-subtle py-8 sm:px-6 lg:px-8 lg:py-10",
                    "border-b lg:border-b-0 lg:border-r",
                    "odd:border-r lg:odd:border-r",
                    "[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+2)]:border-b-0",
                    "lg:last:border-r-0",
                    isFirst && "sm:pl-0",
                    isLast && "sm:pr-0",
                  )}
                >
                  <Text
                    variant="caption"
                    as="span"
                    className="tracking-[0.12em] text-muted-foreground/50 uppercase"
                  >
                    {fact.label}
                  </Text>
                  <Heading as="p" variant="h4" className="font-medium">
                    {fact.value}
                  </Heading>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
