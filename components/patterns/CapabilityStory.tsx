import { Reveal } from "@/components/motion/Reveal";
import {
  ChapterMedia,
  type ChapterMediaFrame,
} from "@/components/patterns/ChapterMedia";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { TextLink } from "@/components/ui/TextLink";
import { cn } from "@/lib/cn";
import { motionTokens } from "@/lib/motion";
import type { MediaSource } from "@/types/media";

export type CapabilityStoryData = {
  title: string;
  description: string;
  href: string;
  linkLabel?: string;
  media: MediaSource;
  /** text-start = copy left / media right; media-start = reverse */
  layout: "text-start" | "media-start";
  index?: string;
  frame?: ChapterMediaFrame;
};

type CapabilityStoryProps = {
  story: CapabilityStoryData;
  className?: string;
};

export function CapabilityStory({ story, className }: CapabilityStoryProps) {
  const mediaFirst = story.layout === "media-start";
  const frame = story.frame ?? "landscape";
  const mediaSpan =
    frame === "portrait" ? "lg:col-span-5" : "lg:col-span-7";
  const copySpan =
    frame === "portrait" ? "lg:col-span-7" : "lg:col-span-5";

  return (
    <article
      className={cn(
        "group grid items-start gap-10 md:gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16",
        className,
      )}
    >
      <Reveal
        direction="up"
        distance={motionTokens.distance.sm}
        className={cn(
          "flex flex-col gap-5",
          copySpan,
          mediaFirst && "lg:order-2",
        )}
      >
        {story.index ? (
          <Text
            variant="eyebrow"
            as="span"
            className="text-muted-foreground/70"
          >
            {story.index}
          </Text>
        ) : null}
        <Heading as="h3" variant="h2" className="font-medium">
          {story.title}
        </Heading>
        <Text variant="muted" className="max-w-measure leading-relaxed">
          {story.description}
        </Text>
        <TextLink href={story.href}>
          {story.linkLabel ?? "Explore capability"}
        </TextLink>
      </Reveal>

      <Reveal
        direction="up"
        distance={motionTokens.distance.md}
        delay={0.12}
        className={cn(
          mediaSpan,
          mediaFirst && "lg:order-1",
          story.index && frame !== "bleed" && "pb-5 md:pb-6",
        )}
      >
        <ChapterMedia
          source={story.media}
          plateLabel={story.index}
          frame={frame}
        />
      </Reveal>
    </article>
  );
}
