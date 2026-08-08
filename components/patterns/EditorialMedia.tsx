import { Media } from "@/components/ui/Media";
import { cn } from "@/lib/cn";
import type { MediaSource } from "@/types/media";

type EditorialMediaProps = {
  source: MediaSource;
  /** Subtle dark veil — prepares the frame for future video contrast */
  overlayOpacity?: number;
  className?: string;
  /** Apply muted tonal treatment to still images */
  mutedTone?: boolean;
};

/**
 * Premium editorial media frame.
 * Accepts image or video through `source` without structural change.
 */
export function EditorialMedia({
  source,
  overlayOpacity = 0.22,
  mutedTone = source.type === "image",
  className,
}: EditorialMediaProps) {
  return (
    <figure
      className={cn(
        "relative mx-auto w-full max-w-md bg-media-frame p-3 shadow-soft ring-1 ring-border-subtle sm:max-w-lg sm:p-3.5 md:mx-0 md:max-w-none lg:p-4",
        className,
      )}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-media-matte md:aspect-[3/4] lg:min-h-[28rem] xl:min-h-[32rem]">
        <Media source={source} mutedTone={mutedTone} />

        <div
          className="pointer-events-none absolute inset-0 bg-foreground"
          style={{ opacity: overlayOpacity }}
          aria-hidden="true"
        />
      </div>

      <figcaption className="sr-only">{source.alt}</figcaption>
    </figure>
  );
}
