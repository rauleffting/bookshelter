'use client'

import { List, MagnifyingGlass } from '@phosphor-icons/react'

export function Header() {
  return (
    <header className="flex justify-between items-center h-16 px-2 bg-stone-950">
      <h4 className="text-base text-amber-400 pr-2">
        <span className="text-white">Book</span>
        Shelter
      </h4>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="flex pl-2 h-6 rounded-tl-xl rounded-bl-xl text-stone-950 focus:outline-none"
        />
        <div className="flex h-6 p-2 items-center justify-center rounded-tr-xl rounded-br-xl bg-amber-400 cursor-pointer hover:bg-amber-500">
          <MagnifyingGlass size={20} className="text-stone-950" />
        </div>
      </div>
      <nav className="flex items-center">
        <button>
          <List size={20} />
        </button>
      </nav>
    </header>
  )
}
