'use client'

import { List } from '@phosphor-icons/react'

export function Header() {
  return (
    <header className="flex justify-between items-center bg-stone-950">
      <h4>BookShelter</h4>
      <input type="text" placeholder="Search" />
      <nav>
        <List />
      </nav>
    </header>
  )
}
