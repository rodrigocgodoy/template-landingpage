import { createFileRoute, notFound } from '@tanstack/react-router'
import { createIsomorphicFn } from '@tanstack/react-start'
import { getRequestHeader } from '@tanstack/react-start/server'
import { NotFound } from '@/components/layout/not-found'
import { PRERENDER_NOT_FOUND_HEADER } from '@/config/prerender'

// When served by a server (dev, preview, SSR deploys), unknown URLs throw
// `notFound()`, which makes the router answer with a real 404 status. The
// prerender request for `404.html` is exempt because the prerenderer only
// writes pages that respond with 200. On the client this is a no-op.
const throwNotFoundOnServer = createIsomorphicFn().server(() => {
  if (!getRequestHeader(PRERENDER_NOT_FOUND_HEADER)) throw notFound()
})

/**
 * Catch-all route for unknown URLs. Static hosts serve the prerendered
 * `404.html` for any missing path; because every unknown path also matches
 * this route on the client, the page hydrates without a mismatch.
 */
export const Route = createFileRoute('/$')({
  loader: () => throwNotFoundOnServer(),
  component: NotFound,
  notFoundComponent: NotFound,
})
