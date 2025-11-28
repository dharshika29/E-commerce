import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/Account.module.css";
import Sfooter from "./Sfooter";

import img from "../img1/e-h1.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TbPencilCog } from "react-icons/tb";

export default function Account() {
  const [category, setCategory] = useState("account");
  const navigate = useNavigate();

  // Profile image and name
  const [profileImg, setProfileImg] = useState(img);
  const [name, setName] = useState("");
  const fileInputRef = useRef(null);

  // FORM STATES
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showRepeat, setShowRepeat] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(items);
  }, [category]); // wishlist tab open பண்ணும்போது reload ஆகும்

  // Load saved data from localStorage
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("accountData"));
    if (savedData) {
      setFirstName(savedData.firstName || "");
      setLastName(savedData.lastName || "");
      setDisplayName(savedData.displayName || "");
      setEmail(savedData.email || "");
      setOldPassword(savedData.oldPassword || "");
      setNewPassword(savedData.newPassword || "");
      setRepeatPassword(savedData.repeatPassword || "");
      setName(savedData.displayName || "");
    }
  }, []);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) setProfileImg(URL.createObjectURL(file));
  };

  const validateForm = () => {
    let newErrors = {};

    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!displayName.trim()) newErrors.displayName = "Display name is required";

    if (!email.trim()) newErrors.email = "Email is required";
    else if (!email.includes("@")) newErrors.email = "Invalid email";

    if (!oldPassword.trim()) newErrors.oldPassword = "Old password is required";
    if (!newPassword.trim()) newErrors.newPassword = "New password is required";

    if (!repeatPassword.trim())
      newErrors.repeatPassword = "Repeat password is required";
    else if (newPassword !== repeatPassword)
      newErrors.repeatPassword = "Passwords do not match";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Save all input data to localStorage
      const accountData = {
        firstName,
        lastName,
        displayName,
        email,
        oldPassword,
        newPassword,
        repeatPassword,
      };
      localStorage.setItem("accountData", JSON.stringify(accountData));

      // Update profile name
      setName(displayName);
      setShowAlert(true);
    }
  };

  const closeAlert = (nexttab) => {
    setShowAlert(false);
    setCategory(nexttab);
  };

  return (
    <>
      <div className={styles.My_Account_page}>
        <h1>My Account</h1>
        <div className={`container ${styles.account_profile}`}>
          <div className={`row ${styles.account_profile_row}`}>
            {/* LEFT SIDEBAR */}
            <div className={`col-md-3 ${styles.account_profile_leftside}`}>
              <div className={styles.profileCard}>
                <div className={styles.profileCard_img}>
                  <img
                    src={profileImg}
                    alt="profile"
                    className={styles.profileImg}
                    onClick={handleImageClick}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                  <input
                    type="text"
                    className={styles.profileNameInput}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value); // update left input
                      setDisplayName(e.target.value); // sync right input
                      const accountData =
                        JSON.parse(localStorage.getItem("accountData")) || {};
                      localStorage.setItem(
                        "accountData",
                        JSON.stringify({
                          ...accountData,
                          displayName: e.target.value,
                        })
                      );
                    }}
                  />
                </div>

                <ul className={styles.sidebarMenu}>
                  <li
                    className={category === "account" ? styles.activeMenu : ""}
                    onClick={() => setCategory("account")}
                  >
                    Account
                  </li>
                  <li
                    className={category === "address" ? styles.activeMenu : ""}
                    onClick={() => setCategory("address")}
                  >
                    Address
                  </li>
                  <li
                    className={category === "orders" ? styles.activeMenu : ""}
                    onClick={() => setCategory("orders")}
                  >
                    Orders
                  </li>
                  <li
                    className={category === "wishlist" ? styles.activeMenu : ""}
                    onClick={() => setCategory("wishlist")}
                  >
                    Wishlist
                  </li>
                  <li
                    onClick={() => {
                      // Optional: clear user data
                      localStorage.removeItem("userInfo");
                      localStorage.removeItem("accountData");

                      // Redirect to homepage
                      navigate("/");
                    }}
                  >
                    Log Out
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className={`col-md-9 ${styles.account_profile_rightside}`}>
              {category === "account" && (
                <>
                  <h2 className={styles.sectionTitle}>Account Details</h2>

                  <form className={styles.accountForm} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                      <label>FIRST NAME *</label>
                      <input
                        type="text"
                        placeholder="First name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      {errors.firstName && (
                        <p className={styles.error}>{errors.firstName}</p>
                      )}
                    </div>

                    <div className={styles.inputGroup}>
                      <label>LAST NAME *</label>
                      <input
                        type="text"
                        placeholder="Last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      {errors.lastName && (
                        <p className={styles.error}>{errors.lastName}</p>
                      )}
                    </div>

                    <div className={styles.inputGroup}>
                      <label>DISPLAY NAME *</label>
                      <input
                        type="text"
                        placeholder="Display name"
                        value={displayName}
                        onChange={(e) => {
                          setDisplayName(e.target.value); // update right input
                          setName(e.target.value); // sync left input
                          const accountData =
                            JSON.parse(localStorage.getItem("accountData")) ||
                            {};
                          localStorage.setItem(
                            "accountData",
                            JSON.stringify({
                              ...accountData,
                              displayName: e.target.value,
                            })
                          );
                        }}
                      />
                      {errors.displayName && (
                        <p className={styles.error}>{errors.displayName}</p>
                      )}
                    </div>

                    <div className={styles.inputGroup}>
                      <label>EMAIL *</label>
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && (
                        <p className={styles.error}>{errors.email}</p>
                      )}
                    </div>

                    <h2 className={styles.sectionTitle_pass}>Password</h2>

                    <div className={styles.inputGroup_pass}>
                      <label>OLD PASSWORD</label>
                      <input
                        type={showOld ? "text" : "password"}
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                      />
                      <span
                        className={styles.toggleIcon}
                        onClick={() => setShowOld(!showOld)}
                      >
                        {showOld ? <FaEyeSlash /> : <FaEye />}
                      </span>
                      {errors.oldPassword && (
                        <p className={styles.error_pass}>
                          {errors.oldPassword}
                        </p>
                      )}
                    </div>

                    <div className={styles.inputGroup_pass}>
                      <label>NEW PASSWORD</label>
                      <input
                        type={showNew ? "text" : "password"}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                      <span
                        className={styles.toggleIcon}
                        onClick={() => setShowNew(!showNew)}
                      >
                        {showNew ? <FaEyeSlash /> : <FaEye />}
                      </span>
                      {errors.newPassword && (
                        <p className={styles.error_pass}>
                          {errors.newPassword}
                        </p>
                      )}
                    </div>

                    <div className={styles.inputGroup_pass}>
                      <label>REPEAT NEW PASSWORD</label>
                      <input
                        type={showRepeat ? "text" : "password"}
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                      />
                      <span
                        className={styles.toggleIcon}
                        onClick={() => setShowRepeat(!showRepeat)}
                      >
                        {showRepeat ? <FaEyeSlash /> : <FaEye />}
                      </span>
                      {errors.repeatPassword && (
                        <p className={styles.error_pass}>
                          {errors.repeatPassword}
                        </p>
                      )}
                    </div>

                    <button type="submit" className={styles.saveBtn}>
                      Save changes
                    </button>
                  </form>

                  {showAlert && (
                    <div className={styles.alert_overlay}>
                      <div className={styles.alert_box}>
                        <h3>Success!</h3>
                        <p>Your account details were updated successfully.</p>
                        <button
                          className={styles.alert_btn}
                          onClick={() => closeAlert("address")}
                        >
                          OK
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* ADDRESS-------------------------------------------- */}
              {category === "address" && (
                <>
                  <h2 className={styles.sectionTitle}>Address Details</h2>
                  <div className={styles.address_section}>
                    <div className={styles.address_grid}>
                      {/* Billing Address --------------- */}
                      <div className={styles.address_card}>
                        <div className={styles.address_header}>
                          <h4>Billing Address</h4>
                          <span
                            className={styles.edit_btn}
                            // onClick={() => setShowAlert(true)}
                          >
                            <i>
                              <TbPencilCog />
                            </i>
                            Edit
                          </span>
                        </div>

                        <p className={styles.address_name}>Sofia Havertz</p>
                        <p className={styles.address_phone}>(+1) 234 567 890</p>
                        <p className={styles.address_detail}>
                          345 Long Island, NewYork, United States
                        </p>
                      </div>

                      {/* Shipping Address-------------------- */}
                      <div className={styles.address_card}>
                        <div className={styles.address_header}>
                          <h4>Shipping Address</h4>
                          <span
                            className={styles.edit_btn}
                            // onClick={() => setShowAlert(true)}
                          >
                            <i className={styles.edit_btn_icon}>
                              <TbPencilCog />
                            </i>
                            Edit
                          </span>
                        </div>

                        <p className={styles.address_name}>Sofia Havertz</p>
                        <p className={styles.address_phone}>(+1) 234 567 890</p>
                        <p className={styles.address_detail}>
                          345 Long Island, NewYork, United States
                        </p>
                      </div>
                    </div>
                    <div className={styles.address_btndiv}>
                      <button
                        className={styles.address_btn}
                        onClick={() => setShowAlert(true)}
                      >
                        {" "}
                        Save Address
                      </button>
                    </div>
                  </div>

                  {showAlert && (
                    <div className={styles.alert_overlay}>
                      <div className={styles.alert_box}>
                        <h3>Success!</h3>
                        <p>Your address details were updated successfully.</p>

                        <button
                          className={styles.alert_btn}
                          onClick={() => closeAlert("orders")}
                          // onClick={closeAlert}
                        >
                          OK
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* ORDERS ---------------------------------------- */}
              {category === "orders" && (
                <>
                  <h2 className={styles.sectionTitle}>Your Orders</h2>
                  <div className={styles.order_table}>
                    <div className={styles.table_header}>
                      <p>Number ID</p>
                      <p>Dates</p>
                      <p>Status</p>
                      <p>Price</p>
                      <p>Check</p>
                    </div>

                    <div className={styles.table_row}>
                      <p>#3456_768</p>
                      <p>October 17, 2023</p>
                      <p className={styles.delivered}>Delivered</p>
                      <p>$1234.00</p>

                      <p className={styles.order_view_btn}>View</p>
                    </div>

                    <div className={styles.table_row}>
                      <p>#3456_980</p>
                      <p>October 11, 2023</p>
                      <p className={styles.delivered}>Delivered</p>
                      <p>$345.00</p>
                      <p className={styles.order_view_btn}>View</p>
                    </div>

                    <div className={styles.table_row}>
                      <p>#3456_120</p>
                      <p>August 24, 2023</p>
                      <p className={styles.delivered}>Delivered</p>
                      <p>$2345.00</p>
                      <p className={styles.order_view_btn}>View</p>
                    </div>

                    <div className={styles.table_row}>
                      <p>#3456_030</p>
                      <p>August 12, 2023</p>
                      <p className={styles.delivered}>Delivered</p>
                      <p>$845.00</p>
                      <p className={styles.order_view_btn}>View</p>
                    </div>
                    <button
                      className={styles.address_btn}
                      onClick={() => closeAlert("wishlist")}
                    >
                      Next
                    </button>
                  </div>
                </>
              )}

              {category === "wishlist" && (
                <>
                  <h2 className={styles.sectionTitle}>Wishlist Section</h2>

                  <div className={styles.wishlist_table}>
                    <div className={styles.wishlist_header}>
                      <p>Product</p>
                      <p>Price</p>
                      <p>Action</p>
                      <p>Remove</p>
                    </div>

                    {wishlistItems.length === 0 && (
                      <p style={{ padding: "20px" }}>No items in wishlist</p>
                    )}

                    {wishlistItems.map((item) => (
                      <div className={styles.wishlist_row} key={item.id}>
                        {/* PRODUCT + IMAGE */}
                        <div className={styles.product_info}>
                          <img src={item.img} className={styles.wishlist_img} />
                          <p>{item.name}</p>
                        </div>

                        <p>{item.price}</p>

                        <button
                          className={styles.address_btn1}
                          onClick={() => alert("Add to cart pressed")}
                        >
                          Add to Cart
                        </button>

                        <button
                          className={styles.removeBtn}
                          onClick={() => {
                            const updated = wishlistItems.filter(
                              (w) => w.id !== item.id
                            );
                            setWishlistItems(updated);
                            localStorage.setItem(
                              "wishlist",
                              JSON.stringify(updated)
                            );
                          }}
                        >
                          X
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Sfooter />
    </>
  );
}
