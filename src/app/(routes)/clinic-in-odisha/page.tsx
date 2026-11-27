import type { Metadata } from 'next'
import { LocationPageTemplate } from '@/components/seo/LocationPageTemplate'
import { siteConfig } from '@/config/site'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Cancer Surgery Clinic in Odisha | Dr. Nitya Nutan Misra',
  description:
    'Cancer surgery consultations in Odisha at Sai Shree Polyclinic, Mangalabag, Cuttack, with MCh Surgical Oncologist Dr. Nitya Nutan Misra. Call or WhatsApp.',
  path: '/clinic-in-odisha',
})

const faqs = [
  {
    question: 'Where does Dr. Nitya Nutan Misra consult in Odisha?',
    answer:
      'At Sai Shree Polyclinic, Kathagola Rd, near Shree Maa Hospital, Mangalabag, Cuttack, Odisha 753001.',
  },
  {
    question: 'What happens at the clinic?',
    answer:
      'Consultation, examination and review of reports, a surgical opinion and treatment plan, and post-operative follow-up.',
  },
  {
    question: 'How do I reach the clinic from other parts of Odisha?',
    answer:
      'The clinic is in Mangalabag, Cuttack, reachable by road from across Odisha. Call +91 94388 44662 for directions or to confirm OPD timings.',
  },
]

export default function ClinicInOdishaPage() {
  return (
    <LocationPageTemplate
      city="Odisha"
      title="Cancer Surgery Clinic in Odisha"
      description="Dr. Nitya Nutan Misra consults at Sai Shree Polyclinic in Cuttack for diagnosis, surgical opinion and follow-up of breast, head & neck, GI and thyroid cancers and sarcoma."
      keywords={[]}
      faqs={faqs}
      mapUrl={siteConfig.mapsEmbedUrl}
      path="/clinic-in-odisha"
    />
  )
}
