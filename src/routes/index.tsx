import { Hero } from '@/sections/home/hero'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <main className="flex max-w-full w-full overflow-x-hidden">
      <Hero />
    </main>
  )
}
