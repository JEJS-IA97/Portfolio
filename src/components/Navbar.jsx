import { Link } from "react-scroll";
import { useState } from "react";
import logo from "../assets/svgs/logo.svg";
import linkedin from "../assets/svgs/linkedin.svg";
import instagram from "../assets/svgs/instagram.svg";
import github from "../assets/svgs/github.svg";
import Dropdown from "../components/Download";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="absolute z-20 bg-transparent text-white top-0 w-full lap:h-[75px] mob:h-[60px] items-center pl-10 pr-10 flex flex-grow mob:justify-between">
      <div className="grow-0">
        <img className="w-auto lap:h-[45px] mob:h-[45px]" src={logo} alt="home" />
      </div>

      <div className="tab:hidden mob:flex grow-0 justify-end">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
        >
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </button>
      </div>

      <div
        className={`${
          menuOpen ? "flex flex-col h-screen items-center gap-y-6" : "hidden"
        } mob:absolute mob:top-full mob:left-0 mob:w-full mob:backdrop-blur-md mob:bg-blue-950/30 tab:bg-transparent tab:backdrop-blur-none tab:flex tab:static tab:flex-row lap:space-x-8 tab:space-x-6 justify-center font-semibold lap:text-[16px] tab:text-[14px]`}
      >
        <Link
          to="front"
          smooth={true}
          duration={500}
          className="hover:text-GreenB cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="hover:text-GreenB cursor-pointer"
        >
          About me
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="hover:text-GreenB cursor-pointer"
        >
          Skills
        </Link>
        <Link
          to="portfolio"
          smooth={true}
          duration={500}
          className="hover:text-GreenB cursor-pointer"
        >
          Portfolio
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="hover:text-GreenB cursor-pointer"
        >
          Contact
        </Link>
        <Dropdown />
      </div>

      <div className="mob:hidden tab:flex grow-0 justify-end tab:gap-1 lap:gap-2">
        <a
          href="https://www.linkedin.com/in/jejs97"
          target="_blank"
          rel="noopener noreferrer"
          className="w-auto lap:h-[30px] tab:h-[25px] flex items-center"
        >
          <img
            className="h-full hover:opacity-80 transition-opacity"
            src={linkedin}
            alt="LinkedIn"
          />
        </a>
        <a
          href="https://github.com/JEJS-IA97"
          target="_blank"
          rel="noopener noreferrer"
          className="w-auto lap:h-[30px] tab:h-[25px] flex items-center"
        >
          <img
            className="h-full hover:opacity-80 transition-opacity"
            src={github}
            alt="GitHub"
          />
        </a>
        <a
          href="https://www.instagram.com/jose__jimenez16/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-auto lap:h-[30px] tab:h-[25px] flex items-center"
        >
          <img
            className="h-full hover:opacity-80 transition-opacity"
            src={instagram}
            alt="Instagram"
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
