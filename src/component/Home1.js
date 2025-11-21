import React, { useEffect, useState } from "react";
import styles from "../styles/eHome1.module.css";

import home1e from "../img1/e-h1.png";
import home2e from "../img1/e-h2.jpg";

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
      reverse :false,
    },
    {
      id: 2,
      img: home2e,
      reverse : true,
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
    </>
  );
}
