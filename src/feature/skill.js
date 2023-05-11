import React, { useState } from "react";

const Skill = () => {
  const [count, setCount] = useState(0);
  let pictures = [
    "./imgs/logo-2.png",
    "./imgs/logo-3.png",
    "./imgs/logo.png",
    "./imgs/logo-4.png",
  ];

  const handlePictureChanged = (e) => {
    e.preventDefault();
    if (count === 3) {
      setCount(0);
    } else {
      setCount((curr) => ++curr);
    }
  };

  return (
    <div id="skills" className="container text-center skills">
      <div className="row align-items-center justify-content-center">
        <h1 className="display-1 section-title">My Skills</h1>
        <div className="row learning-journey justify-content-center">
          <div className="col-2" onClick={(e) => handlePictureChanged(e)}>
            <img
              className="portrait"
              src={pictures[count]}
              alt="self-protrait"
            ></img>
          </div>
          <p className="col">
            <span className="initial">In </span>my learning journey, I notice
            that the technology industry is changing rapidly, and with the
            promotion of AI-driven software such as chatGPT among the general
            public, I'm often worried that my skills would be out of date and
            barely catch the latest trend of technology. At the same time, I am
            also finding and enjoying the joy of software development. To me,
            software development is like carving a castle out of sand by the
            beach when I was a kid, or making a figure out of clay. Programming
            language, sand, and clay are all tools and materials. They depend on
            me to apply my skills to create work. I cherish all the hard work
            that goes into it. Still, I'm anxious about my position in the
            industry and worried my skills are not strong enough, but I think,
            as long as I <span className="bold-text"> keep learning </span>, I
            will find my place.
          </p>
        </div>
        <div className="row my-skils justify-content-center">
          <div className="col-1 single-skill-card">
            <div className="skill-box">
              <p className="skill-title">JAVA</p>
            </div>
            <div className="skill-hover">
              <p className="skill-title">JAVA</p>
            </div>
            <img
              className="skill-logo"
              src="./imgs/java.png"
              style={{ width: "50px", height: "90px" }}
              alt="java logo"
            />
          </div>

          <div className="col-1 single-skill-card">
            <div className="skill-box">
              <p className="skill-title">JavaScript</p>
            </div>
            <div className="skill-hover">
              <p className="skill-title">JavaScript</p>
            </div>
            <img
              className="skill-logo"
              src="./imgs/javascript.png"
              style={{ width: "50px", height: "50px" }}
              alt="java logo"
            />
          </div>

          <div className="col-1 single-skill-card">
            <div className="skill-box">
              <p className="skill-title">Figma</p>
            </div>
            <div className="skill-hover">
              <p className="skill-title">Figma</p>
            </div>
            <img
              className="skill-logo"
              src="./imgs/figma.png"
              style={{ width: "40px", height: "50px" }}
              alt="java logo"
            />
          </div>

          <div className="col-1 single-skill-card">
            <div className="skill-box">
              <p className="skill-title">React</p>
            </div>
            <div className="skill-hover">
              <p className="skill-title">React</p>
            </div>
            <img
              className="skill-logo"
              src="./imgs/react.png"
              style={{ width: "55px", height: "50px" }}
              alt="java logo"
            />
          </div>

          <div className="col-1 single-skill-card">
            <div className="skill-box">
              <p className="skill-title">NEXT</p>
            </div>
            <div className="skill-hover">
              <p className="skill-title">NEXT</p>
            </div>
            <img
              className="skill-logo"
              src="./imgs/nextjs.png"
              style={{ width: "90px", height: "30px" }}
              alt="java logo"
            />
          </div>

          <div className="col-1 single-skill-card">
            <div className="skill-box">
              <p className="skill-title">Redux</p>
            </div>
            <div className="skill-hover">
              <p className="skill-title">Redux</p>
            </div>
            <img
              className="skill-logo"
              src="./imgs/redux.png"
              style={{ width: "55px", height: "50px" }}
              alt="java logo"
            />
          </div>

          <div className="col-1 single-skill-card">
            <div className="skill-box">
              <p className="skill-title">Node</p>
            </div>
            <div className="skill-hover">
              <p className="skill-title">Node</p>
            </div>
            <img
              className="skill-logo"
              src="./imgs/node.png"
              style={{ width: "80px", height: "50px" }}
              alt="java logo"
            />
          </div>

          <div className="col-1 single-skill-card">
            <div className="skill-box">
              <p className="skill-title">Express</p>
            </div>
            <div className="skill-hover">
              <p className="skill-title">Express</p>
            </div>
            <img
              className="skill-logo"
              src="./imgs/express.png"
              style={{ width: "90px", height: "40px" }}
              alt="java logo"
            />
          </div>

          <div className="col-1 single-skill-card">
            <div className="skill-box">
              <p className="skill-title">MongoDB</p>
            </div>
            <div className="skill-hover">
              <p className="skill-title">MongoDB</p>
            </div>
            <img
              className="skill-logo"
              src="./imgs/mongodb.png"
              style={{ width: "30px", height: "60px" }}
              alt="java logo"
            />
          </div>

          <div className="col-1 single-skill-card">
            <div className="skill-box">
              <p className="skill-title">MySQL</p>
            </div>
            <div className="skill-hover">
              <p className="skill-title">MySQL</p>
            </div>
            <img
              className="skill-logo"
              src="./imgs/mysql.png"
              style={{ width: "60px", height: "40px" }}
              alt="java logo"
            />
          </div>

          <div className="col-1 single-skill-card">
            <div className="skill-box">
              <p className="skill-title">D3JS</p>
            </div>
            <div className="skill-hover">
              <p className="skill-title">D3JS</p>
            </div>
            <img
              className="skill-logo"
              src="./imgs/d3.png"
              style={{ width: "50px", height: "50px" }}
              alt="java logo"
            />
          </div>

          <div className="col-1 single-skill-card">
            <div className="skill-box">
              <p className="skill-title">Tableau</p>
            </div>
            <div className="skill-hover">
              <p className="skill-title">Tableau</p>
            </div>
            <img
              className="skill-logo"
              src="./imgs/tableau.jpg"
              style={{ width: "50px", height: "50px" }}
              alt="java logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
