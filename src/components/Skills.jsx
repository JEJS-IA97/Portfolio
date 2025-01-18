import FlipCard from "./Card";
import data from "../../data.json"
import Background from "../assets/images/Background-01.jpg"

const Skills = () => {

    const skills = data.skills.slice(0,15);

    return(
    <div className="font-roboto relative h-auto w-full flex overflow-hidden mt-[-1px]">
      <img
        src={Background}
        alt="Background Image"
        className="w-full h-full z-0 absolute inset-0 object-cover"
      />
        <div className="relative flex z-10 flex-col items-center w-full lap:p-[80px] desk1:p-[100px] mob:p-[40px] pho:p-[20px] desk2:p-[120px] tab:p-[60px] gap-y-[40px] desk3:p-[140px] justify-center">
            <h2 className="text-[24px] desk1:text-[26px] font-bold text-white">My Skills</h2>
            <div className="grid lap:grid-cols-5 tab:grid-cols-4 pho:grid-cols-3 mob:gap-[25px] pho:gap-[20px] tab:gap-[32px] lap:gap-[40px] desk3:tab:grid-cols-6">
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