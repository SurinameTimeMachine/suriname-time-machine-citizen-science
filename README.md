## Suriname Tijdmachine intro site

This repository hosts a single-page Next.js experience that introduces the [Suriname Time Machine](https://www.huygens.knaw.nl/en/projecten/suriname-time-machine/) initiative. The site is statically rendered, responsive, and styled with Tailwind CSS (v4) for easy deployment on any CDN or static host.

### Tech stack

- Next.js 16 (App Router, TypeScript)
- React 19
- Tailwind CSS 4 + PostCSS

### Prerequisites

- Node.js 20+
- pnpm 10+

### Local development

```bash
pnpm install
pnpm dev
```

Visit `http://localhost:3000` to preview changes. Edit `app/page.tsx` (content) or `app/globals.css` (theme) and the browser will live-reload.

### Quality checks

```bash
pnpm lint
```

ESLint follows the Next.js defaults plus TypeScript rules.

### Static export

```bash
pnpm export
```

The command runs `next build` and `next export`, producing an `out/` folder that can be uploaded to any static host (e.g., GitHub Pages, Azure Static Web Apps, Vercel static storage).

### Deployment tips

1. Run `pnpm export`.
2. Upload the `out/` directory to your hosting provider.
3. Configure the host to serve `index.html` for `/` and disable server-side features (the site is fully static).

### Project structure

```
app/
	layout.tsx     # global metadata + fonts
	page.tsx       # landing content
	globals.css    # Tailwind + custom tokens
public/          # static assets (favicons, textures)
```

Feel free to extend additional sections, add localized content, or integrate analytics as the outreach strategy evolves.
