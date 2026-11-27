import type { Metadata } from 'next'
import { ContactPageContent } from './ContactPageContent'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Book Appointment | Dr. Nitya Nutan Misra, Cuttack',
  description:
    'Book a cancer surgery consultation with Dr. Nitya Nutan Misra at Sai Shree Polyclinic, Mangalabag, Cuttack. Call or WhatsApp +91 94388 44662.',
  path: '/contact',
})

export default function ContactPage() {
  return <ContactPageContent />
}
