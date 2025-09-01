import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-8">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
        {technologies.map((technology) => (
          <div 
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center bg-gray-800 rounded-full"
            key={technology.name}
          >
            <img 
              src={technology.icon} 
              alt={technology.name} 
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
