import React from "react";
import { useCart } from "./CartContext";
import styles from "../styles/CartDrawer.module.css";
import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, updateQty, removeFromCart } = useCart();
  const navigate = useNavigate();

  const parsePrice = (price) =>
    typeof price === "number" ? price : parseFloat(price.replace(/[$,]/g, "")) || 0;

  const formatPrice = (num) =>
    Number(num).toLocaleString("en-US", { style: "currency", currency: "USD" });

  const subtotal = cart.reduce(
    (acc, item) => acc + parsePrice(item.price) * item.qty,
    0
  );

  const handleQtyChange = (id, val) => {
    if (val < 1) return;
    updateQty(id, val);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Cart</h2>
          <FiX className={styles.closeBtn} onClick={onClose} />
        </div>

        <div className={styles.items}>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div className={styles.item} key={item.id}>
                <img src={item.img} alt={item.name} />
                <div className={styles.details}>
                  <p>{item.name}</p>
                  <p>Color: {item.color || "Default"}</p>
                  <p>{formatPrice(parsePrice(item.price))}</p>
                  <div className={styles.qtyBox}>
                    <button
                      onClick={() => handleQtyChange(item.id, item.qty - 1)}
                      disabled={item.qty === 1}
                    >
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={() => handleQtyChange(item.id, item.qty + 1)}>
                      +
                    </button>
                  </div>
                </div>
                <button className={styles.remove} onClick={() => removeFromCart(item.id)}>
                  X
                </button>
              </div>
            ))
          )}
        </div>

        <div className={styles.footer}>
          <p>Subtotal: {formatPrice(subtotal)}</p>
          <button
            className={styles.checkoutBtn}
            onClick={() => {
              navigate("/cart");
              onClose();
            }}
          >
            View Cart / Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
