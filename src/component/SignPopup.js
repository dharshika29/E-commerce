import React, { useState } from "react";
import styles from "../styles/Home2.module.css";
import chair from "../Image2/s-sign.png";
export default function SignInSignUpPopup({ close }) {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPass("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !pass) {
      setError("All fields are required!");
      return;
    }

    if (!email.includes("@")) {
      setError("Enter a valid email address!");
      return;
    }

    if (pass.length < 6) {
      setError("Password must be at least 6 characters!");
      return;
    }

    // ------------------------
    // SIGN UP LOGIC
    // ------------------------
    if (isSignUp) {
      const userData = { email, pass };
      localStorage.setItem("userInfo", JSON.stringify(userData));
      setSuccess("Account created successfully!");
      clearInputs();
      return;
    }

    // ------------------------
    // SIGN IN LOGIC
    // ------------------------
    const savedUser = JSON.parse(localStorage.getItem("userInfo"));

    if (!savedUser) {
      setError("No account found. Please Sign Up!");
      return;
    }

   if (savedUser.email === email && savedUser.pass === pass) {
  setSuccess("Logged in successfully!");
  clearInputs();

  close();   // 👈 LOGIN SUCCESS → IMMEDIATELY CLOSE POPUP

} else {
  setError("Incorrect email or password!");
}

  };

  return (
    <div className={styles.overlay}>
      <div className={styles.box}>
        
        {/* LEFT IMAGE */}
        <div className={styles.left}>
          <img src={chair} alt="chair" />
        </div>

        {/* RIGHT FORM */}
        <div className={styles.right}>
          <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>

          <p>
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <span onClick={() => { setIsSignUp(!isSignUp); setError(""); setSuccess(""); }}>
              {isSignUp ? " Sign In" : " Sign Up"}
            </span>
          </p>

          {/* SUCCESS MESSAGE */}
          {success && <div className={styles.success}>{success}</div>}

          {/* ERROR MESSAGE */}
          {error && <div className={styles.error}>{error}</div>}

          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />

            <button type="submit" className={styles.btn}>
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>

          <span className={styles.close} onClick={close}>✕</span>
        </div>

      </div>
    </div>
  );
}
