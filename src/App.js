import React from "react";
import "./App.css";
import Navbar from "./feature/Navbar";
import Main from "./feature/main";
import Introduction from "./feature/introduction";
import Project from "./feature/projects";
import Experience from "./feature/experience";
import Skill from "./feature/skill";
import Footer from "./feature/footer";
import GreetingAvatar from "./threeD/greetingAvatar";




// const Navbar = React.lazy(() => import("./feature/Navbar"));
// const Main = React.lazy(() => import("./feature/main"));
// const Introduction = React.lazy(() => import("./feature/introduction"));
// const Project= React.lazy(() => import("./feature/projects"));
// const Experience= React.lazy(() => import("./feature/experience"));

// const Skill = React.lazy(() => import("./feature/skill"));
// const Footer = React.lazy(() => import("./feature/footer"));

function App() {

  return (
    <div className="App row">
      {/* <div
        className="greetingAvatar"
        style={{ zIndex: 999 }}
      >
        <GreetingAvatar />
      </div> */}
      <Main />
      <Navbar />
      <Introduction />
      <Experience />
      <Project />
      <Skill />
      <Footer/>
    </div>
  );
}

export default App;
