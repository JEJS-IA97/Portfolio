import React from 'react';
import Background from "../assets/images/Background-01.jpg"

const Portfolio = () => {
  return (
      <div className="relative h-auto w-full flex overflow-hidden mt-[-2px] mb-[-2px]">
        <img
          src={Background}
          alt="Background Image"
          className="w-full h-full z-0 absolute inset-0 object-cover"
        />
          <div className="relative flex z-10 flex-col items-center w-full lap:p-[80px] mob:p-[40px] tab:p-[60px] gap-y-[40px]">
              <h2 className="text-[24px] font-bold text-white">Portfolio</h2>
              <div className="grid lap:grid-cols-3 mob:grid-cols-1 tab:grid-cols-2 lap:gap-[25px] mob:gap-[20px] tab:gap-[34px]">
                <div className='mob:w-[295px] mob:h-[295px] lap:w-[267px] lap:h-[267px] tab:w-[307px] tab:h-[307px] bg-white flex items-center justify-center'>1</div>
                <div className='mob:w-[295px] mob:h-[295px] lap:w-[267px] lap:h-[267px] tab:w-[307px] tab:h-[307px] bg-white flex items-center justify-center'>2</div>
                <div className='mob:w-[295px] mob:h-[295px] lap:w-[267px] lap:h-[267px] tab:w-[307px] tab:h-[307px]bg-white flex items-center justify-center'>3</div>
                <div className='mob:w-[295px] mob:h-[295px] lap:w-[267px] lap:h-[267px] tab:w-[307px] tab:h-[307px] bg-white flex items-center justify-center'>4</div>
                <div className='mob:w-[295px] mob:h-[295px] lap:w-[267px] lap:h-[267px] tab:w-[307px] tab:h-[307px] bg-white flex items-center justify-center'>5</div>
                <div className='mob:w-[295px] mob:h-[295px] lap:w-[267px] lap:h-[267px] tab:w-[307px] tab:h-[307px] bg-white flex items-center justify-center'>6</div>
              </div>
          </div>
          </div>
  );
};

export default Portfolio;