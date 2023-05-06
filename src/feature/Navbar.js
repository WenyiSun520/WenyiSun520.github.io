import React from "react";

const Navbar = () => {
  const handleClickScroll = (id)=>{
   //  console.log(id)
    let element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#main">
          Wenyi Sun
        </a>

        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <span className="nav-link" onClick={() => handleClickScroll("home")}>
                Home
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={(e) => handleClickScroll("projects")}>
                Projects
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={(e) => handleClickScroll("experience")}>
                Internship
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={(e) => handleClickScroll("skills")}>
                Skills
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
