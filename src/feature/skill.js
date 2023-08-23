import React, { useState } from "react";
import skillText from "../constant/skillText";

const Skill = () => {
  const [count, setCount] = useState(0);
  let pictures = [
    "./imgs/logo-2.png",
    "./imgs/logo-3.png",
    "./imgs/logo.PNG",
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

  const skills = skillText.skillSet.map((s) => (
    <div className="col-1 single-skill-card">
      <div className="skill-box">
        <p className="skill-title">{s.name}</p>
      </div>
      <div className="skill-hover">
        <p className="skill-title">{s.name}</p>
      </div>
      <img
        className="skill-logo"
        src={s.src}
        style={s.style}
        alt={s.alt}
      />
    </div>
  ));

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
          <p className="col" dangerouslySetInnerHTML={{__html: skillText.text}} />
        </div>
        <div className="row my-skils justify-content-center">
        {skills}
        </div>
      </div>
    </div>
  );
};

export default Skill;
