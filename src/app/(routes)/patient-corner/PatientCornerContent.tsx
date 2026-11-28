import { ClipboardList, FileText, Heart, HelpCircle, Phone, type LucideIcon } from 'lucide-react'
import { patientResources } from '@/features/doctor/patient.data'
import { siteConfig } from '@/config/site'
import { PageHero } from '@/components/shared/page-hero'
import { SectionIndex } from '@/components/shared/section-index'
import { CTABand } from '@/components/shared/cta-band'
import { Stagger } from '@/components/shared/reveal'
import { FaqFilter } from '@/components/patient/faq-filter'

const icons: Record<string, LucideIcon> = {
  'file-text': FileText,
  'clipboard-list': ClipboardList,
  'help-circle': HelpCircle,
  heart: Heart,
}

const journey = [
  {
    title: 'Consultation & Evaluation',
    desc: 'Meet Dr. Misra with all your reports. He will take a detailed history, perform a clinical examination, and advise appropriate investigations.',
  },
  { title: 'Investigations & Diagnosis', desc: 'Imaging (CT/MRI/PET-CT), biopsy, and blood tests to confirm diagnosis, cancer type, and staging.' },
  {
    title: 'Tumour Board Review',
    desc: 'Your case is presented at the multidisciplinary tumour board — surgical, medical, and radiation oncologists together formulate the best treatment plan.',
  },
  { title: 'Surgery & Treatment', desc: 'Planned surgical procedure performed at AHPGIC. Adjuvant therapy (chemotherapy/radiation) coordinated as needed.' },
  {
    title: 'Recovery & Follow-up',
    desc: 'Post-operative care, histopathology review, and long-term surveillance plan. Regular follow-up visits to monitor health and detect any recurrence early.',
  },
]

/** Patient Corner: server shell; FAQ filter is the only client island. */
export function PatientCornerContent() {
  return (
    <div>
      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Patient Corner' }]}
        label="For Patients & Families"
        title="Patient"
        highlight="Corner"
        lead="Resources, guides, and answers to your most important questions about cancer care at AHPGIC, Cuttack."
      />

      {/* Disclaimer */}
      <div className="border-b border-line bg-paper">
        <p className="container-x py-4 text-sm text-ink-600">
          <span className="label-mono mr-2 text-[0.6875rem] text-brand-700">Medical disclaimer</span>
          Information on this page is for educational purposes only and does not replace professional medical advice. Please consult Dr. Misra for any personal
          medical concerns.
        </p>
      </div>

      {/* Resources */}
      <section aria-labelledby="resources-heading" className="frame section bg-white">
        <div className="container-x">
          <SectionIndex index={1} label="Patient Resources" />
          <h2 id="resources-heading" className="display-md mt-6">
            Guides to Support Your <span className="text-brand-600">Cancer Journey</span>
          </h2>
          <Stagger className="mt-12 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {patientResources.map((r) => {
              const Icon = icons[r.icon] ?? FileText
              return (
                <div key={r.id} className="group relative flex flex-col border-b border-r border-line p-7 transition-colors hover:bg-paper">
                  <span className="absolute left-0 top-0 h-[2px] w-0 bg-brand-600 transition-all duration-500 group-hover:w-full" aria-hidden="true" />
                  <div className="flex items-center justify-between">
                    <span className="label-mono text-[0.625rem] text-brand-600">{r.category}</span>
                    <Icon size={20} className="text-brand-600" aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 font-display text-lg font-semibold leading-snug tracking-[-0.025em] text-ink-900">{r.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{r.description}</p>
                  <a href={`tel:${siteConfig.phone}`} className="link-arrow mt-6 self-start" aria-label="Call for more information">
                    Ask Dr. Misra →
                  </a>
                </div>
              )
            })}
          </Stagger>
        </div>
      </section>

      {/* Journey */}
      <section aria-labelledby="journey-heading" className="dark-scope frame section bg-ink-900 text-ink-300">
        <div className="container-x">
          <SectionIndex index={2} label="Your Care Pathway" tone="dark" />
          <h2 id="journey-heading" className="display-md mt-6 text-white">
            Your Cancer Care Journey <span className="text-brand-400">at AHPGIC</span>
          </h2>
          <ol className="mt-12 grid grid-cols-1 border-l border-t border-white/10 md:grid-cols-5">
            {journey.map((step, i) => (
              <li key={step.title} className="border-b border-r border-white/10 p-6">
                <span className="font-display text-4xl font-semibold tracking-[-0.05em] text-brand-400">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-[-0.025em] text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQs */}
      <section aria-labelledby="faqs-heading" className="frame section bg-white">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionIndex index={3} label="Common Questions" />
            <h2 id="faqs-heading" className="display-md mt-6">
              Frequently Asked <span className="text-brand-600">Questions</span>
            </h2>
            <div className="mt-10 border-l-2 border-brand-500 bg-paper p-6">
              <h3 className="font-display text-lg font-semibold tracking-[-0.025em] text-ink-900">Still have questions?</h3>
              <p className="mt-2 text-sm text-ink-500">Call or visit Dr. Misra at AHPGIC for a personalised consultation.</p>
              <a href={`tel:${siteConfig.phone}`} className="fx-phone btn-primary mt-5" aria-label="Call Dr. Misra">
                <Phone size={15} /> Call: {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
          <div>
            <FaqFilter />
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  )
}
