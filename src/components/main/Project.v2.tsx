"use client";
import React from "react";
import { Timeline } from "../ui/TimeLine";
import Projects, { TProjectContent } from "../submain/ProjectContent";

function TimelineDemo() {
  const projectsData: { year: string; projects: TProjectContent[] }[] = [
    {
      year: "2024",
      projects: [
        {
          positions: ["Backend Developer", "Team Leader"],
          title: "Warehouse management system of garment factory",
          description:
            "An application designed to manage processes in a garment-related warehouse.",
          link: "https://github.com/Garment-WMS",
          possibility: [
            "Implemented the Excel import feature with built-in validation for file content.",
            "Managed the stocktaking process flow.",
            "Developed comprehensive statistics for all entities.",
          ],
          technologies: [
            "React",
            "NestJS",
            "PostgreSQL",
            "TypeScript",
            "Redis",
            "Socket.io",
          ],
          image: [
            "/projects/garment/1.png",
            "/projects/garment/2.png",
            "/projects/garment/3.png",
          ],
          isInprogress: true,
          index: 0,
        },
      ],
    },
  ];

  const data = projectsData.map((project, index) => ({
    year: project.year,
    title: `${project.year}`,
    content: project.projects.map((project) => (
      <Projects key={project.title} project={project} />
    )),
  }));
  return (
    <div className="w-full h-full ">
      <Timeline data={data} />
    </div>
  );
}
export default TimelineDemo;
