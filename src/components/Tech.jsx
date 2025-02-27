import React from "react";
import { BallCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-8">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
        {technologies.map((technology, index) => (
          <div
            key={technology.name}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center"
          >
            {index < 5 ? (
              // Display first 5 technologies as Three.js balls
              <BallCanvas icon={technology.icon} />
            ) : (
              // Display other technologies as normal icons in gray circles
              <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center p-3">
                <img src={technology.icon} alt={technology.name} className="w-3/4 h-3/4 object-contain" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
