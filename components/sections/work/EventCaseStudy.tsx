"use client";

import Image from "next/image";

import { Reveal } from "@/components/motion/Reveal";
import { Heading } from "@/components/ui/Heading";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Text } from "@/components/ui/Text";
import type { EventCaseStudy as EventCaseStudyData } from "@/config/work";
import { cn } from "@/lib/cn";
import { motionTokens } from "@/lib/motion";
import type { MediaSource } from "@/types/media";

type EventCaseStudyProps = {
  study: EventCaseStudyData;
  inverse?: boolean;
};

function CaseImage({
  media,
  aspectClassName,
  priority = false,
  inverse = false,
}: {
  media: MediaSource;
  aspectClassName: string;
  priority?: boolean;
  inverse?: boolean;
}) {
  if (media.type !== "image") return null;

  return (
    <MediaFrame
      aspectClassName={aspectClassName}
      className={cn(inverse && "shadow-none ring-border-inverse")}
    >
      <Image
        src={media.src}
        alt={media.alt}
        fill
        priority={priority || Boolean(media.priority)}
        sizes={media.sizes ?? "(max-width: 1024px) 100vw, 48vw"}
        className="object-cover object-center contrast-[1.03] brightness-[0.97] saturate-[0.92]"
      />
    </MediaFrame>
  );
}

/**
 * Editorial case-study unit for the Events portfolio.
 * Image group + project copy form one visual block.
 */
export function EventCaseStudy({
  study,
  inverse = false,
}: EventCaseStudyProps) {
  const featured = Boolean(study.featured);
  const imageFirst = study.imageSide === "left";
  const gallery = study.gallery ?? [];
  const supporting = gallery[0];

  const mediaColumn = (
    <div
      className={cn(
        "order-2 flex min-w-0 flex-col gap-3.5 md:gap-4",
        featured ? "lg:col-span-7" : "lg:col-span-6",
        imageFirst ? "lg:order-1" : "lg:order-2",
      )}
    >
      <CaseImage
        media={study.media}
        inverse={inverse}
        priority={featured}
        aspectClassName={
          featured
            ? "aspect-[4/3] md:aspect-[3/2]"
            : "aspect-[4/3] md:aspect-[5/4]"
        }
      />
      {supporting ? (
        <CaseImage
          media={supporting}
          inverse={inverse}
          aspectClassName="aspect-[16/10]"
        />
      ) : null}
    </div>
  );

  const copyColumn = (
    <div
      className={cn(
        "order-1 flex min-w-0 flex-col gap-3.5 md:gap-4",
        featured ? "lg:col-span-5" : "lg:col-span-6",
        imageFirst ? "lg:order-2" : "lg:order-1",
      )}
    >
      <div className="flex flex-col gap-2 md:gap-2.5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <Text
            variant="caption"
            as="span"
            className={cn(
              "tracking-[0.16em]",
              inverse
                ? "text-inverse-foreground/35"
                : "text-muted-foreground/40",
            )}
          >
            {study.index}
          </Text>
          <span className="h-px w-3.5 bg-accent" aria-hidden />
          <Text
            variant="caption"
            as="span"
            className={cn(
              "tracking-[0.12em] uppercase",
              inverse
                ? "text-inverse-foreground/40"
                : "text-muted-foreground/45",
            )}
          >
            {study.category}
          </Text>
        </div>

        <Heading
          as="h2"
          variant={featured ? "h1" : "h2"}
          className={cn(
            "font-medium tracking-tight",
            featured && "lg:text-[2.75rem] lg:leading-[1.12]",
            inverse ? "text-inverse-foreground" : "text-foreground",
          )}
        >
          {study.title}
        </Heading>

        <Text
          variant="caption"
          as="p"
          className={cn(
            "tracking-[0.08em] uppercase",
            inverse
              ? "text-inverse-foreground/40"
              : "text-muted-foreground/50",
          )}
        >
          {study.location} · {study.date}
        </Text>
      </div>

      <Text
        className={cn(
          "max-w-measure text-[15px] leading-[1.75] md:text-[15px] md:leading-[1.8]",
          inverse
            ? "text-inverse-foreground/55"
            : "text-muted-foreground",
        )}
      >
        {study.body}
      </Text>

      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-3">
          <span className="h-px w-5 bg-accent" aria-hidden />
          <Text
            variant="caption"
            as="span"
            className={cn(
              "tracking-[0.16em] uppercase",
              inverse
                ? "text-inverse-foreground/35"
                : "text-muted-foreground/45",
            )}
          >
            Delivered
          </Text>
        </div>
        <ul className="flex list-none flex-col gap-1.5">
          {study.delivered.map((item) => (
            <li key={item}>
              <Text
                className={cn(
                  "text-sm leading-snug md:text-[15px]",
                  inverse
                    ? "text-inverse-foreground/55"
                    : "text-muted-foreground",
                )}
              >
                {item}
              </Text>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <Reveal direction="up" distance={motionTokens.distance.sm}>
      <article
        id={study.id}
        className="scroll-mt-28 grid grid-cols-1 gap-7 md:scroll-mt-32 md:gap-8 lg:grid-cols-12 lg:items-start lg:gap-10 xl:gap-12"
      >
        {mediaColumn}
        {copyColumn}
      </article>
    </Reveal>
  );
}
