import React from 'react';
import Background from "../assets/images/Background-01.jpg"
import Project from './Projects';
import data from "../../data.json"

const Portfolio = () => {

  const project = data.portfolio.slice(0,6)

  return (
      <div className="font-roboto relative h-auto w-full flex overflow-hidden mt-[-2px] mb-[-2px]">
        <img
          src={Background}
          alt="Background Image"
          className="w-full h-full z-0 absolute inset-0 object-cover"
        />
          <div className="relative flex z-10 flex-col items-center w-full lap:p-[80px] mob:p-[40px] tab:p-[60px] gap-y-[40px] desk1:p-[100px] desk2:p-[120px] desk3:p-[140px]">
              <h2 className="text-[24px] desk1:text-[26px] font-bold text-white">Portfolio</h2>
              <div className="grid lap:grid-cols-3 desk2:grid-cols-4 desk3:grid-cols-6 mob:grid-cols-1 tab:grid-cols-2 lap:gap-[25px] mob:gap-[20px] tab:gap-[34px]">
                {project.map(object =>(
                  <div key={object.id}>
                    <Project 
                    defaultImage={object.defaultImage}
                    hoverImage={object.hoverImage}
                    url={object.url}/>
                  </div>
                ) )}
              </div>
          </div>
          </div>
  );
};

export default Portfolio;