import type { Metadata } from 'next'
import { ContactForm } from '@/components/forms/contact-form'
import { ContactInfo } from '@/components/sections/contact-info'

export const metadata: Metadata = {
  title: 'Contact Salin Wire Mesh - Get Free Quote | Sales Inquiry',
  description: 'Contact our wire mesh experts for custom quotes, technical support, and product inquiries. Professional consultation available worldwide.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  )
}