import React from "react";
import Navbar from "../components/Navbar";
import Front from "../components/Front";
import About from "../components/About";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="h-auto flex flex-col">
      <Navbar />
      <div id="front">
        <Front />
      </div>
      <div id="about" >
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;

