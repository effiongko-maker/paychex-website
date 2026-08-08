import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { aboutCta } from "@/config/about";
import { cn } from "@/lib/cn";
import { beforeFooterClass, chapterCtaClass } from "@/lib/layout";
import { motionTokens } from "@/lib/motion";

export function AboutCta() {
  return (
    <Section
      background="muted"
      padding="none"
      className={cn("relative", chapterCtaClass, beforeFooterClass)}
    >
      <Container>
        <Reveal direction="up" distance={motionTokens.distance.sm}>
          <div className="flex max-w-3xl flex-col gap-7 md:gap-8">
            <div className="flex flex-col gap-4 md:gap-5">
              <Heading variant="display">{aboutCta.headline}</Heading>
              <Heading variant="lead" className="max-w-measure">
                {aboutCta.supporting}
              </Heading>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href={aboutCta.primary.href}
                className={cn(
                  buttonVariants({ variant: "primary", size: "lg" }),
                )}
              >
                {aboutCta.primary.label}
              </Link>
              <TextLink
                href={aboutCta.secondary.href}
                className="text-base underline-offset-8"
              >
                {aboutCta.secondary.label}
              </TextLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
