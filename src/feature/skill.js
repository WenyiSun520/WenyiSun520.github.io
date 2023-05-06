import React from "react";

const Skill = () => {
  return (
    <div id="skills" className="container text-center vh-100 skills">
      <div className="row vh-100 align-items-center justify-content-center">
        <div className="row learning-journey">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        <div className="row my-skils">
          <div className="col single-skill">
            <h2>UI/UX Design</h2>
            <p>Figma</p>
            <p>Figma</p>
            <p>Figma</p>
            <p>Figma</p>
          </div>
          <div className="col single-skill">
            <h2>Frontend Devloper</h2>
            <p>HTML, CSS, JavaScript</p>
            <p>React</p>
            <p>React-native</p>
            <p>Next JS</p>
          </div>
          <div className="col single-skill">
            <h2>Database Management</h2>
            <p>MySQL</p>
            <p>MongoDB</p>
            <p>GraphQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
