import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check, Phone } from 'lucide-react'
import { services } from '@/features/services/services.data'
import { blogPosts } from '@/features/blog/blog.data'
import { siteConfig } from '@/config/site'
import { absoluteUrl, breadcrumbSchema, ids, pageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/seo/StructuredData'
import { serviceSeo as seo } from '@/features/services/services.seo'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { PageHero } from '@/components/shared/page-hero'
import { FaqAccordion } from '@/components/shared/faq-accordion'
import { ClinicCard } from '@/components/shared/clinic-card'
import { SectionIndex } from '@/components/shared/section-index'
import { CTABand } from '@/components/shared/cta-band'
import { WhatsAppIcon } from '@/components/shared/icons'
import { FadeUp, Stagger } from '@/components/shared/reveal'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  const meta = seo[slug]
  if (!service || !meta) return {}
  return pageMetadata({ title: meta.title, description: meta.description, path: `/services/${service.slug}` })
}

const consultationSteps = [
  `Call or WhatsApp ${siteConfig.phoneDisplay} to book an OPD slot at ${siteConfig.hospital}, Cuttack.`,
  'Bring all reports, scans and biopsy slides or blocks you already have.',
  'Dr. Misra examines you, explains the diagnosis and the surgical options.',
  'Complex cases are discussed at a multidisciplinary tumour board before treatment is finalised.',
]

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  const meta = seo[slug]
  if (!service || !meta) notFound()

  const path = `/services/${service.slug}`
  const articles = blogPosts.filter((p) => p.category === meta.blogCategory)
  const others = services.filter((s) => s.slug !== service.slug)
  const index = services.findIndex((s) => s.slug === service.slug) + 1
  const waMessage = `Hello Dr. Misra, I would like to book a consultation regarding ${service.title}.`
  const paragraphs = service.fullDesc.split(/\n\n/)

  return (
    <div>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'MedicalWebPage',
          name: meta.h1,
          description: meta.description,
          url: absoluteUrl(path),
          inLanguage: 'en-IN',
          isPartOf: { '@id': ids.website },
          about: { '@type': 'MedicalProcedure', name: service.title, procedureType: 'Surgical' },
          reviewedBy: { '@id': ids.person },
          provider: { '@id': ids.physician },
        }}
      />
      <JsonLd data={breadcrumbSchema([{ name: 'Services', path: '/services' }, { name: service.title, path }])} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: meta.faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }}
      />

      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Specialities', href: '/services' }, { name: service.title }]}
        label={`Speciality ${String(index).padStart(2, '0')} / ${String(services.length).padStart(2, '0')}`}
        title={meta.h1}
        lead={service.shortDesc}
        actions={
          <>
            <a href={`tel:${siteConfig.phone}`} className="fx-phone btn-primary btn-lg">
              <Phone size={16} /> Call {siteConfig.phoneDisplay}
            </a>
            <a href={getWhatsAppUrl(waMessage)} target="_blank" rel="noopener noreferrer" className="btn-ghost-light btn-lg">
              <WhatsAppIcon className="h-4 w-4 text-pulse" /> WhatsApp to book
            </a>
          </>
        }
      />

      <section className="frame bg-white">
        <div className="container-x grid grid-cols-1 gap-14 py-16 md:py-24 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
          <div className="min-w-0">
            <FadeUp>
              <p className="font-display text-xl font-medium leading-relaxed tracking-[-0.02em] text-ink-800 md:text-[1.375rem]">{meta.intro}</p>
            </FadeUp>

            <SectionIndex index={1} label="Warning signs" className="mt-16 md:mt-20" />
            <h2 className="display-md mt-6">{meta.signsHeading}</h2>
            <Stagger className="mt-10 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2">
              {meta.signs.map((sign, i) => (
                <div key={sign} className="group relative border-b border-r border-line p-6 transition-colors hover:bg-paper">
                  <span className="absolute left-0 top-0 h-[2px] w-0 bg-brand-600 transition-all duration-500 group-hover:w-full" aria-hidden="true" />
                  <span className="label-mono text-[0.6875rem] text-ink-400">{String(i + 1).padStart(2, '0')}</span>
                  <p className="mt-4 leading-relaxed text-ink-800">{sign}</p>
                </div>
              ))}
            </Stagger>

            <SectionIndex index={2} label="The operation" className="mt-16 md:mt-20" />
            <h2 className="display-md mt-6">About {service.title}</h2>
            <div className="prose-clinic mt-8">
              {paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <h2 className="mt-14 font-display text-2xl font-semibold tracking-[-0.03em] text-ink-900">What Treatment Includes</h2>
            <ul className="mt-6 border-t border-line">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-4 border-b border-line py-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-brand-50 text-brand-600">
                    <Check size={14} aria-hidden="true" />
                  </span>
                  <span className="text-ink-700">{b}</span>
                </li>
              ))}
            </ul>

            <SectionIndex index={3} label="Your visit" className="mt-16 md:mt-20" />
            <h2 className="display-md mt-6">How a Consultation Works</h2>
            <ol className="mt-10 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2">
              {consultationSteps.map((step, i) => (
                <li key={step} className="border-b border-r border-line p-6">
                  <span className="font-display text-4xl font-semibold tracking-[-0.05em] text-brand-600">{String(i + 1).padStart(2, '0')}</span>
                  <p className="mt-4 leading-relaxed text-ink-700">{step}</p>
                </li>
              ))}
            </ol>

            <h2 className="mt-14 font-display text-2xl font-semibold tracking-[-0.03em] text-ink-900">
              Patients from Cuttack, Bhubaneswar and Across Odisha
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-600">{meta.localNote}</p>

            <SectionIndex index={4} label="Questions" className="mt-16 md:mt-20" />
            <h2 className="display-md mb-8 mt-6">Frequently Asked Questions</h2>
            <FaqAccordion faqs={meta.faqs} />

            {articles.length > 0 && (
              <>
                <h2 className="mt-14 font-display text-2xl font-semibold tracking-[-0.03em] text-ink-900">Read More</h2>
                <ul className="mt-6 border-t border-line">
                  {articles.map((a) => (
                    <li key={a.slug} className="border-b border-line">
                      <Link href={`/blogs/${a.slug}`} className="group flex items-center justify-between gap-6 py-5">
                        <span>
                          <span className="block label-mono text-[0.6875rem] text-brand-600">{a.category}</span>
                          <span className="mt-1 block font-display text-lg font-semibold tracking-[-0.025em] text-ink-900 transition-colors group-hover:text-brand-600">
                            {a.title}
                          </span>
                        </span>
                        <ArrowRight size={18} className="shrink-0 text-ink-400 transition-all duration-300 group-hover:-rotate-45 group-hover:text-brand-600" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <ClinicCard whatsappMessage={waMessage} />
            <div className="card p-6">
              <h2 className="label-mono text-ink-500">Other Specialities</h2>
              <ul className="mt-4">
                {others.map((s) => (
                  <li key={s.slug} className="border-t border-line first:border-t-0">
                    <Link href={`/services/${s.slug}`} className="group flex items-center justify-between gap-3 py-3 font-medium text-ink-900 transition-colors hover:text-brand-600">
                      {s.title}
                      <ArrowRight size={15} className="shrink-0 text-ink-400 transition-all duration-300 group-hover:-rotate-45 group-hover:text-brand-600" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTABand title="Early diagnosis saves lives." highlight={`Book a ${service.title.toLowerCase()} consultation.`} whatsappMessage={waMessage} />
    </div>
  )
}
