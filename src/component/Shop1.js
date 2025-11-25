import React from "react";
import styles from "../styles/eShop1.module.css";

import shopbgimg from "../img1/Shop1/e-shopbg1.png";
import { MdKeyboardArrowRight } from "react-icons/md";

// shop cards===============================
import shopcardimg1 from "../img1/Shop1/1.png";
import shopcardimg2 from "../img1/Shop1/2.png";
import shopcardimg3 from "../img1/Shop1/3.png";
import shopcardimg4 from "../img1/Shop1/4.png";
import shopcardimg5 from "../img1/Shop1/5.png";
import shopcardimg6 from "../img1/Shop1/6.png";
import shopcardimg7 from "../img1/Shop1/7.png";
import shopcardimg8 from "../img1/Shop1/8.png";
import { CiSliderHorizontal } from "react-icons/ci";

export default function Shop1() {
  return (
    <div className={styles.shope_page}>
      {/* shop bg page ---------------------------------- */}
      <div className={styles.shop_bg}>
        <div className={styles.shop_img}>
          <img src={shopbgimg} alt="" />
        </div>
        <div className={styles.shop_text}>
          <div className={styles.shop_icon}>
            <h5>Home</h5>
            <span>
              <MdKeyboardArrowRight />
            </span>
            <h5>Shop</h5>
          </div>
          <h1>Shop Page</h1>
          <p>Let’s design the place you always imagined.</p>
        </div>
      </div>

      <div>
        <Shopcards />
      </div>
    </div>
  );
}

// function Shopcard() {
//   const shopcard [
//     {
//       id:5,
//       img:shopcardimg1,
//     },
//   ]
//   return (
//     <>
//       <div className={`container ${styles.shop_card_bg}`}>
//          {shopcard.map((shopcard) => (
//         <div className={styles.card} key={shopcard.id}>
//           <a href="/shop" className={styles.imgLink}>
//             <img
//               src={shopcard.img}
//               alt={shopcard.title}
//               className={styles.cardImg}
//             />
//           </a>

//           {/* Overlay Icons */}
//           <div className={styles.cardoverlay}>
//             <div className={styles.iconGroup}>
//               <i
//                 style={{ cursor: "pointer" }}
//                 onClick={() => {
//                   setSelectedProduct(shopcard);
//                   setModalShow(true);
//                 }}
//               >
//                 <FaEye />
//               </i>
//               <i>
//                 <FaHeart />
//               </i>
//               <i>
//                 <FaShoppingCart />
//               </i>
//             </div>
//           </div>

//           {/* Badge */}
//           <div className={styles.badge}>
//             <p>{shopcard.badge}</p>
//           </div>

//           {/* Card Body */}
//           <div className={styles.cardBody}>
//             <div className={styles.rating}>
//               <FaStar />
//               <FaStar />
//               <FaStar />
//               <FaStarHalfAlt />
//               <FaRegStar />
//               <span>(23)</span>
//             </div>
//             <h3 className={styles.title}>{shopcard.title}</h3>
//             <div className={styles.price}>
//               <span>₹{shopcard.newprice}</span>
//               <del>₹{shopcard.oldprice}</del>
//               <h6 className={styles.off}>{shopcard.badge}%</h6>
//             </div>
//           </div>
//         </div>
//       ))}
//       </div>
//     </>
//   );
// }

function Shopcards() {
  const products = [
    {
      id: 1,
      name: "Loveseat Sofa",
      price: "$199.00",
      old: "$400.00",
      img: "shopcardimg1",
    },
    {
      id: 2,
      name: "Luxury Sofa",
      price: "$299.00",
      old: "$500.00",
      img: "shopcardimg2",
    },
    {
      id: 3,
      name: "Table Lamp",
      price: "$19.00",
      img: "shopcardimg3",
    },
  ];
  return (
    <>
      <div className={`container ${styles.shop_card_bg}`}>
        <div className={`row ${styles.shop_card_row}`}>
          <div className={`col-lg-3 ${styles.shop_card_col1}`}>
            <div>
              <i>
                <CiSliderHorizontal />
              </i>
              <h2>Filter</h2>
            </div>
            <div className={styles.filter}>
              <h2>CATEGORIES</h2>
              <ul>
                <li>All Rooms</li>
                <li>Living Room</li>
                <li>Bedroom</li>
                <li>Kitchen</li>
                <li>Bathroom</li>
                <li>Dinning</li>
                <li>Outdoor</li>
              </ul>
            </div>

            <div className={styles.filter_box}>
              <h2>PRICE</h2>
              <ul className={styles.price_list}>
                <li>
                  All Price<input type="checkbox"/>
                </li>
                <li>
                  $0.00 - 99.99<input type="checkbox" />
                </li>
                <li>
                  $100 - 199.99<input type="checkbox" />
                </li>
                <li>
                  $200 - 299.99<input type="checkbox" /> 
                </li>
                <li>
                 $300 - 399.99<input type="checkbox" /> 
                </li>
              </ul>
            </div>
          </div>
          <div className={`col-lg-9 ${styles.shop_card_col2}`}></div>
        </div>
      </div>
    </>
  );
}
