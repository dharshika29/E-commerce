/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import styles from "../styles/ContactUs.module.css";

import contactimg1 from "../img1/e-h6.png";
import { MdCall, MdMarkEmailRead } from "react-icons/md";
import { HiHome } from "react-icons/hi2";
import Sfooter from "./Sfooter";

export default function ContactUs() {
  return (
    <div>
      <div className={styles.contact_page}>
        <div className={styles.main}>
        <div className={styles.contact_page_title}>
          <h2>
            We believe in sustainable decor. We’re passionate about life at
            home.
          </h2>
          <p>
            Our features timeless furniture, with natural fabrics, curved lines,
            plenty of mirrors and classic design, which can be incorporated into
            any decor project. The pieces enchant for their sobriety, to last
            for generations, faithful to the shapes of each period, with a touch
            of the present
          </p>
        </div>
        <div className={styles.contact_page_img_div}>
          <div className={styles.contact_page_img}>
            <img src={contactimg1} alt="" />
          </div>
          <div className={styles.contact_page_img_text}>
            <h2>About Us</h2>
            <p>
              3legant is a gift & decorations store based in HCMC, Vietnam. Est
              since 2019. Our customer service is always prepared to
              support you 24/7
            </p>
            <a href="/shop">
              <span>Shop Now →</span>
            </a>
          </div>
        </div>
        <div className={styles.ContactUs}>
          <h1>Contact Us</h1>
          <div className={styles.ContactUs_bar}>
            <div className={styles.ContactUs_bar1}>
              <i>
                <HiHome />
              </i>
              <h5>Address</h5>
              <p>
                234 Hai Trieu, Ho Chi Minh City, <br />
                Viet Nam
              </p>
            </div>
            <div className={styles.ContactUs_bar1}>
              <i>
                <MdCall />
              </i>
              <h5>Contact Us</h5>
              <p>+84 234 567 890</p>
            </div>
            <div className={styles.ContactUs_bar1}>
              <i>
                <MdMarkEmailRead />
              </i>
              <h5>Email</h5>
              <p>hello@3legant.com</p>
            </div>
          </div>
          <div className={styles.ContactUs_form_map}>
            <div className={styles.ContactUs_form}>
              <div className={styles.ContactUs_form1}>
                <label>Full Name</label>
                <input type="text" placeholder="Your Name" />
              </div>

              <div className={styles.ContactUs_form1}>
                <label>Email Address</label>
                <input type="email" placeholder="Your Email" />
              </div>

              <div className={styles.ContactUs_form1}>
                <label>Message</label>
                <textarea placeholder="Your message"></textarea>
              </div>

              <button className={styles.ContactUs_btn}>Send Message</button>
            </div>
            <div className={styles.ContactUs_map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5023180946736!2d106.6967930750798!3d10.77257408937257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3f1e3c8ab7%3A0xc7141e1a5da760c!2sBen%20Thanh%20Market!5e0!3m2!1sen!2sin!4v1700000000000"
                allowFullScreen="100"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Sfooter/>
    </div>
  );
}
