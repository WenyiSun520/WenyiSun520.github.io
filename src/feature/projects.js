import React from "react";

const Project = () => {
  return (
    <div
      id="projects"
      className="container text-center vh-100 align-items-center projects"
    >
      <div className="row vh-100 align-items-center justify-content-center">
        <div className="row project">
          <div className="col project-picture-section">
            <img
              className="project-img"
              src="./imgs/cat-lender.png"
              alt="cat lender"
            />
            <div className="project-title">
              <a href="https://cat-lender.web.app/">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="col project-introduction">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </div>
        </div>
        <div className="row project">
          <div className="col project-introduction">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </div>
          <div className="col project-picture-section">
            <img
              className="project-img"
              src="./imgs/tasj-management-system.jpg"
              alt="Task Management System"
            />
            <div className="project-title">
              <a href="https://shawk-solution-project.web.app/">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
