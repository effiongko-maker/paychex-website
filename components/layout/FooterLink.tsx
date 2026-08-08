import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type FooterLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

/**
 * Understated footer link — underline grows on hover, no flash.
 */
export function FooterLink({
  href,
  children,
  className,
  external = false,
}: FooterLinkProps) {
  const classes = cn(
    "group/link relative inline-flex w-fit text-[15px] tracking-[0.02em] text-inverse-foreground/70",
    "rounded-control transition-colors duration-(--duration-base) ease-(--ease-out)",
    "hover:text-inverse-foreground",
    "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-inverse-foreground",
    "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-inverse-foreground/50",
    "after:transition-transform after:duration-(--duration-base) after:ease-(--ease-out)",
    "hover:after:scale-x-100",
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
