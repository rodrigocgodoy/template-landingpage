import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { callToAction } from '@/content/home'

export function CallToAction() {
  return (
    <section
      id="get-started"
      aria-labelledby="get-started-title"
      className="container scroll-mt-20 py-24"
    >
      <div className="flex flex-col items-center rounded-2xl bg-primary px-6 py-16 text-center text-primary-foreground">
        <h2
          id="get-started-title"
          className="text-balance font-bold text-3xl tracking-tight sm:text-4xl"
        >
          {callToAction.title}
        </h2>
        <p className="mt-4 max-w-xl text-pretty text-lg opacity-80">
          {callToAction.description}
        </p>
        <Button asChild size="lg" variant="secondary" className="mt-8">
          <a href={callToAction.cta.href} target="_blank" rel="noopener">
            {callToAction.cta.label}
            <ArrowUpRight aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </Button>
      </div>
    </section>
  )
}
