import { Link } from "react-scroll";
import logo from '../assets/svgs/logo.svg';
import linkedin from '../assets/svgs/linkedin.svg';
import instagram from '../assets/svgs/instagram.svg';
import github from '../assets/svgs/github.svg';
import Dropdown from '../components/Download'

const Navbar = () => {

  return (
    <div className="absolute z-20 bg-transparent text-white top-0 w-full h-[75px] flex items-center px-10">
      <div className="flex-grow-0">
        <img className="w-auto h-[2.5rem]" src={logo} alt="home" />
      </div>
      <div className="flex space-x-8 justify-center mx-auto font-semibold relative">
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
        
        <Dropdown/>
      
      </div>

      <div className="flex gap-x-3">
        <a 
          href="https://www.linkedin.com/in/jejs97" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-auto h-[1.875rem] flex items-center"
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
          className="w-auto h-[1.875rem] flex items-center"
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
          className="w-auto h-[1.875rem] flex items-center"
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
