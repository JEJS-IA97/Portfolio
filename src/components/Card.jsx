import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import {CircularProgressbarWithChildren,buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RadialSeparators from "./RadialSeparator"

const FlipCard = ({ svg, name, level }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        className="bg-Blue2 font-roboto tab:w-[137px] tab:h-[137px] mob:w-[83px] mob:h-[83px] pho:w-[78px] pho:h-[78px] rounded-[10px] flex flex-col items-center justify-center lap:gap-y-[20px] mob:gap-y-[10px] pho:gap-y-[8px] cursor-pointer"
        onClick={handleFlip}
      >
        <img src={svg} alt={svg} className="w-auto tab:h-[42px] mob:h-[25px] pho:h-[20px]" />
        <p className="text-white font-medium text-center tab:text-[16px] mob:text-[12px] pho:text-[10px]">{name}</p>
      </div>

      <div
        className="bg-GreenB tab:w-[135px] tab:h-[135px] mob:w-[83px] mob:h-[83px] pho:w-[78px] pho:h-[78px] rounded-[10px] flex items-center justify-center cursor-pointer"
        onClick={handleFlip}
      >
        <CircularProgressbarWithChildren
        className="tab:w-[105px] tab:h-[105px] pho:w-[65px] pho:h-[65px] mob:w-[65px] mob:h-[65px] text-white"
        value={level}
        text={`${level}%`}
        strokeWidth={10}
        styles={buildStyles({
          strokeLinecap: "butt",
          textColor: "hsl(163.469, 100%, 38%)",
          pathColor: "hsl(209.412, 57%, 18%)",
          trailColor: "white",
        })}
      >
        <div className="tab:text-[20px] mob:text-[16px] pho:mt-0 mob:mt-[-6px] font-bold text-Blue1">{`${level}%`}</div>
        
        <RadialSeparators
          count={10}
          style={{
            background: "hsl(163.469, 100%, 38%)",
            width: "2px",
            height: `${13}%`,
          }}
        />
      </CircularProgressbarWithChildren>
      </div>
    </ReactCardFlip>
  );
};

export default FlipCard;
