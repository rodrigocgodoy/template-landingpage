import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getTheme, setTheme } from '@/lib/theme'

export function ThemeToggle() {
  // The label and icon both follow the `dark` class (set by the inline theme
  // script before paint), so they are correct in the prerendered HTML too:
  // no client state, no flash, no mismatch for screen readers.
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(getTheme() === 'dark' ? 'light' : 'dark')}
    >
      <Sun className="hidden dark:block" aria-hidden="true" />
      <Moon className="dark:hidden" aria-hidden="true" />
      <span className="sr-only dark:hidden">Switch to dark theme</span>
      <span className="sr-only hidden dark:inline">Switch to light theme</span>
    </Button>
  )
}
