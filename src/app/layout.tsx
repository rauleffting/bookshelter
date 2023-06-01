'use client'

import { Header } from './components/header'
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
      <body>
        <Header />
        <main className="h-screen px-4 bg-stone-200">{children}</main>
      </body>
    </html>
  )
}
