import { Link } from '@tanstack/react-router'
import { siteConfig } from '@/config/site'

export function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 rounded-md font-semibold text-lg tracking-tight"
    >
      <img
        src="/favicon.svg"
        alt=""
        width={28}
        height={28}
        className="size-7"
      />
      {siteConfig.name}
      <span className="sr-only"> — home</span>
    </Link>
  )
}
