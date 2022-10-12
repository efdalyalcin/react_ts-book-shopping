import { useEffect, useState } from "react";
import { getBooks } from "../api/getBooks";
import Book from "./Book";

export default function Books() {
  const [books, setBooks] = useState<Book[]>([]);

  const handleBooks = async () => {
    const books = await getBooks();
    setBooks(books);
  };

  useEffect(() => {
    handleBooks();
  }, []);

  return (
    <div> 
      {books.length ? <Book book={books[0]}/> : null}
    </div>
  );
}
