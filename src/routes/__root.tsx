import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router'
import { lazy, type ReactNode, Suspense } from 'react'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { SkipLink } from '@/components/layout/skip-link'
import { siteConfig } from '@/config/site'
import { jsonLd, organizationSchema, websiteSchema } from '@/lib/seo'
import { themeScript } from '@/lib/theme'
import appCss from '@/styles/global.css?url'

// Devtools are loaded on demand in development and never shipped to production.
const RouterDevtools = import.meta.env.PROD
  ? () => null
  : lazy(() =>
      import('@tanstack/react-router-devtools').then(mod => ({
        default: mod.TanStackRouterDevtools,
      })),
    )

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'color-scheme', content: 'light dark' },
      { name: 'theme-color', content: siteConfig.themeColor },
      { name: 'application-name', content: siteConfig.name },
      { name: 'apple-mobile-web-app-title', content: siteConfig.name },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/manifest.webmanifest' },
      {
        rel: 'alternate',
        type: 'text/plain',
        href: '/llms.txt',
        title: 'LLM-friendly summary',
      },
    ],
    scripts: [
      { children: themeScript },
      jsonLd(organizationSchema),
      jsonLd(websiteSchema),
    ],
  }),
  shellComponent: RootDocument,
  component: RootLayout,
})

function RootDocument({ children }: { children: ReactNode }) {
  return (
    // The theme script adds the `dark` class before hydration.
    <html lang={siteConfig.language} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Suspense>
          <RouterDevtools position="bottom-right" />
        </Suspense>
        <Scripts />
      </body>
    </html>
  )
}

function RootLayout() {
  return (
    <>
      <SkipLink />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
