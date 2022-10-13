import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import NavBar from "../components/NavBar";
import { useCart } from "../context/CartContext";
import trashCan from "../assets/trash-can.png";
import { useOrderBooks } from "../context/OrderContext";

export default function Cart() {
  const { shoppingCart, addBook, removeBook, removeAll } = useCart();
  const { booksWithQuantity } = useOrderBooks();

  return (
    <div className="max-w-7xl mx-auto min-h-screen relative">
      <NavBar />
      <div className="flex flex-wrap gap-5 p-5 justify-center">
        {booksWithQuantity.length
          ? booksWithQuantity.map((bookWithAmount) => (
              <div className="flex flex-col gap-4" key={bookWithAmount.book.id}>
                <BookCard book={bookWithAmount.book} />

                <div className="flex gap-1 items-center justify-center relative">
                  <button
                    onClick={() => removeBook(bookWithAmount.book)}
                    className="px-2 py-1 bg-sky-600 rounded"
                  >
                    -
                  </button>
                  <p className="w-6 text-center">{bookWithAmount.quantity}</p>
                  <button
                    onClick={() => addBook(bookWithAmount.book)}
                    className="px-2 py-1 bg-sky-600 rounded"
                  >
                    +
                  </button>
                  <button onClick={() => removeAll(bookWithAmount.book)}>
                    <img
                      src={trashCan}
                      alt="trash can"
                      className="w-6 h-6 absolute right-2 bottom-1"
                    />
                  </button>
                </div>
                <div>
                  <p>
                    <span className="font-bold">Total Amount: </span>
                    {bookWithAmount.book.price * bookWithAmount.quantity}
                    <span className="font-bold">
                      {" "}
                      {bookWithAmount.book.currency}
                    </span>
                  </p>
                </div>
              </div>
            ))
          : null}
      </div>
      {shoppingCart.length ? (
        <Link
          to="/react_ts-shopping-books/order"
          className="py-2 px-12 font-bold rounded-lg text-slate-100 text-center
          hover:text-slate-300 transition-colors duration-300 bg-sky-600
            absolute bottom-2 left-2"
        >
          Next
        </Link>
      ) : null}
    </div>
  );
}
