import React from "react";
import About from "../../Components/About/About";
import Footer from "../../Components/Footer/Footer";
import Info from "../../Components/Info/Info";
import Landing from "../../Components/Landing/Landing";
import Projects from "../../Components/Projects/Projects";
import Contact from "../Contact/Contact";

function Home() {
  return (
    <div className="home">
      <Landing className="landingSection"/>
      <About className="aboutSection"/>
      <Info className="infoSection"/>
      <Projects className="projectsSection" />
      <Contact className="contactSection" />
    </div>
  );
}

export default Home;
