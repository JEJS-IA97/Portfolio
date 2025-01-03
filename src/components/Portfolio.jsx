import React from 'react';

const Portfolio = () => {
  return (
      <div className="relative h-[796px] w-full flex overflow-hidden">
        <img
          src="/src/assets/images/Background-01.jpg"
          alt="Background Image"
          className="w-full h-[796px] z-0 absolute inset-0 object-cover"
        />
          <div className="relative flex z-10 flex-col items-center w-full p-[80px] gap-y-[40px]">
              <h2 className="text-[24px] font-bold text-white">Portfolio</h2>
              <div className="grid grid-cols-3 gap-[25px]">
                <div className='w-[267px] h-[267px] bg-white flex items-center justify-center'>1</div>
                <div className='w-[267px] h-[267px] bg-white flex items-center justify-center'>2</div>
                <div className='w-[267px] h-[267px] bg-white flex items-center justify-center'>3</div>
                <div className='w-[267px] h-[267px] bg-white flex items-center justify-center'>4</div>
                <div className='w-[267px] h-[267px] bg-white flex items-center justify-center'>5</div>
                <div className='w-[267px] h-[267px] bg-white flex items-center justify-center'>6</div>
              </div>
          </div>
          </div>
  );
};

export default Portfolio;