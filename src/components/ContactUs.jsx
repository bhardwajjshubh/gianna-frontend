import React, { useState } from "react";
import styles from "./HeroSection.module.css"; // reuse same CSS for styling
import logo from "../assets/logo1.png"; // use appropriate logo if different

const ContactUs = () => {
  const [charCount, setCharCount] = useState(0);

  const handleMessageChange = (e) => {
    setCharCount(e.target.value.length);
  };

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.contactTitle}>Get In Touch</h2>
      <div className={styles.contactContainer}>
        <div className={styles.contactLogo}>
          <img src={logo} alt="My Clear Choice" />
        </div>

        <form className={styles.contactForm}>
          <div className={styles.formRow}>
            <input type="text" placeholder="Your Name *" required />
            <input type="email" placeholder="Email Address *" required />
          </div>

          <div className={styles.formRow}>
            <input
              type="tel"
              placeholder="Phone Number *"
              maxLength={10}
              required
            />
            <span className={styles.charCounter}>{charCount} / 10</span>
          </div>

          <div className={styles.formRow}>
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>

          <div className={styles.formRow}>
            <select>
              <option>Line of Work</option>
              <option>Distributor</option>
              <option>Retailer</option>
              <option>Consumer</option>
            </select>
            <select>
              <option>Quantity</option>
              <option>500 ML</option>
              <option>1000 ML</option>
              <option>2000 ML</option>
            </select>
            <select>
              <option>Bottle Type</option>
              <option>CLEAR</option>
              <option>BLUE</option>
              <option>FROSTED</option>
            </select>
          </div>

          <textarea placeholder="Message" onChange={handleMessageChange} />

          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
