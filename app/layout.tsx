import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next GPT-4V',
  description:
    'A simple chat app with vision using Next.js, Vercel AI SDK, and GPT-4V.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-gray-950 text-white">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
