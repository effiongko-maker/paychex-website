import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";
import type { EditorialPillar } from "@/types/content";

type EditorialPillarsProps = {
  pillars: readonly EditorialPillar[];
  className?: string;
  /** Quiet publication indices (01, 02, 03) */
  indexed?: boolean;
  tone?: "default" | "inverse";
};

function formatIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function EditorialPillars({
  pillars,
  className,
  indexed = false,
  tone = "default",
}: EditorialPillarsProps) {
  const isInverse = tone === "inverse";

  return (
    <ul
      className={cn(
        "grid list-none grid-cols-1 gap-0 md:grid-cols-3",
        className,
      )}
    >
      {pillars.map((pillar, index) => {
        const isFirst = index === 0;
        const isLast = index === pillars.length - 1;

        return (
          <li
            key={pillar.title}
            className={cn(
              "flex flex-col gap-4 py-10",
              isInverse ? "border-border-inverse" : "border-border",
              "border-b last:border-b-0",
              "md:border-b-0 md:border-r md:px-10 md:py-2 md:last:border-r-0",
              isFirst && "pt-0 md:pl-0",
              isLast && "md:pr-0",
            )}
          >
            {indexed ? (
              <Text
                variant="caption"
                as="span"
                className={cn(
                  isInverse
                    ? "text-accent"
                    : "text-muted-foreground/60",
                )}
              >
                {formatIndex(index)}
              </Text>
            ) : null}
            <Heading
              as="h3"
              variant="h4"
              className={cn(
                "font-medium",
                isInverse && "text-inverse-foreground",
              )}
            >
              {pillar.title}
            </Heading>
            <Text
              variant="muted"
              className={cn(
                "max-w-measure text-sm leading-relaxed",
                isInverse && "text-inverse-muted",
              )}
            >
              {pillar.description}
            </Text>
          </li>
        );
      })}
    </ul>
  );
}
