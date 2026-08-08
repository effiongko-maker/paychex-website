"use client";

import Image from "next/image";
import { useState } from "react";

import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";

export type CatalogueCapability = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

type CapabilityCatalogueProps = {
  label: string;
  items: readonly CatalogueCapability[];
  className?: string;
};

function formatIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

/**
 * Interactive editorial directory — three-column catalogue + sticky media panel.
 */
export function CapabilityCatalogue({
  label,
  items,
  className,
}: CapabilityCatalogueProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex] ?? items[0];

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex flex-col gap-8 border-b border-foreground/15 pb-8 md:gap-10 md:pb-10">
        <Text variant="eyebrow" as="p">
          {label}
        </Text>
      </div>

      <div className="grid items-start gap-12 pt-12 md:gap-14 md:pt-14 lg:grid-cols-12 lg:gap-16 lg:pt-16">
        <ul className="grid list-none grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 md:gap-y-14 lg:col-span-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <li key={item.title}>
                <button
                  type="button"
                  className={cn(
                    "group flex w-full flex-col items-start gap-3 text-left",
                    "rounded-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground",
                  )}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                >
                  <Text
                    variant="caption"
                    as="span"
                    className={cn(
                      "transition-colors duration-[320ms] ease-(--ease-out)",
                      isActive ? "text-accent" : "text-muted-foreground/55",
                    )}
                  >
                    {formatIndex(index)}
                  </Text>

                  <div className="flex w-full flex-col gap-3">
                    <Heading
                      as="span"
                      variant="h4"
                      className={cn(
                        "font-medium transition-colors duration-[320ms] ease-(--ease-out)",
                        isActive ? "text-accent" : "text-foreground",
                      )}
                    >
                      {item.title}
                    </Heading>

                    <span
                      className={cn(
                        "h-px w-full origin-left bg-accent transition-transform duration-[320ms] ease-(--ease-out)",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                      aria-hidden="true"
                    />

                    <Text
                      variant="muted"
                      className={cn(
                        "max-w-measure text-sm leading-[1.75] transition-colors duration-[320ms] ease-(--ease-out)",
                        isActive
                          ? "text-foreground/85"
                          : "text-muted-foreground",
                      )}
                    >
                      {item.description}
                    </Text>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="relative hidden lg:col-span-6 lg:block">
          <div className="sticky top-28">
            <figure className="relative aspect-[5/6] w-full overflow-hidden bg-media-matte p-3 shadow-float ring-1 ring-border-subtle xl:aspect-[4/5]">
              <div className="relative h-full w-full overflow-hidden bg-muted">
                {items.map((item, index) => (
                  <Image
                    key={item.image.src}
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 1024px) 0vw, 45vw"
                    className={cn(
                      "object-cover transition-[opacity,transform,filter] duration-500 ease-(--ease-out)",
                      index === activeIndex
                        ? "scale-100 opacity-100 brightness-100"
                        : "scale-[1.03] opacity-0 brightness-90",
                    )}
                    priority={index === 0}
                  />
                ))}
              </div>
              <figcaption className="sr-only">{active.image.alt}</figcaption>
            </figure>
          </div>
        </div>
      </div>

      <figure className="relative mt-12 aspect-[16/10] w-full overflow-hidden bg-media-matte p-2.5 shadow-soft ring-1 ring-border-subtle lg:hidden">
        <div className="relative h-full w-full overflow-hidden bg-muted">
          {items.map((item, index) => (
            <Image
              key={`mobile-${item.image.src}`}
              src={item.image.src}
              alt={item.image.alt}
              fill
              sizes="100vw"
              className={cn(
                "object-cover transition-[opacity,transform] duration-500 ease-(--ease-out)",
                index === activeIndex
                  ? "scale-100 opacity-100"
                  : "scale-[1.03] opacity-0",
              )}
            />
          ))}
        </div>
        <figcaption className="sr-only">{active.image.alt}</figcaption>
      </figure>
    </div>
  );
}
