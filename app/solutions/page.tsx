import type { Metadata } from "next";

import { CapsCta } from "@/components/sections/capabilities/CapsCta";
import { CapsFamilies } from "@/components/sections/capabilities/CapsFamilies";
import { CapsHero } from "@/components/sections/capabilities/CapsHero";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Five areas of expertise. One integrated partner. PayChex brings specialist capabilities together across technology, infrastructure, facilities, professional services and institutional engagements.",
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
