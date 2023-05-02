import React from "react";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { experiences } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section
      id="experience"
      className="section w-full flex flex-col justify-center px-12 "
    >
      <div>
        <p className="sm:text-[18px] text-[14px] text-[#a3a3a3] uppercase tracking-wider">
          where I have gained experience
        </p>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-700 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Experience
        </h2>
      </div>

      <div className="mt-20 flex flex-col gap-10">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
