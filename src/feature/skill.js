import React from "react";

const Skill = () => {
  return (
    <div id="skills" className="container text-center vh-100 skills">
      <div className="row vh-100 align-items-center justify-content-center">
        <div className="row learning-journey">
          <p>
            Thank you for taking the time to review my portfolio. I am very
            passionate about being a full-stack developer and I hope to have an
            opportunity to discuss my projects in greater detail with you. Hope
            we can have some conversation!
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
