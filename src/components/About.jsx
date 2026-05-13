import Background from "../assets/images/Background-01.jpg"
import Me from "../assets/images/Profile-02.jpg"

const About = () => {
  return (
    <div className="relative w-full py-[60px] px-[120px] flex flex-col items-center bg-gradient-to-r from-[#00040D] to-[#00133B] overflow-hidden">

          <img
            src={Background}
            alt=""
            aria-hidden="true"
            className="w-full h-full z-0 absolute inset-0 object-cover opacity-30 pointer-events-none"
          />

      <h1 className="relative z-10 text-[#efefef] text-[72px] text-opacity-80 leading-none font-bold text-center mb-16">
        About<span className="text-[#45C7F8] text-opacity-50">.</span>
      </h1>

      <div className="relative z-10 flex flex-row w-full max-w-[1200px] gap-16 items-center justify-between font-roboto">

        <div className="flex flex-col w-[55%]">
          <h2 className="text-[32px] font-bold text-white mb-6 text-[#45C7F8] text-opacity-50">Who Am I</h2>
          
          <div className="flex flex-col gap-4 text-[18px] font-normal text-[#efefef] text-opacity-90 text-justify leading-relaxed">
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

        <div className="w-[45%] h-[450px] overflow-hidden shadow-2xl rounded-sm">
          <img
            src={Me}
            alt="José Jiménez"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out rounded-lg"
          />
        </div>

      </div>
    </div>
  );
};

export default About;