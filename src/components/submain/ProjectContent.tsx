"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Share2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "../ui/Carousel";

export type TProjectContent = {
  title: string;
  description: string;
  link: string;
  technologies: string[];
  image: string[];
  isInprogress?: boolean;
  index: number;
};

const Projects = ({ project }: { project: TProjectContent }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        ></motion.div>
        <div className="space-y-20">
          <motion.div
            key={project.title}
            className="flex flex-col lg:flex-row gap-8 items-center bg-[#1A1A1A] rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: project.index * 0.1 }}
          >
            <div
              className={`lg:w-1/2 ${
                project.index % 2 === 1 ? "lg:order-1" : ""
              }`}
            >
              <motion.h3
                className="text-2xl font-bold text-white mb-4"
                whileHover={{ color: "#60A5FA" }}
                transition={{ duration: 0.3 }}
              >
                {project.title}
              </motion.h3>
              <motion.p
                className="text-gray-400 mb-6"
                whileHover={{ color: "#9CA3AF" }}
                transition={{ duration: 0.3 }}
              >
                {project.description}
              </motion.p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-[#252525] text-gray-300 rounded-full text-sm"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#3B82F6",
                      color: "#FFFFFF",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Share2 className="w-4 h-4 mr-2" />
                View Project
              </motion.a>
            </div>
            <motion.div
              className={`lg:w-1/2 ${
                project.index % 2 === 1 ? "lg:order-2" : ""
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Carousel className="w-full max-w-full " opts={{ loop: true }}>
                <CarouselContent>
                  {project.image.map((imgSrc, index) => (
                    <CarouselItem
                      key={index}
                      className=" flex justify-center items-center w-[350px] h-[300px]"
                    >
                      <div className="relative w-full max-w-[1200px] h-[500px] md:max-w-[900px] md:h-[400px] sm:max-w-[600px] sm:h-[300px] flex justify-center items-center">
                        <Image
                          src={imgSrc}
                          alt={project.title}
                          layout="fill"
                          objectFit="contain"
                          className="rounded-lg"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
              </Carousel>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
