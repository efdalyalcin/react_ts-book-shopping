import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Order from './pages/Order';

export default function App() {
  return (
    <div className="min-w-360 bg-slate-100">
      <Routes>
        <Route path="react_ts-shopping-books/" element={<Home />} />
        <Route path="react_ts-shopping-books/order" element={<Order />} />
        <Route path="react_ts-shopping-books/cart" element={<Cart />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </div>
  );
}
