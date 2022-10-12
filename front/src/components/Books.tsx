import { useEffect, useState } from "react";
import { getBooks } from "../api/getBooks";
import { useCart } from "../context/CartContext";
import BookCard from "./BookCard";

export default function Books() {
  const [books, setBooks] = useState<Book[]>([]);
  const { addBook } = useCart();

  const handleBooks = async () => {
    const books = await getBooks();
    setBooks(books);
  };

  useEffect(() => {
    handleBooks();
  }, []);

  return (
    <div className="flex flex-wrap gap-5 p-5 justify-center">
      {books.length
        ? books.map((book) => (
            <div className="flex flex-col justify-between gap-5" key={book.id}>
              <BookCard book={book} />
              <button
                type="button"
                onClick={() => addBook(book)}
                className="p-2 bg-sky-600 rounded-lg text-slate-100 
                hover:text-slate-700 transition-colors duration-300 hover:bg-sky-400"
              >
                Add to chart
              </button>
            </div>
          ))
        : null}
    </div>
  );
}
