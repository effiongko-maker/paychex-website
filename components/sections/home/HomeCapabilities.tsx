import Link from "next/link";

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

          <Reveal direction="up" distance={motionTokens.distance.sm} delay={0.1}>
            <div className="border-t border-border-subtle pt-8 md:pt-10">
              <p className="mb-3 text-sm font-medium tracking-wide text-foreground/60">
                Featured service
              </p>
              <Link
                href={homeCapabilities.featuredService.href}
                className="group inline-flex max-w-3xl flex-col gap-2 rounded-control focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
              >
                <span className="text-xl font-medium underline-offset-4 group-hover:underline md:text-2xl">
                  {homeCapabilities.featuredService.label}
                </span>
                <span className="max-w-2xl text-base leading-relaxed text-foreground/70">
                  {homeCapabilities.featuredService.description}
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
