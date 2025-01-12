import Background from "../assets/images/Background-01.jpg"
import Me from "../assets/images/about.png"

const About = () => {
  return (
    <div className="relative h-auto w-full flex overflow-hidden">
          <img
            src={Background}
            alt="Background Image"
            className="w-full h-full z-0 absolute inset-0 object-cover"
          />

      <div className="relative z-10 flex w-full lap:p-[80px] mob:p-[40px] tab:p-[60px] desk2:p-[120px] desk3:p-[140px] desk3:pl-[280px] desk3:pr-[280px] desk1:p-[100px] font-roboto tab:flex-row mob:flex-col-reverse gap-8 lap:gap-10 items-center transform ">
      
      <div className="mob:w-full overflow-hidden mob:h-[200px] tab:h-[240px] lap:w-[600px] desk1:h-[320px] desk2:w-[540px] desk3:w-[740px] desk3:h-[350px]">
        <img
          src={Me}
          alt="M-Image"
          className="w-full h-full object-cover mob:object-top desk3:object-top tab:object-center"/>
      </div>


        <div className="flex flex-col w-auto">
          <h2 className="lap:text-[16px] tab:text-[14px] desk1:text-[18px] font-normal text-GreenB desk2:text-[24px]">About Me</h2>
          <h1 className="lap:text-[24px] desk1:text-[26px] tab:text-[20px] font-bold text-white mb-4 desk2:text-[30px]">Who Am I</h1>
          <h3 className="lab:text-[16px] mob:text-[12px] desk2:text-[20px] font-normal text-white mb-3 text-justify">
            Hi! I'm José Jiménez, a proactive and committed Computer
            Engineering, Frontend Developer, and Graphic/UI Designer with a
            solid work ethic and an empathetic, honest attitude. My passion for
            continuous learning drives me to constantly seek new opportunities
            to expand my knowledge and challenge my limits.
          </h3>
          <h3 className="lab:text-[16px] mob:text-[12px] font-normal text-white mt-2 text-justify desk2:text-[20px]">
            I specialize in designing and developing modern, responsive, and
            user-centric digital experiences, combining my technical and
            creative skills to ensure high-quality products. My collaborative
            mindset and adaptability allow me to work effectively in teams and
            contribute to achieving shared goals.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
