import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

// Rate limiting (simple in-memory store)
const rateLimit = new Map<string, { count: number; resetTime: number }>()

const leadSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().min(2).max(100),
  phone: z.string().optional(),
  country: z.string().min(2).max(50),
  products: z.array(z.string()).min(1),
  message: z.string().min(10).max(1000),
  recaptchaToken: z.string().min(1),
  honeypot: z.string().optional() // Should be empty for real users
})

// Simple rate limiting
function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5

  const record = rateLimit.get(ip)
  
  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }
  
  if (record.count >= maxRequests) {
    return false
  }
  
  record.count++
  return true
}

// Verify reCAPTCHA
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY
  if (!secretKey) return true // Skip verification if not configured

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secretKey}&response=${token}`
    })
    
    const data = await response.json()
    return data.success && data.score > 0.5
  } catch {
    return false
  }
}

// Send notification email
async function sendNotificationEmail(data: any) {
  const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Lead from Salin Website</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f8fafc; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #1e40af; }
        .value { margin-top: 5px; }
        .products { background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #1e40af; }
        .message { background: white; padding: 15px; border-radius: 6px; white-space: pre-wrap; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>🔥 New Lead from Salin Website</h2>
          <p>A potential customer has submitted an inquiry</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">👤 Contact Information</div>
            <div class="value">
              <strong>Name:</strong> ${data.name}<br>
              <strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a><br>
              <strong>Company:</strong> ${data.company}<br>
              ${data.phone ? `<strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a><br>` : ''}
              <strong>Country:</strong> ${data.country}
            </div>
          </div>
          
          <div class="field">
            <div class="label">🏭 Products of Interest</div>
            <div class="products">
              ${data.products.map((product: string) => `• ${product}`).join('<br>')}
            </div>
          </div>
          
          <div class="field">
            <div class="label">💬 Message</div>
            <div class="message">${data.message}</div>
          </div>
          
          <div class="field">
            <div class="label">⏰ Submission Time</div>
            <div class="value">${new Date().toLocaleString()}</div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: 'sales@salin.com',
    subject: `🔥 New Lead: ${data.name} from ${data.company}`,
    html: emailHtml,
    replyTo: data.email
  })

  // Send auto-reply to customer
  const autoReplyHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Thank you for contacting Salin</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; padding: 20px; border-radius: 8px; text-align: center; }
        .content { padding: 20px; }
        .cta { background: #1e40af; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Thank You for Your Inquiry!</h2>
          <p>Salin Wire Mesh & Hardware</p>
        </div>
        <div class="content">
          <p>Dear ${data.name},</p>
          
          <p>Thank you for contacting Salin Wire Mesh & Hardware. We have received your inquiry about our products and services.</p>
          
          <p>Our sales team will review your requirements and respond within 24 hours with:</p>
          <ul>
            <li>✅ Detailed product specifications</li>
            <li>✅ Competitive pricing</li>
            <li>✅ Custom solutions if needed</li>
            <li>✅ Delivery timeline</li>
          </ul>
          
          <p>For urgent inquiries, please contact us directly:</p>
          <p>📞 <strong>Phone:</strong> +86-318-5289812<br>
          📧 <strong>Email:</strong> sales@salin.com<br>
          💬 <strong>WhatsApp:</strong> +86-138-3289-5678</p>
          
          <a href="https://salin.example.com/products" class="cta">Browse Our Products</a>
          
          <p>Best regards,<br>
          <strong>Salin Sales Team</strong><br>
          Salin Wire Mesh & Hardware Co., Ltd.</p>
        </div>
      </div>
    </body>
    </html>
  `

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: data.email,
    subject: 'Thank you for contacting Salin - We\'ll respond within 24 hours',
    html: autoReplyHtml
  })
}

// Send to CRM webhook (optional)
async function sendToCRM(data: any) {
  const webhookUrl = process.env.CRM_WEBHOOK_URL
  if (!webhookUrl) return

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        source: 'website',
        timestamp: new Date().toISOString()
      })
    })
  } catch (error) {
    console.error('CRM webhook failed:', error)
    // Don't fail the entire request if CRM is down
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    
    // Honeypot check - if filled, it's likely a bot
    if (body.honeypot && body.honeypot.trim() !== '') {
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      )
    }

    const data = leadSchema.parse(body)

    // Verify reCAPTCHA
    const isValidRecaptcha = await verifyRecaptcha(data.recaptchaToken)
    if (!isValidRecaptcha) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      )
    }

    // Send notifications
    await Promise.all([
      sendNotificationEmail(data),
      sendToCRM(data)
    ])

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your inquiry. We will contact you within 24 hours.' 
    })

  } catch (error) {
    console.error('Lead submission error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}