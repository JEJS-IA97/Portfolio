import Background from "../assets/images/Background-01.jpg"
import Me from "../assets/images/profile-06.png"

const Front = () => {
    return (
      <div className="mb-[-2px] relative lap:h-[480px] desk1:h-[600px] mob:h-[310px] tab:h-[365px] bg-cover bg-no-repeat flex justify-center items-center w-full">
        <img
          src={Background}
          alt="Background Image"
          className="w-full h-full z-0 absolute inset-0 object-cover"
        />
  
        <div className="z-10 font-roboto items-center flex flex-grow w-full lap:p-[80px] desk2:p-[120px] mob:p-[40px] tab:p-[60px] h-full mt-[100px] desk1:p-[100px] desk3:p-[140px] desk3:pl-[280px] desk3:pr-[280px]">
          <div className="flex flex-col top-0 absolute z-20 mob:mt-[95px] tab:mt-[160px] lap:mt-[215px] desk1:mt-[275px]">
            <h1 className="lap:text-[48px] mob:text-[24px] tab:text-[34px] font-bold text-white mb-2 lap:mb-6 mob:w-[160px] tab:w-[385px] lap:w-[700px] leading-7 desk1:text-[54px]">
              <span className="text-GreenB">Hello</span>, I'm José Jiménez
            </h1>
            <h2 className="lap:text-[20px] mob:text-[14px] tab:text-[16px]  font-medium text-white z-20 desk1:text-[22px]">
              Computer Engineer
            </h2>
            <h2 className="z-20 lap:text-[14px] mob:text-[12px] tab:text-[13px] tab:w-[385px] lap:w-[700px] font-normal text-white mob:w-[160px] desk1:text-[16px]">
            Frontend Developer, Quality Assurance & Graphic/UI Designer.
            </h2>
          </div>
          <img
            src={Me}
            alt="M-Image"
            className="lap:w-[290px] mob:w-[160px] tab:w-[205px] desk1:w-[363px] z-10 absolute mob:right-[40px] tab:right-[60px] desk1:right-[100px] desk2:right-[120px] desk1:mt-[22px] desk3:right-[280px]"
          />
        </div>
      </div>
    );
  };
  
  export default Front;
  