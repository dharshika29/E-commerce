// import React from "react";
// import styles from "../styles/CartSidebar.module.css";
// import { FiX } from "react-icons/fi";
// import { useCart } from "./CartContext";

// export default function CartSidebar({ open, onClose }) {
//   const { cart, updateQty, removeFromCart } = useCart();

//   return (
//     <div className={`${styles.overlay} ${open ? styles.show : ""}`}>
//       <div className={styles.sidebar}>
//         <div className={styles.header}>
//           <h3>Your Cart</h3>
//           <FiX className={styles.closeIcon} onClick={onClose} />
//         </div>

//         {cart.length === 0 ? (
//           <p className={styles.empty}>Your cart is empty.</p>
//         ) : (
//           <div className={styles.items}>
//             {cart.map((item) => (
//               <div key={item.id} className={styles.item}>
//                <img src={item.img} alt={item.name} />

//                 <div className={styles.info}>
//                   <h4>{item.name}</h4>
//                   <p>₹{item.price}</p>

//                   <div className={styles.qtyControl}>
//                     <button onClick={() => updateQty(item.id, item.qty - 1)}>
//                       -
//                     </button>

//                     <span>{item.qty}</span>

//                     <button onClick={() => updateQty(item.id, item.qty + 1)}>
//                       +
//                     </button>
//                   </div>

//                   <button
//                     className={styles.removeBtn}
//                     onClick={() => removeFromCart(item.id)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         <div className={styles.footer}>
//           <button className={styles.checkoutBtn}>Proceed to Checkout</button>
//         </div>
//       </div>
//     </div>
//   );
// }
