import type { Plugin } from 'vite'
import { absoluteUrl, siteConfig } from '../src/config/site.ts'
import { faq, features, steps } from '../src/content/home.ts'

/** Well-known AI crawlers, listed explicitly so opting out is a one-line change in `siteConfig.disallowedBots`. */
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
]

function robotsTxt() {
  const blocked = new Set<string>(siteConfig.disallowedBots)
  const groups = [
    'User-agent: *\nAllow: /',
    ...AI_CRAWLERS.map(
      bot =>
        `User-agent: ${bot}\n${blocked.has(bot) ? 'Disallow' : 'Allow'}: /`,
    ),
    ...[...blocked]
      .filter(bot => !AI_CRAWLERS.includes(bot))
      .map(bot => `User-agent: ${bot}\nDisallow: /`),
  ]
  return `${groups.join('\n\n')}\n\nSitemap: ${absoluteUrl('/sitemap.xml')}\n`
}

/** https://llmstxt.org — a Markdown summary that AI assistants can read without parsing HTML. */
function llmsTxt() {
  return [
    `# ${siteConfig.name}`,
    `> ${siteConfig.description}`,
    '## Features',
    features.items.map(f => `- **${f.title}**: ${f.description}`).join('\n'),
    `## ${steps.title}`,
    steps.items
      .map((s, i) => `${i + 1}. **${s.title}**: ${s.description}`)
      .join('\n'),
    '## FAQ',
    faq.items.map(q => `### ${q.question}\n\n${q.answer}`).join('\n\n'),
    '## Links',
    [
      `- [Home](${absoluteUrl('/')})`,
      `- [Sitemap](${absoluteUrl('/sitemap.xml')})`,
      ...siteConfig.sameAs.map(url => `- [${new URL(url).hostname}](${url})`),
    ].join('\n'),
  ]
    .join('\n\n')
    .concat('\n')
}

function manifest() {
  return `${JSON.stringify(
    {
      name: siteConfig.name,
      short_name: siteConfig.name,
      description: siteConfig.description,
      lang: siteConfig.language,
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: siteConfig.themeColor,
      icons: [
        { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
        {
          src: '/icon-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    null,
    2,
  )}\n`
}

const files: Record<string, { type: string; render: () => string }> = {
  'robots.txt': { type: 'text/plain', render: robotsTxt },
  'llms.txt': { type: 'text/plain', render: llmsTxt },
  'manifest.webmanifest': {
    type: 'application/manifest+json',
    render: manifest,
  },
}

/** Generates robots.txt, llms.txt and manifest.webmanifest from `src/config/site.ts`. */
export function seoFiles(): Plugin {
  return {
    name: 'seo-files',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const file = files[req.url?.slice(1) ?? '']
        if (!file) return next()
        res.setHeader('Content-Type', `${file.type}; charset=utf-8`)
        res.end(file.render())
      })
    },
    generateBundle() {
      if (this.environment.name !== 'client') return
      for (const [fileName, file] of Object.entries(files)) {
        this.emitFile({ type: 'asset', fileName, source: file.render() })
      }
    },
  }
}
