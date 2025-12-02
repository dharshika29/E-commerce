import React, { useState, useEffect } from "react";
import { useCart } from "../component/CartContext";
import styles from "../styles/Cart.module.css";
import { Bs3CircleFill, Bs2CircleFill, Bs1CircleFill } from "react-icons/bs";

function Cart() {
  const { cart, updateQty, removeFromCart } = useCart();

  const [step, setStep] = useState(() => {
    const savedStep = localStorage.getItem("checkout_step");
    return savedStep ? Number(savedStep) : 1;
  });

  const goToStep = (num) => {
    setStep(num);
    localStorage.setItem("checkout_step", num);
  };

  const [shipping, setShipping] = useState(() => {
    const savedShip = localStorage.getItem("shipping_method");
    return savedShip || "free";
  });

  useEffect(() => {
    localStorage.setItem("shipping_method", shipping);
  }, [shipping]);

  
  const parsePrice = (price) => {
    if (typeof price === "number") return price;
    if (typeof price === "string") return parseFloat(price.replace(/[$,]/g, "")) || 0;
    return 0;
  };

  const subtotal = cart.reduce((acc, item) => acc + parsePrice(item.price) * item.qty, 0);
  const shippingCost = shipping === "free" ? 0 : shipping === "express" ? 15 : 21;
  const total = subtotal + shippingCost;

  const handleQtyChange = (id, newQty) => {
    if (newQty < 1) return;
    updateQty(id, newQty);
  };

  const formatPrice = (price) => {
    const num = Number(price);
    if (isNaN(num)) return "$0.00";
    return num.toLocaleString("en-US", { style: "currency", currency: "USD" });
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Cart</h1>

      <div className={styles.buttons}>
        <p onClick={() => goToStep(1)}><Bs1CircleFill /> Shopping Cart</p>
        <p onClick={() => goToStep(2)}><Bs2CircleFill /> Checkout Details</p>
        <p onClick={() => goToStep(3)}><Bs3CircleFill /> Order Complete</p>
      </div>

      {step === 1 && (
        <div className={styles.container}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className={styles.productCell}>
                    <img src={item.img} alt={item.name} className={styles.productImg} />
                    <div className={styles.pname}>{item.name}</div>
                  </td>
                  <td>{formatPrice(parsePrice(item.price))}</td>
                  <td>
                    <button className={styles.incredecre} onClick={() => handleQtyChange(item.id, item.qty - 1)}>-</button>
                    <span className={styles.qty}>{item.qty}</span>
                    <button className={styles.incredecre} onClick={() => handleQtyChange(item.id, item.qty + 1)}>+</button>
                  </td>
                  <td>{formatPrice(parsePrice(item.price) * item.qty)}</td>
                  <td>
                    <button className={styles.remove} onClick={() => removeFromCart(item.id)}>X</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.summaryBox}>
            <h3>Cart Summary</h3>
            <div className={styles.radioBox}>
              <label>
                <input type="radio" name="ship" checked={shipping === "free"} onChange={() => setShipping("free")} />
                Free Shipping <span>$0.00</span>
              </label>
              <label>
                <input type="radio" name="ship" checked={shipping === "express"} onChange={() => setShipping("express")} />
                Express Shipping <span>+ $15.00</span>
              </label>
              <label>
                <input type="radio" name="ship" checked={shipping === "pickup"} onChange={() => setShipping("pickup")} />
                Pick Up <span>$21.00</span>
              </label>
            </div>
            <div className={styles.priceRow}>
              <p>Subtotal</p>
              <p>{formatPrice(subtotal)}</p>
            </div>

            <div className={styles.totalRow}>
              <h3>Total</h3>
              <h3>{formatPrice(total)}</h3>
            </div>

            <button className={styles.checkoutBtn} onClick={() => goToStep(2)}>
              Checkout
            </button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className={styles.checkoutWrapper}>
          <div className={styles.leftSection}>
            <div className={styles.cardBox}>
              <h3>Contact Information</h3>
              <div className={styles.twoCol}>
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
              </div>
              <input type="text" placeholder="Phone number" />
              <input type="email" placeholder="Your Email" />
            </div>

            <div className={styles.cardBox}>
              <h3>Shipping Address</h3>
              <input type="text" placeholder="Street Address" />
              <select>
                <option>Country</option>
                <option>India</option>
                <option>USA</option>
              </select>
              <div className={styles.twoCol}>
                <input type="text" placeholder="Town / City" />
                <input type="text" placeholder="Zip Code" />
              </div>
              <div className={styles.twoCol}>
                <input type="text" placeholder="State" />
              </div>
            </div>

            <div className={styles.cardBox}>
              <h3>Payment Method</h3>
              <label className={styles.radioRow}>
                <input type="radio" name="pay" defaultChecked />
                Pay by Card Credit
              </label>
              <label className={styles.radioRow}>
                <input type="radio" name="pay" />
                Paypal
              </label>

              <input type="text" placeholder="Card Number 1234 1234 1234" />
              <div className={styles.twoCol}>
                <input type="text" placeholder="MM/YY" />
                <input type="text" placeholder="CVC Code" />
              </div>
            </div>

            <button className={styles.placeOrderBtn} onClick={() => goToStep(3)}>
              Place Order
            </button>
          </div>

          <div className={styles.rightSection}>
            <div className={styles.summaryCard}>
              <h3>Order summary</h3>
              {cart.map((item) => (
                <div key={item.id} className={styles.summaryItem}>
                  <img src={item.img} alt={item.name} />
                  <div>
                    <p>{item.name}</p>
                    <p>Qty: {item.qty}</p>
                  </div>
                  <span>{formatPrice(parsePrice(item.price) * item.qty)}</span>
                </div>
              ))}

              <div className={styles.couponRow}>
                <input type="text" placeholder="Input" />
                <button>Apply</button>
              </div>

              <div className={styles.priceRow}>
                <p>Shipping</p>
                <p>{shipping === "free" ? "Free" : formatPrice(shippingCost)}</p>
              </div>

              <div className={styles.priceRow}>
                <p>Subtotal</p>
                <p>{formatPrice(subtotal)}</p>
              </div>

              <div className={styles.totalRow2}>
                <h3>Total</h3>
                <h3>{formatPrice(total)}</h3>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className={styles.orderCompleteWrapper}>
          <div className={styles.orderCard}>
            <h2 className={styles.thankyou}>Thank you! 🎉</h2>
            <h1 className={styles.mainTitle}>Your order has been<br />received</h1>

            <div className={styles.productRow}>
              {cart.map((item) => (
                <div key={item.id} className={styles.productBox}>
                  <img src={item.img} alt={item.name} />
                  <span className={styles.qtyBadge}>{item.qty}</span>
                </div>
              ))}
            </div>

            <div className={styles.detailsBox}>
              <p><span>Order code:</span> #0123_45678</p>
              <p><span>Date:</span> October 19, 2023</p>
              <p><span>Total:</span> {formatPrice(total)}</p>
              <p><span>Payment method:</span> Credit Card</p>
            </div>

            <button className={styles.historyBtn}>
              Purchase history
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;