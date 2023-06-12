'use client'

import { Cover } from './components/cover'
import { Footer } from './components/footer'
import { Section } from './components/section'

export default function Home() {
  return (
    <div className="h-screen p-2 bg-stone-200 overflow-auto">
      <Cover />
      <Section />
      <Footer />
    </div>
  )
}
