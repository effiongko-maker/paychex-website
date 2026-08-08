import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type ContainerProps = ComponentPropsWithoutRef<"div">;

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-container px-container",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
