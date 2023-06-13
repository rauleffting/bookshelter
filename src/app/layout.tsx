import { Footer } from '@/components/footer'
import React from 'react'
import { Header } from '../components/header'
import './globals.css'

export const metadata = {
  title: 'BookShelter',
  description: 'The best place to buy books.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="h-screen">
        <Header />
        <main className="px-4 py-2 pt-20 bg-stone-200">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
