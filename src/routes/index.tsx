import { createFileRoute } from '@tanstack/react-router'
import { faq } from '@/content/home'
import { buildSeo, faqSchema, jsonLd } from '@/lib/seo'
import { CallToAction } from '@/sections/home/call-to-action'
import { Faq } from '@/sections/home/faq'
import { Features } from '@/sections/home/features'
import { Hero } from '@/sections/home/hero'
import { HowItWorks } from '@/sections/home/how-it-works'

export const Route = createFileRoute('/')({
  head: () => ({
    ...buildSeo({ path: '/' }),
    scripts: [jsonLd(faqSchema(faq.items))],
  }),
  component: HomePage,
})

function HomePage() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <Hero />
      <Features />
      <HowItWorks />
      <Faq />
      <CallToAction />
    </main>
  )
}
