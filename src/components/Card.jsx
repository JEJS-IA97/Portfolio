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
        className="bg-Blue2 w-[137px] h-[137px] rounded-[10px] flex flex-col items-center justify-center gap-y-[20px] cursor-pointer"
        onClick={handleFlip}
      >
        <img src={svg} alt={name} className="w-auto h-[42px]" />
        <p className="text-white font-medium text-center leading-5">{name}</p>
      </div>

      <div
        className="bg-GreenB w-[137px] h-[137px] rounded-[10px] flex items-center justify-center cursor-pointer"
        onClick={handleFlip}
      >
        <CircularProgressbarWithChildren
        className="w-[105px] h-[105px] text-white"
        value={level}
        text={`${level}%`}
        strokeWidth={12}
        styles={buildStyles({
          strokeLinecap: "butt",
          textColor: "hsl(163.469, 100%, 38%)",
          pathColor: "hsl(209.412, 57%, 18%)",
          trailColor: "white",
        })}
      >
        <div className="text-[20px] mt-[-6px] font-bold text-Blue1">{`${level}%`}</div>
        
        <RadialSeparators
          count={10}
          style={{
            background: "hsl(163.469, 100%, 38%)",
            width: "2px",
            height: `${12}%`,
          }}
        />
      </CircularProgressbarWithChildren>
      </div>
    </ReactCardFlip>
  );
};

export default FlipCard;
