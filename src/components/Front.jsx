import Background from "../assets/images/Background-01.jpg"
import Me from "../assets/images/profile-06.png"

const Front = () => {
    return (
      <div className="relative h-[480px] bg-cover bg-no-repeat flex justify-center items-center">
        <img
          src={Background}
          alt="Background Image"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
  
        <div className="z-10 flex items-center justify-between w-full px-[80px] h-full mt-[100px]">
          <div className="flex flex-col">
            <h1 className="text-[48px] font-bold text-white mb-2">
              <span className="text-GreenB">Hello</span>, I'm José Jiménez
            </h1>
            <h2 className="text-[20px] font-medium text-white">
              Computer Engineer
            </h2>
            <h2 className="text-[14px] font-normal text-white">
            Frontend Developer, Quality Assurance & Graphic/UI Designer.
            </h2>
          </div>
          <img
            src={Me}
            alt="M-Image"
            className="w-[290px]"
          />
        </div>
      </div>
    );
  };
  
  export default Front;
  