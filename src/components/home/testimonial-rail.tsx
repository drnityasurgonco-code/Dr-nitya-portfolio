'use client'

import { useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { testimonials } from '@/features/doctor/doctor.data'
import { SectionIndex } from '@/components/shared/section-index'

/** Snap-scrolling quote cards in serif; no star ratings (confirmed, consented patients only). */
export function TestimonialRail() {
  const rail = useRef<HTMLUListElement>(null)
  const scroll = (dir: 1 | -1) => {
    const el = rail.current
    if (!el) return
    const card = el.querySelector('li')
    el.scrollBy({ left: dir * ((card?.clientWidth ?? 400) + 1), behavior: 'smooth' })
  }

  return (
    <section className="frame section overflow-hidden bg-paper">
      <div className="container-x">
        <SectionIndex index={5} label="Patient stories" meta={<span>Shared with consent</span>} />
        <div className="mt-14 flex flex-col gap-10 md:mt-20 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display-md max-w-3xl">
            Real recoveries, <span className="text-brand-600">in patients’ own words.</span>
          </h2>
          <div className="hidden sm:flex">
            <button type="button" onClick={() => scroll(-1)} aria-label="Previous story" className="fx-fill fx-press flex h-12 w-12 items-center justify-center border border-ink-900 text-ink-900 hover:text-white">
              <ArrowLeft size={18} />
            </button>
            <button type="button" onClick={() => scroll(1)} aria-label="Next story" className="fx-fill fx-press -ml-px flex h-12 w-12 items-center justify-center border border-ink-900 text-ink-900 hover:text-white">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <ul
        ref={rail}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory scroll-pl-5 overflow-x-auto px-5 md:mt-16 md:scroll-pl-10 md:px-10 xl:scroll-pl-[max(2.5rem,calc((100vw-1360px)/2+2.5rem))] xl:px-[max(2.5rem,calc((100vw-1360px)/2+2.5rem))]"
        aria-label="Patient stories"
      >
        {testimonials.map((t, i) => (
          <li key={t.id} className="-ml-px flex w-[88%] shrink-0 snap-start flex-col border border-line-strong bg-white p-7 first:ml-0 sm:w-[26rem] md:p-9">
            <div className="flex items-center justify-between label-mono text-[0.6875rem]">
              <span className="text-ink-400">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-brand-600">{t.treatment}</span>
            </div>
            <blockquote className="mt-10 flex-1 font-serif text-[1.625rem] leading-[1.25] text-ink-900">“{t.message}”</blockquote>
            <div className="mt-10 border-t border-line pt-5">
              <p className="font-medium text-ink-900">{t.name}</p>
              <p className="mt-1 label-mono text-[0.625rem] text-ink-500">{t.location}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
