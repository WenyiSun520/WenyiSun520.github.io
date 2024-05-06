import React from "react";
import experienceText from "../constant/experienceText";

const Experience = () => {
  const experiences = experienceText.map((e) => (
    <div
      className={`row ${e.class} single-experience single-experience-animation`}
      style={e.style}
      key={e.title}
    >
      <div className="row content">
        <p className="experience-time">{e.time}</p>
        <img
          className="experience-image"
          src={e.img.src}
          style={e.img.style}
          alt={e.img.alt}
        />
        <p className="experience-title">{e.title}</p>
        <p className="experience-keywords">
          {e.keywords.map((key) => key).join(", ")}
        </p>
        <div className="row back flex-wrap">
          {e.reflection}
          {e.link !== ""
            ? e.link.map((l) => (
                <a
                  className="col contact-animation"
                  href={l}
                  rel="noreferrer"
                  target="_blank"
                  key={l}
                >
                  Showcase
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              ))
            : ""}
        </div>
      </div>
    </div>
  ));

  return (
    <div id="experience" className="container text-center  experience">
      <h1 className="display-1 section-title section-title-animation">
        My Experience
      </h1>
      <div className="row justify-content-center timeline">{experiences}</div>
    </div>
  );
};

export default Experience;
