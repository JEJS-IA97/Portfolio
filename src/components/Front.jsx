import Background from "../assets/images/Background-01.jpg"
import Me from "../assets/images/profile-06.png"

const Front = () => {
    return (
      <div className="mb-[-2px] relative lap:h-[480px] mob:h-[310px] tab:h-[365px] bg-cover bg-no-repeat flex justify-center items-center w-full">
        <img
          src={Background}
          alt="Background Image"
          className="w-full h-full z-0 absolute inset-0 object-cover"
        />
  
        <div className="z-10 items-center flex flex-grow w-full lap:p-[80px] mob:p-[40px] tab:p-[60px] h-full mt-[100px] ">
          <div className="flex flex-col top-0 absolute z-20 mob:mt-[95px] tab:mt-[160px]">
            <h1 className="lap:text-[48px] mob:text-[24px] tab:text-[34px] font-bold text-white mb-2 mob:w-[160px] tab:w-[385px] tab:w-[500px] leading-7">
              <span className="text-GreenB">Hello</span>, I'm José Jiménez
            </h1>
            <h2 className="lap:text-[20px] mob:text-[14px] tab:text-[17px]  font-medium text-white z-20">
              Computer Engineer
            </h2>
            <h2 className="z-20 lap:text-[14px] mob:text-[12px] tab:text-[13px] tab:w-[385px]   font-normal text-white mob:w-[160px]">
            Frontend Developer, Quality Assurance & Graphic/UI Designer.
            </h2>
          </div>
          <img
            src={Me}
            alt="M-Image"
            className="lap:w-[290px] mob:w-[160px] tab:w-[205px] z-10 absolute mob:right-[40px] tab:right-[60px]"
          />
        </div>
      </div>
    );
  };
  
  export default Front;
  