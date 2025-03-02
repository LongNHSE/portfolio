import Hero from "@/components/main/Hero";
import Project from "@/components/main/Project";
import WorkExperience from "@/components/main/WorkExperience";

export default function Home() {
  return (
    <div>
      <header className="h-10"></header>
      <main className="flex flex-col justify-center min-h-screen py-2">
        <Hero />
        <div className="section-separator "></div>
        <WorkExperience />
        <div className="section-separator"></div>
        <Project />
      </main>
      <footer></footer>
    </div>
  );
}

