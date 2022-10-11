import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="bg-slate-100">
      <Routes>
        <Route path="react_ts-shopping-books/" element={<Home />} />
        {/* <Route path="react_ts-shopping-books/search" element={<OrderPage />} /> */}
        {/* <Route path="react_ts-tesodev-TT/addLink" element={<Cart />} /> */}
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </div>
  );
}
