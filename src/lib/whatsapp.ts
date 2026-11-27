import { siteConfig } from '@/config/site'

/** wa.me link with an optional pre-filled message. */
export function getWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
