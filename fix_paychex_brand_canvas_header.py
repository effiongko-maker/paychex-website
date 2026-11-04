from pathlib import Path

root = Path.cwd()
frame = root / 'components/layout/HeaderFrame.tsx'
css = root / 'app/globals.css'
assert frame.exists() and css.exists(), 'Run from the paychex-website repository root.'
s = frame.read_text()
assert 'data-home-dark' in s, 'Brand Canvas header changes not found; stop rather than guessing.'
# Remove competing background utility on the home-top state; CSS data selector enforces final chrome.
s = s.replace('homeTop && "bg-[#171717] text-white",', 'homeTop && "text-white",')
frame.write_text(s)
styles = css.read_text()
marker = '/* Brand Canvas header surface correction — homepage top only */'
if marker not in styles:
    styles += '''\n\n/* Brand Canvas header surface correction — homepage top only */
header[data-home-dark="true"] {
  background-color: #171717;
  color: #ffffff;
  border-bottom-color: rgba(255,255,255,.08);
}
header[data-home-dark="true"] nav a[aria-current="page"] {
  color: #ffffff;
}
header[data-home-dark="true"] nav a[aria-current="page"]::after {
  transform: scaleX(1);
}
header[data-home-dark="true"] nav a:focus-visible,
header[data-home-dark="true"] a:focus-visible {
  outline-color: #f0ca38;
}
'''
    css.write_text(styles)
print('Header surface corrected. No other sections, commits, or deployments changed.')
