#!/usr/bin/env python3
"""Rebuild the supplied PayChex patch against exact local source lines.
Does not modify repository files. Fails closed on ambiguous or missing matches.
"""
from pathlib import Path
import argparse, difflib, re, sys

parser=argparse.ArgumentParser()
parser.add_argument('patch', nargs='?', default='paychex-integrated-positioning-editorial.patch')
parser.add_argument('--output', default='paychex-integrated-positioning-editorial-fixed.patch')
args=parser.parse_args()
raw=Path(args.patch).read_text(encoding='utf-8')
chunks=re.split(r'(?=^diff --git a/)',raw,flags=re.M)
chunks=[c for c in chunks if c.strip()]
outputs=[]; summaries=[]; errors=[]
for chunk in chunks:
    header=chunk.splitlines()[0]
    m=re.fullmatch(r'diff --git a/(.+) b/(.+)',header)
    if not m or m.group(1)!=m.group(2):
        errors.append(f'Unexpected file header: {header}'); continue
    name=m.group(1); path=Path(name)
    if not path.is_file():
        errors.append(f'Missing local file: {name}'); continue
    original=path.read_text(encoding='utf-8')
    revised=original
    hunks=re.split(r'(?=^@@ )',chunk,flags=re.M)[1:]
    for n,hunk in enumerate(hunks,1):
        lines=hunk.splitlines(keepends=True)[1:]
        before=''.join(line[1:] for line in lines if line.startswith((' ','-')))
        after=''.join(line[1:] for line in lines if line.startswith((' ','+')))
        if not before or before==after:
            errors.append(f'{name} hunk {n}: invalid or unchanged hunk'); continue
        occurrences=revised.count(before)
        if occurrences!=1:
            errors.append(f'{name} hunk {n}: expected one exact match, found {occurrences}'); continue
        revised=revised.replace(before,after,1)
    if revised!=original:
        diff=''.join(difflib.unified_diff(original.splitlines(keepends=True),revised.splitlines(keepends=True),fromfile='a/'+name,tofile='b/'+name,n=3))
        outputs.append('diff --git a/'+name+' b/'+name+'\n'+diff)
        summaries.append(name)
if errors:
    print('STOP: No patch written. These edits need manual review:',file=sys.stderr)
    for e in errors: print(' - '+e,file=sys.stderr)
    sys.exit(1)
Path(args.output).write_text(''.join(outputs),encoding='utf-8')
print(f'Created {args.output} for {len(summaries)} files:')
for name in summaries: print(' - '+name)
print('Next: git apply --check '+args.output)
