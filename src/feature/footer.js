import React from "react";
import contacts from "../constant/contacts";

const Footer = () => {
  // const handleMouseMove = (e) => {
  //   window.requestAnimationFrame(function () {
  //     cardTransform(e.clientX, e.clientY);
  //   });
  //   function cardTransform(x, y) {
  //     let card = document.querySelector(".section-title");
  //     let box = card.getBoundingClientRect();
  //     // console.log(box);

  //     let calX = (y - box.y - box.width / 2) / 10;
  //     let calY = ((x - box.x - box.height / 2) / 10) * -1;
  //     // console.log(`rotateX(${calX}deg)`);
  //     card.style.transform = `rotateX(${calX}deg) rotateY(${calY}deg)`;
  //   }
  // };
  // const handleMouseLeave = (e) => {
  //   window.requestAnimationFrame(function () {
  //     let card = document.querySelector(".section-title");
  //     card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  //   });
  // };
  return (
    <div id="footer" className="container text-center footer">
      <div className="row flex-column vh-100 align-items-center justify-content-center">
        <h1 className="display-1 section-title">
          Thank you, and let's connect!
        </h1>
        <div className="row align-items-center justify-content-center">
          <p
            className="footer-content"
            // onMouseMove={(e) => handleMouseMove(e)}
            // onMouseLeave={(e) => handleMouseLeave(e)}
          >
            Thank you for taking the time to review my portfolio. I am very
            passionate about being a full-stack developer and I hope to have an
            opportunity to discuss my projects in greater detail with you. Hope
            we can have some conversation!
          </p>

          <div className="row contact align-items-center">
            <a
              className="col"
              href={`tel:${contacts.phone}`}
              style={{ "--i": "1" }}
            >
              <i className="fa-solid fa-phone fa-xl"></i>
            </a>
            <a
              className="col"
              href={`mailto:${contacts.email}`}
              style={{ "--i": "2" }}
            >
              <i className="fa-solid fa-at fa-xl"></i>
            </a>
            <a
              className="col"
              href={contacts.linkedin}
              rel="noreferrer"
              target="_blank"
              style={{ "--i": "3" }}
            >
              <i className="fa-brands fa-linkedin-in fa-xl"></i>
            </a>
            <a
              className="col"
              href={contacts.github}
              rel="noreferrer"
              target="_blank"
              style={{ "--i": "4" }}
            >
              <i className="fa-brands fa-github fa-xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="row align-self-end">
        <p>
          Designed and developed <i>By Wenyi Sun</i>
          <br></br>Last Update: 05/04/2024
        </p>
        <p>
          &#169; 2023 <i>By Wenyi Sun</i>
        </p>
      </div>
      <div className="row rotate-square">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Footer;
