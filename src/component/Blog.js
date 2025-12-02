import React, { useState } from "react";
import styles from "../styles/s-blog.module.css";

import shopbgimg from "../Image2/s-blog1.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaTh, FaThLarge } from "react-icons/fa";
import { MdViewDay, MdViewHeadline } from "react-icons/md";

import image1 from "../Image2/s-img.png";
import image2 from "../Image2/s-img1.png";
import image3 from "../Image2/s-img2.png";
import image4 from "../Image2/s-img4.png";
import image5 from "../Image2/s-img5.png";
import image6 from "../Image2/s-img6.png";
import image7 from "../Image2/s-img7.png";
import image8 from "../Image2/s-img5.png";
import image9 from "../Image2/s-img6.png";
import image10 from "../Image2/s-img5.png";

import { Link } from "react-router-dom";

export default function Blog() {
  const initialCount = 6;
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [expanded, setExpanded] = useState(false);

  const data = [
    { id: 1, img: image1, title: "7 ways to decorate your home like a professional", date: "March 20, 2024" },
    { id: 2, img: image2, title: "Inside a beautiful kitchen organization", date: "March 20, 2024" },
    { id: 3, img: image3, title: "Decor your bedroom for your children", date: "March 20, 2024" },
  ];

  const repeated = [
    { id: 4, img: image4, title: "Modern town home is beautiful & kid-friendly", date: "March 20, 2024" },
    { id: 5, img: image5, title: "Luxury interior styling for modern homes", date: "March 20, 2024" },
    { id: 6, img: image6, title: "Perfect light setups for living rooms", date: "March 20, 2024" },
    { id: 7, img: image7, title: "How to choose the perfect furniture", date: "March 20, 2024" },
    { id: 8, img: image8, title: "Small home decoration ideas", date: "March 20, 2024" },
    { id: 9, img: image9, title: "Modern minimalist interior trends", date: "March 20, 2024" },
    { id: 10, img: image10, title: "Stylish and budget-friendly bedroom setup", date: "March 20, 2024" },
  ];

  const allData = [...data, ...repeated];

  const loadMore = () => {
    setVisibleCount(allData.length);
    setExpanded(true);
  };

  const showLess = () => {
    setVisibleCount(initialCount);
    setExpanded(false);
  };

  return (
    <>
      <div className={styles.shope_page}>
        <div className={styles.shop_bg}>
          <div className={styles.shop_img}>
            <img src={shopbgimg} alt="shop_bg" />
          </div>

          <div className={styles.shop_text}>
            <div className={styles.shop_icon}>
              <Link to="/"><h5>Home</h5></Link>
              <span><MdKeyboardArrowRight /></span>
              <Link to="/blog"><h5>Blog</h5></Link>
            </div>

            <h1>Blog Page</h1>
            <p>Home ideas and design inspiration</p>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.leftTabs}>
            <button className={styles.active}>All Blog</button>
            <button>Featured</button>
          </div>

          <div className={styles.rightSide}>
            <span className={styles.sortText}>Sort by</span>
            <select className={styles.sortSelect}>
              <option>Latest</option>
              <option>Oldest</option>
            </select>

            <div className={styles.icons}>
              <FaTh className={styles.icon} />
              <FaThLarge className={styles.icon} />
              <MdViewDay className={styles.icon} />
              <MdViewHeadline className={styles.icon} />
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {allData.slice(0, visibleCount).map((item) => (
            <Link to={`/blog/${item.id}`} className={styles.card} key={item.id}>
              <div className={styles.imgBox}>
                <img src={item.img} alt={item.title} />
              </div>

              <div className={styles.cardText}>
                <h3>{item.title}</h3>
                <p className={styles.date}>{item.date}</p>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          {!expanded ? (
            <button className={styles.loadMore} onClick={loadMore}>
              Show more
            </button>
          ) : (
            <button className={styles.loadMore} onClick={showLess}>
              Show less
            </button>
          )}
        </div>
      </div>
    </>
  );
}
