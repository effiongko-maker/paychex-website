import type { Metadata } from "next";

import { CapsCta } from "@/components/sections/capabilities/CapsCta";
import { CapsFamilies } from "@/components/sections/capabilities/CapsFamilies";
import { CapsHero } from "@/components/sections/capabilities/CapsHero";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Specialist capability. Disciplined execution. Technology, infrastructure, operations and people — how PayChex delivers complex programmes.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <CapsHero />
      <CapsFamilies />
      <CapsCta />
    </>
  );
}
