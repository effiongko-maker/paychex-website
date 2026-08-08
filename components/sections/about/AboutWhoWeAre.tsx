import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { aboutIdentity } from "@/config/about";
import { chapterSectionClass } from "@/lib/layout";
import { motionTokens } from "@/lib/motion";

export function AboutWhoWeAre() {
  return (
    <Section background="muted" className={chapterSectionClass}>
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          <Reveal
            direction="up"
            distance={motionTokens.distance.sm}
            className="lg:col-span-5"
          >
            <Heading variant="h1" className="font-medium">
              {aboutIdentity.statement.lead}
              <br />
              {aboutIdentity.statement.emphasis}
            </Heading>
          </Reveal>

          <Reveal
            direction="up"
            distance={motionTokens.distance.sm}
            delay={0.08}
            className="flex flex-col gap-8 md:gap-9 lg:col-span-7"
          >
            {aboutIdentity.paragraphs.map((paragraph) => (
              <Text
                key={paragraph.slice(0, 32)}
                variant="muted"
                className="max-w-measure text-base leading-[1.85] md:text-[17px] md:leading-[1.9]"
              >
                {paragraph}
              </Text>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
