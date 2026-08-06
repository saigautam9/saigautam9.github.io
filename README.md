# Portfolio — V Nagasai Gautam K

Single-page portfolio positioning one profile across three role targets — Data Analyst,
Data Engineer, and AI/ML Engineer — as one full-lifecycle story rather than three résumés.

React 18 + Tailwind 3, built with Vite. No runtime dependencies beyond React; the whole
site ships as one CSS file and one JS bundle (~53 kB gzipped).

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview  # serve the production build locally
```

## Editing content

All copy lives in [`src/data.js`](src/data.js) — the components never hardcode content.

**Add a project:** copy any object in the `projects` array and change the fields.

```js
{
  title: "Project name",
  tracks: ["DE", "DA", "AI"],   // any subset — these render as the discipline badges
  featured: false,               // true pulls it to the top as a full-width card
  summary: "Two or three honest sentences.",
  techniques: "Optional line for methods used.",
  stats: ["Optional", "Metric strings"],
  tags: ["Tech", "Stack", "Tags"],
  repo: "https://github.com/...",  // omit or null → no GitHub link renders
  live: "https://...",             // optional
  image: "screenshot.png",         // optional, file goes in public/
  imageCaption: "Optional caption.",
}
```

Same pattern for `experience`, `skills`, and `whatIDo`.

## Assets in `public/`

| File | Used by |
|---|---|
| `resume.pdf` | the Resume button in the hero |
| `dashboard.jpeg` | the Manufacturing Lakehouse card |

`public/resume.pdf` is currently a copy of `Gautam_Master_Resume_AllProjects.pdf` —
replace it with the final version and rebuild.

## Deploy

**Vercel** — import the repo; it detects Vite. Build `npm run build`, output `dist`.

**GitHub Pages** — `vite.config.js` sets `base: "./"`, so relative asset paths work from
any subpath:

```bash
npm run build
npx gh-pages -d dist        # publishes dist/ to the gh-pages branch
```

Then enable Pages on the `gh-pages` branch in repo settings. For a user site
(`saigautam9.github.io`), push `dist/` to the root of that repo instead.

## Palette

Defined once in [`tailwind.config.js`](tailwind.config.js): teal accent `#0E7C86` on white
and `#F7F9FA`, with text in a soft slate range (`#27333D` headings, `#5C6B79` body) rather
than near-black. Change the accent there and it propagates everywhere.
