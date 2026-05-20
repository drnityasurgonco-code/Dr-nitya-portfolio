import { Metadata } from 'next'
import { LocationPageTemplate } from '@/components/seo/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Best Doctor in Bhubaneswar | Cancer Specialist & Surgical Oncologist',
  description: 'Search for the best doctor in Bhubaneswar for cancer care? Dr. Nitya Nutan Misra offers expert surgical oncology services. Contact us to book an appointment.',
  alternates: {
    canonical: 'https://drnityanutanmisra.com/doctor-in-bhubaneswar'
  }
}

export default function DoctorInBhubaneswarPage() {
  const faqs = [
    {
      question: 'Does Dr. Nitya Nutan Misra see patients from Bhubaneswar?',
      answer: 'Yes, patients from Bhubaneswar regularly visit Dr. Nitya Nutan Misra at his clinic in Cuttack, which is easily accessible, for expert surgical oncology consultations and treatments.'
    },
    {
      question: 'What types of cancer does Dr. Misra treat?',
      answer: 'Dr. Misra specializes in Breast Cancer, Head & Neck Cancer, Gastrointestinal Cancers, Thyroid & Endocrine Tumors, and Sarcoma Surgery.'
    },
    {
      question: 'Why choose Dr. Nitya Nutan Misra for cancer treatment in Odisha?',
      answer: 'He brings years of experience, advanced surgical techniques, and an evidence-based multidisciplinary approach to ensure optimal outcomes for his patients.'
    }
  ]

  // Map URL
  const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.307222384976!2d85.88147137471926!3d20.452585412806294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190d6db11e4e25%3A0xc3c57f20ce3f46f3!2sSai%20shree%20polyclinic!5e0!3m2!1sen!2sin!4v1715426065507!5m2!1sen!2sin'

  return (
    <LocationPageTemplate
      city="Bhubaneswar"
      title="Top Cancer Specialist serving Bhubaneswar"
      description="Dr. Nitya Nutan Misra is a leading Surgical Oncologist providing advanced cancer treatments to patients from Bhubaneswar and surrounding regions."
      keywords={['best doctor in bhubaneswar', 'cancer specialist bhubaneswar', 'oncologist near bhubaneswar']}
      faqs={faqs}
      mapUrl={mapUrl}
    />
  )
}
