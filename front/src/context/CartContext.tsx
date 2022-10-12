import React, { useContext, useState } from "react";

const CartContext = React.createContext<CartContextType>({
  shoppingCart: [],
  addBook: (book: Book) => {},
  removeBook: (book: Book) => {},
  removeAll: (book: Book) => {},
});

type Children = {
  children: React.ReactNode;
};

export default function CartProvider({ children }: Children) {
  const [shoppingCart, setShoppingCart] = useState<Book[]>([]);

  const addBook = (book: Book) => {
    // it adds same book multiple times.
    // The amount is controlled in the cart if there are more than 1 of same book
    setShoppingCart([...shoppingCart, book]);
  };

  const removeBook = (book: Book) => {
    const bookToBeRemoved = shoppingCart.findIndex((eachBook) => eachBook.id === book.id);
    if (bookToBeRemoved !== -1) {
      const books = shoppingCart.splice(bookToBeRemoved, 1);
      setShoppingCart([...books]);
    }
  };

  const removeAll = (book: Book) => {
    const filteredCart = shoppingCart.filter(
      (eachBook) => eachBook.id !== book.id
    );
    setShoppingCart([...filteredCart]);
  };

  return (
    <CartContext.Provider
      value={{ shoppingCart, addBook, removeBook, removeAll }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
