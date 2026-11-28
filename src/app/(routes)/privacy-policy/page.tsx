import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { pageMetadata } from '@/lib/seo'
import { PageHero } from '@/components/shared/page-hero'

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy | Dr. Nitya Nutan Misra',
  description:
    'How the website of Dr. Nitya Nutan Misra, Surgical Oncologist in Cuttack, handles information you share by phone, WhatsApp or email, and how analytics are used.',
  path: '/privacy-policy',
})

export default function PrivacyPolicyPage() {
  const h2 = 'mb-3 mt-12 font-display text-2xl font-semibold tracking-[-0.03em] text-ink-900'
  const p = 'mb-4 text-[1.0625rem] leading-[1.8] text-ink-600'
  return (
    <>
    <PageHero crumbs={[{ name: 'Home', href: '/' }, { name: 'Privacy Policy' }]} label="Your information" title="Privacy Policy" />
    <section className="frame bg-white py-16 md:py-20">
      <div className="container-x max-w-3xl">
        <p className={p}>
          This page explains how this website handles your information. If you have any question, write to{' '}
          <a className="text-brand-700 underline underline-offset-2" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>

        <h2 className={h2}>Appointment requests</h2>
        <p className={p}>
          The appointment form on the contact page does not store your details on this website. When you submit it, it
          opens WhatsApp with your message pre-filled, and nothing is sent until you press send in WhatsApp. Calls,
          WhatsApp messages and emails go directly to the clinic and are used only to respond to you and arrange
          your care.
        </p>

        <h2 className={h2}>Medical information</h2>
        <p className={p}>
          Please share only what is needed to book an appointment. Reports and detailed medical history are best brought
          to the consultation. The clinic does not sell or share your information for marketing.
        </p>

        <h2 className={h2}>Analytics and cookies</h2>
        <p className={p}>
          This website may use Google Analytics to count visits and clicks on the call and WhatsApp buttons, so that we can
          see which pages are useful. Google Analytics uses cookies and does not receive the content of your messages.
          The clinic map is embedded from Google Maps, which is subject to Google&apos;s privacy policy.
        </p>

        <h2 className={h2}>Medical disclaimer</h2>
        <p className={p}>
          Articles on this website are for general information and are not a substitute for a medical consultation.
        </p>

        <h2 className={h2}>Contact</h2>
        <p className={p}>
          {siteConfig.name}, {siteConfig.address}. Phone: {siteConfig.phoneDisplay}.
        </p>
      </div>
    </section>
    </>
  )
}
