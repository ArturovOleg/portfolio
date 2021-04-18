import React from "react";
import styles from "../../../assests/styles/ThomasRhythm/thomas-rhythm.module.scss";

const Poster = () => {
  return (
    <>
      <section className={styles.poster}>
        <div className={`${styles.info} d-f jc-c ai-c fd-column`}>
          <h1 className={styles.posterTitle}>Thomas Rhythm</h1>
          <h2 className={styles.posterDescript}>
            Extraordinary art director & creative minimalism lover
          </h2>
        </div>
        <button className={styles.buttonDown}>
          <div className={styles.inner}></div>
        </button>
      </section>
    </>
  );
};

export default Poster;
