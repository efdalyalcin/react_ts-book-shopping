import React, { useCallback, useContext, useEffect, useState } from "react";
import { useCart } from "./CartContext";

const OrderContext = React.createContext<OrderContextType>({
  booksWithQuantity: [],
});

type Children = {
  children: React.ReactNode;
};

export default function OrderProvider({ children }: Children) {
  const { shoppingCart } = useCart();

  const [booksWithQuantity, setBooksWithQuantity] = useState<
    BooksWithQuantity[]
  >([]);

  const handleQuantity = useCallback(() => {
    const booksWithQuantity: BooksWithQuantity[] = [];
    shoppingCart.forEach((book) => {
      const existingBookIndex: number = booksWithQuantity.findIndex(
        (bookWithQuantity) => bookWithQuantity.book.id === book.id
      );

      if (existingBookIndex !== -1) {
        const newAmount = booksWithQuantity[existingBookIndex].quantity + 1;
        const updatedBook = {
          ...booksWithQuantity[existingBookIndex],
          quantity: newAmount,
        };
        booksWithQuantity[existingBookIndex] = updatedBook;
      } else {
        booksWithQuantity.push({ book, quantity: 1 });
      }
    });

    setBooksWithQuantity([...booksWithQuantity]);
  }, [shoppingCart]);

  useEffect(() => {
    handleQuantity();
  }, [handleQuantity]);

  return (
    <OrderContext.Provider value={{ booksWithQuantity }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrderBooks() {
  return useContext(OrderContext);
}
