from pathlib import Path
import subprocess

root=Path.cwd()
assert (root/'components/sections/home/HomeHero.tsx').exists(), 'Run from paychex-website repository root'

def write(path, body):
    f=root/path; f.parent.mkdir(parents=True,exist_ok=True); f.write_text(body.strip()+'\n'); print('Updated',path)

write('components/sections/home/HomeHero.tsx',r'''
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { homeHero } from "@/config/home";

export function HomeHero() {
  return (
    <section className="brand-canvas relative isolate overflow-hidden bg-[#171717] text-white" aria-labelledby="home-hero-title">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_65%,#34302a_0%,#1c1b1a_40%,#171717_75%)]" aria-hidden="true" />
      <div className="brand-canvas-art pointer-events-none absolute inset-y-0 right-0 w-[64%] opacity-90 max-lg:w-[75%] max-md:inset-x-0 max-md:top-auto max-md:bottom-0 max-md:h-[45%] max-md:w-full max-md:opacity-45" aria-hidden="true">
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
      <Container className="relative z-10 flex min-h-[min(760px,calc(100svh-5rem))] items-center py-24 max-md:min-h-[760px] max-md:items-start max-md:pt-20 max-sm:min-h-[700px]">
        <div className="max-w-[790px] max-lg:max-w-[690px]">
          <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.16em] text-[#e9d49a]"><span className="h-[3px] w-11 bg-[#edc63a]"/>Integrated solutions partner</p>
          <h1 id="home-hero-title" className="text-[clamp(3.2rem,6.25vw,6.8rem)] font-semibold leading-[1.02] tracking-[-.062em]">
            {homeHero.title.lead}<br/>Execution that <span className="text-[#f0c72f]">lasts.</span>
          </h1>
          <p className="mt-9 max-w-[570px] text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.75] text-[#e2dfd9] max-md:max-w-[530px]">{homeHero.subtitle}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href={homeHero.primary.href} className="inline-flex min-h-12 items-center justify-center rounded-[2px] bg-[#f0ca38] px-7 py-3 text-sm font-semibold text-[#151515] transition-colors hover:bg-[#ffdc58] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{homeHero.primary.label}</Link>
            <Link href={homeHero.secondary.href} className="inline-flex min-h-12 items-center justify-center rounded-[2px] border border-white/70 bg-black/15 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{homeHero.secondary.label}</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
''')

p=root/'components/layout/HeaderFrame.tsx'
s=p.read_text()
s=s.replace('import type { ReactNode } from "react";', 'import type { ReactNode } from "react";\nimport { usePathname } from "next/navigation";')
s=s.replace('  const scrolled = useScrolled(SCROLL_THRESHOLD);','  const scrolled = useScrolled(SCROLL_THRESHOLD);\n  const pathname = usePathname();\n  const homeTop = pathname === "/" && !scrolled;')
s=s.replace('data-scrolled={scrolled ? "true" : "false"}', 'data-scrolled={scrolled ? "true" : "false"}\n      data-home-dark={homeTop ? "true" : "false"}')
s=s.replace('"sticky top-0 z-50 w-full border-b",','"sticky top-0 z-50 w-full border-b",\n        homeTop && "bg-[#171717] text-white",')
s=s.replace('"border-transparent bg-transparent shadow-none backdrop-blur-none",','"border-transparent bg-transparent shadow-none backdrop-blur-none",')
write('components/layout/HeaderFrame.tsx',s)

p=root/'components/layout/Header.tsx';s=p.read_text()
s=s.replace('<Logo priority />','<div className="site-logo-normal"><Logo priority /></div>\n        <div className="site-logo-inverse"><Logo priority variant="logoLight" /></div>')
write('components/layout/Header.tsx',s)

p=root/'app/globals.css';s=p.read_text()
s+='''\n/* Homepage-only dark header, returning to normal chrome on scroll. */
.site-logo-inverse { display: none; }
header[data-home-dark="true"] .site-logo-normal { display: none; }
header[data-home-dark="true"] .site-logo-inverse { display: block; }
header[data-home-dark="true"] nav a { color: #eeeae4; }
header[data-home-dark="true"] nav a:hover { color: #fff; }
header[data-home-dark="true"] nav a::after { background-color: #edc63a; }
header[data-home-dark="true"] nav a:focus-visible { outline-color: #fff; }
header[data-home-dark="true"] a[href="/contact"]:not(nav a) { border: 1px solid #edc63a; background: transparent; color: #fff; }
header[data-home-dark="true"] a[href="/contact"]:not(nav a):hover { background: #edc63a; color: #171717; }
@media (max-width: 767px) { .brand-canvas-art { mask-image: linear-gradient(to bottom, transparent, black 20%); } }
'''
write('app/globals.css',s)
print('\nBrand Canvas files updated locally. No commit, push, PR or deployment performed.')
