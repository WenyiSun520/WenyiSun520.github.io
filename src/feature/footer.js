import React,{useState} from "react";
import contacts from "../constant/contacts";
import GreetingAvatar from "../threeD/greetingAvatar";

const Footer = () => {
  const [animate,setAnimate] = useState(0);

  const changeAnimation = () => {
    if(animate === 4){
      setAnimate(0);
    }else{

      setAnimate(animate+1);
    }
  }
  return (
    <div id="footer" className="container text-center footer flex-1">
      <div className="greetingAvatar" style={{"zIndex":999}} onClick={changeAnimation}>
        <GreetingAvatar animate={animate}/>
      </div>

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
