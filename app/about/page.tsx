import type { Metadata } from "next";

import { AboutApproach } from "@/components/sections/about/AboutApproach";
import { AboutCapabilities } from "@/components/sections/about/AboutCapabilities";
import { AboutCta } from "@/components/sections/about/AboutCta";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutThinking } from "@/components/sections/about/AboutThinking";
import { AboutValue } from "@/components/sections/about/AboutValue";
import { AboutWhoWeAre } from "@/components/sections/about/AboutWhoWeAre";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet PayChex, a Nigerian integrated solutions partner bringing together specialist teams to deliver technology, facilities, construction and institutional programmes.",
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
      <AboutCta />
    </>
  );
}
