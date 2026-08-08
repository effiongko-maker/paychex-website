import type { ElementType } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";
import type { PolymorphicProps } from "@/types/ui";

const textVariants = cva("font-sans text-pretty", {
  variants: {
    variant: {
      /** Micro label — metrics, meta, indices, form labels */
      caption:
        "text-[11px] leading-normal tracking-[0.14em] text-label uppercase",
      muted: "text-base leading-[var(--leading-prose)] text-muted-foreground",
      body: "text-base leading-[var(--leading-prose)] text-foreground",
      small: "text-sm leading-[var(--leading-prose)] text-foreground",
      /** Editorial eyebrow — catalogue / chapter introductions */
      eyebrow:
        "text-base font-medium uppercase tracking-[0.14em] text-label",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

type TextProps<T extends ElementType = "p"> = PolymorphicProps<T> &
  VariantProps<typeof textVariants>;

export function Text<T extends ElementType = "p">({
  as,
  variant = "body",
  className,
  children,
  ...props
}: TextProps<T>) {
  const Component = (as ?? "p") as ElementType;

  return (
    <Component
      className={cn(textVariants({ variant }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}
