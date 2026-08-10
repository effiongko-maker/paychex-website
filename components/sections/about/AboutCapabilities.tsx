import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { aboutCapabilities } from "@/config/about";
import { cn } from "@/lib/cn";
import { motionTokens } from "@/lib/motion";

/**
 * About — specialist capability pillars.
 *
 * Explicit padding only (`padding="none"`) — never combine with
 * `py-section` / `chapterSectionClass`, which fight in the cascade
 * and collapse sticky-header clearance.
 */
export function AboutCapabilities() {
  return (
    <Section
      id="specialist-capability"
      background="muted"
      padding="none"
      className={cn(
        "scroll-mt-[var(--header-height-lg)]",
        // Top: clear sticky header. Bottom: modest step into the next section.
        "pt-[calc(var(--header-height-lg)+1.5rem)] pb-8",
        "md:pt-[calc(var(--header-height-lg-compact)+1.75rem)] md:pb-9",
        "lg:pb-10",
      )}
    >
      <Container className="max-w-[90rem]">
        {/* One composition: heading → lede → columns */}
        <div className="flex flex-col gap-5 md:gap-6 lg:gap-6">
          <header className="flex w-full max-w-statement flex-col gap-3 md:gap-3.5">
            <Heading variant="h1" className="font-medium">
              {aboutCapabilities.headline}
            </Heading>
            <Heading variant="lead" className="max-w-measure">
              {aboutCapabilities.supporting}
            </Heading>
          </header>

          <ul className="grid list-none grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12 xl:grid-cols-5 xl:gap-0">
            {aboutCapabilities.pillars.map((pillar, index) => (
              <li
                key={pillar.title}
                className={cn(
                  "min-w-0",
                  "xl:border-l xl:border-border-subtle xl:px-8",
                  "xl:first:border-l-0 xl:first:pl-0 xl:last:pr-0",
                )}
              >
                <Reveal
                  direction="up"
                  distance={motionTokens.distance.sm}
                  delay={index * 0.05}
                  className="flex min-w-0 flex-col gap-3.5 md:gap-4"
                >
                  <Text
                    variant="caption"
                    as="span"
                    className="text-muted-foreground/55"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Text>
                  <Heading
                    as="h3"
                    variant="h3"
                    className="font-medium text-pretty"
                  >
                    {pillar.title}
                  </Heading>
                  <Text variant="muted" className="text-sm leading-[1.8]">
                    {pillar.description}
                  </Text>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
