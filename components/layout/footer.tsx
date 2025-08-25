"use client"

import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  const locale = useLocale()
  const t = useTranslations('footer')

  const productLinks = [
    { name: 'Wire Mesh', href: '/products/wire-mesh' },
    { name: 'Stainless Steel Mesh', href: '/products/wire-mesh/stainless-steel' },
    { name: 'Galvanized Mesh', href: '/products/wire-mesh/galvanized' },
    { name: 'Welded Mesh', href: '/products/wire-mesh/welded' },
    { name: 'Hardware Accessories', href: '/products/hardware' },
    { name: 'Custom Solutions', href: '/products/custom' },
  ]

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Capabilities', href: '/capabilities' },
    { name: 'Certificates', href: '/certificates' },
    { name: 'Quality Control', href: '/quality' },
    { name: 'News & Updates', href: '/news' },
    { name: 'Careers', href: '/careers' },
  ]

  const resourceLinks = [
    { name: 'Technical Center', href: '/tech' },
    { name: 'Mesh Calculator', href: '/tech/calculators/mesh-opening' },
    { name: 'Wire Gauge Guide', href: '/tech/calculators/gauge-mm' },
    { name: 'Weight Calculator', href: '/tech/calculators/weight' },
    { name: 'Encyclopedia', href: '/tech/encyclopedia' },
    { name: 'Downloads', href: '/downloads' },
  ]

  const applicationLinks = [
    { name: 'Filtration', href: '/applications/filtration' },
    { name: 'Construction', href: '/applications/construction' },
    { name: 'Security', href: '/applications/security' },
    { name: 'Industrial', href: '/applications/industrial' },
    { name: 'Agricultural', href: '/applications/agricultural' },
    { name: 'Architectural', href: '/applications/architectural' },
  ]

  return (
    <footer className="bg-secondary/30 border-t">
      {/* Newsletter Section */}
      <div className="container-custom py-12">
        <div className="bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            {t('newsletter.title')}
          </h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            {t('newsletter.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder={t('newsletter.placeholder')}
              className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/70"
            />
            <Button variant="secondary" className="whitespace-nowrap">
              {t('newsletter.subscribe')}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 bg-gradient-to-r from-primary to-primary-glow rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold">S</span>
              </div>
              <span className="font-bold text-2xl text-gradient">Salin</span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t('company.description')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+86-318-5289812" className="text-sm hover:text-primary transition-colors">
                  +86-318-5289812
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:sales@salin.com" className="text-sm hover:text-primary transition-colors">
                  sales@salin.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-sm">
                  Industrial Zone, Anping County<br />
                  Hebei Province, China 053600
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com/salinwiremesh" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/salinwiremesh" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/salinwiremesh" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/salinwiremesh" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">{t('sections.products')}</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={`/${locale}${link.href}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">{t('sections.company')}</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={`/${locale}${link.href}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">{t('sections.resources')}</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={`/${locale}${link.href}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div>
            <h4 className="font-semibold mb-4">{t('sections.applications')}</h4>
            <ul className="space-y-3">
              {applicationLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={`/${locale}${link.href}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator className="container-custom" />

      {/* Bottom Bar */}
      <div className="container-custom py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span>© 2024 Salin Wire Mesh & Hardware. All rights reserved.</span>
            <Link href={`/${locale}/privacy`} className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href={`/${locale}/terms`} className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href={`/${locale}/sitemap`} className="hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <span>Images: Unsplash, Pexels | Licensed under Creative Commons</span>
          </div>
        </div>
      </div>
    </footer>
  )
}