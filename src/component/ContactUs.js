import React, { useRef, useState } from "react";
import styles from "../styles/ContactUs.module.css";
import Sfooter from "./Sfooter";

import img from "../img1/e-h1.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function ContactUs() {
  const [category, setCategory] = useState("account");

  // State for image and name
  const [profileImg, setProfileImg] = useState(img);
  const [name, setName] = useState("Sofia Havertz");

  const fileInputRef = useRef(null);

  // Handle image selecting
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  // Preview selected image
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) setProfileImg(URL.createObjectURL(file));
  };

  // FORM STATES
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // VALIDATION
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
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (validateForm()) {
  //     alert("Successfully saved!");
  //     // NEXT PAGE:
  //     window.location.href = "/";
  //   }
  // };

  const [showAlert, setShowAlert] = useState(false); // ALERT POPUP
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setShowAlert(true); // Show popup
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
    window.location.href = "/"; // redirect next page
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
                  {/* <img src={img} alt="profile" className={styles.profileImg} />
                  <h3 className={styles.profileName}>Sofia Havertz</h3> */}
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
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <ul className={styles.sidebarMenu}>
                  <li
                    className={ 
                      category === "account" ? styles.activeMenu : "account"
                    }
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
                  <a href="/SignPopup">
                    <li>Log Out</li>
                  </a>
                </ul>
              </div>
            </div>

            {/* <div className={`col-md-9 ${styles.account_profile_rightside}`}>
              <h2 className={styles.sectionTitle}>Account Details</h2>

              <form className={styles.accountForm}>
                <div className={styles.inputGroup}>
                  <label>FIRST NAME *</label>
                  <input type="text" placeholder="First name" />
                </div>

                <div className={styles.inputGroup}>
                  <label>LAST NAME *</label>
                  <input type="text" placeholder="Last name" />
                </div>

                <div className={styles.inputGroup}>
                  <label>DISPLAY NAME *</label>
                  <input type="text" placeholder="Display name" />
                </div>

                <p className={styles.infoText}>
                  This will be how your name will be displayed in the account
                  section and in reviews
                </p>

                <div className={styles.inputGroup}>
                  <label>EMAIL *</label>
                  <input type="email" placeholder="Email" />
                </div>

                <h2 className={styles.sectionTitle_pass}>Password</h2>

                <div className={styles.inputGroup_pass}>
                  <label>OLD PASSWORD</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder={placeholder}
                    className={styles.passwordInput}
                  />
                  <span
                    className={styles.toggleIcon}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                <div className={styles.inputGroup_pass}>
                  <label>NEW PASSWORD</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder={placeholder}
                    className={styles.passwordInput}
                  />
                  <span
                    className={styles.toggleIcon}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                <div className={styles.inputGroup_pass}>
                  <label>REPEAT NEW PASSWORD</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder={placeholder}
                    className={styles.passwordInput}
                  />
                  <span
                    className={styles.toggleIcon}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                <button className={styles.saveBtn}>Save changes</button>
              </form>
            </div> */}

            <div className={`col-md-9 ${styles.account_profile_rightside}`}>
              {category === "account" && (
                <>
                  <h2 className={styles.sectionTitle}>Account Details</h2>

                  <form className={styles.accountForm} onSubmit={handleSubmit}>
                    {/* FIRST NAME */}
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

                    {/* LAST NAME */}
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

                    {/* DISPLAY NAME */}
                    <div className={styles.inputGroup}>
                      <label>DISPLAY NAME *</label>
                      <input
                        type="text"
                        placeholder="Display name"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                      />
                      {errors.displayName && (
                        <p className={styles.error}>{errors.displayName}</p>
                      )}
                    </div>

                    {/* EMAIL */}
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

                    {/* OLD PASSWORD */}
                    <div className={styles.inputGroup_pass}>
                      <label>OLD PASSWORD</label>
                      <input
                        type={showPassword ? "text" : "password"}
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                      />
                      <span
                        className={styles.toggleIcon}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                      {errors.oldPassword && (
                        <p className={styles.error}>{errors.oldPassword}</p>
                      )}
                    </div>

                    {/* NEW PASSWORD */}
                    <div className={styles.inputGroup_pass}>
                      <label>NEW PASSWORD</label>
                      <input
                        type={showPassword ? "text" : "password"}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                      <span
                        className={styles.toggleIcon}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                      {errors.newPassword && (
                        <p className={styles.error}>{errors.newPassword}</p>
                      )}
                    </div>

                    {/* REPEAT PASSWORD */}
                    <div className={styles.inputGroup_pass}>
                      <label>REPEAT NEW PASSWORD</label>
                      <input
                        type={showPassword ? "text" : "password"}
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                      />
                      <span
                        className={styles.toggleIcon}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                      {errors.repeatPassword && (
                        <p className={styles.error}>{errors.repeatPassword}</p>
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
                          onClick={closeAlert}
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
                  <h2>Address Section</h2>

                  {showAlert && (
                    <div className={styles.alert_overlay}>
                      <div className={styles.alert_box}>
                        <h3>Success!</h3>
                        <p>Your address details were updated successfully.</p>

                        <button
                          className={styles.alert_btn}
                          onClick={closeAlert}
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
                  <h2>Orders Section</h2>
                </>
              )}

              {/* WISHLIST------------------------------- */}
              {category === "wishlist" && (
                <>
                <h2>Wishlist Section</h2>
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
