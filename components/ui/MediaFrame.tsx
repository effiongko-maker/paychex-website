import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

/**
 * Shared editorial media plate.
 * Square corners, soft ring, matte ground — swap photography inside without layout changes.
 */
export const mediaFrameClassName =
  "relative w-full overflow-hidden bg-media-matte shadow-soft ring-1 ring-border-subtle";

export const mediaHoverClassName =
  "transition-transform duration-(--duration-media) ease-(--ease-out) group-hover:scale-[1.03] group-hover/media:scale-[1.03] motion-reduce:transform-none";

type MediaFrameProps = {
  children: ReactNode;
  className?: string;
  /** Aspect / sizing utilities (e.g. aspect-[4/3]) */
  aspectClassName?: string;
  as?: "figure" | "div";
};

export function MediaFrame({
  children,
  className,
  aspectClassName,
  as: Tag = "figure",
}: MediaFrameProps) {
  return (
    <Tag className={cn(mediaFrameClassName, aspectClassName, className)}>
      {children}
    </Tag>
  );
}
