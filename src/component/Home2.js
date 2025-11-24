import React, { useEffect, useState } from "react";
import styles from "../styles/Home2.module.css";
import img1 from "../Image2/s-logo1.png";
import img2 from "../Image2/s-logo2.png";
import img3 from "../Image2/s-logo3.png";
import img4 from "../Image2/s-logo4.png";
import img5 from "../Image2/s-logo5.png";
import img6 from "../Image2/s-logo6.png";
import image from "../Image2/s new arrivals1.png";
import image1 from "../Image2/s new arrivals2.jpg";
import image2 from "../Image2/s new arrivals3.png";
import image3 from "../Image2/s new arrivals4.png";
import image4 from "../Image2/s new arrivals5.png";
import { AiOutlineHeart } from "react-icons/ai";
import shop from "../Image2/s shop collection1.png";
import shop1 from "../Image2/s shop collection2.jpg";
import shop2 from "../Image2/s shop collection3.jpg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import seller1 from "../Image2/s best seller1.png";
import seller2 from "../Image2/s best seller2.jpg";
import seller3 from "../Image2/s best seller3.png";
import seller4 from "../Image2/s best seller4.png";
import seller5 from "../Image2/s best seller5.png";
import seller6 from "../Image2/s best seller6.jpg";
import seller7 from "../Image2/s best seller7.png";
import seller8 from "../Image2/s best seller8.png";
import man from "../Image2/s hurryup.jpg";
import Features from "../component/Features";
import insta1 from "../Image2/s instagram1.jpg";
import insta2 from "../Image2/s instagram2.jpg";
import insta3 from "../Image2/s instagram3.jpg";
import insta4 from "../Image2/s instagram4.jpg";
import join from "../Image2/s join1.png";
import girlImg from "../Image2/s join2.png";
import { FiMail } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FiYoutube } from "react-icons/fi";
function Home1() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 45,
    seconds: 5,
  });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const sellers = [
    {
      id: 1,
      img: seller5,
      title: "Beats  Studio Pro",
      price: "$299.99",
      rating: 5,
      badge: "HOT",
    },
    {
      id: 2,
      img: seller6,
      title: "JBL Reflect Flow Pro+ Bluetooth Truly Wireless Sports",
      price: "$349.99",
      rating: 5,
      badge: "HOT",
    },
    {
      id: 3,
      img: seller7,
      title: "Bose QuietComfort Headphones",
      price: "$149.00",
      rating: 5,
      badge: "HOT",
    },
    {
      id: 4,
      img: seller8,
      title: "AKG Y600NC Wireless",
      price: "$79.00",
      rating: 5,
      badge: "HOT",
    }
  ];

  const seller = [
    {
      id: 1,
      img: seller1,
      title: "Skullcandy Crusher ANC 2",
      price: "$299.99",
      rating: 5,
      badge: "HOT",
    },
    {
      id: 2,
      img: seller2,
      title: "Beats Studio Pro",
      price: "$349.99",
      rating: 5,
      badge: "HOT",
    },
    {
      id: 3,
      img: seller3,
      title: "Sony - WH-CH720N Wireless Noise Canceling",
      price: "$149.00",
      rating: 5,
      badge: "HOT",
    },
    {
      id: 4,
      img: seller4,
      title: "Skullcandy - Rail True Wireless Earbuds",
      price: "$79.00",
      rating: 5,
      badge: "HOT",
    }
  ];

  const logo = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 }
  ];

  const card = [
    {
      id: 1,
      img: image,
      title: "Skullcandy - Crusher anc 2 wireless headphones",
      price: "$299.99",
      rating: 5,
      badge: "NEW",
    },
    {
      id: 2,
      img: image1,
      title: "Beats Studio Pro",
      price: "$349.99",
      rating: 5,
      badge: "NEW",
    },
    {
      id: 3,
      img: image2,
      title: "Sony - WH-CH720N Wireless Noise Canceling",
      price: "$149.00",
      rating: 5,
      badge: "NEW",
    },
    {
      id: 4,
      img: image3,
      title: "Skullcandy - Rail True Wireless Earbuds",
      price: "$79.00",
      rating: 5,
      badge: "NEW",
    },
    {
      id: 5,
      img: image4,
      title: "Beats Studio Pro",
      price: "$219.00",
      rating: 5,
      badge: "NEW",
    }
  ];

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <h1 className={styles.titley}>
            Listen to the <span>amazing</span> music sound.
          </h1>
          <p className={styles.subtitley}>Experience music like never before</p>
          <button className={styles.btn}>Shopping Now</button>
        </div>
      </div>
      <div className={styles.hero1}>
        {logo.map((item) => (
          <img key={item.id} src={item.img} alt="" />
        ))}
      </div>
      <div className={styles.hero2}>
        <h1>New Arrivals</h1>
        <div className={styles.card1}>
          {card.map((item) => (
            <div key={item.id} className={styles.recentCard}>
              <div className={styles.badge}>{item.badge}</div>
              <div className={styles.wishlist}>
                <AiOutlineHeart size={20} />
              </div>
              <div className={styles.imageWrapper}>
                <img src={item.img} alt="" className={styles.image} />
                <button className={styles.cartBtn}>Add to Cart</button>
              </div>
              <div className={styles.stars}>
                {"★".repeat(item.rating)}
              </div>
              <p className={styles.cardTitle}>{item.title}</p>
              <p className={styles.cardPrice}>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.hero3}>
        <h2 className={styles.shoptitle}>Shop Collection</h2>

        <div className={styles.grid}>
          {/* Big Left Card */}
          <div className={styles.bigCard}>
            <img
              src={shop}
              alt="Headband"
              className={styles.bigImage}
            />
            <div className={styles.textBox}>
              <h3>Headband</h3>
              <button className={styles.link}>Collection <MdKeyboardDoubleArrowRight /></button>
            </div>
          </div>

          {/* Right Top Card */}
          <div className={styles.smallCard}>
            <img
              src={shop1}
              alt="Earbuds"
              className={styles.smallImage}
            />
            <div className={styles.textBox}>
              <h3>Earbuds</h3>
              <button className={styles.link}>Collection <MdKeyboardDoubleArrowRight /></button>
            </div>
          </div>

          {/* Right Bottom Card */}
          <div className={styles.smallCard}>
            <img
              src={shop2}
              alt="Accessories"
              className={styles.smallImage}
            />
            <div className={styles.textBox}>
              <h3>Accessories</h3>
              <button className={styles.link}>Collection <MdKeyboardDoubleArrowRight /></button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hero4}>
        <h1>New Arrivals</h1>
        <div className={styles.card2}>
          {seller.map((item) => (
            <div key={item.id} className={styles.recentCard}>
              <div className={styles.badge}>{item.badge}</div>

              <div className={styles.imageWrapper}>
                <img src={item.img} alt="" className={styles.image} />

              </div>
              <div className={styles.stars}>
                {"★".repeat(item.rating)}
              </div>
              <p className={styles.cardTitle}>{item.title}</p>
              <p className={styles.cardPrice}>{item.price}</p>
            </div>
          ))}
        </div>
        <div className={styles.card2}>
          {sellers.map((item) => (
            <div key={item.id} className={styles.recentCard}>
              <div className={styles.badge}>{item.badge}</div>

              <div className={styles.imageWrapper}>
                <img src={item.img} alt="" className={styles.image} />

              </div>
              <div className={styles.stars}>
                {"★".repeat(item.rating)}
              </div>
              <p className={styles.cardTitle}>{item.title}</p>
              <p className={styles.cardPrice}>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.hero5}>
        <img src={man} className={styles.leftImage} alt="promotion" />
        <div className={styles.rightBox}>
          <p className={styles.promoTag}>PROMOTION</p>
          <h2 className={styles.title}>Hurry up! 40% OFF</h2>
          <p className={styles.subTitle}>Thousands of high tech are waiting for you</p>
          <p className={styles.expire}>Offer expires in:</p>
          <div className={styles.timerRow}>
            <div className={styles.timerBox}>
              <h3>{String(timeLeft.days).padStart(2, "0")}</h3>
              <p>Days</p>
            </div>

            <div className={styles.timerBox}>
              <h3>{String(timeLeft.hours).padStart(2, "0")}</h3>
              <p>Hours</p>
            </div>

            <div className={styles.timerBox}>
              <h3>{String(timeLeft.minutes).padStart(2, "0")}</h3>
              <p>Minutes</p>
            </div>

            <div className={styles.timerBox}>
              <h3>{String(timeLeft.seconds).padStart(2, "0")}</h3>
              <p>Seconds</p>
            </div>
          </div>

          <button className={styles.shopBtn}>Shop now</button>
        </div>
      </div>

      <Features />
      <div className={styles.pass}>
        <p>NEWSFEED</p>
        <h1 className={styles.a2}>Instagram</h1>
        <p>Follow us on social media for more discount & promotions</p>
        <p>@3legant_official</p>
      </div>
      <div className={styles.a1} >
        <img src={insta1}
          alt="" className={styles.a3} />
        <img src={insta2}
          alt="" className={styles.a3} />
        <img src={insta3}
          alt="" className={styles.a3} />
        <img src={insta4}
          alt="" className={styles.a3} />

      </div>

      <section className={styles.banner}>
        {/* <img src={join} alt="Headphone" className={styles.leftImg} /> */}

        <div className={styles.centerContent}>
          <h2 className={styles.tit}>Join Our Newsletter</h2>
          <p className={styles.text}>
            Sign up for deals, new products and promotions
          </p>

           <div className={styles.emailBox}>
            <FiMail className={styles.mailIcon} />
            <input type="email" placeholder="Email address" />
            <button>Signup</button>
          </div>
        </div>
{/* 
        <img src={girlImg} alt="Girl" className={styles.rightImg} /> */}
      </section>

       {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <p className={styles.logoo}>3legant<span style={{color:"grey"}}>.</span><span className={styles.logo}>Headphone store</span> </p>

          <nav className={styles.nav}>
            <a>Home</a>
            <a>Shop</a>
            <a>Product</a>
            <a>Blog</a>
            <a>Contact Us</a>
          </nav>
        </div>

        <div className={styles.footerBottom}>
          <p>Copyright © 2023 3legant. All rights reserved</p>
          <div className={styles.links}>
            <p>Privacy Policy </p>
            <p>Terms of Use</p>
          </div>

          <div className={styles.insta}>

            <FaInstagram />
            <SlSocialFacebook />
            <FiYoutube />
          </div>
        </div>
      </footer>
    

    </>
  );
}

export default Home1;
