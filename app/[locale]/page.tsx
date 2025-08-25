import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { HeroSection } from '@/components/sections/hero-section'
import { FeaturedProducts } from '@/components/sections/featured-products'
import { IndustryApplications } from '@/components/sections/industry-applications'
import { WhyChooseUs } from '@/components/sections/why-choose-us'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { LatestNews } from '@/components/sections/latest-news'
import { ContactCTASection } from '@/components/sections/contact-cta-section'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata' })
  
  return {
    title: t('home.title'),
    description: t('home.description'),
    keywords: 'wire mesh, stainless steel mesh, galvanized mesh, welded mesh, crimped mesh, filter mesh, hardware accessories, metal mesh supplier, mesh manufacturer, industrial mesh, construction mesh, security mesh, architectural mesh',
    openGraph: {
      title: t('home.title'),
      description: t('home.description'),
      type: 'website',
      locale: locale.replace('-', '_'),
      images: [
        {
          url: '/images/hero-wire-mesh.jpg',
          width: 1200,
          height: 630,
          alt: 'Salin Wire Mesh Products - High Quality Industrial Mesh Solutions',
        },
      ],
    },
    alternates: {
      canonical: `https://salin.example.com/${locale}`,
      languages: {
        'en': 'https://salin.example.com/en',
        'zh-CN': 'https://salin.example.com/zh-CN',
        'es': 'https://salin.example.com/es',
        'de': 'https://salin.example.com/de',
        'ar': 'https://salin.example.com/ar',
      },
    },
  }
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Salin Wire Mesh & Hardware - Leading Global Supplier",
            "description": "Professional manufacturer of stainless steel wire mesh, galvanized mesh, welded mesh, and hardware accessories. Custom solutions for industrial applications worldwide.",
            "url": "https://salin.example.com",
            "mainEntity": {
              "@type": "Organization",
              "name": "Salin Wire Mesh & Hardware",
              "url": "https://salin.example.com",
              "logo": "https://salin.example.com/images/logo.png",
              "foundingDate": "2010",
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Wire Mesh & Hardware Products",
                "itemListElement": [
                  {
                    "@type": "OfferCatalog",
                    "name": "Stainless Steel Wire Mesh",
                    "description": "High-quality stainless steel mesh for filtration, construction, and industrial applications"
                  },
                  {
                    "@type": "OfferCatalog", 
                    "name": "Galvanized Wire Mesh",
                    "description": "Corrosion-resistant galvanized mesh for outdoor and industrial use"
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Welded Wire Mesh",
                    "description": "Strong and durable welded mesh panels for construction and security"
                  }
                ]
              }
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://salin.example.com"
                }
              ]
            }
          })
        }}
      />

      <HeroSection />
      <FeaturedProducts />
      <IndustryApplications />
      <WhyChooseUs />
      <TestimonialsSection />
      <LatestNews />
      <ContactCTASection />
    </div>
  )
}