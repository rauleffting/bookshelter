import Image from 'next/image'
import { Book } from '../../../types/types'
import bookCover from '../../../assets/book_cover.jpg'
import bookCover2 from '../../../assets/book_cover2.jpg'

interface ProductProps {
  params: {
    id: string
  }
}

export default function Product({ params }: ProductProps) {
  const books: Book[] = [
    {
      id: 1,
      title: 'The Metaphysics',
      description: `Aristotle's probing inquiry into some of the fundamental problems of philosophy, The Metaphysics is one of the classical Greek foundation-stones of western thought. The Metaphysics presents Aristotle's mature rejection of both the Platonic theory that what we perceive is just a pale reflection of reality and the hard-headed view that all processes are ultimately material. He argued instead that the reality or substance of things lies in their concrete forms, and in so doing he probed some of the deepest questions of philosophy: What is existence? How is change possible? And are there certain things that must exist for anything else to exist at all? The seminal notions discussed in The Metaphysics - of 'substance' and associated concepts of matter and form, essence and accident, potentiality and actuality - have had a profound and enduring influence, and laid the foundations for one of the central branches of Western philosophy.

    In this edition Hugh Lawson-Tancred's lucid translation is accompanied by a stimulating introduction in which he highlights the central themes of one of philosophy's supreme masterpieces.

    For more than seventy years, Penguin has been the leading publisher of classic literature in the English-speaking world. With more than 1,700 titles, Penguin Classics represents a global bookshelf of the best works throughout history and across genres and disciplines. Readers trust the series to provide authoritative texts enhanced by introductions and notes by distinguished scholars and contemporary authors, as well as up-to-date translations by award-winning translators.`,
      author: 'Aristotle',
      price: 14.75,
      rating: 4.5,
      book_cover: bookCover,
    },
    {
      id: 2,
      title: 'The Lord Of The Rings',
      description: `All three parts of the epic masterpiece The Lord of the Rings – The Fellowship of the Ring, The Two Towers & The Return of the King – available as one download, featuring the definitive edition of the text, hyperlinked footnotes and page references, and 3 maps including a detailed map of Middle-earth.

      Sauron, the Dark Lord, has gathered to him all the Rings of Power – the means by which he intends to rule Middle-earth. All he lacks in his plans for dominion is the One Ring – the ring that rules them all – which has fallen into the hands of the hobbit, Bilbo Baggins.
      
      In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as the Ring is entrusted to his care. He must leave his home and make a perilous journey across the realms of Middle-earth to the Crack of Doom, deep inside the territories of the Dark Lord. There he must destroy the Ring forever and foil the Dark Lord in his evil purpose.
      
      Since it was first published in 1954, ‘The Lord of the Rings’ has been a book people have treasured. Steeped in unrivalled magic and otherworldliness, its sweeping fantasy has touched the hearts of young and old alike.`,
      author: 'J. R. R. Tolkien',
      price: 11.35,
      rating: 5,
      book_cover: bookCover2,
    },
  ]

  const filteredBooks = books.filter(
    (book) => Number(book.id) === Number(params.id),
  )
  const selectedBook: Book = filteredBooks[0]

  return (
    <div className="flex">
      <div>
        <Image src={selectedBook.book_cover} alt="book cover" />
      </div>
      <div>
        <h1>{selectedBook.title}</h1>
        <p>{selectedBook.description}</p>
        <span>{selectedBook.price}</span>
        <button>Add to cart</button>
      </div>
    </div>
  )
}
