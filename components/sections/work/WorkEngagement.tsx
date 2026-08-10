"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import { Media } from "@/components/ui/Media";
import {
  mediaFrameClassName,
  mediaHoverClassName,
} from "@/components/ui/MediaFrame";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";
import { motionTokens } from "@/lib/motion";
import type { WorkProject } from "@/config/work";
import type { MediaSource } from "@/types/media";

type WorkEngagementProps = {
  project: WorkProject;
  inverse?: boolean;
  /** Quiet caption above the title — e.g. Featured project */
  caption?: string;
  compact?: boolean;
  /**
   * `supporting` = stacked image-over-copy treatment for secondary
   * projects in a two-column grid.
   * Text-led layout is applied automatically when a project has no media.
   */
  layout?: "editorial" | "supporting";
  className?: string;
};

const ease = motionTokens.ease;
const enterDuration = motionTokens.duration.slow;

/**
 * Editorial media frame. Height from aspect-ratio (in flow).
 * Absolute fill only inside the frame for photography.
 * Intentionally omitted when no media is available — never show empty placeholders.
 */
function EngagementImage({
  media,
  inverse,
  aspectClassName = "aspect-[4/3] md:aspect-[5/4] lg:aspect-[4/3]",
  priority = false,
  fit = "cover",
}: {
  media: MediaSource;
  inverse: boolean;
  aspectClassName?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
}) {
  const frameRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion || fit === "contain" ? ["0%", "0%"] : ["-3%", "3%"],
  );
  const contain = fit === "contain";

  if (media.type !== "image") {
    return (
      <figure
        ref={frameRef}
        className={cn(
          mediaFrameClassName,
          "group/media",
          aspectClassName,
          inverse && "bg-[#1a1a1a] shadow-none ring-border-inverse",
        )}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Media source={media} mutedTone="soft" />
        </div>
      </figure>
    );
  }

  return (
    <figure
      ref={frameRef}
      className={cn(
        mediaFrameClassName,
        "group/media",
        aspectClassName,
        inverse && "bg-[#1a1a1a] shadow-none ring-border-inverse",
        contain && "bg-white",
      )}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={cn(
            "absolute inset-0 origin-center will-change-transform",
            !contain && mediaHoverClassName,
          )}
          style={{ y: parallaxY }}
        >
          <Image
            src={media.src}
            alt={media.alt}
            fill
            priority={priority || Boolean(media.priority)}
            sizes={media.sizes ?? "(max-width: 1024px) 100vw, 48vw"}
            className={cn(
              contain
                ? "object-contain object-center"
                : "object-cover object-center contrast-[1.03] brightness-[0.97] saturate-[0.92]",
            )}
          />
        </motion.div>
      </div>
    </figure>
  );
}

function DeliveredBlock({
  items,
  inverse,
  delay,
  dense = false,
}: {
  items: readonly string[];
  inverse: boolean;
  delay: number;
  dense?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col",
        dense ? "gap-2.5" : "gap-3.5 pt-0.5 md:gap-4",
      )}
    >
      <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: enterDuration, delay, ease }}
      >
        <span className="h-px w-5 bg-accent" aria-hidden />
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
          Delivered
        </Text>
      </motion.div>

      <ul
        className={cn(
          "flex list-none flex-col",
          dense ? "gap-1.5" : "gap-2 md:gap-2.5",
        )}
      >
        {items.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: motionTokens.duration.base,
              delay: delay + 0.06 + i * 0.05,
              ease,
            }}
          >
            <Text
              className={cn(
                "text-sm leading-snug md:text-[15px]",
                inverse
                  ? "text-inverse-foreground/55"
                  : "text-muted-foreground",
              )}
            >
              {item}
            </Text>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Single project panel within a delivery area.
 */
export function WorkEngagement({
  project,
  inverse = false,
  caption,
  compact = false,
  layout = "editorial",
  className,
}: WorkEngagementProps) {
  const supporting = layout === "supporting";
  const imageFirst = project.imageSide === "left";
  const hasMedia = Boolean(project.media);
  const gallery = project.gallery ?? [];
  const fit = project.mediaFit ?? "cover";
  const baseDelay = 0.06;

  /** No media → compact text-led entry; height from content only. */
  if (!hasMedia && !supporting) {
    return (
      <article
        id={project.id}
        className={cn(
          "scroll-mt-28 w-full md:scroll-mt-32",
          "max-w-[min(100%,42rem)] lg:max-w-[68%]",
          className,
        )}
      >
        <div className="flex flex-col gap-2.5 md:gap-3">
          {caption ? (
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: enterDuration,
                delay: baseDelay,
                ease,
              }}
            >
              <span className="h-px w-5 bg-accent" aria-hidden />
              <Text
                variant="caption"
                as="span"
                className={cn(
                  "tracking-[0.14em] uppercase",
                  inverse
                    ? "text-accent"
                    : "text-muted-foreground/50",
                )}
              >
                {caption}
              </Text>
            </motion.div>
          ) : null}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: enterDuration,
              delay: baseDelay + 0.06,
              ease,
            }}
          >
            <Heading
              as="h3"
              variant="h2"
              className={cn(
                "font-medium tracking-tight text-pretty",
                inverse ? "text-inverse-foreground" : "text-foreground",
              )}
            >
              {project.title}
            </Heading>
          </motion.div>

          {project.location || project.date ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: enterDuration,
                delay: baseDelay + 0.1,
                ease,
              }}
            >
              <Text
                variant="caption"
                as="p"
                className={cn(
                  "tracking-[0.06em]",
                  inverse
                    ? "text-inverse-foreground/40"
                    : "text-muted-foreground/55",
                )}
              >
                {[project.location, project.date].filter(Boolean).join(" · ")}
              </Text>
            </motion.div>
          ) : null}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: enterDuration,
              delay: baseDelay + 0.14,
              ease,
            }}
          >
            <Text
              className={cn(
                "text-[15px] leading-[1.7]",
                inverse
                  ? "text-inverse-foreground/55"
                  : "text-muted-foreground",
              )}
            >
              {project.body}
            </Text>
          </motion.div>

          <DeliveredBlock
            items={project.delivered}
            inverse={inverse}
            delay={baseDelay + 0.2}
            dense
          />
        </div>
      </article>
    );
  }

  if (supporting) {
    return (
      <article
        id={project.id}
        className={cn(
          "scroll-mt-28 flex h-full flex-col gap-4 md:scroll-mt-32 md:gap-5",
          className,
        )}
      >
        {project.media ? (
          <EngagementImage
            media={project.media}
            inverse={inverse}
            fit={fit}
            aspectClassName={
              fit === "contain"
                ? "aspect-[1080/753]"
                : "aspect-[16/10] md:aspect-[5/3]"
            }
          />
        ) : null}

        <div className="flex flex-col gap-3.5 md:gap-4">
          <Heading
            as="h3"
            variant="h3"
            className={cn(
              "font-medium tracking-tight text-pretty",
              inverse ? "text-inverse-foreground" : "text-foreground",
            )}
          >
            {project.title}
          </Heading>

          {project.location || project.date ? (
            <Text
              variant="caption"
              as="p"
              className={cn(
                "tracking-[0.06em]",
                inverse
                  ? "text-inverse-foreground/40"
                  : "text-muted-foreground/55",
              )}
            >
              {[project.location, project.date].filter(Boolean).join(" · ")}
            </Text>
          ) : null}

          <Text
            className={cn(
              "text-[15px] leading-[1.7]",
              inverse
                ? "text-inverse-foreground/55"
                : "text-muted-foreground",
            )}
          >
            {project.body}
          </Text>

          <div className="flex flex-col gap-2.5 pt-1">
            <div className="flex items-center gap-3">
              <span className="h-px w-5 bg-accent" aria-hidden />
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
                Delivered
              </Text>
            </div>
            <ul className="flex list-none flex-col gap-1.5">
              {project.delivered.map((item) => (
                <li key={item}>
                  <Text
                    className={cn(
                      "text-sm leading-snug",
                      inverse
                        ? "text-inverse-foreground/55"
                        : "text-muted-foreground",
                    )}
                  >
                    {item}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    );
  }

  const mediaColumn = project.media ? (
    <div className="min-w-0 w-full lg:flex-1">
      <EngagementImage
        media={project.media}
        inverse={inverse}
        priority={Boolean(project.media.type === "image" && project.media.priority)}
        fit={fit}
        aspectClassName={
          fit === "contain"
            ? "aspect-[1080/753] md:aspect-[1080/753]"
            : // Content-driven height — avoid tall 4/3 frames stretching portfolio sequences
              "aspect-[16/10] md:aspect-[5/3]"
        }
      />
    </div>
  ) : null;

  const copyColumn = (
    <div
      className={cn(
        "flex min-w-0 w-full flex-1 flex-col gap-4 md:gap-5 lg:pt-0.5",
        compact && "gap-3.5 md:gap-4",
      )}
    >
      {caption ? (
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: enterDuration,
            delay: baseDelay,
            ease,
          }}
        >
          <span className="h-px w-5 bg-accent" aria-hidden />
          <Text
            variant="caption"
            as="span"
            className={cn(
              "tracking-[0.14em] uppercase",
              inverse
                ? "text-accent"
                : "text-muted-foreground/50",
            )}
          >
            {caption}
          </Text>
        </motion.div>
      ) : null}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: enterDuration,
          delay: baseDelay + 0.08,
          ease,
        }}
      >
        <Heading
          as="h3"
          variant={compact ? "h2" : "h1"}
          className={cn(
            "font-medium tracking-tight text-pretty",
            inverse ? "text-inverse-foreground" : "text-foreground",
          )}
        >
          {project.title}
        </Heading>
      </motion.div>

      {project.location || project.date ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: enterDuration,
            delay: baseDelay + 0.12,
            ease,
          }}
        >
          <Text
            variant="caption"
            as="p"
            className={cn(
              "tracking-[0.06em]",
              inverse
                ? "text-inverse-foreground/40"
                : "text-muted-foreground/55",
            )}
          >
            {[project.location, project.date].filter(Boolean).join(" · ")}
          </Text>
        </motion.div>
      ) : null}

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: enterDuration,
          delay: baseDelay + 0.18,
          ease,
        }}
      >
        <Text
          className={cn(
            "max-w-measure text-[15px] leading-[1.8] md:text-base md:leading-[1.85]",
            compact && "text-[15px] leading-[1.75] md:text-[15px]",
            inverse
              ? "text-inverse-foreground/55"
              : "text-muted-foreground",
          )}
        >
          {project.body}
        </Text>
      </motion.div>

      <DeliveredBlock
        items={project.delivered}
        inverse={inverse}
        delay={baseDelay + 0.26}
      />
    </div>
  );

  return (
    <article
      id={project.id}
      className={cn("scroll-mt-28 w-full md:scroll-mt-32", className)}
    >
      <div className="flex w-full flex-col gap-6 md:gap-8 lg:flex-row lg:items-start lg:gap-10 xl:gap-14">
        {imageFirst ? (
          <>
            {mediaColumn}
            {copyColumn}
          </>
        ) : (
          <>
            {copyColumn}
            {mediaColumn}
          </>
        )}
      </div>

      {gallery.length > 0 ? (
        <div
          className={cn(
            "mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:gap-4 md:mt-12",
            compact
              ? gallery.length === 1
                ? "sm:max-w-xl"
                : "sm:grid-cols-2"
              : "mt-10 sm:mt-12 sm:grid-cols-2 md:mt-14",
          )}
        >
          {gallery.map((shot) => (
            <EngagementImage
              key={shot.src}
              media={shot}
              inverse={inverse}
              aspectClassName={
                compact
                  ? "aspect-[16/10] md:aspect-[5/3]"
                  : "aspect-[16/10] md:aspect-[5/3] lg:max-h-[16rem]"
              }
            />
          ))}
        </div>
      ) : null}
    </article>
  );
}
