import Link from 'next/link'
import { MapPin, Phone, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { services } from '@/features/services/services.data'
import { breadcrumbSchema } from '@/lib/seo'
import { JsonLd } from '@/components/seo/StructuredData'

interface LocationPageProps {
  city: string
  title: string
  description: string
  keywords: string[]
  faqs: { question: string; answer: string }[]
  mapUrl: string
  path: string
  /** Page-specific content so each location page is unique (not a doorway page). */
  sections?: { heading: string; paragraphs: string[]; links?: { label: string; href: string }[] }[]
}

export function LocationPageTemplate({ city, title, description, faqs, mapUrl, path, sections = [] }: LocationPageProps) {
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
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema([{ name: title, path }])} />
      
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
                  Dr. Nitya Nutan Misra (MBBS, MS, MCh Surgical Oncology) is an Assistant Professor at Acharya Harihar Post Graduate Institute of Cancer and consults at {siteConfig.hospital}, Cuttack. He treats patients from {city} for breast cancer, head and neck tumours, gastrointestinal cancers, thyroid and endocrine tumours, and sarcoma.
                </p>
                <p>
                  Treatment plans follow evidence-based guidelines, and complex cases are reviewed by a multidisciplinary tumour board of surgical, medical and radiation oncologists. Dr. Misra places strong emphasis on early detection.
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

              {sections.map((section) => (
                <div key={section.heading} className="mb-12">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mb-4">{section.heading}</h2>
                  {section.paragraphs.map((para, i) => (
                    <p key={i} className="font-body text-neutral-600 leading-relaxed mb-4">{para}</p>
                  ))}
                  {section.links && section.links.length > 0 && (
                    <ul className="space-y-2 mt-2">
                      {section.links.map((l) => (
                        <li key={l.href}>
                          <Link href={l.href} className="inline-flex items-center gap-2 text-primary-700 font-body font-medium hover:underline">
                            <ArrowRight className="w-4 h-4" /> {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

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
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 text-primary-600 shadow-xs">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-neutral-900 mb-1">Address</p>
                      <p className="text-neutral-600 text-sm leading-relaxed">{siteConfig.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 text-primary-600 shadow-xs">
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
                  {services.map((s) => ({ label: s.title, href: `/services/${s.slug}` })).map((link, i) => (
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
          title={`Map: ${siteConfig.hospital}, Cuttack`}
        ></iframe>
      </section>
    </>
  )
}
