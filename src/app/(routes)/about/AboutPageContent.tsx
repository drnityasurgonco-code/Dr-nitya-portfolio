import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { doctorProfile, testimonials } from '@/features/doctor/doctor.data'
import { siteConfig } from '@/config/site'
import { PageHero } from '@/components/shared/page-hero'
import { SectionHeader } from '@/components/shared/section-header'
import { SectionIndex } from '@/components/shared/section-index'
import { FadeUp, Stagger } from '@/components/shared/reveal'

const values = [
  {
    title: 'Compassion',
    desc: "Every patient's fear, hope, and journey is treated with empathy, dignity, and humanity. Cancer care goes beyond surgery.",
  },
  {
    title: 'Precision',
    desc: 'Evidence-based surgical planning, meticulous execution, and commitment to oncological safety define every procedure.',
  },
  {
    title: 'Comprehensive Cancer Care',
    desc: 'From diagnosis to recovery, patients receive multidisciplinary support — surgical, medical, radiation, and palliative.',
  },
]

/** About: server-rendered profile, highlights, values and two patient stories. */
export function AboutPageContent() {
  return (
    <div>
      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: 'About' }]}
        label="About the Doctor"
        title="Dr. Nitya Nutan Misra"
        lead="Surgical Oncologist · Assistant Professor · AHPGIC, Cuttack"
        actions={
          <>
            <Link href="/contact" className="btn-primary btn-lg">
              Book consultation <ArrowRight size={16} />
            </Link>
            <a href={`tel:${siteConfig.phone}`} className="fx-phone btn-ghost-light btn-lg">
              <Phone size={16} /> Call
            </a>
          </>
        }
      />

      {/* Profile */}
      <section aria-labelledby="profile-heading" className="frame section bg-white">
        <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface-2">
              <Image src="/images/doctor/dr-about.webp" alt="Dr. Nitya Nutan Misra" fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover object-top" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-ink-950/85 to-transparent px-5 pb-4 pt-14 label-mono text-[0.6875rem] text-white">
                <span>Misra / Surgical oncology</span>
                <span className="text-brand-300">AHPGIC</span>
              </div>
            </div>
            <dl className="mt-6 grid grid-cols-2 border-l border-t border-line">
              {doctorProfile.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse border-b border-r border-line p-5">
                  <dt className="mt-2 label-mono text-[0.625rem] text-ink-500">{stat.label}</dt>
                  <dd className="font-display text-3xl font-semibold tracking-[-0.05em] text-ink-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
            <a href={`tel:${siteConfig.phone}`} className="fx-phone btn-primary mt-6 w-full" aria-label="Call to book appointment">
              <Phone size={16} /> Book Appointment
            </a>
          </div>

          <div className="min-w-0">
            <SectionIndex index={1} label="Full Profile" />
            <h2 id="profile-heading" className="display-md mt-6">
              A Dedicated Surgical Oncologist Committed to <span className="text-brand-600">Precision &amp; Compassion</span>
            </h2>
            <FadeUp className="prose-clinic mt-8">
              {doctorProfile.bio.split(/\n\n/).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </FadeUp>

            <h3 className="mt-14 label-mono text-ink-500">Qualifications</h3>
            <ul className="mt-5 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2">
              {doctorProfile.qualifications.map((q, i) => (
                <li key={q} className="border-b border-r border-line p-5">
                  <span className="label-mono text-[0.6875rem] text-ink-400">{String(i + 1).padStart(2, '0')}</span>
                  <p className="mt-3 font-medium text-ink-900">{q}</p>
                </li>
              ))}
            </ul>

            <h3 className="mt-14 label-mono text-ink-500">Memberships &amp; Certifications</h3>
            <ul className="mt-5 border-t border-line">
              {doctorProfile.certifications.map((c) => (
                <li key={c} className="flex items-start gap-3 border-b border-line py-4 text-ink-700">
                  <span className="mt-2 h-[7px] w-[7px] shrink-0 bg-brand-500" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section aria-labelledby="achievements-heading" className="dark-scope frame section bg-ink-900 text-ink-300">
        <div className="container-x">
          <SectionIndex index={2} label="Achievements" tone="dark" />
          <h2 id="achievements-heading" className="display-md mt-6 text-white">
            Professional <span className="text-brand-400">Highlights</span>
          </h2>
          <Stagger className="mt-12 grid grid-cols-1 border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
            {doctorProfile.achievements.map((ach, i) => (
              <div key={ach} className="group relative border-b border-r border-white/10 p-7 transition-colors hover:bg-white/[0.03]">
                <span className="absolute left-0 top-0 h-[2px] w-0 bg-brand-400 transition-all duration-500 group-hover:w-full" aria-hidden="true" />
                <span className="label-mono text-[0.6875rem] text-ink-500">{String(i + 1).padStart(2, '0')}</span>
                <p className="mt-5 leading-relaxed text-ink-200">{ach}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="values-heading" className="frame section bg-paper">
        <div className="container-x">
          <SectionIndex index={3} label="Philosophy" />
          <h2 id="values-heading" className="display-md mt-6">
            Guided by <span className="text-brand-600">Three Core Values</span>
          </h2>
          <Stagger className="mt-12 grid grid-cols-1 border-l border-t border-line-strong md:grid-cols-3">
            {values.map((v, i) => (
              <div key={v.title} className="border-b border-r border-line-strong bg-white p-8">
                <span className="font-display text-5xl font-semibold tracking-[-0.05em] text-brand-600">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.035em] text-ink-900">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-500">{v.desc}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Patient stories */}
      <section aria-labelledby="testimonials-about-heading" className="frame section bg-white">
        <div className="container-x">
          <SectionHeader index={4} eyebrow="Patient stories" meta={<span>Shared with consent</span>} title="What Patients" titleHighlight="Say" />
          <div className="mt-12 grid grid-cols-1 border-l border-t border-line-strong md:grid-cols-2">
            {testimonials.slice(0, 2).map((t) => (
              <blockquote key={t.id} className="flex flex-col border-b border-r border-line-strong p-8 md:p-10">
                <span className="label-mono text-[0.6875rem] text-brand-600">{t.treatment}</span>
                <p className="mt-8 flex-1 font-serif text-[1.625rem] leading-[1.25] text-ink-900">“{t.message}”</p>
                <footer className="mt-8 border-t border-line pt-5">
                  <p className="font-medium text-ink-900">{t.name}</p>
                  <p className="mt-1 label-mono text-[0.625rem] text-ink-500">{t.location}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
