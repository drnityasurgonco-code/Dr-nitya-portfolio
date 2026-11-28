import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/config/site'

interface ClinicMapProps {
  title?: string
  className?: string
}

/**
 * Google Maps embed pinned to Sai Shree Poly Clinic's listing. The whole map is a link:
 * a click anywhere opens the clinic's Google Maps place page in a new tab.
 */
export function ClinicMap({ title = `Map: ${siteConfig.hospital}, Cuttack`, className = '' }: ClinicMapProps) {
  return (
    <div className={`group relative min-h-[16rem] ${className}`}>
      <iframe
        title={title}
        src={siteConfig.mapsEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      />
      <a
        href={siteConfig.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${siteConfig.hospital} in Google Maps (opens in a new tab)`}
        className="absolute inset-0 z-10 cursor-pointer focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-brand-600"
      >
        <span className="label-mono absolute bottom-4 right-4 inline-flex items-center gap-2 border border-line-strong bg-white px-4 py-2.5 text-ink-900 shadow-lift transition-colors group-hover:bg-brand-600 group-hover:text-white">
          Open in Google Maps
          <ArrowUpRight size={15} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </a>
    </div>
  )
}
