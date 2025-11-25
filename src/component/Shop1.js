import React from 'react'
import styles from "../styles/eShop1.module.css";

import shopbgimg from "../img1/Shop1/e-shopbg1.png"
import { MdKeyboardArrowRight } from 'react-icons/md';
export default function Shop1() {
  return (
    <div className={styles.shope_page}>
      {/* shop bg page ---------------------------------- */}
      <div>
        <div>
        <img src={shopbgimg} alt="" />
        </div>
        <div>
          <div>
          <h5>Home</h5>
          <span><MdKeyboardArrowRight /> </span>
          <h5>Shop</h5>
          </div>
          <h1>Shop Page</h1>
          <p>Let’s design the place you always imagined.</p>
        </div>
      </div>
    </div>
  )
}
