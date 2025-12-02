import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import { useEffect, useState } from "react";

import ContactUs from "./component/ContactUs";
import Shop1 from "./component/Shop1";
import Home1 from "./component/Home1";
import Home2 from "./component/Home2";
import Home3 from "./component/Home3";
import Navbar from "./component/Navbar";
import SignPopup from "./component/SignPopup";
import ProductPage from "./component/ProductPage";
import Account from "./component/Account";
import Blog from "./component/Blog";
import BlogPost from "./component/BlogPost";
import { CartProvider } from "./component/CartContext";
import Cart from "./component/Cart";
import CartSidebar from "./component/CartSidebar"; // <-- ADD THIS

function App() {
  const [cartOpen, setCartOpen] = useState(false); // <-- CART SIDEBAR STATE

  return (
    <CartProvider>
      <Router>
        <PopupController />

        {/* NAVBAR WITH CART OPEN FUNCTION */}
        <Navbar onCartOpen={() => setCartOpen(true)} />

        {/* CART SIDEBAR */}
        <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />

        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/home/home1" element={<Home2 />} />
          <Route path="/home/home2" element={<Home3 />} />
          <Route path="/shop" element={<Shop1 />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* BLOG ROUTES */}
          <Route path="/" element={<Navigate to="/blog" replace />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />

          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

// ==========================
//   POPUP CONTROLLER
// ==========================
function PopupController() {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const homePages = ["/", "/home/home1", "/home/home2"];

    if (homePages.includes(location.pathname)) {
      const timer = setTimeout(() => setShowPopup(true), 0);
      return () => clearTimeout(timer);
    } else {
      setShowPopup(false);
    }
  }, [location.pathname]);

  return showPopup ? <SignPopup close={() => setShowPopup(false)} /> : null;
}
