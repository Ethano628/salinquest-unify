import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Salin Wire Mesh & Hardware - Global Supplier',
  description: 'Leading manufacturer of stainless steel wire mesh, galvanized mesh, welded mesh, and hardware accessories. Custom solutions for industrial applications worldwide.',
  keywords: 'wire mesh, stainless steel mesh, galvanized mesh, welded mesh, hardware accessories, metal mesh supplier',
  authors: [{ name: 'Salin Industrial' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://salin.example.com',
    languages: {
      'en': 'https://salin.example.com/en',
      'zh-CN': 'https://salin.example.com/zh-CN',
      'es': 'https://salin.example.com/es',
      'de': 'https://salin.example.com/de',
      'ar': 'https://salin.example.com/ar',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://salin.example.com',
    siteName: 'Salin Wire Mesh & Hardware',
    title: 'Salin Wire Mesh & Hardware - Global Supplier',
    description: 'Leading manufacturer of stainless steel wire mesh, galvanized mesh, welded mesh, and hardware accessories.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Salin Wire Mesh Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salin Wire Mesh & Hardware - Global Supplier',
    description: 'Leading manufacturer of stainless steel wire mesh, galvanized mesh, welded mesh, and hardware accessories.',
    images: ['/images/og-image.jpg'],
  },
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()

  return (
    <html lang={locale || 'en'} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Salin Wire Mesh & Hardware",
              "url": "https://salin.example.com",
              "logo": "https://salin.example.com/images/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+86-318-5289812",
                "contactType": "sales",
                "areaServed": "Worldwide",
                "availableLanguage": ["English", "Chinese", "Spanish", "German", "Arabic"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Industrial Zone",
                "addressLocality": "Anping",
                "addressRegion": "Hebei",
                "postalCode": "053600",
                "addressCountry": "CN"
              },
              "sameAs": [
                "https://www.facebook.com/salinwiremesh",
                "https://www.linkedin.com/company/salinwiremesh",
                "https://twitter.com/salinwiremesh"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
            <Toaster />
            <Sonner />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}