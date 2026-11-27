import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy | Dr. Nitya Nutan Misra',
  description:
    'How the website of Dr. Nitya Nutan Misra, Surgical Oncologist in Cuttack, handles information you share by phone, WhatsApp or email, and how analytics are used.',
  path: '/privacy-policy',
})

export default function PrivacyPolicyPage() {
  const h2 = 'font-display text-xl font-bold text-neutral-900 mt-8 mb-3'
  const p = 'font-body text-neutral-600 leading-relaxed mb-3'
  return (
    <section className="pt-[calc(var(--navbar-height)+3rem)] pb-16 bg-white">
      <div className="container-custom max-w-3xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-6">Privacy Policy</h1>
        <p className={p}>
          This page explains how this website handles your information. If you have any question, write to{' '}
          <a className="text-primary-600 underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
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
  )
}
