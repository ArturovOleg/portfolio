import React, { useState, useEffect } from "react";
import styles from "../../../assests/styles/ThomasRhythm/thomas-rhythm.module.scss";
import Tabs from "../../../shared/Tabs/Tabs";

const Services = ({ servicesTabsData }) => {
  const [tabsHeaderItems, setTabsHeaderItems] = useState([]);
  const [tabsContentItems, setTabsContentItems] = useState([]);

  useEffect(() => {
    setTabsHeaderItems(
      servicesTabsData.map((item) => {
        return {
          name: item.name,
          icon: item.icon,
        };
      })
    );

    setTabsContentItems(
      servicesTabsData.map((item) => {
        return {
          content: {
            blockquote: {
              text: item.content.blockquote.text,
              name: item.content.blockquote.name,
            },
            firstCol: item.content.firstTextColumn,
            secondCol: item.content.secondTextColumn,
          },
        };
      })
    );
  }, [servicesTabsData]);

  const renderTabsHeader = (headerItems, onTabClick, selectedTab) => {
    return (
      <div className={`${styles.servicesItems} d-f jc-sa`}>
        {headerItems.map((tabsHeaderItem, index) => (
          <div
            key={`${index}_servicesItem`}
            className={`${styles.servicesItem} ${
              selectedTab === index && styles.active
            }`}
            onClick={() => onTabClick(index)}
          >
            <span className={`${styles.icon} ${tabsHeaderItem.icon}`}></span>
            <h3 className={`${styles.servicesTitle} mt-35`}>
              {tabsHeaderItem.name}
            </h3>
          </div>
        ))}
      </div>
    );
  };

  const renderTabsContent = (selectedContent, fadeIn) => {
    return (
      <div
        className={`${styles.servicesText} ${
          fadeIn ? styles.visible : styles.hidden
        } d-f  mt-70`}
      >
        <blockquote className={styles.servicesColumn}>
          <p className={styles.quoteText}>
            {selectedContent.content.blockquote.text}
          </p>
          <p className={styles.quoteCaption}>
            {selectedContent.content.blockquote.name}
          </p>
        </blockquote>
        <p className={`${styles.servicesParagraph} ${styles.servicesColumn} `}>
          {selectedContent.content.firstCol}
        </p>
        <p className={`${styles.servicesParagraph} ${styles.servicesColumn}`}>
          {selectedContent.content.secondCol}
        </p>
      </div>
    );
  };

  return (
    <section className={styles.services}>
      <div className="container">
        <h2 className={styles.servicesMainTitle}>services</h2>
        <Tabs
          headerItems={tabsHeaderItems}
          tabsContentItems={tabsContentItems}
          renderTabsContent={renderTabsContent}
          renderTabsHeader={renderTabsHeader}
        />
      </div>
    </section>
  );
};

export default Services;
