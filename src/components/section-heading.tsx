import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  id: string
  title: string
  description?: string
  className?: string
}

/** Section `<h2>` + intro. Pair `id` with `aria-labelledby` on the parent `<section>`. */
export function SectionHeading({
  id,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mx-auto max-w-2xl text-center', className)}>
      <h2
        id={id}
        className="text-balance font-bold text-3xl tracking-tight sm:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}
