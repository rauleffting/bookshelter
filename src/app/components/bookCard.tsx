import Image from 'next/image'

import ReactStars from 'react-rating-stars-component'
import React from 'react'

interface Book {
  id: number
  title: string
  description: string
  author: string
  price: number
  rating: number
  book_cover: string
}

export function BookCard({ book }) {
  return (
    <div className="flex text-stone-950 mt-8 mb-8">
      <Image src={book.book_cover} alt="book cover" width={150} height={210} />
      <div className="flex flex-col ml-8">
        <h1 className="mb-2 text-2xl font-bold hover:cursor-pointer hover:text-amber-600 hover:underline">
          {book.title}
        </h1>
        <p className="line-clamp-2 mb-2 text-lg hover:cursor-pointer hover:text-amber-600 hover:underline">
          {book.description}
        </p>
        <ReactStars
          count={5}
          value={book.rating}
          size={24}
          activeColor="#f59e0b"
          isHalf={true}
          edit={false}
        />
        <span className="mt-4 mb-4 font-bold">$ {book.price}</span>
        <button className="h-8 bg-amber-400 text-stone-950 rounded hover:opacity-80">
          Add to cart
        </button>
      </div>
    </div>
  )
}
