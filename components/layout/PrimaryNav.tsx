"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function PrimaryNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary">
      <ul className="flex items-center gap-8 lg:gap-10">
        {siteConfig.nav.map((item) => {
          const active = isActivePath(pathname, item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group/nav relative rounded-control pb-1 text-[13px] font-normal tracking-[0.02em]",
                  "transition-colors duration-(--duration-base) ease-(--ease-out)",
                  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground",
                  "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-foreground",
                  "after:transition-transform after:duration-(--duration-base) after:ease-(--ease-out)",
                  active
                    ? "text-foreground after:scale-x-100"
                    : "text-label after:scale-x-0 hover:text-foreground hover:after:scale-x-100",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
