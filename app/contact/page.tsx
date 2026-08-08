import type { Metadata } from "next";

import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { TextLink } from "@/components/ui/TextLink";
import { contactPage } from "@/config/contact";
import { cn } from "@/lib/cn";
import { beforeFooterClass, pageHeroClass } from "@/lib/layout";
import { motionTokens } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with PayChex about your programme, technology deployment, infrastructure project or international event.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero — white */}
      <Section background="surface" padding="none" className={pageHeroClass}>
        <Container>
          <div className="flex max-w-statement flex-col gap-6 md:gap-7 lg:gap-8">
            <Reveal
              direction="up"
              distance={motionTokens.distance.sm}
              duration={motionTokens.duration.slow}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-5 bg-accent" aria-hidden />
                <Text
                  variant="caption"
                  as="span"
                >
                  {contactPage.hero.label}
                </Text>
              </div>
            </Reveal>
            <Reveal
              direction="up"
              distance={motionTokens.distance.md}
              delay={0.06}
              duration={motionTokens.duration.slow}
            >
              <Heading variant="display">{contactPage.hero.headline}</Heading>
            </Reveal>
            <Reveal
              direction="up"
              distance={motionTokens.distance.sm}
              delay={0.12}
              duration={motionTokens.duration.slow}
            >
              <Heading
                variant="lead"
                className="max-w-[36rem] text-lg md:text-xl"
              >
                {contactPage.hero.supporting}
              </Heading>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Editorial panels — warm muted */}
      <Section
        background="muted"
        padding="none"
        className="py-20 md:py-24 lg:py-28"
      >
        <Container>
          <div className="grid gap-5 md:gap-6 lg:grid-cols-2 lg:gap-8">
            <Reveal
              direction="up"
              distance={motionTokens.distance.md}
              duration={motionTokens.duration.slow}
            >
              <article className="flex h-full flex-col gap-10 bg-surface px-8 py-10 md:gap-12 md:px-10 md:py-12 lg:px-12 lg:py-14">
                <Heading as="h2" variant="h2">
                  {contactPage.talk.title}
                </Heading>
                <ul className="flex list-none flex-col gap-8 md:gap-9">
                  {contactPage.talk.items.map((item) => {
                    const isExternal = item.label === "LinkedIn";
                    const valueClass =
                      "text-xl tracking-tight text-foreground md:text-2xl";

                    return (
                      <li key={item.label} className="flex flex-col gap-2">
                        <Text
                          variant="caption"
                          as="span"
                        >
                          {item.label}
                        </Text>
                        {item.href && isExternal ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              valueClass,
                              "w-fit rounded-control transition-colors duration-(--duration-base) ease-(--ease-out)",
                              "hover:text-foreground/70",
                              "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground",
                            )}
                          >
                            {item.value}
                          </a>
                        ) : item.href ? (
                          <TextLink
                            href={item.href}
                            arrow={false}
                            className={valueClass}
                          >
                            {item.value}
                          </TextLink>
                        ) : (
                          <Text className={valueClass}>{item.value}</Text>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </article>
            </Reveal>

            <Reveal
              direction="up"
              distance={motionTokens.distance.md}
              delay={0.08}
              duration={motionTokens.duration.slow}
            >
              <article className="flex h-full flex-col gap-10 bg-surface px-8 py-10 md:gap-12 md:px-10 md:py-12 lg:px-12 lg:py-14">
                <Heading as="h2" variant="h2">
                  {contactPage.brief.title}
                </Heading>
                <ul className="flex list-none flex-col gap-5 md:gap-6">
                  {contactPage.brief.points.map((point) => (
                    <li
                      key={point}
                      className="border-t border-border-subtle pt-5 first:border-t-0 first:pt-0 md:pt-6 first:md:pt-0"
                    >
                      <Text
                        variant="muted"
                        className="text-base md:text-lg"
                      >
                        {point}
                      </Text>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Form — white */}
      <Section
        background="surface"
        padding="none"
        className={cn(
          "pt-20 md:pt-24 lg:pt-28",
          beforeFooterClass,
        )}
      >
        <Container>
          <ContactForm
            recipient={contactPage.form.recipient}
            submitLabel={contactPage.form.submitLabel}
            messageLabel={contactPage.form.messageLabel}
          />
        </Container>
      </Section>
    </>
  );
}
