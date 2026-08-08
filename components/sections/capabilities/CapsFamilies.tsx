import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import {
  capabilitiesHub,
  capabilityFamilies,
} from "@/config/capabilities";
import { cn } from "@/lib/cn";
import { motionTokens } from "@/lib/motion";

export function CapsFamilies() {
  const { categories } = capabilitiesHub;

  return (
    <Section
      background="muted"
      className="pt-16 pb-20 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28"
    >
      <Container>
        <div className="flex flex-col gap-14 md:gap-16">
          <Reveal
            direction="up"
            distance={motionTokens.distance.sm}
            className="flex max-w-xl flex-col gap-4"
          >
            <Heading variant="h1" className="font-medium">
              {categories.headline}
            </Heading>
            <Heading variant="lead" className="max-w-measure">
              {categories.supporting}
            </Heading>
          </Reveal>

          <div className="flex flex-col gap-24 md:gap-28 lg:gap-[7.5rem]">
            {capabilityFamilies.map((family, familyIndex) => (
              <Reveal
                key={family.id}
                direction="up"
                distance={motionTokens.distance.sm}
                delay={familyIndex * 0.03}
              >
                <article
                  className={cn(
                    "grid items-start gap-8 border-t border-border-subtle pt-10",
                    "md:gap-10 md:pt-12",
                    "lg:grid-cols-12 lg:gap-12 lg:pt-14",
                  )}
                >
                  {/* Category — ~30% */}
                  <header className="flex flex-col gap-3 lg:col-span-4 lg:gap-4 lg:pr-4">
                    <Text
                      variant="caption"
                      as="span"
                      className="text-[11px] tracking-[0.16em] text-muted-foreground/35 uppercase"
                    >
                      {String(familyIndex + 1).padStart(2, "0")}
                    </Text>
                    <Heading
                      as="h2"
                      variant="h2"
                      className="font-medium tracking-tight"
                    >
                      {family.title}
                    </Heading>
                    <Text className="max-w-[18rem] text-sm leading-[1.7] text-muted-foreground/75">
                      {family.introduction}
                    </Text>
                  </header>

                  {/* Services — ~70% */}
                  <ul
                    className={cn(
                      "grid list-none grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4",
                      "lg:col-span-8",
                      family.items.length === 3 && "lg:grid-cols-3",
                      family.items.length === 2 && "lg:grid-cols-2",
                    )}
                  >
                    {family.items.map((item) => (
                      <li key={item.title} className="h-full">
                        <Link
                          href={item.href}
                          className={cn(
                            "group relative flex h-full flex-col gap-3 overflow-hidden",
                            "bg-surface px-5 py-6 ring-1 ring-border-subtle",
                            "md:px-6 md:py-7",
                            "transition-[transform,box-shadow,background-color] duration-[250ms] ease-(--ease-out)",
                            "hover:-translate-y-1 hover:bg-background hover:shadow-soft",
                            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground",
                          )}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <Heading
                              as="h3"
                              variant="h4"
                              className="font-medium transition-transform duration-[250ms] ease-(--ease-out) group-hover:translate-x-0.5"
                            >
                              {item.title}
                            </Heading>
                            <svg
                              viewBox="0 0 16 16"
                              className={cn(
                                "mt-1 size-3.5 shrink-0 text-foreground/40",
                                "translate-x-0 opacity-0",
                                "transition-[opacity,transform] duration-[250ms] ease-(--ease-out)",
                                "group-hover:translate-x-0.5 group-hover:opacity-100",
                              )}
                              fill="none"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 8h9M8.5 4.5 12 8l-3.5 3.5"
                                stroke="currentColor"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <Text className="text-sm leading-[1.65] text-muted-foreground/80 line-clamp-2">
                            {item.description}
                          </Text>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
