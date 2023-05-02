import React from "react";
import { motion } from "framer-motion";
import { projects } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";
import "react-vertical-timeline-component/style.min.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="section w-full flex flex-col justify-center px-12 "
    >
      <div>
        <p className="sm:text-[18px] text-[14px] text-[#a3a3a3] uppercase tracking-wider">
          a small insight
        </p>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-700 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects
        </h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-[#b4b0b0] text-[17px] max-w-3xl leading-[30px]">
          The following two projects showcase my skills through real-world
          examples. When you click on a project a modal opens where the project
          is described. The programming project includes a link to the live
          demo. The design project includes mockups of the most important
          screens.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
