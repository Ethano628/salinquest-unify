"use client"

import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Youtube, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  const productLinks = [
    { name: 'Stainless Steel Mesh', href: '/products/stainless-steel' },
    { name: 'Galvanized Mesh', href: '/products/galvanized' },
    { name: 'Welded Mesh', href: '/products/welded' },
    { name: 'Filter Mesh', href: '/products/filter' },
    { name: 'Hardware Accessories', href: '/products/hardware' },
    { name: 'Custom Solutions', href: '/products/custom' },
  ]

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Quality Control', href: '/quality' },
    { name: 'Certificates', href: '/certificates' },
    { name: 'Factory Tour', href: '/factory' },
    { name: 'News & Updates', href: '/news' },
    { name: 'Careers', href: '/careers' },
  ]

  const resourceLinks = [
    { name: 'Technical Center', href: '/tech' },
    { name: 'Mesh Calculator', href: '/tech/calculators' },
    { name: 'Wire Gauge Guide', href: '/tech/guides' },
    { name: 'Installation Guide', href: '/tech/installation' },
    { name: 'FAQ', href: '/faq' },
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
            Stay Updated with Latest Products
          </h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Get technical updates, new product announcements, and industry insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email address"
              className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/70"
            />
            <Button variant="secondary" className="whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 bg-gradient-to-r from-primary to-primary-glow rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold">S</span>
              </div>
              <span className="font-bold text-2xl text-gradient">Salin</span>
            </a>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Leading manufacturer of premium wire mesh and hardware solutions, serving global markets with innovative products and exceptional quality since 2010.
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
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm">
                  Mon-Fri: 8:00-18:00 (GMT+8)
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
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div>
            <h4 className="font-semibold mb-4">Applications</h4>
            <ul className="space-y-3">
              {applicationLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
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
            <a href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="/sitemap.xml" className="hover:text-primary transition-colors">
              Sitemap
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <span>Images: Unsplash, Pexels | Licensed under Creative Commons</span>
          </div>
        </div>
      </div>
    </footer>
  )
}