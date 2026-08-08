"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

import { cn } from "@/lib/cn";
import { motionTokens } from "@/lib/motion";

type AnimatedNumberProps = {
  value: number;
  /** Text after the number, e.g. "+" or " States" */
  suffix?: string;
  /** Format with thousands separators */
  format?: "comma" | "plain";
  className?: string;
  duration?: number;
};

function formatNumber(value: number, format: "comma" | "plain") {
  if (format === "comma") {
    return new Intl.NumberFormat("en-US").format(value);
  }
  return String(value);
}

export function AnimatedNumber({
  value,
  suffix = "",
  format = "plain",
  className,
  duration = motionTokens.duration.count,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion || !inView) return;

    const controls = animate(0, value, {
      duration,
      ease: motionTokens.ease,
      onUpdate: (latest) => {
        setDisplay(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [duration, inView, prefersReducedMotion, value]);

  const rendered = prefersReducedMotion ? value : display;

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {formatNumber(rendered, format)}
      {suffix}
    </span>
  );
}
