import FlipCard from "./Card";
import data from "../../data.json"
import Background from "../assets/images/Background-01.jpg"

const Skills = () => {

    const skills = data.slice(0,15);

    return(
    <div className="relative h-[730px] w-full flex overflow-hidden">
      <img
        src={Background}
        alt="Background Image"
        className="w-full h-auto z-0 absolute inset-0 object-cover"
      />
        <div className="relative flex z-10 flex-col items-center w-full p-[80px] gap-y-[40px]">
            <h2 className="text-[24px] font-bold text-white">Skills</h2>
            <div className="grid grid-cols-5 gap-[40px]">
              {skills.map(object => (
                <div key={object.id}>
                  <FlipCard
                    svg = {object.svg}
                    name = {object.name}
                    level = {object.level}
                  />

                </div>
              ))}
            </div>

        </div>
        </div>
    )
}

export default Skills;