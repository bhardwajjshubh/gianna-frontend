import React from "react";
import styles from "./Career.module.css";

const Career = () => {
  const jobListings = [
    {
      title: "Distributor Sales Executive",
      description:
        "We are looking for a skilled software engineer to join our team.",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Product Manager",
      description:
        "Join us as a product manager to lead our innovative projects.",
      location: "Delhi",
      type: "Full-time",
    },
    {
      title: "Sales Associate",
      description:
        "We need a creative UX designer to enhance our user experience.",
      location: "Patna",
      type: "Contract",
    },
  ];

  return (
    <div className={styles.careerPage}>
      <h1 className={styles.pageTitle}>Career Opportunities</h1>
      <div className={styles.jobList}>
        {jobListings.map((job, index) => (
          <div key={index} className={styles.jobCard}>
            <h2 className={styles.jobTitle}>{job.title}</h2>
            <p className={styles.jobDescription}>{job.description}</p>
            <p className={styles.jobLocation}>{job.location}</p>
            <p className={styles.jobType}>{job.type}</p>
            <button className={styles.applyButton}>Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
