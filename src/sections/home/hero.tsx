import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { hero } from '@/content/home'

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="container flex flex-col items-center py-24 text-center sm:py-32"
    >
      <p className="rounded-full border px-3 py-1 font-medium text-muted-foreground text-sm">
        {hero.eyebrow}
      </p>
      <h1
        id="hero-title"
        className="mt-6 max-w-3xl text-balance font-bold text-4xl tracking-tight sm:text-6xl"
      >
        {hero.title}
      </h1>
      <p className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
        {hero.description}
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg">
          <a href={hero.primaryCta.href}>
            {hero.primaryCta.label}
            <ArrowRight aria-hidden="true" />
          </a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
        </Button>
      </div>
    </section>
  )
}
