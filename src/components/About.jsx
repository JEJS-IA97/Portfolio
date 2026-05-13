import Background from "../assets/images/Background-01.jpg"
import Me from "../assets/images/Profile-02.jpg"

const About = () => {
  return (
    <div className="relative flex w-full flex-col items-center overflow-hidden bg-gradient-to-r from-[#00040D] to-[#00133B] px-4 py-16 mob:px-6 tab:px-8 lap:px-12 desk2:px-20 desk3:px-24">

          <img
            src={Background}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 z-0 h-full w-full object-cover opacity-30 pointer-events-none"
          />

      <h1 className="relative z-10 mb-12 text-center text-[44px] font-bold leading-none text-[#efefef] text-opacity-80 mob:text-[52px] tab:mb-14 tab:text-[60px] lap:mb-16 lap:text-[72px] desk3:text-[84px]">
        About<span className="text-[#45C7F8]/70">.</span>
      </h1>

      <div className="relative z-10 flex w-full max-w-[1500px] flex-col gap-10 font-roboto lap:flex-row lap:items-center lap:justify-between lap:gap-16">

        <div className="flex w-full flex-col lap:w-[55%]">
          <h2 className="mb-6 text-[28px] font-bold text-[#45C7F8]/70 mob:text-[30px] tab:text-[32px]">Who Am I</h2>
          
          <div className="flex flex-col gap-4 text-left text-[16px] font-normal leading-relaxed text-[#efefef] text-opacity-90 tab:text-[17px] lap:text-[18px] text-justify">
            <p>
              Hi! I&apos;m José Jiménez, a passionate Software Engineer based in Barquisimeto. I thrive at the intersection of logic and creativity, blending my roles as a QA Automation Engineer, Frontend Developer, and Graphic/UI Designer. 
            </p>
            <p>
              I specialize in crafting modern, intuitive web experiences using technologies like React, TypeScript, and Tailwind CSS, while ensuring absolute reliability through robust E2E testing suites with Cypress, Playwright, and Postman. My background in design with Figma allows me to build applications that don&apos;t just work flawlessly behind the scenes, but also feel amazing to the user.
            </p>
            <p>
              I am a firm believer in continuous learning and always pushing my limits. When I&apos;m away from the keyboard, you can find me lifting heavy at the gym, exploring good food, unwinding with video games like Hogwarts Legacy, or getting hooked on a good mystery, suspense, or action movie.
            </p>
          </div>
        </div>

        <div className="h-[260px] w-full overflow-hidden rounded-sm shadow-2xl mob:h-[320px] tab:h-[380px] lap:h-[450px] lap:w-[45%] desk3:h-[520px]">
          <img
            src={Me}
            alt="José Jiménez"
            className="h-full w-full rounded-lg object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>

      </div>
    </div>
  );
};

export default About;
