import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/motion/Reveal";
import { EditorialPageCta } from "@/components/patterns/EditorialPageChrome";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { TextLink } from "@/components/ui/TextLink";
import {
  capabilityPages,
  capabilitySlugs,
  getCapabilityBySlug,
} from "@/config/capabilities";
import { chapterSectionClass } from "@/lib/layout";
import { motionTokens } from "@/lib/motion";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return capabilitySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);
  if (!capability) return { title: "Capability" };
  return {
    title: capability.title,
    description: capability.supporting,
  };
}

export default async function CapabilityDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);
  if (!capability) notFound();

  const related = capabilityPages
    .filter((page) => page.slug !== capability.slug)
    .slice(0, 3);

  return (
    <>
      <Section
        background="surface"
        className="pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24"
      >
        <Container>
          <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-14">
            <Reveal
              direction="up"
              distance={motionTokens.distance.sm}
              className="flex flex-col gap-5 md:gap-6 lg:col-span-6"
            >
              <Text variant="eyebrow" as="p">
                Capability
              </Text>
              <Heading variant="display" className="font-medium">
                {capability.headline}
              </Heading>
              <Heading variant="lead" className="max-w-measure">
                {capability.supporting}
              </Heading>
            </Reveal>
            <Reveal
              direction="up"
              distance={motionTokens.distance.md}
              delay={0.08}
              className="lg:col-span-6"
            >
              <figure className="relative aspect-[16/11] w-full overflow-hidden bg-media-matte shadow-soft ring-1 ring-border-subtle md:aspect-[5/3] lg:max-h-[28rem]">
                <Image
                  src={capability.media.src}
                  alt={capability.media.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover object-center"
                />
              </figure>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section background="muted" className={chapterSectionClass}>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal
              direction="up"
              distance={motionTokens.distance.sm}
              className="lg:col-span-5"
            >
              <Heading variant="h2" className="font-medium">
                The problem we solve
              </Heading>
            </Reveal>
            <Reveal
              direction="up"
              distance={motionTokens.distance.sm}
              delay={0.06}
              className="lg:col-span-7"
            >
              <Text
                variant="muted"
                className="max-w-measure text-base leading-[1.75] md:text-[17px]"
              >
                {capability.problem}
              </Text>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section background="surface" className={chapterSectionClass}>
        <Container>
          <div className="flex flex-col gap-12 md:gap-14">
            <Reveal direction="up" distance={motionTokens.distance.sm}>
              <Heading variant="h2" className="font-medium">
                How we deliver
              </Heading>
            </Reveal>
            <ol className="grid list-none grid-cols-1 gap-0 border-t border-border md:grid-cols-3">
              {capability.delivery.map((item, index) => (
                <Reveal
                  key={item}
                  direction="up"
                  distance={motionTokens.distance.sm}
                  delay={index * 0.05}
                >
                  <li className="flex flex-col gap-4 border-border py-8 md:border-r md:px-8 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                    <Text
                      variant="caption"
                      as="span"
                      className="text-muted-foreground/55"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Text>
                    <Text className="text-base leading-[1.75] md:text-[17px]">
                      {item}
                    </Text>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section background="muted" className={chapterSectionClass}>
        <Container>
          <Reveal direction="up" distance={motionTokens.distance.sm}>
            <div className="flex max-w-statement flex-col gap-5">
              <Heading variant="h2" className="font-medium">
                What good looks like
              </Heading>
              <Heading variant="lead" className="max-w-measure">
                {capability.outcomes}
              </Heading>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section background="surface" className={chapterSectionClass}>
        <Container>
          <div className="flex flex-col gap-10">
            <Heading variant="h3" className="font-medium">
              Related capabilities
            </Heading>
            <ul className="grid list-none grid-cols-1 gap-8 sm:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <TextLink href={`/solutions/${item.slug}`}>
                    {item.title}
                  </TextLink>
                  <Text variant="muted" className="mt-3 text-sm leading-[1.75]">
                    {item.headline}
                  </Text>
                </li>
              ))}
            </ul>
            <TextLink href="/solutions">All capabilities</TextLink>
          </div>
        </Container>
      </Section>

      <EditorialPageCta
        cta={{
          headline: "Tell us about the work.",
          supporting: `If ${capability.title.toLowerCase()} is part of what you need delivered, we should talk.`,
          primary: { label: "Start a conversation", href: "/contact" },
          secondary: { label: "All capabilities", href: "/solutions" },
        }}
      />
    </>
  );
}
