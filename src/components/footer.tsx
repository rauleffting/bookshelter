export function Footer() {
  return (
    <footer className="flex flex-col items-center h-24 pt-4">
      <div className="flex mb-4 text-amber-600">
        <p className="mr-8 hover:font-bold hover:cursor-pointer w-16">About</p>
        <p className="hover:font-bold hover:cursor-pointer w-16">Contact</p>
      </div>
      <p className="text-stone-400">
        <strong>© 2023 BookShelter.</strong> All rights reserved
      </p>
    </footer>
  )
}
