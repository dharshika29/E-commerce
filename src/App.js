import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import ContactUs from "./component/ContactUs";
import Shop1 from "./component/Shop1";
import Home1 from "./component/Home1";
import Home2 from "./component/Home2";
import Home3 from "./component/Home3";
import Navbar from "./component/Navbar";
import SignPopup from "./component/SignPopup";
import ProductPage from "./component/ProductPage";
import Blog from "./component/Blog";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {showPopup && <SignPopup close={() => setShowPopup(false)} />}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/home/home1" element={<Home2 />} />
        <Route path="/home/home2" element={<Home3 />} />
        <Route path="/shop" element={<Shop1 />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
