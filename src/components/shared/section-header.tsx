import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { SectionIndex } from './section-index'

/** `[01] LABEL ··· META` row, then a display headline whose last phrase is in the accent. */
export function SectionHeader({
  eyebrow,
  index,
  meta,
  title,
  titleHighlight,
  subtitle,
  action,
  tone = 'light',
  className,
  as: Heading = 'h2',
}: {
  eyebrow?: string
  index?: number
  meta?: ReactNode
  title: string
  titleHighlight?: string
  subtitle?: string
  action?: ReactNode
  tone?: 'light' | 'dark'
  className?: string
  as?: 'h1' | 'h2'
}) {
  const dark = tone === 'dark'
  return (
    <div className={className}>
      {eyebrow && <SectionIndex index={index} label={eyebrow} meta={meta} tone={tone} className="mb-10 md:mb-14" />}
      <div className={cn('flex flex-col gap-8', action && 'lg:flex-row lg:items-end lg:justify-between')}>
        <div className="max-w-4xl">
          <Heading className={cn('display-md', dark && 'text-white')}>
            {title}
            {titleHighlight && (
              <>
                {' '}
                <span className={dark ? 'text-brand-400' : 'text-brand-600'}>{titleHighlight}</span>
              </>
            )}
          </Heading>
          {subtitle && (
            <p className={cn('mt-6 max-w-2xl text-lg md:text-xl leading-relaxed', dark ? 'text-ink-300' : 'text-ink-500')}>{subtitle}</p>
          )}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </div>
  )
}
