import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react'
import { siteConfig } from '@/config/site'

interface LocationPageProps {
  city: string
  title: string
  description: string
  keywords: string[]
  faqs: { question: string; answer: string }[]
  mapUrl: string
}

export function LocationPageTemplate({ city, title, description, faqs, mapUrl }: LocationPageProps) {
  // Schema for FAQ
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-50 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              {title}
            </h1>
            <p className="font-body text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Link>
              <a href={`tel:${siteConfig.phone}`} className="btn-outline bg-white text-base px-8 py-3.5">
                <Phone className="w-5 h-5 mr-2" />
                Call {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl font-bold text-neutral-900 mb-6">
                Expert Cancer Care in {city}
              </h2>
              <div className="prose prose-lg text-neutral-600 max-w-none mb-12">
                <p>
                  Dr. Nitya Nutan Misra offers state-of-the-art oncology treatments in {city}. With specialized focus on breast cancer, head and neck tumors, gastrointestinal cancers, and thyroid disorders, patients receive multidisciplinary, personalized care tailored to their unique needs.
                </p>
                <p>
                  Recognized as a leading Surgical Oncologist in the region, Dr. Misra emphasizes early detection and evidence-based surgical interventions to ensure the best possible outcomes.
                </p>
                <ul className="list-none pl-0 space-y-3 mt-6">
                  {['Advanced Surgical Techniques', 'Compassionate Patient Care', 'Multidisciplinary Approach', 'Post-surgery Rehabilitation'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-600" />
                      <span className="font-medium text-neutral-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQs */}
              <h2 className="font-display text-3xl font-bold text-neutral-900 mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                    <h3 className="font-display text-lg font-semibold text-neutral-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="font-body text-neutral-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar / Sidebar Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
                <h3 className="font-display text-xl font-bold text-neutral-900 mb-6">
                  Clinic Location
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 text-primary-600 shadow-sm">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-neutral-900 mb-1">Address</p>
                      <p className="text-neutral-600 text-sm leading-relaxed">{siteConfig.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 text-primary-600 shadow-sm">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-neutral-900 mb-1">Phone</p>
                      <p className="text-neutral-600 text-sm">{siteConfig.phoneDisplay}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Internal Links Block */}
              <div className="bg-neutral-900 rounded-2xl p-8 text-white">
                <h3 className="font-display text-xl font-bold mb-6">Our Services</h3>
                <ul className="space-y-4">
                  {[
                    { label: 'Breast Cancer Surgery', href: '/services#breast-cancer-surgery' },
                    { label: 'Head & Neck Cancer', href: '/services#head-neck-cancer-surgery' },
                    { label: 'GI Cancer Surgery', href: '/services#gastrointestinal-cancer-surgery' },
                  ].map((link, i) => (
                    <li key={i}>
                      <Link href={link.href} className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors group">
                        <ArrowRight className="w-4 h-4 text-primary-400 group-hover:translate-x-1 transition-transform" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full relative">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
          title={`Map showing location in ${city}`}
        ></iframe>
      </section>
    </>
  )
}
