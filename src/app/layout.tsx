import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { FloatingCTA } from '@/components/layout/FloatingCTA'
import { StructuredData } from '@/components/seo/StructuredData'
import { Analytics } from '@/components/seo/Analytics'
import { SITE_URL, siteConfig } from '@/config/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name, url: `${SITE_URL}/about` }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  verification: {
    google: siteConfig.googleVerification,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#157f72" />
        <meta name="geo.region" content="IN-OR" />
        <meta name="geo.placename" content="Cuttack, Odisha, India" />
        <StructuredData />
      </head>
      <body className="antialiased pb-16 md:pb-0">
        <ScrollToTop />
        <Navbar />
        <main className="page-wrapper">{children}</main>
        <Footer />
        <FloatingCTA />
        <Analytics />
      </body>
    </html>
  )
}
