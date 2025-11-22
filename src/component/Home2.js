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
 function Home1() {
  const logo =[
    {
      id:1,
      img:img1
    },
    {
      id:2,
      img:img2
    },
    {
      id:3,
      img:img3
    },
    {
      id:4,
      img:img4
    },
    {
      id:5,
      img:img5
    },
    {
      id:6,
      img:img6
    }
  ]
    const card = [
        {
            id:1,
            img:image
        },
        {
          id:2,
          img:image1
        },
         {
            id:1,
            img:image2
        },
        {
          id:2,
          img:image3
        }
    ]
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
      {logo.map((item)=>(
        <img src={item.img}alt=""/>
      ))}
    </div>
    <div className={styles.hero3}>
      <h1>New Arrivals</h1>
      <div className={styles.card1}>
     {card.map((item) => (
    <div key={item.id} className={styles.recentCard}>
      <img src={item.img} alt="" className={styles.image} />
    </div>
  ))}
</div>

    </div>
    </>
  );
}
export default Home1;