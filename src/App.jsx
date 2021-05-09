import "./styles.css";

import { Routes, Route, Link } from "react-router-dom";
import { useCart } from "./contexts/CartContext";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductListing from "./pages/ProductListing";

export default function App() {
  const { itemsInCart } = useCart([]);
  return (
    <div className="App">
      <div>
        <nav className="navbar">
          <div>GREENSHOP</div>
          <div>
            <Link to="/">
              <i className="fas fa-home nav-pills"></i>
            </Link>

            <i className="fas fa-heart nav-pills"></i>

            <Link to="Cart">
              <i className="fas fa-shopping-cart nav-pills"></i>
            </Link>

            <span class="badge cart-badge">
              {" "}
              {itemsInCart.length > 0 ? itemsInCart.length : null}{" "}
            </span>
          </div>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ProductListing" element={<ProductListing />} />
        <Route path="Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
