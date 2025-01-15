import Background from "../assets/images/Background-01.jpg"
import Me from "../assets/images/profile-06.png"

const Front = () => {
    return (
      <div className="relative h-auto w-full flex overflow-hidden justify-center">
        <img
          src={Background}
          alt="Background Image"
          className="w-full h-full z-0 absolute inset-0 object-cover"
        />
  
        <div className="z-10 font-roboto items-center flex lap:p-[80px] desk2:p-[120px] mob:p-[40px] tab:p-[60px] h-full desk1:p-[100px] desk3:p-[140px] desk1:w-[1065px] lap:w-[847px] tab:w-[648px] tab:pr-0 tab:pl-0 lap:pl-0 lap:pr-0 desk1:pl-0 desk1:pr-0 desk2:pl-0 desk2:pr-0 flex-row justify-between mob:mt-[60px] lap:mt-[75px] mob:w-[295px] mob:pl-0 mob:pr-0 desk3:pl-0 desk3:pr-0">
          <div className="flex mob:flex-col z-10">
            <h1 className="lap:text-[48px] mob:text-[24px] tab:text-[34px] font-bold text-white mb-2 lap:mb-6 mob:w-[160px] leading-7 desk1:text-[54px] tab:w-auto">
              <span className="text-GreenB">Hello</span>, I'm José Jiménez
            </h1>
            <h2 className="lap:text-[20px] mob:text-[14px] tab:text-[16px] font-medium text-white z-20 desk1:text-[22px]">
              Computer Engineer
            </h2>
            <h2 className="z-20 lap:text-[14px] mob:text-[12px] tab:text-[13px] tab:w-[385px] font-normal text-white mob:w-[160px] desk1:w-auto desk1:text-[16px]">
            Frontend Developer, Quality Assurance & Graphic/UI Designer.
            </h2>
          </div>
          <div className="w-auto z-10 mob:h-[150px] tab:h-[234px] lap:h-[363px]">
          <img
            src={Me}
            alt="M-Image"
            className="lap:w-[340px] mob:w-[150px] tab:w-[240px] desk1:w-[400px] absolute tab:right-[60px] tab:mt-[-16px] mob:mt-[-6px] mob:right-[40px] lap:right-[80px] lap:mt-[5px] desk1:right-[100px] desk1:mt-[-40px] desk2:right-[180px] desk2:mt-[-40px] desk3:right-[420px] desk3:mt-[-15px]"
          />
          </div>
        </div>
      </div>
    );
  };
  
  export default Front;
  