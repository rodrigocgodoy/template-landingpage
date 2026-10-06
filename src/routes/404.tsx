import { createFileRoute } from '@tanstack/react-router'
import { NotFound } from '@/components/layout/not-found'

// Prerendered to `404.html`, which static hosts serve for unknown URLs.
export const Route = createFileRoute('/404')({
  component: NotFound,
})
