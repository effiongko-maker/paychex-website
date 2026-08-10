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
 * + continuous portfolio sequence of verified projects.
 */
export function WorkAreaSection({
  area,
  index,
  inverse = false,
}: WorkAreaSectionProps) {
  const projects = area.projects;
  const featured = projects.find((project) => project.featured);
  const secondary = projects.filter((project) => !project.featured);
  const hasProjects = projects.length > 0;
  const continuation = area.portfolioContinuation;
  const showEvidenceIntro = Boolean(
    area.selectedLabel || area.selectedIntroduction,
  );
  const secondaryGrid = area.secondaryLayout === "grid";

  return (
    <div className="flex flex-col gap-6 md:gap-7 lg:gap-8">
      <Reveal direction="up" distance={motionTokens.distance.sm}>
        <header className="flex max-w-2xl flex-col gap-3 md:gap-3.5">
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

          {showEvidenceIntro && hasProjects ? (
            <div className="flex max-w-2xl flex-col gap-3 pt-1 md:gap-3.5">
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
          ) : null}
        </header>
      </Reveal>

      {hasProjects ? (
        secondaryGrid ? (
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-12">
            {featured ? (
              <WorkEngagement
                project={featured}
                inverse={inverse}
                caption="Featured project"
              />
            ) : null}

            {secondary.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 lg:gap-10">
                {secondary.map((project) => (
                  <WorkEngagement
                    key={project.id}
                    project={project}
                    inverse={inverse}
                    layout="supporting"
                  />
                ))}
              </div>
            ) : null}
          </div>
        ) : (
          <div className="flex flex-col">
            {projects.map((project, i) => {
              const previous = i > 0 ? projects[i - 1] : undefined;
              const textLed = !project.media;
              const previousTextLed = Boolean(previous && !previous.media);

              /**
               * Content-driven gaps:
               * - after a text-led entry → small/normal gap (pull next project up)
               * - onto a text-led entry → moderate gap
               * - image → image → standard editorial gap
               */
              const topGap =
                i === 0
                  ? undefined
                  : previousTextLed
                    ? "mt-5 md:mt-6"
                    : textLed
                      ? "mt-7 md:mt-8"
                      : "mt-8 md:mt-10 lg:mt-12";

              return (
                <WorkEngagement
                  key={project.id}
                  project={project}
                  inverse={inverse}
                  caption={project.featured ? "Featured project" : undefined}
                  compact={!project.featured}
                  className={topGap}
                />
              );
            })}
          </div>
        )
      ) : null}

      {continuation ? (
        <Reveal direction="up" distance={motionTokens.distance.sm}>
          <div
            className={cn(
              "flex max-w-xl flex-col gap-3 border-t pt-8 md:gap-4 md:pt-10",
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
