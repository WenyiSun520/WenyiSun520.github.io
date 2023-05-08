import React, { useRef, useEffect } from "react";

const Main = () => {
  let activeSlideRef = useRef(null);
  const handleClickScroll = () => {
    //  console.log(id)
    let element = document.getElementById("intro");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseMove = (e) => {
    window.requestAnimationFrame(function () {
      cardTransform(e.clientX, e.clientY);
    });
    function cardTransform(x, y) {
      let card = document.querySelector(".loading-background");
      let box = card.getBoundingClientRect();
      // console.log(box);

      let calX = (y - box.y - box.width / 2) / 3;
      let calY = ((x - box.x - box.height / 2) / 3) * -1;
      // console.log(`rotateX(${calX}deg)`);
      card.style.transform = `rotateX(${calX}deg) rotateY(${calY}deg)`;
    }
  };
  const handleMouseLeave = (e) => {
    window.requestAnimationFrame(function () {
      let card = document.querySelector(".loading-background");
      card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    });
  };
  const handleScroll = (e) => {
    console.log("im in onScroll")
    let element = e.target;
    console.log("element: ",element)
    const scrollY = window.scrollY;
    if (scrollY !== 0) {
      element.style.backgroundPosition = `cal(50% + ${scrollY}px) cal(50% + ${scrollY}px)`;
    } else {
      element.style.backgroundPosition = "";
    }
  };

  // useEffect(() => {
  //   if (activeSlideRef.current) {
  //     let element = activeSlideRef.current;
  //     element.addEventListener("scroll", () => {
  //       const scrollY = window.scrollY;
  //       if (scrollY !== 0) {
  //         element.style.backgroundPosition = `cal(50% + ${scrollY}px) cal(50% + ${scrollY}px)`;
  //       } else {
  //         element.style.backgroundPosition = "";
  //       }
  //     });
  //   }
  // }, []);
  return (
    <div id="home" className="container text-center vh-100 loading">
      <div
        className="row loading-background"
        // ref={activeSlideRef}
        onScroll={(e) => handleScroll(e)}
        // onMouseMove={(e) => handleMouseMove(e)}
        // onMouseLeave={(e) => handleMouseLeave(e)}
      >
        <span>Wenyi Sun</span>
        {/* <div className="row loading-main align-items-center">
          <p className="row greeting  justify-content-center"></p>
        </div> */}
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
