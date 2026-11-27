import Link from 'next/link'
import { services } from '@/features/services/services.data'
import { cn } from '@/lib/utils'

const shortName: Record<string, string> = {
  'breast-cancer-surgery': 'Breast Cancer',
  'head-neck-cancer-surgery': 'Head & Neck',
  'gastrointestinal-cancer-surgery': 'GI Cancer',
  'thyroid-endocrine-tumors': 'Thyroid',
  'sarcoma-surgery': 'Sarcoma',
  'multidisciplinary-cancer-treatment': 'Tumour Board Care',
}

function Cross({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn('h-6 w-6 shrink-0', className)} aria-hidden="true">
      <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z" fill="currentColor" />
    </svg>
  )
}

/** Endless ticker of specialities, alternating bold sans and italic serif, with medical-cross separators. */
export function SpecialtyMarquee() {
  const items = [...services, ...services]
  return (
    <div className="relative overflow-hidden border-y border-white/[0.07] bg-ink-900 py-8 md:py-10">
      <ul className="marquee-track flex w-max animate-marquee items-center gap-10 md:gap-14" aria-label="Specialities">
        {items.map((s, i) => {
          const serif = i % 2 === 1
          const hidden = i >= services.length
          return (
            <li key={`${s.id}-${i}`} className="flex items-center gap-10 md:gap-14" aria-hidden={hidden}>
              <Link href={`/services/${s.slug}`} tabIndex={hidden ? -1 : undefined} className="group flex items-start gap-2">
                <span className="label-mono mt-2 text-[0.625rem] text-brand-400">{String((i % services.length) + 1).padStart(2, '0')}</span>
                <span
                  className={cn(
                    'whitespace-nowrap text-5xl md:text-7xl transition-colors',
                    serif
                      ? 'font-serif italic font-normal tracking-[-0.01em] text-ink-400 group-hover:text-white'
                      : 'font-display font-semibold tracking-[-0.05em] text-white group-hover:text-brand-300',
                  )}
                >
                  {shortName[s.slug] ?? s.title}
                </span>
              </Link>
              <Cross className="text-brand-500" />
            </li>
          )
        })}
      </ul>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink-900 md:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink-900 md:w-32" />
    </div>
  )
}
