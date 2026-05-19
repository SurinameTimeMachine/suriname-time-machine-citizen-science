# STM Design Kit — Setup Checklist

Copy this folder into any new Next.js + Tailwind CSS v4 project to apply the
Suriname Time Machine design system in minutes.

See [`DESIGN.md`](../DESIGN.md) for the full design reference.

---

## Prerequisites

- Node.js 20+
- pnpm 10+
- A new Next.js 15/16 project (`pnpm create next-app@latest`)

---

## Steps

### 1 — Install dependencies

```bash
pnpm add next react react-dom
pnpm add -D tailwindcss @tailwindcss/postcss typescript @types/react @types/react-dom @types/node
```

The only runtime font dependency (Geist) is bundled with Next.js — no extra package needed.

### 2 — Configure PostCSS

```js
// postcss.config.mjs
export default { plugins: { '@tailwindcss/postcss': {} } };
```

### 3 — Copy CSS tokens

Replace (or merge into) your `app/globals.css`:

```bash
cp kit/globals.css app/globals.css
```

### 4 — Copy components

```bash
cp kit/components/types.ts          app/components/types.ts
cp kit/components/Navigation.tsx    app/components/Navigation.tsx
cp kit/components/SiteFooter.tsx    app/components/SiteFooter.tsx
cp kit/components/LanguageToggle.tsx app/components/LanguageToggle.tsx
```

### 5 — Set up root layout

```bash
cp kit/layout-template.tsx app/layout.tsx
```

Then update `metadata` in `layout.tsx` to match your project.

### 6 — Wire up a page

Minimal `app/page.tsx`:

```tsx
import { Navigation } from './components/Navigation';
import { SiteFooter } from './components/SiteFooter';

export default function Page() {
  const locale = 'nl'; // or 'en'

  return (
    <div className="min-h-screen bg-background text-ink">
      <Navigation
        navLinks={[
          {
            label: locale === 'en' ? 'Dashboard' : 'Dashboard',
            href: '/dashboard',
          },
          {
            label: locale === 'en' ? 'Projects' : 'Projecten',
            href: '/projects',
          },
          {
            label:
              locale === 'en'
                ? 'Participatory Science'
                : 'Participatieve Wetenschap',
            href: '/participatory-science',
          },
          {
            label: locale === 'en' ? 'Output' : 'Resultaten',
            href: '/output',
          },
        ]}
        locale={locale}
        languageToggleLabel={locale === 'en' ? 'NL' : 'EN'}
        domainLinks={[
          {
            label: 'About',
            href: locale === 'en' ? '/en' : '/',
            isCurrent: true,
          },
          { label: 'Images', href: 'https://images.surinametijdmachine.org' },
          { label: 'Data', href: 'https://data.surinametijdmachine.org' },
        ]}
      />

      <main>{/* your content */}</main>

      <SiteFooter
        organizationLabel="Suriname Time Machine"
        coordinatorLine="Huygens Institute for the History of the Netherlands"
      />
    </div>
  );
}
```

### 7 — Verify

```bash
pnpm dev
```

Open `http://localhost:3000`. You should see:

- **Sticky navbar** (~40px, single row):
  - **Left:** Domain tabs (About | Images | Data) with current domain **bold**
  - **Center:** Page nav links (Dashboard, Projects, Participatory Science, Output) centered and hidden on mobile
  - **Right:** Language toggle (NL or EN, 2 letters only)
- All links clickable and functional across all domains
- Page background `#f4f8f7`
- Geist Sans body font throughout
- Smooth transitions on hover
- Frosted glass effect on sticky header

---

## File Reference

| File                            | Purpose                                                                                |
| ------------------------------- | -------------------------------------------------------------------------------------- |
| `globals.css`                   | All CSS tokens + utility classes (`.hero-surface`, `.flag-label`, `.cut-corner`, etc.) |
| `components/types.ts`           | Shared TypeScript types (`NavLink`, `DomainLink`, `Stat`, `MediaAsset`)                |
| `components/Navigation.tsx`     | Compact sticky nav — copy and configure `domainLinks`                                  |
| `components/SiteFooter.tsx`     | Slim footer — update org name and coordinator line                                     |
| `components/LanguageToggle.tsx` | NL/EN pill switcher                                                                    |
| `layout-template.tsx`           | Root layout — rename to `app/layout.tsx`                                               |

---

## Domain Switcher Configuration

| Domain       | `isCurrent`                | `href`                                   |
| ------------ | -------------------------- | ---------------------------------------- |
| About (main) | `true` on main site        | `/` (or `/en` for English)               |
| Images       | `true` on images subdomain | `https://images.surinametijdmachine.org` |
| Data         | `true` on data subdomain   | `https://data.surinametijdmachine.org`   |

Set `isCurrent: true` only on the domain that matches the current project.

---

## Subdomain About Page Structure

Each subdomain should have an `/about` page following this structure:

1. **Hero** (`.hero-surface`) — project name + 2-line lead sentence
2. **What is this?** — 2–3 paragraphs explaining the subdomain's purpose
3. **STM Ecosystem** — links to all three domains with 1-line descriptions
4. **Partners** (`.cut-corner`) — institution logos/names grid
5. **Contact** — email + relevant external links

---

_Maintained by: Suriname Time Machine — Huygens Institute_
