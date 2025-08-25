import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'

const intlMiddleware = createMiddleware({
  locales: ['en', 'zh-CN', 'es', 'de', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'always'
})

export default function middleware(req: NextRequest) {
  // Get user's preferred language from Accept-Language header
  const acceptLanguage = req.headers.get('Accept-Language')
  
  // Get country from Cloudflare or other geo headers
  const country = req.headers.get('CF-IPCountry') || req.headers.get('X-Country-Code')
  
  // Apply geo-based locale suggestions
  let suggestedLocale = 'en'
  if (country) {
    switch (country.toUpperCase()) {
      case 'CN': suggestedLocale = 'zh-CN'; break
      case 'ES': case 'MX': case 'AR': case 'CO': suggestedLocale = 'es'; break
      case 'DE': case 'AT': case 'CH': suggestedLocale = 'de'; break
      case 'SA': case 'AE': case 'EG': case 'MA': suggestedLocale = 'ar'; break
      default: suggestedLocale = 'en'
    }
  }
  
  // Store geo info in response headers for components to use
  const response = intlMiddleware(req)
  response.headers.set('X-User-Country', country || 'US')
  response.headers.set('X-Suggested-Locale', suggestedLocale)
  
  return response
}

export const config = {
  matcher: ['/', '/(zh-CN|es|de|ar|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
}