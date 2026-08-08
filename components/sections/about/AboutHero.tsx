import Image from "next/image";

import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Section } from "@/components/ui/Section";
import { aboutHero } from "@/config/about";
import { pageHeroClass } from "@/lib/layout";
import { motionTokens } from "@/lib/motion";

export function AboutHero() {
  return (
    <Section background="surface" padding="none" className={pageHeroClass}>
      <Container>
        <div className="grid items-end gap-14 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          <Reveal
            direction="up"
            distance={motionTokens.distance.sm}
            className="flex flex-col gap-7 md:gap-8 lg:col-span-8"
          >
            <Heading variant="display">
              {aboutHero.headline.lead}
              <br />
              {aboutHero.headline.emphasis}
            </Heading>
            <Heading variant="lead" className="max-w-measure">
              {aboutHero.supporting}
            </Heading>
          </Reveal>

          <Reveal
            direction="up"
            distance={motionTokens.distance.md}
            delay={0.1}
            className="lg:col-span-4"
          >
            <MediaFrame aspectClassName="aspect-[4/5] md:aspect-[5/6] lg:max-h-[26rem]">
              <Image
                src={aboutHero.media.src}
                alt={aboutHero.media.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 32vw"
                className="object-cover object-center"
              />
            </MediaFrame>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
