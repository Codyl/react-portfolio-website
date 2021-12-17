import "../css/App.css";
import Navigation from "./Navigation";
import Opening from "./Opening";
import About from "./About";
import Interests from "./Interests";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div id="bg"></div>
      <Opening />
      <div className="blueBackground">
        <div id="main">
          <div style={{ display: "flex" }}>
            <a
              href="/resume/resume.docx"
              className="button"
              style={{ width: "100px", marginLeft: "auto", marginBottom: 10 }}
              download>
              Download resume
            </a>
          </div>
          <About />
          <Interests />
          <Education />
          <Projects />
          <Contact />
          <div>
            Favicon made by{" "}
            <a
              href="https://www.flaticon.com/authors/justicon"
              title="justicon">
              justicon
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
