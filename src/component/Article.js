import styles from "../styles/Article.module.css";
import img1 from "../Image2/s-img2.png";
import img2 from "../Image2/s-img3.png";
import img3 from "../Image2/s-img4.png";
const articles = [
  {
    id: 1,
    image: img1,
    title: "Modern texas home is beautiful and completely kid-friendly",
    date: "October 16, 2023",
  },
  {
    id: 2,
    image: img2,
    title: "Modern texas home is beautiful and completely kid-friendly",
    date: "October 16, 2023",
  },
  {
    id: 3,
    image: img3,
    title: "Modern texas home is beautiful and completely kid-friendly",
    date: "October 16, 2023",
  },
];

export default function YouMightAlsoLike() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2>You might also like</h2>
        <a href="/blog" className={styles.moreLink}>
          More Articles →
        </a>
      </div>

      <div className={styles.grid}>
        {articles.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.image} alt="" className={styles.image} />

            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.date}>{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
