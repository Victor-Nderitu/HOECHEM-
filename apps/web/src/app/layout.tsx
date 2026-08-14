import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers/Providers'
import { Toaster } from 'react-hot-toast'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Hoechem SACCO Ltd. — Together, We Build Better Futures',
    template: '%s | Hoechem SACCO Ltd.',
  },
  description:
    'Hoechem SACCO Ltd. is a member-driven financial cooperative providing secure savings, affordable loans, and sustainable financial growth since 1979. Join 1,000+ members building better futures.',
  keywords: [
    'SACCO',
    'savings',
    'loans',
    'cooperative',
    'Kenya',
    'Hoechem',
    'financial services',
    'credit union',
  ],
  authors: [{ name: 'Hoechem SACCO Ltd.' }],
  creator: 'Hoechem SACCO Ltd.',
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://hoechemsacco.com',
    siteName: 'Hoechem SACCO Ltd.',
    title: 'Hoechem SACCO Ltd. — Together, We Build Better Futures',
    description:
      'Member-driven financial cooperative providing secure savings and affordable loans since 1979.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Hoechem SACCO Ltd.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hoechem SACCO Ltd.',
    description: 'Together, We Build Better Futures',
  },
  metadataBase: new URL('https://hoechemsacco.com'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[#f8f9fb] text-[#191c1e]`}>
        <Providers>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                borderRadius: '12px',
                boxShadow: '0px 4px 20px rgba(11, 27, 63, 0.10)',
              },
              success: {
                iconTheme: {
                  primary: '#006d38',
                  secondary: '#ffffff',
                },
              },
              error: {
                iconTheme: {
                  primary: '#ba1a1a',
                  secondary: '#ffffff',
                },
              },
            }}
          />
        </Providers>
      </body>
    </html>
  )
}
