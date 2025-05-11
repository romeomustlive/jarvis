'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { Inter } from 'next/font/google'

import './globals.css'
import AuthProvider from './providers/auth-provider'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <NuqsAdapter>
            {children}
            <ProgressBar
              height="5px"
              color="#000000"
              options={{ showSpinner: true }}
              shallowRouting
            />
          </NuqsAdapter>
          <Toaster />
        </body>
      </html>
    </AuthProvider>
  )
}
