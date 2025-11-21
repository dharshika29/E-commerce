import React from "react";
import styles from "../styles/Home2.module.css";
import logo1 from "../Image2/s-logo1.png";
import logo2 from "../Image2/s-logo2.png";
import logo3 from "../Image2/s-logo3.png";
import logo4 from "../Image2/s-logo4.png";
import logo5 from "../Image2/s-logo5.png";
import logo6 from "../Image2/s-logo6.png";

 function Home1() {
    // const card = [
    //     {
    //         id:1,
    //         img
    //     }
    // ]
  return ( 
     <>
    <div className={styles.hero}>
      <div className={styles.left}>
      </div>

      <div className={styles.right}>
        <h1 className={styles.title}>
          Listen to the <span>amazing</span> music sound.
        </h1>

        <p className={styles.subtitle}>
          Experience music like never before
        </p>

        <button className={styles.btn}>Shopping Now</button>
      </div>
    </div>
    <div className={styles.hero1}>
       <img 
       src={logo1}
       alt=""/>
       <img 
       src={logo2}
       alt=""/>
       <img 
       src={logo3}
       alt=""/>
       <img 
       src={logo4}
       alt=""/>
       <img 
       src={logo5}
       alt=""/>
        <img 
       src={logo6}
       alt=""/>
    </div>
    <div className={styles.hero3}>
      <h1>New Arrivals</h1>
      <div className={styles.card1}>
        
      </div>
    </div>
    </>
  );
}
export default Home1;