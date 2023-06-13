'use client'

import { List, MagnifyingGlass } from '@phosphor-icons/react'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { DropdownMenu } from './dropdownMenu'

export function Header() {
  const [toggle, setToggle] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  function handleDropdownMenu(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation() // Stop event propagation
    setToggle(!toggle)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setToggle(false)
      }
    }

    window.addEventListener('click', handleClickOutside)

    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <header className="flex justify-between items-center h-16 px-4 bg-stone-950 fixed w-full">
      <Link href="/">
        <h4 className="flex text-lg text-amber-400 pr-2">
          <span className="text-white">Book</span>
          Shelter
        </h4>
      </Link>

      <div className="flex items-center justify-center flex-grow">
        <input
          type="text"
          placeholder="Search"
          className="flex pl-2 h-6 rounded-tl rounded-bl text-stone-950 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:h-5"
        />
        <div className="flex h-6 p-2 items-center justify-center rounded-tr rounded-br bg-amber-400 cursor-pointer hover:bg-amber-500">
          <MagnifyingGlass size={20} className="text-stone-950" />
        </div>
      </div>

      <button onClick={handleDropdownMenu}>
        <List size={20} className="text-stone-100 hover:text-stone-400" />
      </button>

      <div
        ref={dropdownRef}
        className={`transition-opacity duration-500 ${
          toggle ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <DropdownMenu />
      </div>
    </header>
  )
}
