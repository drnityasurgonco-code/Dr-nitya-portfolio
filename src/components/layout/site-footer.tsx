import Link from 'next/link'
import { ArrowUpRight, Phone } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { mainNav } from '@/config/navigation'
import { services } from '@/features/services/services.data'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { Brand } from '@/components/shared/brand'
import { OpenStatus } from '@/components/shared/open-status'

const locations = [
  { label: 'Cuttack', href: '/doctor-in-cuttack' },
  { label: 'Bhubaneswar', href: '/doctor-in-bhubaneswar' },
  { label: 'Across Odisha', href: '/clinic-in-odisha' },
]

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="dark-scope frame bg-ink-950 pb-24 text-ink-400 md:pb-0" role="contentinfo">
      <div className="container-x pb-14 pt-20 lg:pt-28">
        {/* Statement + OPD hours */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_minmax(0,1fr)] lg:items-start">
          <div>
            <Brand inverted />
            <p className="mt-10 display-md text-white">
              Cancer surgery in Cuttack, <span className="text-brand-400">explained clearly.</span>
            </p>
            <p className="mt-5 max-w-lg text-[0.9375rem] leading-relaxed">
              {siteConfig.specialization} · {siteConfig.designation}, {siteConfig.employer}, Cuttack.
            </p>
          </div>
          <div className="panel-dark p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
              <p className="font-display text-lg font-semibold text-white">OPD hours</p>
              <OpenStatus />
            </div>
            <dl className="mt-5 divide-y divide-white/10 border-t border-white/10">
              {siteConfig.hours.map((h) => (
                <div key={h.label} className="flex flex-wrap justify-between gap-x-4 gap-y-1 py-3 text-sm">
                  <dt>{h.label}</dt>
                  <dd className="font-mono text-white">{h.time}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a href={`tel:${siteConfig.phone}`} className="fx-phone btn-primary">
                <Phone size={15} /> Call
              </a>
              <a href={getWhatsAppUrl('Hello Dr. Misra, I would like to book a consultation.')} target="_blank" rel="noopener noreferrer" className="btn-ghost-light">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Columns */}
        <div className="mt-20 grid grid-cols-1 gap-10 border-t border-white/[0.07] pt-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_minmax(0,1fr)_1.3fr]">
          <div>
            <p className="mb-5 flex items-center gap-2 label-mono text-brand-300">
              <span className="h-[7px] w-[7px] bg-brand-400" aria-hidden="true" />
              Specialities
            </p>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 text-[0.9375rem] sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="transition-colors hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-5 flex items-center gap-2 label-mono text-brand-300">
              <span className="h-[7px] w-[7px] bg-brand-400" aria-hidden="true" />
              Site
            </p>
            <ul className="space-y-3 text-[0.9375rem]">
              {mainNav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-5 flex items-center gap-2 label-mono text-brand-300">
              <span className="h-[7px] w-[7px] bg-brand-400" aria-hidden="true" />
              Visit
            </p>
            <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-[0.9375rem] leading-relaxed transition-colors hover:text-white">
              {siteConfig.address}
            </a>
            <p className="mt-4 text-[0.9375rem]">
              <a href={`tel:${siteConfig.phone}`} className="fx-phone text-white hover:text-brand-300">
                {siteConfig.phoneDisplay}
              </a>
            </p>
            <p className="mt-2 text-[0.9375rem]">
              <a href={`mailto:${siteConfig.email}`} className="break-all hover:text-white">
                {siteConfig.email}
              </a>
            </p>
            <a
              href="https://www.saishreepolyclinic.com/"
              target="_blank"
              rel="noopener"
              className="mt-5 inline-flex items-center gap-1 text-[0.9375rem] font-medium text-brand-300 hover:text-white"
            >
              Consults at Sai Shree Polyclinic <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Patients travelling in */}
      <div className="border-t border-white/[0.07]">
        <div className="container-x flex flex-col gap-4 py-6 text-[0.9375rem] lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="label-mono text-brand-300">Patients from</span>
            {locations.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
          <Link href="/privacy-policy" className="transition-colors hover:text-white">
            Privacy policy
          </Link>
        </div>
      </div>
      <div className="border-t border-white/[0.07]">
        <div className="container-x flex flex-col gap-2 py-6 label-mono text-[0.6875rem] text-ink-500 sm:flex-row sm:justify-between">
          <span>© {year} Dr. Nitya Nutan Misra · Cuttack, Odisha</span>
          <span>In an emergency, go to the nearest hospital emergency department.</span>
        </div>
      </div>
    </footer>
  )
}
