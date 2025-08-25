import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { IndustryApplications } from "@/components/sections/industry-applications";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { LatestNews } from "@/components/sections/latest-news";
import { ContactCTASection } from "@/components/sections/contact-cta-section";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* SEO JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Salin Wire Mesh & Hardware",
            "url": "https://salin.example.com",
            "logo": "https://salin.example.com/images/logo.png",
            "description": "Leading manufacturer of stainless steel wire mesh, galvanized mesh, welded mesh, and hardware accessories for industrial applications worldwide.",
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
            }
          })
        }}
      />

      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <IndustryApplications />
        <WhyChooseUs />
        <TestimonialsSection />
        <LatestNews />
        <ContactCTASection />
      </main>
      <Footer />
    </div>
  )
}

export default Index;
