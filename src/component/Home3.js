import React from "react";
import styles from "../styles/Home3.module.css";
import featuredimg1 from '../image3/j-featuredimg1.png';
import featuredimg2 from '../image3/j featuredimg2.png';
import featuredimg3 from '../image3/j featuredimg3.png';
import featuredimg4 from '../image3/j featured4.png';

function Home3() {
  const item=[
    {img:featuredimg1},
    {img:featuredimg2},
    {img:featuredimg3},
    {img:featuredimg4}
  ]
  return (
    <>
    <div className={styles.hero}>
      <div className={styles.right}>
        <p className={styles.title}>
         <span>More than</span> just a game<br></br>It’s a lifestyle. 
        </p>
         <p className={styles.subtitle}>
         Whether you’re just starting out,have<br></br>played your whole life or you're a
          Tour<br></br> pro, your swing is like a fingerprint.
        </p>
        <button className={styles.btn}>Shopping Now</button>
      </div>
    </div>
     <div className={styles.hero1}>
      <h1>Featured</h1>
     </div>
     <div className={styles.maintitle}>
     {item.map((part,index)=>(
      <div className={styles.title1} key={index}>
        <img src={part.img} alt="" width="70%"/>
      </div>
     ))}
     </div>
      
    </>
  );
}
export default Home3;