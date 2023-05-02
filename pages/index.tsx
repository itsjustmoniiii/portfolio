import Head from "next/head";
import Image from "next/image";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import NavBar from "@/components/NavBar";
import Stars from "@/components/Stars";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>
      <div className="h-screen relative z-0 bg-black text-white">
        <NavBar />
        <Hero />
        <AboutMe />
        <Experience />
        <Skills />
        <Projects />

        <Stars />
      </div>
    </>
  );
}
