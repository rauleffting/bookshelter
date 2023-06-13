import { ShoppingCart, Star, User } from '@phosphor-icons/react'

export function DropdownMenu() {
  return (
    <div className="absolute top-16 right-0 h-36 w-36 p-4 flex flex-col justify-between rounded-bl-lg bg-stone-100 text-stone-950  shadow-md">
      <div className="flex gap-4 hover:cursor-pointer hover:scale-105 transition-transform">
        <ShoppingCart size={20} />
        <span>Cart</span>
      </div>
      <div className="flex gap-4 hover:cursor-pointer hover:scale-105 transition-transform">
        <Star size={20} />
        <span>Favorites</span>
      </div>
      <div className="flex gap-4 hover:cursor-pointer hover:scale-105 transition-transform">
        <User size={20} />
        <span>Login</span>
      </div>
    </div>
  )
}
