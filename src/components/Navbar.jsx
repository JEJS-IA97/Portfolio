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
    <div className="absolute z-20 bg-transparent text-white top-0 w-full lap:h-[75px] mob:h-[60px] pho:h-[50px] items-center pho:pl-[20px] pho:pr-[20px] mob:pl-10 mob:pr-10 flex flex-grow pho:justify-between">
      <div className="grow-0">
        <img className="w-auto lap:h-[45px] pho:h-[40px]" src={logo} alt="home" />
      </div>

      <div className="tab:hidden pho:flex grow-0 justify-end">
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
          menuOpen ? "flex flex-col h-screen items-center pho:gap-y-4 mob:gap-y-6" : "hidden"
        } pho:absolute pho:top-full pho:left-0 pho:w-full pho:backdrop-blur-md pho:bg-blue-950/30 tab:bg-transparent tab:backdrop-blur-none tab:flex tab:static tab:flex-row lap:space-x-8 tab:space-x-6 justify-center font-semibold lap:text-[16px] pho:text-[14px] tab:text-[14px] desk1:text-[16px] font-roboto desk1:space-x-10 desk2:space-x-12 desk3:space-x-14`}
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

      <div className="pho:hidden tab:flex grow-0 justify-end tab:gap-1 lap:gap-2">
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
