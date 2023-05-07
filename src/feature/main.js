import React from "react";

const Main = () => {
    const handleClickScroll = () => {
      //  console.log(id)
      let element = document.getElementById("intro");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
  return (
    <div id="home" className="container text-center vh-100 loading">
      <div className="row loading-main">
        <h1></h1>
      </div>
      
        <div className="row justify-content-center srollbar-loading "  onClick={() => handleClickScroll()}>
          <i
            className="row fa-solid fa-chevron-down"
            style={{ "--i": "1" }}
          ></i>
          <i
            className="row fa-solid fa-chevron-down"
            style={{ "--i": "2" }}
          ></i>
          <i
            className="row fa-solid fa-chevron-down"
            style={{ "--i": "3" }}
          ></i>
        </div>

    </div>
  );
};

export default Main;
