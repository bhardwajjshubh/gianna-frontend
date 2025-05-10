import React from "react";
import styles from "./AboutUs.module.css";
import member1 from "../assets/member1.jpeg";
import member2 from "../assets/member2.jpeg";
import member3 from "../assets/member3.jpeg";
const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <h1 className={styles.aboutUsTitle}>About Us</h1>
      <p className={styles.aboutUsDescription}>
        Welcome to Gianna, where innovation meets excellence. We are dedicated
        to providing top-notch solutions tailored to meet your needs. Our
        journey began with a simple idea and has grown into a trusted name in
        the industry.
      </p>

      <div className={styles.missionVisionContainer}>
        <div className={styles.missionSection}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <p className={styles.sectionDescription}>
            Our mission is to empower our clients with cutting-edge technology
            and unparalleled service. We strive to exceed expectations and
            deliver value that transforms businesses.
          </p>
        </div>

        <div className={styles.visionSection}>
          <h2 className={styles.sectionTitle}>Our Vision</h2>
          <p className={styles.sectionDescription}>
            We envision a world where technology bridges gaps and creates
            opportunities. Our goal is to be at the forefront of this change,
            driving progress and innovation.
          </p>
        </div>
      </div>

      <div className={styles.teamSection}>
        <h2 className={styles.sectionTitle}>Meet Our Team</h2>
        <div className={styles.teamMembers}>
          <div className={styles.teamMember}>
            <img
              src={member1}
              alt="Team Member 1"
              className={styles.teamImage}
            />
            <h3 className={styles.memberName}>John Doe</h3>
            <p className={styles.memberRole}>CEO</p>
          </div>
          <div className={styles.teamMember}>
            <img
              src={member2}
              alt="Team Member 2"
              className={styles.teamImage}
            />
            <h3 className={styles.memberName}>Jane Smith</h3>
            <p className={styles.memberRole}>CTO</p>
          </div>
          <div className={styles.teamMember}>
            <img
              src={member3}
              alt="Team Member 3"
              className={styles.teamImage}
            />
            <h3 className={styles.memberName}>Alice Johnson</h3>
            <p className={styles.memberRole}>Lead Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
