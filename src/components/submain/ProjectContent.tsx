"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Share2, Wrench } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/Carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect, useCallback } from "react";
import { cn } from "@/libs/utils";
import { Ribbon } from "../ui/Ribbon";

export type TProjectContent = {
  positions: string[];
  title: string;
  description: string;
  possibility?: string[];
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

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );
  return (
    <section id="projects" className="">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center "
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        ></motion.div>
        <div className="space-y-10">
          <motion.div
            key={project.title}
            className="flex relative  overflow-hidden flex-col min-h-[470px] justify-start lg:flex-row gap-8 bg-gray-700  dark:bg-gray-700 rounded-2xl p-6 max-w-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: project.index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* <div className="relative h-64 overflow-hidden rounded-lg  p-6"> */}

            {project.isInprogress && (
              <Ribbon
                variant={"default"}
                position={"top-right"}
                className="z-10"
              >
                <Wrench color="black" className="mr-1" size={18} />
                <div className="span text-black">In Progress </div>
              </Ribbon>
            )}
            {/* </div> */}
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
              <div className="flex flex-wrap gap-2 mb-6">
                {project.positions.map((position) => (
                  <motion.span
                    key={position}
                    className="px-3 py-1 bg-[#252525] text-gray-300 rounded-full text-sm"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#3B82F6",
                      color: "#FFFFFF",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {position}
                  </motion.span>
                ))}
              </div>
              <motion.p
                className="text-gray-300 mb-1"
                whileHover={{ color: "#60A5FA", x: 5 }}
                transition={{ duration: 0.3 }}
              >
                {project.description}
              </motion.p>

              {project.possibility && (
                <div className="mb-6">
                  {/* <h4 className="text-lg font-bold text-white mb-2">
                    Possibility
                  </h4> */}
                  <ul className="list-disc list-inside text-gray-300">
                    {project.possibility.map((pos) => (
                      <motion.li
                        key={pos}
                        className="text-gray-300"
                        whileHover={{ color: "#60A5FA", x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {pos}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap justify-start items-start gap-2 mb-6 w-full max-w-full rounded-lg">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-[#54D2D4]/10 text-[#54D2D4] rounded-full text-sm flex-shrink-0"
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
              className={`lg:w-1/2  flex flex-col my-auto  ${
                project.index % 2 === 1 ? "lg:order-2" : ""
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Carousel
                className="w-full max-w-full"
                opts={{ loop: true }}
                plugins={[
                  Autoplay({
                    delay: 5000,
                  }),
                ]}
                setApi={setApi}
              >
                <CarouselContent>
                  {project.image.map((imgSrc, index) => (
                    <CarouselItem
                      key={index}
                      className=" flex justify-center items-center w-[350px] h-[350px] "
                    >
                      <div className="relative w-full max-w-[1200px] h-[500px] md:max-w-[900px] md:h-[400px] sm:max-w-[600px] sm:h-[300px] flex justify-center items-center">
                        <Image
                          src={imgSrc}
                          alt={project.title}
                          layout="fill"
                          objectFit="contain"
                          className="rounded-lg z-50"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
              </Carousel>
              <div className="flex justify-center gap-2 mt-4">
                {project.image.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-3 h-3 rounded-full transition-colors border-[1px] border-white",
                      current === index
                        ? "bg-gray-50"
                        : "bg-muted-foreground/30"
                    )}
                    onClick={() => onDotButtonClick(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
