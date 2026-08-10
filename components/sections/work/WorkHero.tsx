import Image from "next/image";

import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { workPage } from "@/config/work";
import { cn } from "@/lib/cn";
import { pageHeroClass } from "@/lib/layout";
import { motionTokens } from "@/lib/motion";

type Preview = (typeof workPage.hero.previews)[number];

function PreviewLabel({
  preview,
  className,
}: {
  preview: Preview;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <Text
        variant="caption"
        as="span"
        className="tracking-[0.16em] text-muted-foreground/40"
      >
        {preview.index}
      </Text>
      <span className="h-px w-3.5 bg-accent" aria-hidden />
      <Text
        variant="caption"
        as="span"
        className="tracking-[0.12em] uppercase text-muted-foreground/45"
      >
        {preview.category}
      </Text>
    </div>
  );
}

function PreviewPlate({
  preview,
  aspectClassName,
  sizes,
  priority = false,
  className,
}: {
  preview: Preview;
  aspectClassName: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={cn("flex flex-col gap-2.5", className)}>
      <MediaFrame aspectClassName={aspectClassName}>
        <Image
          src={preview.src}
          alt={preview.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-center contrast-[1.03] brightness-[0.97] saturate-[0.92]"
        />
      </MediaFrame>
      <figcaption>
        <PreviewLabel preview={preview} />
      </figcaption>
    </figure>
  );
}

/**
 * Work page opening — editorial portfolio index.
 * Text leads; asymmetric project photography fills the right plane.
 */
export function WorkHero() {
  const { hero } = workPage;
  const primary = hero.previews.find((preview) => preview.role === "primary");
  const secondary = hero.previews.find(
    (preview) => preview.role === "secondary",
  );
  const accent = hero.previews.find((preview) => preview.role === "accent");

  return (
    <Section
      background="surface"
      padding="none"
      className={cn(pageHeroClass, "pb-14 md:pb-16 lg:pb-20")}
    >
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          <div className="flex max-w-xl flex-col gap-5 md:gap-6 lg:col-span-5 lg:pt-2 xl:pt-4">
            <Reveal
              direction="up"
              distance={motionTokens.distance.sm}
              duration={motionTokens.duration.slow}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-5 bg-accent" aria-hidden />
                <Text
                  variant="caption"
                  as="span"
                  className="text-muted-foreground/50"
                >
                  {hero.label}
                </Text>
              </div>
            </Reveal>
            <Reveal
              direction="up"
              distance={motionTokens.distance.md}
              delay={0.06}
              duration={motionTokens.duration.slow}
            >
              <Heading variant="display" className="tracking-tight">
                {hero.headline}
              </Heading>
            </Reveal>
            <Reveal
              direction="up"
              distance={motionTokens.distance.sm}
              delay={0.12}
              duration={motionTokens.duration.slow}
            >
              <Heading variant="lead" className="max-w-measure">
                {hero.lede}
              </Heading>
            </Reveal>
          </div>

          <Reveal
            direction="up"
            distance={motionTokens.distance.md}
            delay={0.1}
            duration={motionTokens.duration.slow}
            className="lg:col-span-7"
          >
            {/* Desktop / tablet: asymmetric architectural stack */}
            <div className="relative hidden sm:block">
              <div className="grid grid-cols-12 gap-3 md:gap-4">
                {secondary ? (
                  <div className="col-span-5 pt-8 md:pt-12 lg:pt-16">
                    <PreviewPlate
                      preview={secondary}
                      aspectClassName="aspect-[4/5]"
                      sizes="(max-width: 1024px) 40vw, 22vw"
                    />
                  </div>
                ) : null}

                {primary ? (
                  <div className="col-span-7">
                    <PreviewPlate
                      preview={primary}
                      aspectClassName="aspect-[5/4] md:aspect-[4/3]"
                      sizes="(max-width: 1024px) 55vw, 34vw"
                      priority
                    />
                  </div>
                ) : null}

                {accent ? (
                  <div className="relative z-10 col-span-5 col-start-2 -mt-10 md:-mt-14 lg:-mt-16">
                    <PreviewPlate
                      preview={accent}
                      aspectClassName="aspect-[16/11]"
                      sizes="(max-width: 1024px) 40vw, 20vw"
                    />
                  </div>
                ) : null}
              </div>
            </div>

            {/* Mobile: stacked hierarchy — primary first, then pair */}
            <div className="flex flex-col gap-4 sm:hidden">
              {primary ? (
                <PreviewPlate
                  preview={primary}
                  aspectClassName="aspect-[4/3]"
                  sizes="100vw"
                  priority
                />
              ) : null}
              <div className="grid grid-cols-2 gap-3">
                {secondary ? (
                  <PreviewPlate
                    preview={secondary}
                    aspectClassName="aspect-[4/5]"
                    sizes="50vw"
                  />
                ) : null}
                {accent ? (
                  <PreviewPlate
                    preview={accent}
                    aspectClassName="aspect-[4/5]"
                    sizes="50vw"
                  />
                ) : null}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
