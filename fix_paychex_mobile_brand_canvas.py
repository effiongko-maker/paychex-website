from pathlib import Path
root=Path.cwd()
hero=root/'components/sections/home/HomeHero.tsx'
frame=root/'components/layout/HeaderFrame.tsx'
header=root/'components/layout/Header.tsx'
css=root/'app/globals.css'
for f in (hero,frame,header,css):
    if not f.exists(): raise SystemExit(f'Missing {f}. Run from repository root.')
changes={}
def replace_once(s,old,new,label):
    if new in s: return s
    if old not in s: raise SystemExit(f'Unexpected {label} structure; no files changed.')
    return s.replace(old,new,1)
s=hero.read_text()
if 'brand-canvas-art' not in s: raise SystemExit('Brand Canvas not installed; no changes made.')
s=replace_once(s,'max-md:h-[40%] max-md:w-full max-md:opacity-35','max-md:h-[29%] max-md:w-full max-md:opacity-20', 'artwork mobile sizing')
s=replace_once(s,'max-md:min-h-[760px] max-md:items-start max-md:pt-20 max-sm:min-h-[700px]','max-md:min-h-0 max-md:items-start max-md:py-12 max-sm:py-10','hero mobile spacing')
s=replace_once(s,'className="max-w-[790px] max-lg:max-w-[690px]"','className="max-w-[790px] max-lg:max-w-[690px] max-md:w-full"','hero content')
s=replace_once(s,'className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.16em] text-[#e9d49a]"','className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.16em] text-[#e9d49a] max-sm:mb-5 max-sm:text-[10px] max-sm:tracking-[.11em]"','eyebrow')
s=replace_once(s,'className="text-[clamp(3.2rem,6.25vw,6.8rem)] font-semibold leading-[1.02] tracking-[-.062em]"','className="text-[clamp(3.2rem,6.25vw,6.8rem)] font-semibold leading-[1.02] tracking-[-.062em] max-sm:text-[clamp(2.55rem,10.2vw,3.5rem)] max-sm:leading-[1.05] max-sm:tracking-[-.055em]"','headline')
s=replace_once(s,'<p className="mt-9 max-w-[570px] text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.75] text-[#e2dfd9] max-md:max-w-[530px]">{homeHero.subtitle}</p>','''<p className="mt-9 max-w-[570px] text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.75] text-[#e2dfd9] max-md:max-w-[530px] max-sm:mt-6 max-sm:hidden">{homeHero.subtitle}</p>
          <p className="mt-6 hidden max-w-[34rem] text-[1rem] leading-[1.6] text-[#e2dfd9] max-sm:block">PayChex brings together specialist expertise and accountable delivery to help organisations get important work done.</p>''','mobile copy')
s=replace_once(s,'className="mt-9 flex flex-wrap gap-4"','className="mt-9 flex flex-wrap gap-4 max-sm:mt-7 max-sm:flex-col max-sm:gap-3"','buttons wrapper')
s=s.replace('px-7 py-3 text-sm font-semibold','px-7 py-3 text-sm font-semibold max-sm:w-full max-sm:min-h-12',2)
changes[hero]=s
s=frame.read_text()
s=replace_once(s,'data-home-dark={homeTop ? "true" : "false"}','data-home-dark={homeTop ? "true" : "false"}\n      data-home-page={pathname === "/" ? "true" : "false"}','home data attribute')
changes[frame]=s
s=header.read_text()
# Make home page logo consistently typography-based even in light scroll state.
if 'site-logo-normal' not in s or 'site-logo-inverse' not in s: raise SystemExit('Unexpected header logo structure; no files changed.')
if 'site-home-wordmark' not in s:
    needle='<div className="site-logo-normal"><Logo priority /></div>'
    replacement='''<div className="site-logo-normal"><Logo priority /></div>
        <Link href="/" aria-label="PayChex home" className="site-home-wordmark hidden whitespace-nowrap text-[1.65rem] font-bold tracking-[-.055em] text-[#171717] sm:text-[2rem]">PayChex<span className="ml-1 text-[#d1aa20]">/</span></Link>'''
    s=replace_once(s,needle,replacement,'normal logo')
changes[header]=s
s=css.read_text()
marker='/* Brand Canvas mobile refinement v3 */'
if marker not in s:
    s+='''\n\n/* Brand Canvas mobile refinement v3 */
header[data-home-page="true"]:not([data-home-dark="true"]) .site-logo-normal { display: none; }
header[data-home-page="true"]:not([data-home-dark="true"]) .site-home-wordmark { display: inline-flex; }
header[data-home-dark="true"] .site-home-wordmark { display: none; }
@media (max-width: 767px) {
  .brand-canvas-art { mask-image: linear-gradient(to bottom, transparent, black 32%); }
  header[data-home-page="true"] .site-logo-inverse { line-height: 1; }
  header[data-home-page="true"] .site-logo-inverse a { font-size: 1.65rem; }
}
'''
changes[css]=s
for f,s in changes.items():
    if f.read_text()!=s:
        f.write_text(s)
        print('Updated',f.relative_to(root))
print('Mobile refinement applied. No commit, push or deployment.')
