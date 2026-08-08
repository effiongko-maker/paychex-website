/**
 * Motion family — keep in sync with CSS --duration-* / --ease-out.
 * Animate opacity + transform only.
 */
export const motionTokens = {
  duration: {
    /** Micro fades, metric crossfades */
    fast: 0.3,
    /** Default reveal / fade-in */
    base: 0.55,
    /** Media entrances / editorial enters */
    slow: 0.75,
    /** Statistic count-up */
    count: 1.35,
  },
  /** CSS hover / underline transitions (seconds) */
  hover: 0.3,
  ease: [0.22, 1, 0.36, 1] as const,
  distance: {
    sm: 16,
    md: 24,
    lg: 40,
  },
  stagger: {
    sm: 0.06,
    md: 0.1,
    lg: 0.14,
  },
  /** Shared media hover scale */
  mediaHoverScale: 1.03,
} as const;

export type RevealDirection = "up" | "down" | "left" | "right";

export function getRevealOffset(
  direction: RevealDirection,
  distance: number,
): { x?: number; y?: number } {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
  }
}
