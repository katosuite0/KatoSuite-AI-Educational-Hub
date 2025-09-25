import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KatoSuite AI Educational Hub | AI-Powered ECE Platform for Canada',
  description: 'AI-powered lesson planning for Canadian ECE professionals with HDLH/Flight compliance, bilingual support, and voice commands. Transform your early childhood education with cutting-edge AI technology.',
  keywords: 'ECE Canada, AI lesson planning, HDLH framework, Flight framework, early childhood education, bilingual education, voice AI, Canadian educators',
  authors: [{ name: 'KatoSuite AI' }],
  creator: 'KatoSuite AI',
  publisher: 'KatoSuite AI',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    alternateLocale: 'fr_CA',
    url: 'https://katosuite.ca',
    siteName: 'KatoSuite AI Educational Hub',
    title: 'KatoSuite AI Educational Hub | AI-Powered ECE Platform for Canada',
    description: 'AI-powered lesson planning for Canadian ECE professionals with HDLH/Flight compliance, bilingual support, and voice commands.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KatoSuite AI Educational Hub',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KatoSuite AI Educational Hub',
    description: 'AI-powered lesson planning for Canadian ECE professionals',
    creator: '@katosuite',
    images: ['/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#222222',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}