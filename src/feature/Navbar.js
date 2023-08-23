import React from "react";
import contacts from "../constant/contacts";

const Navbar = () => {
  const handleClickScroll = (id) => {
    //  console.log(id)
    let element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      <nav className="col navbar navbar-expand-lg bg-light">
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarScroll"
        >
          <a
            href="#home"
            className="nav-name navbar-brand"
            onClick={(e) => handleHomeBotton(e)}
          >
            Wenyi Sun
          </a>
          <ul className="navbar-nav me-auto my-2 my-lg-0">
            <li className="nav-item" style={{ "--i": "1" }}>
              <span
                className="nav-link nav-item-animation"
                onClick={() => handleClickScroll("intro")}
              >
                About Me
              </span>
            </li>
            <li className="nav-item" style={{ "--i": "3" }}>
              <span
                className="nav-link nav-item-animation"
                onClick={(e) => handleClickScroll("experience")}
              >
                Work Experience
              </span>
            </li>
            <li className="nav-item" style={{ "--i": "2" }}>
              <span
                className="nav-link nav-item-animation"
                onClick={(e) => handleClickScroll("projects")}
              >
                Projects
              </span>
            </li>

            <li className="nav-item" style={{ "--i": "4" }}>
              <span
                className="nav-link nav-item-animation"
                onClick={(e) => handleClickScroll("skills")}
              >
                Skills
              </span>
            </li>
          </ul>
        </div>
        <a className="btn col-1 cv-btn" href={contacts.resume}>
          Download CV
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
