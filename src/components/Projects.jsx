import React, { useState } from 'react';

const Project = ({ defaultImage, hoverImage, url }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
    <div
      className={`mob:w-[295px] mob:h-[295px] pho:w-[280px] pho:h-[280px] lap:w-[267px] lap:h-[267px] tab:w-[307px] tab:h-[307px] flex items-center justify-center overflow-hidden cursor-pointer ${
        isHovered ? "bg-white" : "bg-Blue2"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? defaultImage : hoverImage}
        className="w-auto h-auto object-cover"
        alt="Project"
      />
    </div>
    </a>
  );
};

export default Project;
