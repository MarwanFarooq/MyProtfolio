import React, { useRef } from "react";
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import AboutUs from "./AboutUs/AboutUs";
import Skills from "./About/Skills";
import Project from "./Project/Project";
import Resume from "./Resume/Resume";
import Contectus from "./ContectUs.jsx/Contectus";
import Footer from "./Components/Footer";
const App = () => {
  const home = useRef();
  const skills = useRef();
  const project = useRef();
  const resume = useRef();
  const contectus = useRef();

  return (
    <div className="app  laptop:bg-20% tablet:bg-60% mobile:bg-100%  ">
      <NavBar
        home={home}
        skills={skills}
        project={project}
        resume={resume}
        contectus={contectus}
      />
      <Home home={home} />
      <AboutUs />
      <Skills skills={skills} />
      <Project project={project} />
      <Resume resume={resume} />
      <Contectus contectus={contectus} />
      <Footer />
    </div>
  );
};

export default App;
