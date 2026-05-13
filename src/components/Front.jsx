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
    <div className="relative flex min-h-auto w-full justify-center overflow-hidden bg-gradient-to-r from-[#00133B] to-[#00040D]">

      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={Background}
          alt=""
          className="pointer-events-none h-full w-full object-cover opacity-30"
        />
      </div>

      <div className="relative flex w-full max-w-[1600px] flex-col items-center justify-center px-4 py-12 pt-[88px] mob:px-6 mob:pb-14 mob:pt-[104px] tab:px-8 tab:pb-12 tab:pt-[118px] lap:flex-row lap:justify-start desk1:items-center lap:px-10 lap:pt-[120px] random1:pt-[140px] desk2:px-16 desk3:px-20 lap:pb-[60px] random3:mx-auto random3:max-w-[1500px] random3:justify-center random3:pb-0 random3:pl-0 random3:pr-0">

        <div className="relative z-10 flex w-full flex-col items-center justify-center gap-4 lap:w-[60%] lap:flex-row lap:justify-start lap:items-start desk1:items-center lap:gap-6 random1:w-[70%] desk3:gap-14 random3:w-auto">

          <div className="relative flex h-[250px] w-[220px] shrink-0 items-center justify-center mob:h-[300px] mob:w-[260px] tab:w-[320px] lap:h-[280px] lap:w-[340px] random1:h-[350px] random1:w-[350px] desk3:h-[480px] desk3:w-[420px] lap:w-[50%]">
            <img
              src={Me2}
              alt="Profile"
              className="absolute z-0 h-[190px] w-auto -translate-x-[10px] -translate-y-[6px] mob:h-[228px] lap:w-auto lap:h-[85%] random1:h-[315px] desk3:h-[365px] pointer-events-none "
            />
            <img
              src={frame}
              alt="frame"
              className="pointer-events-none absolute z-10 h-full w-full object-contain"
            />
          </div>

          <div className="font-roboto flex w-full max-w-[600px] flex-col text-center lap:max-w-[520px] lap:text-left desk1:max-w-[600px]">
            <div className="flex flex-col items-center gap-0 lap:items-start">
              <h1 className="mb-2 flex flex-col gap-1 font-bold leading-[0.9] text-white">
                <span className="text-[22px] text-[#efefef] text-opacity-90 mob:text-[24px] tab:text-[32px] lap:text-[32px] desk1:text-[38px]">Hello<span className="text-[#45C7F8]/70">,</span></span>
                <span className="text-[48px] leading-none text-[#45C7F8]/70 mob:text-[58px] tab:text-[70px] lap:text-[60px] desk1:text-[86px] desk3:text-[98px]">I&apos;m José</span>
                <span className="mt-[-8px] text-[46px] leading-none text-[#45C7F8]/70 mob:text-[56px] tab:text-[68px] lap:text-[58px] desk1:text-[84px] desk3:text-[96px]">Jiménez</span>
              </h1>
              <h2 className="mb-4 text-[22px] text-[#efefef] text-opacity-90 mob:text-[24px] tab:text-[32px] lap:text-[26px] desk1:text-[36px]">Software Engineer</h2>

              <div className="flex flex-wrap items-center justify-center gap-4 tab:gap-5 lap:justify-start lap:gap-3 desk1:gap-6">
                <a href="https://www.linkedin.com/in/jejs97" target="_blank" rel="noopener noreferrer" className="flex h-[26px] mob:h-[28px] tab:h-[30px] lap:h-[30px] desk1:h-[36px] w-auto items-center transition-opacity hover:opacity-80">
                  <img className="h-full w-auto" src={linkedin} alt="LinkedIn" />
                </a>
                <a href="https://github.com/JEJS-IA97" target="_blank" rel="noopener noreferrer" className="flex h-[26px] mob:h-[28px] tab:h-[30px] lap:h-[30px] desk1:h-[36px] w-auto items-center transition-opacity hover:opacity-80">
                  <img className="h-full w-auto" src={github} alt="GitHub" />
                </a>
                <a href="https://www.instagram.com/jose__jimenez16/" target="_blank" rel="noopener noreferrer" className="flex h-[26px] mob:h-[28px] tab:h-[30px] lap:h-[30px] desk1:h-[36px] w-auto items-center transition-opacity hover:opacity-80">
                  <img className="h-full w-auto" src={instagram} alt="Instagram" />
                </a>
                <a href="https://t.me/JEJS97" target="_blank" rel="noopener noreferrer" className="flex h-[26px] mob:h-[28px] tab:h-[30px] lap:h-[30px] desk1:h-[36px] w-auto items-center transition-opacity hover:opacity-80">
                  <img className="h-full w-auto" src={telegram} alt="Telegram" />
                </a>
                <a href="https://discordapp.com/users/jejs8519" target="_blank" rel="noopener noreferrer" className="flex h-[26px] mob:h-[28px] tab:h-[30px] lap:h-[30px] desk1:h-[36px] w-auto items-center transition-opacity hover:opacity-80">
                  <img className="h-full w-auto" src={discord} alt="Discord" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none lap:absolute right-0 lap:z-[60] opacity-60 lap:top-[5px] random1:top-[10px] desk2:top-[0px] desk3:top-[0px] w-[420px] random1:w-[460px] desk2:w-[540px] desk3:w-[650px] lap:w-[38%] lap:h-[460px] random1:h-[540px] overflow-hidden desk3:h-[700px] random3:static desk2:h-[600px] pho:hidden lap:block">
          <img
            src={Me}
            alt="M-Image"
            className="w-full object-top random3:object-bottom"
          />
        </div>

      </div>

    </div>
  );
};

export default Front;