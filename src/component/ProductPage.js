import React, { useState, useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { PRODUCT_DATA } from "./Shop1";
import styles from "../styles/ProductPage.module.css";
import Reviews from "./Reviews";

export default function ProductPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("cat") || "all";

  const { id } = useParams();


  const allProducts = Object.values(PRODUCT_DATA).flat();
  const product = allProducts.find((p) => p.id === Number(id));

  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Black");


  const offerEndRef = useRef(null);

  if (!offerEndRef.current) {
    offerEndRef.current = new Date().getTime() + 2 * 24 * 60 * 60 * 1000;
  }

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const diff = offerEndRef.current - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!product) return <h2>Product not found</h2>;


  const images = [
    product.img,
    product.img2 || product.img,
    product.img3 || product.img,
  ];

  return (
    <>
      <div className={styles.page}>
   
        <div className={styles.breadcrumb}>
          <a href="/">Home</a> &gt;
          <a href="/shop"> Shop</a> &gt;
          <a href={`/shop#${category}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </a>
          &gt; <span>{product.name}</span>
        </div>

   
        <div className={styles.container}>
    
          <div className={styles.left}>
            <img src={product.img} alt="" className={styles.mainImg} />

            <div className={styles.gallery}>
              {images.map((img, index) => (
                <img key={index} src={img} alt="" className={styles.thumb} />
              ))}
            </div>
          </div>

    
          <div className={styles.right}>
            <div className={styles.review}>
              ★★★★★ <span>11 Reviews</span>
            </div>

            <h2 className={styles.title}>{product.name}</h2>

            <p className={styles.desc}>
              {product.description ||
                "Lightweight, versatile, and designed for modern living spaces, this piece blends functionality with style. Built using high-quality materials, it offers excellent durability while maintaining a smooth, elegant finish. The removable tray top makes serving, organizing, and decorating effortless, and the compact structure ensures it fits beautifully in bedrooms, living rooms, balconies, or office corners. Perfect for holding beverages, books, plants, or décor items, this furniture piece enhances your space with a clean and minimal aesthetic that complements any interior."}
            </p>

            <div className={styles.priceWrap}>
              <span className={styles.newPrice}>{product.price}</span>
              <span className={styles.oldPrice}>
                ${product.oldPrice}.00
              </span>
            </div>

     
            <div className={styles.timerBox}>
              <h4>Offer expires in:</h4>
              <div className={styles.timerRow}>
                <div className={styles.timerItem}>
                  <span>{String(timeLeft.days).padStart(2, "0")}</span>
                  <p>Days</p>
                </div>

                <div className={styles.timerItem}>
                  <span>{String(timeLeft.hours).padStart(2, "0")}</span>
                  <p>Hours</p>
                </div>

                <div className={styles.timerItem}>
                  <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
                  <p>Minutes</p>
                </div>

                <div className={styles.timerItem}>
                  <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
                  <p>Seconds</p>
                </div>
              </div>
            </div>

            <h4 className={styles.subtitle}>Measurements</h4>
            <p className={styles.text}>17 1/2x20 5/8 "</p>

            <h4 className={styles.subtitle}>Choose Color</h4>
            <p className={styles.text}>{selectedColor}</p>

            <div className={styles.colorRow}>
              {["#000", "#c9c1b3", "#d4a99c", "#c94444", "#ececec"].map(
                (c, i) => (
                  <div
                    key={i}
                    className={styles.colorBox}
                    style={{ backgroundColor: c }}
                    onClick={() => setSelectedColor(c)}
                  ></div>
                )
              )}
            </div>

            <div className={styles.actions}>
              <div className={styles.qtyBox}>
                <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>
                  -
                </button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty + 1)}>+</button>
              </div>

              <button className={styles.wishlist}>♡ Wishlist</button>
            </div>

            <button className={styles.addCart}>Add to Cart</button>

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
