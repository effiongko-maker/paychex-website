import { Reveal } from "@/components/motion/Reveal";
import { EditorialPillars } from "@/components/patterns/EditorialPillars";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { homeIdentity } from "@/config/home";
import { chapterSectionClass } from "@/lib/layout";
import { motionTokens } from "@/lib/motion";

export function HomeIdentity() {
  return (
    <Section
      background="muted"
      className={`relative overflow-hidden ${chapterSectionClass}`}
    >
      {/* Architectural grid — quiet identity for the section */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, var(--foreground) 6%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--foreground) 6%, transparent) 1px, transparent 1px)",
          backgroundSize: "4.5rem 4.5rem",
        }}
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="flex flex-col gap-14 md:gap-16 lg:gap-20">
          <Reveal direction="up" distance={motionTokens.distance.sm}>
            <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <Heading variant="h1" className="font-medium">
                  {homeIdentity.headline.lead}
                  <br />
                  {homeIdentity.headline.emphasis}
                </Heading>
              </div>
              <div className="lg:col-span-5 lg:pb-1">
                <Heading variant="lead" className="max-w-measure lg:ml-auto">
                  {homeIdentity.supporting}
                </Heading>
              </div>
            </div>
          </Reveal>

          <Reveal
            direction="up"
            distance={motionTokens.distance.sm}
            delay={0.08}
          >
            <EditorialPillars pillars={homeIdentity.pillars} indexed />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
