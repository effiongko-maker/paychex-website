"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import { useScrolled } from "@/lib/use-scrolled";

type HeaderFrameProps = {
  children: ReactNode;
};

const SCROLL_THRESHOLD = 50;

/**
 * Scroll-aware chrome only. Keep navigation content as server children.
 */
export function HeaderFrame({ children }: HeaderFrameProps) {
  const scrolled = useScrolled(SCROLL_THRESHOLD);

  return (
    <header
      data-scrolled={scrolled ? "true" : "false"}
      className={cn(
        "sticky top-0 z-50 w-full border-b",
        "transition-[background-color,border-color,box-shadow,backdrop-filter] duration-(--duration-base) ease-(--ease-out)",
        scrolled
          ? "border-border bg-background/95 shadow-soft backdrop-blur-header"
          : "border-transparent bg-transparent shadow-none backdrop-blur-none",
      )}
    >
      <div
        className={cn(
          "transition-[height] duration-(--duration-base) ease-(--ease-out)",
          scrolled
            ? "h-(--header-height-compact) lg:h-(--header-height-lg-compact)"
            : "h-(--header-height) lg:h-(--header-height-lg)",
        )}
      >
        {children}
      </div>
    </header>
  );
}
