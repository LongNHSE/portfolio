/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/libs/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { HoverBorderGradient } from "../ui/HoverGradientBadge";
const HeroContent = () => {
  const handleDownload = () => {
    // Replace with your actual PDF file URL or local path
    const pdfUrl = "/intern-resume.pdf";

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "intern-resume.pdf"; // Updated the download file name for clarity
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex items-center justify-center md:mt-32  "
    >
      <div className="h-full w-full flex flex-col gap-3 justify-center m-auto text-center items-center">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box px-[10px] py-1 border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[25px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 text-[70px] font-bold text-white max-w-[1000px] w-auto h-auto"
        >
          <span>
            Hi,I'm
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Nguyen Huy Long
            </span>
          </span>
        </motion.div>

        <motion.div variants={slideInFromLeft(0.6)} className={` w-full`}>
          <div className=" flex justify-center text-center">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="div"
              className="bg-inherit text-white flex items-center space-x-2"
            >
              <span className="relative flex h-3 w-3 mr-2 ">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-full w-full bg-green-500"></span>
              </span>
              <span>Available for work</span>
            </HoverBorderGradient>
          </div>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-2xl text-gray-400 my-1 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website and
          Software development. Check out my projects and skills.
        </motion.p>
        <div className="flex gap-x-6">
          <motion.button
            variants={slideInFromLeft(1)}
            whileHover={{ y: -5 }} // Hiệu ứng hover đúng cách với motion
            transition={{ duration: 0.3 }}
            className="button-primary-2 text-center text-white cursor-pointer rounded-lg max-w-[200px] min-w-[120px]"
          >
            <a href="#contact">Contact</a>
          </motion.button>

          <motion.button
            onClick={handleDownload}
            variants={slideInFromRight(1)}
            whileHover={{ y: -5 }} // Hiệu ứng hover
            transition={{ duration: 0.3 }}
            className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold"
          >
            <span>My Resume</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
