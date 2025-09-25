<<<<<<< HEAD
import type { Metadata } from 'next';
import { Inter, Open_Sans } from 'next/font/google';
import { AuthProvider } from '../components/AuthContext';
import { PlanProvider } from '../components/PlanManager';
import ErrorBoundary from '../components/ErrorBoundary';
import SEOOptimizer from '../components/SEOOptimizer';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'KatoSuite - AI-Powered Early Childhood Education Platform',
    template: '%s | KatoSuite'
  },
  description: 'Transform early childhood education with AI-generated lesson plans, compliance tracking, and bilingual support for Canadian and US educational frameworks.',
  keywords: ['early childhood education', 'lesson plans', 'AI education', 'HDLH', 'educational frameworks', 'compliance tracking'],
  authors: [{ name: 'KatoSuite Team' }],
  creator: 'KatoSuite',
  publisher: 'KatoSuite',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://katosuite.com',
    title: 'KatoSuite - AI-Powered Early Childhood Education Platform',
    description: 'Transform early childhood education with AI-generated lesson plans, compliance tracking, and bilingual support for Canadian and US educational frameworks.',
    siteName: 'KatoSuite',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KatoSuite - AI-Powered Early Childhood Education Platform',
    description: 'Transform early childhood education with AI-generated lesson plans, compliance tracking, and bilingual support for Canadian and US educational frameworks.',
    creator: '@katosuite',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};
=======
import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

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
>>>>>>> 5a83128551e82a14c84c55a42f45bd2320cd3ae4

export default function RootLayout({
  children,
}: {
<<<<<<< HEAD
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${openSans.variable}`}>
      <body className="min-h-screen bg-white">
        <ErrorBoundary>
          <AuthProvider>
            <PlanProvider>
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">
                  {children}
                </main>
                <Footer />
              </div>
            </PlanProvider>
          </AuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
=======
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">
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
>>>>>>> 5a83128551e82a14c84c55a42f45bd2320cd3ae4
}