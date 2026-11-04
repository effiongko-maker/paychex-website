import { RippleHero } from "@/components/sections/home/RippleHero";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { homeHero } from "@/config/home";

export function HomeHero() {
  return (
    <section className="brand-canvas relative isolate overflow-hidden bg-[#171717] text-white" aria-labelledby="home-hero-title">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_65%,#34302a_0%,#1c1b1a_40%,#171717_75%)]" aria-hidden="true" />
      <div className="brand-canvas-art pointer-events-none absolute inset-y-0 right-[-7%] w-[59%] opacity-85 max-lg:right-[-10%] max-lg:w-[68%] max-md:inset-x-0 max-md:top-auto max-md:bottom-0 max-md:h-[29%] max-md:w-full max-md:opacity-20" aria-hidden="true">
        <svg viewBox="0 0 940 790" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
          <defs>
            <linearGradient id="px-stone" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f2ebe0"/><stop offset=".46" stopColor="#b8a99a"/><stop offset="1" stopColor="#6e645c"/></linearGradient>
            <linearGradient id="px-gold" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff09c"/><stop offset=".48" stopColor="#e6bc26"/><stop offset="1" stopColor="#a87707"/></linearGradient>
            <linearGradient id="px-shadow" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#000" stopOpacity=".02"/><stop offset="1" stopColor="#000" stopOpacity=".5"/></linearGradient>
            <pattern id="px-lines" width="11" height="11" patternUnits="userSpaceOnUse"><path d="M0 0V11" stroke="#fff" strokeOpacity=".075" strokeWidth="1"/></pattern>
          </defs>
          <path d="M150 870C240 415 585 94 1000 104L1000 890Z" fill="url(#px-stone)"/>
          <path d="M150 870C240 415 585 94 1000 104L1000 890Z" fill="url(#px-lines)"/>
          <path d="M350 880C490 495 713 326 1010 327L1010 900Z" fill="url(#px-gold)"/>
          <path d="M440 880C566 569 753 444 1010 439L1010 900Z" fill="#29221b"/>
          <path d="M440 880C566 569 753 444 1010 439L1010 900Z" fill="url(#px-shadow)"/>
          <path d="M690 760L1000 210V900H620Z" fill="#e9dfd1"/>
          <path d="M690 760L1000 210V900H620Z" fill="url(#px-lines)"/>
        </svg>
      </div>
      <Container className="relative z-10 flex min-h-[min(760px,calc(100svh-5rem))] items-center py-24 max-md:min-h-0 max-md:items-start max-md:py-12 max-sm:py-10">
        <div className="max-w-[790px] max-lg:max-w-[690px] max-md:w-full">
          <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.16em] text-[#e9d49a] max-sm:mb-5 max-sm:text-[10px] max-sm:tracking-[.11em]"><span className="h-[3px] w-11 bg-[#edc63a]"/>Integrated solutions partner</p>
          <h1 id="home-hero-title" className="text-[clamp(3.2rem,6.25vw,6.8rem)] font-semibold leading-[1.02] tracking-[-.062em] max-sm:text-[clamp(2.55rem,10.2vw,3.5rem)] max-sm:leading-[1.05] max-sm:tracking-[-.055em]">
            {homeHero.title.lead}<br/>Execution that <span className="text-[#f0c72f]">lasts.</span>
          </h1>
          <p className="mt-9 max-w-[570px] text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.75] text-[#e2dfd9] max-md:max-w-[530px] max-sm:mt-6 max-sm:hidden">{homeHero.subtitle}</p>
          <p className="mt-6 hidden max-w-[34rem] text-[1rem] leading-[1.6] text-[#e2dfd9] max-sm:block">PayChex brings together specialist expertise and accountable delivery to help organisations get important work done.</p>
          <div className="mt-9 flex flex-wrap gap-4 max-sm:mt-7 max-sm:flex-col max-sm:gap-3">
            <Link href={homeHero.primary.href} className="inline-flex min-h-12 items-center justify-center rounded-[2px] bg-[#f0ca38] px-7 py-3 text-sm font-semibold max-sm:w-full max-sm:min-h-12 text-[#151515] transition-colors hover:bg-[#ffdc58] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{homeHero.primary.label}</Link>
            <Link href={homeHero.secondary.href} className="inline-flex min-h-12 items-center justify-center rounded-[2px] border border-white/70 bg-black/15 px-7 py-3 text-sm font-semibold max-sm:w-full max-sm:min-h-12 text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{homeHero.secondary.label}</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
