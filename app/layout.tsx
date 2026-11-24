import { Analytics } from '@vercel/analytics/next'
import { Geist, Instrument_Serif, Geist_Mono } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' })
const instrumentSerif = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-instrument', display: 'swap' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'Swift Digital Services | Websites for Nigerian businesses',
  description: 'Web design and development in Kaduna, Nigeria. Fast business websites with WhatsApp booking and ordering built in.',
  metadataBase: new URL('https://swiftdigital.vercel.app'),
  openGraph: { title: 'Swift Digital Services', description: 'Websites that fill your inbox with customers.', type: 'website', images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Swift Digital Services — Kaduna, Nigeria' }] },
  twitter: { card: 'summary_large_image', title: 'Swift Digital Services', description: 'Websites that fill your inbox with customers.', images: ['/og-image.jpg'] },
  generator: 'Next.js',
  icons: {
    icon: '/swift-digital-favicon.jpg',
    apple: '/swift-digital-favicon.jpg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F3EEE4',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${instrumentSerif.variable} ${geistMono.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
