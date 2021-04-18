import React from "react";
import logo from "../../assests/images/coocingCourses/logo.png";
import facebook from "../../assests/images/coocingCourses/facebook_icon.png";
import vk from "../../assests/images/coocingCourses/vk_icon.png";
import search from "../../assests/images/coocingCourses/search_icon.png";

const CoockieCourses = () => {
  return (
    <>
      <header className="header d-f ai-c jc-c">
        <div className="container d-f ai-c">
          <img className="logo" src={logo} />
          <nav className="header-nav d-f">
            <a href="#">About us</a>
            <a href="#">Courses</a>
            <a href="#">Chief-cookers</a>
            <a href="#">Contacts</a>
          </nav>
          <div className="social">
            <a href="#">
              <img src={facebook} />
            </a>
            <a href="#">
              <img src={vk} />
            </a>
            <a href="#">
              <img src={search} />
            </a>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="main-section">
          <div className="content d-f ai-c">
            <h1 className="title">Coocing School</h1>
            <h2 className="title2">in Kharkiv</h2>
            <button className="button">View courses</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default CoockieCourses;
