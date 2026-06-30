from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = ROOT / "public" / "images" / "reference"
MAX_EDGE = 1600
QUALITY = 78


def convert(path: Path) -> None:
    if path.suffix.lower() not in {".png", ".jpg", ".jpeg"}:
        return

    output = path.with_suffix(".webp")
    with Image.open(path) as image:
        image = ImageOps.exif_transpose(image)
        if max(image.size) > MAX_EDGE:
            image.thumbnail((MAX_EDGE, MAX_EDGE), Image.Resampling.LANCZOS)
        if image.mode not in {"RGB", "RGBA"}:
            image = image.convert("RGBA" if "A" in image.getbands() else "RGB")
        image.save(output, "WEBP", quality=QUALITY, method=6)


def main() -> None:
    for path in SOURCE_DIR.glob("*"):
        convert(path)


if __name__ == "__main__":
    main()
