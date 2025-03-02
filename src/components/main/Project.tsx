"use client";
import React from "react";
import { Timeline } from "../ui/TimeLine";
import Projects, { TProjectContent } from "../submain/ProjectContent";

function TimelineDemo() {
  const projectsData: (TProjectContent & { year: string })[] = [
    {
      year: "2024",
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
    {
      year: "2024",
      positions: ["Backend Developer", "Team Leader"],
      title: "TogetherList",
      description:
        "TogetherList is a minimalist website designed to manage to-do lists. Aiming to reduce unnecessary operations.",
      link: "https://github.com/LongNHSE/togetherlist-be",
      possibility: [
        "Developed a task management website implementing Kanban board methodology, facilitating workflow organization and processing 50+ real user transactions.",
        "Integrated the Notification feature utilizing background job functionality.",
        "Deploy server using AWS services and Nginx for reverse proxy.",
      ],
      technologies: [
        "NestJS",
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Nginx",
        "EC2",
        "Payos Integration",
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
    {
      year: "2024",
      positions: ["Backend Developer", "Team Leader"],
      title: "TogetherList",
      description:
        "TogetherList is a minimalist website designed to manage to-do lists. Aiming to reduce unnecessary operations.",
      link: "https://github.com/LongNHSE/togetherlist-be",
      possibility: [
        "Developed a task management website implementing Kanban board methodology, facilitating workflow organization and processing 50+ real user transactions.",
        "Integrated the Notification feature utilizing background job functionality.",
        "Deploy server using AWS services and Nginx for reverse proxy.",
      ],
      technologies: [
        "NestJS",
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Nginx",
        "EC2",
        "Payos Integration",
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
    {
      year: "2024",
      positions: ["Frontend Developer","Backend Developer", "Team Leader"],
      title: "TogetherList",
      description:
        "TogetherList is a minimalist website designed to manage to-do lists. Aiming to reduce unnecessary operations.",
      link: "https://github.com/LongNHSE/togetherlist-be",
      possibility: [
        "Developed a task management website implementing Kanban board methodology, facilitating workflow organization and processing 50+ real user transactions.",
        "Integrated the Notification feature utilizing background job functionality.",
        "Deploy server using AWS services and Nginx for reverse proxy.",
      ],
      technologies: [
        "NestJS",
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Nginx",
        "EC2",
        "Payos Integration",
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
  ];

  const data = projectsData.map((item, index) => ({
    title: item.year,
    content: (
      <Projects
        project={{
          ...item,
          index,
        }}
      />
    ),
  }));
  return (
    <div className="w-full h-full ">
      <Timeline data={data} />
    </div>
  );
}
export default TimelineDemo;
