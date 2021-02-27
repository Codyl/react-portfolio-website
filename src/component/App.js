import '../css/App.css';
import Navigation from './Navigation';
import Opening from './Opening';
import About from './About';
import Interests from './Interests';
import Projects from './Projects';
import Contact from './Contact';

function App() {        
  return (
    <div className="App">
      <Navigation/>
      <div id="bg"></div>
      <Opening/>
        <div className="blueBackground">
          <div  id="main">
          <About/>
          <Interests/>
          <Projects/>
          <Contact/>
          </div>
        </div>
    </div>
  );
}

export default App;
