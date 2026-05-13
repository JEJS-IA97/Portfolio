import { 
  SiCypress, SiSelenium, SiPostman, SiAppium, SiPytest, SiCucumber,
  SiHtml5, SiReact, SiJavascript, SiTypescript, SiPython, SiNodedotjs, SiVite, SiTailwindcss,
  SiMongodb, SiMysql, SiPostgresql, SiSqlite, SiFigma, SiCoreldraw
} from "react-icons/si";
import { 
  DiIllustrator, DiPhotoshop, DiCss3
} from "react-icons/di";
import { VscAzure } from "react-icons/vsc";

import Background from "../assets/images/Background-01.jpg";

const PlaywrightIcon = () => (
  <img 
    src="https://playwright.dev/img/playwright-logo.svg" 
    alt="Playwright" 
    className="w-[1.65em] h-[1.65em] brightness-0 invert opacity-80 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 transition-all duration-300"
  />
);

const stackCategories = [
  {
    title: "QA & Automation",
    icons: [
      { name: "Cypress", Component: SiCypress, color: "hover:text-[#4B7B5B]" },
      { name: "Playwright", Component: PlaywrightIcon, color: "hover:text-[#2EAD33]" },
      { name: "Selenium", Component: SiSelenium, color: "hover:text-[#43B02A]" },
      { name: "Postman", Component: SiPostman, color: "hover:text-[#FF6C37]" },
      { name: "Appium", Component: SiAppium, color: "hover:text-[#662D91]" },
      { name: "Pytest", Component: SiPytest, color: "hover:text-[#0A9EDC]" },
      { name: "Cucumber", Component: SiCucumber, color: "hover:text-[#23D96C]" },
    ]
  },
  {
    title: "Frontend & Backend",
    icons: [
      { name: "HTML5", Component: SiHtml5, color: "hover:text-[#E34F26]" },
      { name: "CSS3", Component: DiCss3, color: "hover:text-[#1572B6]" },
      { name: "React", Component: SiReact, color: "hover:text-[#61DAFB]" },
      { name: "JavaScript", Component: SiJavascript, color: "hover:text-[#F7DF1E]" },
      { name: "TypeScript", Component: SiTypescript, color: "hover:text-[#3178C6]" },
      { name: "Python", Component: SiPython, color: "hover:text-[#3776AB]" },
      { name: "Node.js", Component: SiNodedotjs, color: "hover:text-[#339933]" },
      { name: "Vite", Component: SiVite, color: "hover:text-[#646CFF]" },
      { name: "Tailwind CSS", Component: SiTailwindcss, color: "hover:text-[#06B6D4]" },
      { name: "Azure", Component: VscAzure, color: "hover:text-[#0089D6]" },
    ]
  },
  {
    title: "Databases & Design",
    icons: [
      { name: "MongoDB", Component: SiMongodb, color: "hover:text-[#47A248]" },
      { name: "MySQL", Component: SiMysql, color: "hover:text-[#4479A1]" },
      { name: "PostgreSQL", Component: SiPostgresql, color: "hover:text-[#4169E1]" },
      { name: "SQLite", Component: SiSqlite, color: "hover:text-[#003B57]" },
      { name: "Figma", Component: SiFigma, color: "hover:text-[#F24E1E]" },
      { name: "Illustrator", Component: DiIllustrator, color: "hover:text-[#FF9A00]" },
      { name: "Photoshop", Component: DiPhotoshop, color: "hover:text-[#31A8FF]" },
      { name: "CorelDraw", Component: SiCoreldraw, color: "hover:text-[#ffffff]" },
    ]
  }
];

const Stack = () => {
  return (
    <div className="relative w-full py-[60px] px-[120px] flex flex-col items-center bg-gradient-to-r from-[#00040D] to-[#00133B] overflow-hidden">
      
      <img
        src={Background}
        alt="Background"
        className="w-full h-full z-0 absolute inset-0 object-cover opacity-30 pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center">
        
        <h1 className="text-[#efefef] text-[72px] text-opacity-80 leading-none font-bold text-center mb-16">
          Tech Stack<span className="text-[#45C7F8] text-opacity-50">.</span>
        </h1>

        <div className="flex flex-col gap-10 w-full">
          {stackCategories.map((category) => (
            <div key={category.title} className="flex flex-col items-center">
              
              <h3 className="text-[#45C7F8]/70 text-2xl font-mono mb-8 tracking-wider uppercase text-center">
                {category.title}
              </h3>

              <div className="flex flex-wrap justify-center gap-8 md:gap-10">
                {category.icons.map((tech) => (
                  <div key={tech.name} className="group relative flex flex-col items-center justify-center cursor-pointer">
                    
                    <div className={`text-5xl text-[#efefef] transition-all duration-300 transform group-hover:scale-110 ${tech.color}`}>
                      <tech.Component />
                    </div>

                    <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold text-[#efefef] bg-[#00133B]/80 px-2 py-1 rounded-md pointer-events-none whitespace-nowrap z-20">
                      {tech.name}
                    </span>
                    
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stack;