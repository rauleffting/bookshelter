import {} from '@phosphor-icons/react'
import { useState } from 'react'

export function Section() {
  const [category, setCategory] = useState<string>('')

  return (
    <div className="bg-stone-100 rounded my-4 p-4">
      <div className="flex justify-between items-center space-y-1">
        <h1 className="text-stone-950 text-3xl font-bold">Books</h1>

        <select
          name="category"
          onChange={(event) => setCategory(event.target.value)}
          className="text-stone-950 mb-4"
        >
          <option value="">category</option>
          <option value="philosophy">philosophy</option>
          <option value="religion">religion</option>
          <option value="literature">literature</option>
          <option value="history">history</option>
        </select>
      </div>

      <div>
        
      </div>
    </div>
  )
}
