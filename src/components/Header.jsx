import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import { FaShoppingCart, FaSignInAlt } from "react-icons/fa";
import LoginForm from "./LoginForm";
import giannaImage from "../assets/logo1.png";
import ProductCardList from "./Shop";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Career from "./Career";

const Header = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/career") {
      setActiveSection("career");
    } else if (location.pathname === "/shop") {
      setActiveSection("shop");
    } else if (location.pathname === "/about-us") {
      setActiveSection("about");
    } else if (location.pathname === "/contact-us") {
      setActiveSection("contact");
    } else {
      setActiveSection("hero");
    }

    // Close login popup on route change
    setShowLogin(false);
  }, [location]);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleShopClick = () => {
    setActiveSection("shop");
  };

  const handleAboutClick = () => {
    setActiveSection("about");
  };

  const handleContactClick = () => {
    setActiveSection("contact");
  };

  const handleCareerClick = () => {
    setActiveSection("career");
  };

  return (
    <>
      <header className={styles.header}>
        <img src={giannaImage} alt="Gianna" className={styles.logo} />
        <nav className={styles.nav}>
          <Link to="/" onClick={() => setActiveSection("hero")}>
            Home
          </Link>
          <Link to="/about-us" onClick={handleAboutClick}>
            About Us
          </Link>
          <Link to="/shop" onClick={handleShopClick}>
            Shop
          </Link>
          <Link to="/contact-us" onClick={handleContactClick}>
            Contact Us
          </Link>
          <Link to="/career" onClick={handleCareerClick}>
            Career
          </Link>
        </nav>
        <div className={styles.headerRight}>
          <a href="#" className={styles.iconLink}>
            <FaShoppingCart /> Cart
          </a>
          <div className={styles.iconLink} onClick={handleLoginClick}>
            <FaSignInAlt /> Login
          </div>
        </div>
      </header>

      {/* Main Sections */}
      {activeSection === "hero" && <HeroSection />}
      {activeSection === "shop" && <ProductCardList />}
      {activeSection === "about" && <AboutUs />}
      {activeSection === "contact" && <ContactUs />}
      {activeSection === "career" && <Career />}

      {/* Login Modal */}
      {showLogin && (
        <div className={styles.loginOverlay}>
          <LoginForm onClose={handleCloseLogin} />
        </div>
      )}
    </>
  );
};

export default Header;
