import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Order from './pages/Order';

export default function App() {
  return (
    <div className="min-w-360 bg-slate-100">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
