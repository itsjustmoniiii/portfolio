import React from "react";
import Image from "next/image";
import { technologies } from "@/constants";
import BallCanvas from "./canvas/Ball";

const Skills = () => {
  return (
    <section
      id="skills"
      className="section w-full flex flex-col justify-center px-12 bg-[#161616]"
    >
      <div>
        <p className="sm:text-[18px] text-[14px] text-[#a3a3a3] uppercase tracking-wider">
          what I have experience in
        </p>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-700 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-3">
          Skills
        </h2>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mx-auto w-max-4xl">
        {technologies.map((technology) => (
          <div
            className="w-28 h-28 flex flex-col items-center"
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
            <p className="text-white">{technology.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
