import { Link } from "react-router-dom";
import Books from "../components/Books";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto relative">
      <NavBar />
      <Books />
      <Link
        to="/react_ts-shopping-books/cart"
        className="py-2 px-12 font-bold rounded-lg text-slate-100 text-center
        hover:text-slate-300 transition-colors duration-300 bg-sky-600
        sticky bottom-2 left-2"
      >
        Go to cart
      </Link>
    </div>
  );
}
