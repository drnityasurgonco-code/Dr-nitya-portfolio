import type { Metadata } from 'next'
import { PatientCornerContent } from './PatientCornerContent'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Patient Corner: Cancer Surgery FAQs | Dr. Nitya Nutan Misra',
  description:
    'Answers to common questions about cancer diagnosis, surgery and recovery, plus patient guides from Surgical Oncologist Dr. Nitya Nutan Misra, Cuttack.',
  path: '/patient-corner',
})

export default function PatientCornerPage() {
  return <PatientCornerContent />
}
