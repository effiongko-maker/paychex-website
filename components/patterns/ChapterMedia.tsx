import { Media } from "@/components/ui/Media";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";
import type { MediaSource } from "@/types/media";

export type ChapterMediaFrame =
  | "landscape"
  | "portrait"
  | "wide"
  | "bleed"
  | "overlap";

type ChapterMediaProps = {
  source: MediaSource;
  className?: string;
  overlayOpacity?: number;
  mutedTone?: boolean | "soft";
  plateLabel?: string;
  frame?: ChapterMediaFrame;
};

const frameShell: Record<ChapterMediaFrame, string> = {
  landscape:
    "aspect-[16/11] max-h-[560px] md:aspect-[16/10] lg:max-h-[540px]",
  portrait:
    "aspect-[4/5] max-h-[620px] md:aspect-[3/4] lg:max-h-[580px]",
  wide: "aspect-[21/10] max-h-[480px] md:aspect-[2.2/1] lg:max-h-[460px]",
  bleed:
    "aspect-[16/11] max-h-[560px] md:aspect-[16/10] lg:max-h-[540px] lg:w-[calc(100%+2rem)] lg:max-w-none",
  overlap:
    "aspect-[16/11] max-h-[560px] md:aspect-[16/10] lg:max-h-[540px]",
};

/**
 * Layered chapter media plate — frame variants break visual monotony.
 */
export function ChapterMedia({
  source,
  className,
  overlayOpacity = 0.1,
  mutedTone = "soft",
  plateLabel,
  frame = "landscape",
}: ChapterMediaProps) {
  return (
    <figure
      className={cn(
        "relative w-full",
        frame === "bleed" && "lg:-mr-8",
        frame === "overlap" && "lg:mt-6",
        className,
      )}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden bg-media-matte shadow-soft ring-1 ring-border-subtle",
          frameShell[frame],
          frame === "overlap" &&
            "after:pointer-events-none after:absolute after:-left-4 after:-top-4 after:z-[-1] after:h-full after:w-full after:border after:border-border",
        )}
      >
        <div
          className={cn(
            "absolute overflow-hidden bg-muted",
            frame === "bleed" ? "inset-[1%]" : "inset-[2%]",
          )}
        >
          <Media
            source={source}
            mutedTone={mutedTone}
            className="object-cover object-[center_35%] transition-transform duration-(--duration-media) ease-(--ease-out) group-hover:scale-[1.03] motion-reduce:transform-none"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-foreground"
            style={{ opacity: overlayOpacity }}
            aria-hidden="true"
          />
        </div>
      </div>

      {plateLabel ? (
        <Text
          as="span"
          variant="caption"
          className="absolute -bottom-3 left-0 z-10 bg-background px-3 py-2 text-muted-foreground/65 md:-bottom-3.5 md:left-[-0.5rem]"
        >
          {plateLabel}
        </Text>
      ) : null}

      <figcaption className="sr-only">{source.alt}</figcaption>
    </figure>
  );
}
