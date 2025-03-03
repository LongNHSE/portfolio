import AboutMe from "@/components/main/AboutMe";
import Contact from "@/components/main/ContactMe";
import Hero from "@/components/main/Hero";
import Project from "@/components/main/Project";
import WorkExperience from "@/components/main/WorkExperience";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col justify-center min-h-screen py-2">
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

