import React from 'react';
import styles from "../styles/Shop2.module.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Sproducts from "../component/Sproducts";
import Sfooter from './Sfooter';

export default function Shop2() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.main}>
          <a href='/home1'>Home <MdOutlineKeyboardArrowRight /></a>
          <a><span>Shop</span></a>
          <h1>Shop Page</h1>
          <p>Let’s design the place you always imagined.</p>
        </div>
      </div>
      {/* <div className={styles.hero1}>
        <div>
          <label>CATEGORIES</label><br></br>
          <select>
            <option>Living Room</option>
          </select>
        </div>
        <div>
          <label>PRICE</label><br></br>
          <select>
            <option>Living Room</option>
          </select>

        </div>
      </div> */}

      <Sproducts />
      <Sfooter />
    </>
  )
}
