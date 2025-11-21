import React from "react";
import styles from "../styles/Home3.module.css";

function Home3() {
  const part=[
    {title:"Featured"}
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
    {part.map((parts,index)=>(
      <div key={index} className={styles.hero1}>
         <p>{parts.title}</p>
        <div className={styles.title}>
        </div>
      </div>

    ))}
    </>
  );
}
export default Home3;