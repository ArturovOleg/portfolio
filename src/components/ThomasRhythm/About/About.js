import React from "react";
import styles from "../../../assests/styles/ThomasRhythm/thomas-rhythm.module.scss";
import Card from "../Card/Card";

const About = (props) => {
  const { cards } = props;

  return (
    <>
      <section className={styles.about}>
        <div className="container">
          <h2 className={styles.aboutStudio}>about studio</h2>
          <div className={`${styles.cardsWrapper} d-f`}>
            {cards.map((card, i) => (
              <React.Fragment key={`${i}_card`}>
                <Card card={card} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
