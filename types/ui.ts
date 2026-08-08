import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type PolymorphicProps<T extends ElementType> = {
  as?: T;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;
