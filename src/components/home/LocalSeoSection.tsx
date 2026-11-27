import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { JsonLd } from '@/components/seo/StructuredData'
import { SectionIndex } from '@/components/shared/section-index'

// Server-rendered so the text is in the initial HTML for search engines.
const faqs = [
  {
    question: 'Who is a surgical oncologist, and when should I see one?',
    answer:
      'A surgical oncologist is a surgeon trained specifically in cancer operations. See one for a lump in the breast or neck, a thyroid nodule that may need surgery, a mouth ulcer or patch that has not healed in 2–3 weeks, or any cancer that may need an operation.',
  },
  {
    question: 'Where does Dr. Nitya Nutan Misra consult in Cuttack?',
    answer: `At ${siteConfig.address}. OPD runs Monday to Friday 9:00 AM to 4:00 PM and Saturday 9:00 AM to 1:00 PM. Call or WhatsApp ${siteConfig.phoneDisplay} to book.`,
  },
  {
    question: 'I live in Bhubaneswar. Can I consult Dr. Misra?',
    answer:
      'Yes. Many patients come from Bhubaneswar, which is about 30 km from the clinic in Mangalabag, Cuttack. Call before travelling to confirm your slot, and bring all your reports.',
  },
  {
    question: 'Which cancers does Dr. Misra operate on?',
    answer:
      'Breast cancer; mouth, head and neck cancers; thyroid nodules and thyroid cancer; stomach, colon, gallbladder, liver and pancreatic cancers; and sarcomas.',
  },
  {
    question: 'Is cancer surgery covered under GJAY or Ayushman Bharat in Odisha?',
    answer:
      'Cancer surgery is covered under Odisha’s Gopabandhu Jan Arogya Yojana and Ayushman Bharat PM-JAY at government and empanelled hospitals for eligible families. Check current limits and eligibility at the hospital’s scheme help desk.',
  },
]

const links = [
  { label: 'Breast cancer surgery in Cuttack', href: '/services/breast-cancer-surgery' },
  { label: 'Mouth (oral) and head & neck cancer surgery', href: '/services/head-neck-cancer-surgery' },
  { label: 'Thyroid surgeon in Cuttack', href: '/services/thyroid-endocrine-tumors' },
  { label: 'GI and gallbladder cancer surgery', href: '/services/gastrointestinal-cancer-surgery' },
  { label: 'Patients from Bhubaneswar', href: '/doctor-in-bhubaneswar' },
  { label: 'Patients from across Odisha', href: '/clinic-in-odisha' },
]

export function LocalSeoSection() {
  return (
    <section aria-labelledby="local-heading" className="frame section bg-white">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
        }}
      />
      <div className="container-x">
        <SectionIndex index={4} label="Cuttack · Bhubaneswar · Odisha" meta={<span>Mangalabag, Cuttack 753001</span>} />
        <div className="mt-14 grid grid-cols-1 gap-14 md:mt-20 lg:grid-cols-[minmax(0,1fr)_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 id="local-heading" className="display-md">
              Cancer Surgeon in Cuttack, <span className="text-brand-600">for Patients from Bhubaneswar and All of Odisha</span>
            </h2>
            <div className="prose-clinic mt-8">
              <p>
                Dr. Nitya Nutan Misra is an MCh Surgical Oncologist and Assistant Professor at Acharya Harihar Post Graduate
                Institute of Cancer (AHPGIC), Cuttack. He consults at {siteConfig.hospital} in Mangalabag, Cuttack, and sees
                patients from Cuttack, Bhubaneswar and districts across Odisha.
              </p>
              <p>
                Whether you are looking for a breast cancer doctor, a thyroid surgeon, an oral cancer specialist or a second
                opinion on a cancer treatment plan, a consultation with all your reports helps you understand the diagnosis
                and your options.
              </p>
            </div>
            <ul className="mt-8 border-t border-line">
              {links.map((l) => (
                <li key={l.href} className="border-b border-line">
                  <Link href={l.href} className="group flex items-center justify-between py-4 font-medium text-ink-900 transition-colors hover:text-brand-600">
                    {l.label}
                    <ArrowRight className="h-4 w-4 text-ink-400 transition-all duration-300 group-hover:-rotate-45 group-hover:text-brand-600" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="label-mono mb-6 text-ink-500">Common questions</h2>
            <div className="border-t border-line-strong">
              {faqs.map((f, i) => (
                <details key={f.question} className="group border-b border-line-strong" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                    <h3 className="flex gap-4 font-display text-lg font-semibold tracking-[-0.025em] text-ink-900 md:text-xl">
                      <span className="mt-1.5 font-mono text-[0.6875rem] font-normal tracking-normal text-ink-400">{String(i + 1).padStart(2, '0')}</span>
                      {f.question}
                    </h3>
                    <span className="mt-1 text-2xl leading-none text-brand-600 transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="pb-6 pl-9 leading-relaxed text-ink-600">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
