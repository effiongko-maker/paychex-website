"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";
import { motionTokens } from "@/lib/motion";
import type { EditorialPillar } from "@/types/content";

type ExecutionStagesProps = {
  stages: readonly EditorialPillar[];
};

function formatIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

/**
 * Horizontal Plan → Deliver → Enable timeline.
 * Yellow progress travels left → right only — never vertically into content.
 */
export function ExecutionStages({ stages }: ExecutionStagesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.55"],
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const n = stages.length;
    const next = Math.min(n - 1, Math.max(0, Math.floor(value * n)));
    setActiveIndex(next);
  });

  return (
    <div ref={ref} className="relative">
      {/* Horizontal track — isolated from content below */}
      <div className="relative mb-14 md:mb-16 lg:mb-20">
        <div
          className="absolute top-3 right-0 left-0 h-px bg-border-inverse md:top-3.5"
          aria-hidden="true"
        />
        {!prefersReducedMotion ? (
          <motion.div
            className="absolute top-3 left-0 h-px bg-accent md:top-3.5"
            style={{ width: progressWidth }}
            aria-hidden="true"
          />
        ) : (
          <div
            className="absolute top-3 left-0 h-px w-full bg-accent/50 md:top-3.5"
            aria-hidden="true"
          />
        )}

        <ol className="relative grid list-none grid-cols-3">
          {stages.map((stage, index) => {
            const isActive = index === activeIndex;
            const isPassed = index <= activeIndex;

            return (
              <li
                key={stage.title}
                className={cn(
                  "flex flex-col items-start gap-4",
                  index === 1 && "items-center",
                  index === stages.length - 1 && "items-end",
                )}
              >
                <span
                  className={cn(
                    "relative z-10 size-2.5 rounded-full transition-[background-color,box-shadow,transform] duration-500 ease-(--ease-out) md:size-3",
                    isPassed
                      ? "scale-110 bg-accent shadow-[0_0_0_5px_rgb(27_27_27)]"
                      : "bg-inverse-foreground/25",
                  )}
                />
                <Text
                  variant="caption"
                  as="span"
                  className={cn(
                    "transition-colors duration-500 ease-(--ease-out)",
                    isActive
                      ? "text-accent"
                      : isPassed
                        ? "text-inverse-foreground/45"
                        : "text-inverse-foreground/25",
                  )}
                >
                  {formatIndex(index)}
                </Text>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Stage content — separate from the line */}
      <ol className="grid list-none gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
        {stages.map((stage, index) => {
          const isActive = index === activeIndex;
          const isPassed = index <= activeIndex;

          return (
            <motion.li
              key={stage.title}
              className={cn(
                "flex flex-col gap-4 transition-opacity duration-500 ease-(--ease-out)",
                isActive
                  ? "opacity-100"
                  : isPassed
                    ? "opacity-55"
                    : "opacity-30",
              )}
              initial={prefersReducedMotion ? false : { y: 16 }}
              whileInView={prefersReducedMotion ? undefined : { y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: motionTokens.duration.base,
                delay: index * 0.1,
                ease: motionTokens.ease,
              }}
            >
              <Heading
                as="h3"
                variant="h3"
                className={cn(
                  "font-medium transition-colors duration-500 ease-(--ease-out) md:text-[1.75rem]",
                  isActive
                    ? "text-inverse-foreground"
                    : "text-inverse-foreground/70",
                )}
              >
                {stage.title}
              </Heading>
              <Text
                className={cn(
                  "max-w-measure text-sm leading-relaxed transition-opacity duration-500 ease-(--ease-out) md:text-[15px] md:leading-[1.75]",
                  isActive ? "text-inverse-muted opacity-100" : "text-inverse-muted opacity-70",
                )}
              >
                {stage.description}
              </Text>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
