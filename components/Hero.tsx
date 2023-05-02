import React from "react";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <section
      id="home"
      className="section w-full flex justify-center p-5 bg-[#121212]"
    >
      <div className="flex items-center justify-center">
        <div>
          <div className="flex flex-col z-[5]">
            <h1 className="text-white text-[70px] md:text-[90px] font-bold">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-700">
                Monika
              </span>
            </h1>
            <div className="text-[30px] md:text-[50px] text-white uppercase">
              <span className="text-white"> I am </span>
              <TypeAnimation
                sequence={["a Developer", 2000, "an UI/UX Designer", 2000]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-700 font-bold"
              />
            </div>
            <p className="mt-8 text-normal text-[16px] md:text-[20px]">
              I design and develop Websites, Web Applications
              <br className="sm:block hidden" /> as well as Mobile Applications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
