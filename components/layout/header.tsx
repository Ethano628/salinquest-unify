"use client"

import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { useState } from 'react'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { motion } from 'framer-motion'

const navigation = [
  { name: 'home', href: '/' },
  { 
    name: 'products', 
    href: '/products',
    children: [
      { name: 'wireMesh', href: '/products/wire-mesh' },
      { name: 'hardware', href: '/products/hardware' },
      { name: 'custom', href: '/products/custom' },
    ]
  },
  { name: 'applications', href: '/applications' },
  { 
    name: 'technical', 
    href: '/tech',
    children: [
      { name: 'calculators', href: '/tech/calculators' },
      { name: 'encyclopedia', href: '/tech/encyclopedia' },
    ]
  },
  { name: 'capabilities', href: '/capabilities' },
  { name: 'certificates', href: '/certificates' },
  { name: 'news', href: '/news' },
  { name: 'contact', href: '/contact' },
]

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
]

export function Header() {
  const locale = useLocale()
  const t = useTranslations('navigation')
  const [isOpen, setIsOpen] = useState(false)

  const currentLang = languages.find(lang => lang.code === locale) || languages[0]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-to-r from-primary to-primary-glow rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-xl text-gradient">Salin</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        className="flex items-center space-x-1 hover:text-primary transition-colors"
                      >
                        <span>{t(item.name)}</span>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.name} asChild>
                          <Link 
                            href={`/${locale}${child.href}`}
                            className="w-full cursor-pointer"
                          >
                            {t(child.name)}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link 
                    href={`/${locale}${item.href}`}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {t(item.name)}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">{currentLang.flag}</span>
                  <span className="hidden md:inline">{currentLang.name}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem key={lang.code} asChild>
                    <Link 
                      href={`/${lang.code}`}
                      className="flex items-center space-x-2 w-full cursor-pointer"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button */}
            <Button className="btn-industrial hidden sm:inline-flex">
              <Link href={`/${locale}/contact`}>
                {t('getQuote')}
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link 
                        href={`/${locale}${item.href}`}
                        className="block text-lg font-medium hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {t(item.name)}
                      </Link>
                      {item.children && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.children.map((child) => (
                            <Link 
                              key={child.name}
                              href={`/${locale}${child.href}`}
                              className="block text-muted-foreground hover:text-primary transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {t(child.name)}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <Button className="btn-industrial mt-6" onClick={() => setIsOpen(false)}>
                    <Link href={`/${locale}/contact`}>
                      {t('getQuote')}
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}