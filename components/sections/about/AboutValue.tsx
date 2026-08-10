import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { aboutValue } from "@/config/about";
import { motionTokens } from "@/lib/motion";

type ValueIcon = (typeof aboutValue.areas)[number]["icon"];

function DomainIcon({ icon }: { icon: ValueIcon }) {
  const common = "stroke-current";
  switch (icon) {
    case "government":
      return (
        <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
          <path
            className={common}
            strokeWidth="1.25"
            d="M4 20h16M6 20V10l6-4 6 4v10M9 20v-4h6v4"
          />
        </svg>
      );
    case "infrastructure":
      return (
        <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
          <path
            className={common}
            strokeWidth="1.25"
            d="M4 18h16M7 18V9l5-4 5 4v9M10 18v-4h4v4"
          />
        </svg>
      );
    case "identity":
      return (
        <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
          <rect
            className={common}
            x="4"
            y="6"
            width="16"
            height="12"
            rx="1.5"
            strokeWidth="1.25"
          />
          <circle className={common} cx="9" cy="12" r="2" strokeWidth="1.25" />
          <path className={common} strokeWidth="1.25" d="M13 11h4M13 14h3" />
        </svg>
      );
    case "events":
      return (
        <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
          <path
            className={common}
            strokeWidth="1.25"
            d="M5 8h14v11H5V8ZM8 8V6h8v2M8 13h8M8 16h5"
          />
        </svg>
      );
    case "procurement":
      return (
        <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
          <path
            className={common}
            strokeWidth="1.25"
            d="M4 7h16l-1.5 10H5.5L4 7ZM8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7"
          />
        </svg>
      );
    case "construction":
      return (
        <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
          <path
            className={common}
            strokeWidth="1.25"
            d="M4 20h16M6 20V11l4-3 4 3v9M14 20V9l4-2v13"
          />
        </svg>
      );
    case "operations":
      return (
        <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
          <circle className={common} cx="12" cy="12" r="3" strokeWidth="1.25" />
          <path
            className={common}
            strokeWidth="1.25"
            d="M12 4v2.5M12 17.5V20M4 12h2.5M17.5 12H20M6.2 6.2l1.8 1.8M16 16l1.8 1.8M17.8 6.2 16 8M8 16l-1.8 1.8"
          />
        </svg>
      );
    case "training":
      return (
        <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
          <path
            className={common}
            strokeWidth="1.25"
            d="M4 8.5 12 5l8 3.5-8 3.5L4 8.5ZM7 10.5v4.2c0 1.3 2.2 2.8 5 2.8s5-1.5 5-2.8v-4.2"
          />
        </svg>
      );
  }
}

export function AboutValue() {
  return (
    <Section
      background="surface"
      padding="none"
      className="pt-12 pb-16 md:pt-14 md:pb-20 lg:pt-16 lg:pb-24"
    >
      <Container>
        <div className="flex flex-col gap-10 md:gap-12">
          <Reveal
            direction="up"
            distance={motionTokens.distance.sm}
            className="w-full max-w-statement"
          >
            <div className="flex flex-col gap-4 md:gap-5">
              <Heading variant="h1" className="font-medium">
                {aboutValue.headline}
              </Heading>
              <Heading variant="lead" className="max-w-measure">
                {aboutValue.supporting}
              </Heading>
            </div>
          </Reveal>

          <ul className="grid list-none grid-cols-1 gap-x-10 gap-y-12 border-t border-border pt-8 sm:grid-cols-2 md:gap-y-14 lg:grid-cols-4 lg:gap-x-8 lg:pt-10">
            {aboutValue.areas.map((area, index) => (
              <Reveal
                key={area.title}
                direction="up"
                distance={motionTokens.distance.sm}
                delay={(index % 4) * 0.04}
              >
                <li className="flex flex-col gap-4">
                  <span className="text-muted-foreground/55">
                    <DomainIcon icon={area.icon} />
                  </span>
                  <Heading as="h3" variant="h4" className="font-medium">
                    {area.title}
                  </Heading>
                  <Text variant="muted" className="text-sm leading-[1.8]">
                    {area.description}
                  </Text>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
