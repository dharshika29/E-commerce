import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { FiSearch, FiUser, FiShoppingBag, FiChevronDown, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className={styles.navbarWrapper}>

      <div className={styles.offerBar}>
        <span>🎫 30% off storewide — Limited time!</span>
        <Link to="/shop" className={styles.shopNow}>Shop Now →</Link>
      </div>

      <nav className={styles.nav}>

        <div className={styles.logo}>3legant.</div>

        {/* Mobile Icon */}
        <div className={styles.mobileIcon} onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <FiX /> : <FiMenu />}
        </div>

        <ul className={`${styles.links} ${mobileOpen ? styles.showMenu : ""}`}>

          {/* HOME */}
          <li className={styles.dropItem}>
            <div className={styles.menuTitle}>
              <Link to="/" className={isActive("/") ? styles.active : ""} onClick={closeMobile}>Home</Link>
              <FiChevronDown className={styles.arrow} onClick={() => toggleDropdown("home")} />
            </div>

            {activeDropdown === "home" && (
              <div className={styles.dropdownMenu}>
                <Link to="/home/home1" onClick={closeMobile}>Home 1</Link>
                <Link to="/home/home2" onClick={closeMobile}>Home 2</Link>
              </div>
            )}
          </li>

          {/* SHOP */}
          <li className={styles.dropItem}>
            <div className={styles.menuTitle}>
              <Link to="/shop" className={isActive("/shop") ? styles.active : ""} onClick={closeMobile}>Shop</Link>
              <FiChevronDown className={styles.arrow} onClick={() => toggleDropdown("shop")} />
            </div>

            {activeDropdown === "shop" && (
              <div className={styles.dropdownMenu}>
                <Link to="/shop/shop1" onClick={closeMobile}>Shop 1</Link>
                <Link to="/shop/shop2" onClick={closeMobile}>Shop 2</Link>
              </div>
            )}
          </li>

          {/* PRODUCT */}
          <li className={styles.dropItem}>
            <div className={styles.menuTitle}>
              <Link to="/product" className={isActive("/product") ? styles.active : ""} onClick={closeMobile}>Product</Link>
              <FiChevronDown className={styles.arrow} onClick={() => toggleDropdown("product")} />
            </div>

            {activeDropdown === "product" && (
              <div className={styles.dropdownMenu}>
                <Link to="/product/product1" onClick={closeMobile}>Product 1</Link>
                <Link to="/product/product2" onClick={closeMobile}>Product 2</Link>
              </div>
            )}
          </li>

          <li><Link to="/blog" className={isActive("/blog") ? styles.active : ""} onClick={closeMobile}>Blog</Link></li>
          <li><Link to="/contact" className={isActive("/contact") ? styles.active : ""} onClick={closeMobile}>Contact Us</Link></li>

        </ul>

        <div className={styles.icons}>
          <FiSearch />
          <FiUser />
          <FiShoppingBag />
        </div>
      </nav>
    </div>
  );
}
