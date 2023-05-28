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
      <body>
        <Header />
        <main className="h-screen px-4 bg-stone-200">{children}</main>
      </body>
    </html>
  )
}
