"use client";
import React, { useEffect, useState } from "react";
import { Github, Linkedin, MapPin } from "lucide-react";
import Image from "next/image";
import { Cover } from "../ui/Cover";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { ColourfulText } from "../ui/ColorfullText";
import { AnimatedGradient } from "../ui/AnimatedGradient";

type TDuolingo = {
  username: string;
  streak: number;
  languages: string;
  totalXP: number;
};

export default function AboutMe() {
  async function fetchDuolingoUserData(): Promise<TDuolingo | null> {
    const url =
      "https://www.duolingo.com/2017-06-30/users?username=HuyLong74244&fields=streak,streakData%7BcurrentStreak,previousStreak%7D%7D";

    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.error("Failed to fetch data:", response.statusText);
        return null;
      }

      const data = await response.json();
      const user = data.users[0];

      const duolingoData: TDuolingo = {
        username: user.username,
        streak: user.streak,
        languages: "Japanese",
        totalXP: user.totalXp,
      };

      return duolingoData;
    } catch (error) {
      console.error("Error fetching Duolingo data:", error);
      return null;
    }
  }

  // Sample data - replace with your actual information
  const personalInfo = {
    name: "Nguyen Huy Long",
    title: "Full-stack Developer",
    location: {
      city: "Ho Chi Minh City",
      country: "Vietnam",
      coords: [10.762622, 106.660172],
    },
    focus:
      "Currently exploring the intersection of web development and language learning technologies.",
    bio: "As a full-stack developer, I leverage my backend development skills and experience to create websites for various businesses, including warehouse management systems, e-commerce platforms, and task management tools. I have worked with technologies such as ExpressJS, NestJS, NextJS, ReactJS, PostgreSQL, MongoDB, and REST APIs, and I have also supported website deployment using AWS services.",
    social: {
      github: "https://github.com/LongNHSE",
      linkedin: "https://www.linkedin.com/in/huy-long/",
    },
  };
  const skills = [
    {
      category: "Backend",
      items: [
        "Node.js",
        "TypeScript",
        "NestJs",
        "Express.Js",
        "Java",
        "JavaSpring Boot",
        "PostgreSQL",
        "MongoDB",
        "SQL",
      ],
    },
    {
      category: "Frontend",
      items: [
        "JavaScript",
        "React",
        "NextJs",
        "Vue.Js",
        "NuxtJs",
        "Redux",

        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
    },
    {
      category: "Tools",
      items: [
        "Git",
        "GitHub",
        "Postman",
        "Docker",
        "Jira",
        "EC2",
        "Nginx",
        "Nx",
        "Firebase",
      ],
    },
  ];

  const [mounted, setMounted] = useState(false);
  const [duolingoData, setDuolingoData] = useState<TDuolingo | null>(null);

  useEffect(() => {
    setMounted(true);
    fetchDuolingoUserData().then((data) => {
      if (data) {
        setDuolingoData(data);
      }
    });
  }, []);

  if (!mounted) {
    return null;
  }
  {
    /* <div className="rounded-lg border bg-card p-4 shadow-sm">
              <p className="italic text-card-foreground">
                &ldquo;{personalInfo.focus}&rdquo;
              </p>
            </div> */
  }
  return (
    <section className="w-full py-10 md:py-10 lg:py-10 bg-background flex flex-col items-center text-gray-300">
      <AnimatedGradient className="inline-block mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white px-4 py-2">
            About Me
        </h2>
      </AnimatedGradient>
      <BentoGrid className="max-w-[1380px] mx-auto mb-10">
        <BentoGridItem className={"md:col-span-2 "}>
          <div className="space-y-1">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {personalInfo.name}
              </h1>
              <div className="flex items-center gap-x-2">
                <p className="text-xl text-muted-foreground">
                  {personalInfo.title}
                </p>
                <span className="text-xl">|</span>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>
                    {personalInfo.location.city},{" "}
                    {personalInfo.location.country}
                  </span>
                </div>
                <span className="text-xl">|</span>
                <div className="">
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    aria-label="GitHub"
                  >
                    <Github />
                  </a>
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    aria-label="LinkedIn"
                  >
                    <Linkedin />
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <h2 className="text-2xl font-bold">About Me</h2>
              <p className="text-muted-foreground">{personalInfo.bio}</p>
            </div>
          </div>
        </BentoGridItem>
        <BentoGridItem className={""}>
          <div className="flex flex-col gap-y-5">
            <h1 className="text-xl font-bold text-white bg-[#54D2D4]/80 rounded-md  text-center">
              My Skills
            </h1>
            <Tabs defaultValue="Backend" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6 bg-[#54D2D4]/10 rounded-md">
                {skills.map((skill) => (
                  <TabsTrigger
                    key={skill.category}
                    value={skill.category}
                    className="data-[state=active]:bg-[#54D2D4] data-[state=active]:text-white rounded-md transition duration-200"
                  >
                    {skill.category}
                  </TabsTrigger>
                ))}
              </TabsList>

              {skills.map((skill) => (
                <TabsContent
                  key={skill.category}
                  value={skill.category}
                  className="mt-0 bg"
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {skill.items.map((item) => (
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "#3B82F6",
                          color: "#FFFFFF",
                        }}
                        transition={{ duration: 0.3 }}
                        key={item}
                        className="px-3 py-1 bg-[#54D2D4]/10 text-[#54D2D4] rounded-full text-sm flex items-center justify-center text-center"
                      >
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </BentoGridItem>
        <BentoGridItem className={" md:col-span-1"}>
          <div className="bg-[#54D2D4]/80 rounded-md p-1 text-center mb-2">
            <h1 className="text-xl font-bold text-white">
              My Duolingo&apos;s Streak
            </h1>
          </div>
          <div className="">
            <div className="flex flex-col md:flex-row items-center justify-start gap-2 mb-3">
              <div>
                <Image
                  src="/doulingo.gif"
                  width={260}
                  height={340}
                  alt="Duolingo logo"
                  className="rounded-full bg-white p-1"
                />
              </div>
              <div className="w-full ">
                <div className="mb-1 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Languages: </span>
                  </div>
                  <div className="flex flex-row justify-center align-middle text-2xl">
                    <ColourfulText text="Japanese" />
                    <Image
                      src="/japan.png"
                      width={40}
                      height={10}
                      alt="japan"
                      className="my-auto ml-1"
                    />
                  </div>
                </div>
                <div className="mb-1 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Current streak:</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Cover>
                      <span className="text-green-500 text-3xl font-bold">
                        {duolingoData?.streak}
                      </span>{" "}
                      <span className=" text-3xl font-bold">days</span>{" "}
                    </Cover>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-1 shadow-sm">
              <span className="italic text-muted-foreground text-sm">
                &quot;If you improve by just 1% each day for a year, you’ll be
                <span className="font-bold text-primary">
                  {" "}
                  37 times better{" "}
                </span>
                by the end.&quot;
                <span className="block text-sm text-secondary-foreground mt-1">
                  James Clear |{" "}
                  <span className="font-medium">Atomic Habits</span>
                </span>
              </span>
            </div>
          </div>
        </BentoGridItem>
        <BentoGridItem className={" md:col-span-2"}>
          <div style={{ height: "100%", width: "100%" }}>
            <div className="bg-[#54D2D4]/80 rounded-md p-1 text-center mb-5">
              <h1 className="text-xl font-bold text-white">
                My Spotify Playlist
              </h1>
            </div>
            <iframe
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "12px",
              }}
              src="https://open.spotify.com/embed/playlist/0aXwhu7Ot8PtYfjNU0f3Ei?utm_source=generator"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </BentoGridItem>
      </BentoGrid>
    </section>
  );
}
