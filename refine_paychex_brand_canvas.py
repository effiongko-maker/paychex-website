from pathlib import Path
root=Path.cwd()
frame=root/'components/layout/HeaderFrame.tsx'
header=root/'components/layout/Header.tsx'
hero=root/'components/sections/home/HomeHero.tsx'
css=root/'app/globals.css'
for p in (frame,header,hero,css):
    if not p.exists(): raise SystemExit(f'Missing {p}; run from repository root')
fs=frame.read_text(); hs=header.read_text(); vs=hero.read_text(); cs=css.read_text()
if 'data-home-dark' not in fs or 'brand-canvas-art' not in vs:
    raise SystemExit('Brand Canvas files not found. No changes made.')
# Avoid both competing Tailwind utilities and brittle header color rules.
fs=fs.replace('homeTop && "bg-[#171717] text-white",','homeTop && "text-white",')
# Use a controlled, legible wordmark only on the dark homepage header;
# retain the existing logo asset on all other pages and scroll states.
old='<div className="site-logo-inverse"><Logo priority variant="logoLight" /></div>'
new='''<div className="site-logo-inverse">
          <Link href="/" aria-label="PayChex home" className="inline-flex items-baseline whitespace-nowrap text-[clamp(1.55rem,2.4vw,2.1rem)] font-bold tracking-[-0.055em] text-white">
            PayChex<span className="ml-1 text-[#f0ca38]">/</span>
          </Link>
        </div>'''
if old in hs: hs=hs.replace(old,new)
elif 'site-logo-inverse' not in hs: raise SystemExit('Header structure changed; no changes made.')
# Shrink and push decorative architecture further right, preserving text.
vs=vs.replace('right-0 w-[64%] opacity-90 max-lg:w-[75%]', 'right-[-7%] w-[59%] opacity-85 max-lg:right-[-10%] max-lg:w-[68%]')
# Keep mobile artwork deliberately lower and quieter.
vs=vs.replace('max-md:h-[45%] max-md:w-full max-md:opacity-45','max-md:h-[40%] max-md:w-full max-md:opacity-35')
marker='/* PayChex Brand Canvas refinement v2 */'
if marker not in cs:
    cs+='''\n\n/* PayChex Brand Canvas refinement v2 */
header[data-home-dark="true"] {
  background: #171717 !important;
  color: #ffffff;
  border-bottom-color: rgba(255,255,255,.08);
}
header[data-home-dark="true"] nav a { color: #eeeae4; }
header[data-home-dark="true"] nav a[aria-current="page"] { color: #fff; }
header[data-home-dark="true"] nav a::after { background-color: #f0ca38; }
header[data-home-dark="true"] .site-logo-inverse { display: block; }
header[data-home-dark="true"] .site-logo-normal { display: none; }
header:not([data-home-dark="true"]) .site-logo-inverse { display: none; }
header:not([data-home-dark="true"]) .site-logo-normal { display: block; }
header[data-home-dark="true"] a:focus-visible { outline-color: #f0ca38; }
'''
# Backups allow manual rollback without affecting Git.
for p,s in ((frame,fs),(header,hs),(hero,vs),(css,cs)):
    if p.read_text()!=s:
        p.write_text(s)
        print('Updated',p.relative_to(root))
print('Done. No commit, push or deployment.')
