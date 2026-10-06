import { absoluteUrl, siteConfig } from '@/config/site'

type SeoOptions = {
  /** Page title. Rendered as `${title} | ${siteConfig.name}`; defaults to `siteConfig.title`. */
  title?: string
  description?: string
  /** Route path, used for the canonical URL and `og:url`. */
  path?: string
  image?: string
  imageAlt?: string
  /** Keep the page out of search results (e.g. 404, thank-you pages). */
  noIndex?: boolean
}

/**
 * Builds the `meta` and `links` for a route's `head()` option, including
 * canonical URL, Open Graph and Twitter Card tags.
 *
 * @example
 * export const Route = createFileRoute('/pricing')({
 *   head: () => buildSeo({ title: 'Pricing', path: '/pricing' }),
 * })
 */
export function buildSeo({
  title,
  description = siteConfig.description,
  path = '/',
  image = siteConfig.ogImage,
  imageAlt = siteConfig.ogImageAlt,
  noIndex = false,
}: SeoOptions = {}) {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title
  const url = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)

  const meta = [
    { title: fullTitle },
    { name: 'description', content: description },
    {
      name: 'robots',
      content: noIndex
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: siteConfig.name },
    { property: 'og:locale', content: siteConfig.locale },
    { property: 'og:title', content: fullTitle },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:image', content: imageUrl },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: imageAlt },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: fullTitle },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: imageUrl },
    { name: 'twitter:image:alt', content: imageAlt },
    ...(siteConfig.twitter
      ? [
          { name: 'twitter:site', content: siteConfig.twitter },
          { name: 'twitter:creator', content: siteConfig.twitter },
        ]
      : []),
  ]

  const links = noIndex ? [] : [{ rel: 'canonical', href: url }]

  return { meta, links }
}

/** Serializes schema.org data into a `<script type="application/ld+json">` entry for `head().scripts`. */
export function jsonLd(data: Record<string, unknown>) {
  return {
    type: 'application/ld+json',
    // Escape `<` so content can never close the script tag early.
    children: JSON.stringify(data).replace(/</g, '\\u003c'),
  }
}

/** Removes inline-code backticks so copy reads naturally in structured data. */
export function toPlainText(text: string) {
  return text.replace(/`/g, '')
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': absoluteUrl('/#organization'),
  name: siteConfig.organization.name,
  url: absoluteUrl('/'),
  logo: absoluteUrl(siteConfig.organization.logo),
  email: siteConfig.organization.email,
  sameAs: siteConfig.sameAs,
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': absoluteUrl('/#website'),
  name: siteConfig.name,
  description: siteConfig.description,
  url: absoluteUrl('/'),
  inLanguage: siteConfig.language,
  publisher: { '@id': absoluteUrl('/#organization') },
}

export function faqSchema(
  items: ReadonlyArray<{ question: string; answer: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: toPlainText(item.question),
      acceptedAnswer: { '@type': 'Answer', text: toPlainText(item.answer) },
    })),
  }
}
