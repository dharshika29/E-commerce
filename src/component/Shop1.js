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

// Bedroomimg
import Bedroomimg1 from "../img1/Shop1/bedroom/1.jpg";
import Bedroomimg2 from "../img1/Shop1/bedroom/2.jpg";
import Bedroomimg3 from "../img1/Shop1/bedroom/3.jpg";
import Bedroomimg4 from "../img1/Shop1/bedroom/4.jpg";
import Bedroomimg5 from "../img1/Shop1/bedroom/5.jpg";
import Bedroomimg6 from "../img1/Shop1/bedroom/6.jpg";
import Bedroomimg7 from "../img1/Shop1/bedroom/7.jpg";
import Bedroomimg8 from "../img1/Shop1/bedroom/8.jpg";
import Bedroomimg9 from "../img1/Shop1/bedroom/9.jpg";

// Kitchen
import Kitchenimg1 from "../img1/Shop1/Kitchen/1.jpg";
import Kitchenimg2 from "../img1/Shop1/Kitchen/2.jpg";
import Kitchenimg3 from "../img1/Shop1/Kitchen/3.jpg";
import Kitchenimg4 from "../img1/Shop1/Kitchen/4.jpg";
import Kitchenimg5 from "../img1/Shop1/Kitchen/5.jpg";
import Kitchenimg6 from "../img1/Shop1/Kitchen/6.jpg";
import Kitchenimg7 from "../img1/Shop1/Kitchen/7.jpg";
import Kitchenimg8 from "../img1/Shop1/Kitchen/8.jpg";
import Kitchenimg9 from "../img1/Shop1/Kitchen/9.jpg";

// bathroomimg1
import bathroomimg1 from "../img1/Shop1/bathroom/1.jpg";
import bathroomimg2 from "../img1/Shop1/bathroom/2.jpg";
import bathroomimg3 from "../img1/Shop1/bathroom/3.jpg";
import bathroomimg4 from "../img1/Shop1/bathroom/4.jpg";
import bathroomimg5 from "../img1/Shop1/bathroom/5.jpg";
import bathroomimg6 from "../img1/Shop1/bathroom/6.jpg";
import bathroomimg7 from "../img1/Shop1/bathroom/7.jpg";
import bathroomimg8 from "../img1/Shop1/bathroom/8.jpg";
import bathroomimg9 from "../img1/Shop1/bathroom/9.jpg";

// Dinning
import dinningimg1 from "../img1/Shop1/dinning/1.jpg";
import dinningimg2 from "../img1/Shop1/dinning/2.jpg";
import dinningimg3 from "../img1/Shop1/dinning/3.jpg";
import dinningimg4 from "../img1/Shop1/dinning/4.jpg";
import dinningimg5 from "../img1/Shop1/dinning/5.jpg";
import dinningimg6 from "../img1/Shop1/dinning/6.jpg";
import dinningimg7 from "../img1/Shop1/dinning/7.jpg";
import dinningimg8 from "../img1/Shop1/dinning/8.jpg";
import dinningimg9 from "../img1/Shop1/dinning/9.jpg";

// Outdoor
import outdoorimg1 from "../img1/Shop1/outdoor/1.jpg";
import outdoorimg2 from "../img1/Shop1/outdoor/2.jpg";
import outdoorimg3 from "../img1/Shop1/outdoor/3.jpg";
import outdoorimg4 from "../img1/Shop1/outdoor/4.jpg";
import outdoorimg5 from "../img1/Shop1/outdoor/5.jpg";
import outdoorimg6 from "../img1/Shop1/outdoor/6.jpg";
import outdoorimg7 from "../img1/Shop1/outdoor/7.jpg";
import outdoorimg8 from "../img1/Shop1/outdoor/8.jpg";
import outdoorimg9 from "../img1/Shop1/outdoor/9.jpg";


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
              <li onClick={() => setCategory("bedroom")}>Bedroom</li>
              <li onClick={() => setCategory("kitchen")}>Kitchen</li>
              <li onClick={() => setCategory("bathroom")}>Bathroom</li>
              <li onClick={() => setCategory("dinning")}>Dinning</li>
              <li onClick={() => setCategory("outdoor")}>Outdoor</li>
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
          {category === "bedroom" && (
            <div className={styles.cardsWrap}>
              <Bedroom/>
            </div>
          )}
          {category === "kitchen" && (
            <div className={styles.cardsWrap}>
              <Kitchen/>
            </div>
          )}
          {category === "bathroom" && (
            <div className={styles.cardsWrap}>
              <Bathroom/>
            </div>
          )}
           {category === "dinning" && (
            <div className={styles.cardsWrap}>
              <Dinning/>
            </div>
          )}
          {category === "outdoor" && (
            <div className={styles.cardsWrap}>
              <Outdoor/>
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
        <h2 className={styles.title}>Living Rooms</h2>

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

// bedroom
function Bedroom() {
  const products = [
    {
      id: 23,
      name: "Loveseat Sofa",
      price: "$199.00",
      old: "$400.00",
      img: Bedroomimg1,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 24,
      name: "Luxury Sofa",
      price: "$299.00",
      old: "$500.00",
      img: Bedroomimg2,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 25,
      name: "Table Lamp",
      price: "$19.00",
      img: Bedroomimg3,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 26,
      name: "White Drawer unit",
      price: "$39.00",
      img:Bedroomimg4,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 27,
      name: "Black Tray table",
      price: "$49.00",
      img: Bedroomimg5,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 28,
      name: "Lamp",
      price: "$29.00",
      img: Bedroomimg6,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 29,
      name: "Light Beige Pillow",
      price: "$3.99",
      img: Bedroomimg7,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 30,
      name: "Table Lamp",
      price: "$39.99",
      img: Bedroomimg8,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 31,
      name: "Bamboo Basket",
      price: "$9.99",
      img: Bedroomimg9,
      isNew: true,
      discount: "-50%",
    },
  ];
  return (
    <>
      <div className={styles.topbar}>
        <h2 className={styles.title}>Bedroom</h2>

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

// Kitchen
function Kitchen() {
  const products = [
    {
      id: 32,
      name: "Loveseat Sofa",
      price: "$199.00",
      old: "$400.00",
      img: Kitchenimg1,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 33,
      name: "Luxury Sofa",
      price: "$299.00",
      old: "$500.00",
      img: Kitchenimg2,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 34,
      name: "Table Lamp",
      price: "$19.00",
      img: Kitchenimg3,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 35,
      name: "White Drawer unit",
      price: "$39.00",
      img:Kitchenimg4,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 36,
      name: "Black Tray table",
      price: "$49.00",
      img: Kitchenimg5,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 37,
      name: "Lamp",
      price: "$29.00",
      img:Kitchenimg6,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 38,
      name: "Light Beige Pillow",
      price: "$3.99",
      img: Kitchenimg7,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 39,
      name: "Table Lamp",
      price: "$39.99",
      img: Kitchenimg8,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 40,
      name: "Bamboo Basket",
      price: "$9.99",
      img: Kitchenimg9,
      isNew: true,
      discount: "-50%",
    },
  ];
  return (
    <>
      <div className={styles.topbar}>
        <h2 className={styles.title}>Kitchen</h2>

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

// bathroom
function Bathroom() {
  const products = [
    {
      id: 41,
      name: "Loveseat Sofa",
      price: "$199.00",
      old: "$400.00",
      img: bathroomimg1,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 42,
      name: "Luxury Sofa",
      price: "$299.00",
      old: "$500.00",
      img: bathroomimg2,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 43,
      name: "Table Lamp",
      price: "$19.00",
      img: bathroomimg3,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 44,
      name: "White Drawer unit",
      price: "$39.00",
      img:bathroomimg4,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 45,
      name: "Black Tray table",
      price: "$49.00",
      img:bathroomimg5,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 46,
      name: "Lamp",
      price: "$29.00",
      img:bathroomimg6,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 47,
      name: "Light Beige Pillow",
      price: "$3.99",
      img: bathroomimg7,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 48,
      name: "Table Lamp",
      price: "$39.99",
      img: bathroomimg8,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 49,
      name: "Bamboo Basket",
      price: "$9.99",
      img: bathroomimg9,
      isNew: true,
      discount: "-50%",
    },
  ];
  return (
    <>
      <div className={styles.topbar}>
        <h2 className={styles.title}>Bathroom</h2>

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

// Dinning
function Dinning() {
  const products = [
    {
      id: 50,
      name: "Loveseat Sofa",
      price: "$199.00",
      old: "$400.00",
      img: dinningimg1,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 51,
      name: "Luxury Sofa",
      price: "$299.00",
      old: "$500.00",
      img: dinningimg2,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 52,
      name: "Table Lamp",
      price: "$19.00",
      img: dinningimg3,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 53,
      name: "White Drawer unit",
      price: "$39.00",
      img:dinningimg4,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 54,
      name: "Black Tray table",
      price: "$49.00",
      img:dinningimg5,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 55,
      name: "Lamp",
      price: "$29.00",
      img:dinningimg6,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 56,
      name: "Light Beige Pillow",
      price: "$3.99",
      img: dinningimg7,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 57,
      name: "Table Lamp",
      price: "$39.99",
      img:dinningimg8,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 58,
      name: "Bamboo Basket",
      price: "$9.99",
      img: dinningimg9,
      isNew: true,
      discount: "-50%",
    },
  ];
  return (
    <>
      <div className={styles.topbar}>
        <h2 className={styles.title}>Dinning</h2>

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

// Outdoor
function Outdoor() {
  const products = [
    {
      id: 59,
      name: "Loveseat Sofa",
      price: "$199.00",
      old: "$400.00",
      img: outdoorimg1,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 60,
      name: "Luxury Sofa",
      price: "$299.00",
      old: "$500.00",
      img: outdoorimg2,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 61,
      name: "Table Lamp",
      price: "$19.00",
      img: outdoorimg3,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 62,
      name: "White Drawer unit",
      price: "$39.00",
      img:outdoorimg4,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 63,
      name: "Black Tray table",
      price: "$49.00",
      img:outdoorimg5,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 64,
      name: "Lamp",
      price: "$29.00",
      img:outdoorimg6,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 65,
      name: "Light Beige Pillow",
      price: "$3.99",
      img: outdoorimg7,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 66,
      name: "Table Lamp",
      price: "$39.99",
      img:outdoorimg8,
      isNew: true,
      discount: "-50%",
    },
    {
      id: 67,
      name: "Bamboo Basket",
      price: "$9.99",
      img: outdoorimg9,
      isNew: true,
      discount: "-50%",
    },
  ];
  return (
    <>
      <div className={styles.topbar}>
        <h2 className={styles.title}>Outdoor</h2>

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
