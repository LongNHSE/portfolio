import AboutMe from "@/components/main/AboutMe";
import Contact from "@/components/main/ContactMe";
import Hero from "@/components/main/Hero";
import Project from "@/components/main/Project";
import Analytics from "@/components/main/TrackerGoogle";
import WorkExperience from "@/components/main/WorkExperience";
import { Analytics as Analytics2 } from "@vercel/analytics/react";
export default function Home() {
  return (
    <div>
      <main className="flex flex-col justify-center min-h-screen py-2">
        <Analytics2 />
        <Analytics />
        <Hero />
        <div className="section-separator" id="work-experience"></div>
        <WorkExperience />
        <div className="section-separator" id="projects"></div>
        <Project />
        <div className="section-separator" id="about"></div>
        <AboutMe />
        <div className="section-separator" id="contact"></div>
        <Contact />
      </main>
      <footer></footer>
    </div>
  );
}
