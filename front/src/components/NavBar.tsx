import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex justify-around bg-sky-600 rounded-lg p-2">
      <Link
        to="/react_ts-shopping-books/"
        className="p-2 font-bold rounded-lg text-slate-100 hover:text-slate-300 transition-colors"
      >
        Home
      </Link>

      <Link
        to="/react_ts-shopping-books/order"
        className="p-2 font-bold rounded-lg text-slate-100 hover:text-slate-300 transition-colors"
      >
        Order
      </Link>

      <Link
        to="/react_ts-shopping-books/cart"
        className="p-2 font-bold rounded-lg text-slate-100 hover:text-slate-300 transition-colors"
      >
        Cart
      </Link>
    </nav>
  );
}
