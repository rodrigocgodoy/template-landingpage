/**
 * Single source of truth for everything search engines and AI answer engines
 * read about the site: meta tags, Open Graph, JSON-LD, sitemap.xml, robots.txt,
 * llms.txt and the web app manifest are all generated from this object.
 *
 * This file is imported by `vite.config.ts` too, so keep it free of path
 * aliases (`@/`) and `import.meta.env`.
 */
export const siteConfig = {
  /** Brand / product name. */
  name: 'Acme',
  /** Default `<title>`. Pages can override it via `buildSeo({ title })`. */
  title: 'Acme — Launch your product faster',
  /** 150–160 characters: shown in search results and link previews. */
  description:
    'Acme helps teams launch fast, accessible and search-friendly landing pages in minutes — with a modern React stack and zero configuration.',
  /** Production origin, without a trailing slash. Used for canonical URLs and the sitemap. */
  url: 'https://example.com',
  /** BCP 47 language tag for `<html lang>` and `og:locale`. */
  locale: 'en_US',
  language: 'en',
  /** Absolute path (inside `public/`) to the 1200×630 social share image. */
  ogImage: '/og-image.png',
  ogImageAlt: 'Acme — Launch your product faster',
  /** Brand color used by the browser UI (address bar, PWA splash). */
  themeColor: '#0a0a0a',
  /** Twitter/X handle, including the `@`. Leave empty to omit. */
  twitter: '',
  /** Public profiles of the organization. Feeds the JSON-LD `sameAs` field. */
  sameAs: ['https://github.com/rodrigocgodoy/template-landingpage'],
  organization: {
    name: 'Acme Inc.',
    logo: '/icon-512.png',
    email: 'hello@example.com',
  },
  /**
   * Crawlers listed here are blocked in robots.txt. By default every bot —
   * including AI answer engines like GPTBot, ClaudeBot and PerplexityBot — is
   * allowed, which is what you want for AEO. Add a user agent here to opt out
   * (e.g. 'CCBot' to keep the site out of Common Crawl training data).
   */
  disallowedBots: [] as string[],
} as const

export type SiteConfig = typeof siteConfig

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString()
}
