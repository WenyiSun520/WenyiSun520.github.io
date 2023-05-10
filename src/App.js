import "./App.css";
import Navbar from "./feature/Navbar";
import Main from "./feature/main";
import Introduction from "./feature/introduction";
import Project from "./feature/projects";
import Experience from "./feature/experience";
import Skill from "./feature/skill";
import Footer from "./feature/footer";

function App() {
  return (
    <div className="App col">
      <Main />
      <Navbar />
      <Introduction />
      <Project />
      <Experience />
      <Skill />
      <Footer />
    </div>
  );
}

export default App;
