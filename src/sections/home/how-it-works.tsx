import { InlineCode } from '@/components/inline-code'
import { SectionHeading } from '@/components/section-heading'
import { steps } from '@/content/home'

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="container scroll-mt-20 py-24"
    >
      <SectionHeading
        id="how-it-works-title"
        title={steps.title}
        description={steps.description}
      />
      <ol className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
        {steps.items.map((step, index) => (
          <li key={step.title} className="flex flex-col gap-3">
            <span
              aria-hidden="true"
              className="flex size-10 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground"
            >
              {index + 1}
            </span>
            <h3 className="font-semibold text-lg">{step.title}</h3>
            <p className="text-muted-foreground">
              <InlineCode text={step.description} />
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}
