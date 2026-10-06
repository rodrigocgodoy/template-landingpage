import type { LucideIcon } from 'lucide-react'
import {
  Accessibility,
  Bot,
  Gauge,
  Moon,
  Palette,
  SearchCheck,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { type FeatureIcon, features } from '@/content/home'

const icons: Record<FeatureIcon, LucideIcon> = {
  gauge: Gauge,
  'search-check': SearchCheck,
  bot: Bot,
  accessibility: Accessibility,
  moon: Moon,
  palette: Palette,
}

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="scroll-mt-20 border-t bg-muted/40 py-24"
    >
      <div className="container">
        <SectionHeading
          id="features-title"
          title={features.title}
          description={features.description}
        />
        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map(({ icon, title, description }) => {
            const Icon = icons[icon]
            return (
              <li key={title} className="rounded-xl border bg-card p-6">
                <Icon className="size-6 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-semibold text-lg">{title}</h3>
                <p className="mt-2 text-muted-foreground">{description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
