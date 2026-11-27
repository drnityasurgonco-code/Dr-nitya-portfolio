import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionIndex } from '@/components/shared/section-index'
import { FadeUp } from '@/components/shared/reveal'

export function Manifesto() {
  return (
    <section className="frame section bg-white">
      <div className="container-x">
        <SectionIndex
          index={1}
          label="Approach"
          meta={<span>Diagnose → Plan → Operate → Follow up</span>}
        />
        <FadeUp>
          <p className="display-lg mt-14 max-w-6xl text-ink-900 md:mt-20">
            Early diagnosis saves lives. Every cancer is planned with a team, operated with care, and{' '}
            <span className="text-brand-600">followed up until you are back to your life.</span>
          </p>
        </FadeUp>
        <div className="mt-14 grid grid-cols-1 gap-10 md:mt-20 lg:grid-cols-2">
          <div aria-hidden="true" />
          <FadeUp delay={0.1}>
            <p className="text-lg leading-relaxed text-ink-500">
              Dr. Misra explains the diagnosis and every option in plain words, plans surgery with medical and radiation
              oncologists at the tumour board, and stays with you through recovery and follow-up.
            </p>
            <Link href="/about" className="link-arrow mt-8">
              About Dr. Misra <ArrowRight size={14} />
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
