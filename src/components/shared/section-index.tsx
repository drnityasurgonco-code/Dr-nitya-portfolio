import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** Mono section marker: `[01] LABEL ······ META`. */
export function SectionIndex({
  index,
  label,
  meta,
  tone = 'light',
  className,
}: {
  index?: number
  label: string
  meta?: ReactNode
  tone?: 'light' | 'dark'
  className?: string
}) {
  const dark = tone === 'dark'
  return (
    <div className={cn('flex items-center justify-between gap-6 label-mono', className)}>
      <p className="flex items-center gap-2">
        {index !== undefined ? (
          <span className={dark ? 'text-white' : 'text-ink-900'}>[{String(index).padStart(2, '0')}]</span>
        ) : (
          <span className="h-[7px] w-[7px] bg-brand-500" aria-hidden="true" />
        )}
        <span className={dark ? 'text-brand-300' : 'text-brand-600'}>{label}</span>
      </p>
      {meta && <div className={cn('hidden text-right sm:block', dark ? 'text-ink-400' : 'text-ink-500')}>{meta}</div>}
    </div>
  )
}
