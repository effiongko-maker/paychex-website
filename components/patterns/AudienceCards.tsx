"use client";

import Image from "next/image";

import { Reveal } from "@/components/motion/Reveal";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";
import { motionTokens } from "@/lib/motion";

export type AudienceCardData = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  mark: "gov" | "reg" | "dev" | "ent";
};

type AudienceCardsProps = {
  audiences: readonly AudienceCardData[];
  className?: string;
};

function AudienceMark({ mark }: { mark: AudienceCardData["mark"] }) {
  const common = "stroke-current";
  switch (mark) {
    case "gov":
      return (
        <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
          <path
            className={common}
            strokeWidth="1.25"
            d="M4 20h16M6 20V10l6-4 6 4v10M9 20v-4h6v4"
          />
        </svg>
      );
    case "reg":
      return (
        <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
          <circle className={common} cx="12" cy="12" r="7" strokeWidth="1.25" />
          <path className={common} strokeWidth="1.25" d="M12 8v4l2.5 2.5" />
        </svg>
      );
    case "dev":
      return (
        <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
          <path
            className={common}
            strokeWidth="1.25"
            d="M5 16l3.5-8h7L19 16M8 12h8"
          />
        </svg>
      );
    case "ent":
      return (
        <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
          <path
            className={common}
            strokeWidth="1.25"
            d="M4 20V9l8-4 8 4v11M8 20v-6h8v6"
          />
        </svg>
      );
  }
}

export function AudienceCards({ audiences, className }: AudienceCardsProps) {
  return (
    <ul
      className={cn(
        "grid list-none grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5",
        className,
      )}
    >
      {audiences.map((audience, index) => (
        <li key={audience.title}>
          <Reveal
            direction="up"
            distance={motionTokens.distance.sm}
            delay={index * 0.06}
            className="h-full"
          >
            <article
              className={cn(
                "group flex h-full flex-col overflow-hidden bg-surface ring-1 ring-border-subtle",
                "transition-[box-shadow,transform] duration-500 ease-(--ease-out)",
                "will-change-transform hover:-translate-y-1 hover:shadow-soft",
              )}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-media-matte">
                <Image
                  src={audience.image.src}
                  alt={audience.image.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-[filter,transform] duration-(--duration-media) ease-(--ease-out) will-change-transform group-hover:scale-[1.03] motion-reduce:transform-none"
                  style={{
                    filter: "grayscale(0.15) contrast(1.02) brightness(0.97)",
                  }}
                />
                <div className="absolute inset-0 bg-foreground/12 transition-opacity duration-500 group-hover:opacity-5" />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
                <span className="text-muted-foreground/70 transition-colors duration-300 group-hover:text-accent">
                  <AudienceMark mark={audience.mark} />
                </span>
                <Heading as="h3" variant="h4" className="font-medium">
                  {audience.title}
                </Heading>
                <Text variant="muted" className="text-sm leading-[1.75]">
                  {audience.description}
                </Text>
              </div>
            </article>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
