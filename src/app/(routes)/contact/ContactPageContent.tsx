import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { PageHero } from '@/components/shared/page-hero'
import { SectionIndex } from '@/components/shared/section-index'
import { OpenStatus } from '@/components/shared/open-status'
import { ClinicMap } from '@/components/shared/clinic-map'
import { WhatsAppIcon } from '@/components/shared/icons'
import { AppointmentForm } from '@/components/contact/appointment-form'

const rows = [
  { icon: Phone, label: 'Phone / WhatsApp', value: siteConfig.phoneDisplay, sub: 'Call or WhatsApp for appointments', href: `tel:${siteConfig.phone}` },
  { icon: Mail, label: 'Email', value: siteConfig.email, sub: 'Send your query via email', href: `mailto:${siteConfig.email}` },
  { icon: MapPin, label: 'Clinic Address', value: siteConfig.hospital, sub: siteConfig.address, href: siteConfig.mapsUrl, external: true },
]

/** Contact: server shell (info, hours, map) with the appointment form as a client island. */
export function ContactPageContent() {
  return (
    <div>
      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Contact' }]}
        label="Book a Consultation"
        title="Get in"
        highlight="Touch"
        lead="Reach Dr. Nitya Nutan Misra at his clinic in Cuttack for cancer consultations, second opinions, or general enquiries."
        actions={
          <>
            <a href={`tel:${siteConfig.phone}`} className="fx-phone btn-primary btn-lg">
              <Phone size={16} /> {siteConfig.phoneDisplay}
            </a>
            <a href={getWhatsAppUrl('Hello Dr. Misra, I would like to book a consultation.')} target="_blank" rel="noopener noreferrer" className="btn-ghost-light btn-lg">
              <WhatsAppIcon className="h-4 w-4 text-pulse" /> WhatsApp
            </a>
          </>
        }
      />

      <section id="appointment" aria-labelledby="contact-section-heading" className="frame section scroll-mt-24 bg-white">
        <h2 id="contact-section-heading" className="sr-only">
          Contact Information and Form
        </h2>
        <div className="container-x">
          <SectionIndex index={1} label="Appointment" meta={<OpenStatus tone="light" />} />
          <div className="mt-12 grid grid-cols-1 border border-line-strong lg:grid-cols-[minmax(0,1fr)_1.25fr]">
            {/* Info */}
            <div className="flex flex-col border-b border-line-strong lg:border-b-0 lg:border-r">
              {rows.map(({ icon: Icon, label, value, sub, href, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="group grid grid-cols-[2.75rem_minmax(0,1fr)_1.25rem] items-start gap-4 border-b border-line px-6 py-6 transition-colors hover:bg-paper md:px-8"
                >
                  <span className="icon-tile">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block label-mono text-[0.6875rem] text-ink-500">{label}</span>
                    <span className="mt-1 block break-words font-display text-lg font-semibold tracking-[-0.025em] text-ink-900">{value}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink-500">{sub}</span>
                  </span>
                  <ArrowRight size={16} className="mt-1 text-ink-400 transition-all duration-300 group-hover:-rotate-45 group-hover:text-brand-600" aria-hidden="true" />
                </a>
              ))}
              <div className="px-6 py-6 md:px-8">
                <h3 className="label-mono text-ink-500">OPD Hours</h3>
                <dl className="mt-4 border-t border-line text-sm">
                  {siteConfig.hours.map(({ label, time }) => (
                    <div key={label} className="flex flex-wrap items-center justify-between gap-2 border-b border-line py-3">
                      <dt className="text-ink-600">{label}</dt>
                      <dd className="font-mono text-ink-900">{time}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 text-xs text-ink-400">* OPD schedule subject to change. Call ahead to confirm.</p>
              </div>
            </div>

            {/* Form */}
            <div className="p-6 md:p-10">
              <h2 className="display-md text-[clamp(1.75rem,3vw,2.5rem)]">Send a Message</h2>
              <p className="mb-8 mt-3 text-ink-500">Fill in your details and Dr. Misra&apos;s team will respond within 24 hours.</p>
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section aria-labelledby="map-heading" className="frame border-t border-line bg-paper">
        <div className="container-x py-16 md:py-20">
          <SectionIndex index={2} label="Location" meta={<span>Mangalabag, Cuttack 753001</span>} />
          <h2 id="map-heading" className="display-md mt-6">
            Find Us at our <span className="text-brand-600">Clinic in Cuttack</span>
          </h2>
          <ClinicMap
            title="Clinic Location - Sai Shree Polyclinic, Mangalabag, Cuttack, Odisha"
            className="mt-10 h-[320px] w-full overflow-hidden border border-line-strong sm:h-[420px] lg:h-[480px]"
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={siteConfig.mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" aria-label="Get directions to the clinic on Google Maps">
              <MapPin size={15} /> Get Directions
            </a>
            <a href={`tel:${siteConfig.phone}`} className="fx-phone btn-secondary" aria-label="Call to confirm address">
              <Phone size={15} /> Call to Confirm
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
