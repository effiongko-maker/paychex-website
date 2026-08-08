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
        <Logo priority />

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
