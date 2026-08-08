"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { homeHeroTrustSignals } from "@/config/home";
import { cn } from "@/lib/cn";
import { motionTokens } from "@/lib/motion";

const INTERVAL_MS = 5500;

export function ImpactMetricsPanel() {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % homeHeroTrustSignals.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [prefersReducedMotion]);

  const signal = homeHeroTrustSignals[index];

  return (
    <motion.aside
      className={cn(
        "absolute bottom-5 left-0 z-10 hidden w-[13.5rem] -translate-x-10 lg:block xl:bottom-7 xl:-translate-x-14",
        "border border-white/40 bg-surface/70 px-8 py-7",
        "shadow-[0_18px_50px_-28px_rgb(0_0_0_/0.28)] backdrop-blur-md",
      )}
      aria-label="Organisational trust signals"
      aria-live="polite"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      animate={
        prefersReducedMotion
          ? undefined
          : {
              opacity: 1,
              y: [0, -5, 0],
            }
      }
      transition={
        prefersReducedMotion
          ? undefined
          : {
              opacity: {
                duration: motionTokens.duration.slow,
                delay: 0.45,
                ease: motionTokens.ease,
              },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.1,
              },
            }
      }
    >
      <div className="relative min-h-[4.5rem]">
        {prefersReducedMotion ? (
          <SignalContent title={signal.title} label={signal.label} />
        ) : (
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={signal.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.45,
                ease: motionTokens.ease,
              }}
            >
              <SignalContent title={signal.title} label={signal.label} />
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </motion.aside>
  );
}

function SignalContent({ title, label }: { title: string; label: string }) {
  return (
    <div className="flex flex-col gap-2.5">
      <Heading as="p" variant="h3" className="font-medium">
        {title}
      </Heading>
      <Text variant="caption">{label}</Text>
    </div>
  );
}
