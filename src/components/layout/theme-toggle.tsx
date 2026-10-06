import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { getTheme, setTheme, type Theme } from '@/lib/theme'

export function ThemeToggle() {
  // The real theme is only known in the browser, so start undefined to keep
  // the prerendered HTML and the first client render identical.
  const [theme, setThemeState] = useState<Theme>()

  useEffect(() => {
    setThemeState(getTheme())
  }, [])

  const next: Theme = theme === 'dark' ? 'light' : 'dark'

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={`Switch to ${next} theme`}
      onClick={() => {
        setTheme(next)
        setThemeState(next)
      }}
    >
      <Sun className="hidden dark:block" aria-hidden="true" />
      <Moon className="dark:hidden" aria-hidden="true" />
    </Button>
  )
}
