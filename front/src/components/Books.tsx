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
    <div className="flex flex-wrap gap-5 p-5 justify-center"> 
      {books.length ? (books.map(book => <Book book={book} key={book.id}/>)): null}
    </div>
  );
}
