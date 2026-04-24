# Your Portfolio — starter site

A 5-page minimal / Swiss portfolio for Product / UX Designer roles. Vanilla HTML + CSS, no build step. Open any file in a browser to preview.

## Structure

```
portfolio/
├─ index.html          Home — hero + selected work
├─ about.html          About — experience, skills, education
├─ styles.css          One stylesheet, all tokens at the top
└─ work/
   ├─ project-1.html   Case study (research-heavy template)
   ├─ project-2.html   Case study (design system template)
   └─ project-3.html   Case study (end-to-end template)
```

## Preview locally

Just double-click `index.html` — it works as static HTML, no server needed. For cleaner relative paths, from this folder run one of:

```bash
python3 -m http.server 4321
# or
npx serve .
```

Then open http://localhost:4321.

## What to edit first

1. **Every `Your Name`** — search and replace across all files.
2. **`you@example.com`** — replace with your real email (4 places per page).
3. **Social links** — LinkedIn, Read.cv, Dribbble in every footer.
4. **Accent color** — `--accent` in `styles.css` (top of the file). Currently `#ff4a1c`.
5. **Hero headline** — `index.html`, the `<h1>`. This is the single most-read sentence on the site. Rewrite it to sound like you.
6. **Project cards** — `index.html`, the `.work-list`. Titles, roles, years.
7. **Case studies** — each `work/project-*.html` has a structured template (Context → Research → Design → Outcome → Reflection). Replace placeholder copy with real content. Replace `.cs-placeholder` divs with `<img>` tags.

## Adding images

Put screenshots in `portfolio/assets/` (create the folder), then in a case study replace:

```html
<div class="cs-placeholder">BEFORE · drop screenshot here</div>
```

with:

```html
<img src="../assets/project-1-before.png" alt="Describe what's in the image." />
```

Alt text matters — this is a UX portfolio, the accessibility review will check it.

## Moving to Astro later

If you want to migrate this to Astro (better for long-term content management):

```bash
npm create astro@latest -- --template minimal
```

Then drop each page's `<main>` block into `.astro` files under `src/pages/`, move `styles.css` to `src/styles/`, and import it from a shared layout. The markup is already framework-agnostic, so the port is mechanical.

## Before you ship — run these in Claude Code

With the `design` plugin installed, you can run these skills against the finished site:

- `/design:design-critique` — point at a screenshot of home + one case study
- `/design:accessibility-review` — run against the deployed URL
- `/design:ux-copy` — have it review the hero, empty states, and CTAs

## Deploy

Drop the `portfolio/` folder into [Vercel](https://vercel.com/new), [Netlify Drop](https://app.netlify.com/drop), or [Cloudflare Pages](https://pages.cloudflare.com). All three give you a free HTTPS URL in under a minute.
