"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimatedGradient } from "../ui/AnimatedGradient";

const experiences = [
  {
    title: "Fullstack Developer Intern",
    icon: "./icon/fpt-icon.jpeg",
    company: "FPT Software",
    location: "Ho Chi Minh City, Vietnam",
    period: "Sep 2023 – Dec 2023",
    description: [
      "Completed a 2-week training course and developed a milestone project, 'Food Ordering Website,' using Vue.js and Spring WebFlux.",
      "Developed a Checklist website using Azure Functions and React.js to standardize software development processes.",
      "Enhanced the UI/UX of the PDFHandy tool website and implemented filter logic for PDF pages.",
      "Design and implement new features using Azure Functions for the Checklist website.",
    ],

    tools:
      "Nextjs, Vue.js, Spring WebFlux, React.js, Azure Functions, HTML, CSS, JavaScript",
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-10 ">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12 "
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <AnimatedGradient className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-white px-4 py-2">
              Work Experience
            </h2>
          </AnimatedGradient>
        </motion.div>
        <div className="max-w-4xl mx-auto relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className="mb-8 bg-gray-700 rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-blue-700 rounded-bl-full z-0 opacity-50 
                transition-transform duration-300 group-hover:scale-110"
              ></motion.div>
              <motion.h3
                className="text-xl font-semibold text-blue-400 mb-4"
                whileHover={{ color: "#60A5FA" }}
                transition={{ duration: 0.3 }}
              >
                {exp.title}
              </motion.h3>
              <div className="flex flex-row justify-start mb-4 items-center">
                <motion.img
                  src={exp.icon}
                  alt={exp.company}
                  className="w-9 h-9 rounded-full mr-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.p
                  className="text-gray-300 mb-1"
                  whileHover={{ color: "#9CA3AF" }}
                  transition={{ duration: 0.3 }}
                >
                  {exp.company}
                </motion.p>
              </div>
              <motion.p
                className="text-sm text-gray-400 mb-4"
                whileHover={{ color: "#D1D5DB" }}
                transition={{ duration: 0.3 }}
              >
                {exp.location} | {exp.period}
              </motion.p>
              <ul className="list-disc pl-5 text-gray-300 mb-4">
                {exp.description.map((item, i) => (
                  <motion.li
                    key={i}
                    className="mb-2"
                    whileHover={{ color: "#60A5FA", x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
              <motion.p
                className="text-sm text-gray-400"
                whileHover={{ color: "#9CA3AF" }}
                transition={{ duration: 0.3 }}
              >
                Tools: {exp.tools}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
