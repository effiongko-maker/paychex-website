"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/cn";
import {
  getRevealOffset,
  motionTokens,
  type RevealDirection,
} from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  duration?: number;
  direction?: RevealDirection;
  once?: boolean;
  amount?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  distance = motionTokens.distance.md,
  duration = motionTokens.duration.base,
  direction = "up",
  once = true,
  amount = 0.2,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const offset = getRevealOffset(direction, distance);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: motionTokens.ease,
      }}
    >
      {children}
    </motion.div>
  );
}
