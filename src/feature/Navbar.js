import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isInteresting, setIsInteresting] = useState(false); //return true when ineraction occurs
  const ref = useRef(null);
  const handleClickScroll = (id) => {
    //  console.log(id)
    let element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInteresting(entry.isIntersecting);
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isInteresting]);

  useEffect(() => {
    if (isInteresting) {
      ref.current.querySelectorAll(".nav-link").forEach((el) => {
        el.classList.add("nav-item-animation");
      });
      ref.current.querySelector("a").classList.add("navbar-brand");
    } else {
      ref.current.querySelectorAll(".nav-link").forEach((el) => {
        el.classList.remove("nav-item-animation");
      });
      ref.current.querySelector("a").classList.remove("navbar-brand");
    }
  }, [isInteresting]);

  const handleHomeBotton = (e) => {
    e.preventDefault();
    let btn = document.querySelector(".nav-name");
    btn.classList.add("name-click-animation");
    setTimeout(() => {
      btn.classList.remove("name-click-animation");
      let element = document.getElementById("home");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 600);
  };

  return (
    <div className="menu row container-fluid ">
      <nav className="col navbar navbar-expand-lg navbar-light bg-light ">
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarScroll"
          ref={ref}
        >
          <a
            href="#home"
            className="nav-name"
            onClick={(e) => handleHomeBotton(e)}
          >
            Wenyi Sun
          </a>
          <ul className="navbar-nav me-auto my-2 my-lg-0">
            <li className="nav-item" style={{ "--i": "1" }}>
              <span
                className="nav-link"
                onClick={() => handleClickScroll("intro")}
              >
                About Me
              </span>
            </li>
            <li className="nav-item" style={{ "--i": "2" }}>
              <span
                className="nav-link"
                onClick={(e) => handleClickScroll("projects")}
              >
                Projects
              </span>
            </li>
            <li className="nav-item" style={{ "--i": "3" }}>
              <span
                className="nav-link"
                onClick={(e) => handleClickScroll("experience")}
              >
                Internship
              </span>
            </li>
            <li className="nav-item" style={{ "--i": "4" }}>
              <span
                className="nav-link"
                onClick={(e) => handleClickScroll("skills")}
              >
                Skills
              </span>
            </li>
          </ul>
        </div>
        <a
          className="btn col-1 cv-btn"
          href="https://github.com/WenyiSun520/TarotsToday"
          onClick={() => console.log("im clicking!")}
        >
          Download CV
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
