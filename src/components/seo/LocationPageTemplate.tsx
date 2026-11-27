import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { services } from '@/features/services/services.data'
import { breadcrumbSchema } from '@/lib/seo'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { JsonLd } from '@/components/seo/StructuredData'
import { PageHero } from '@/components/shared/page-hero'
import { FaqAccordion } from '@/components/shared/faq-accordion'
import { ClinicCard } from '@/components/shared/clinic-card'
import { SectionIndex } from '@/components/shared/section-index'
import { CTABand } from '@/components/shared/cta-band'
import { WhatsAppIcon } from '@/components/shared/icons'

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

const pillars = ['Advanced Surgical Techniques', 'Compassionate Patient Care', 'Multidisciplinary Approach', 'Post-surgery Rehabilitation']

export function LocationPageTemplate({ city, title, description, faqs, mapUrl, path, sections = [] }: LocationPageProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
  const waMessage = `Hello Dr. Misra, I would like to book a consultation (from ${city}).`

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema([{ name: title, path }])} />

      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: city }]}
        label={`Patients from ${city}`}
        title={title}
        lead={description}
        actions={
          <>
            <Link href="/contact" className="btn-primary btn-lg">
              Book consultation <ArrowRight size={16} />
            </Link>
            <a href={`tel:${siteConfig.phone}`} className="fx-phone btn-ghost-light btn-lg">
              <Phone size={16} /> {siteConfig.phoneDisplay}
            </a>
          </>
        }
      />

      <section className="frame bg-white">
        <div className="container-x grid grid-cols-1 gap-14 py-16 md:py-24 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
          <div className="min-w-0">
            <SectionIndex index={1} label={city} />
            <h2 className="display-md mt-6">Expert Cancer Care in {city}</h2>
            <div className="prose-clinic mt-8">
              <p>
                Dr. Nitya Nutan Misra (MBBS, MS, MCh Surgical Oncology) is an Assistant Professor at Acharya Harihar Post Graduate
                Institute of Cancer and consults at {siteConfig.hospital}, Cuttack. He treats patients from {city} for breast cancer, head
                and neck tumours, gastrointestinal cancers, thyroid and endocrine tumours, and sarcoma.
              </p>
              <p>
                Treatment plans follow evidence-based guidelines, and complex cases are reviewed by a multidisciplinary tumour board of
                surgical, medical and radiation oncologists. Dr. Misra places strong emphasis on early detection.
              </p>
            </div>
            <ul className="mt-10 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2">
              {pillars.map((item, i) => (
                <li key={item} className="border-b border-r border-line p-5">
                  <span className="label-mono text-[0.6875rem] text-ink-400">{String(i + 1).padStart(2, '0')}</span>
                  <p className="mt-3 font-medium text-ink-900">{item}</p>
                </li>
              ))}
            </ul>

            {sections.map((section, si) => (
              <div key={section.heading} className="mt-16 md:mt-20">
                <SectionIndex index={si + 2} label={city} />
                <h2 className="display-md mt-6">{section.heading}</h2>
                <div className="prose-clinic mt-8">
                  {section.paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                {section.links && section.links.length > 0 && (
                  <ul className="mt-8 border-t border-line">
                    {section.links.map((l) => (
                      <li key={l.href} className="border-b border-line">
                        <Link href={l.href} className="group flex items-center justify-between gap-6 py-4 font-medium text-ink-900 transition-colors hover:text-brand-600">
                          {l.label}
                          <ArrowRight size={16} className="shrink-0 text-ink-400 transition-all duration-300 group-hover:-rotate-45 group-hover:text-brand-600" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="mt-16 md:mt-20">
              <SectionIndex index={sections.length + 2} label="Questions" />
              <h2 className="display-md mb-8 mt-6">Frequently Asked Questions</h2>
              <FaqAccordion faqs={faqs} />
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <ClinicCard whatsappMessage={waMessage} />
            <div className="card p-6">
              <h3 className="label-mono text-ink-500">Our Services</h3>
              <ul className="mt-4">
                {services.map((s) => (
                  <li key={s.slug} className="border-t border-line first:border-t-0">
                    <Link href={`/services/${s.slug}`} className="group flex items-center justify-between gap-3 py-3 font-medium text-ink-900 transition-colors hover:text-brand-600">
                      {s.title}
                      <ArrowRight size={15} className="shrink-0 text-ink-400 transition-all duration-300 group-hover:-rotate-45 group-hover:text-brand-600" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={getWhatsAppUrl(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp from {city}
            </a>
          </aside>
        </div>
      </section>

      {/* Map */}
      <section className="frame border-t border-line bg-paper">
        <div className="container-x py-16 md:py-20">
          <SectionIndex label="Clinic Location" meta={<span>{siteConfig.hospital}</span>} />
          <div className="mt-8 grid grid-cols-1 border border-line-strong lg:grid-cols-[minmax(0,1fr)_1.6fr]">
            <div className="flex flex-col bg-white">
              {[
                ['Clinic', siteConfig.hospital],
                ['Address', siteConfig.address],
                ['Phone', siteConfig.phoneDisplay],
                ...siteConfig.hours.map((h) => [h.label, h.time]),
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[6rem_minmax(0,1fr)] gap-4 border-b border-line px-6 py-4 text-sm">
                  <span className="label-mono text-[0.6875rem] text-ink-500">{k}</span>
                  <span className="text-ink-800">{v}</span>
                </div>
              ))}
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fx-fill group mt-auto flex items-center justify-between bg-ink-900 px-6 py-5 label-mono text-white [--fx-fill:var(--color-brand-600)]"
              >
                Get directions
                <ArrowRight size={16} className="transition-transform group-hover:-rotate-45" />
              </a>
            </div>
            <div className="min-h-[22rem] border-t border-line-strong lg:border-l lg:border-t-0">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '22rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map: ${siteConfig.hospital}, Cuttack`}
              />
            </div>
          </div>
        </div>
      </section>

      <CTABand whatsappMessage={waMessage} />
    </>
  )
}
