import type { ReactNode } from 'react'

/** Renders `backtick` segments of a plain string as `<code>` elements. */
export function InlineCode({ text }: { text: string }) {
  const parts: ReactNode[] = []
  let cursor = 0

  for (const match of text.matchAll(/`([^`]+)`/g)) {
    parts.push(text.slice(cursor, match.index))
    parts.push(
      <code
        key={match.index}
        className="wrap-anywhere rounded bg-muted px-1.5 py-0.5 font-mono text-[0.9em]"
      >
        {match[1]}
      </code>,
    )
    cursor = match.index + match[0].length
  }
  parts.push(text.slice(cursor))

  return parts
}
