import { Metadata } from 'next'
import { LocationPageTemplate } from '@/components/seo/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Best Clinic in Odisha | Dr. Nitya Nutan Misra Surgical Oncology',
  description: 'Looking for a top clinic in Odisha for cancer surgery? Dr. Nitya Nutan Misra provides state-of-the-art oncology care. Book an appointment today.',
  alternates: {
    canonical: 'https://drnityanutanmisra.com/clinic-in-odisha'
  }
}

export default function ClinicInOdishaPage() {
  const faqs = [
    {
      question: 'Which is the best cancer clinic in Odisha?',
      answer: 'Sai Shree Polyclinic in Cuttack, where Dr. Nitya Nutan Misra consults, is highly recognized for comprehensive surgical oncology and cancer care in Odisha.'
    },
    {
      question: 'What facilities are available at the clinic?',
      answer: 'The clinic is equipped to provide thorough cancer diagnosis, surgical consultations, and post-operative care, backed by the expertise of Dr. Misra.'
    },
    {
      question: 'How do I reach the clinic from other parts of Odisha?',
      answer: 'The clinic is centrally located at Kathagola, Ring Rd, Cuttack. It is easily accessible via major roadways and public transport from across Odisha.'
    }
  ]

  // Map URL
  const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.307222384976!2d85.88147137471926!3d20.452585412806294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190d6db11e4e25%3A0xc3c57f20ce3f46f3!2sSai%20shree%20polyclinic!5e0!3m2!1sen!2sin!4v1715426065507!5m2!1sen!2sin'

  return (
    <LocationPageTemplate
      city="Odisha"
      title="Advanced Cancer Clinic in Odisha"
      description="Receive exceptional cancer care at our specialized clinic in Odisha. Dr. Nitya Nutan Misra offers expert surgical solutions for complex tumors and cancers."
      keywords={['clinic in odisha', 'cancer hospital odisha', 'best cancer doctor odisha']}
      faqs={faqs}
      mapUrl={mapUrl}
    />
  )
}
