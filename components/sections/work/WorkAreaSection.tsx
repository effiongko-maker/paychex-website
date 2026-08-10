import { Reveal } from "@/components/motion/Reveal";
import { WorkEngagement } from "@/components/sections/work/WorkEngagement";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { TextLink } from "@/components/ui/TextLink";
import type { WorkArea } from "@/config/work";
import { cn } from "@/lib/cn";
import { motionTokens } from "@/lib/motion";

type WorkAreaSectionProps = {
  area: WorkArea;
  index: number;
  inverse?: boolean;
};

/**
 * Delivery-area chapter: numbered area header + optional evidence framing
 * + featured and additional verified projects.
 */
export function WorkAreaSection({
  area,
  index,
  inverse = false,
}: WorkAreaSectionProps) {
  const featured = area.projects.find((project) => project.featured);
  const selected = area.projects.filter((project) => !project.featured);
  const hasProjects = area.projects.length > 0;
  const continuation = area.portfolioContinuation;
  const showEvidenceFrame = Boolean(
    area.selectedLabel || area.selectedIntroduction,
  );

  return (
    <div className="flex flex-col gap-14 md:gap-16 lg:gap-20">
      <Reveal direction="up" distance={motionTokens.distance.sm}>
        <header className="flex max-w-2xl flex-col gap-4 md:gap-5">
          <div className="flex items-center gap-3">
            <Text
              variant="caption"
              as="span"
              className={cn(
                "tracking-[0.16em] uppercase",
                inverse
                  ? "text-inverse-foreground/35"
                  : "text-muted-foreground/45",
              )}
            >
              {String(index + 1).padStart(2, "0")}
            </Text>
            <span className="h-px w-5 bg-accent" aria-hidden />
          </div>
          <Heading
            as="h2"
            variant="h1"
            className={cn(
              "font-medium tracking-tight",
              inverse ? "text-inverse-foreground" : "text-foreground",
            )}
          >
            {area.title}
          </Heading>
          <Heading
            variant="lead"
            className={cn(
              "max-w-measure",
              inverse
                ? "text-inverse-foreground/60"
                : "text-muted-foreground",
            )}
          >
            {area.introduction}
          </Heading>
        </header>
      </Reveal>

      {showEvidenceFrame && hasProjects ? (
        <Reveal direction="up" distance={motionTokens.distance.sm}>
          <div className="flex max-w-2xl flex-col gap-3 md:gap-4">
            {area.selectedLabel ? (
              <div className="flex items-center gap-3">
                <span className="h-px w-5 bg-accent" aria-hidden />
                <Text
                  variant="caption"
                  as="span"
                  className={cn(
                    "tracking-[0.14em] uppercase",
                    inverse
                      ? "text-inverse-foreground/35"
                      : "text-muted-foreground/45",
                  )}
                >
                  {area.selectedLabel}
                </Text>
              </div>
            ) : null}
            {area.selectedIntroduction ? (
              <Text
                className={cn(
                  "max-w-measure text-[15px] leading-[1.7] md:text-base",
                  inverse
                    ? "text-inverse-foreground/50"
                    : "text-muted-foreground",
                )}
              >
                {area.selectedIntroduction}
              </Text>
            ) : null}
          </div>
        </Reveal>
      ) : null}

      {hasProjects ? (
        <div className="flex flex-col gap-16 md:gap-20 lg:gap-24">
          {featured ? (
            <WorkEngagement
              project={featured}
              inverse={inverse}
              caption="Featured project"
            />
          ) : null}

          {selected.map((project) => (
            <WorkEngagement
              key={project.id}
              project={project}
              inverse={inverse}
              compact
            />
          ))}
        </div>
      ) : null}

      {continuation ? (
        <Reveal direction="up" distance={motionTokens.distance.sm}>
          <div
            className={cn(
              "flex max-w-xl flex-col gap-4 border-t pt-10 md:gap-5 md:pt-12",
              inverse ? "border-border-inverse" : "border-border-subtle",
            )}
          >
            <Text
              className={cn(
                "max-w-measure text-[15px] leading-[1.7]",
                inverse
                  ? "text-inverse-foreground/50"
                  : "text-muted-foreground",
              )}
            >
              {continuation.description}
            </Text>
            <TextLink
              href={continuation.href}
              className={cn(
                "text-base underline-offset-8",
                inverse
                  ? "text-inverse-foreground hover:text-inverse-foreground/70"
                  : undefined,
              )}
            >
              {continuation.label}
            </TextLink>
          </div>
        </Reveal>
      ) : null}

      {!hasProjects ? (
        <Reveal direction="up" distance={motionTokens.distance.sm}>
          <Text
            className={cn(
              "max-w-measure text-sm leading-[1.7]",
              inverse
                ? "text-inverse-foreground/40"
                : "text-muted-foreground/55",
            )}
          >
            Additional verified projects in this area will be published as
            delivery evidence is confirmed.
          </Text>
        </Reveal>
      ) : null}
    </div>
  );
}
