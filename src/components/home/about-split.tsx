import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { doctorProfile } from '@/features/doctor/doctor.data'
import { SectionHeader } from '@/components/shared/section-header'
import { Stagger } from '@/components/shared/reveal'

/** Dark "case file" split: portrait + credentials, echoing Sai Shree's doctor spotlight. */
export function AboutSplit() {
  const memberships = doctorProfile.certifications
  return (
    <section className="dark-scope frame section bg-ink-900 text-ink-300">
      <div className="container-x">
        <SectionHeader
          index={3}
          eyebrow="About the surgeon"
          tone="dark"
          meta={<span>MBBS · MS · MCh</span>}
          title="Meet the surgeon"
          titleHighlight="behind your care."
          action={
            <Link href="/about" className="btn-ghost-light">
              Full profile <ArrowRight size={16} />
            </Link>
          }
        />

        <div className="mt-14 grid grid-cols-1 border border-white/10 md:mt-20 lg:grid-cols-[minmax(0,1fr)_1.1fr]">
          <div className="relative aspect-[4/5] overflow-hidden border-b border-white/10 bg-ink-850 sm:aspect-[4/3] lg:aspect-auto lg:min-h-[34rem] lg:border-b-0 lg:border-r">
            <Image
              src="/images/doctor/dr-about.webp"
              alt="Dr. Nitya Nutan Misra"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 grid-lines [--grid-line:rgb(255_255_255/0.06)]" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-ink-950/90 to-transparent px-6 pb-5 pt-16 label-mono text-[0.6875rem] text-white">
              <span>Misra / Surgical oncology</span>
              <span className="text-brand-300">AHPGIC · Cuttack</span>
            </div>
          </div>

          <div className="flex flex-col p-6 md:p-10">
            <p className="label-mono text-brand-300">{doctorProfile.qualifications.slice(0, 3).join(', ')}</p>
            <h3 className="mt-4 font-display text-4xl font-semibold tracking-[-0.045em] text-white md:text-5xl">{doctorProfile.name}</h3>
            <p className="mt-5 max-w-xl text-lg leading-relaxed">{doctorProfile.shortBio}</p>

            <dl className="mt-10 grid grid-cols-3 border-y border-white/10">
              <div className="flex flex-col-reverse py-4 pr-3">
                <dt className="mt-2 label-mono text-[0.625rem] text-ink-400">Experience</dt>
                <dd className="font-display text-xl font-semibold text-white">10+ years</dd>
              </div>
              <div className="flex flex-col-reverse border-l border-white/10 py-4 pl-4 pr-3">
                <dt className="mt-2 label-mono text-[0.625rem] text-ink-400">OPD</dt>
                <dd className="font-display text-xl font-semibold text-white">Mon–Sat</dd>
              </div>
              <div className="flex flex-col-reverse border-l border-white/10 py-4 pl-4">
                <dt className="mt-2 label-mono text-[0.625rem] text-ink-400">Faculty</dt>
                <dd className="font-display text-xl font-semibold text-white">AHPGIC</dd>
              </div>
            </dl>

            <Stagger className="mt-8 grid grid-cols-1 gap-2">
              {memberships.map((m) => (
                <p key={m} className="flex items-start gap-3 text-[0.9375rem]">
                  <span className="mt-2 h-[7px] w-[7px] shrink-0 bg-brand-400" aria-hidden="true" />
                  {m}
                </p>
              ))}
            </Stagger>

            <div className="mt-auto flex flex-wrap gap-3 pt-10">
              <Link href="/contact" className="btn-primary">
                Book with Dr. Misra <ArrowRight size={16} />
              </Link>
              <Link href="/about" className="btn-ghost-light">
                Qualifications
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
