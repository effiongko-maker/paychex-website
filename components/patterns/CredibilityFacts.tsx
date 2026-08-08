"use client";

import { AnimatedNumber } from "@/components/motion/AnimatedNumber";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";
import type { CredibilityFact } from "@/types/metrics";

type CredibilityFactsProps = {
  facts: readonly CredibilityFact[];
  className?: string;
};

export function CredibilityFacts({ facts, className }: CredibilityFactsProps) {
  return (
    <ul
      className={cn(
        "grid list-none grid-cols-1 border-y border-border sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {facts.map((fact, index) => {
        const isFigure = fact.emphasis === "figure";
        const isFirst = index === 0;
        const isLast = index === facts.length - 1;
        const numericValue =
          isFigure && /^\d+$/.test(fact.value)
            ? Number.parseInt(fact.value, 10)
            : null;

        return (
          <li
            key={fact.label + fact.value}
            className={cn(
              "group flex flex-col gap-4 border-border py-9 transition-colors duration-300",
              "border-b last:border-b-0 hover:bg-muted/40",
              "sm:px-8 sm:py-10 sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0",
              "lg:border-b-0 lg:border-r lg:px-9 lg:py-12 lg:odd:border-r lg:last:border-r-0",
              isFirst && "pt-9 sm:pl-0",
              isLast && "sm:pr-0",
            )}
          >
            <Text variant="eyebrow" as="p" className="text-muted-foreground/75">
              {fact.label}
            </Text>
            <Heading
              as="p"
              variant={isFigure ? "h2" : "h4"}
              className={cn(
                "font-medium tracking-tight text-balance transition-transform duration-500 ease-(--ease-out) group-hover:-translate-y-0.5",
                isFigure && "text-4xl sm:text-5xl",
                !isFigure && "text-xl sm:text-2xl",
              )}
            >
              {numericValue !== null ? (
                <AnimatedNumber
                  value={numericValue}
                  suffix={fact.suffix}
                  format={fact.format ?? "plain"}
                />
              ) : (
                fact.value
              )}
            </Heading>
            {fact.detail ? (
              <Text
                variant="muted"
                className="max-w-[16rem] text-sm leading-[1.7] text-muted-foreground/80"
              >
                {fact.detail}
              </Text>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
