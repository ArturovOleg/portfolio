import React from "react";
import styles from "../../../assests/styles/ThomasRhythm/thomas-rhythm.module.scss";

const Services = () => {
  return (
    <section className={styles.services}>
      <div className="container">
        <h2 className={styles.servicesMainTitle}>services</h2>
        <div className={`${styles.servicesItems} d-f jc-sa `}>
          <div className={styles.servicesItem}>
            <span className={`${styles.icon} icon-strategy`}></span>
            <h3 className={`${styles.servicesTitle} mt-35`}>Branding</h3>
          </div>

          <div className={styles.servicesItem}>
            <span className={`${styles.icon} icon-desktop`}></span>
            <h3 className={`${styles.servicesTitle} mt-35`}>web design</h3>
          </div>

          <div className={styles.servicesItem}>
            <span className={`${styles.icon} icon-tools`}></span>
            <h3 className={`${styles.servicesTitle} mt-35`}>graphic design</h3>
          </div>

          <div className={styles.servicesItem}>
            <span className={`${styles.icon} icon-gears `}></span>
            <h3 className={`${styles.servicesTitle} mt-35`}>Development</h3>
          </div>

          <div className={styles.servicesItem}>
            <span className={`${styles.icon} icon-camera`}></span>
            <h3 className={`${styles.servicesTitle} mt-35`}>Photodraphy</h3>
          </div>
        </div>

        <div className={`${styles.servicesText} d-f  mt-70`}>
          <blockquote className={styles.servicesColumn}>
            <p className={styles.quoteText}>
              A brand for a company is like a reputation for a person. You earn
              reputation by trying to do hard things well.
            </p>
            <p className={styles.quoteCaption}>— Jeff Bezos</p>
          </blockquote>

          <p
            className={`${styles.servicesParagraph} ${styles.servicesColumn} `}
          >
            Maecenas volutpat, diam enim sagittis quam, id porta quam. Sed id
            dolor consectetur fermentum volutpat nibh, accumsan purus. Lorem
            ipsum dolor sit semper amet, consectetur adipiscing elit. In maximus
            ligula metus pellentesque mattis.
          </p>

          <p className={`${styles.servicesParagraph} ${styles.servicesColumn}`}>
            Donec vel ultricies purus. Nam dictum sem, ipsum aliquam . Etiam sit
            amet fringilla lacus. Pellentesque suscipit ante at ullamcorper
            pulvinar neque porttitor. Integer lectus. Praesent sed nisi
            eleifend, fermentum orci amet, iaculis libero.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
