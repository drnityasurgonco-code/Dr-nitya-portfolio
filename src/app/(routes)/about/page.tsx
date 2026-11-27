import type { Metadata } from 'next'
import { AboutPageContent } from './AboutPageContent'
import { pageMetadata } from '@/lib/seo'
import { AhpgicSection } from '@/components/seo/AhpgicSection'

export const metadata: Metadata = pageMetadata({
  title: 'About Dr. Nitya Nutan Misra | Surgical Oncologist, Cuttack',
  description:
    'Dr. Nitya Nutan Misra is an MCh Surgical Oncologist and Assistant Professor at AHPGIC, Cuttack, treating breast, head & neck, GI, thyroid cancer and sarcoma.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      <AboutPageContent />
      <AhpgicSection />
    </>
  )
}
