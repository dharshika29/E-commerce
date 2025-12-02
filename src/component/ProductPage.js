import React, { useState, useEffect, useCallback } from "react";
import { useParams, useLocation, Link, useNavigate } from "react-router-dom";
import { PRODUCT_DATA } from "./Shop1";
import styles from "../styles/ProductPage.module.css";
import Reviews from "./Reviews";
import { useCart } from "../component/CartContext";

export default function ProductPage() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("cat") || "all";

  // --- Get Product ---
  const { id } = useParams();
  const allProducts = Object.values(PRODUCT_DATA).flat();
  const product = allProducts.find((p) => p.id === Number(id));

  // --- Hooks ---
  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Black");

  // Offer Timer
  const offerEnd = new Date().getTime() + 2 * 24 * 60 * 60 * 1000;

  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const diff = offerEnd - now;

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }, [offerEnd]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);


  const images = [
    product?.img,
    product?.img2 || product?.img,
    product?.img3 || product?.img,
  ].filter(Boolean);

  const [mainImage, setMainImage] = useState(images[0]);

  // If product invalid
  if (!product) {
    return (
      <div className={styles.notFound}>
        <h2>Product Not Found</h2>
        <Link to="/shop">Go Back to Shop</Link>
      </div>
    );
  }

  // Wishlist
  const addToWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const exists = wishlist.some((item) => item.id === product.id);

    if (exists) return alert("Already in wishlist");

    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert("Added to wishlist!");
  };

  return (
    <>
      <div className={styles.page}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link to="/">Home</Link> &gt;
          <Link to="/shop"> Shop</Link> &gt;
          <Link to={`/shop#${category}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Link>
          &gt; <span>{product.name}</span>
        </div>

        <div className={styles.container}>
          {/* LEFT */}
          <div className={styles.left}>
            <img src={mainImage} alt="" className={styles.mainImg} />

            <div className={styles.gallery}>
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className={styles.thumb}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.right}>
            <div className={styles.review}>
              ★★★★★ <span>11 Reviews</span>
            </div>

            <h2 className={styles.title}>{product.name}</h2>

            <p className={styles.desc}>
              {product.description ||
                "Lightweight, versatile, and designed for modern living spaces."}
            </p>

            <div className={styles.priceWrap}>
              <span className={styles.newPrice}>{product.price}.00</span>
              {product.oldPrice && (
                <span className={styles.oldPrice}>${product.oldPrice}.00</span>
              )}
            </div>

            {/* Timer */}
            <div className={styles.timerBox}>
              <h4>Offer expires in:</h4>
              <div className={styles.timerRow}>
                {["days", "hours", "minutes", "seconds"].map((unit) => (
                  <div key={unit} className={styles.timerItem}>
                    <span>{String(timeLeft[unit]).padStart(2, "0")}</span>
                    <p>{unit.charAt(0).toUpperCase() + unit.slice(1)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Colors */}
            <h4 className={styles.subtitle}>Choose Color</h4>
            <p className={styles.text}>{selectedColor}</p>

            <div className={styles.colorRow}>
              {[
                { hex: "#000", label: "Black" },
                { hex: "#c9c1b3", label: "Beige" },
                { hex: "#d4a99c", label: "Nude" },
                { hex: "#c94444", label: "Red" },
                { hex: "#ececec", label: "White" },
              ].map((color, i) => (
                <div
                  key={i}
                  className={styles.colorBox}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => setSelectedColor(color.label)}
                ></div>
              ))}
            </div>

            {/* Qty + Wishlist */}
            <div className={styles.actions}>
              <div className={styles.qtyBox}>
                <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty + 1)}>+</button>
              </div>

              <button className={styles.wishlist} onClick={addToWishlist}>
                ♡ Wishlist
              </button>
            </div>

            <button
              className={styles.addCart}
              onClick={() => {
                addToCart(product, qty);
                navigate("/cart");
              }}
            >
              Add to Cart
            </button>

            <div className={styles.extraInfo}>
              <p>SKU: 1117</p>
              <p>Category: {category.toUpperCase()}</p>
            </div>
          </div>
        </div>
      </div>

      <Reviews />
    </>
  );
}
