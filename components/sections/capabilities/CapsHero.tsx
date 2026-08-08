import Image from "next/image";

import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Section } from "@/components/ui/Section";
import { assets } from "@/config/assets";
import { capabilitiesHub } from "@/config/capabilities";
import { pageHeroClass } from "@/lib/layout";
import { motionTokens } from "@/lib/motion";

export function CapsHero() {
  const { hero } = capabilitiesHub;

  return (
    <Section background="surface" padding="none" className={pageHeroClass}>
      <Container>
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal
            direction="up"
            distance={motionTokens.distance.sm}
            className="flex flex-col gap-6 md:gap-7 lg:col-span-7"
          >
            <Heading variant="display">
              {hero.headline.lead}
              <br />
              {hero.headline.emphasis}
            </Heading>
            <Heading variant="lead" className="max-w-measure">
              {hero.supporting}
            </Heading>
          </Reveal>

          <Reveal
            direction="up"
            distance={motionTokens.distance.md}
            delay={0.08}
            className="lg:col-span-5"
          >
            <MediaFrame aspectClassName="aspect-[4/5] md:aspect-[5/6] lg:max-h-[26rem]">
              <Image
                src={assets.images.home.capabilitiesPage.hero}
                alt={hero.media.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </MediaFrame>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
