import { useCallback, useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import NavBar from "../components/NavBar";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { shoppingCart, addBook, removeBook, removeAll } = useCart();

  const [cartBooks, setCartBooks] = useState<BooksWithAmount[]>([]);

  const handleMap = useCallback(() => {
    const booksWithAmount: BooksWithAmount[] = [];
    shoppingCart.forEach((book) => {
      const existingBookIndex: number = booksWithAmount.findIndex(
        (bookWithAmount) => bookWithAmount.book.id === book.id
      );

      if (existingBookIndex !== -1) {
        const newAmount = booksWithAmount[existingBookIndex].amount + 1;
        const updatedBook = {
          ...booksWithAmount[existingBookIndex],
          amount: newAmount,
        };
        booksWithAmount[existingBookIndex] = updatedBook;
      } else {
        booksWithAmount.push({ book, amount: 1 });
      }
    });

    setCartBooks([...booksWithAmount]);
  }, [shoppingCart]);

  useEffect(() => {
    handleMap();
  }, [handleMap]);

  return (
    <div className="max-w-7xl mx-auto">
      <NavBar />
      <div className="flex flex-wrap gap-5 p-5 justify-center">
        {cartBooks.length
          ? cartBooks.map((bookWithAmount) => (
              <div className="flex flex-col gap-4">
                <BookCard book={bookWithAmount.book} />

                <div className="flex gap-1 items-center justify-center">
                  <button
                    onClick={() => removeBook(bookWithAmount.book)}
                    className="px-2 py-1 bg-sky-600 rounded"
                  >
                    -
                  </button>
                  <p className="w-6 text-center">{bookWithAmount.amount}</p>
                  <button
                    onClick={() => addBook(bookWithAmount.book)}
                    className="px-2 py-1 bg-sky-600 rounded"
                  >
                    +
                  </button>
                </div>
                <div>
                  <p>
                    <span className="font-bold">Total Amount: </span>
                    {bookWithAmount.book.price * bookWithAmount.amount}
                    <span className="font-bold"> {bookWithAmount.book.currency}</span>
                  </p>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
