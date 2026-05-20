'use client'

import { Phone, Calendar } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function FloatingCTA() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}`
  const callUrl = `tel:${siteConfig.phone}`
  
  return (
    <>
      {/* Floating WhatsApp Button (Desktop & Mobile) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 md:bottom-6 right-6 z-[99] bg-[#25D366] text-white p-3.5 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7 h-7"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
        <span className="absolute right-full mr-4 bg-white text-neutral-800 text-sm font-medium px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </a>

      {/* Mobile CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-neutral-200 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] flex items-center justify-around p-2">
        <a
          href={callUrl}
          className="flex flex-col items-center justify-center w-full py-1.5 text-neutral-600 hover:text-primary-600"
        >
          <Phone className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium uppercase tracking-wider">Call</span>
        </a>
        <div className="w-[1px] h-8 bg-neutral-200 mx-2" />
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center w-full py-1.5 text-neutral-600 hover:text-[#25D366]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mb-1"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          <span className="text-[10px] font-medium uppercase tracking-wider">WhatsApp</span>
        </a>
        <div className="w-[1px] h-8 bg-neutral-200 mx-2" />
        <a
          href="/contact"
          className="flex flex-col items-center justify-center w-full py-1.5 text-primary-600"
        >
          <Calendar className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium uppercase tracking-wider">Book</span>
        </a>
      </div>
    </>
  )
}
