import Background from "../assets/images/Background-01.jpg"
import Me from "../assets/images/cyberpunk.png"
import linkedin from "../assets/svgs/linkedin.svg";
import instagram from "../assets/svgs/instagram.svg";
import github from "../assets/svgs/github.svg";
import telegram from "../assets/svgs/telegram (2).svg";
import discord from "../assets/svgs/discord.svg";
import frame from "../assets/svgs/frame.svg";
import Me2 from "../assets/images/profile-06.png";

const Front = () => {
    return (
      <div className="relative h-[690px] w-full flex justify-center overflow-hidden bg-gradient-to-r from-[#00133B] to-[#00040D]">

        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={Background}
            alt=""
            className="w-full h-full object-cover opacity-30 pointer-events-none"
          />
        </div>

        <div className="z-10 relative items-center flex lap:p-[80px] desk2:p-[120px] mob:p-[40px] pho:p-[20px] tab:p-[60px] h-full desk1:p-[100px] desk3:p-[140px] desk1:w-[1250px] lap:w-[980px] tab:w-[750px] tab:pr-0 tab:pl-0 lap:pl-0 lap:pr-0 desk1:pl-0 desk1:pr-0 desk2:pl-0 desk2:pr-0 flex-row justify-between mob:mt-[60px] pho:mt-[80px] lap:mt-[75px] mob:w-[350px] pho:w-[310px] ">

          <div className="flex flex-row items-center gap-10 z-10">

            <div className="relative tab:flex justify-center items-center w-[350px] h-[400px]">
              <img
                src={Me2}
                alt="Profile"
                className="absolute z-0 w-auto h-[300px] mt-[-10px] ml-[-25px]"
              />
              <img
                src={frame}
                alt="frame"
                className="absolute z-10 w-full h-full object-contain pointer-events-none"
              />
            </div>

            <div className="font-roboto flex flex-col pr-5">
              <div className="flex pho:flex-col">
                <h1 className="lap:text-[32px] font-bold text-white lap:mb-6 mob:w-[160px] pho:w-[130px] leading-7 desk1:text-[54px] tab:w-auto flex flex-col gap-2">
                  <span className="lap:text-[32px] mob:text-[24px] pho:text-[20px] tab:text-[34px] text-[#efefef] text-opacity-90 ">Hello<span className="text-[#45C7F8] text-opacity-50">,</span></span>
                  <span className="text-[#45C7F8] lap:text-[74px] text-opacity-50 leading-none">I&apos;m José</span>
                  <span className="text-[#45C7F8] lap:text-[72px] text-opacity-50 leading-none mt-[-10px]">Jiménez</span>
                </h1>
                <h2 className="lap:text-[32px] mob:text-[24px] pho:text-[20px] tab:text-[34px] text-[#efefef] text-opacity-90 mb-4 mt-[-10px]">Software Engineer</h2>

                <div className="tab:flex grow-0 justify-start tab:gap-1 lap:gap-4 flex gap-2">
                  <a href="https://www.linkedin.com/in/jejs97" target="_blank" rel="noopener noreferrer" className="w-auto lap:h-[35px] tab:h-[25px] flex items-center">
                    <img className="h-full hover:opacity-80 transition-opacity" src={linkedin} alt="LinkedIn" />
                  </a>
                  <a href="https://github.com/JEJS-IA97" target="_blank" rel="noopener noreferrer" className="w-auto lap:h-[35px] tab:h-[25px] flex items-center">
                    <img className="h-full hover:opacity-80 transition-opacity" src={github} alt="GitHub" />
                  </a>
                  <a href="https://www.instagram.com/jose__jimenez16/" target="_blank" rel="noopener noreferrer" className="w-auto lap:h-[35px] tab:h-[25px] flex items-center">
                    <img className="h-full hover:opacity-80 transition-opacity" src={instagram} alt="Instagram" />
                  </a>
                  <a href="https://t.me/JEJS97" target="_blank" rel="noopener noreferrer" className="w-auto lap:h-[35px] tab:h-[25px] flex items-center">
                    <img className="h-full hover:opacity-80 transition-opacity" src={telegram} alt="Telegram" />
                  </a>
                  <a href="https://discordapp.com/users/jejs8519" target="_blank" rel="noopener noreferrer" className="w-auto lap:h-[35px] tab:h-[25px] flex items-center">
                    <img className="h-full hover:opacity-80 transition-opacity" src={discord} alt="Discord" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src={Me}
          alt="M-Image"
          className="absolute right-0 z-[60] opacity-60 pointer-events-none lap:w-[500px] pho:w-[150px] tab:w-[240px] desk1:w-[500px] tab:mt-[-16px] mob:mt-[-6px] pho:mt-[-40px] lap:mt-[5px] desk1:mt-[-40px] desk2:mt-[-10px]"
        />

      </div>
    );
  };
  
  export default Front;