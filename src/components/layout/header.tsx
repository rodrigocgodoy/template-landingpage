import { Button } from '@/components/ui/button'
import { hero, navigation } from '@/content/home'
import { Logo } from './logo'
import { MobileNav } from './mobile-nav'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            {navigation.map(item => (
              <li key={item.href}>
                <a
                  href={`/${item.href}`}
                  className="rounded-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm">
            <a href={`/${hero.primaryCta.href}`}>{hero.primaryCta.label}</a>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
