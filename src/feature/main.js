import React from "react";

const Main = () => {
  return (
    <div id="main" className="container text-center vh-100  main">
      <div className="row vh-100 align-items-center">
        <div className="col personalInfo">
          <div className="row title">
            <h1 className="display-1">Wenyi Sun</h1>
            <h2>Software Developer</h2>
            <h2>UI/UX Designer</h2>
            <p>
              My name is Wenyi Sun. I'm a motivated learner with a passion for
              Software engineering and UI/UX design. Proficient in JAVA and
              React Programming. Passion for reaching out and would love to
              collaborate with people from diverse cultures and backgrounds.
              Positive and enthusiastic personality, team worker, and strong
              communication skills.
            </p>
          </div>
          <div className="row contact">
            <a className="col" href="tel:4256150586">
              <i className="col fa-solid fa-phone"></i>
            </a>
            <a className="col" href="mailto:winnieee.sun@gmail.com">
              <i className="fa-solid fa-at"></i>
            </a>
            <a
              className="col"
              href="https://www.linkedin.com/in/wenyi-sun-519942195/"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a className="col" href="https://github.com/WenyiSun520">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div className="col photo">
          <img
            className="img-responsive img-thumbnail profile-picture"
            src="./imgs/profile.jpg"
            alt="profile"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Main;
