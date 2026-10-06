import { siteConfig } from '@/config/site'
import { navigation } from '@/content/home'
import { Logo } from './logo'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <Logo />
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground text-sm">
            {navigation.map(item => (
              <li key={item.href}>
                <a
                  href={`/${item.href}`}
                  className="rounded-sm transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-muted-foreground text-sm">
          <small>
            © {import.meta.env.VITE_BUILD_YEAR} {siteConfig.organization.name}{' '}
            All rights reserved.
          </small>
        </p>
      </div>
    </footer>
  )
}
