# Reference Asset Export Notes

Original PDFs expected on this machine:

- `D:\Story Echo Kit\book ref\Jesus-Calms-the-Storm-Free-Kit app.pdf`
- `D:\Story Echo Kit\book ref\Mission Force 22 app.pdf`

Fallback project paths:

- `reference/Jesus-Calms-the-Storm-Free-Kit app.pdf`
- `reference/Mission Force 22 app.pdf`

Export selected pages as PNG source files into `public/images/reference/`, then run the optimization scripts from the project root. The app uses optimized WebP files at runtime.

- `mf22-book-cover.webp`
- `mf22-character-sheet.webp`
- `mf22-comic-page-1.webp`
- `mf22-launch-room.webp`
- `mf22-briefcase-explainer.webp`
- `mf22-mission-case.webp`
- `mf22-logo.webp`
- `jesus-calms-the-storm-cover.webp`
- `kit-stack.webp`
- `leader-guide-preview.webp`
- `story-cards-preview.webp`
- `parent-take-home-preview.webp`
- `activity-preview.webp`
- `peace-be-still-movement-game.webp`
- `boat-bowl-object-lesson.webp`
- `mini-storybook-preview.webp`
- `og-image.jpg`

If Poppler is installed, example commands:

```powershell
pdftoppm -png -r 140 -f 1 -l 3 "D:\Story Echo Kit\book ref\Mission Force 22 app.pdf" "public\images\reference\mission-force-22"
pdftoppm -png -r 140 -f 1 -l 5 "D:\Story Echo Kit\book ref\Jesus-Calms-the-Storm-Free-Kit app.pdf" "public\images\reference\storm-kit"
```

Then rename the exported source files as needed and run:

```powershell
python scripts\optimize-images.py
python scripts\trim-public-assets.py
```
