import Link from 'next/link'
import { Phone } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { WhatsAppIcon } from '@/components/shared/icons'

/** Mobile-only bottom bar: Call · WhatsApp · Book. Desktop has these in the header instead, so nothing floats over content. */
export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-2.5 py-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md md:hidden">
      <div className="flex items-center gap-2">
        <a href={`tel:${siteConfig.phone}`} className="fx-phone btn-outline h-11 flex-1 px-0 text-xs">
          <Phone size={15} /> Call
        </a>
        <a
          href={getWhatsAppUrl('Hello Dr. Misra, I would like to book a consultation.')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp h-11 flex-1 px-0 text-xs"
        >
          <WhatsAppIcon className="h-4 w-4" /> WhatsApp
        </a>
        <Link href="/contact" className="btn-primary h-11 flex-1 px-0 text-xs">
          Book
        </Link>
      </div>
    </div>
  )
}
