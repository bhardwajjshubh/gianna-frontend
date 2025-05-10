import React, { useEffect, useRef } from "react";
import styles from "./LoginForm.module.css";

const LoginForm = ({ onClose }) => {
  const loginRef = useRef(null);

  const handleClickOutside = (event) => {
    if (loginRef.current && !loginRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.loginContainer} ref={loginRef}>
      <div className={styles.loginForm}>
        <h2>Sign in</h2>
        <form>
          <label>
            Username or email address
            <input type="text" />
          </label>
          <label>
            Password
            <br />
            <input type="password" />
          </label>
          <button type="button">LOG IN</button>
        </form>
        <div className={styles.remember}>
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
          <a href="#">Lost your password?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
