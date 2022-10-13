import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CartProvider from "./context/CartContext";
import OrderProvider from "./context/OrderContext";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CartProvider>
      <OrderProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </OrderProvider>
    </CartProvider>
  </React.StrictMode>
);

