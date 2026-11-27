'use client'

import Script from 'next/script'
import { useEffect } from 'react'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

/** Fire a GA4 event if GA is loaded; safe to call anywhere. */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  window.gtag?.('event', name, { page_path: window.location.pathname, ...params })
}

/**
 * GA4 loads only when NEXT_PUBLIC_GA_ID is set. One delegated listener tracks
 * every call / WhatsApp / email link on the site, including ones added later.
 */
export function Analytics() {
  useEffect(() => {
    if (!GA_ID) return
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a')
      if (!a) return
      const href = a.getAttribute('href') || ''
      const event = href.startsWith('tel:')
        ? 'click_call'
        : /wa\.me\/|api\.whatsapp\.com/.test(href)
          ? 'click_whatsapp'
          : href.startsWith('mailto:')
            ? 'click_email'
            : null
      if (event) trackEvent(event, { link_url: href.split('?')[0] })
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  if (!GA_ID) return null
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  )
}
