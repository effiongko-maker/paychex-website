from pathlib import Path
import subprocess, shutil
root=Path.cwd()
assert (root/'config/assets.ts').exists() and (root/'config/home.ts').exists(), 'Run from paychex-website root'
subprocess.run(['git','switch','main'],check=True)
subprocess.run(['git','pull','--ff-only','origin','main'],check=True)
subprocess.run(['git','switch','-c','design/integrated-homepage-hero'],check=True)
asset=Path(__file__).resolve().parent/'paychex-integrated-hero.webp'
assert asset.exists(), 'Hero image missing from bundle'
target=root/'public/images/home/integrated-hero.webp'
target.parent.mkdir(parents=True,exist_ok=True)
shutil.copy2(asset,target)
p=root/'config/assets.ts'
s=p.read_text()
old='hero: "/images/home/hero.jpg",'
assert s.count(old)==1,'Expected homepage hero asset reference not found exactly once'
p.write_text(s.replace(old,'hero: "/images/home/integrated-hero.webp",'))
p=root/'config/home.ts'
s=p.read_text()
old='Telecom and ICT infrastructure delivery on a Nigerian project site'
assert s.count(old)==1,'Expected hero alt text not found exactly once'
p.write_text(s.replace(old,'Composite illustration of telecommunications, conferences, professional collaboration, construction and emergency operations'))
print('Updated image and homepage alt text on design/integrated-homepage-hero. No commit or push performed.')
