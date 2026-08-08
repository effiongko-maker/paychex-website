import type { Metadata } from "next";

import { AboutApproach } from "@/components/sections/about/AboutApproach";
import { AboutCapabilities } from "@/components/sections/about/AboutCapabilities";
import { AboutCredibility } from "@/components/sections/about/AboutCredibility";
import { AboutCta } from "@/components/sections/about/AboutCta";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutThinking } from "@/components/sections/about/AboutThinking";
import { AboutValue } from "@/components/sections/about/AboutValue";
import { AboutWhoWeAre } from "@/components/sections/about/AboutWhoWeAre";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why organisations trust PayChex with important work — specialist capability, disciplined delivery and clear accountability since 2008.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutWhoWeAre />
      <AboutApproach />
      <AboutCapabilities />
      <AboutValue />
      <AboutThinking />
      <AboutCredibility />
      <AboutCta />
    </>
  );
}
