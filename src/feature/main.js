import React, {useState} from "react";

const Main = () => {

  const [count, setCount] = useState(1);
  const setTheme = (theme) => (document.documentElement.className = theme);
  let theme = [
    "orange",
    "purple",
    "green",
    "blue"
  ];

  const handlePictureChanged = (e) => {
    e.preventDefault();
    if (count === 4) {
      setCount(1);
    } else {
      setCount((curr) => ++curr);
    }
    setTheme(theme[count])
    console.log(count)
  };

  const handleClickScroll = () => {
    //  console.log(id)
    let element = document.getElementById("intro");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div id="home" className="container vh-100 loading">
      <div className="row loading-background text-center">
        <div
          className="diy-btn row d-flex flex-column "
          onClick={(e) => handlePictureChanged(e)}
        >
          <span className="btn-line btn-line-short"></span>
          <span className="btn-line btn-line-long"></span>
          <span className="btn-line btn-line-short align-self-end"></span>
        </div>

        <div id="mySidenav" className="col sidenav">
          <div className="row d-flex flex-column align-items-end">
            <a className="row" href="#intro" style={{ "--i": "1" }}>
              About Me
            </a>
            <a className="row" href="#projects" style={{ "--i": "2" }}>
              Projects
            </a>
            <a className="row" href="#experience" style={{ "--i": "3" }}>
              Internship
            </a>
            <a className="row" href="#skills" style={{ "--i": "4" }}>
              Skills
            </a>
          </div>
        </div>
        <div className="col-6">
          <p className="welcome welcome-1" style={{ "--i": "1" }}>
            My name is Wenyi Sun
          </p>
          <p className="welcome welcome-2" style={{ "--i": "2" }}>
            Welcome to my porfolio!
          </p>
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
