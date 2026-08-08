import Image from "next/image";

import { cn } from "@/lib/cn";
import type { MediaSource } from "@/types/media";

type MediaProps = {
  source: MediaSource;
  className?: string;
  /** Soft monochrome treatment for temporary stills */
  mutedTone?: boolean | "soft";
};

/**
 * Renders either next/image or HTML5 video to fill its relative parent.
 * Swap source type in config — no layout changes required.
 */
export function Media({ source, className, mutedTone = false }: MediaProps) {
  const mediaClassName = cn(
    "absolute inset-0 h-full w-full object-cover",
    mutedTone === true &&
      source.type === "image" &&
      "grayscale-[0.5] contrast-[1.05] brightness-[0.9]",
    mutedTone === "soft" &&
      source.type === "image" &&
      "contrast-[1.03] brightness-[0.97] saturate-[0.92]",
    className,
  );

  if (source.type === "video") {
    return (
      <video
        className={mediaClassName}
        src={source.src}
        poster={source.poster}
        autoPlay={source.autoPlay ?? true}
        muted={source.muted ?? true}
        loop={source.loop ?? true}
        playsInline
        preload="metadata"
        aria-label={source.alt}
      />
    );
  }

  return (
    <Image
      src={source.src}
      alt={source.alt}
      fill
      priority={source.priority}
      loading={source.priority ? undefined : "lazy"}
      sizes={source.sizes ?? "(max-width: 768px) 100vw, 50vw"}
      className={mediaClassName}
    />
  );
}
