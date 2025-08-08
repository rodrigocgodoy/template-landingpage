import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/sections/home/hero'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <main className="relative flex w-full flex-col bg-white overflow-x-hidden">
      <Hero />
    </main>
  )
}
