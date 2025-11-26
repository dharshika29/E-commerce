import React, { useEffect, useState } from "react";
import styles from "../styles/Home3.module.css";
import featuredimg1 from '../image3/j featuredimg1.png';
import featuredimg2 from '../image3/j featuredimg2.png';
import featuredimg3 from '../image3/j featuredimg3.png';
import featuredimg4 from '../image3/j featuredimg4.png';
import { FaStar } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import category1 from '../image3/j category1.png'
import category2 from '../image3/j category2.png'
import category3 from '../image3/j category3.png'
import category4 from '../image3/j category4.png'
import category5 from '../image3/j category5.png'
import category6 from '../image3/j category6.png'
import limited from '../image3/j limitedimg.jpg'
import bag1 from '../image3/j collectionbig.png'
import bag2 from '../image3/j collectionsmal1.png'
import bag3 from '../image3/j collectionsmal2.png'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import article1 from '../image3/j article1.png'
import article2 from '../image3/j article2.png'
import article3 from '../image3/j article3.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import insta1 from '../image3/j lastimg1.png';
import insta2 from '../image3/j lastimg2.png';
import insta3 from '../image3/j lastimg3.png';
import insta4 from '../image3/j lastimg4.png';
import insta5 from '../image3/j lastimg5.png';
import insta6 from '../image3/j lastimg6.png';

function Home3() {
  const carditem = [
    { img: featuredimg1, desc: "Shark - Men's cabretta white golf glove ", price: "$19.00" },
    { img: featuredimg2, desc: "Greg Norman - Men's Shark Logo Golf Polo Shirt", price: "$20.00" },
    { img: featuredimg3, desc: "G/FORE - Mens Left Glove Snow 2023", price: "$30.00" },
    { img: featuredimg4, desc: "Utility Rover-R Double Strap Bag All Black - 2023", price: "$200.00" }
  ]
  const part = [
    { img: category1, desc: "Golf Clubs" }, { img: category2, desc: "Golf Balls" }, { img: category3, desc: "Golf Bags" },
  ]
  const part1 = [
    { img1: category4, desc: "Clothing and RainWear" }, { img1: category5, desc: "FootWear" }, { img1: category6, desc: "Accessories" },
  ]
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
  const article = [
    { img: article1, desc: "Air Jordan x Travis Scott Event" }, { img: article2, desc: "The timeless classics on the green" },
    { img: article3, desc: "The 2023 Ryder Cup" }
  ]
  const insta = [
    { img: insta1 }, { img: insta2 }, { img: insta3 }, { img: insta4 }, { img: insta5 }, { img: insta6 },
  ]
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.right}>
          <p className={styles.title}>
            <span>More than<br></br></span> just a game.<br></br>It’s a lifestyle.
          </p>
          <p className={styles.subtitle}>
            Whether you’re just starting out,have played<br></br> your whole life or you're a
            Tour pro, your<br></br>  swing is like a fingerprint.
          </p>
          <button className={styles.btn}>Shopping Now</button>
        </div>
      </div>
      <h1 className={styles.hh1}>Featured</h1>
      <div className={styles.maincard}>
        {carditem.map((items, index) => (
          <div className={styles.cardpart} key={index}>
            <Card style={{ width: '18rem' }} className={styles.card}>
              <div className={styles.imageWrapper}>
                <p className={styles.hot}>HOT</p>
                <Card.Img
                  variant="top"
                  src={items.img}
                  className={styles.cardimg}
                />
                <button className={styles.cartBtn}>ADD TO CART</button>
              </div>
              <Card.Body>
                <Card.Title>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star} className={styles.star}
                      color={star <= items.rating ? "gold" : "black"}
                    />
                  ))}
                </Card.Title>
                <Card.Text>
                  <p className={styles.pp1}>{items.desc}</p>
                  <p className={styles.pp2}>{items.price}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <h1 className={styles.hh2}>Shop by Categories</h1>
      <div className={styles.main1}>
        {part.map((parts) => (
          <div className={styles.category}>
            <img src={parts.img} alt="" width="100%" />
            <p className={styles.pp3}>{parts.desc}</p>
          </div>
        ))}
      </div>
      <div className={styles.main1}>
        {part1.map((parts) => (
          <div className={styles.category}>
            <img src={parts.img1} alt="" width="100%" />
            <p className={styles.pp3}>{parts.desc}</p>
          </div>
        ))}
      </div>
      <div className={styles.main2}>
        <img src={limited} className={styles.limitedimg} alt="" />
        <div className={styles.Boxtwo}>
          <p className={styles.edition}>LIMITED EDITION</p>
          <h2 className={styles.offer}>Hurry up! 40% OFF</h2>
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

          <button className={styles.btn}>Shop now</button>
        </div>
      </div>
      <h1 className={styles.hh1}>Shop Collection</h1>
      <div className={styles.hero3}>
        <div className={styles.grid}>

          <div className={styles.bigCard}>
            <img
              src={bag1}
              alt=""
              className={styles.bigImage}
            />
            <div className={styles.Box}>
              <h3>Junior's Set</h3>
              <button className={styles.link}>Collection <MdKeyboardDoubleArrowRight /></button>
            </div>
          </div>
          <div className={styles.smallCard}>
            <img
              src={bag2}
              alt=""
              className={styles.smallImage}
            />
            <div className={styles.textBox}>
              <h3>Men's Set</h3>
              <button className={styles.link}>Collection <MdKeyboardDoubleArrowRight /></button>
            </div>
          </div>
          <div className={styles.smallCard}>
            <img
              src={bag3}
              alt=""
              className={styles.smallImage}
            />
            <div className={styles.textBox}>
              <h3>Women's Set</h3>
              <button className={styles.link}>Collection <MdKeyboardDoubleArrowRight /></button>
            </div>
          </div>
        </div>
      </div>
      <h1 className={styles.hh1}>Latest Articles</h1>
      <div className={styles.main1}>
        {article.map((articles) => (
          <div className={styles.category}>
            <img src={articles.img} alt="" width="100%" />
            <p className={styles.pp4}>{articles.desc}</p>
            <a href="">Read More <FaArrowRightLong /></a>
          </div>
        ))}
      </div>
      <div className={styles.news}>
        <h1 className={styles.hh3}>Join Our Newsletter</h1>
        <p className={styles.pp5}>Sign up for deals, new products and promotions</p>
        <div className={styles.li}>
          <li><FaEnvelope /></li>
          <li>Email Address</li>
        <li className={styles.lisi}>SignUp</li>
        </div>
      </div>
      <div className={styles.instagram}>
        <p className={styles.feed}>NEWSFEED</p>
        <h1 className={styles.gram}>Instagram</h1>
        <p className={styles.pp6}>Follow us on social media for more discount & promotions</p>
        <p className={styles.offi}>@3legant_official</p>
      </div>
      <div className={styles.instamain}>
        {insta.map((instas) => (
          <div className={styles.insimg}>
            <img src={instas.img} alt="" width="125%"/>
           
          </div>
        ))}
      </div>



    </>
  );
}
export default Home3;