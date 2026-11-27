import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { WhatsAppIcon } from './icons'
import { ECGLine } from './ecg-line'
import { OpenStatus } from './open-status'

/** Full-bleed dark closing statement with the heartbeat line, used at the end of most pages. */
export function CTABand({
  title = 'Early diagnosis saves lives.',
  highlight = 'Don’t wait to get checked.',
  description = 'If you have a lump, an ulcer that won’t heal or an abnormal report, book a consultation. Bring all your reports and scans.',
  whatsappMessage = 'Hello Dr. Misra, I would like to book a consultation.',
}: {
  title?: string
  highlight?: string
  description?: string
  whatsappMessage?: string
}) {
  return (
    <section className="dark-scope frame relative overflow-hidden bg-ink-900 text-ink-300">
      <div className="absolute inset-x-0 top-1/2 h-32 -translate-y-1/2 text-brand-500 opacity-60" aria-hidden="true">
        <ECGLine />
      </div>
      <div className="container-x relative py-24 md:py-32">
        <p className="mb-10 flex items-center gap-2 label-mono text-brand-300">
          <span className="h-[7px] w-[7px] bg-brand-400" aria-hidden="true" />
          Next step
        </p>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_minmax(0,1fr)] lg:items-end">
          <h2 className="display-lg text-white">
            {title} <span className="text-brand-400">{highlight}</span>
          </h2>
          <div>
            <p className="text-lg leading-relaxed">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary btn-lg">
                Book consultation <ArrowRight size={16} />
              </Link>
              <a href={getWhatsAppUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn-ghost-light btn-lg">
                <WhatsAppIcon className="h-4 w-4 text-pulse" /> WhatsApp
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6">
              <OpenStatus />
              <a href={`tel:${siteConfig.phone}`} className="fx-phone label-mono flex items-center gap-2 text-white hover:text-brand-300">
                <Phone size={14} /> {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
