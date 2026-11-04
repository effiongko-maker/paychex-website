import { MobileNav } from "@/components/layout/MobileNav";
import Link from "next/link";

import { HeaderFrame } from "@/components/layout/HeaderFrame";
import { Logo } from "@/components/layout/Logo";
import { PrimaryNav } from "@/components/layout/PrimaryNav";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

export function Header() {
  return (
    <HeaderFrame>
      <Container className="relative flex h-full items-center justify-between gap-6">
        <div className="relative z-10 flex shrink-0 items-center">
          <Logo priority variant="logo" className="[&_img]:!h-[68px] sm:[&_img]:!h-[76px] lg:[&_img]:!h-[80px]" />
        </div>

        <MobileNav />

        <div className="absolute inset-y-0 left-1/2 hidden -translate-x-1/2 items-center md:flex">
          <PrimaryNav />
        </div>

        <Link
          href={siteConfig.cta.href}
          className={cn(
            buttonVariants({ variant: "primary", size: "sm" }),
            "hidden sm:inline-flex",
          )}
        >
          {siteConfig.cta.label}
        </Link>
      </Container>
    </HeaderFrame>
  );
}
