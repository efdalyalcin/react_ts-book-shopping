/// <reference types="react-scripts" />

interface Book {
  id: number;
  title: string;
  author: string;
  cover_url: string;
  pages: number;
  price: number;
  currency: string;
}

interface CartContextType {
  shoppingCart: Book[];
  addBook: (book: Book) => void;
  removeBook: (book: Book) => void;
  removeAll: (book: Book) => void;
}
