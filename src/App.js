import React from "react";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Achievements from "./Components/Achievements";
import Contact from "./Components/Contact";
import Profiles from "./Components/Profiles";
import { Fade } from "react-reveal";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className="overflow-y-auto no-scrollbar bg-slate-700">
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <Navbar />
      <HomePage />
      <Fade bottom duration={1500} distance="150px">
        <Skills />
      </Fade>
      <Fade bottom duration={1500} distance="150px">
        <Experience />
      </Fade>
      <Fade bottom duration={1500} distance="150px">
        <Projects />
      </Fade>
      <Fade bottom duration={1500} distance="150px">
        <Achievements />
      </Fade>
      <Fade bottom duration={1500} distance="150px">
        <Profiles />
      </Fade>
      <Contact />
    </div>
  );
}

export default App;
