"use client";
import React from "react";
import HeroContent from "../submain/HeroContent";
import AnimatedBackground from "../ui/AnimatedBackground";

const Hero = () => {
  return (
    <div className="relative h-[700px] overflow-hidden">
      <AnimatedBackground />
      <div className="relative flex flex-col h-full w-full" id="about-me">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
