import React from "react";

const Skill = () => {
  return (
    <div id="skills" className="container text-center vh-100 skills">
      <div className="row vh-100 align-items-center justify-content-center">
        <h1 className="display-1 section-title">My Skills</h1>

        <div className="row learning-journey justify-content-center">
          <div className="col-2">
            <img
              className="portrait"
              src="./imgs/logo-2.png"
              alt="self-protrait"
            ></img>
          </div>
          <p className="col">
            <span>In </span>my learning journey, I notice that the technology
            industry is changing rapidly, and with the promotion of AI-driven
            software such as chatGPT among the general public, I'm often worried
            that my skills would be out of date and barely catch the latest
            trend of technology. At the same time, I am also finding and
            enjoying the joy of software development. To me, software
            development is like carving a castle out of sand by the beach when I
            was a kid, or making a figure out of clay. Programming language,
            sand, and clay are all tools and materials. They depend on me to
            apply my skills to create work. I cherish all the hard work that
            goes into it. Still, I'm anxious about my position in the industry
            and worried my skills are not strong enough, but I think, as long as
            I keep learning, I will find my place.
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
