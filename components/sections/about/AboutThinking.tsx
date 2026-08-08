import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { aboutThinking } from "@/config/about";
import { cn } from "@/lib/cn";
import { chapterSignatureClass } from "@/lib/layout";
import { motionTokens } from "@/lib/motion";

export function AboutThinking() {
  return (
    <Section background="inverse" className={chapterSignatureClass}>
      <Container>
        <div className="flex flex-col gap-14 md:gap-16 lg:gap-20">
          <Reveal
            direction="up"
            distance={motionTokens.distance.sm}
            className="w-full max-w-statement"
          >
            <div className="flex flex-col gap-5 md:gap-6">
              <Heading
                variant="h1"
                className="font-medium text-inverse-foreground"
              >
                {aboutThinking.headline}
              </Heading>
              <Heading
                variant="lead"
                className="max-w-measure text-inverse-foreground/45"
              >
                {aboutThinking.supporting}
              </Heading>
            </div>
          </Reveal>

          <ul className="grid list-none grid-cols-1 gap-0 border-t border-border-inverse md:grid-cols-2">
            {aboutThinking.beliefs.map((belief, index) => (
              <Reveal
                key={belief.title}
                direction="up"
                distance={motionTokens.distance.sm}
                delay={index * 0.05}
              >
                <li
                  className={cn(
                    "flex flex-col gap-5 border-border-inverse py-8",
                    "border-b last:border-b-0",
                    "md:gap-5 md:px-8 md:py-12 md:odd:border-r md:[&:nth-last-child(-n+2)]:border-b-0",
                    index === 0 && "md:pl-0",
                    index % 2 === 1 && "md:pr-0",
                  )}
                >
                  <Text variant="caption" as="span" className="text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </Text>
                  <Heading
                    as="h3"
                    variant="h2"
                    className="font-medium text-inverse-foreground"
                  >
                    {belief.title}
                  </Heading>
                  <Text className="max-w-measure text-sm leading-[1.8] text-inverse-foreground/42">
                    {belief.description}
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
