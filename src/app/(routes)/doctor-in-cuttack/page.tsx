import { Metadata } from 'next'
import { LocationPageTemplate } from '@/components/seo/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Best Doctor in Cuttack | Top Surgical Oncologist & Cancer Specialist',
  description: 'Looking for the best doctor in Cuttack? Dr. Nitya Nutan Misra is a renowned Surgical Oncologist providing advanced cancer treatment. Book your appointment today.',
  alternates: {
    canonical: 'https://drnityanutanmisra.com/doctor-in-cuttack'
  }
}

export default function DoctorInCuttackPage() {
  const faqs = [
    {
      question: 'Who is the best cancer doctor in Cuttack?',
      answer: 'Dr. Nitya Nutan Misra is highly regarded as one of the best Surgical Oncologists in Cuttack, known for his expertise in complex cancer surgeries and compassionate patient care at Acharya Harihar Post Graduate Institute of Cancer.'
    },
    {
      question: 'Where is Dr. Nitya Nutan Misra located in Cuttack?',
      answer: 'Dr. Nitya Nutan Misra consults at Sai shree polyclinic, located at Kathagola, Ring Rd, near Shree Maa Hospital, Cuttack, Odisha 753001.'
    },
    {
      question: 'How can I book an appointment?',
      answer: 'You can book an appointment by calling +91 94388 44662 or messaging on WhatsApp. You can also visit our contact page to fill out the appointment form.'
    }
  ]

  // Actual map URL for Sai shree polyclinic Cuttack
  const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.307222384976!2d85.88147137471926!3d20.452585412806294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190d6db11e4e25%3A0xc3c57f20ce3f46f3!2sSai%20shree%20polyclinic!5e0!3m2!1sen!2sin!4v1715426065507!5m2!1sen!2sin'

  return (
    <LocationPageTemplate
      city="Cuttack"
      title="Best Doctor in Cuttack for Cancer Treatment"
      description="Comprehensive oncology services by Dr. Nitya Nutan Misra, a top-rated Surgical Oncologist dedicated to providing the highest standard of cancer care in Cuttack."
      keywords={['best doctor in cuttack', 'cancer doctor cuttack', 'surgical oncologist cuttack', 'top cancer surgeon']}
      faqs={faqs}
      mapUrl={mapUrl}
    />
  )
}
