import React, { useState } from "react";

const Main = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  console.log("toggleMenu: " + toggleMenu);

  const handleClickScroll = () => {
    //  console.log(id)
    let element = document.getElementById("intro");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="container vh-100 loading">
      <div className="row loading-background text-center align-items-center justify-content-center">
        <i
          className={`fa-solid fa-bars row float-end ${
            toggleMenu ? "no-menu" : "show-menu"
          }`}
          onClick={() => setToggleMenu((val) => !val)}
        ></i>

        <div
          id="mySidenav"
          className={`sidenav row justify-content-start ${
            toggleMenu ? "show-menu" : "no-menu"
          }`}
        >
          <div
            className={`x-mark row float-start`}
            onClick={() => setToggleMenu((val) => !val)}
          >
            <i
              className="fa-solid fa-xmark"
              // onClick={() => setToggleMenu((val) => !val)}
            ></i>
          </div>
          <div className="row nav">
            <a
              className="row"
              href="#intro"
              onClick={() => setToggleMenu((val) => !val)}
            >
              About Me
            </a>
            <a
              className="row"
              href="#projects"
              onClick={() => setToggleMenu((val) => !val)}
            >
              Projects
            </a>
            <a
              className="row"
              href="#experience"
              onClick={() => setToggleMenu((val) => !val)}
            >
              Internship
            </a>
            <a
              className="row"
              href="#skills"
              onClick={() => setToggleMenu((val) => !val)}
            >
              Skills
            </a>
          </div>
        </div>

        <p className="row welcome">Welcome</p>

        <div
          className="row align-self-end srollbar-loading "
          onClick={() => handleClickScroll()}
        >
          <i
            className="row fa-solid fa-chevron-down fa-xl"
            style={{ "--i": "1" }}
          ></i>
          <i
            className="row fa-solid fa-chevron-down fa-xl"
            style={{ "--i": "2" }}
          ></i>
          <i
            className="row fa-solid fa-chevron-down fa-2xl"
            style={{ "--i": "3" }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Main;
