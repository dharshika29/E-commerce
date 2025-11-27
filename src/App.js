import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {   useEffect, useState } from "react";

import ContactUs from "./component/ContactUs";
import Product1 from "./component/Product1";
import Product2 from "./component/Product2";
import Shop1 from "./component/Shop1";
import Home1 from "./component/Home1";
import Home2 from "./component/Home2";
import Home3 from "./component/Home3";
import Navbar from "./component/Navbar";
import SignPopup from "./component/SignPopup"; // make sure this exists

function App() {
  const [showPopup, setShowPopup] = useState(false);

  // popup timer moved into App()
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 0); // show after 5 sec

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* POPUP */}
      {showPopup && <SignPopup close={() => setShowPopup(false)} />}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/home/home1" element={<Home2 />} />
        <Route path="/home/home2" element={<Home3 />} />

        <Route path="/shop" element={<Shop1 />} />

        <Route path="/product" element={<Product2 />} />
        <Route path="/product/product1" element={<Product1 />} />

        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
