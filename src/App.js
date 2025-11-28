import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

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
import SingleBlog from "./component/SingleBlog";
import PageWrapper from "./component/Pagewrapper"; // Page animation wrapper
import ScrollToTop from "./component/ScrollTop";

function AppWrapper() {
  const location = useLocation();
  return (
    <>
     <ScrollToTop />
      <PopupController />

      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home1 />
              </PageWrapper>
            }
          />
          <Route
            path="/home/home1"
            element={
              <PageWrapper>
                <Home2 />
              </PageWrapper>
            }
          />
          <Route
            path="/home/home2"
            element={
              <PageWrapper>
                <Home3 />
              </PageWrapper>
            }
          />
          <Route
            path="/shop"
            element={
              <PageWrapper>
                <Shop1 />
              </PageWrapper>
            }
          />
          <Route
            path="/blog"
            element={
              <PageWrapper>
                <Blog />
              </PageWrapper>
            }
          />
          <Route
            path="/product/:id"
            element={
              <PageWrapper>
                <ProductPage />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <ContactUs />
              </PageWrapper>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <PageWrapper>
                <SingleBlog />
              </PageWrapper>
            }
          />
          <Route
            path="/account"
            element={
              <PageWrapper>
                <Account />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

// Popup Controller
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

export default App;
