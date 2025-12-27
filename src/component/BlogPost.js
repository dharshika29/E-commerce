import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "../styles/s-blog.module.css";

import { MdKeyboardArrowRight } from "react-icons/md";

import image1 from "../Image2/s-img.png";
import image2 from "../Image2/s-img1.png";
import image3 from "../Image2/s-img2.png";
import image4 from "../Image2/s-img4.png";
import image5 from "../Image2/s-img5.png";
import image6 from "../Image2/s-img6.png";
import image7 from "../Image2/s-img7.png";
import image8 from "../Image2/s-img5.png";
import image9 from "../Image2/s-img6.png";
import image10 from "../Image2/s-img5.png";
import Sfooter from "./Sfooter";

const blogPosts = [
    {
        id: 1,
        img: image1,
        title: "7 ways to decorate your home like a professional",
        date: "March 20, 2024",
        description:
            "This is the detailed content for blog post 1. You can add paragraphs, images, quotes, and any rich content here.",
    },
    {
        id: 2,
        img: image2,
        title: "Inside a beautiful kitchen organization",
        date: "March 20, 2024",
        description:
            "This is the detailed content for blog post 2. You can add paragraphs, images, quotes, and any rich content here.",
    },
    {
        id: 3,
        img: image3,
        title: "Decor your bedroom for your children",
        date: "March 20, 2024",
        description:
            "This is the detailed content for blog post 3. You can add paragraphs, images, quotes, and any rich content here.",
    },
    {
        id: 4,
        title: "Modern town home is beautiful & kid-friendly",
        img: image4,
        date: "March 20, 2024",
        description:
            "This is the detailed content for blog post 4. You can add paragraphs, images, quotes, and any rich content here.",
    },
    {
        id: 5,
        title: "Luxury interior styling for modern homes",
        img: image5,
        date: "March 20, 2024",
        description:
            "This is the detailed content for blog post 5. You can add paragraphs, images, quotes, and any rich content here.",
    },
    {
        id: 6,
        title: "Perfect light setups for living rooms",
        img: image6,
        date: "March 20, 2024",
        description:
            "This is the detailed content for blog post 6. You can add paragraphs, images, quotes, and any rich content here.",
    },
    {
        id: 7,
        title: "How to choose the perfect furniture",
        img: image7,
        date: "March 20, 2024",
        description:
            "This is the detailed content for blog post 7. You can add paragraphs, images, quotes, and any rich content here.",
    },
    {
        id: 8,
        title: "Small home decoration ideas",
        img: image8,
        date: "March 20, 2024",
        description:
            "This is the detailed content for blog post 8. You can add paragraphs, images, quotes, and any rich content here.",
    },
    {
        id: 9,
        title: "Modern minimalist interior trends",
        img: image9,
        date: "March 20, 2024",
        description:
            "This is the detailed content for blog post 9. You can add paragraphs, images, quotes, and any rich content here.",
    },
    {
        id: 10,
        title: "Stylish and budget-friendly bedroom setup",
        img: image10,
        date: "March 20, 2024",
        description:
            "This is the detailed content for blog post 10. You can add paragraphs, images, quotes, and any rich content here.",
    },
];

export default function BlogPost() {
    const { id } = useParams();
    const post = blogPosts.find((p) => p.id === parseInt(id));

    if (!post) {
        return (
            <div className={styles.container}>
                <h2>Blog post not found</h2>
                <Link to="/blog">Back to Blog</Link>
            </div>
        );
    }

    return (
        <>
            {/* Breadcrumb + Title Section */}
            <div className={styles.blogPostContainer}>
                <div className={styles.shop_text}>
                    <div className={styles.shop_icon}>
                        <Link to="/">
                            <h5>Home</h5>
                        </Link>
                        <span>
                            <MdKeyboardArrowRight />
                        </span>
                        <Link to="/blog">
                            <h5>Blog</h5>
                        </Link>
                        <span>
                            <MdKeyboardArrowRight />
                        </span>
                        <h5>{post.title}</h5>
                    </div>

                    <h1>{post.title}</h1>
                    <p>{post.date}</p>
                </div>
            </div>

            {/* Blog Content Section */}
            <div className={styles.container}>
                <div className={styles.blogPostContent}>
                    <img src={post.img} alt={post.title} style={{ maxWidth: "100%" }} />
                    <p style={{ marginTop: "20px", lineHeight: "1.6rem" }}>
                        {post.description}
                    </p>
                </div>
            </div>

            <Sfooter />
        </>
    );
}
