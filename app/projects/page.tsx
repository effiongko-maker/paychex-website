import type { Metadata } from "next";

import { WorkAreaSection } from "@/components/sections/work/WorkAreaSection";
import { WorkHero } from "@/components/sections/work/WorkHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { workPage } from "@/config/work";
import { cn } from "@/lib/cn";
import { exhibitionSectionClass } from "@/lib/layout";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects across technology, infrastructure, construction, events and institutional delivery.",
};

/** Exhibition rhythm alternates by delivery area */
const areaBackgrounds = [
  "inverse",
  "surface",
  "muted",
  "inverse",
  "surface",
] as const;

export default function WorkPage() {
  const lastIndex = workPage.areas.length - 1;

  return (
    <>
      <WorkHero />

      {workPage.areas.map((area, index) => {
        const background = areaBackgrounds[index] ?? "surface";
        const inverse = background === "inverse";
        const isLast = index === lastIndex;

        return (
          <Section
            key={area.id}
            id={area.id}
            background={background}
            padding="none"
            className={cn(
              exhibitionSectionClass,
              isLast && "pb-0",
            )}
          >
            <Container>
              <WorkAreaSection
                area={area}
                index={index}
                inverse={inverse}
              />
            </Container>

            {isLast ? (
              <div className="pt-[7.5rem] md:pt-36 lg:pt-40" aria-hidden>
                <Container>
                  <div
                    className={cn(
                      "h-px w-full",
                      inverse ? "bg-border-inverse" : "bg-border-subtle",
                    )}
                  />
                </Container>
                <div className="h-16 md:h-20 lg:h-24" />
              </div>
            ) : null}
          </Section>
        );
      })}
    </>
  );
}
