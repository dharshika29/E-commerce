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

import { FaStar } from "react-icons/fa";

import { CiDeliveryTruck } from "react-icons/ci";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { CiLock } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

import hundresimg1 from "../img1/e-h6.png";

import articaleimg1 from "../img1/e-h7.png";
import articaleimg2 from "../img1/e-h8.png";
import articaleimg3 from "../img1/e-h9.png";

import Sfooter from "./Sfooter";
import { useNavigate } from "react-router-dom";

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
      }, 300);
    }, 4000);
    return () => clearInterval(timer);
  }, [hslide.length]);

  const slide = hslide[index];
  return (
    <div div className={styles.home_page}>
      <div className={styles.hslidebg}>
        {/* <div className={styles.slideTitleBox}>
          <h3 className={styles.slideMainTitle}><span>3</span>legant.</h3>
          <p className={styles.slideTag}>Modern Furniture Store</p>
          <p className={styles.slideTag}>Style your home with comfort</p>
        </div> */}
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
              <p>Shop Now →</p>
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
          <h1>New Arrivals</h1>
          <a href="/shop">
            <p>More Products →</p>
          </a>
        </div>
        <div className={styles.cardwrap}>
          <Cardhome />
        </div>
      </div>

      {/* delivery card --------------------------------------------- */}
      <div className={styles.delivery_wrap}>
        <div className={styles.delivery_card}>
          <div className={styles.delivery_icon}>
            <i>
              <CiDeliveryTruck />
            </i>
          </div>
          <div className={styles.delivery_content}>
            <h5>Free Shipping</h5>
            <p>Order above $200</p>
          </div>
        </div>

        <div className={styles.delivery_card}>
          <div className={styles.delivery_icon}>
            <i>
              <RiMoneyRupeeCircleLine />
            </i>
          </div>
          <div className={styles.delivery_content}>
            <h5>Money-back</h5>
            <p>30 days guarantee</p>
          </div>
        </div>

        <div className={styles.delivery_card}>
          <div className={styles.delivery_icon}>
            <i>
              <CiLock />
            </i>
          </div>
          <div className={styles.delivery_content}>
            <h5>Secure Payments</h5>
            <p>Secured by Stripe</p>
          </div>
        </div>

        <div className={styles.delivery_card}>
          <div className={styles.delivery_icon}>
            <i>
              <IoCallOutline />
            </i>
          </div>
          <div className={styles.delivery_content}>
            <h5>24/7 Support</h5>
            <p>Phone and Email support</p>
          </div>
        </div>
      </div>

      {/* HUNDREDS of New lower prices!------------------------- */}
      <div className={styles.hundres_bg}>
        <div className={`row ${styles.hundres_row}`}>
          <div className={`col-md-6 ${styles.hundres_col1}`}>
            <img src={hundresimg1} alt="" />
          </div>
          <div className={`col-md-6 ${styles.hundres_col2}`}>
            <h6>SALE UP TO 35% OFF</h6>
            <h1>
              HUNDREDS of <br />
              New lower prices!
            </h1>
            <p>
              It’s more affordable than ever <br /> to give every room in your
              home a stylish makeover
            </p>
            <a href="/shop">
              <span>Shop Now →</span>
            </a>
          </div>
        </div>
      </div>

      {/* Articles-------------------------------- */}
      <div className={styles.articale_bg}>
        <div className={styles.articale_title}>
          <h2>Articles</h2>
          <p>More Articles →</p>
        </div>
        <div className={styles.articale_card}>
          <div className={styles.articale_full_card1}>
          <div className={styles.articale_card1}>
            <img src={articaleimg1} alt="" />
          </div>
            <h6>7 ways to decor your home</h6>
            <a href="/">Read More →</a>
          </div>

          <div className={styles.articale_full_card1}>
          <div className={styles.articale_card1}>
            <img src={articaleimg2} alt="" />
          </div>
            <h6>Kitchen organization</h6>
            <a href="/">Read More →</a>
          </div>

          <div className={styles.articale_full_card1}>
          <div className={styles.articale_card1}>
            <img src={articaleimg3} alt="" />
          </div>
            <h6>Decor your bedroom</h6>
            <a href="/">Read More →</a>
          </div>
        </div>
      </div>

      {/* Join Our Newsletter------------------------------- */}
      {/* <div className={styles.news_bg}>
        <div className={styles.news_img} >
        <img src={newsletterimg} alt="" />
        </div>
        <div className={styles.news_text}>
          <h1>Join Our Newsletter</h1>
          <p>Sign up for deals, new products and promotions</p>
          <div className={styles.news_icon}>
            <i><MdOutlineEmail /></i>
          <input type="email" placeholder="Email address" />
          <span>Signup</span>
          </div>
        </div>
      </div> */}
      <Sfooter />
    </div>
  );
}

/* =======New Arrivals--------------------------------------- */
function Cardhome(category) {
  const navigate = useNavigate();

  const homecard = [
    {
      id: 1,
      name: "Bamboo basket",
      img: productcard1,
      price: "$199.00",
      old: "$400.00",
      isNew: true,
      discount: "-50%",
    },
    {
      id: 2,
      name: "Beige Table Lamp",
      img: productcard2,
      price: "$199.00",
      old: "$400.00",
      isNew: true,
      discount: "-50%",
    },
    {
      id: 3,
      name: "Loveseat Sofa",
      img: productcard3,
      price: "$199.00",
      old: "$400.00",
      isNew: true,
      discount: "-50%",
    },
    {
      id: 4,
      name: "Table Lamp",
      img: productcard4,
      price: "$199.00",
      old: "$400.00",
      isNew: true,
      discount: "-50%",
    },
  ];
  return (
    <>

      <div className={styles.product_grid}>
        {homecard.map((item) => (
          <div key={item.id} className={styles.product_card}>
            <div className={styles.card_img}>
              <div className={styles.card_tags}>
                {item.isNew && <span className={styles.tag_new}>NEW</span>}
                {item.discount && (
                  <span className={styles.tag_discount}>{item.discount}</span>
                )}
              </div>

              <img src={item.img} alt={item.name} />

              <button
                className={styles.addCartBtn}
                onClick={() => navigate(`/product/${item.id}?cat=${category}`)}
              >
                View Product
              </button>
            </div>

            <div className={styles.card_body}>
              <p className={styles.stars}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </p>

              <h3 className={styles.product_name}>{item.name}</h3>

              <div className={styles.price_box}>
                <span className={styles.new_price}>{item.price}</span>
                {item.old && (
                  <span className={styles.old_price}>{item.old}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
