import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { siteConfig } from './src/config/site.ts'
import { seoFiles } from './vite/seo-files.ts'

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tanstackStart({
      // Render every route to static HTML at build time, so crawlers and AI
      // answer engines that don't run JavaScript still see the full content.
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoSubfolderIndex: true,
        // In-page anchors (`/#faq`) are sections, not pages: skip them and
        // keep them out of the sitemap (crawled links are added to the
        // sitemap before this filter runs).
        filter: page => {
          if (!page.path.includes('#')) return true
          page.sitemap = { ...page.sitemap, exclude: true }
          return false
        },
      },
      pages: [
        {
          path: '/404',
          prerender: { enabled: true, outputPath: '/404.html' },
          sitemap: { exclude: true },
        },
      ],
      sitemap: {
        enabled: true,
        host: siteConfig.url,
      },
    }),
    react(),
    tailwindcss(),
    seoFiles(),
  ],
  server: {
    host: true,
  },
})
