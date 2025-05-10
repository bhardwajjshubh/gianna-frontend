import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./HeroSection.module.css";

// Import images
import image1 from "../assets/bottle-group.png";
import image2 from "../assets/family1.png";
import image3 from "../assets/family.png";
import pioneersImage from "../assets/bottle2.png";
import contactLogo from "../assets/logo1.png";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.heroSection}>
      <Slider {...settings}>
        <div className={styles.slide}>
          <img src={image1} alt="Slide 1" className={styles.slideImage} />
        </div>
        <div className={styles.slide}>
          <img src={image2} alt="Slide 2" className={styles.slideImage} />
        </div>
        <div className={styles.slide}>
          <img src={image3} alt="Slide 3" className={styles.slideImage} />
        </div>
      </Slider>
      <div className={styles.pioneerSection}>
        <div className={styles.pioneerText}>
          <h2>Pioneers and Innovators</h2>
          <p>
            Established way back in 2005, Energy Beverages Pvt. Ltd. has always
            believed in giving back to the people and the environment. The idea
            of a vital product like bottled water came from the fact that
            millions of people do not have access to safe and clear drinking
            water. We at Energy Beverages practice a strict quality centric
            process and place great importance on being a virtue driven
            manufacturing company.
          </p>
        </div>
        <div className={styles.pioneerImage}>
          <img src={pioneersImage} alt="Pioneers and Innovators" />
        </div>
      </div>
      <div className={styles.contactSection}>
        <h2 className={styles.contactTitle}>Get In Touch</h2>
        <div className={styles.contactContainer}>
          <div className={styles.contactLogo}>
            <img src={contactLogo} alt="Contact Logo" />
          </div>
          <form className={styles.contactForm}>
            <div className={styles.formRow}>
              <input type="text" placeholder="Your Name *" required />
              <input type="email" placeholder="Email Address *" required />
            </div>
            <div className={styles.formRow}>
              <input type="tel" placeholder="Phone Number *" required />
              <span className={styles.charCounter}>0 / 10</span>
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
              </select>
              <select>
                <option>Quantity</option>
                <option>500 ML</option>
                <option>1000 ML</option>
              </select>
              <select>
                <option>Bottle Type</option>
                <option>CLEAR</option>
                <option>FROSTED</option>
              </select>
            </div>
            <textarea placeholder="Message" rows="3" />
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
