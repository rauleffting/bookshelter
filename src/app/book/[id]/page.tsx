interface BookProps {
  params: {
    id: string
  }
}

export default function Book({ params }: BookProps) {
  return (
    <div>
      <h1>Book: {params.id} </h1>
    </div>
  )
}
