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
    className="h-[1.65em] w-[1.65em] brightness-0 invert opacity-80 transition-all duration-300 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100"
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
    <div className="relative flex w-full flex-col items-center overflow-hidden bg-gradient-to-r from-[#00040D] to-[#00133B] px-4 py-16 mob:px-6 tab:px-8 lap:px-12 desk2:px-20 desk3:px-24">
      
      <img
        src={Background}
        alt="Background"
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-30 pointer-events-none"
      />

      <div className="relative z-10 flex w-full max-w-[1500px] flex-col items-center">
        
        <h1 className="mb-12 text-center text-[44px] font-bold leading-none text-[#efefef] text-opacity-80 mob:text-[52px] tab:mb-14 tab:text-[60px] lap:mb-16 lap:text-[72px] desk3:text-[84px]">
          Tech Stack<span className="text-[#45C7F8]/70">.</span>
        </h1>

        <div className="flex w-full flex-col gap-10">
          {stackCategories.map((category) => (
            <div key={category.title} className="flex flex-col items-center">
              
              <h3 className="mb-8 text-center font-mono text-xl uppercase tracking-wider text-[#45C7F8]/70 tab:text-2xl">
                {category.title}
              </h3>

              <div className="flex flex-wrap justify-center gap-6 tab:gap-8 lap:gap-10">
                {category.icons.map((tech) => (
                  <div key={tech.name} className="group relative flex cursor-pointer flex-col items-center justify-center">
                    
                    <div className={`transform text-4xl text-[#efefef] transition-all duration-300 group-hover:scale-110 mob:text-[2.8rem] tab:text-5xl ${tech.color}`}>
                      <tech.Component />
                    </div>

                    <span className="pointer-events-none absolute -bottom-8 z-20 whitespace-nowrap rounded-md bg-[#00133B]/80 px-2 py-1 text-sm font-semibold text-[#efefef] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
