import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import {
  FiSearch,
  FiUser,
  FiShoppingBag,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const location = useLocation();

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  const isActive = (path) => location.pathname === path;

 
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <>
      {/* ---------- OFFER BAR ---------- */}
      <div className={styles.offerBar}>
        <span>🎫 30% off storewide — Limited time!</span>
        <Link to="/shop" className={styles.shopNow}>
          Shop Now →
        </Link>
      </div>

      {/* ---------- NAVBAR ---------- */}
      <nav className={styles.nav}>
        <div className={styles.logo}>3legant.</div>

        <div
          className={styles.mobileIcon}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </div>

        <ul className={`${styles.links} ${mobileOpen ? styles.showMenu : ""}`}>
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

          <li className={styles.dropItem}>
            <div className={styles.menuTitle}>
              <Link
                to="/product"
                className={isActive("/product") ? styles.active : ""}
                onClick={closeMobile}
              >
                Product
              </Link>
              <FiChevronDown
                className={styles.arrow}
                onClick={() => toggleDropdown("product")}
              />
            </div>

            {activeDropdown === "product" && (
              <div className={styles.dropdownMenu}>
                <Link to="/product/product1" onClick={closeMobile}>
                  Product 1
                </Link>
                <Link to="/product/product2" onClick={closeMobile}>
                  Product 2
                </Link>
              </div>
            )}
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

        {/* ---------- NAV ICONS ---------- */}
        <div className={styles.icons}>
          <FiSearch />
          <FiUser />

          {/* CART ICON */}
          <div className={styles.cartIcon} onClick={() => setCartOpen(true)}>
            <FiShoppingBag />
            {cart.length > 0 && (
              <span className={styles.cartBadge}>{cart.length}</span>
            )}
          </div>
        </div>
      </nav>

      {/* ---------- CART OVERLAY ---------- */}
      {cartOpen && (
        <div
          className={styles.overlay}
          onClick={() => setCartOpen(false)}
        ></div>
      )}

      {/* ---------- CART PANEL ---------- */}
      <div
        className={`${styles.cartPanel} ${cartOpen ? styles.open : ""}`}
      >
        <div className={styles.cartHeader}>
          <h3>Cart</h3>
          <IoClose
            size={24}
            onClick={() => setCartOpen(false)}
            className={styles.closeIcon}
          />
        </div>

        <div className={styles.cartItems}>
          {cart.length === 0 && (
            <p className={styles.empty}>Your cart is empty</p>
          )}

          {cart.map((item) => (
            <div key={item.id} className={styles.item}>
              <img src={item.img} alt="" />

              <div className={styles.info}>
                <h4>{item.name}</h4>
                <p>
                  ${item.price} x {item.qty}
                </p>
              </div>

              <button
                className={styles.remove}
                onClick={() => removeItem(item.id)}
              >
                X
              </button>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <div className={styles.totalRow}>
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>

          <button className={styles.checkoutBtn}>Checkout</button>
        </div>
      </div>
    </>
  );
}
