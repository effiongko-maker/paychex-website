import Link from "next/link";

import { FadeIn } from "@/components/motion/FadeIn";
import { Reveal } from "@/components/motion/Reveal";
import { CapabilitySystem } from "@/components/sections/home/CapabilitySystem";
import { PageHero } from "@/components/patterns/PageHero";
import { ImpactMetricsPanel } from "@/components/sections/home/ImpactMetricsPanel";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
  homeHero,
} from "@/config/home";
import { cn } from "@/lib/cn";
import { motionTokens } from "@/lib/motion";

export function HomeHero() {
  return (
    <Section
      background="surface"
      className="flex min-h-svh flex-col justify-center pt-10 pb-20 md:pt-12 md:pb-24 lg:pt-14 lg:pb-28"
    >
      <Container>
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-12 lg:gap-16 xl:gap-24">
          <Reveal direction="up" distance={motionTokens.distance.sm}>
            <PageHero
              variant="content"
              maxWidth="full"
              title={
                <>
                  {homeHero.title.lead}
                  <br />
                  {homeHero.title.emphasis}
                </>
              }
              subtitle={homeHero.subtitle}
              actions={
                <>
                  <Link
                    href={homeHero.primary.href}
                    className={cn(
                      buttonVariants({ variant: "primary", size: "lg" }),
                    )}
                  >
                    {homeHero.primary.label}
                  </Link>
                  <Link
                    href={homeHero.secondary.href}
                    className={cn(
                      buttonVariants({ variant: "secondary", size: "lg" }),
                    )}
                  >
                    {homeHero.secondary.label}
                  </Link>
                </>
              }
            />
          </Reveal>

          <div className="relative md:justify-self-end md:w-full">
            <FadeIn duration={motionTokens.duration.slow}>
              <CapabilitySystem />
            </FadeIn>
            <ImpactMetricsPanel />
          </div>
        </div>
      </Container>
    </Section>
  );
}
