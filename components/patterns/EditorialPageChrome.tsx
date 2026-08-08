import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import { cn } from "@/lib/cn";
import { beforeFooterClass, chapterCtaClass, pageHeroClass } from "@/lib/layout";
import { motionTokens } from "@/lib/motion";

type PageCta = {
  headline: string;
  supporting: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

export function EditorialPageCta({ cta }: { cta: PageCta }) {
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
              <Heading variant="display">{cta.headline}</Heading>
              <Heading variant="lead" className="max-w-measure">
                {cta.supporting}
              </Heading>
            </div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href={cta.primary.href}
                className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
              >
                {cta.primary.label}
              </Link>
              <TextLink
                href={cta.secondary.href}
                className="text-base underline-offset-8"
              >
                {cta.secondary.label}
              </TextLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export function EditorialPageHero({
  headline,
  supporting,
}: {
  headline: string;
  supporting: string;
}) {
  return (
    <Section background="surface" padding="none" className={pageHeroClass}>
      <Container>
        <Reveal direction="up" distance={motionTokens.distance.sm}>
          <div className="flex max-w-statement flex-col gap-5 md:gap-6">
            <Heading variant="display">{headline}</Heading>
            <Heading variant="lead" className="max-w-measure">
              {supporting}
            </Heading>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
