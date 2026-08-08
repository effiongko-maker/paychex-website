import Image from "next/image";
import Link from "next/link";

import { brandLogo } from "@/config/assets";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  priority?: boolean;
  variant?: "logo" | "logoDark" | "logoLight";
  /** Visual size — footer stays a quiet brand mark */
  size?: "default" | "footer";
};

export function Logo({
  className,
  priority = false,
  variant = "logo",
  size = "default",
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={cn(
        "inline-flex shrink-0 items-center",
        className,
      )}
    >
      <Image
        src={brandLogo(variant)}
        alt={siteConfig.name}
        width={1337}
        height={1337}
        priority={priority}
        className={cn(
          "w-auto object-contain",
          size === "footer"
            ? "h-9 sm:h-10"
            : "h-14 sm:h-[3.75rem] lg:h-16",
        )}
      />
    </Link>
  );
}
