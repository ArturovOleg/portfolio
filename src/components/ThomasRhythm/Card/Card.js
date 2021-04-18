import React from "react";
import styles from "../../../assests/styles/ThomasRhythm/thomas-rhythm.module.scss";

const Card = ({ card }) => {
  return (
    <div className={styles.card}>
      {(card.isBlockquote && (
        <blockquote className={styles.cardText}>
          <p className={styles.quoteText}>{card.blockquote}</p>
          <p className={styles.quoteCaption}>{card.name}</p>
        </blockquote>
      )) || (
        <p className={`${styles.cardText} ${styles.cardParagraph}`}>
          {card.description}
        </p>
      )}
      <div className={styles.personInfo}>
        <div className={styles.information}>
          <h3 className={styles.titleInfo}>Skills</h3>
          <p className={`${styles.subscripion} mt-10`}>
            {card.skills.subscripion}
          </p>
          <div className={`${styles.skills} mt-30`}>
            <span>branding</span>
            <div className={`${styles.scale} w-100 mt-5 mb-15`}>
              <div
                className={`${styles.percent} w-${card.skills.branding}`}
              ></div>
            </div>

            <span>design</span>
            <div className={`${styles.scale} w-100 mt-5 mb-15`}>
              <div
                className={`${styles.percent} w-${card.skills.design}`}
              ></div>
            </div>

            <span>development</span>
            <div className={`${styles.scale} w-100 mt-5 mb-15`}>
              <div
                className={`${styles.percent} w-${card.skills.development}`}
              ></div>
            </div>

            <span>photography</span>
            <div className={`${styles.scale} w-100 mt-5 mb-15`}>
              <div
                className={`${styles.percent} w-${card.skills.photography}`}
              ></div>
            </div>
          </div>
        </div>
        <img className={styles.teamPhoto} src={card.photo} alt="Photo" />
      </div>
      <h3 className={styles.teamCaption}>{card.personName}</h3>
      <h4 className={styles.teamProf}>{card.profession}</h4>
    </div>
  );
};

export default Card;
