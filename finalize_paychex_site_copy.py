from pathlib import Path

path = Path('config/site.ts')
if not path.is_file():
    raise SystemExit('STOP: Run this from the PayChex repository root. config/site.ts not found.')
original = path.read_text(encoding='utf-8')
replacements = [
('PayChex International Marketing Limited is a Nigerian engineering, construction and technology services company. Since 2008 we have delivered complex projects for government institutions, development partners and enterprise clients.',
 'PayChex International Marketing Limited is a Nigerian integrated solutions partner. We bring together expertise in technology, facilities, construction, professional services and institutional programmes to help organisations deliver important work.'),
('PayChex International Marketing Limited is a Nigerian engineering, construction and technology services company. Since 2008 we have delivered complex projects for government institutions, development partners and private-sector clients — with disciplined execution and clear accountability.',
 'PayChex International Marketing Limited brings together technology, facilities, construction, professional services and institutional programme delivery. Since 2008, we have worked with public and private organisations to turn complex requirements into practical results.'),
('tagline: "Disciplined execution."', 'tagline: "Designed for Impact. Delivered with Purpose."'),
]
for old, new in replacements:
    count = original.count(old)
    if count != 1:
        raise SystemExit(f'STOP: Expected exactly one occurrence, found {count}: {old[:90]}')
updated = original
for old, new in replacements:
    updated = updated.replace(old, new, 1)
path.write_text(updated, encoding='utf-8')
print('Updated config/site.ts: site description, footer positioning, and tagline.')
print('Next: git diff --check && git diff -- config/site.ts')
