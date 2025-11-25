import React, { useState } from "react";
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
import shopcardimg9 from "../img1/Shop1/9.png";

import { CiSliderHorizontal } from "react-icons/ci";
import { FaServer, FaStar } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { PiSquaresFourFill, PiSquareSplitHorizontalFill } from "react-icons/pi";

// living room
import Livingimg1 from "../img1/Shop1/living room/1.jpg";
import Livingimg2 from "../img1/Shop1/living room/2.jpg";
import Livingimg3 from "../img1/Shop1/living room/3.jpg";
import Livingimg4 from "../img1/Shop1/living room/4.jpg";
import Livingimg5 from "../img1/Shop1/living room/5.jpg";
import Livingimg6 from "../img1/Shop1/living room/6.jpg";
import Livingimg7 from "../img1/Shop1/living room/7.jpg";
import Livingimg8 from "../img1/Shop1/living room/8.jpg";
import Livingimg9 from "../img1/Shop1/living room/9.jpg";

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

// function Shopcards() {
//   const products = [
//     {
//       id: 5,
//       name: "Loveseat Sofa",
//       price: "$199.00",
//       old: "$400.00",
//       img: shopcardimg1,
//     },
//     {
//       id: 6,
//       name: "Luxury Sofa",
//       price: "$299.00",
//       old: "$500.00",
//       img: shopcardimg2,
//     },
//     {
//       id: 7,
//       name: "Table Lamp",
//       price: "$19.00",
//       img: shopcardimg3,
//     },
//      {
//       id: 8,
//       name: "Table Lamp",
//       price: "$19.00",
//       img: shopcardimg4,
//     },
//      {
//       id: 9,
//       name: "Table Lamp",
//       price: "$19.00",
//       img: shopcardimg5,
//     },
//      {
//       id: 10,
//       name: "Table Lamp",
//       price: "$19.00",
//       img: shopcardimg6,
//     },
//      {
//       id: 11,
//       name: "Table Lamp",
//       price: "$19.00",
//       img: shopcardimg7,
//     },
//      {
//       id: 12,
//       name: "Table Lamp",
//       price: "$19.00",
//       img: shopcardimg8,
//     },
//   ];
//   return (
//     <>
//       <div className={`container ${styles.shop_card_bg}`}>
//         <div className={`row ${styles.shop_card_row}`}>
//           <div className={`col-lg-4 ${styles.shop_card_col1}`}>
//             <div className={styles.shop_card_title}>
//               <i>
//                 <CiSliderHorizontal />
//               </i>
//               <h2>Filter</h2>
//             </div>
//             <div className={styles.filter}>
//               <h2>CATEGORIES</h2>
//               <ul>
//                 <li>All Rooms</li>
//                 <li>Living Room</li>
//                 <li>Bedroom</li>
//                 <li>Kitchen</li>
//                 <li>Bathroom</li>
//                 <li>Dinning</li>
//                 <li>Outdoor</li>
//               </ul>
//             </div>

//             <div className={styles.filter_box}>
//               <h2>PRICE</h2>
//               <ul className={styles.price_list}>
//                 <li>
//                   All Price
//                   <input type="checkbox" />
//                 </li>
//                 <li>
//                   $0.00 - 99.99
//                   <input type="checkbox" />
//                 </li>
//                 <li>
//                   $100 - 199.99
//                   <input type="checkbox" />
//                 </li>
//                 <li>
//                   $200 - 299.99
//                   <input type="checkbox" />
//                 </li>
//                 <li>
//                   $300 - 399.99
//                   <input type="checkbox" />
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className={`col-lg-8 ${styles.shop_card_col2}`}>

//             <div className={styles.product_grid}>
//               {products.map((item) => (
//                 <div key={item.id} className={styles.product_card}>
//                   <div className={styles.card_img}>
//                     <img src={item.img} alt={item.name} />
//                   </div>
//                   <div className={styles.card_body}>
//                     <h3>{item.name}</h3>
//                     <p className={styles.price_box}>
//                       <span className={styles.new_price}>{item.price}</span>
//                       {item.old && (
//                         <span className={styles.old_price}>{item.old}</span>
//                       )}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// function Shopcards() {
//   const products = [
//     {
//       id: 5,
//       name: "Loveseat Sofa",
//       price: "$199.00",
//       old: "$400.00",
//       img: shopcardimg1,
//     },
//     {
//       id: 6,
//       name: "Luxury Sofa",
//       price: "$299.00",
//       old: "$500.00",
//       img: shopcardimg2,
//     },
//     { id: 7, name: "Table Lamp", price: "$19.00", img: shopcardimg3 },
//     { id: 8, name: "Wood Lamp", price: "$39.00", img: shopcardimg4 },
//     { id: 9, name: "Modern Lamp", price: "$49.00", img: shopcardimg5 },
//     { id: 10, name: "White Lamp", price: "$29.00", img: shopcardimg6 },
//     { id: 11, name: "Unique Lamp", price: "$25.00", img: shopcardimg7 },
//     { id: 12, name: "Studio Lamp", price: "$19.00", img: shopcardimg8 },
//     { id: 13, name: "Studio Lamp", price: "$19.00", img: shopcardimg9 },

//   ];

//   return (
//     <div className={`container ${styles.shop_card_bg}`}>
//       <div className={`row ${styles.shop_card_row}`}>
//         <div className={`col-md-3 ${styles.shop_card_col1}`}>
//           <div className={styles.shop_card_title}>
//             <i>
//               <CiSliderHorizontal />
//             </i>
//             <h2>Filter</h2>
//           </div>

//           <div className={styles.filter}>
//             <h2>CATEGORIES</h2>
//             <ul>
//               <li>All Rooms</li>
//               <li>Living Room</li>
//               <li>Bedroom</li>
//               <li>Kitchen</li>
//               <li>Bathroom</li>
//               <li>Dinning</li>
//               <li>Outdoor</li>
//             </ul>
//           </div>

//           <div className={styles.filter_box}>
//             <h2>PRICE</h2>
//             <ul className={styles.price_list}>
//               <li>
//                 All Price <input type="checkbox" />
//               </li>
//               <li>
//                 $0.00 - $99.99 <input type="checkbox" />
//               </li>
//               <li>
//                 $100 - $199.99 <input type="checkbox" />
//               </li>
//               <li>
//                 $200 - $299.99 <input type="checkbox" />
//               </li>
//               <li>
//                 $300 - $399.99 <input type="checkbox" />
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className={`col-md-9 ${styles.shop_card_col2}`}>
//           <div className={styles.topbar}>
//             <h2 className={styles.title}>Living Room</h2>
//             <div className={styles.rightSection}>
//               <div className={styles.sortBox}>
//                 <span>Sort by</span>
//                 <i className={styles.arrow}>▼</i>
//               </div>
//               <div className={styles.viewButtons}>
//                 <button className={styles.active}>
//                   <CgMenuGridR />
//                 </button>
//                 <button className={styles.active}>
//                   <PiSquaresFourFill />
//                 </button>
//                 <button className={styles.active}>
//                   <PiSquareSplitHorizontalFill />
//                 </button>
//                 <button className={styles.active}>
//                   <FaServer />
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className={styles.product_grid}>
//             {products.map((item) => (
//               <div key={item.id} className={styles.product_card}>
//                 <div className={styles.card_img}>
//                   <div className={styles.card_tags}>
//                     <span className={styles.tag_new}>NEW</span>
//                     <span className={styles.tag_discount}>-50%</span>
//                   </div>
//                   <img src={item.img} alt={item.name} />
//                 </div>

//                 <div className={styles.card_body}>
//                   <p className={styles.stars}>
//                     <FaStar />
//                     <FaStar />
//                     <FaStar />
//                     <FaStar />
//                     <FaStar />
//                   </p>

//                   <h3 className={styles.product_name}>{item.name}</h3>

//                   <div className={styles.price_box}>
//                     <span className={styles.new_price}>{item.price}</span>
//                     {item.old && (
//                       <span className={styles.old_price}>{item.old}</span>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function Shopcards() {
  const [category, setCategory] = useState("all");
  return (
    <div className={`container ${styles.shop_card_bg}`}>
      <div className={`row ${styles.shop_card_row}`}>
        <div className={`col-md-3 ${styles.shop_card_col1}`}>
          <div className={styles.shop_card_title}>
            <i>
              <CiSliderHorizontal />
            </i>
            <h2>Filter</h2>
          </div>

          <div className={styles.filter}>
            <h2>CATEGORIES</h2>
            <ul>
              <li onClick={() => setCategory("all")}>All Rooms</li>
              <li onClick={() => setCategory("living")}>Living Room</li>
              <li onClick={() => setCategory("Bedroom")}>Bedroom</li>
              <li onClick={() => setCategory("Kitchen")}>Kitchen</li>
              <li onClick={() => setCategory("Bathroom")}>Bathroom</li>
              <li onClick={() => setCategory("Dinning")}>Dinning</li>
              <li onClick={() => setCategory("Outdoor")}>Outdoor</li>
            </ul>
          </div>

          <div className={styles.filter_box}>
            <h2>PRICE</h2>
            <ul className={styles.price_list}>
              <li>
                All Price <input type="checkbox"  className={styles.customCheck}  />
              </li>
              <li>
                $0.00 - $99.99 <input type="checkbox" className={styles.customCheck}  />
              </li>
              <li>
                $100 - $199.99 <input type="checkbox" className={styles.customCheck}  />
              </li>
              <li>
                $200 - $299.99 <input type="checkbox" className={styles.customCheck} />
              </li>
              <li>
                $300 - $399.99 <input type="checkbox" className={styles.customCheck} />
              </li>
            </ul>
          </div>
        </div>

        <div className={`col-md-9 ${styles.shop_card_col2}`}>
          {category === "all" && (
            <div className={styles.cardsWrap}>
              <All/>
            </div>
          )}
          {category === "living" && (
            <div className={styles.cardsWrap}>
              <Living/>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
}

function All() {
  const products = [
    {
      id: 5,
      name: "Loveseat Sofa",
      price: "$199.00",
      old: "$400.00",
      img: shopcardimg1,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 6,
      name: "Luxury Sofa",
      price: "$299.00",
      old: "$500.00",
      img: shopcardimg2,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 7,
      name: "Table Lamp",
      price: "$19.00",
      img: shopcardimg3,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 8,
      name: "White Drawer unit",
      price: "$39.00",
      img: shopcardimg4,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 9,
      name: "Black Tray table",
      price: "$49.00",
      img: shopcardimg5,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 10,
      name: "Lamp",
      price: "$29.00",
      img: shopcardimg6,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 11,
      name: "Light Beige Pillow",
      price: "$3.99",
      img: shopcardimg7,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 12,
      name: "Table Lamp",
      price: "$39.99",
      img: shopcardimg8,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 13,
      name: "Bamboo Basket",
      price: "$9.99",
      img: shopcardimg9,
      isNew: true,
      discount: "-50%",
    },
  ];
  return (
    <>
      <div className={styles.topbar}>
        <h2 className={styles.title}>All Rooms</h2>

        <div className={styles.rightSection}>
          <div className={styles.sortBox}>
            <span>Sort by</span>
            <i className={styles.arrow}>▼</i>
          </div>

          <div className={styles.viewButtons}>
            <button className={styles.active}>
              <CgMenuGridR />
            </button>
            <button>
              <PiSquaresFourFill />
            </button>
            <button>
              <PiSquareSplitHorizontalFill />
            </button>
            <button>
              <FaServer />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.product_grid}>
        {products.map((item) => (
          <div key={item.id} className={styles.product_card}>
            <div className={styles.card_img}>
              <div className={styles.card_tags}>
                {item.isNew && <span className={styles.tag_new}>NEW</span>}
                {item.discount && (
                  <span className={styles.tag_discount}>{item.discount}</span>
                )}
              </div>
              <img src={item.img} alt={item.name} />
              <button className={styles.addCartBtn}>Add to Cart</button>
            </div>
            <div className={styles.card_body}>
              <p className={styles.stars}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </p>

              <h3 className={styles.product_name}>{item.name}</h3>

              <div className={styles.price_box}>
                <span className={styles.new_price}>{item.price}</span>
                {item.old && (
                  <span className={styles.old_price}>{item.old}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.Show_more_btn}>
        <button>Show more</button>
      </div>
    </>
  );
}

// living room
function Living() {
  const products = [
    {
      id: 14,
      name: "Loveseat Sofa",
      price: "$199.00",
      old: "$400.00",
      img: Livingimg1,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 15,
      name: "Luxury Sofa",
      price: "$299.00",
      old: "$500.00",
      img: Livingimg2,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 16,
      name: "Table Lamp",
      price: "$19.00",
      img: Livingimg3,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 17,
      name: "White Drawer unit",
      price: "$39.00",
      img: Livingimg4,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 18,
      name: "Black Tray table",
      price: "$49.00",
      img: Livingimg5,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 19,
      name: "Lamp",
      price: "$29.00",
      img: Livingimg6,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 20,
      name: "Light Beige Pillow",
      price: "$3.99",
      img: Livingimg7,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 21,
      name: "Table Lamp",
      price: "$39.99",
      img: Livingimg8,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 22,
      name: "Bamboo Basket",
      price: "$9.99",
      img: Livingimg9,
      isNew: true,
      discount: "-50%",
    },
  ];
  return (
    <>
      <div className={styles.topbar}>
        <h2 className={styles.title}>All Rooms</h2>

        <div className={styles.rightSection}>
          <div className={styles.sortBox}>
            <span>Sort by</span>
            <i className={styles.arrow}>▼</i>
          </div>

          <div className={styles.viewButtons}>
            <button className={styles.active}>
              <CgMenuGridR />
            </button>
            <button>
              <PiSquaresFourFill />
            </button>
            <button>
              <PiSquareSplitHorizontalFill />
            </button>
            <button>
              <FaServer />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.product_grid}>
        {products.map((item) => (
          <div key={item.id} className={styles.product_card}>
            <div className={styles.card_img}>
              <div className={styles.card_tags}>
                {item.isNew && <span className={styles.tag_new}>NEW</span>}
                {item.discount && (
                  <span className={styles.tag_discount}>{item.discount}</span>
                )}
              </div>
              <img src={item.img} alt={item.name} />
              <button className={styles.addCartBtn}>Add to Cart</button>
            </div>
            <div className={styles.card_body}>
              <p className={styles.stars}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </p>

              <h3 className={styles.product_name}>{item.name}</h3>

              <div className={styles.price_box}>
                <span className={styles.new_price}>{item.price}</span>
                {item.old && (
                  <span className={styles.old_price}>{item.old}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.Show_more_btn}>
        <button>Show more</button>
      </div>
    </>
  );
}
