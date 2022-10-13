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

interface BooksWithQuantity {
  book: Book;
  quantity: number;
}

interface OrderType {
  first_name: string;
  last_name: string;
  city: string;
  zip_code: string;
}

interface CartContextType {
  shoppingCart: Book[];
  addBook: (book: Book) => void;
  removeBook: (book: Book) => void;
  removeAll: (book: Book) => void;
}

interface OrderContextType {
  booksWithQuantity: BooksWithQuantity[];
}
