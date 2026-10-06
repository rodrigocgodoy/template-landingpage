import { InlineCode } from '@/components/inline-code'
import { SectionHeading } from '@/components/section-heading'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faq } from '@/content/home'

/**
 * The matching FAQPage JSON-LD is added in the route's `head()`.
 * `forceMount` keeps closed answers in the prerendered HTML (with the `hidden`
 * attribute), so crawlers that ignore JSON-LD still read every answer.
 */
export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="scroll-mt-20 border-t bg-muted/40 py-24"
    >
      <div className="container">
        <SectionHeading
          id="faq-title"
          title={faq.title}
          description={faq.description}
        />
        <Accordion
          type="single"
          collapsible
          className="mx-auto mt-12 max-w-3xl"
        >
          {faq.items.map(item => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent
                forceMount
                className="text-base text-muted-foreground"
              >
                <InlineCode text={item.answer} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
