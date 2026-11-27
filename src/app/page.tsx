import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { AboutPreview } from '@/components/home/AboutPreview'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { Testimonials } from '@/components/home/Testimonials'
import { CTA } from '@/components/home/CTA'
import { LocalSeoSection } from '@/components/home/LocalSeoSection'
import { siteConfig } from '@/config/site'
import { pageMetadata } from '@/lib/seo'

// Home title kept as-is: it is the page most likely to already rank for "best doctor in cuttack".
export const metadata: Metadata = pageMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <LocalSeoSection />
      <Testimonials />
      <CTA />
    </>
  )
}
