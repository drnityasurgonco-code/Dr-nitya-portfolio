import type { Metadata } from 'next'
import { LocationPageTemplate } from '@/components/seo/LocationPageTemplate'
import { siteConfig } from '@/config/site'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Best Doctor in Bhubaneswar for Cancer | Dr. Nitya Nutan Misra',
  description:
    'Patients from Bhubaneswar consult Dr. Nitya Nutan Misra, MCh Surgical Oncologist, at his Cuttack clinic for breast, thyroid, GI and head & neck cancer surgery.',
  path: '/doctor-in-bhubaneswar',
})

const faqs = [
  {
    question: 'Does Dr. Nitya Nutan Misra see patients from Bhubaneswar?',
    answer:
      'Yes. Patients from Bhubaneswar consult Dr. Misra at Sai Shree Polyclinic, Mangalabag, Cuttack. Call +91 94388 44662 before travelling to confirm the OPD timing.',
  },
  {
    question: 'What types of cancer does Dr. Misra treat?',
    answer:
      'Dr. Misra performs surgery for breast cancer, head & neck cancer, gastrointestinal cancers, thyroid & endocrine tumours and sarcoma.',
  },
  {
    question: 'What should I bring to the first consultation?',
    answer:
      'Bring all previous reports, scans (CD or films), biopsy reports and slides or blocks, and a list of current medicines.',
  },
]

export default function DoctorInBhubaneswarPage() {
  return (
    <LocationPageTemplate
      city="Bhubaneswar"
      title="Cancer Surgeon for Patients from Bhubaneswar"
      description="Dr. Nitya Nutan Misra, MCh Surgical Oncologist, sees patients from Bhubaneswar and nearby districts at Sai Shree Polyclinic in Cuttack, about 30 km from Bhubaneswar."
      keywords={[]}
      faqs={faqs}
      mapUrl={siteConfig.mapsEmbedUrl}
      path="/doctor-in-bhubaneswar"
    />
  )
}
