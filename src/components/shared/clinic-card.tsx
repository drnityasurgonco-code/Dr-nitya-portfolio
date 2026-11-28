import Link from 'next/link'
import { ArrowRight, MapPin, Phone } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { WhatsAppIcon } from './icons'
import { OpenStatus } from './open-status'

/** Sticky sidebar card: clinic address, live OPD status, hours and booking actions. */
export function ClinicCard({ whatsappMessage }: { whatsappMessage?: string }) {
  return (
    <div className="panel-dark dark-scope p-6 text-ink-300 md:p-7">
      <div className="flex items-center justify-between gap-3">
        <p className="label-mono text-brand-300">Clinic</p>
        <OpenStatus compact />
      </div>
      <p className="mt-5 font-display text-xl font-semibold tracking-[-0.03em] text-white">{siteConfig.hospital}</p>
      <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-2 flex items-start gap-2 text-sm leading-relaxed transition-colors hover:text-white">
        <MapPin size={15} className="mt-0.5 shrink-0 text-brand-400" aria-hidden="true" />
        {siteConfig.address}
      </a>
      <dl className="mt-5 divide-y divide-white/10 border-y border-white/10 text-sm">
        {siteConfig.hours.map((h) => (
          <div key={h.label} className="flex justify-between gap-3 py-2.5">
            <dt>{h.label}</dt>
            <dd className="font-mono text-white">{h.time}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-6 grid grid-cols-1 gap-3">
        <Link href="/contact" className="btn-primary w-full">
          Book consultation <ArrowRight size={16} />
        </Link>
        <div className="grid grid-cols-2 gap-3">
          <a href={`tel:${siteConfig.phone}`} className="fx-phone btn-ghost-light btn-sm w-full">
            <Phone size={14} /> Call
          </a>
          <a
            href={getWhatsAppUrl(whatsappMessage ?? 'Hello Dr. Misra, I would like to book a consultation.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-light btn-sm w-full"
          >
            <WhatsAppIcon className="h-3.5 w-3.5 text-pulse" /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
