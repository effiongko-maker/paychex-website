import type { ComponentPropsWithoutRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const sectionVariants = cva("w-full", {
  variants: {
    background: {
      /** Warm off-white — default publication ground */
      default: "bg-background text-foreground",
      /** Light stone — chapter shift */
      muted: "bg-muted text-foreground",
      /** Pure white — readability / metrics */
      surface: "bg-surface text-foreground",
      /** Deep charcoal — signature dark chapter */
      inverse: "bg-inverse text-inverse-foreground",
    },
    padding: {
      /** Default publication rhythm */
      section: "py-section",
      /** Caller supplies padding via className */
      none: "",
    },
  },
  defaultVariants: {
    background: "default",
    padding: "section",
  },
});

type SectionProps = ComponentPropsWithoutRef<"section"> &
  VariantProps<typeof sectionVariants>;

export function Section({
  className,
  background,
  padding,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(sectionVariants({ background, padding }), className)}
      {...props}
    >
      {children}
    </section>
  );
}
