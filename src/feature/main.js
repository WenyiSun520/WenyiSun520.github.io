import React, { useState, useEffect } from "react";
import Three from "../threeD/three.js";
import Shape1 from "../threeD/shape1.js";
import Shape2 from "../threeD/shape2.js";



const Main = () => {
  const [count, setCount] = useState(1);
  const setTheme = (theme) => (document.documentElement.className = theme);
  let theme = ["orange", "purple", "green", "blue"];
  let shapes = [<Three/>, <Shape1/> , <Shape2/>]

  const handlePictureChanged = (e) => {
    e.preventDefault();
    if (count === 4) {
      setCount(1);
    } else {
      setCount((curr) => ++curr);
    }
    setTheme(theme[count]);
    console.log(count);
  };

  const handleClickScroll = () => {
    //  console.log(id)
    let element = document.getElementById("intro");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(()=>{
    import ("../threeD/three.js")
  },[])

  return (
    <>
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
              <a className="row" href="#experience" style={{ "--i": "3" }}>
                Experience
              </a>
              <a className="row" href="#projects" style={{ "--i": "2" }}>
                Projects
              </a>
              <a className="row" href="#skills" style={{ "--i": "4" }}>
                Skills
              </a>
            </div>
          </div>
          <div className="col-6">
            {shapes[count-1]}
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
      <canvas className="threeJSCanvas"></canvas>
    </>
  );
};

export default Main;
