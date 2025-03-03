"use client";
import React from "react";
import HeroContent from "../submain/HeroContent";
import AnimatedBackground from "../ui/AnimatedBackground";

const Hero = () => {
  return (
    <div className="relative  md:h-[700px] lg:h-[800px] overflow-hidden mb-5 md:mb-0 lg:mb-0">
      <AnimatedBackground />
      <div className="relative flex flex-col h-full w-full" id="about-me">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
