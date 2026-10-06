import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { PRERENDER_NOT_FOUND_HEADER } from './src/config/prerender.ts'
import { siteConfig } from './src/config/site.ts'
import { seoFiles } from './vite/seo-files.ts'

export default defineConfig({
  define: {
    // Same value on the server and the client, so the footer year can never
    // cause a hydration mismatch. Rebuild yearly to roll it over.
    'import.meta.env.VITE_BUILD_YEAR': JSON.stringify(
      String(new Date().getFullYear()),
    ),
  },
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
          // Any unknown path renders the catch-all route (`src/routes/$.tsx`).
          path: '/404',
          prerender: {
            enabled: true,
            outputPath: '/404.html',
            headers: { [PRERENDER_NOT_FOUND_HEADER]: '1' },
          },
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
    // Allow common tunnels and any extra hostnames (Docker, custom local
    // domains) via DEV_ALLOWED_HOSTS=foo.test,.example.dev. A leading dot
    // matches subdomains. Avoid `true`: it turns off Vite's DNS rebinding
    // protection for the dev server.
    allowedHosts: [
      '.ngrok-free.app',
      '.ngrok.app',
      '.ngrok.io',
      '.trycloudflare.com',
      '.loca.lt',
      ...(process.env.DEV_ALLOWED_HOSTS?.split(',').map(host => host.trim()) ??
        []),
    ],
  },
})
