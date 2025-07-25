import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'about us',
  description: 'anuradha',
  generator: 'vanuradha',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
