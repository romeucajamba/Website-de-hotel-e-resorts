import type { Metadata } from 'next'
import './globals.css'



export const metadata: Metadata = {
  title: 'Hotel',
  description: 'Website de hotel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-white'>
      <body>{children}</body>
    </html>
  )
}
