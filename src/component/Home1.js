import React, { useEffect, useState } from "react";
import styles from "../styles/eHome1.module.css";

import home1e from "../img1/e-h1.png";
import home2e from "../img1/e-h2.jpg";

import homeproduct1 from "../img1/e-h3.png";
import homeproduct2 from "../img1/e-h4.png";
import homeproduct3 from "../img1/e-h5.png";

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
      {/* <div className={`container ${styles.home_product_container}`}>
        <div className={`row ${styles.home_product_row}`}>
          <div className={`col-md-6 ${styles.home_product_col1}`}>
            <img src={homeproduct1} alt="product" />
            <h4>Living Room</h4>
            <p>Shop Now</p>
          </div>
          <div className={`col-md-6 ${styles.home_product_col2}`}>
          <div className={`col-md-6 ${styles.home_product_col21}`}>
            <img src={homeproduct2} alt="product" />
            <h4>Living Room</h4>
            <p>Shop Now</p>
          </div>
          <div className={`col-md-6 ${styles.home_product_col22}`}>
            <img src={homeproduct3} alt="product" />
            <h4>Living Room</h4>
            <p>Shop Now</p>
          </div>
          </div>
        </div>
      </div> */}

      <div className={`container ${styles.home_product_container}`}>
        <div className={styles.home_product_row}>
          <div className={styles.home_product_col1}>
            <h4>Living Room</h4>
            <p>Shop Now →</p>
            <img src={homeproduct1} alt="product" />
          </div>
          <div className={styles.home_product_col2}>
            <div className={styles.home_product_col21}>
              <h4>Bedroom</h4>
              <p>Shop Now →</p>
              <img width={350} src={homeproduct2} alt="product" />
            </div>
            <div className={styles.home_product_col22}>
              <h4>Kitchen</h4>
              <p>Shop Now →</p>
              <img width={350} src={homeproduct3} alt="product" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
