import './App.css';
import Navbar from './feature/Navbar';
import Main from './feature/main';
import Project from './feature/projects';
import Experience from './feature/experience';
import Skill from './feature/skill';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Project />
      <Experience />
      <Skill />
    </div>
  );
}

export default App;
