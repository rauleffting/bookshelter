import { List, MagnifyingGlass } from '@phosphor-icons/react'
import { useState } from 'react'
import { DropdownMenu } from './dropdownMenu'

export function Header() {
  const [toggle, setToggle] = useState<boolean>(false)

  function handleDropdownMenu() {
    setToggle(!toggle)
  }

  return (
    <header className="flex justify-between items-center h-16 px-2 bg-stone-950 relative">
      <h4 className="text-base text-amber-400 pr-2">
        <span className="text-white">Book</span>
        Shelter
      </h4>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="flex pl-2 h-6 rounded-tl-xl rounded-bl-xl text-stone-950 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:h-5"
        />
        <div className="flex h-6 p-2 items-center justify-center rounded-tr-xl rounded-br-xl bg-amber-400 cursor-pointer hover:bg-amber-500">
          <MagnifyingGlass size={20} className="text-stone-950" />
        </div>
      </div>

      <button onClick={handleDropdownMenu}>
        <List size={20} className="text-stone-100 hover:text-stone-400" />
      </button>

      {toggle && <DropdownMenu />}
    </header>
  )
}
