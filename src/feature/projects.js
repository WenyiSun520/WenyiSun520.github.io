import React, { useState, useRef, useEffect } from "react";

const Project = () => {
  const [isInteresting, setIsInteresting] = useState(false); //return true when ineraction occurs
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        //  console.log("entry.isterwectiong: " + entry.isIntersecting);
        setIsInteresting(entry.isIntersecting);
      },
      {
        rootMargin: "-300px",
      }
    );
    observer.observe(ref.current);
    // console.log(ref.current);
    return () => observer.disconnect();
  }, [isInteresting]);

  useEffect(() => {
    // console.log("im in the second useeffet");
    if (isInteresting) {
      ///  console.log("it's intersecting");
      // console.log(ref.current);
      ref.current.querySelectorAll(".project-leftSection").forEach((el) => {
        el.classList.add("project-leftSection-animation");
      });

      ref.current.querySelectorAll(".project-rightSection").forEach((el) => {
        el.classList.add("project-rightSection-animation");
      });
      ref.current
        .querySelector(".section-title")
        .classList.add("section-title-animation");
    } else {
      ref.current.querySelectorAll(".project-leftSection").forEach((el) => {
        el.classList.remove("project-leftSection-animation");
      });
      ref.current.querySelectorAll(".project-rightSection").forEach((el) => {
        el.classList.remove("project-rightSection-animation");
      });
      ref.current
        .querySelector(".section-title")
        .classList.remove("section-title-animation");
    }
  }, [isInteresting]);
  return (
    <div
      id="projects"
      className="container text-center align-items-center projects"
    >
      <div className="row justify-content-between flex-wrap" ref={ref}>
        <h1 className="display-1 section-title">My Projects</h1>
        <div className="row project-picture-section project-leftSection ">
          <div className="row preview-content">
            <p className="preview-title">Cat-lender</p>
            <p> A caring housekeeper for Your furry fiends' health</p>
          </div>
          <div className="row circle"></div>
          <div className="row content">
            <h2>Cat lender</h2>
            <p className="col">
              Cat-lender2.0 is a web react-redux web application dedicated to
              assisting pets owner in managing their furry friends' health
              conditions, schedules, and daily routines.
            </p>
            <a
              className="row btn"
              href="https://cat-lender.web.app/"
              onClick={() => console.log("im clicking!")}
            >
              Check the Project
            </a>
            <a
              className="row btn"
              href="https://github.com/WenyiSun520/cat-lender2.0"
              onClick={() => console.log("im clicking!")}
            >
              Check Github
            </a>
          </div>
          <img
            className="row project-img project-img-hover"
            src="./imgs/orange-cat.png"
            alt="cat lender"
            style={{ height: "250px", width: "250px" }}
          />
        </div>
        <div className="row project-picture-section project-leftSection">
          <div className="row preview-content">
            <p className="preview-title">Tarots Today</p>
            <p> Fun Application To Know Tarots Reading</p>
          </div>
          <div className="row circle"></div>
          <div className="row content">
            <h2>Tarots Today</h2>
            <p className="col">
              TarotsToday focus on daily Tarot Card reader that allows users to
              see a card every day as well as add journal entries.
            </p>

            <a
              className="row btn"
              href="https://github.com/WenyiSun520/TarotsToday"
              onClick={() => console.log("im clicking!")}
            >
              Check Github
            </a>
          </div>
          <img
            className="row project-img project-img-hover"
            src="./imgs/tarots.png"
            alt="Designed by stories / Freepik"
            style={{ height: "250px", width: "250px" }}
          />
        </div>

        <div className="row project-picture-section  project-rightSection">
          <div className="row preview-content">
            <p className="preview-title">Kaban Board Task Management System</p>
            <p> Effient Tool to help your team improve productivity</p>
          </div>
          <div className="row circle"></div>
          <div className="row content">
            <h2>Kaban Board Task Management System</h2>
            <p className="col">
              Kaban Board Task Management System is a MERN project inheriting
              the idea of Agile project management and majorly adapted the
              sprint board to visualize, categorize, and list project tasks.
            </p>
            <a
              className="row btn"
              href="https://shawk-solution-project.web.app/login"
              onClick={() => console.log("im clicking!")}
            >
              Check the Project
            </a>

            <a
              className="row btn"
              href="https://github.com/WenyiSun520/shawk-solution-task-management-system"
              onClick={() => console.log("im clicking!")}
            >
              Check Github
            </a>
          </div>
          <img
            className="row project-img project-img-hover"
            src="./imgs/kaban.png"
            alt="Designed by stories / Freepik"
            style={{ height: "250px", width: "250px" }}
          />
        </div>

        <div className="row project-picture-section  project-rightSection">
          <div className="row preview-content">
            <p className="preview-title">Other Works</p>
            <p>Small Projects aims to improve improve and sharpen my skills</p>
          </div>
          <div className="row circle"></div>
          <div className="row content">
            <h2>Other Projects</h2>
            <p className="col">
              I also learned other framworks and skills in my free times such as
              react-native, nextJs. Games built by JavsScipt such as Snake game,
              tic-tac-toe. They are small projects for practicing perpose.Check
              my Github Page to see my learning and growth
            </p>

            <a
              className="row btn"
              href="https://github.com/WenyiSun520"
              onClick={() => console.log("im clicking!")}
            >
              Check Github
            </a>
          </div>
          <img
            className="row project-img project-img-hover"
            src="./imgs/otherProjects.png"
            alt="Designed by stories / Freepik"
            style={{ height: "250px", width: "300px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
