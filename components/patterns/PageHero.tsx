import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";

const contentVariants = cva("flex w-full flex-col gap-10 md:gap-12", {
  variants: {
    align: {
      left: "items-start text-left",
      center: "items-center text-center",
    },
    maxWidth: {
      sm: "max-w-xl",
      md: "max-w-3xl",
      lg: "max-w-5xl",
      full: "max-w-none",
    },
  },
  defaultVariants: {
    align: "left",
    maxWidth: "md",
  },
});

type PageHeroProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  eyebrow?: ReactNode;
  actions?: ReactNode;
  /**
   * `section` — full pattern with Section + Container (default).
   * `content` — content stack only, for composition inside a parent layout.
   */
  variant?: "section" | "content";
  background?: "default" | "muted" | "inverse";
  className?: string;
} & VariantProps<typeof contentVariants>;

function PageHeroContent({
  title,
  subtitle,
  eyebrow,
  actions,
  align = "left",
  maxWidth = "md",
  isInverse = false,
  className,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  eyebrow?: ReactNode;
  actions?: ReactNode;
  align?: "left" | "center" | null;
  maxWidth?: "sm" | "md" | "lg" | "full" | null;
  isInverse?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(contentVariants({ align, maxWidth }), className)}>
      <div className="flex w-full flex-col gap-8">
        {eyebrow ? (
          <div className="flex w-full flex-col gap-3">
            <Text
              variant="caption"
              className={cn(isInverse && "text-inverse-foreground/60")}
            >
              {eyebrow}
            </Text>
            <Heading variant="display">{title}</Heading>
          </div>
        ) : (
          <Heading variant="display">{title}</Heading>
        )}

        {subtitle ? (
          <Heading
            variant="lead"
            className={cn(
              "max-w-measure",
              align === "center" && "mx-auto",
              isInverse && "text-inverse-foreground/70",
            )}
          >
            {subtitle}
          </Heading>
        ) : null}
      </div>

      {actions ? (
        <div
          className={cn(
            "flex flex-wrap items-center gap-5",
            align === "center" && "justify-center",
          )}
        >
          {actions}
        </div>
      ) : null}
    </div>
  );
}

export function PageHero({
  title,
  subtitle,
  eyebrow,
  actions,
  variant = "section",
  background = "default",
  align = "left",
  maxWidth = "md",
  className,
}: PageHeroProps) {
  const isInverse = background === "inverse";

  const content = (
    <PageHeroContent
      title={title}
      subtitle={subtitle}
      eyebrow={eyebrow}
      actions={actions}
      align={align}
      maxWidth={maxWidth}
      isInverse={isInverse}
      className={variant === "content" ? className : undefined}
    />
  );

  if (variant === "content") {
    return content;
  }

  return (
    <Section background={background} className={className}>
      <Container>{content}</Container>
    </Section>
  );
}
