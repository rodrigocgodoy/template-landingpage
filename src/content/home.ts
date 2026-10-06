/**
 * Landing page copy lives here, separate from the components, so the same data
 * can drive the UI, the structured data (e.g. the FAQ JSON-LD) and llms.txt.
 *
 * This file is also imported by `vite.config.ts` (through `vite/seo-files.ts`),
 * so keep it plain data: no path aliases (`@/`), no `import.meta.env` and no
 * React or icon imports. Icons are referenced by name and mapped to components
 * in `src/sections/home/features.tsx`.
 */

export const navigation = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
] as const

export const hero = {
  eyebrow: 'Open-source landing page template',
  title: 'Launch your product faster',
  description:
    'A fast, accessible and search-friendly starting point for your next landing page. Prerendered to static HTML, so search engines and AI assistants can read every word.',
  primaryCta: { label: 'Get started', href: '#get-started' },
  secondaryCta: { label: 'See features', href: '#features' },
}

export type FeatureIcon =
  | 'gauge'
  | 'search-check'
  | 'bot'
  | 'accessibility'
  | 'moon'
  | 'palette'

export type Feature = {
  icon: FeatureIcon
  title: string
  description: string
}

export const features = {
  title: 'Everything a landing page needs',
  description:
    'Sensible defaults for performance, discoverability and accessibility, so you can focus on your message.',
  items: [
    {
      icon: 'gauge',
      title: 'Static and fast',
      description:
        'Every route is prerendered to HTML at build time and hydrated on the client. Deploy to any static host.',
    },
    {
      icon: 'search-check',
      title: 'SEO ready',
      description:
        'Per-page meta tags, Open Graph, canonical URLs, sitemap.xml and robots.txt generated from a single config file.',
    },
    {
      icon: 'bot',
      title: 'Answer engine friendly',
      description:
        'JSON-LD structured data and an llms.txt file help AI assistants understand and cite your content.',
    },
    {
      icon: 'accessibility',
      title: 'Accessible by default',
      description:
        'Semantic landmarks, a skip link, visible focus states and accessible components built on Radix UI.',
    },
    {
      icon: 'moon',
      title: 'Dark mode',
      description:
        'Follows the system preference, remembers the visitor’s choice and never flashes the wrong theme.',
    },
    {
      icon: 'palette',
      title: 'Easy to customize',
      description:
        'Tailwind CSS v4 design tokens and shadcn/ui components you own and can change freely.',
    },
  ] satisfies Feature[],
}

export const steps = {
  title: 'How it works',
  description: 'From clone to production in three steps.',
  items: [
    {
      title: 'Clone the template',
      description: 'Run `pnpm dlx degit rodrigocgodoy/template-landingpage`.',
    },
    {
      title: 'Edit your content',
      description:
        'Update `src/config/site.ts` and `src/content/home.ts` with your brand and copy.',
    },
    {
      title: 'Deploy',
      description:
        'Run `pnpm build` and upload `dist/client` to any static host.',
    },
  ],
}

export type Faq = { question: string; answer: string }

export const faq = {
  title: 'Frequently asked questions',
  description: 'Answers to the most common questions about the template.',
  items: [
    {
      question: 'Is this template free to use?',
      answer:
        'Yes. The template is open source under the MIT license, so you can use it for personal and commercial projects.',
    },
    {
      question: 'Why is the page prerendered instead of a client-side SPA?',
      answer:
        'Many crawlers — including most AI answer engines — do not execute JavaScript. Prerendering ships complete HTML, so every visitor and bot sees the full content immediately.',
    },
    {
      question: 'Where can I deploy it?',
      answer:
        'Anywhere that serves static files: Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3 or your own server. The build output is in `dist/client`.',
    },
    {
      question: 'How do I change the SEO metadata?',
      answer:
        'Edit `src/config/site.ts`. Titles, descriptions, Open Graph tags, JSON-LD, the sitemap, robots.txt and llms.txt are all generated from it.',
    },
  ] satisfies Faq[],
}

export const callToAction = {
  title: 'Ready to launch?',
  description:
    'Start from a solid foundation and ship your landing page today.',
  cta: {
    label: 'View on GitHub',
    href: 'https://github.com/rodrigocgodoy/template-landingpage',
  },
}
