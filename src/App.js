import './App.scss';
import Banner from './components/Banner/Banner';
import Intro from './components/Intro/Intro';
import Skill from './components/Skill/Skill';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <section id="banner">
        <Banner />
      </section>
      <section id="intro">
        <Intro />
      </section>
      <section id="skill">
        <Skill />
      </section>
      <section id="exp">
        <Experience />
      </section>
      <section id="port">
        <Portfolio />
      </section>
      <footer id="contact">
        <Contact />
      </footer>
    </div>
  );
}

export default App;
