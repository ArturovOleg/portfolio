import React from "react";
import styles from "../../../assests/styles/ThomasRhythm/thomas-rhythm.module.scss";
import letsTalkImg from "../../../assests/images/TomasRhythm/lookngForBlockImg.png";

const LookingForBlock = () => {
  return (
    <section className={styles.LookingForBlock}>
      <div className={`${styles.LookingFor} container`}>
        <div className={`${styles.leftSection} w-50`}>
          <h2 className={styles.title}>
            Looking for exclusive digital services?
          </h2>
          <p className={`${styles.description} mt-30`}>
            Proin fringilla augue at maximus vestibulum. Nam pulvinar vitae
            neque et porttitor. Integer non dapibus diam, ac eleifend lectus.
          </p>
          <button className={`${styles.letsTalk} mt-40`}>Lets Talk</button>
        </div>
        <div className={styles.rightSection}>
          <img className={styles.letsTalkImg} src={letsTalkImg} alt="picture" />
        </div>
      </div>
    </section>
  );
};

export default LookingForBlock;
