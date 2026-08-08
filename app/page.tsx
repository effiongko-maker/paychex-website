import { HomeCapabilities } from "@/components/sections/home/HomeCapabilities";
import { HomeCredibility } from "@/components/sections/home/HomeCredibility";
import { HomeCta } from "@/components/sections/home/HomeCta";
import { HomeDeliveryModel } from "@/components/sections/home/HomeDeliveryModel";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { HomeIdentity } from "@/components/sections/home/HomeIdentity";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeIdentity />
      <HomeCapabilities />
      <HomeDeliveryModel />
      <HomeCredibility />
      <HomeCta />
    </>
  );
}
