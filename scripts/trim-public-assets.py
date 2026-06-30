from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
REFERENCE = PUBLIC / "images" / "reference"

source = REFERENCE / "mf22-book-cover.webp"
output = PUBLIC / "og-image.jpg"

with Image.open(source) as image:
    image = image.convert("RGB")
    image = ImageOps.fit(
        image,
        (1200, 630),
        method=Image.Resampling.LANCZOS,
        centering=(0.5, 0.42),
    )
    image.save(output, "JPEG", quality=82, optimize=True)

old_og = PUBLIC / "og-image.png"
if old_og.exists():
    old_og.unlink()

for png in REFERENCE.glob("*.png"):
    png.unlink()
