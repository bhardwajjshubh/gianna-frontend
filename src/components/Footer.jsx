import React from "react";
import styles from "./Footer.module.css";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <h3>Contact Info</h3>
        <p>
          <FaPhone /> ‪+91 99530 75280
        </p>
        <p>
          <FaEnvelope /> support@gianna.com
        </p>
      </div>
      <div className={styles.footerSection}>
        <h3>Customer Support</h3>
        <p>
          <a href="mailto:support@example.com">support@gianna.com</a>
        </p>
        <p>Mon-Fri: 9am - 5pm</p>
      </div>
      <div className={styles.footerSection}>
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h3>Connect With Us</h3>
        <div className={styles.socialIcons}>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
