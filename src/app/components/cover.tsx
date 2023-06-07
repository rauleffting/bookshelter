import { ShoppingCart, Rocket } from '@phosphor-icons/react'

export function Cover() {
  return (
    <div className="bg-stone-100 rounded p-4 space-y-4">
      <h1 className="text-stone-950 text-3xl font-bold ">
        Find the best books in the world
      </h1>
      <h4 className="text-stone-600 text-lg">
        With BookShelter, it becomes easier to acquire knowledge
      </h4>

      <div className="flex flex-col space-y-2">
        <div className="flex items-center mt-2 mb-2 space-x-2">
          <div className="bg-amber-400 p-2 rounded">
            <ShoppingCart size={20} className="text-stone-950" />
          </div>

          <p className="text-stone-950">100% secure payment.</p>
        </div>
        <div className="flex items-center mt-2 mb-2 space-x-2">
          <div className="bg-stone-950 p-2 rounded">
            <Rocket size={20} className="text-amber-400" />
          </div>

          <p className="text-stone-950">Fast delivery like a rocket.</p>
        </div>
      </div>
    </div>
  )
}
