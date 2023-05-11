import React, { useState, useRef, useEffect } from "react";

const Experience = () => {
  const [isInteresting, setIsInteresting] = useState(false); //return true when ineraction occurs
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInteresting(entry.isIntersecting);
      },
      {
        rootMargin: "-300px",
      }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isInteresting]);

  useEffect(() => {
    if (isInteresting) {
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
      className="container text-center align-items-center experience"
      ref={ref}
    >
      <h1 className="display-1 section-title">My Experience</h1>
      <div className="row align-items-center justify-content-center timeline">
        <div className="row left single-experience" style={{ "--i": "1" }}>
          <div className="row content">
            <p className="experience-time">Jun.2023 - Aug.2023</p>
            <p className="experience-title">IT Intern @Lavner Education</p>
            <p>
              When publishing my portfolio, my journey at Lavner Education
              hasn't officially started. But the internship training here and
              the communication with my peers have given me a more concrete
              understanding of Information Technology. That is, only with good
              communication skills can we provide customers with services that
              meet their needs
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
              The internship at Shawk Solution is a precious experience. I have
              experienced each step in
              <span className="bold-text"> project development </span> including
              investigating marketing research, developing UI in Figma, and
              hard-coding on the project. With the guidance and help of my
              supervisor, I dive into each step with my skills and learn new
              skills from them.
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
              Being an instructor at SMART coding school made me realize that
              it's always useful to review the skills I have and test if I can
              understand them from a
              <span className="bold-text"> new perspective </span>. During the
              teaching, the concepts I thought were easy and quick to understand
              were absurd to my students, and it may take some of them several
              days to fully consume. This makes me realize that it's challenging
              to present a concept from one perspective to the extent that every
              audience can understand it at the same pace, and I have to go for
              another way.
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
              This experience inspired me on experiencing
              <span className="bold-text"> competitive analysis </span>
              in project development. The research topic aimed to examine the
              motivation of TikTok users to spread debunking information about
              Covid-19. With the guidance of graduate and doctoral students, we
              deconstructed Tiktok layer by layer and sorted it into a large map
              to explore how the different media included in Tiktok act as a
              medium to spread information quickly. During the process, I
              learned that to analyze a product, finding the first perspective
              to investigate is crucial. Then from that one perspective, we can
              efficiently find another one and eventually construct a network.
              Of course, In this process of exploration, maintaining
              <span className="bold-text"> communication </span> with peers can
              be twice as effective.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
