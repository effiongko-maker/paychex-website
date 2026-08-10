import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { TextLink } from "@/components/ui/TextLink";
import { capabilitiesHub } from "@/config/capabilities";
import { cn } from "@/lib/cn";
import { beforeFooterClass, chapterCtaClass } from "@/lib/layout";
import { motionTokens } from "@/lib/motion";

export function CapsCta() {
  const { cta } = capabilitiesHub;

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
              <Heading variant="display">
                {cta.headline.lead}
                <br />
                {cta.headline.emphasis}
              </Heading>
              <Heading variant="lead" className="max-w-measure">
                {cta.supporting}
              </Heading>
              <Text className="max-w-measure text-base leading-[1.7] text-muted-foreground/75">
                {cta.example}
              </Text>
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
