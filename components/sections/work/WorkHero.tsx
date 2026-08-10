import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { workPage } from "@/config/work";
import { cn } from "@/lib/cn";
import { pageHeroClass } from "@/lib/layout";
import { motionTokens } from "@/lib/motion";

type IndexItem = (typeof workPage.hero.index)[number];

function WorkAreaIndexRow({ item }: { item: IndexItem }) {
  return (
    <div
      role="presentation"
      className={cn(
        "group/index flex cursor-default items-baseline gap-4 py-4 md:gap-5 md:py-5",
        "border-b border-border-subtle",
        "transition-transform duration-(--duration-base) ease-(--ease-out)",
        "hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none",
      )}
    >
      <Text
        variant="caption"
        as="span"
        className={cn(
          "w-7 shrink-0 tracking-[0.16em] text-muted-foreground/40",
          "transition-colors duration-(--duration-base) ease-(--ease-out)",
          "group-hover/index:text-accent",
        )}
      >
        {item.index}
      </Text>

      <span
        className={cn(
          "min-w-0 flex-1 text-lg font-medium tracking-tight text-foreground sm:text-xl md:text-[1.35rem] md:leading-snug",
          "transition-colors duration-(--duration-base) ease-(--ease-out)",
          "group-hover/index:text-foreground/80",
        )}
      >
        {item.label}
      </span>

      <svg
        viewBox="0 0 16 16"
        className={cn(
          "mt-1 size-3.5 shrink-0 text-foreground/25",
          "transition-[color,transform,opacity] duration-(--duration-base) ease-(--ease-out)",
          "group-hover/index:translate-x-0.5 group-hover/index:text-foreground/55",
          "motion-reduce:transform-none",
        )}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 8h9M8.5 4.5 12 8l-3.5 3.5"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/**
 * Work page opening.
 * Left: delivery statement. Right: editorial index of work breadth.
 * Project photography lives in the sections below.
 */
export function WorkHero() {
  const { hero } = workPage;

  return (
    <Section
      background="surface"
      padding="none"
      className={cn(pageHeroClass, "pb-12 md:pb-14 lg:pb-16")}
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          <div className="flex max-w-xl flex-col gap-5 md:gap-6 lg:col-span-5 lg:pt-1">
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
                  className="text-muted-foreground/50"
                >
                  {hero.label}
                </Text>
              </div>
            </Reveal>
            <Reveal
              direction="up"
              distance={motionTokens.distance.md}
              delay={0.06}
              duration={motionTokens.duration.slow}
            >
              <Heading variant="display" className="tracking-tight">
                {hero.headline}
              </Heading>
            </Reveal>
            <Reveal
              direction="up"
              distance={motionTokens.distance.sm}
              delay={0.12}
              duration={motionTokens.duration.slow}
            >
              <Heading variant="lead" className="max-w-measure">
                {hero.lede}
              </Heading>
            </Reveal>
          </div>

          <Reveal
            direction="up"
            distance={motionTokens.distance.md}
            delay={0.1}
            duration={motionTokens.duration.slow}
            className="lg:col-span-7 lg:pt-1"
          >
            <div
              className="border-t border-border-subtle"
              aria-label="Areas of delivered work"
            >
              {hero.index.map((item) => (
                <WorkAreaIndexRow key={item.index} item={item} />
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
