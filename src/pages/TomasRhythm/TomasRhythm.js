import React, { useState } from "react";
import Header from "../../shared/Header/Header";
import styles from "../../assests/styles/ThomasRhythm/thomas-rhythm.module.scss";
import logoThomas from "../../assests/images/TomasRhythm/Header-logo.png";
import Poster from "../../components/ThomasRhythm/Poster/Poster";
import About from "../../components/ThomasRhythm/About/About";
import teamImg1 from "../../assests/images/TomasRhythm/team-img-1.jpg";
import teamImg2 from "../../assests/images/TomasRhythm/team-img-2.jpg";
import teamImg3 from "../../assests/images/TomasRhythm/team-img-3.jpg";
import Services from "../../components/ThomasRhythm/ServicesBlock/Services";

const TomasRhythm = () => {
  const Items = [
    {
      label: "home",
    },
    {
      label: "about",
    },
    {
      label: "services",
    },
    {
      label: "works",
    },
    {
      label: "contacts",
    },
  ];

  const team = [
    {
      blockquote:
        "Design is not making beauty, beauty emerges from selection, affinities, integration, love.",
      name: "— Louis Kahn",
      isBlockquote: true,
      photo: teamImg1,
      skills: {
        subscripion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium vulputate sapien nec sagittis.",
        branding: 85,
        design: 90,
        development: 95,
        photography: 80,
      },
      personName: "Thomas Rhythm",
      profession: "Art Director",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.",
      isBlockquote: false,
      photo: teamImg2,
      skills: {
        subscripion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium vulputate sapien nec sagittis.",
        branding: 75,
        design: 80,
        development: 75,
        photography: 80,
      },
      personName: "Marta Lening",
      profession: "Web Engineer",
    },
    {
      description:
        "Etiam sit amet fringilla lacus. Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend, fermentum orci amet, iaculis libero. Donec vel ultricies purus. Nam dictum sem, eu aliquam ipsum.",
      isBlockquote: false,
      photo: teamImg3,
      skills: {
        subscripion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium vulputate sapien nec sagittis.",
        branding: 80,
        design: 75,
        development: 65,
        photography: 99,
      },
      personName: "Steve Anders",
      profession: "Developer",
    },
  ];

  return (
    <>
      <main className={styles.wrapper}>
        <Header headerItems={Items} logo={logoThomas} />
        <Poster />
        <About cards={team} />
        <Services />
      </main>
    </>
  );
};

export default TomasRhythm;
