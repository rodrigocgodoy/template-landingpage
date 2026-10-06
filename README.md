# Landing Page Template

A production-ready landing page template built with **React 19**, **TanStack Start**, **Tailwind CSS v4** and **shadcn/ui**. Every page is **prerendered to static HTML** at build time, so search engines and AI answer engines (ChatGPT, Claude, Perplexity, Google AI Overviews) can read the full content, even when they don't run JavaScript.

[![CI](https://github.com/rodrigocgodoy/template-landingpage/actions/workflows/ci.yml/badge.svg)](https://github.com/rodrigocgodoy/template-landingpage/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Features

- **Static prerendering**: TanStack Start renders every route to HTML at build time and hydrates it on the client. Deploy to any static host.
- **SEO**: per-route `<title>`, description, canonical URL, Open Graph and Twitter Card tags, plus a generated `sitemap.xml` and `robots.txt`.
- **AEO (Answer Engine Optimization)**: JSON-LD structured data (`Organization`, `WebSite`, `FAQPage`), an [`llms.txt`](https://llmstxt.org) summary, and explicit rules for AI crawlers in `robots.txt`.
- **One config file**: all of the above is generated from `src/config/site.ts`.
- **Accessible and semantic**: landmarks (`header`, `nav`, `main`, `footer`), a skip link, a logical heading outline, visible focus states and Radix UI primitives.
- **Dark mode**: follows the OS preference, remembers the visitor's choice and never flashes the wrong theme.
- **Fast by default**: self-hosted variable font (no third-party requests), route-based code splitting, and router devtools that never reach production.
- **Modern tooling**: Vite 8, TypeScript 7, Biome 2, GitHub Actions CI and Dependabot.

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | [React 19](https://react.dev), [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router) |
| Build | [Vite 8](https://vite.dev) (Rolldown) |
| Language | [TypeScript 7](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com), [tw-animate-css](https://github.com/Wombosvideo/tw-animate-css) |
| Components | [shadcn/ui](https://ui.shadcn.com), [Radix UI](https://www.radix-ui.com), [Lucide](https://lucide.dev) icons |
| Font | [Inter Variable](https://fontsource.org/fonts/inter) via Fontsource |
| Lint and format | [Biome](https://biomejs.dev) |

## Quick start

Requirements: **Node.js 22.12+** (see `.nvmrc`) and [**pnpm**](https://pnpm.io/installation).

```bash
pnpm dlx degit rodrigocgodoy/template-landingpage my-landing-page
cd my-landing-page
pnpm install
pnpm dev
```

Open <http://localhost:5173>.

The dev server accepts requests from common tunnels (ngrok, Cloudflare Tunnel, localtunnel). For other hostnames, such as a Docker service name or a custom local domain, list them in `DEV_ALLOWED_HOSTS`:

```bash
DEV_ALLOWED_HOSTS=app.test,.my-company.dev pnpm dev
```

## Make it yours

1. **`src/config/site.ts`**: name, title, description, production URL, locale, social profiles, organization data and theme color. This file drives the meta tags, JSON-LD, sitemap, robots.txt, llms.txt and web manifest.
2. **`src/content/home.ts`**: the landing page copy (hero, features, steps, FAQ and call to action). `vite.config.ts` also reads this file to build `llms.txt`, so keep it plain data: no `@/` imports, no React and no icon components (icons are referenced by name).
3. **`public/`**: replace `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` and the 1200×630 `og-image.png` with your brand assets.
4. **`src/styles/global.css`**: adjust colors, radius and fonts through the CSS variables.

> [!IMPORTANT]
> Set `url` in `src/config/site.ts` to your production domain before deploying. Canonical URLs, Open Graph images and the sitemap use it.

## SEO and AEO

Most AI crawlers (GPTBot, ClaudeBot, PerplexityBot) fetch the raw HTML and don't run JavaScript. A client-side SPA shows them an empty `<div>`. This template prerenders every page, so they see the same content as visitors.

The build generates these files from `src/config/site.ts`:

| File | Purpose |
| --- | --- |
| `index.html` (per route) | Full content plus meta tags, canonical URL and JSON-LD |
| `404.html` | Not-found page with `noindex`, served by static hosts for unknown URLs. It's rendered from the catch-all route (`src/routes/$.tsx`), so it hydrates cleanly at any URL; when a server renders it, it answers with a real `404` status |
| `sitemap.xml` | All prerendered routes, excluding in-page anchors and the 404 page |
| `robots.txt` | Allows all crawlers, lists AI crawlers explicitly, points to the sitemap |
| `llms.txt` | Markdown summary of the site for LLMs ([llmstxt.org](https://llmstxt.org)) |
| `manifest.webmanifest` | Web app manifest (name, icons, theme color) |

To block a crawler, for example to keep the site out of Common Crawl training data, add its user agent to `disallowedBots` in `src/config/site.ts`:

```ts
disallowedBots: ['CCBot'],
```

### Content tips for answer engines

- Answer real customer questions in the FAQ. The same data feeds the visible accordion and the `FAQPage` JSON-LD, so they always match.
- Keep one `<h1>` per page and use `<h2>`/`<h3>` to describe each section.
- Write descriptive link text and image `alt` text.

## Adding a page

Create a file in `src/routes/`. TanStack Router generates the route tree, and the prerenderer discovers the page by crawling links.

```tsx
// src/routes/pricing.tsx
import { createFileRoute } from '@tanstack/react-router'
import { buildSeo } from '@/lib/seo'

export const Route = createFileRoute('/pricing')({
  head: () => buildSeo({
    title: 'Pricing',
    description: 'Simple, transparent pricing for teams of every size.',
    path: '/pricing',
  }),
  component: PricingPage,
})

function PricingPage() {
  return (
    <main id="main-content" tabIndex={-1} className="container py-24 outline-none">
      <h1 className="font-bold text-4xl">Pricing</h1>
    </main>
  )
}
```

Link to it with `<Link to="/pricing">` so the crawler finds it. To prerender a page that has no links pointing to it, add it to `pages` in `vite.config.ts`.

Pass `noIndex: true` to `buildSeo` for pages that should stay out of search results, such as a thank-you page.

## Project structure

```
├── public/                  # Static assets: icons, Open Graph image
├── src/
│   ├── components/
│   │   ├── layout/          # Header, mobile nav, footer, logo, skip link, theme toggle, 404
│   │   └── ui/              # shadcn/ui components
│   ├── config/
│   │   ├── prerender.ts     # Constants shared with vite.config.ts
│   │   └── site.ts          # Site metadata: single source of truth for SEO
│   ├── content/
│   │   └── home.ts          # Landing page copy
│   ├── lib/
│   │   ├── seo.ts           # buildSeo() and JSON-LD helpers
│   │   ├── theme.ts         # Theme script and helpers
│   │   └── utils.ts         # cn() class merging helper
│   ├── routes/              # File-based routes (TanStack Router); `$.tsx` is the 404 page
│   ├── sections/home/       # Landing page sections
│   ├── styles/global.css    # Tailwind entry point and design tokens
│   ├── router.tsx           # Router factory
│   └── routeTree.gen.ts     # Generated, don't edit
├── vite/
│   └── seo-files.ts         # Generates robots.txt, llms.txt and the manifest
├── biome.json
└── vite.config.ts           # Prerender and sitemap configuration
```

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Build and prerender the site to `dist/client` |
| `pnpm preview` | Preview the production build |
| `pnpm typecheck` | Type-check with TypeScript |
| `pnpm lint` | Lint and check formatting with Biome |
| `pnpm lint:fix` | Fix lint and formatting issues |
| `pnpm format` | Format the code |
| `pnpm check` | Run lint, typecheck and build |

## Adding components

```bash
pnpm dlx shadcn@latest add card dialog
```

The template ships with **Button** and **Accordion**. After adding a component, check that it imports `cn` from `@/lib/utils`.

## Deployment

`pnpm build` writes a fully static site to **`dist/client`**. Upload that folder to any static host:

| Host | Build command | Output directory |
| --- | --- | --- |
| Vercel | `pnpm build` | `dist/client` |
| Netlify | `pnpm build` | `dist/client` |
| Cloudflare Pages | `pnpm build` | `dist/client` |
| GitHub Pages | `pnpm build` | `dist/client` |

All of these hosts serve `404.html` for unknown URLs automatically.

> [!NOTE]
> The build also produces `dist/server`, which `pnpm preview` uses. Static hosting doesn't need it. If you later add server functions or SSR, deploy with one of the [TanStack Start hosting targets](https://tanstack.com/start/latest/docs/framework/react/guide/hosting).

## Contributing

Contributions are welcome. Open an issue or a pull request, and run `pnpm check` before submitting.

## License

[MIT](LICENSE) © Rodrigo Godoy
