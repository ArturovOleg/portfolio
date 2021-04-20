import React, { useState } from "react";
import Header from "../../shared/Header/Header";
import styles from "../../assests/styles/ThomasRhythm/thomas-rhythm.module.scss";
import logoThomas from "../../assests/images/TomasRhythm/Header-logo.png";
import Poster from "../../components/ThomasRhythm/Poster/Poster";
import About from "../../components/ThomasRhythm/About/About";
import Services from "../../components/ThomasRhythm/ServicesBlock/Services";
import Tabs from "../../shared/Tabs/Tabs";
import {MenuItems, team, servicesTabsData} from "../../components/ThomasRhythm/constants";
import LookingForBlock from "../../components/ThomasRhythm/LookingForBlock/LookingForBlock";

const TomasRhythm = () => {

  return (
    <>
      <main className={styles.wrapper}>
        <Header headerItems={MenuItems} logo={logoThomas} />
        <Poster />
        <About cards={team} />
        <Services servicesTabsData={servicesTabsData}/>
        <Tabs />
        <Services />
        <LookingForBlock />
      </main>
    </>
  );
};

export default TomasRhythm;
