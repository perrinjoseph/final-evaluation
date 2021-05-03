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
      <Landing />
      <About />
      <Info />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
