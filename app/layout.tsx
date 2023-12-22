import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'McGill Machine Learning Reading Group',
  description: 'A reading group for machine learning at McGill University.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
