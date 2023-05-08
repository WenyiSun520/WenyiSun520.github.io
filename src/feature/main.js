import React, { useState,useEffect } from "react";

const Main = () => {
  const [offsetY, setOffSetY] = useState(0);

  const handleClickScroll = () => {
    //  console.log(id)
    let element = document.getElementById("intro");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", () => setOffSetY(window.scrollY));
    return () =>
    window.removeEventListener("scroll", () => setOffSetY(window.scrollY));
  }, []);

  return (
    <div id="home" className="container text-center vh-100 loading">
      <div
        className="row loading-background"
      >
        {/* <span>Wenyi Sun</span> */}
        <div className="row loading-main align-items-center">
          <p className="row greeting  justify-content-center"></p>
        </div>
      </div>

      <div
        className="row justify-content-center srollbar-loading "
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
  );
};

export default Main;
