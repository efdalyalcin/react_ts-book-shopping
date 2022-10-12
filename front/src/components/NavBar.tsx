import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import shopIcon from "../assets/shopping-cart.png";

export default function NavBar() {
  const { shoppingCart } = useCart();

  return (
    <nav className="flex justify-between bg-sky-600 rounded-lg py-2  px-6 sticky top-0 z-10">
      <Link
        to="/react_ts-shopping-books/"
        className="w-20 p-2 font-bold rounded-lg text-slate-100 text-center
        hover:text-slate-300 transition-colors duration-300"
      >
        Home
      </Link>

      {/* <Link
        to="/react_ts-shopping-books/order"
        className="w-20 p-2 font-bold rounded-lg text-slate-100 text-center
        hover:text-slate-300 transition-colors duration-300"
      >
        Order
      </Link> */}

      <Link
        to="/react_ts-shopping-books/cart"
        className="w-32 p-2 flex font-bold rounded-lg text-slate-100 text-center
        hover:text-slate-300 transition-colors duration-300 whitespace-nowrap"
      >
        {shoppingCart.length ? (
          <div className="w-20 flex gap-2">
            <img src={shopIcon} alt="shopping cart" className="w-6"/>
            <span>{shoppingCart.length}</span>
          </div>
        ) : (
          <span className="w-20 block" />
        )}
        Cart
      </Link>
    </nav>
  );
}
