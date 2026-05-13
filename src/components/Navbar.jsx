import { Link } from "react-scroll";
import { useState } from "react";
import logo from "../assets/svgs/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="absolute top-0 z-20 w-full bg-gradient-to-r from-[#00236D] to-[#00040D] text-white">
      <div className="relative mx-auto flex h-[56px] w-full max-w-[1600px] items-center px-4 mob:h-[60px] mob:px-6 tab:h-[68px] tab:px-8 lap:h-[75px] lap:px-10 desk2:px-16 desk3:px-20">

        <div className="shrink-0">
          <img className="h-[38px] w-auto mob:h-[40px] lap:h-[45px]" src={logo} alt="home" />
        </div>

        <div className="ml-auto flex justify-end lap:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <div className="space-y-1">
              <div className="h-0.5 w-6 bg-white"></div>
              <div className="h-0.5 w-6 bg-white"></div>
              <div className="h-0.5 w-6 bg-white"></div>
            </div>
          </button>
        </div>

        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 top-full w-full min-h-screen flex-col items-center gap-y-5 overflow-y-auto bg-blue-950/75 px-6 py-8 text-center font-roboto text-[14px] font-semibold backdrop-blur-md mob:max-h-[calc(100vh-60px)] tab:max-h-[calc(100vh-68px)] 
          lap:absolute lap:left-1/2 lap:top-1/2 lap:-translate-x-1/2 lap:-translate-y-1/2 lap:flex lap:w-auto lap:flex-row lap:items-center lap:gap-8 lap:bg-transparent lap:px-0 lap:py-0 lap:text-left lap:text-[16px] lap:backdrop-blur-none desk1:gap-10 desk2:gap-12 desk3:gap-14`}
        >
          <Link to="about" smooth={true} duration={500} onClick={() => setMenuOpen(false)} className="cursor-pointer transition-colors hover:text-[#246a8e]">
            About me
          </Link>
          <Link to="experience" smooth={true} duration={500} onClick={() => setMenuOpen(false)} className="cursor-pointer transition-colors hover:text-[#246a8e]">
            Experience
          </Link>
          <Link to="stack" smooth={true} duration={500} onClick={() => setMenuOpen(false)} className="cursor-pointer transition-colors hover:text-[#246a8e]">
            Tech Stack
          </Link>
          <Link to="portfolio" smooth={true} duration={500} onClick={() => setMenuOpen(false)} className="cursor-pointer transition-colors hover:text-[#246a8e]">
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} onClick={() => setMenuOpen(false)} className="cursor-pointer transition-colors hover:text-[#246a8e]">
            Contact
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Navbar;