import React, { useState, useRef, useEffect } from "react";

const Introduction = () => {
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
      // console.log("it's intersecting");
      ref.current.querySelectorAll(".contact .col").forEach((el) => {
        el.classList.add("contact-animation");
      });
      ref.current
        .querySelector(".photo-card")
        .classList.add("photo-card-photo-animation");
      ref.current.querySelector(".name").classList.add("name-animation");
    } else {
      // console.log("it's not intersecting");
      ref.current.querySelectorAll(".contact .col").forEach((el) => {
        el.classList.remove("contact-animation");
      });
      ref.current
        .querySelector(".photo-card")
        .classList.remove("photo-card-photo-animation");
      ref.current.querySelector(".name").classList.remove("name-animation");
    }
  }, [isInteresting]);

  return (
    <div id="intro" className="container text-center vh-100  main">
      <div className="row vh-100 align-items-center" ref={ref}>
        <div className="col personalInfo">
          <div className="row title">
            <h3>My name is</h3>
            <h1 className="display-1 name "> </h1>
            <h2>Software Developer</h2>
            <h2>UI/UX Designer</h2>
            <p>
              I'm a <span className="bold-text"> motivated learner </span> with
              a passion for Software engineering and UI/UX design. Proficient in
              <span className="bold-text"> JAVA and React Programming </span>.
              Passion for reaching out and would love to collaborate with people
              from diverse cultures and backgrounds. Positive and enthusiastic
              personality, team worker, and strong communication skills.
            </p>
          </div>
          <div className="row contact align-items-center">
            <a className="col" href="tel:4256150586" style={{ "--i": "1" }}>
              <i className="fa-solid fa-phone fa-xl"></i>
            </a>
            <a
              className="col"
              href="mailto:winnieee.sun@gmail.com"
              style={{ "--i": "2" }}
            >
              <i className="fa-solid fa-at fa-xl"></i>
            </a>
            <a
              className="col"
              href="https://www.linkedin.com/in/wenyi-sun-519942195/"
              rel="noreferrer"
              target="_blank"
              style={{ "--i": "3" }}
            >
              <i className="fa-brands fa-linkedin-in fa-xl"></i>
            </a>
            <a
              className="col"
              href="https://github.com/WenyiSun520"
              rel="noreferrer"
              target="_blank"
              style={{ "--i": "4" }}
            >
              <i className="fa-brands fa-github fa-xl"></i>
            </a>
          </div>
        </div>
        <div id="card" className="col photo-card">
          <img
            className="photo-card-photo img-responsive"
            src="./imgs/profile.jpg"
            alt="profile"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
