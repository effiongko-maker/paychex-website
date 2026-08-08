import type { ElementType } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";
import type { PolymorphicProps } from "@/types/ui";

const headingVariants = cva("font-sans text-balance tracking-tight", {
  variants: {
    variant: {
      display: "text-4xl font-medium sm:text-5xl lg:text-6xl",
      h1: "text-3xl font-medium sm:text-4xl lg:text-5xl",
      h2: "text-2xl font-medium sm:text-3xl",
      h3: "text-xl font-medium sm:text-2xl",
      h4: "text-lg font-medium",
      lead: "text-lg font-normal tracking-normal text-muted-foreground leading-[var(--leading-prose)] sm:text-xl sm:leading-[var(--leading-prose)]",
    },
  },
  defaultVariants: {
    variant: "h2",
  },
});

const defaultElements = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  lead: "p",
} as const;

type HeadingVariant = NonNullable<
  VariantProps<typeof headingVariants>["variant"]
>;

type HeadingProps<T extends ElementType = "h2"> = PolymorphicProps<T> &
  VariantProps<typeof headingVariants>;

export function Heading<T extends ElementType = "h2">({
  as,
  variant = "h2",
  className,
  children,
  ...props
}: HeadingProps<T>) {
  const resolvedVariant = (variant ?? "h2") as HeadingVariant;
  const Component = (as ?? defaultElements[resolvedVariant]) as ElementType;

  return (
    <Component
      className={cn(headingVariants({ variant: resolvedVariant }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}
