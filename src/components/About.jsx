import Background from "../assets/images/Background-01.jpg"
import Me from "../assets/images/about.png"

const About = () => {
  return (
    <div className="relative h-auto w-full flex overflow-hidden justify-center">
          <img
            src={Background}
            alt="Background Image"
            className="w-full h-full z-0 absolute inset-0 object-cover"
          />

      <div className="relative z-10 flex w-full lap:p-[80px] mob:p-[40px] pho:p-[20px] tab:p-[60px] desk2:p-[120px] desk3:p-[140px] desk3:pl-0 desk3:pr-0 desk2:pl-0 desk2:pr-0 desk1:p-[100px] font-roboto tab:flex-row tab:w-[648px] tab:pr-0 tab:pl-0 pho:flex-col-reverse gap-8 lap:gap-10 items-center desk1:w-[1065px] lap:w-[847px] lap:pl-0 lap:pr-0 desk1:pl-0 desk1:pr-0 mob:w-[295px] mob:pl-0 mob:pr-0 pho:w-[280px] pho:pl-0 pho:pr-0">
      
      <div className="pho:w-full overflow-hidden mob:h-[200px] pho:h-[180px] tab:h-[240px] lap:w-[600px] desk1:h-[320px] desk2:w-[540px] desk3:w-[800px] desk3:h-[300px]">
        <img
          src={Me}
          alt="M-Image"
          className="w-full h-full object-cover pho:object-top desk3:object-top tab:object-center"/>
      </div>


        <div className="flex flex-col w-auto">
          <h2 className="lap:text-[16px] tab:text-[14px] desk1:text-[18px] font-normal text-GreenB">About Me</h2>
          <h1 className="lap:text-[24px] desk1:text-[26px] tab:text-[20px] font-bold text-white mb-4">Who Am I</h1>
          <h3 className="lab:text-[16px] mob:text-[12px] pho:text-[10px] font-normal text-white mb-3 text-justify desk3:text-[16px]">
            Hi! I'm José Jiménez, a proactive and committed Computer
            Engineering, Frontend Developer, and Graphic/UI Designer with a
            solid work ethic and an empathetic, honest attitude. My passion for
            continuous learning drives me to constantly seek new opportunities
            to expand my knowledge and challenge my limits.
          </h3>
          <h3 className="lab:text-[16px] mob:text-[12px] font-normal text-white mt-2 text-justify desk3:text-[16px] pho:text-[10px]">
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
