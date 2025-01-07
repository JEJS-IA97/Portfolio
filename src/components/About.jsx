import Background from "../assets/images/Background-01.jpg"

const About = () => {
  return (
    <div className="relative h-auto w-full flex overflow-hidden">
          <img
            src={Background}
            alt="Background Image"
            className="w-full h-full z-0 absolute inset-0 object-cover"
          />

      <div className="relative z-10 flex w-full lap:p-[80px] mob:p-[40px] tab:p-[60px]">
        <div className="flex flex-col">
          <h2 className="lap:text-[16px] tab:text-[14px] font-normal text-GreenB">About Me</h2>
          <h1 className="lap:text-[24px] tab:text-[20px] font-bold text-white mb-4">Who Am I</h1>
          <h3 className="lab:text-[16px] mob:text-[12px] font-normal text-white mb-3">
            Hi! I'm José Jiménez, a proactive and committed Computer
            Engineering, Frontend Developer, and Graphic/UI Designer with a
            solid work ethic and an empathetic, honest attitude. My passion for
            continuous learning drives me to constantly seek new opportunities
            to expand my knowledge and challenge my limits.
          </h3>
          <h3 className="lab:text-[16px] mob:text-[12px] font-normal text-white mt-2">
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
