import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

export function NotFound() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="container flex min-h-[60vh] flex-col items-center justify-center gap-4 py-24 text-center outline-none"
    >
      {/* React 19 hoists these into <head>; 404s must never be indexed. */}
      <title>{`Page not found | ${siteConfig.name}`}</title>
      <meta name="robots" content="noindex, nofollow" />
      <p className="font-semibold text-muted-foreground text-sm">404</p>
      <h1 className="text-balance font-bold text-4xl tracking-tight">
        Page not found
      </h1>
      <p className="max-w-md text-pretty text-muted-foreground">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Button asChild>
        <Link to="/">Back to home</Link>
      </Button>
    </main>
  )
}
