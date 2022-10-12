import { useCart } from "../context/CartContext";

type Props = {
  book: Book;
};

export default function BookCard({ book }: Props) {
  const { addBook } = useCart();

  return (
    <div
      className="w-60 flex flex-col gap-2 p-2 rounded-lg bg-sky-200 
      hover:scale-105 transition-transform duration-300 grow"
      onClick={() => addBook(book)}
    >
      <img
        src={book.cover_url}
        alt="Book cover"
        className="h-64 object-contain"
      />
      <p>
        <span className="font-bold">Title: </span> {book.title}
      </p>
      <p>
        <span className="font-bold">Author: </span> {book.author}
      </p>
      <p>
        <span className="font-bold">Number of Pages: </span> {book.pages}
      </p>
    </div>
  );
}
