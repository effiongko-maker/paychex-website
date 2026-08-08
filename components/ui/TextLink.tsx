import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  /** Show trailing arrow — default true for editorial CTAs */
  arrow?: boolean;
};

export function TextLink({
  href,
  children,
  className,
  arrow = true,
}: TextLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group/link relative inline-flex items-center gap-2.5 text-sm tracking-[0.02em] text-foreground",
        "rounded-control transition-colors duration-(--duration-base) ease-(--ease-out)",
        "hover:text-foreground/70",
        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground",
        "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-current",
        "after:transition-transform after:duration-(--duration-base) after:ease-(--ease-out)",
        "hover:after:scale-x-100",
        className,
      )}
    >
      <span>{children}</span>
      {arrow ? (
        <svg
          viewBox="0 0 16 16"
          className="size-3.5 shrink-0 transition-transform duration-(--duration-base) ease-(--ease-out) group-hover/link:translate-x-1 motion-reduce:transform-none"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 8h9M8.5 4.5 12 8l-3.5 3.5"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
    </Link>
  );
}
