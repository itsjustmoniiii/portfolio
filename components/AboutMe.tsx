import React from "react";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="section w-full grid lg:grid-cols-2 grid-cols-1 gap-4 items-center px-12 py-10 bg-[#161616]"
    >
      <div className="flex flex-col">
        <div>
          <p className="sm:text-[18px] text-[14px] text-[#a3a3a3] uppercase tracking-wider">
            A little bit about me
          </p>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-700 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            About Me
          </h2>
        </div>
        <p className="mt-5 lg:text-[17px] text-[16px] max-w-3xl leading-[30px]">
          My journey began in high school. Here my passion for creativity
          developed in different fields - programming as well as designing. It
          was immediately clear to me that my heart was in these areas and that
          I wanted to pursue this career path. So I started my bachelor studies
          in &quot;Media Technology&quot; at the University of Applied Sciences
          in St.Pölten and to this day I don&apos;t regret for a second that I
          took this path. During this time, I was able to learn an incredible
          amount and am already looking forward to my master&apos;s degree.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img src="/assets/me.JPG" alt="" className="" />
      </div>
    </section>
  );
};

export default AboutMe;
