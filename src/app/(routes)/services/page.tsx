import type { Metadata } from 'next'
import { ServicesPageContent } from './ServicesPageContent'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Cancer Surgery Services in Cuttack | Dr. Nitya Nutan Misra',
  description:
    'Breast, head & neck, GI, thyroid and sarcoma cancer surgery in Cuttack, Odisha, with tumour board review. Book a consultation with Dr. Nitya Nutan Misra.',
  path: '/services',
})

export default function ServicesPage() {
  return <ServicesPageContent />
}
