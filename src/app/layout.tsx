'use client'

import { Syne } from 'next/font/google'
import '@/styles/globals.css'

import { cn } from '@/lib/utils'

const font = Syne({ subsets: ['latin'] })

// Shadcn
import { Toaster } from '@/components/ui/sonner'

// Include in project
import { Navbar } from '@/components/shared/_'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-primary', font.className)} suppressHydrationWarning={true}>
        <Navbar />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
