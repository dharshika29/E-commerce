import React from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/SingleBlog.module.css";

import { blogData } from "../data/BlogData";
import YouMightAlsoLike from "./Article";
import Sfooter from "./Sfooter";

export default function SingleBlog() {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id === Number(id));

  if (!blog) return <h1>Blog Not Found</h1>;

  return (
    <>
      <div className={styles.singleBlog}>
        <div className={styles.breadcrumb}>
          Home › Blog ›{" "}
          <span className={styles.breadcrumbTitle}>{blog.title}</span>
        </div>

        {/* Category */}
        <div className={styles.category}>ARTICLE</div>

        {/* Title */}
        <h1 className={styles.title}>{blog.title}</h1>

        {/* Author Row */}
        <div className={styles.authorRow}>
          <span>👤 Henrik Annemark</span>
          <span>📅 {blog.date}</span>
        </div>

        {/* Main Image */}
        <img className={styles.mainImage} src={blog.img} alt={blog.title} />

        {/* Paragraph 1 */}
        <p className={styles.textBlock}>
          Your bathroom serves a variety of functions on a daily basis. From
          your own place to start off the work, wind down after a busy day, and
          relax after special days with comfort and warmth.
        </p>

        {/* Section */}
        <h2 className={styles.heading}>
          A cleaning hub with built-in ventilation
        </h2>
        <p className={styles.textBlock}>
          Ease moisture-related worries with better ventilation and proper
          cleaning equipment. Using the right items for cleaning and organizing
          makes it easier and helps create a fresh feeling.
        </p>

        {/* Image Grid */}
        <div className={styles.imageGrid}>
          <img src={blog.extra1} alt="Bathroom design 1" />
          <img src={blog.extra2} alt="Bathroom design 2" />
        </div>

        {/* Storage */}
        <h2 className={styles.heading}>Storage with a calming effect</h2>
        <p className={styles.textBlock}>
          Shelves in natural materials and soft colors keep your bathroom items
          within easy reach but stored neatly.
        </p>

        {/* Clutter */}
        <h2 className={styles.heading}>Kit your clutter for easy access</h2>
        <p className={styles.textBlock}>
          A labelled system helps everyone find what they need without
          searching.
        </p>
      </div>

      {/* Flex Side Section */}
      <div className={styles.flexSection}>
        <img className={styles.flexImage} src={blog.extra3} alt="Towel setup" />

        <div className={styles.flexContent}>
          <h2>An ecosystem of towels</h2>
          <p>
            Fresh towels stacked neatly bring a spa-like environment to your
            bathroom.
          </p>

          <h2>Make your mop disappear</h2>
          <p>
            Keep cleaning tools hidden inside cabinets or drawers. Sliding
            baskets and wall hooks help maintain a tidy environment
            effortlessly.
          </p>
        </div>
      </div>
      <YouMightAlsoLike />
      <Sfooter />
    </>
  );
}
