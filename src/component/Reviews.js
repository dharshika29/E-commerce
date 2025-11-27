import React, { useState } from "react";
import styles from "../styles/Reviews.module.css";
import Sfooter from "./Sfooter";

export default function Reviews() {
  const [visible, setVisible] = useState(4);

  const reviews = [
    {
      name: "Arun Kumar",
      img: "https://i.pravatar.cc/60?img=5",
      rating: 5,
      text: "I bought this product about a month ago, and honestly, it surprised me in the best way. The build quality feels premium, the design is sleek, and it fits perfectly in my workspace. I’ve been using it almost every day, and it still looks brand new. Highly recommended!",
    },
    {
      name: "Megha Suresh",
      img: "https://i.pravatar.cc/60?img=12",
      rating: 4,
      text: "Good product for the price. The material feels sturdy and durable. Delivery was quick and the packaging was very secure. A great choice for minimalistic setups.",
    },
    {
      name: "Rahul Dev",
      img: "https://i.pravatar.cc/60?img=14",
      rating: 5,
      text: "Absolutely loved it! It blends perfectly with my home setup. The finish and overall functionality exceeded my expectations. Worth every rupee!",
    },
    {
      name: "Priya Narayanan",
      img: "https://i.pravatar.cc/60?img=18",
      rating: 5,
      text: "The product is exactly as shown in the photos. Very stylish and super useful. I’ve already received compliments from guests. Truly premium.",
    },
    {
      name: "Kavin Raj",
      img: "https://i.pravatar.cc/60?img=7",
      rating: 4,
      text: "My second purchase from this brand, and it didn’t disappoint. Solid build, modern look, and very functional.",
    },
    {
      name: "Anitha Joseph",
      img: "https://i.pravatar.cc/60?img=9",
      rating: 5,
      text: "Looks beautiful and performs even better. I’ve been using it regularly and it has improved my daily routine.",
    },
    {
      name: "Sriram V",
      img: "https://i.pravatar.cc/60?img=22",
      rating: 5,
      text: "Exceeded my expectations! Elegant finish, smooth surface, and extremely functional. A must-buy!",
    },
    {
      name: "Jhanavi Reddy",
      img: "https://i.pravatar.cc/60?img=25",
      rating: 4,
      text: "Very satisfied! It feels solid and adds a clean, minimalistic touch to my room.",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.reviewsPage}>

          <div className={styles.tabs}>
            <span>Additional Info</span>
            <span>Questions</span>
            <span className={styles.active}>Reviews</span>
          </div>

          <h2 className={styles.title}>Customer Reviews</h2>

          <div className={styles.ratingRow}>
            <span className={styles.stars}>★★★★☆</span>
            <span className={styles.revCount}>11 Reviews</span>
          </div>

          <div className={styles.pill}>Tray Table</div>

 
          <div className={styles.actionRow}>
            <div className={styles.emojiWrapper}>
              <div className={styles.emojiTooltip}>❤️ 😍 😊 🤩 😲 😡</div>
              <button className={styles.writeButton}>Write Review</button>
            </div>
          </div>


          <div className={styles.sortRow}>
            <h3 className={styles.subTitle}>11 Reviews</h3>
            <select className={styles.sortSelect}>
              <option>Newest</option>
              <option>Oldest</option>
              <option>Most Liked</option>
            </select>
          </div>
          <div className={styles.list}>
            {reviews.slice(0, visible).map((r, index) => (
              <div key={index} className={styles.reviewCard}>
                <img src={r.img} alt="" className={styles.avatar} />

                <div className={styles.reviewContent}>
                  <h4 className={styles.name}>{r.name}</h4>
                  <div className={styles.cardStars}>★★★★★</div>
                  <p className={styles.text}>{r.text}</p>

                  <div className={styles.actions}>
                    <span>Like</span>
                    <span>Reply</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {visible < reviews.length ? (
            <button
              className={styles.loadMore}
              onClick={() => setVisible(visible + 2)}
            >
              Load more
            </button>
          ) : (
            <button
              className={styles.loadMore}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setVisible(4);
              }}
            >
              Show Less
            </button>
          )}
        </div>
      </div>

      <Sfooter />
    </>
  );
}
