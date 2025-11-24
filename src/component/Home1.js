import React, { useEffect, useState } from "react";
import styles from "../styles/eHome1.module.css";

import home1e from "../img1/e-h1.png";
import home2e from "../img1/e-h2.jpg";

import homeproduct1 from "../img1/e-h3.png";
import homeproduct2 from "../img1/e-h4.png";
import homeproduct3 from "../img1/e-h5.png";

import productcard1 from "../img1/card/1.png";
import productcard2 from "../img1/card/2.png";
import productcard3 from "../img1/card/3.png";
import productcard4 from "../img1/card/4.png";

import {
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
function Home1() {
  return (
    <>
      <div>
        <Homeslide />
      </div>
    </>
  );
}
export default Home1;

// Home slide img -------------------------------------------------------------------
function Homeslide() {
  const hslide = [
    {
      id: 1,
      img: home1e,
      reverse: false,
    },
    {
      id: 2,
      img: home2e,
      reverse: true,
    },
  ];

  const [index, setIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fadeIn");

  useEffect(() => {
    const timer = setInterval(() => {
      setFadeState("fadeOut");
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % hslide.length);
        setFadeState("fadeIn");
      }, 500);
    }, 4000);
    return () => clearInterval(timer);
  }, [hslide.length]);

  const slide = hslide[index];
  return (
    <>
      <div className={styles.hslidebg}>
        <div
          className={`${styles.slideWrapper} ${
            slide.reverse ? styles.reverse : ""
          } ${styles[fadeState]}`}
        >
          {/* slide img--------------------------------------------  */}
          <div
            className={` ${styles.slideimg} ${
              hslide.id === 1 ? styles.slidesimg1 : styles.slideimg2
            }`}
          >
            <img src={slide.img} alt={`Slide ${slide.id}`} />
          </div>
        </div>
      </div>
      {/* slide botton title-------------------------------------------------- */}
      <div className={styles.bottom_text_bg}>
        <div className={styles.bottom_text1}>
          <h1>
            Simply Unique <span>/</span> <br />
            Simply Better <span>.</span>
          </h1>
        </div>
        <div className={styles.bottom_text2}>
          <p>
            <span>3legant</span> is a gift & decorations store based in HCMC,{" "}
            <br /> Vietnam. Est since 2019.
          </p>
        </div>
      </div>

      {/* --------- home Living Room--------- */}
      <div className={`container ${styles.home_product_container}`}>
        <div className={styles.home_product_row}>
          <div className={styles.home_product_col1}>
            <h4>Living Room</h4>
            <a href="/shop">
              <p>Shop Now →</p>{" "}
            </a>
            <img src={homeproduct1} alt="product" />
          </div>
          <div className={styles.home_product_col2}>
            <div className={styles.home_product_col21}>
              <h4>Bedroom</h4>
              <a href="/shop">
                <p>Shop Now →</p>{" "}
              </a>
              <img width={350} src={homeproduct2} alt="product" />
            </div>
            <div className={styles.home_product_col22}>
              <h4>Kitchen</h4>
              <a href="/shop">
                <p>Shop Now →</p>{" "}
              </a>
              <img width={350} src={homeproduct3} alt="product" />
            </div>
          </div>
        </div>
      </div>

      {/* =======New Arrivals--------------------------------------- */}
      <div className={styles.new_arrivals}>
        <div className={styles.new1}>
          <h1>
            New <br />
            Arrivals
          </h1>
          <a href="/shop">
            <p>More Products →</p>
          </a>
        </div>
        <div className={styles.cardwrap}>
          <Cardhome />
        </div>
      </div>
    </>
  );
}

function Cardhome() {
  const homecard = [
    {
      id: 1,
      title: "Bamboo basket",
      img: productcard1,
      newprice: 499,
      oldprice: 799,
    },
    {
      id: 2,
      title: "Beige Table Lamp",
      img: productcard2,
      newprice: 499,
      oldprice: 799,
    },
    {
      id: 3,
      title: "Loveseat Sofa",
      img: productcard3,
      newprice: 499,
      oldprice: 799,
    },
    {
      id: 4,
      title: "Table Lamp",
      img: productcard4,
      newprice: 499,
      oldprice: 799,
    },
     {
      id: 4,
      title: "Table Lamp",
      img: productcard1,
      newprice: 499,
      oldprice: 799,
    },
  ];
  return (
    <>
      {homecard.map((product) => (
        <div className={styles.card} key={product.id}>
          <img src={product.img} alt="" className={styles.cardimg} />
          <div className={styles.cardBody}>
            <div className={styles.rating}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <h3 className={styles.title}>{product.title}</h3>
            <div className={styles.price}>
              <span>₹{product.newprice}</span>
              <del>₹{product.oldprice}</del>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
