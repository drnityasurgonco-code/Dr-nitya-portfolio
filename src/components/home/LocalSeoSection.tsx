import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { JsonLd } from '@/components/seo/StructuredData'

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
    <section aria-labelledby="local-heading" className="section-padding bg-neutral-50">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
        }}
      />
      <div className="container-custom grid lg:grid-cols-2 gap-12">
        <div>
          <h2 id="local-heading" className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-5">
            Cancer Surgeon in Cuttack, for Patients from Bhubaneswar and All of Odisha
          </h2>
          <p className="font-body text-neutral-600 leading-relaxed mb-4">
            Dr. Nitya Nutan Misra is an MCh Surgical Oncologist and Assistant Professor at Acharya Harihar Post Graduate
            Institute of Cancer (AHPGIC), Cuttack. He consults at {siteConfig.hospital} in Mangalabag, Cuttack, and sees
            patients from Cuttack, Bhubaneswar and districts across Odisha.
          </p>
          <p className="font-body text-neutral-600 leading-relaxed mb-6">
            Whether you are looking for a breast cancer doctor, a thyroid surgeon, an oral cancer specialist or a second
            opinion on a cancer treatment plan, a consultation with all your reports helps you understand the diagnosis
            and your options.
          </p>
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex items-center gap-2 text-primary-700 font-body font-medium hover:underline">
                  <ArrowRight className="w-4 h-4" /> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold text-neutral-900 mb-5">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.question} className="bg-white rounded-2xl p-5 border border-neutral-100">
                <h3 className="font-display text-base font-semibold text-neutral-900 mb-2">{f.question}</h3>
                <p className="font-body text-sm text-neutral-600 leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
