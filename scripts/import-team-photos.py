"""
Copies student photos into src/assets/team/<slug>.<ext>.

1. In Google Drive, open the form's upload folder (e.g. "IEDC (File responses)") and
   download all photos into one local folder (right-click > Download).
2. Run:  python scripts/import-team-photos.py "C:/path/to/downloaded/folder"

Files are matched by the student's name inside the file name
(e.g. "AHAANA BHATTACHARYA PHOTOGRAPH - Ahaana Bhattacharya.jpg").
"""
import re, shutil, sys
from pathlib import Path

NAMES = {
    'ahaana-bhattacharya': 'Ahaana Bhattacharya', 'megha-mondal': 'Megha Mondal',
    'agnibh-ghosh': 'Agnibh Ghosh', 'pritam-paul': 'Pritam Paul',
    'piyasa-mandal': 'Piyasa Mandal', 'sk-saqibul-islam': 'Sk Saqibul Islam',
    'shreyasee-chatterjee': 'Shreyasee Chatterjee', 'soumik-bid': 'Soumik Bid',
    'koushik-sarkar': 'Koushik Sarkar',
}
norm = lambda s: re.sub(r'[^a-z]', '', s.lower())

src = Path(sys.argv[1])
dest = Path(__file__).resolve().parent.parent / 'src' / 'assets' / 'team'
dest.mkdir(parents=True, exist_ok=True)
found = set()
for f in src.iterdir():
    if f.suffix.lower() not in {'.jpg', '.jpeg', '.png', '.webp'}:
        continue
    for slug, name in NAMES.items():
        if slug not in found and norm(name) in norm(f.stem):
            shutil.copy(f, dest / f'{slug}{f.suffix.lower()}')
            found.add(slug)
            print('OK  ', slug, '<-', f.name)
for slug in NAMES.keys() - found:
    print('MISSING', slug)
