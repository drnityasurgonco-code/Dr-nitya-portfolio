import type { Metadata } from 'next'
import { LocationPageTemplate } from '@/components/seo/LocationPageTemplate'
import { pageMetadata } from '@/lib/seo'
import { locationSections } from '@/features/locations/locations.content'

export const metadata: Metadata = pageMetadata({
  title: 'Best Doctor in Cuttack for Cancer | Dr. Nitya Nutan Misra',
  description:
    'Cancer specialist in Cuttack: Dr. Nitya Nutan Misra, MCh Surgical Oncologist at AHPGIC, consults at Sai Shree Polyclinic, Mangalabag. Call to book today.',
  path: '/doctor-in-cuttack',
})

const faqs = [
  {
    question: 'Which cancer surgeon can I consult in Cuttack?',
    answer:
      'Dr. Nitya Nutan Misra is an MCh-qualified Surgical Oncologist and Assistant Professor at Acharya Harihar Post Graduate Institute of Cancer (AHPGIC), Cuttack. He sees patients in OPD at Sai Shree Polyclinic, Mangalabag, Cuttack.',
  },
  {
    question: "Where is Dr. Nitya Nutan Misra's clinic in Cuttack?",
    answer:
      'Sai Shree Polyclinic, Kathagola Rd, near Shree Maa Hospital, Mangalabag, Cuttack, Odisha 753001. OPD runs Monday to Friday 9:00 AM to 4:00 PM and Saturday 9:00 AM to 1:00 PM.',
  },
  {
    question: 'How can I book an appointment?',
    answer:
      'Call or WhatsApp +91 94388 44662, or fill in the form on the contact page and it will open a pre-filled WhatsApp message.',
  },
]

export default function DoctorInCuttackPage() {
  return (
    <LocationPageTemplate
      city="Cuttack"
      title="Cancer Specialist & Surgical Oncologist in Cuttack"
      description="Dr. Nitya Nutan Misra is an MCh Surgical Oncologist and Assistant Professor at AHPGIC, Cuttack, offering surgery for breast, head & neck, GI and thyroid cancer and sarcoma."
      keywords={[]}
      faqs={faqs}
      path="/doctor-in-cuttack"
      sections={locationSections['/doctor-in-cuttack']}
    />
  )
}
