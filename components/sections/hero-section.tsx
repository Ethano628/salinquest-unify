"use client"

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Award, Truck } from 'lucide-react'
import { motion } from 'framer-motion'

export function HeroSection() {
  const t = useTranslations('hero')

  const features = [
    {
      icon: Shield,
      title: t('features.quality.title'),
      description: t('features.quality.description')
    },
    {
      icon: Award,
      title: t('features.certified.title'),
      description: t('features.certified.description')
    },
    {
      icon: Truck,
      title: t('features.shipping.title'),
      description: t('features.shipping.description')
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-wire-mesh.jpg"
          alt="High-quality stainless steel wire mesh manufacturing facility"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm text-primary border border-primary/20"
              >
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                {t('badge')}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl lg:text-6xl font-bold leading-tight"
              >
                {t('title')}
                <span className="text-gradient block mt-2">
                  {t('titleHighlight')}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
              >
                {t('description')}
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="btn-industrial group">
                <Link href="/products" className="flex items-center">
                  {t('cta.products')}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/contact">
                  {t('cta.quote')}
                </Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Product Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="space-y-4"
              >
                <div className="card-industrial p-4 bg-white/80 backdrop-blur">
                  <Image
                    src="/images/stainless-steel-mesh.jpg"
                    alt="Stainless steel wire mesh - corrosion resistant"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover rounded-md"
                  />
                  <h4 className="font-semibold mt-3 text-sm">Stainless Steel Mesh</h4>
                  <p className="text-xs text-muted-foreground">304/316 Grade</p>
                </div>
                <div className="card-industrial p-4 bg-white/80 backdrop-blur">
                  <Image
                    src="/images/welded-mesh.jpg"
                    alt="Welded wire mesh panels for construction"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover rounded-md"
                  />
                  <h4 className="font-semibold mt-3 text-sm">Welded Mesh</h4>
                  <p className="text-xs text-muted-foreground">High Strength</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="space-y-4 mt-8"
              >
                <div className="card-industrial p-4 bg-white/80 backdrop-blur">
                  <Image
                    src="/images/galvanized-mesh.jpg"
                    alt="Galvanized wire mesh for outdoor applications"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover rounded-md"
                  />
                  <h4 className="font-semibold mt-3 text-sm">Galvanized Mesh</h4>
                  <p className="text-xs text-muted-foreground">Corrosion Resistant</p>
                </div>
                <div className="card-industrial p-4 bg-white/80 backdrop-blur">
                  <Image
                    src="/images/filter-mesh.jpg"
                    alt="Fine filter mesh for industrial filtration"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover rounded-md"
                  />
                  <h4 className="font-semibold mt-3 text-sm">Filter Mesh</h4>
                  <p className="text-xs text-muted-foreground">Precision Filtration</p>
                </div>
              </motion.div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl"
            >
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-xs opacity-90">Years Experience</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="absolute -top-6 -right-6 bg-white border border-border rounded-2xl p-6 shadow-xl"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-xs text-muted-foreground">Countries Served</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}