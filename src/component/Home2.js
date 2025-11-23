import React from "react";
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
import shop1 from "../Image2/Banner Grid.png";

function Home1() {
  const shop = [
    {
      id: 1,
      img: shop1,
      // title:"Headband"
    }
  ]
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
      title: "Skullcandy Crusher ANC 2",
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
      title: "Sony WH-CH720N",
      price: "$149.00",
      rating: 5,
      badge: "NEW",
    },
    {
      id: 4,
      img: image3,
      title: "Earbuds Pro",
      price: "$79.00",
      rating: 5,
      badge: "NEW",
    },
    {
      id: 5,
      img: image4,
      title: "Studio Pro Lite",
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
          <h1 className={styles.title}>
            Listen to the <span>amazing</span> music sound.
          </h1>
          <p className={styles.subtitle}>Experience music like never before</p>
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
        <h1>Shop Collection</h1>
        {shop.map((item)=>(
          <div className={styles.shop}>
          <img src={item.img}alt="" className={styles.shop1}/>
          {/* <h4 className={styles.head}>{item.title}</h4> */}
          </div>
        )) }

      </div>
    </>
  );
}

export default Home1;
