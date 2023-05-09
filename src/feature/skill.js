import React from "react";

const Skill = () => {
  return (
    <div id="skills" className="container text-center vh-100 skills">
      <div className="row vh-100 align-items-center justify-content-center">
        <div className="row learning-journey">
          <p>
            In my learning journey of being a full-stack developer, I realized
            that the key to growth and catch-in-pace in this area is to keep
            self-learning.
          </p>
        </div>
        <div className="row my-skils">
          <div className="col single-skill align-items-center justify-content-center">
            <h2>Programming Language</h2>
            <p>Java Object-Oriented Programming</p>
          </div>
          <div className="col single-skill">
            <h2>UI/UX Design</h2>
            <p>Figma</p>
            <p>Canva</p>
            <p>Context Study</p>
            <p>User Interview</p>
          </div>
          <div className="col single-skill">
            <h2>Web Development</h2>
            <p>HTML, CSS, JavaScript</p>
            <p>React JS</p>
            <p>Redux JS</p>
            <p>React-Native</p>
            <p>Next JS</p>
            <p>Node JS</p>
            <p>Express JS</p>
          </div>
          <div className="col single-skill">
            <h2>Database Management</h2>
            <p>MySQL</p>
            <p>MongoDB</p>
            <p>R Studio</p>
            <p>GraphQL</p>
          </div>
          <div className="col single-skill">
            <h2>Data Visualization</h2>
            <p>Tableau, D3 JS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
