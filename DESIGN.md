# Suriname Time Machine — Complete Design System

**One unified visual language for all STM web properties.**

A comprehensive design guide covering every component, pattern, and interaction. Copy the `kit/` folder into any new Next.js + Tailwind CSS v4 project to implement this system instantly.

---

## Table of Contents

1. [Brand Identity](#1-brand-identity)
2. [Colour Palette](#2-colour-palette)
3. [Typography System](#3-typography-system)
4. [Spacing & Layout](#4-spacing--layout)
5. [Buttons & Interactive Elements](#5-buttons--interactive-elements)
6. [Cards & Containers](#6-cards--containers)
7. [Tables & Data Displays](#7-tables--data-displays)
8. [Navigation](#8-navigation)
9. [Forms & Input Elements](#9-forms--input-elements)
10. [Utility CSS Classes](#10-utility-css-classes)
11. [Hero & Page Sections](#11-hero--page-sections)
12. [Patterns & Layouts](#12-patterns--layouts)
13. [Interactions & Animations](#13-interactions--animations)
14. [Accessibility](#14-accessibility)
15. [Cross-Domain Kit Setup](#15-cross-domain-kit-setup)

---

## 1. Brand Identity

| Property         | Value                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------- |
| Project family   | Suriname Time Machine (STM)                                                                   |
| Location         | Paramaribo • Suriname                                                                         |
| Tone             | Academic but accessible; archival precision with warmth                                       |
| Visual character | Teal-dominant, geometric diagonals, controlled whitespace, translucent layering               |
| Domains          | `surinametijdmachine.org` · `images.surinametijdmachine.org` · `data.surinametijdmachine.org` |

The visual language draws on cartographic and archival aesthetics: subtle diagonal cuts, translucent layering, and a typography system built on spaced uppercase labels (referencing catalogue and register headings). Clean, intentional, never cluttered.

---

## 2. Colour Palette

All tokens are CSS custom properties re-exposed to Tailwind v4.

### CSS Custom Properties

```css
:root {
  --background: #f4f8f7; /* Light muted teal-grey page background */
  --foreground: #0e231f; /* Body text colour */
  --ink: #0b3c34; /* Headings, icons, dark UI text */
  --teal-strong: #006d5b; /* Primary brand — links, active states, emphasis */
  --teal-bright: #34d1b3; /* Accent — bullets, selections, highlights */
  --teal-soft: #b9f4e6; /* Subtle tint — hover states, borders */
  --sand: #fff7e6; /* Warm neutral — panels, callouts */
  --deep-teal: #003c34; /* Dark teal — hero backgrounds, depth */
  --cream: #fdf8f2; /* Off-white — card surfaces, slight warmth */
}
```

### Usage Matrix

| Context                 | Colour                             | Example                                  |
| ----------------------- | ---------------------------------- | ---------------------------------------- |
| **Body text**           | `--ink`                            | `<p class="text-ink">`                   |
| **Headings**            | `--ink`                            | `<h2 class="text-ink">`                  |
| **Links (normal)**      | `--teal-strong`                    | `<a class="text-teal-strong">`           |
| **Links (hover)**       | `--teal-strong/80`                 | `hover:text-teal-strong/80`              |
| **Primary CTA buttons** | white on `--deep-teal`             | Hero section "Read more" buttons         |
| **Ghost buttons**       | border `--ink/20`, text `--ink/70` | Secondary actions                        |
| **Active tabs/nav**     | bold + `--ink`                     | Current page highlighted                 |
| **Inactive tabs/nav**   | `--ink/60`                         | Link to other pages                      |
| **Page background**     | `--background`                     | Default body background                  |
| **Card background**     | white or `--cream`                 | Section cards, panels                    |
| **Stat cards (accent)** | white on `--deep-teal`             | Key metrics highlight                    |
| **Warm callouts**       | `--sand`                           | Contact info, call-to-action panels      |
| **Decorative accents**  | `--teal-bright`                    | Flag labels, corner accents, chart fills |
| **Subtle dividers**     | `--slate-200`                      | Borders, separators                      |

### Opacity Modifiers

All colours support opacity: `text-ink/70`, `bg-teal-bright/20`, `border-slate-200/50`, etc.

---

## 3. Typography System

### Fonts

- **Body/UI:** Geist Sans (variable: `--font-geist-sans`, from `next/font/google`)
- **Code/Mono:** Geist Mono (variable: `--font-geist-mono`, from `next/font/google`)

No extra packages needed — Geist is bundled with Next.js.

### Type Hierarchy

| Level     | Element            | Classes                              | Usage                                |
| --------- | ------------------ | ------------------------------------ | ------------------------------------ |
| **H1**    | Page hero title    | `text-4xl sm:text-5xl font-semibold` | Hero sections, main page title       |
| **H2**    | Section heading    | `text-3xl font-semibold`             | Section titles, main content flow    |
| **H3**    | Subsection heading | `text-xl font-semibold`              | Card titles, sub-sections            |
| **H4**    | Card/block title   | `text-lg font-semibold`              | Smaller card headlines               |
| **Body**  | Paragraph text     | `text-base leading-relaxed`          | Body copy (default: line-height 1.6) |
| **Intro** | Lead paragraph     | `text-lg text-ink/80`                | Introductory paragraphs              |
| **Small** | Meta/captions      | `text-sm text-ink/70`                | Bylines, figure captions             |
| **Tiny**  | Labels/badges      | `text-xs uppercase tracking-[0.3em]` | Form labels, stat labels             |

### Letter-spacing Scale

```css
tracking-[0.35em]   /* Eyebrows, location tags, "Paramaribo • Suriname" style */
tracking-[0.3em]    /* Stat card labels, figure captions */
tracking-[0.25em]   /* CTA buttons, domain tabs, language toggle */
tracking-[0.2em]    /* Nav links, table headers */
tracking-wide       /* Large headings, project codes */
```

---

## 4. Spacing & Layout

### Container

All major sections use the same container:

```tsx
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
```

- **Max width:** `max-w-6xl` (1152px)
- **Padding:** responsive `4 → 6 → 10` (16px → 24px → 40px)
- **Applies to:** header, sections, footer, all full-width blocks

### Spacing Scale

| Utility | Pixels | Usage                                   |
| ------- | ------ | --------------------------------------- |
| `gap-2` | 8px    | Tight spacing in compact areas          |
| `gap-3` | 12px   | Labels + content in rows                |
| `gap-4` | 16px   | Standard spacing between block elements |
| `gap-5` | 20px   | Nav links, list items                   |
| `gap-6` | 24px   | Section internal spacing                |
| `gap-8` | 32px   | Between major sections                  |

### Grid Patterns

| Pattern       | Classes                                    | Usage                         |
| ------------- | ------------------------------------------ | ----------------------------- |
| 2-col (55/45) | `grid lg:grid-cols-[1.1fr,0.9fr]`          | Hero left/right, text + image |
| 2-col (equal) | `grid sm:grid-cols-2`                      | Two-column layouts            |
| 3-col         | `grid lg:grid-cols-3`                      | Card grids, workshops         |
| 4-col         | `grid gap-3 sm:grid-cols-2 lg:grid-cols-4` | Partner logos, icons          |

### Vertical Spacing

```tsx
/* Sections on page */
<main className="flex flex-col gap-0">
  <section>...</section>
  {/* Sections are -mt-12 to overlap slightly, creating visual cohesion */}
</main>

/* Internal section spacing */
<div className="space-y-6">
  <h2>Title</h2>
  <p>Content</p>
  <p>More content</p>
</div>
```

---

## 5. Buttons & Interactive Elements

### Button Hierarchy

#### Primary CTA (Hero/High-Emphasis)

```tsx
<a
  href="#section"
  className="inline-flex items-center gap-2 border border-white/40 px-5 py-2 uppercase tracking-[0.25em] text-white transition hover:border-white"
>
  Read more <span aria-hidden>↘</span>
</a>
```

**When:** Hero sections, main calls to action, high-visibility actions  
**Style:** Ghost border, white text on dark backgrounds  
**Hover:** Border brightens to `border-white`

#### Secondary CTA (Ghost Button)

```tsx
<button className="border border-ink/20 px-4 py-2 text-xs uppercase tracking-[0.25em] text-ink/70 transition hover:border-teal-strong hover:text-teal-strong">
  Action label
</button>
```

**When:** Secondary actions, less prominent choices  
**Style:** Light border, ink text on light backgrounds  
**Hover:** Border + text change to `teal-strong`

#### Compact Action (Inline/Small)

```tsx
<button className="border border-slate-200 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-ink/70 transition-colors hover:border-teal-strong/40 hover:text-teal-strong">
  Sort / Filter
</button>
```

**When:** Data table controls, sort toggles, filter buttons  
**Style:** Minimal border, compact padding  
**Hover:** Subtle colour shift

#### Accent Button (Danger/Important)

```tsx
<button
  className={`border px-3 py-1.5 text-xs font-medium uppercase tracking-[0.25em] transition-colors ${
    isActive
      ? 'border-teal-strong bg-teal-strong text-white'
      : 'border-slate-200 text-ink/70 hover:border-teal-strong/40 hover:text-teal-strong'
  }`}
>
  Active State
</button>
```

**When:** Active toggle states, critical actions  
**Style:** Fills with `teal-strong` when active  
**Hover:** Border highlights

#### Icon Button (Utility)

```tsx
<button
  className="rounded-sm p-1 text-ink/30 transition-colors hover:bg-teal-strong/10 hover:text-teal-strong"
  title="Copy to clipboard"
>
  <CopyIcon className="h-4 w-4" />
</button>
```

**When:** Copy buttons, expand/collapse, small utility actions  
**Style:** Icon-only, minimal background  
**Hover:** Subtle background + text colour change

#### Back-to-Top Button

```tsx
<button className="cut-corner inline-flex h-12 w-12 items-center justify-center border border-slate-200 bg-white text-teal-strong shadow-[0_15px_35px_rgba(0,30,24,0.08)] transition hover:bg-sand">
  <span aria-hidden>↑</span>
</button>
```

**When:** Fixed bottom-right, visible after scroll  
**Style:** Geometric corner cut, shadow, small icon  
**Position:** Moves up when footer enters viewport

### Button States

| State        | Classes                                                      |
| ------------ | ------------------------------------------------------------ |
| **Normal**   | `border border-ink/20 text-ink/70 transition`                |
| **Hover**    | `hover:border-teal-strong hover:text-teal-strong`            |
| **Active**   | `border-teal-strong bg-teal-strong text-white`               |
| **Focus**    | Default browser outline (can be styled with `focus-visible`) |
| **Disabled** | `disabled:opacity-30 disabled:cursor-not-allowed`            |

---

## 6. Cards & Containers

### Card Types

#### White Card (Standard)

```tsx
<div className="bg-white border border-slate-200 shadow-[0_15px_35px_rgba(0,30,24,0.08)]">
  {/* content */}
</div>
```

**Usage:** Content cards, data panels, information blocks  
**Shadow:** Medium depth `shadow-[0_15px_35px_rgba(0,30,24,0.08)]`

#### Angled Card (Feature Card)

```tsx
<div className="angled-card px-8 py-10">{/* content */}</div>
```

**Usage:** Featured content, story cards, main sections  
**Style:** Diagonal corner cut (bottom-right 30px), shadow `0 30px 60px`, cream-coloured corner accent  
**CSS class:** `.angled-card` (defined in globals.css)

#### Cut-Corner Section (Partners, Contact)

```tsx
<section className="cut-corner space-y-6 border border-slate-200 bg-white px-8 py-10">
  {/* content */}
</section>
```

**Usage:** Partners grid, contact info, acknowledgements  
**Style:** Top-left corner cut (36px), teal-soft gradient accent, shadow  
**CSS class:** `.cut-corner`

#### Stat Card (Metrics)

```tsx
<div className="px-6 py-5 bg-white ring-1 ring-ink/10 shadow-[0_15px_35px_rgba(0,30,24,0.08)]">
  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/70">
    Label
  </p>
  <p className="mt-1 text-3xl font-bold tabular-nums">Value</p>
</div>;

{
  /* Accent stat card (highlight) */
}
<div className="px-6 py-5 bg-deep-teal text-white ring-1 ring-white/10">
  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
    Label
  </p>
  <p className="mt-1 text-3xl font-bold tabular-nums">Value</p>
</div>;
```

**Usage:** Dashboard stats, key metrics  
**Variants:** Standard (white bg) or accent (deep-teal bg for highlight)

#### Warm Callout (Sand Panel)

```tsx
<div className="bg-sand px-6 py-4 text-sm shadow-[0_15px_35px_rgba(0,30,24,0.08)] ring-1 ring-white/40">
  <p className="font-semibold text-ink">{title}</p>
  <p className="mt-1 text-ink/80">{body}</p>
</div>
```

**Usage:** Contact info, important notes, call-outs  
**Style:** Warm sand background, slight shadow, subtle ring

#### Source/Reference Panel

```tsx
<aside className="border border-white/25 bg-white/5 p-6 text-sm text-white/85">
  <p className="text-xs uppercase tracking-[0.35em]">Sources</p>
  <dl className="grid gap-4">
    <div className="border-b border-white/15 pb-3 last:border-0">
      <dt className="text-xs uppercase tracking-[0.3em] text-white/70">
        Source name
      </dt>
      <dd className="text-sm font-semibold text-white">Value</dd>
    </div>
  </dl>
</aside>
```

**Usage:** Hero sections, source attribution  
**Style:** Semi-transparent on dark bg, subtle borders

---

## 7. Tables & Data Displays

### Table Structure

```tsx
<div className="overflow-hidden bg-white p-6 ring-1 ring-ink/10 shadow-[0_15px_35px_rgba(0,30,24,0.08)]">
  <table className="w-full text-sm">
    <thead>
      <tr className="border-b border-slate-200 bg-white">
        <th className="text-left font-semibold text-ink px-4 py-3">Column 1</th>
        <th className="text-left font-semibold text-ink px-4 py-3">Column 2</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-slate-200/50 hover:bg-background">
        <td className="px-4 py-3 text-ink">Data</td>
        <td className="px-4 py-3 text-ink/70">Meta</td>
      </tr>
    </tbody>
  </table>
</div>
```

**Style:** White container, subtle ring, shadow  
**Headers:** Bold, ink colour, slight background if needed  
**Rows:** Padding `py-3 px-4`, hover reveals `bg-background`  
**Borders:** `border-slate-200`, light and minimal

### Data Visualizations (Charts)

Charts use Recharts library with colour tokens:

```tsx
<Bar dataKey="citizen" name="Citizen Annotations" fill="var(--teal-bright)" />
<Bar dataKey="ai" name="AI Annotations" fill="var(--teal-strong)" />
```

**Colours:** `teal-strong` for primary, `teal-bright` for secondary/stacked  
**Container:** White bg, ring-1, shadow (same as tables)  
**Labels:** Axes labels in `text-ink/70`, legend in `text-ink`

### Heatmaps & Activity Grids

```tsx
<div className="grid gap-1">
  {days.map((day) => (
    <div
      key={day}
      className="h-3 w-3 rounded-sm"
      style={{
        backgroundColor: `rgba(0, 109, 91, ${intensity})` /* teal-strong */,
      }}
      title={`${activity} contributions`}
    />
  ))}
</div>
```

**Base colour:** `teal-strong` at varying opacities  
**Layout:** Grid of small squares, 1px gap

---

## 8. Navigation

### Single-Row Navbar with Brand Mark, Dot-Separated Domains & Tracked Typography

```tsx
<header
  id="site-header"
  className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm font-sans"
>
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
    {/* Single row: Brand + Domain tabs | Page nav | Language toggle */}
    <div className="flex items-center justify-between gap-3 py-3">
      {/* Left: Brand mark + Domain tabs */}
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
        {/* Skewed bullet brand mark */}
        <div className="flex shrink-0 items-center gap-2">
          <div className="h-3 w-3 -skew-x-12 bg-teal-strong" aria-hidden />
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-ink">
            STM
          </span>
        </div>

        {/* Domain tabs */}
        <nav className="flex min-w-0 items-center gap-2 text-sm whitespace-nowrap">
          <a href="/" className="font-semibold text-ink">
            About
          </a>
          <span className="text-ink/20">•</span>
          <a
            href="https://images.surinametijdmachine.org"
            className="text-ink/60 hover:text-ink"
          >
            Images
          </a>
          <span className="text-ink/20">•</span>
          <a
            href="https://data.surinametijdmachine.org"
            className="text-ink/60 hover:text-ink"
          >
            Data
          </a>
        </nav>
      </div>

      {/* Center: Page navigation (hidden on mobile) */}
      <nav className="hidden md:flex min-w-0 items-center gap-4 lg:gap-6 text-xs uppercase tracking-[0.2em] flex-1 justify-center">
        <a href="/dashboard" className="text-ink/60 hover:text-ink font-medium">
          Dashboard
        </a>
        <a href="/projects" className="text-ink/60 hover:text-ink font-medium">
          Projects
        </a>
        <a
          href="/participatory-science"
          className="text-ink/60 hover:text-ink font-medium"
        >
          Participatory Science
        </a>
        <a href="/output" className="text-ink/60 hover:text-ink font-medium">
          Output
        </a>
      </nav>

      {/* Right: Language toggle */}
      <div className="shrink-0">
        <a
          href="/en"
          className="text-xs text-ink/40 hover:text-ink font-medium uppercase tracking-[0.25em]"
        >
          NL
        </a>
      </div>
    </div>
  </div>
</header>
```

**Features:**

- Single-row sticky header (~40px) with polished archival aesthetic
- **Left:** Skewed teal brand mark + "STM" label (wide tracked text, `tracking-[0.35em]`) | Domain tabs (About • Images • Data) with dot separators
- **Center:** Page nav (Dashboard, Projects, Participatory Science, Output) with generous letter-spacing `tracking-[0.2em]` — hidden on smaller widths to prevent crowding
- **Right:** Language toggle (NL/EN, 2 letters)
- **Typography:** All text uses uppercase with tracked letter-spacing (0.2em–0.35em) for the polished, archival design feel
- **Branding:** Geometric skewed mark (`-skew-x-12`) in teal-strong + STM creates distinctive visual anchor
- **Overflow safety:** `min-w-0`, tighter gaps, and delayed center-nav breakpoint (`md`) avoid horizontal overflow
- Frosted glass effect (`bg-white/95 backdrop-blur-sm`), consistent Geist Sans throughout

### Shared Compact Footer (Project-Wide)

```tsx
<footer id="site-footer" className="border-t border-slate-200 bg-white">
  <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-10">
    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] text-ink/65">
      <span className="font-medium text-ink/85">Suriname Time Machine</span>
      <span className="text-ink/25">•</span>
      <span>2026</span>
      <span className="text-ink/25">•</span>
      <span>Project lead: Thunnis</span>
      <span className="text-ink/25">•</span>
      <span>Funder: Stichting Pica</span>
    </div>

    <div className="mt-1.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] text-ink/55">
      <a href="/#partners" className="transition hover:text-teal-strong">
        Partners
      </a>
      <span className="text-ink/25">•</span>
      <span>Data sources (coming soon)</span>
    </div>
  </div>
</footer>
```

**Features:**

- Compact visual footprint (`py-3`, `text-[11px]`) so footer stays subtle
- Contains only project essentials: project name, year, project lead, and funder
- Includes a direct link to the Partners section (`/#partners` or `/en#partners`)
- Includes a placeholder for future data source links (`Data sources (coming soon)`)
- Reusable as one shared component (`SiteFooter.tsx`) across all STM pages/projects

---

## 9. Forms & Input Elements

### Input Field

```tsx
<input
  type="email"
  placeholder="your@email.com"
  className="border border-slate-200 rounded-sm px-3 py-2 text-sm transition focus:border-teal-strong focus:outline-none focus:ring-1 focus:ring-teal-bright/20"
/>
```

**Style:** Light border, rounded corners, focus ring in teal  
**Placeholder:** Subtle, grey

### Text Area

```tsx
<textarea
  className="border border-slate-200 rounded-sm px-3 py-2 text-sm transition focus:border-teal-strong focus:outline-none focus:ring-1 focus:ring-teal-bright/20 resize-vertical"
  placeholder="Message..."
  rows={4}
/>
```

### Checkbox

```tsx
<label className="flex items-center gap-2 cursor-pointer">
  <input type="checkbox" className="accent-teal-strong" />
  <span className="text-sm">I agree to terms</span>
</label>
```

**Style:** Tailwind's `accent-*` utility for the check colour

### Radio Button

```tsx
<label className="flex items-center gap-2 cursor-pointer">
  <input type="radio" name="option" className="accent-teal-strong" />
  <span className="text-sm">Option A</span>
</label>
```

### Form Errors

```tsx
{
  error && <p className="text-sm text-red-600 mt-1">{error}</p>;
}
```

**Colour:** Use semantic red (can be defined in design tokens)  
**Position:** Below the field, small text

---

## 10. Utility CSS Classes

Defined in `globals.css`, all composable with Tailwind.

### `.flag-label`

Teal-bright skewed rectangle prefix + uppercase spaced text. Brand marker.

```css
.flag-label {
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.75rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
}
.flag-label::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 0.75rem;
  height: 0.75rem;
  background: var(--teal-bright);
  transform: translateY(-50%) skewX(-20deg);
}
```

**Used in:** Section eyebrows, taglines, location labels, hero taglines

### `.hero-surface`

Deep-teal gradient hero background with layered overlays and accent colours.

```css
.hero-surface {
  background: linear-gradient(
    135deg,
    var(--deep-teal),
    #004f43 55%,
    var(--teal-strong)
  );
  color: white;
  overflow: hidden;
  position: relative;
}
.hero-surface::before {
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.12),
    transparent 60%
  );
}
.hero-surface::after {
  background: linear-gradient(
    135deg,
    transparent,
    rgba(52, 209, 179, 0.2) 45%,
    rgba(255, 247, 230, 0.18) 70%
  );
  clip-path: polygon(55% 0, 100% 0, 100% 55%, 35% 100%, 0 100%, 0 35%);
}
```

**Used in:** Full-bleed hero sections, story beginnings

### `.angled-card`

White card with diagonal bottom-right corner cut and cream accent triangle.

```css
.angled-card {
  background: white;
  box-shadow: 0 30px 60px rgba(0, 30, 24, 0.08);
  position: relative;
}
.angled-card::before {
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100%-30px),
    calc(100%-30px) 100%,
    0 100%
  );
  border: 1px solid rgba(11, 60, 52, 0.12);
}
.angled-card::after {
  background: var(--cream);
  clip-path: polygon(0 0, 100% 0, 100% 100%);
  width: 60px;
  height: 30px;
  bottom: 0;
  right: 30px;
}
```

**Used in:** Featured content cards, story sections, main content areas

### `.cut-corner`

Section with top-left corner cut and teal-soft accent gradient.

```css
.cut-corner {
  clip-path: polygon(2.25rem 0, 100% 0, 100% 100%, 0 100%, 0 2.25rem);
  box-shadow: 0 28px 60px rgba(0, 30, 24, 0.09);
  position: relative;
  overflow: hidden;
}
.cut-corner::before {
  width: 3.25rem;
  height: 3.25rem;
  background: linear-gradient(135deg, var(--teal-soft), rgba(255, 255, 255, 0));
  top: 0;
  left: 0;
  opacity: 0.85;
}
```

**Used in:** Partners section, Contact section, acknowledgements

### `.expand-icon`

CSS-only +/− toggle icon (cross shape), animates on hover.

```css
.expand-icon {
  position: relative;
  width: 1rem;
  height: 1rem;
}
.expand-icon::before {
  width: 0.5rem;
  height: 1px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.expand-icon::after {
  width: 1px;
  height: 0.5rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
button:hover .expand-icon::before,
button:hover .expand-icon::after {
  background: var(--teal-strong);
}
```

**Used in:** Collapsible sections, event blocks, accordion headers

---

## 11. Hero & Page Sections

### Hero Section (Full-Bleed)

```tsx
<section className="hero-surface px-0 py-0">
  <div className="relative overflow-hidden px-6 py-16 lg:px-20">
    {/* Optional background image */}
    {backgroundAsset && (
      <Image
        src={backgroundAsset.src}
        alt={backgroundAsset.alt}
        fill
        className="absolute inset-0 object-cover opacity-35 mix-blend-luminosity"
      />
    )}

    {/* Dark overlay gradient */}
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(0,60,52,0.95),rgba(0,60,52,0.4),rgba(0,60,52,0.9))]" />

    {/* Decorative geometric elements */}
    <div className="pointer-events-none absolute -right-16 top-0 h-80 w-80 rotate-12 border border-white/20" />
    <div className="pointer-events-none absolute -right-4 bottom-8 h-48 w-64 bg-teal-bright/50" />

    {/* Content (z-10 above overlays) */}
    <div className="relative z-10 mx-auto max-w-6xl">
      <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="flag-label text-white/80">Tagline</p>
          <h1 className="text-4xl sm:text-5xl leading-tight font-semibold">
            Title
          </h1>
          <p className="text-lg text-white/80">Lead text</p>
          <a
            href="#section"
            className="inline-flex items-center gap-2 border border-white/40 px-5 py-2 uppercase tracking-[0.25em] text-white transition hover:border-white"
          >
            CTA <span aria-hidden>↘</span>
          </a>
        </div>
        {/* Right column: stats or visual */}
        <aside className="grid gap-4 border border-white/25 bg-white/5 p-6 text-sm text-white/85">
          {/* stats */}
        </aside>
      </div>
    </div>
  </div>
</section>
```

**Layout:** 2-col grid (55/45), text left, visual right  
**Decorative elements:** Rotated border boxes, solid colour overlays  
**Typography:** White text, spaced labels, large heading  
**CTA:** Ghost button with arrow

### Section with Eyebrow

```tsx
<div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-ink/70 mb-4">
  <span className="inline-flex h-3 w-3 -skew-x-12 bg-teal-strong" aria-hidden />
  Section Title
</div>
```

**Marker:** Small skewed teal-strong square  
**Text:** All caps, tracked, 70% opacity

---

## 12. Patterns & Layouts

### Two-Column (Text + Image)

```tsx
<div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
  <div className="space-y-4">
    {/* Text content */}
  </div>
  <figure className="space-y-2">
    <Image src={...} alt={...} className="w-full" />
    <figcaption className="text-xs uppercase tracking-[0.3em] text-ink/70">Caption</figcaption>
  </figure>
</div>
```

**Ratio:** 55% text, 45% image  
**Spacing:** 40px gap (lg:gap-10)

### Partner Grid

```tsx
<ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
  {partners.map((partner) => (
    <li
      key={partner.id}
      className="px-4 py-3 text-ink shadow-[0_10px_25px_rgba(0,30,24,0.05)] ring-1 ring-white/50"
    >
      {partner.name}
    </li>
  ))}
</ul>
```

**Responsive:** 1 col mobile, 2 cols tablet, 4 cols desktop  
**Items:** Light shadow, subtle ring, padding

### Collapsible/Details Sections

```tsx
<article className="border border-slate-200 bg-white overflow-hidden">
  <details className="group">
    <summary className="cursor-pointer bg-deep-teal px-6 py-5 text-white font-semibold">
      <div className="flex items-start justify-between">
        <h2>Heading</h2>
        <ChevronIcon className="group-open:rotate-180 transition" />
      </div>
    </summary>
    <div className="divide-y divide-ink/5 px-6 py-6">
      {/* Expanded content */}
    </div>
  </details>
</article>
```

**Trigger:** Dark background, white text, clickable  
**Content:** Padded, subtle dividers  
**Icon:** Rotates on open

---

## 13. Interactions & Animations

| Interaction       | Implementation                                               |
| ----------------- | ------------------------------------------------------------ |
| **Link hover**    | `transition hover:text-teal-strong`                          |
| **Button hover**  | `transition hover:border-teal-strong hover:text-teal-strong` |
| **Card hover**    | `transition-all hover:ring-teal-strong/20 hover:shadow-lg`   |
| **Icon hover**    | `transition-colors hover:text-teal-strong`                   |
| **Expand icon**   | `.expand-icon { transition: transform 0.2s ease }`           |
| **Sticky nav**    | `sticky top-0 z-50 backdrop-blur-sm`                         |
| **Smooth scroll** | `scroll-smooth` on HTML, anchor links with hash              |
| **Focus states**  | `focus:outline-none focus:ring-2 focus:ring-teal-bright/50`  |
| **Active toggle** | Instant state change, border + bg colour flip                |

**Duration:** 150–200ms for most hover states  
**Easing:** `ease` or `ease-in-out`, never jarring  
**Never animate:** Layout shifts, page width changes

---

## 14. Accessibility

### Semantic HTML

- Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Use `<button>` for actions, `<a>` for navigation
- Use `<h2>, <h3>, <h4>` in order, never skip levels
- Use `<table>` for data, not layout

### ARIA & Labels

```tsx
<a href="#" aria-current="page">Current page</a>
<button aria-label="Close menu">✕</button>
<nav aria-label="Main navigation">...</nav>
<figure>
  <img src="..." alt="Descriptive alt text" />
  <figcaption>Caption here</figcaption>
</figure>
```

### Keyboard Navigation

- All interactive elements must be keyboard-accessible
- Tab order should be logical (left-to-right, top-to-bottom)
- Back-to-Top button should be in tab order (or use fixed positioning carefully)
- Focus states must be visible (browser default or custom `focus-visible`)

### Colour Contrast

- All text must meet WCAG AA standards (4.5:1 for body, 3:1 for large text)
- Never rely on colour alone to convey information
- Decorative elements can have lower contrast if not functional

### Text Alternatives

- Every image must have `alt` text
- Icons must have `aria-label` or `title`
- Charts must have a table equivalent or description

---

## 15. Cross-Domain Kit Setup

The `kit/` folder contains copy-paste files for any new subdomain project.

### Quick Start

```bash
# 1. Scaffold a new Next.js project
pnpm create next-app@latest my-subdomain --typescript --tailwind --app --no-src-dir

# 2. Copy kit files
cp -r kit/. my-subdomain/

# 3. Install dependencies
cd my-subdomain && pnpm install
```

### Kit File Structure

```
kit/
  README.md                        # Setup checklist & examples
  globals.css                      # All colour tokens + utility classes
  layout-template.tsx              # Root layout with font loading
  components/
    types.ts                       # Shared TypeScript types
    Navigation.tsx                 # Compact sticky navbar
    SiteFooter.tsx                 # Slim footer
    LanguageToggle.tsx             # NL/EN switcher
```

### Configuration

1. **Colour tokens:** Already in `globals.css`, no changes needed
2. **Fonts:** Geist loaded via Next.js (included with `next/font`)
3. **Tailwind:** Just import `@import 'tailwindcss'` in CSS

### Navbar for Each Subdomain

**Citizen Science (main site):**

```tsx
domainLinks={[
  { label: 'Citizen Science', href: '/', isCurrent: true },
  { label: 'Images',          href: 'https://images.surinametijdmachine.org' },
  { label: 'Data',            href: 'https://data.surinametijdmachine.org' },
]}
```

**Images subdomain:**

```tsx
domainLinks={[
  { label: 'Citizen Science', href: 'https://surinametijdmachine.org' },
  { label: 'Images',          href: '/',  isCurrent: true },
  { label: 'Data',            href: 'https://data.surinametijdmachine.org' },
]}
```

**Data subdomain:**

```tsx
domainLinks={[
  { label: 'Citizen Science', href: 'https://surinametijdmachine.org' },
  { label: 'Images',          href: 'https://images.surinametijdmachine.org' },
  { label: 'Data',            href: '/', isCurrent: true },
]}
```

### About Page Template

Each subdomain should have `/about` following this structure:

1. **Hero** (`.hero-surface`) — project name + 2-line lead
2. **What is this?** — 2–3 paragraphs explaining purpose
3. **STM Ecosystem** — links to all three domains with descriptions
4. **Partners** (`.cut-corner`) — institution logos/grid
5. **Contact** — email + external links

---

_Complete Design System — Suriname Time Machine, Huygens Institute_  
_Last updated: May 2026_
