import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import {
  FiSearch,
  FiUser,
  FiShoppingBag,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";
import CartDrawer from "../component/CartDrawer";

export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll for navbar style
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className={styles.navbarContainer}>
        <div
          className={`${styles.navbarWrapper} ${
            isScrolled ? styles.scrolled : ""
          }`}
        >
          <div className={styles.offerBar}>
            <span>🎫 30% off storewide — Limited time!</span>
            <Link to="/shop" className={styles.shopNow}>
              Shop Now →
            </Link>
          </div>

          <nav className={styles.nav}>
            <div className={styles.logo}>3legant.</div>

            <ul
              className={`${styles.links} ${mobileOpen ? styles.showMenu : ""}`}
            >
              <li className={styles.dropItem}>
                <div className={styles.menuTitle}>
                  <Link
                    to="/"
                    className={isActive("/") ? styles.active : ""}
                    onClick={closeMobile}
                  >
                    Home
                  </Link>
                  <FiChevronDown
                    className={styles.arrow}
                    onClick={() => toggleDropdown("home")}
                  />
                </div>
                {activeDropdown === "home" && (
                  <div className={styles.dropdownMenu}>
                    <Link to="/home/home1" onClick={closeMobile}>
                      Home 1
                    </Link>
                    <Link to="/home/home2" onClick={closeMobile}>
                      Home 2
                    </Link>
                  </div>
                )}
              </li>

              <li>
                <Link
                  to="/shop"
                  className={isActive("/shop") ? styles.active : ""}
                  onClick={closeMobile}
                >
                  Shop
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className={isActive("/blog") ? styles.active : ""}
                  onClick={closeMobile}
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className={isActive("/contact") ? styles.active : ""}
                  onClick={closeMobile}
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            <div className={styles.icons}>
              <div
                className={styles.mobileIcon}
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <FiX /> : <FiMenu />}
              </div>

              <FiSearch className={styles.icon} />
              <FiUser
                className={styles.icon}
                onClick={() => navigate("/account")}
              />
              {/* ✅ Open cart drawer on click */}
              <FiShoppingBag
                className={styles.icon}
                onClick={() => setCartOpen(true)}
              />
            </div>
          </nav>
        </div>

        {/* Cart Drawer */}
        <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      </div>
    </>
  );
}
