import React, { useState, useEffect } from "react";
import { useCart } from "../component/CartContext";
import styles from "../styles/Cart.module.css";
import { Bs3CircleFill, Bs2CircleFill, Bs1CircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Cart() {
  localStorage.setItem("checkout_step", 1);

  const navigate = useNavigate();
  const { cart, updateQty, removeFromCart } = useCart();

  const [step, setStep] = useState(() => {
    const saved = localStorage.getItem("checkout_step");
    return saved ? Number(saved) : 1;
  });

  const goToStep = (n) => {
    setStep(n);
    localStorage.setItem("checkout_step", n);
  };

  const [shipping, setShipping] = useState(
    localStorage.getItem("shipping_method") || "free"
  );

  useEffect(() => {
    localStorage.setItem("shipping_method", shipping);
  }, [shipping]);

  const parsePrice = (price) => {
    if (typeof price === "number") return price;
    if (typeof price === "string")
      return parseFloat(price.replace(/[$,]/g, "")) || 0;
    return 0;
  };

  const formatPrice = (num) =>
    Number(num).toLocaleString("en-US", { style: "currency", currency: "USD" });

  const subtotal = cart.reduce(
    (acc, item) => acc + parsePrice(item.price) * item.qty,
    0
  );

  const shippingCost =
    shipping === "free" ? 0 : shipping === "express" ? 15 : 21;

  const total = subtotal + shippingCost;

  const handleQtyChange = (id, val) => {
    if (val < 1) return;
    updateQty(id, val);
  };

  const [checkoutData, setCheckoutData] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("checkoutData")) || {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        street: "",
        city: "",
        zip: "",
        state: "",
        country: "",
        paymentMethod: "card",
        cardNumber: "",
        expiry: "",
        cvc: "",
        items: [],
      }
    );
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCheckoutData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    const checkoutDataWithItems = { ...checkoutData, items: cart };

    localStorage.setItem("checkoutData", JSON.stringify(checkoutDataWithItems));

    const address = {
      firstName: checkoutData.firstName,
      lastName: checkoutData.lastName,
      phone: checkoutData.phone,
      street: checkoutData.street,
      city: checkoutData.city,
      state: checkoutData.state,
      zip: checkoutData.zip,
      country: checkoutData.country,
    };

    localStorage.setItem("checkoutAddress", JSON.stringify([address]));

    const newOrder = {
      id: "ORD" + new Date().getTime(),
      date: new Date().toLocaleDateString(),
      status: "Processing",
      total: total.toFixed(2),
      items: cart,
      paymentMethod: checkoutData.paymentMethod,
    };

    const prevOrders = JSON.parse(localStorage.getItem("accountOrders")) || [];
    prevOrders.push(newOrder);
    localStorage.setItem("accountOrders", JSON.stringify(prevOrders));

    localStorage.removeItem("checkoutData");
    localStorage.removeItem("checkout_step");

    setCheckoutData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      street: "",
      city: "",
      zip: "",
      state: "",
      country: "",
      paymentMethod: "card",
      cardNumber: "",
      expiry: "",
      cvc: "",
      items: [],
    });

    goToStep(3);
  };

  const lastOrder =
    JSON.parse(localStorage.getItem("accountOrders"))?.slice(-1)[0] || {};

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>
        {step === 1 ? "Cart" : step === 2 ? "Checkout" : "Complete!"}
      </h1>

      <div className={styles.buttons}>
        <p
          className={step === 1 ? styles.activeStep : ""}
          onClick={() => goToStep(1)}
        >
          <Bs1CircleFill /> Shopping Cart
        </p>

        <p
          className={step === 2 ? styles.activeStep : ""}
          onClick={() => goToStep(2)}
        >
          <Bs2CircleFill /> Checkout Details
        </p>

        <p
          className={step === 3 ? styles.activeStep : ""}
          onClick={() => goToStep(3)}
        >
          <Bs3CircleFill /> Order Complete
        </p>
      </div>
      {step === 1 && (
        <div className={styles.container}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
                <th>Remove</th>
              </tr>
            </thead>

            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className={styles.productCell}>
                    <img
                      src={item.img}
                      alt={item.name}
                      className={styles.productImg}
                    />
                    <div className={styles.pname}>{item.name}</div>
                  </td>

                  <td>{formatPrice(parsePrice(item.price))}</td>

                  <td>
                    <button
                      className={styles.incredecre}
                      onClick={() => handleQtyChange(item.id, item.qty - 1)}
                    >
                      -
                    </button>
                    <span className={styles.qty}>{item.qty}</span>
                    <button
                      className={styles.incredecre}
                      onClick={() => handleQtyChange(item.id, item.qty + 1)}
                    >
                      +
                    </button>
                  </td>

                  <td>{formatPrice(parsePrice(item.price) * item.qty)}</td>

                  <td>
                    <button
                      className={styles.remove}
                      onClick={() => removeFromCart(item.id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.summaryBox}>
            <h3>Cart Summary</h3>

            <div className={styles.radioBox}>
              <label>
                <input
                  type="radio"
                  checked={shipping === "free"}
                  onChange={() => setShipping("free")}
                />
                Free Shipping <span>$0.00</span>
              </label>

              <label>
                <input
                  type="radio"
                  checked={shipping === "express"}
                  onChange={() => setShipping("express")}
                />
                Express Shipping <span>$15.00</span>
              </label>

              <label>
                <input
                  type="radio"
                  checked={shipping === "pickup"}
                  onChange={() => setShipping("pickup")}
                />
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
            {/* CONTACT INFO */}
            <div className={styles.cardBox}>
              <h3>Contact Information</h3>

              <div className={styles.twoCol}>
                <input
                  type="text"
                  name="firstName"
                  value={checkoutData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                />
                <input
                  type="text"
                  name="lastName"
                  value={checkoutData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                />
              </div>

              <input
                type="text"
                name="phone"
                value={checkoutData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
              />

              <input
                type="email"
                name="email"
                value={checkoutData.email}
                onChange={handleInputChange}
                placeholder="Email"
              />
            </div>
            <div className={styles.cardBox}>
              <h3>Shipping Address</h3>

              <input
                type="text"
                name="street"
                value={checkoutData.street}
                onChange={handleInputChange}
                placeholder="Street Address"
              />

              <select
                name="country"
                value={checkoutData.country}
                onChange={handleInputChange}
              >
                <option value="">Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
              </select>

              <div className={styles.twoCol}>
                <input
                  type="text"
                  name="city"
                  value={checkoutData.city}
                  onChange={handleInputChange}
                  placeholder="City"
                />

                <input
                  type="text"
                  name="zip"
                  value={checkoutData.zip}
                  onChange={handleInputChange}
                  placeholder="Zip Code"
                />
              </div>

              <input
                type="text"
                name="state"
                value={checkoutData.state}
                onChange={handleInputChange}
                placeholder="State"
              />
            </div>

            <div className={styles.cardBox}>
              <h3>Payment Method</h3>

              <label className={styles.radioRow}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={checkoutData.paymentMethod === "card"}
                  onChange={handleInputChange}
                />
                Card
              </label>

              <label className={styles.radioRow}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={checkoutData.paymentMethod === "paypal"}
                  onChange={handleInputChange}
                />
                PayPal
              </label>

              <input
                type="text"
                name="cardNumber"
                value={checkoutData.cardNumber}
                onChange={handleInputChange}
                placeholder="Card Number"
              />

              <div className={styles.twoCol}>
                <input
                  type="text"
                  name="expiry"
                  value={checkoutData.expiry}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                />
                <input
                  type="text"
                  name="cvc"
                  value={checkoutData.cvc}
                  onChange={handleInputChange}
                  placeholder="CVC"
                />
              </div>
            </div>

            <button className={styles.placeOrderBtn} onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.summaryCard}>
              <h3>Order Summary</h3>

              {cart.map((item) => (
                <div className={styles.summaryItem} key={item.id}>
                  <img src={item.img} alt={item.name} />
                  <div>
                    <p>{item.name}</p>
                    <p>Qty: {item.qty}</p>
                  </div>
                  <span>{formatPrice(parsePrice(item.price) * item.qty)}</span>
                </div>
              ))}

              <div className={styles.priceRow}>
                <p>Shipping</p>
                <p>
                  {shipping === "free" ? "Free" : formatPrice(shippingCost)}
                </p>
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
            <h2 className={styles.thankyou}>Thank You! 🎉</h2>
            <h1 className={styles.mainTitle}>Your order has been received</h1>
            <div className={styles.productRow}>
              {(lastOrder.items || []).map((item) => (
                <div className={styles.productBox} key={item.id}>
                  <img src={item.img} alt={item.name} />
                  <span className={styles.qtyBadge}>{item.qty}</span>
                </div>
              ))}
            </div>
            <div className={styles.detailsBox}>
              <p>
                <span>Order Code:</span> {lastOrder.id}
              </p>
              <p>
                <span>Date:</span> {lastOrder.date}
              </p>
              <p>
                <span>Total:</span> {formatPrice(lastOrder.total)}
              </p>
              <p>
                <span>Payment:</span>{" "}
                {lastOrder.paymentMethod === "card" ? "Card" : "PayPal"}
              </p>
            </div>

            <button
              className={styles.historyBtn}
              onClick={() => navigate("/account", { state: { tab: "orders" } })}
            >
              Purchase History
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
