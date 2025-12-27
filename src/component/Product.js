import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/Product.module.css";

const Product = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) {
    navigate("/shop");
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        Home / Shop / Product
      </div>

      <div className={styles.productSection}>
        <div className={styles.left}>
          <img src={state.img} className={styles.productImg} alt="" />
        </div>
        <div className={styles.right}>
          <h2 className={styles.title}>{state.title}</h2>

          <div className={styles.priceSec}>
            <span className={styles.mainPrice}>${state.price}</span>
            <span className={styles.oldPrice}>${state.oldPrice}</span>
          </div>

          <button className={styles.btn}>Add to Cart</button>
        </div>

      </div>
    </div>
  );
};

export default Product;
