"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import { Media } from "@/components/ui/Media";
import {
  mediaFrameClassName,
  mediaHoverClassName,
} from "@/components/ui/MediaFrame";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { TextLink } from "@/components/ui/TextLink";
import { homeCredibility } from "@/config/home";
import { cn } from "@/lib/cn";
import { motionTokens } from "@/lib/motion";
import type { MediaSource } from "@/types/media";

type PreviewProject = (typeof homeCredibility.workPreview.projects)[number];

function PreviewImage({ media }: { media: MediaSource }) {
  const frameRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["-2.5%", "2.5%"],
  );

  return (
    <figure
      ref={frameRef}
      className={cn(
        mediaFrameClassName,
        "group/media aspect-[4/3] w-full md:aspect-[5/4] lg:aspect-[4/3]",
      )}
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.05 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: motionTokens.duration.slow,
          ease: motionTokens.ease,
        }}
      >
        <motion.div
          className={cn(
            "absolute inset-[-6%] origin-center will-change-transform",
            mediaHoverClassName,
          )}
          style={{ y: parallaxY }}
        >
          <Media source={media} mutedTone="soft" />
        </motion.div>
      </motion.div>
    </figure>
  );
}

function PreviewProject({
  project,
}: {
  project: PreviewProject;
}) {
  const imageFirst = project.imageSide === "left";
  const hasMedia = Boolean(project.media);
  const baseDelay = 0.04;

  const mediaColumn = project.media ? (
    <div className="min-w-0 w-full lg:flex-1">
      <Link
        href={project.href}
        className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        aria-label={`View project: ${project.title}`}
      >
        <PreviewImage media={project.media} />
      </Link>
    </div>
  ) : null;

  const copyColumn = (
    <div
      className={cn(
        "flex min-w-0 w-full flex-col gap-5 md:gap-6 lg:pt-1",
        hasMedia ? "lg:flex-1" : "lg:max-w-3xl",
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: motionTokens.duration.slow,
          delay: baseDelay,
          ease: motionTokens.ease,
        }}
      >
        <div className="flex items-center gap-3">
          <span className="h-px w-5 bg-accent" aria-hidden />
          <Text variant="caption" as="span">
            {project.label}
          </Text>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: motionTokens.duration.slow,
          delay: baseDelay + 0.06,
          ease: motionTokens.ease,
        }}
      >
        <Heading
          as="h3"
          variant="h2"
          className="max-w-md tracking-tight lg:text-[2rem] lg:leading-[1.15]"
        >
          {project.title}
        </Heading>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: motionTokens.duration.slow,
          delay: baseDelay + 0.12,
          ease: motionTokens.ease,
        }}
      >
        <Text variant="muted" className="max-w-measure">
          {project.description}
        </Text>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: motionTokens.duration.slow,
          delay: baseDelay + 0.18,
          ease: motionTokens.ease,
        }}
      >
        <TextLink href={project.href} className="text-base underline-offset-8">
          View project
        </TextLink>
      </motion.div>
    </div>
  );

  return (
    <article className="w-full">
      <div
        className={cn(
          "flex w-full flex-col gap-10 md:gap-12",
          hasMedia && "lg:flex-row lg:items-start lg:gap-14 xl:gap-16",
        )}
      >
        {hasMedia ? (
          imageFirst ? (
            <>
              {mediaColumn}
              {copyColumn}
            </>
          ) : (
            <>
              {copyColumn}
              {mediaColumn}
            </>
          )
        ) : (
          copyColumn
        )}
      </div>
    </article>
  );
}

export function HomeWorkPreview() {
  const { workPreview } = homeCredibility;

  return (
    <div className="flex flex-col gap-14 md:gap-16 lg:gap-20">
      <motion.div
        className="flex max-w-statement flex-col gap-4 md:gap-5"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: motionTokens.duration.slow,
          ease: motionTokens.ease,
        }}
      >
        <Text variant="eyebrow" as="p">
          {workPreview.label}
        </Text>
        <Heading variant="h2">{workPreview.headline}</Heading>
        <Text variant="muted" className="max-w-measure">
          {workPreview.supporting}
        </Text>
      </motion.div>

      <div className="flex flex-col gap-16 md:gap-20 lg:gap-24">
        {workPreview.projects.map((project) => (
          <PreviewProject key={project.id} project={project} />
        ))}
      </div>

      <motion.div
        className="border-t border-border-subtle pt-8 md:pt-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{
          duration: motionTokens.duration.slow,
          ease: motionTokens.ease,
        }}
      >
        <TextLink
          href={workPreview.viewAll.href}
          className="text-base underline-offset-8 md:text-lg"
        >
          {workPreview.viewAll.label}
        </TextLink>
      </motion.div>
    </div>
  );
}
