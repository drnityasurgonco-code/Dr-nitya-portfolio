'use client'

import { useState } from 'react'
import { faqs } from '@/features/doctor/patient.data'
import { cn } from '@/lib/utils'

const categories = ['All', 'Appointments', 'Diagnosis', 'Surgery', 'Treatment', 'General']

/** Category filter over a <details> accordion: every answer is in the HTML, not just the opened one. */
export function FaqFilter() {
  const [active, setActive] = useState('All')
  const list = active === 'All' ? faqs : faqs.filter((f) => f.category === active)
  return (
    <>
      <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 md:mx-0 md:flex-wrap md:px-0" role="group" aria-label="Filter FAQs by category">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
            className={cn(
              'shrink-0 rounded border px-3.5 py-2 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em] transition-colors',
              active === cat ? 'border-ink-900 bg-ink-900 text-white' : 'border-line-strong bg-white text-ink-600 hover:border-ink-900 hover:text-ink-900',
            )}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="mt-8 border-t border-line-strong">
        {list.map((f, i) => (
          <details key={f.id} className="group border-b border-line-strong">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
              <span className="flex gap-4">
                <span className="mt-1.5 font-mono text-[0.6875rem] text-ink-400">{String(i + 1).padStart(2, '0')}</span>
                <span>
                  <span className="block label-mono text-[0.625rem] text-brand-600">{f.category}</span>
                  <span className="mt-1 block font-display text-lg font-semibold tracking-[-0.025em] text-ink-900 md:text-xl">{f.question}</span>
                </span>
              </span>
              <span className="mt-4 text-2xl leading-none text-brand-600 transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
                +
              </span>
            </summary>
            <p className="pb-6 pl-9 leading-relaxed text-ink-600">{f.answer}</p>
          </details>
        ))}
      </div>
    </>
  )
}
