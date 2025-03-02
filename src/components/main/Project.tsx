"use client";
import React from "react";
import { Timeline } from "../ui/TimeLine";
import Projects, { TProjectContent } from "../submain/ProjectContent";

function TimelineDemo() {
  const projectsData: (TProjectContent & { year: string })[] = [
    {
      year: "2024",
      title: "Warehouse management system of garment factory",
      description:
        "An application designed to manage processes in a garment-related warehouse.",
      link: "https://github.com/Garment-WMS",
      technologies: ["Vue.js", "Spring WebFlux", "TailwindCSS"],
      image: [
        "/projects/garment/1.png",
        "/projects/garment/2.png",
        "/projects/garment/3.png",
      ],
      isInprogress: true,
      index: 0,
    },
  ];


  const data = projectsData.map((item) => ({
    title: item.year,
    content: <Projects project={item} />,
  }));
  return (
    <div className="w-full h-full ">
      {/* <Projects project={item} /> */}
      <Timeline data={data} />
    </div>
  );
}
export default TimelineDemo;
