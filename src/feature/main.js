import React from "react";

const Main = () => {

  const handleClickScroll = () => {
    //  console.log(id)
    let element = document.getElementById("intro");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = ()=>{
    // let diyBtn = document.querySelector("#mySidenav")
    // diyBtn.classList.toggle("sidenav-active");

  }

  return (
    <div id="home" className="container vh-100 loading">
      <div className="row loading-background text-center">
        <div className="diy-btn row d-flex flex-column " onClick={toggleMenu}>
          <span className="btn-line btn-line-short"></span>
          <span className="btn-line btn-line-long"></span>
          <span className="btn-line btn-line-short align-self-end"></span>
        </div>

        <div id="mySidenav" className="col sidenav">
          <div className="row d-flex flex-column align-items-end">
            <a
              className="row"
              href="#intro"
              style={{ "--i": "1" }}
              onClick={toggleMenu}
            >
              About Me
            </a>
            <a
              className="row"
              href="#projects"
              style={{ "--i": "2" }}
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              className="row"
              href="#experience"
              style={{ "--i": "3" }}
              onClick={toggleMenu}
            >
              Internship
            </a>
            <a
              className="row"
              href="#skills"
              style={{ "--i": "4" }}
              onClick={toggleMenu}
            >
              Skills
            </a>
          </div>
        </div>
        <div className="col-1">
          <p className="col  welcome">Welcome</p>
        </div>

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
