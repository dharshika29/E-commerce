import React from "react";
import styles from "../styles/Home3.module.css";
import featuredimg1 from '../image3/j-featuredimg1.png';
import featuredimg2 from '../image3/j featuredimg2.png';
import featuredimg3 from '../image3/j featuredimg3.png';
import featuredimg4 from '../image3/j featured4.png';
import { FaStar } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import category1 from '../image3/j categories1.jpg'
import category2 from '../image3/j categories2.jpg'
import category3 from '../image3/j categories3.jpg'
import category4 from '../image3/j featuredimg2.png'
import category5 from '../image3/j categories5.png'
import category6 from '../image3/j featuredimg3.png'

function Home3() {
  const carditem = [
    { img: featuredimg1, desc: "Shark - Men's cabretta white golf glove ", price: "$19.00" },
    { img: featuredimg2, desc: "Greg Norman - Men's Shark Logo Golf Polo Shirt", price: "$20.00" },
    { img: featuredimg3, desc: "G/FORE - Mens Left Glove Snow 2023", price: "$30.00" },
    { img: featuredimg4, desc: "Utility Rover-R Double Strap Bag All Black - 2023", price: "$200.00" }
  ]
  const category = [
    { img: category1, desc: "Golf Clubs" }, { img: category2, desc: "Golf Balls" }, { img: category3, desc: "Golf Bags" },
   
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

        <h1>Shop by Categories</h1>
        <div className={styles.catemain}>
        {category.map((categor) => (
         <img src={categor.img} alt="" className={styles.cateimg}/>
        ))}
      </div>
       <div className={styles.catemain}>
        {category.map((categor) => (
         <img src={categor.img1} alt="" className={styles.cateimg}/>
        ))}
      </div>
    
    </>
  );
}
export default Home3;