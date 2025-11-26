import React from "react";
import styles from "../styles/Sproducts.module.css";
import image1 from "../Image2/s-sofa1.png";
import image2 from "../Image2/s-sofa2.png";
import image3 from "../Image2/s-sofa3.png";
import image4 from "../Image2/s-sofa4.png";
import image5 from "../Image2/s-sofa5.png";
import image6 from "../Image2/s-sofa6.png";
import image7 from "../Image2/s-sofa7.png";
import image8 from "../Image2/s-sofa8.png";
import image9 from "../Image2/s-sofa9.png";
import image10 from "../Image2/s-sofa10.png";
import image11 from "../Image2/s-sofa11.png";
import image12 from "../Image2/s-sofa12.png";
const products = [
    {
        id: 1,
        img: image1,
        name: "Loveseat Sofa",
        price: "$129.00",
        oldPrice: "$260.00",
    },
    {
        id: 2,
        img: image2,
        name: "Luxury Sofa",
        price: "$250.00",
        oldPrice: "$350.00",
    },
    {
        id: 3,
        img: image3,
        name: "Table Lamp",
        price: "$72.00",
        oldPrice: "$120.00",
    },
    {
        id: 4,
        img: image4,
        name: "Cozy Sofa",
        price: "$220.00",
        oldPrice: "$360.00",
    },
    {
        id: 5,
        img: image5,
        name: "White Drawer unit",
        price: "$89.00",
        oldPrice: "$150.00",
    },
    {
        id: 6,
        img: image6,
        name: "Black Tray Table",
        price: "$79.00",
        oldPrice: "$140.00",
    },
    {
        id: 7,
        img: image7,
        name: "Tripod Lamp",
        price: "$79.00",
        oldPrice: "$150.00",
    },
    {
        id: 8,
        img: image8,
        name: "Black Brown Side Table",
        price: "$95.00",
        oldPrice: "$180.00",
    },
    {
        id: 9,
        img: image9,
        name: "Light Beige Pillow",
        price: "$9.99",
        oldPrice: "$20.00",
    },
    {
        id: 10,
        img: image10,
        name: "Table Lamp",
        price: "$33.00",
        oldPrice: "$60.00",
    },
    {
        id: 11,
        img: image11,
        name: "Bamboo Basket",
        price: "$9.49",
        oldPrice: "$15.00",
    },
    {
        id: 12,
        img: image12,
        name: "Off-white Pillow",
        price: "$7.99",
        oldPrice: "$18.00",
    },
];

const Products = () => {
    return (
        <div className={styles.container}>
            {/* Top Filters */}
            <div className={styles.filterRow}>
                <div className={styles.filterBox}>
                    <label>CATEGORIES</label>
                    <select>
                        <option>Living Room</option>
                        <option>Bedroom</option>
                        <option>Office</option>
                    </select>
                </div>

                <div className={styles.filterBox}>
                    <label>PRICE</label>
                    <select>
                        <option>All Price</option>
                        <option>$0 - $100</option>
                        <option>$100 - $300</option>
                        <option>$300 - $600</option>
                    </select>
                </div>

                <div className={styles.sort}>
                    <label>Sort by</label>
                    <select>
                        <option>Default</option>
                        <option>Price (Low → High)</option>
                        <option>Price (High → Low)</option>
                        <option>Newest</option>
                    </select>
                </div>
            </div>

            {/* Grid */}
            <div className={styles.grid}>
                {products.map((item) => (
                    <div className={styles.card} key={item.id}>
                        <div className={styles.badges}>
                            <span className={styles.new}>NEW</span>
                            <span className={styles.off}>-50%</span>
                        </div>

                        <div className={styles.imgBox}>
                            <img src={item.img} alt="" />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.stars}>★★★★★</div>
                            <p className={styles.name}>{item.name}</p>

                            <div className={styles.priceRow}>
                                <span className={styles.price}>{item.price}</span>
                                <span className={styles.oldPrice}>{item.oldPrice}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More */}
            <div className={styles.center}>
                <button className={styles.loadMore}>Show more</button>
            </div>
        </div>
    );
};

export default Products;
