import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { homeCta } from "@/config/home";
import { cn } from "@/lib/cn";
import { chapterCtaClass, beforeFooterClass } from "@/lib/layout";
import { motionTokens } from "@/lib/motion";

export function HomeCta() {
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
              <Heading variant="display">{homeCta.headline}</Heading>
              <Heading variant="lead" className="max-w-measure">
                {homeCta.supporting}
              </Heading>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href={homeCta.primary.href}
                className={cn(
                  buttonVariants({ variant: "primary", size: "lg" }),
                )}
              >
                {homeCta.primary.label}
              </Link>
              <TextLink
                href={homeCta.secondary.href}
                className="text-base underline-offset-8"
              >
                {homeCta.secondary.label}
              </TextLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
