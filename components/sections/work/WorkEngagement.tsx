"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import { Media } from "@/components/ui/Media";
import { mediaFrameClassName, mediaHoverClassName } from "@/components/ui/MediaFrame";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";
import { motionTokens } from "@/lib/motion";
import type { MediaSource } from "@/types/media";

export type WorkEngagementData = {
  id: string;
  label: string;
  title: string;
  body: string;
  scope: readonly string[];
  imageSide: "left" | "right";
  media: MediaSource | null;
};

type WorkEngagementProps = {
  engagement: WorkEngagementData;
  inverse?: boolean;
};

const ease = motionTokens.ease;
const enterDuration = motionTokens.duration.slow;

/**
 * Editorial media frame. Height from aspect-ratio (in flow).
 * Absolute fill only inside the frame for photography / placeholder layers.
 */
function EngagementImage({
  media,
  inverse,
}: {
  media: MediaSource | null;
  inverse: boolean;
}) {
  const frameRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });
  /* Slight parallax only — calm, not theatrical */
  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["-3%", "3%"],
  );

  return (
    <figure
      ref={frameRef}
      className={cn(
        mediaFrameClassName,
        "group/media aspect-[4/3] md:aspect-[5/4] lg:aspect-[4/3]",
        inverse && "bg-[#1a1a1a] shadow-none ring-border-inverse",
      )}
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        initial={
          prefersReducedMotion ? false : { opacity: 0, scale: 1.05 }
        }
        whileInView={
          prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }
        }
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: enterDuration,
          ease,
        }}
      >
        <motion.div
          className={cn(
            "absolute inset-[-6%] origin-center will-change-transform",
            mediaHoverClassName,
          )}
          style={{ y: parallaxY }}
        >
          {media ? (
            <Media source={media} mutedTone="soft" />
          ) : (
            <div className="absolute inset-0" aria-hidden>
              <div
                className={cn(
                  "absolute inset-0",
                  inverse
                    ? "bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.05),transparent_55%),radial-gradient(ellipse_at_80%_90%,rgba(255,255,255,0.03),transparent_50%)]"
                    : "bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.55),transparent_55%),radial-gradient(ellipse_at_80%_90%,rgba(17,17,17,0.04),transparent_50%)]",
                )}
              />
              <div
                className="absolute inset-0 opacity-[0.55]"
                style={{
                  backgroundImage: inverse
                    ? "linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)"
                    : "linear-gradient(to right, rgba(17,17,17,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,17,17,0.055) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              <span
                className={cn(
                  "absolute top-4 left-4 h-3 w-3 border-t border-l",
                  inverse
                    ? "border-inverse-foreground/20"
                    : "border-foreground/15",
                )}
              />
              <span
                className={cn(
                  "absolute top-4 right-4 h-3 w-3 border-t border-r",
                  inverse
                    ? "border-inverse-foreground/20"
                    : "border-foreground/15",
                )}
              />
              <span
                className={cn(
                  "absolute bottom-4 left-4 h-3 w-3 border-b border-l",
                  inverse
                    ? "border-inverse-foreground/20"
                    : "border-foreground/15",
                )}
              />
              <span
                className={cn(
                  "absolute right-4 bottom-4 h-3 w-3 border-r border-b",
                  inverse
                    ? "border-inverse-foreground/20"
                    : "border-foreground/15",
                )}
              />
            </div>
          )}
        </motion.div>
      </motion.div>
    </figure>
  );
}

function ScopeBlock({
  items,
  inverse,
  delay,
}: {
  items: readonly string[];
  inverse: boolean;
  delay: number;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 pt-2 md:gap-6",
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
          Scope
        </Text>
      </motion.div>

      <ul className="flex list-none flex-col gap-2.5 md:gap-3">
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
 * Exhibition panel body. Alternation via DOM order in a flex row —
 * both columns stay in normal document flow.
 */
export function WorkEngagement({
  engagement,
  inverse = false,
}: WorkEngagementProps) {
  const imageFirst = engagement.imageSide === "left";
  const baseDelay = 0.06;

  const mediaColumn = (
    <div className="min-w-0 w-full lg:flex-1">
      <EngagementImage media={engagement.media} inverse={inverse} />
    </div>
  );

  const copyColumn = (
    <div className="flex min-w-0 w-full flex-col gap-6 md:gap-7 lg:flex-1 lg:pt-2">
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
          {engagement.label}
        </Text>
      </motion.div>

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
          as="h2"
          variant="display"
          className={cn(
            "font-medium tracking-tight lg:text-[3.25rem] lg:leading-[1.08]",
            inverse ? "text-inverse-foreground" : "text-foreground",
          )}
        >
          {engagement.title}
        </Heading>
      </motion.div>

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
            inverse
              ? "text-inverse-foreground/55"
              : "text-muted-foreground",
          )}
        >
          {engagement.body}
        </Text>
      </motion.div>

      <ScopeBlock
        items={engagement.scope}
        inverse={inverse}
        delay={baseDelay + 0.26}
      />
    </div>
  );

  return (
    <article className="w-full">
      <div className="flex w-full flex-col gap-12 md:gap-14 lg:flex-row lg:items-start lg:gap-16 xl:gap-24">
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
    </article>
  );
}
