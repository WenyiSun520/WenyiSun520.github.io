import React, { useState, useRef, useEffect } from "react";

const Experience = () => {
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
    if (isInteresting) {
      console.log("it's intersecting");
      console.log(ref.current)
      ref.current.querySelectorAll(".single-experience").forEach((el) => {
        el.classList.add("single-experience-animation");
      });
      ref.current
        .querySelector(".section-title")
        .classList.add("section-title-animation");
    } else {
      ref.current.querySelectorAll(".single-experience").forEach((el) => {
        el.classList.remove("single-experience-animation");
      });
       ref.current
         .querySelector(".section-title")
         .classList.remove("section-title-animation");
    }
  }, [isInteresting]);

  return (
    <div
      id="experience"
      className="container text-center vh-100 align-items-center experience"
      ref={ref}
    >
      <h1 className="display-1 section-title">My Experience</h1>
      <div className="row vh-100 align-items-center justify-content-center timeline">
        <div className="row left single-experience" style={{ "--i": "1" }}>
          <div className="row content">
            <p className="experience-time">Jun.2023 - Aug.2023</p>
            <p className="experience-title">IT Intern @Lavner Education</p>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam
            </p>
          </div>
        </div>

        <div className="row right single-experience" style={{ "--i": "2" }}>
          <div className="row content">
            <p className="experience-time">Feb.2023 - May.2023</p>
            <p className="experience-title">
              Frontend Developer @Shawk Solution
            </p>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam
            </p>
          </div>
        </div>

        <div className="row left single-experience" style={{ "--i": "3" }}>
          <div className="row content">
            <p className="experience-time">June.2022 - July.2022</p>
            <p className="experience-title">
              Web Devloper Instructor @SMART Coding School
            </p>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam
            </p>
          </div>
        </div>

        <div className="row right single-experience" style={{ "--i": "4" }}>
          <div className="row content">
            <p className="experience-time">Sep.2021 - Mar.2022</p>
            <p className="experience-title">
              Undergrand Reserch Assistant @UW Inform Public Center
            </p>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
