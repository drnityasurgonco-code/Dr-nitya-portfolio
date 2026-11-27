import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckCircle2, MessageCircle, Phone } from 'lucide-react'
import { services } from '@/features/services/services.data'
import { blogPosts } from '@/features/blog/blog.data'
import { siteConfig } from '@/config/site'
import { absoluteUrl, breadcrumbSchema, ids, pageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/seo/StructuredData'
import { serviceSeo as seo } from '@/features/services/services.seo'

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

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  const meta = seo[slug]
  if (!service || !meta) notFound()

  const path = `/services/${service.slug}`
  const articles = blogPosts.filter((p) => p.category === meta.blogCategory)
  const others = services.filter((s) => s.slug !== service.slug)
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Hello Dr. Misra, I would like to book a consultation regarding ${service.title}.`,
  )}`

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

      {/* Hero */}
      <section className="inner-page-hero pt-[calc(var(--navbar-height)+3rem)] pb-16">
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-white/50 text-sm font-body mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white/80 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/80">{service.title}</span>
          </nav>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mb-5">
            {meta.h1}
          </h1>
          <p className="font-body text-white/70 text-base md:text-lg max-w-2xl mb-8 leading-relaxed">{service.shortDesc}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-[#052e2b] font-body font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-300"
            >
              <Phone className="w-4 h-4" /> Call {siteConfig.phoneDisplay}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white font-body font-semibold px-7 py-3.5 rounded-xl text-sm transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp to Book
            </a>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 bg-white">
        <div className="container-custom grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <p className="font-body text-neutral-700 text-lg leading-relaxed mb-8">{meta.intro}</p>

            <h2 className="font-display text-2xl font-bold text-neutral-900 mb-4">{meta.signsHeading}</h2>
            <ul className="space-y-2 mb-10">
              {meta.signs.map((sign) => (
                <li key={sign} className="flex items-start gap-3 font-body text-neutral-700">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-600 flex-shrink-0" />
                  {sign}
                </li>
              ))}
            </ul>

            <h2 className="font-display text-2xl font-bold text-neutral-900 mb-4">About {service.title}</h2>
            {service.fullDesc.split('\n\n').map((para, i) => (
              <p key={i} className="font-body text-neutral-600 leading-relaxed mb-4">{para}</p>
            ))}

            <h2 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">What Treatment Includes</h2>
            <ul className="space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="font-body text-neutral-700">{b}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">How a Consultation Works</h2>
            <ol className="list-decimal pl-5 space-y-2 font-body text-neutral-600">
              <li>Call or WhatsApp {siteConfig.phoneDisplay} to book an OPD slot at {siteConfig.hospital}, Cuttack.</li>
              <li>Bring all reports, scans and biopsy slides or blocks you already have.</li>
              <li>Dr. Misra examines you, explains the diagnosis and the surgical options.</li>
              <li>Complex cases are discussed at a multidisciplinary tumour board before treatment is finalised.</li>
            </ol>

            <h2 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">
              Patients from Cuttack, Bhubaneswar and Across Odisha
            </h2>
            <p className="font-body text-neutral-600 leading-relaxed">{meta.localNote}</p>

            <h2 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {meta.faqs.map((f) => (
                <div key={f.question} className="bg-neutral-50 rounded-2xl p-5 border border-neutral-100">
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">{f.question}</h3>
                  <p className="font-body text-neutral-600 leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>

            {articles.length > 0 && (
              <>
                <h2 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">Read More</h2>
                <ul className="space-y-2">
                  {articles.map((a) => (
                    <li key={a.slug}>
                      <Link href={`/blogs/${a.slug}`} className="inline-flex items-center gap-2 text-primary-700 font-body font-medium hover:underline">
                        <ArrowRight className="w-4 h-4" /> {a.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <aside className="space-y-6">
            <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
              <h2 className="font-display text-lg font-bold text-neutral-900 mb-3">Clinic</h2>
              <p className="font-body text-sm text-neutral-600 leading-relaxed mb-3">{siteConfig.address}</p>
              <ul className="font-body text-sm text-neutral-700 space-y-1 mb-4">
                {siteConfig.hours.map((h) => (
                  <li key={h.label} className="flex justify-between gap-2">
                    <span>{h.label}</span>
                    <span className="font-medium">{h.time}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary w-full justify-center">Book Appointment</Link>
            </div>
            <div className="bg-neutral-900 rounded-2xl p-6 text-white">
              <h2 className="font-display text-lg font-bold mb-4">Other Specialities</h2>
              <ul className="space-y-3">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4 text-primary-400" /> {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
