import React from "react";
import projectText from "../constant/projectsText";

const Project = () => {
  const projects = projectText.map((p) => (
    <div className={`row project-picture-section ${p.section}`} key={p.title}>
      <div className="row preview-content">
        <p className="preview-title">{p.title}</p>
        <p>{p.preText}</p>
      </div>
      <div className="row circle"></div>
      <div className="row content">
        <h2>{p.title}</h2>
        <p className="col">{p.text}</p>
        {p.website !== "" ? (
          <a
            className="row btn"
            href={p.website}
            onClick={() => console.log("im clicking!")}
          >
            Website
          </a>
        ) : (
          ""
        )}
        <a
          className="row btn"
          href={p.github}
          onClick={() => console.log("im clicking!")}
        >
          Github Repo
        </a>
      </div>
      <img
        className="row project-img project-img-hover"
        src={p.image}
        alt={p.alt}
        style={p.imageStyle}
      />
    </div>
  ));

  return (
    <div
      id="projects"
      className="container text-center align-items-center projects"
    >
      <div className="row justify-content-between flex-wrap">
        <h1 className="display-1 section-title section-title-animation">
          My Projects
        </h1>
        {projects}
      </div>
    </div>
  );
};

export default Project;
