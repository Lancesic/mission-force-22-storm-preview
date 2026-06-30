# Mission Force 22 - Jesus Calms the Storm Preview

A mobile-first React/Vite walkthrough created as a ministry resource preview for Walker Day. It explains Mission Force 22, introduces the Jesus Calms the Storm ministry kit, includes a tap-through flow, and has a small Storm to Still demo.

## Run Locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal.

## Contact Links

Contact and resource links live in `src/data/presentation.ts`:

- Zoom: `contactLinks.schedule`
- Phone/text: `contactLinks.phone`
- Email: `contactLinks.email`
- Slideshow, book sample, and ministry kit PDF: `resourceLinks`

## Reference PDFs

The original reference PDFs are expected here:

- `D:\Story Echo Kit\book ref\Jesus-Calms-the-Storm-Free-Kit app.pdf`
- `D:\Story Echo Kit\book ref\Mission Force 22 app.pdf`

If those paths are not available, copy the PDFs into:

- `reference/Jesus-Calms-the-Storm-Free-Kit app.pdf`
- `reference/Mission Force 22 app.pdf`

The app does not require the PDFs at runtime. It uses optimized WebP previews in `public/images/reference/`.

## Preview Images

Place exported or replacement source images in `public/images/reference/`, then run:

```bash
python scripts/optimize-images.py
python scripts/trim-public-assets.py
```

The app expects these optimized filenames:

- `mf22-book-cover.webp`
- `mf22-character-sheet.webp`
- `mf22-comic-page-1.webp`
- `mf22-launch-room.webp`
- `mf22-briefcase-explainer.webp`
- `mf22-mission-case.webp`
- `mf22-logo.webp`
- `jesus-calms-the-storm-cover.webp`
- `leader-guide-preview.webp`
- `story-cards-preview.webp`
- `activity-preview.webp`
- `peace-be-still-movement-game.webp`
- `boat-bowl-object-lesson.webp`
- `storm-meter-graphic.webp`
- `today-we-learned.webp`
- `volunteer-quick-guide.webp`
- `slide-deck-outline.webp`
- `activity-page-preview.webp`
- `jesus-coloring-page.webp`
- `mini-storybook-preview.webp`
- `interactive-sound-story-1.webp` through `interactive-sound-story-7.webp`
- `og-image.jpg` in `public/`

Additional export notes live in `scripts/README-reference-assets.md`.

## Video

The embedded video player uses:

- `public/videos/jesus-calms-the-storm-preview.mp4`

The local video uses `preload="none"` so phones do not download it until the visitor chooses to play it. YouTube Shorts are embedded lazily in the same section.

## PDF

The bottom resource section links to:

- `public/resources/jesus-calms-the-storm-ministry-kit.pdf`

## GitHub Pages Deployment

This project includes `.github/workflows/deploy.yml`.

1. Create a GitHub repository.
2. Push this project to the `main` branch.
3. In the repository settings, enable GitHub Pages with GitHub Actions as the source.
4. The workflow will build the Vite app and publish the `dist` folder.

After the GitHub Pages URL is live, create a Bitly short link. Suggested ideas:

- `bit.ly/missionforce22`
- `bit.ly/storm-kit`
- `bit.ly/mf22-storm`
- `bit.ly/jesus-calms-kit`
