import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Account.module.css";
import Sfooter from "./Sfooter";
import img from "../img1/e-h1.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Account() {
  const [category, setCategory] = useState("account");
  const navigate = useNavigate();

  const [profileImg, setProfileImg] = useState(img);
  const [displayName, setDisplayName] = useState("");
  const fileInputRef = useRef(null);

 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showRepeat, setShowRepeat] = useState(false);

  const [addrFirstName, setAddrFirstName] = useState("");
  const [addrLastName, setAddrLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [stateAddr, setStateAddr] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);


  const [orders, setOrders] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("accountData")) || {};
    setFirstName(savedData.firstName || "");
    setLastName(savedData.lastName || "");
    setDisplayName(savedData.displayName || "");
    setEmail(savedData.email || "");
    setOldPassword(savedData.oldPassword || "");
    setNewPassword(savedData.newPassword || "");
    setRepeatPassword(savedData.repeatPassword || "");

    const savedAddr = JSON.parse(localStorage.getItem("checkoutAddress")) || [];
    setSavedAddresses(savedAddr);

    if (savedAddr.length > 0) {
      const firstAddr = savedAddr[0];
      setAddrFirstName(firstAddr.firstName || "");
      setAddrLastName(firstAddr.lastName || "");
      setStreet(firstAddr.street || "");
      setCity(firstAddr.city || "");
      setStateAddr(firstAddr.state || "");
      setCountry(firstAddr.country || "");
      setZip(firstAddr.zip || "");
      setPhone(firstAddr.phone || "");
    }

    const savedOrders = JSON.parse(localStorage.getItem("accountOrders")) || [];
    setOrders(savedOrders);

    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(wishlist);
  }, []);

  const handleImageClick = () => fileInputRef.current.click();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImg(URL.createObjectURL(file));
    }
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

  const handleAccountSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
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
      setAlertMessage("Your account details were updated successfully.");
      setShowAlert(true);
    }
  };

  const handleEditAddress = (index) => {
    const addr = savedAddresses[index];
    if (!addr) return;
    setAddrFirstName(addr.firstName || "");
    setAddrLastName(addr.lastName || "");
    setStreet(addr.street || "");
    setCity(addr.city || "");
    setStateAddr(addr.state || "");
    setCountry(addr.country || "");
    setZip(addr.zip || "");
    setPhone(addr.phone || "");
    setEditingIndex(index);
    setShowAddressForm(true);
  };

  const handleAddNewAddress = () => {
    setAddrFirstName("");
    setAddrLastName("");
    setStreet("");
    setCity("");
    setStateAddr("");
    setCountry("");
    setZip("");
    setPhone("");
    setEditingIndex(null);
    setShowAddressForm(true);
  };

  const handleSaveAddress = () => {
    if (!addrFirstName.trim() || !street.trim()) {
      setAlertMessage("Please enter at least first name and street.");
      setShowAlert(true);
      return;
    }

    const addr = {
      firstName: addrFirstName,
      lastName: addrLastName,
      street,
      city,
      state: stateAddr,
      country,
      zip,
      phone,
    };
    let updated = [...savedAddresses];
    if (editingIndex !== null) updated[editingIndex] = addr;
    else updated.push(addr);

    localStorage.setItem("checkoutAddress", JSON.stringify(updated));
    setSavedAddresses(updated);
    setShowAddressForm(false);
    setEditingIndex(null);
    setAlertMessage("Address saved successfully.");
    setShowAlert(true);
  };

  const handleDeleteAddress = (index) => {
    const updated = savedAddresses.filter((_, i) => i !== index);
    localStorage.setItem("checkoutAddress", JSON.stringify(updated));
    setSavedAddresses(updated);
    setAlertMessage("Address removed.");
    setShowAlert(true);
  };

  const closeAlert = (nextTab) => {
    setShowAlert(false);
    if (nextTab) setCategory(nextTab);
  };

  return (
    <>
      <div className={styles.My_Account_page}>
        <h1>My Account</h1>
        <div className={`container ${styles.account_profile}`}>
          <div className={`row ${styles.account_profile_row}`}>
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
                    value={displayName}
                    onChange={(e) => {
                      setDisplayName(e.target.value);
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
                      localStorage.removeItem("userInfo");
                      localStorage.removeItem("accountData");
                      navigate("/");
                    }}
                  >
                    Log Out
                  </li>
                </ul>
              </div>
            </div>

            <div className={`col-md-9 ${styles.account_profile_rightside}`}>
              {category === "account" && (
                <>
                  <h2 className={styles.sectionTitle}>Account Details</h2>
                  <form
                    className={styles.accountForm}
                    onSubmit={handleAccountSubmit}
                  >
                    <div className={styles.inputGroup}>
                      <label>FIRST NAME *</label>
                      <input
                        type="text"
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
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                      />
                      {errors.displayName && (
                        <p className={styles.error}>{errors.displayName}</p>
                      )}
                    </div>
                    <div className={styles.inputGroup}>
                      <label>EMAIL *</label>
                      <input
                        type="email"
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
                </>
              )}


              {category === "address" && (
                <>
                  <h2 className={styles.sectionTitle}>Address Details</h2>
                  <div className={styles.addressGrid}>
                    {savedAddresses.length === 0 ? (
                      <div className={styles.noAddressBox}>
                        <p>No addresses saved yet.</p>
                        <button
                          className={styles.addAddressBtn}
                          onClick={handleAddNewAddress}
                        >
                          + Add Address
                        </button>
                      </div>
                    ) : (
                      <>
                        {savedAddresses.map((addr, index) => (
                          <div className={styles.addressCard} key={index}>
                            <div className={styles.addressHeader}>
                              <h4>
                                {index === 0
                                  ? "Billing Address"
                                  : `Address ${index + 1}`}
                              </h4>
                              <div>
                                <button
                                  className={styles.smallBtn}
                                  onClick={() => handleEditAddress(index)}
                                >
                                  Edit
                                </button>
                                <button
                                  className={styles.smallDangerBtn}
                                  onClick={() => handleDeleteAddress(index)}
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                            <div className={styles.addressInfo}>
                              <p>
                                {addr.firstName} {addr.lastName}
                              </p>
                              <p>{addr.phone}</p>
                              <p>
                                {addr.street}, {addr.city}, {addr.state},{" "}
                                {addr.country} - {addr.zip}
                              </p>
                            </div>
                          </div>
                        ))}
                        <div className={styles.addCardWrapper}>
                          <button
                            className={styles.addAddressBtn}
                            onClick={handleAddNewAddress}
                          >
                            + Add New Address
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </>
              )}


              {category === "orders" && (
                <>
                  <h2 className={styles.sectionTitle}>Your Orders</h2>
                  {orders.length === 0 ? (
                    <p style={{ padding: "20px" }}>You have no orders yet</p>
                  ) : (
                    <div className={styles.order_wrapper}>
                      <div className={styles.table_header}>
                        <p>Order ID</p>
                        <p>Date</p>
                        <p>Status</p>
                        <p>Total</p>
                      </div>
                      {orders.map((order) => (
                        <div key={order.id} className={styles.order_row}>
                          <p>{order.id}</p>
                          <p>{order.date}</p>
                          <p>{order.status}</p>
                          <p>${order.total}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}


              {category === "wishlist" && (
                <>
                  <h2 className={styles.sectionTitle}>Your Wishlist</h2>
                  {wishlistItems.length === 0 ? (
                    <p style={{ padding: "20px" }}>No items in wishlist</p>
                  ) : (
                    <div className={styles.wishlistWrapper}>
                      <div className={styles.wishlistHeader}>
                        <p>Product</p>
                        <p>Price</p>
                        <p>Action</p>
                        <p>Remove</p>
                      </div>
                      {wishlistItems.map((item) => (
                        <div key={item.id} className={styles.wishlistRow}>
                          <div className={styles.productInfo}>
                            <img src={item.img} alt={item.name} />
                            <div>
                              <h4>{item.name}</h4>
                              <p className={styles.colorText}>
                                Color: {item.color}
                              </p>
                            </div>
                          </div>
                          <p className={styles.productPrice}>{item.price}</p>
                          <button
                            className={styles.addCartBtn}
                            onClick={() => alert("Add to cart pressed")}
                          >
                            Add to cart
                          </button>
                          <span
                            className={styles.removeIcon}
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
                            ×
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {showAddressForm && (
        <div className={styles.addressFormOverlay}>
          <div className={styles.addressFormBox}>
            <h3 className={styles.modalTitle}>
              {editingIndex !== null ? "Edit Address" : "Add New Address"}
            </h3>

            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <label>First Name</label>
                <input
                  type="text"
                  value={addrFirstName}
                  onChange={(e) => setAddrFirstName(e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Last Name</label>
                <input
                  type="text"
                  value={addrLastName}
                  onChange={(e) => setAddrLastName(e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Phone</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className={styles.inputGroupFull}>
                <label>Street</label>
                <input
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label>City</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label>State</label>
                <input
                  type="text"
                  value={stateAddr}
                  onChange={(e) => setStateAddr(e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Country</label>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label>ZIP Code</label>
                <input
                  type="text"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.formActions}>
              <button className={styles.saveBtn} onClick={handleSaveAddress}>
                Save Address
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => {
                  setShowAddressForm(false);
                  setEditingIndex(null);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showAlert && (
        <div
          className={styles.alert_overlay}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1100,
          }}
        >
          <div
            className={styles.alert_box}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              width: "300px",
              textAlign: "center",
            }}
          >
            <h3>Success!</h3>
            <p>{alertMessage}</p>
            <button className={styles.alert_btn} onClick={() => closeAlert()}>
              OK
            </button>
          </div>
        </div>
      )}

      <Sfooter />
    </>
  );
}
