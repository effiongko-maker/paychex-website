from pathlib import Path
import re,sys

root=Path.cwd()
changes={}
def edit(path, old, new):
    p=root/path
    s=changes.get(path,p.read_text())
    n=s.count(old)
    if n!=1:
        raise RuntimeError(f'{path}: expected one match, found {n}: {old[:85]!r}')
    changes[path]=s.replace(old,new,1)

edit('config/home.ts','''  supporting:
    "PayChex brings specialist capabilities together around complex programmes — engage one area, or several, under the same standard of ownership.",''','''  supporting:
    "Some projects need one specialist team. Others need several working together. We bring the right expertise to each, with clear responsibility from start to finish.",''')
edit('config/home.ts','''  supporting:
    "Specialist capability across technology, facilities, construction, professional services and institutional programmes — assembled to the work at hand.",''','''  supporting:
    "From technology and facilities to stakeholder engagement and institutional programmes, we bring the right expertise together for the work at hand.",
  featuredService: {
    label: "Stakeholder Engagement & Institutional Coordination",
    description:
      "We help organisations engage the people and institutions that matter, build productive relationships and keep complex programmes moving.",
    href: "/solutions/stakeholder-engagement",
  },''')
edit('config/home.ts','A curated look at the kinds of programmes we deliver—where execution, coordination and scale matter most.','A look at programmes where sound execution, coordination and scale make a difference.')
edit('components/sections/home/HomeCapabilities.tsx','''import { Reveal } from "@/components/motion/Reveal";''','''import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";''')
edit('components/sections/home/HomeCapabilities.tsx','''            <CapabilityCatalogue items={homeCapabilities.catalogue} />
          </Reveal>''','''            <CapabilityCatalogue items={homeCapabilities.catalogue} />
          </Reveal>

          <Reveal direction="up" distance={motionTokens.distance.sm} delay={0.1}>
            <div className="border-t border-border-subtle pt-8 md:pt-10">
              <p className="mb-3 text-sm font-medium tracking-wide text-foreground/60">
                Featured service
              </p>
              <Link
                href={homeCapabilities.featuredService.href}
                className="group inline-flex max-w-3xl flex-col gap-2 rounded-control focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
              >
                <span className="text-xl font-medium underline-offset-4 group-hover:underline md:text-2xl">
                  {homeCapabilities.featuredService.label}
                </span>
                <span className="max-w-2xl text-base leading-relaxed text-foreground/70">
                  {homeCapabilities.featuredService.description}
                </span>
              </Link>
            </div>
          </Reveal>''')
edit('config/site.ts','''    capabilities: [''','''    featuredService: {
      label: "Stakeholder Engagement & Institutional Coordination",
      href: "/solutions/stakeholder-engagement",
    },
    capabilities: [''')
edit('components/layout/Footer.tsx','''            </ul>
          </div>

          <div className="flex flex-col gap-4 lg:pt-1">''','''            </ul>
            <div className="mt-4 border-t border-border-inverse pt-5">
              <Text variant="caption" as="p" className="mb-3 tracking-[0.12em] text-inverse-foreground/40">
                Featured service
              </Text>
              <FooterLink href={footer.featuredService.href}>
                {footer.featuredService.label}
              </FooterLink>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:pt-1">''')
edit('config/about.ts','''    {
      title: "Capacity development",
      icon: "training" as const,''','''    {
      title: "Stakeholder engagement",
      icon: "government" as const,
      description:
        "Bringing public institutions, partners and communities into productive dialogue throughout a programme.",
    },
    {
      title: "Capacity development",
      icon: "training" as const,''')
# Replace remaining em dashes only in human-readable text for the four public content files.
# Existing punctuation in comments is left intact. Keep project titles and factual claims intact.
for path in ['config/home.ts','config/about.ts','config/capabilities.ts','config/work.ts']:
    s=changes.get(path,(root/path).read_text())
    lines=s.splitlines(keepends=True)
    result=[]
    for line in lines:
        stripped=line.lstrip()
        if '—' in line and not stripped.startswith(('*','//')):
            # Only modify strings; preserve source syntax and avoid punctuation in comments.
            line=line.replace(' — ', ', ').replace('—where', ', where').replace('—', ': ')
        result.append(line)
    changes[path]=''.join(result)

for path,s in changes.items():
    (root/path).write_text(s)
print(f'Updated {len(changes)} files:')
for p in changes: print(' -',p)
print('Next: git diff --check; npm run lint; npx tsc --noEmit; npm run build')
