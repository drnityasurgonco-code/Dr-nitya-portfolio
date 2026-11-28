import type { Metadata } from 'next'
import { HeroSection } from '@/components/home/hero-section'
import { Manifesto } from '@/components/home/manifesto'
import { SpecialtyRows } from '@/components/home/specialty-rows'
import { AboutSplit } from '@/components/home/about-split'
import { LocalSeoSection } from '@/components/home/LocalSeoSection'
import { TestimonialRail } from '@/components/home/testimonial-rail'
import { LatestArticles } from '@/components/home/latest-articles'
import { SpecialtyMarquee } from '@/components/shared/specialty-marquee'
import { CTABand } from '@/components/shared/cta-band'
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
      <HeroSection />
      <SpecialtyMarquee />
      <Manifesto />
      <SpecialtyRows />
      <AboutSplit />
      <LocalSeoSection />
      <TestimonialRail />
      <LatestArticles />
      <CTABand />
    </>
  )
}
