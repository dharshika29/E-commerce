import React from "react";
import styles from "../styles/Features.module.css";

import { FaTruck, FaMoneyBill, FaLock, FaPhone } from "react-icons/fa";

export default function Features() {
  const features = [
    { icon: <FaTruck />, title: "Free Shipping", subtitle: "Order above $200" },
    { icon: <FaMoneyBill />, title: "Money-back", subtitle: "30 days guarantee" },
    { icon: <FaLock />, title: "Secure Payments", subtitle: "Secured by Stripe" },
    { icon: <FaPhone />, title: "24/7 Support", subtitle: "Phone and Email support" },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {features.map((item, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.icon}>{item.icon}</div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.subtitle}>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}