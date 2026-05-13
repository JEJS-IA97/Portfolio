import Navbar from "../components/Navbar";
import Front from "../components/Front";
import About from "../components/About";
import Stack from "../components/Stack";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

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
      <div id="experience">
        <Experience />
      </div>
      <div id="stack">
        <Stack />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="fopter">
        <Footer />
      </div>
    </div>
  );
};

export default Home;

