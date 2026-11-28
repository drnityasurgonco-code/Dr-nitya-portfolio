'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

type Status = { open: boolean; text: string; short: string }

/** OPD status in India time (UTC+5:30): Mon–Fri 9 AM–4 PM, Sat 9 AM–1 PM, Sunday closed. */
function getStatus(now = new Date()): Status {
  const ist = new Date(now.getTime() + (now.getTimezoneOffset() + 330) * 60_000)
  const day = ist.getDay() // 0 = Sunday
  const hour = ist.getHours() + ist.getMinutes() / 60
  const close = day === 6 ? 13 : 16
  const closeLabel = day === 6 ? '1 PM' : '4 PM'

  if (day !== 0 && hour >= 9 && hour < close) return { open: true, text: `OPD open · until ${closeLabel}`, short: 'OPD open' }
  if (day !== 0 && hour < 9) return { open: false, text: 'OPD opens 9 AM today', short: 'Opens 9 AM' }
  const next = day === 6 || day === 0 ? 'Monday' : 'tomorrow'
  return { open: false, text: `OPD closed · opens 9 AM ${next}`, short: 'OPD closed' }
}

export function OpenStatus({ className, tone = 'dark', compact = false }: { className?: string; tone?: 'dark' | 'light'; compact?: boolean }) {
  const [status, setStatus] = useState<Status | null>(null)
  useEffect(() => {
    const update = () => setStatus(getStatus())
    update()
    const id = window.setInterval(update, 60_000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <span className={cn('label-mono inline-flex items-center gap-2 whitespace-nowrap', tone === 'dark' ? 'text-ink-300' : 'text-ink-600', className)}>
      <span
        className={cn(
          'h-2 w-2 shrink-0 rounded-full',
          !status && 'bg-ink-500',
          status?.open && 'bg-pulse animate-pulse-ring',
          status && !status.open && 'bg-amber-400',
        )}
        aria-hidden="true"
      />
      {status ? (compact ? status.short : status.text) : compact ? 'Mon–Sat' : 'OPD Mon–Sat'}
    </span>
  )
}
