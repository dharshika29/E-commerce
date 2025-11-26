import React from 'react'
import styles from"../styles/Sfooter.module.css";
import { FiMail } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FiYoutube } from "react-icons/fi";
export default function Sfooter() {
  return (
    <>
    <div className={styles.banner}>
        {/* <img src={join} alt="Headphone" className={styles.leftImg} /> */}
        <div className={styles.name2}>
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
        </div>
        {/* 
        <img src={girlImg} alt="Girl" className={styles.rightImg} /> */}
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <p className={styles.logoo}>3legant<span style={{ color: "grey" }}>.</span><span className={styles.logo}>Headphone store</span> </p>

          <nav className={styles.nav}>
            <a href='/'>Home</a>
            <a href='/'>Shop</a>
            <a href='/'>Product</a>
            <a href='/'>Blog</a>
            <a href='/'>Contact Us</a>
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
  )
}
