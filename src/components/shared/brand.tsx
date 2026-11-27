import Link from 'next/link'
import { Stethoscope } from 'lucide-react'
import { cn } from '@/lib/utils'

/** Wordmark: teal tile + name + mono role line. `inverted` = on a dark surface. */
export function Brand({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn('group flex items-center gap-3', className)} aria-label="Dr. Nitya Nutan Misra, home">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-brand-600 text-white transition-colors group-hover:bg-brand-500">
        <Stethoscope size={20} strokeWidth={1.75} aria-hidden="true" />
      </span>
      <span className={cn('border-l pl-3', inverted ? 'border-white/15' : 'border-line')}>
        <span className={cn('block font-display text-[1.0625rem] font-semibold leading-tight tracking-[-0.03em]', inverted ? 'text-white' : 'text-ink-900')}>
          Dr. Nitya Nutan Misra
        </span>
        <span className={cn('mt-0.5 block font-mono text-[0.625rem] uppercase tracking-[0.14em]', inverted ? 'text-ink-400' : 'text-ink-500')}>
          Surgical Oncologist
        </span>
      </span>
    </Link>
  )
}
