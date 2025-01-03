const About = () => {
  return (
    <div className="relative h-[400px] w-full flex overflow-hidden bg-cover bg-no-repeat">
      <img
        src="/src/assets/images/Background-01.jpg"
        alt="Background Image"
        className="w-full h-auto rotate-180 inset-0 object-cover z-0"
      />

      <div className="absolute z-20 flex w-full p-[80px]">
        <div className="flex flex-col">
          <h2 className="text-[16px] font-normal text-GreenB">About Me</h2>
          <h1 className="text-[24px] font-bold text-white mb-4">Who Am I</h1>
          <h2 className="text-[16px] font-normal text-white mb-3">
            Hi! I'm José Jiménez, a proactive and committed Computer
            Engineering, Frontend Developer, and Graphic/UI Designer with a
            solid work ethic and an empathetic, honest attitude. My passion for
            continuous learning drives me to constantly seek new opportunities
            to expand my knowledge and challenge my limits.
          </h2>
          <h2 className="text-[16px] font-normal text-white mt-2">
            I specialize in designing and developing modern, responsive, and
            user-centric digital experiences, combining my technical and
            creative skills to ensure high-quality products. My collaborative
            mindset and adaptability allow me to work effectively in teams and
            contribute to achieving shared goals.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
