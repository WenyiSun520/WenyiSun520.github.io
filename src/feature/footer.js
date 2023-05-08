import React from "react";

const Footer = () => {
    const handleMouseMove = (e) => {
      window.requestAnimationFrame(function () {
        cardTransform(e.clientX, e.clientY);
      });
      function cardTransform(x, y) {
        let card = document.querySelector(".section-title");
        let box = card.getBoundingClientRect();
        // console.log(box);

        let calX = (y - box.y - box.width / 2) / 10;
        let calY = ((x - box.x - box.height / 2) / 10) * -1;
        // console.log(`rotateX(${calX}deg)`);
        card.style.transform = `rotateX(${calX}deg) rotateY(${calY}deg)`;
      }
    };
    const handleMouseLeave = (e) => {
      window.requestAnimationFrame(function () {
        let card = document.querySelector(".section-title");
        card.style.transform = `rotateX(0deg) rotateY(0deg)`;
      });
    };
  return (
    <div id="footer" className="container text-center vh-100 footer">
      <div className="row vh-100 align-items-center justify-content-center">
        <div className="row">
          <p
            className="footer-content"
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseLeave={(e) => handleMouseLeave(e)}
          >
            Thank you for taking the time to review my portfolio. I am very
            passionate about being a full-stack developer and I hope to have an
            opportunity to discuss my projects in greater detail with you. Hope
            we can have some conversation!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
