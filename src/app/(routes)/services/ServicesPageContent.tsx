import Link from 'next/link'
import { Activity, ArrowRight, Bone, Check, Phone, Ribbon, ScanFace, Stethoscope, Users, type LucideIcon } from 'lucide-react'
import { services } from '@/features/services/services.data'
import { siteConfig } from '@/config/site'
import { PageHero } from '@/components/shared/page-hero'
import { CTABand } from '@/components/shared/cta-band'
import { FadeUp } from '@/components/shared/reveal'

const icons: Record<string, LucideIcon> = {
  ribbon: Ribbon,
  'scan-face': ScanFace,
  stethoscope: Stethoscope,
  activity: Activity,
  bone: Bone,
  users: Users,
}

/** Specialities index: each service as a numbered editorial block (anchors kept for old #links). Server-rendered. */
export function ServicesPageContent() {
  return (
    <div>
      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Specialities' }]}
        label="Expert Surgical Oncology"
        title="Our Specialities &"
        highlight="Services"
        lead="Comprehensive cancer surgery with precision, guided by multidisciplinary tumour board review at AHPGIC, Cuttack."
        actions={
          <a href={`tel:${siteConfig.phone}`} className="fx-phone btn-primary btn-lg">
            <Phone size={16} /> Call {siteConfig.phoneDisplay}
          </a>
        }
      />

      <section aria-labelledby="services-list-heading" className="frame bg-white">
        <h2 id="services-list-heading" className="sr-only">
          All Cancer Surgery Services
        </h2>
        <div className="container-x">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? Stethoscope
            return (
              <article
                key={service.id}
                id={service.slug}
                aria-labelledby={`service-${service.id}-heading`}
                className="grid scroll-mt-28 grid-cols-1 gap-10 border-b border-line py-16 last:border-b-0 md:py-20 lg:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1fr)] lg:gap-12"
              >
                <span className="label-mono pt-2 text-ink-400">{String(i + 1).padStart(2, '0')}</span>
                <FadeUp>
                  <span className="icon-tile">
                    <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 id={`service-${service.id}-heading`} className="display-md mt-6">
                    {service.title}
                  </h3>
                  <p className="mt-5 text-lg leading-relaxed text-ink-500">{service.shortDesc}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href={`/services/${service.slug}`} className="btn-primary">
                      Full details <ArrowRight size={16} />
                    </Link>
                    <a href={`tel:${siteConfig.phone}`} className="fx-phone btn-secondary" aria-label={`Enquire about ${service.title}`}>
                      <Phone size={15} /> Enquire
                    </a>
                  </div>
                </FadeUp>
                <FadeUp delay={0.08}>
                  <div className="prose-clinic">
                    {service.fullDesc.split(/\n\n/).map((para, pi) => (
                      <p key={pi}>{para}</p>
                    ))}
                  </div>
                  <ul className="mt-8 border-t border-line" aria-label={`Benefits of ${service.title}`}>
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3 border-b border-line py-3 text-[0.9375rem] text-ink-700">
                        <Check size={15} className="mt-1 shrink-0 text-brand-600" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 label-mono text-[0.6875rem] text-ink-500">All cases reviewed by multidisciplinary tumour board · AHPGIC, Cuttack</p>
                </FadeUp>
              </article>
            )
          })}
        </div>
      </section>

      <CTABand
        title="Not sure which service you need?"
        highlight="Start with a consultation."
        description="Book a consultation with Dr. Nitya Nutan Misra for an expert evaluation and personalized treatment plan."
      />
    </div>
  )
}
