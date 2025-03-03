"use client";
import React from "react";
import { Timeline } from "../ui/TimeLine";
import Projects, { TProjectContent } from "../submain/ProjectContent";
import { AnimatedGradient } from "../ui/AnimatedGradient";

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
        "Firebase",
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
      isInprogress: false,
      index: 0,
    },
    {
      year: "2024",
      positions: ["Frontend Developer", "Backend Developer", "Team Leader"],
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
        "Firebase",
        "Payos Integration",
        "Redis",
        "Socket.io",
      ],
      image: [
        "/projects/together-list/1.png",
        "/projects/together-list/2.png",
        "/projects/together-list/3.png",
        "/projects/together-list/4.png",
      ],
      isInprogress: false,
      index: 1,
    },
    {
      year: "2024",
      positions: ["Backend Developer", "Team Leader"],
      title: "Kohi Neko",
      description:
        "A Coffee Cat Cafe website allows users to easily register and book their visits by selecting a preferred date and time.",
      link: "https://dev.azure.com/SWD392-kohi-neko/kohi-neko-be",
      possibility: [
        "Design and implement authentication and authorization for both the client and server.",
        "Handle the booking table flow, including implementing a method to suggest available slots for users.",
        "Design and implement a modal component for the suggestion slot on the client side.",
        "Implement VNPay module for payment.",
      ],
      technologies: [
        "Express.js",
        "React",
        "JavaScript",
        "MongoDB",
        "VNPay Integration",
        "Firebase",
        "Redis",
        "Socket.io",
      ],
      image: [
        "/projects/kohi-neko/1.png",
        "/projects/kohi-neko/2.png",
        "/projects/kohi-neko/3.png",
        "/projects/kohi-neko/4.png",
      ],
      isInprogress: false,
      index: 2,
    },
    {
      year: "2024",
      positions: ["Fullstack Developer", "Solo Project"],
      title: "Food Blog",
      description:
        "A monorepo project about a food blog website that allows users to share their recipes and experiences.",
      link: "https://github.com/LongNHSE/food-blog-monorepo.git",
      possibility: [
        "Configured the project structure with Nx and Npm workspaces.",
        "Designed and implemented the microservices structure for project.",
        "Developed the user authentication and authorization system.",
        "Integrated the Firebase storage for image uploading.",
        "Designed and implemented the user interface.",
        "Deployed the project using Dockers and Nginx.",
      ],
      technologies: [
        "Nx",
        "NestJS",
        "Next.js",
        "TypeScript",
        "Dockers",
        "MongoDB",
        "Firebase",
        "Redis",
        "Socket.io",
      ],
      image: ["/projects/food-blog/1.jpg"],
      isInprogress: true,
      index: 3,
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
    <div className="w-full h-full flex flex-col items-center mt-10">
      <AnimatedGradient className="inline-block">
        <h2 className="text-3xl md:text-4xl font-bold text-white px-4 py-2">
          Projects
        </h2>
      </AnimatedGradient>
      <Timeline data={data} />
    </div>
  );
}
export default TimelineDemo;
