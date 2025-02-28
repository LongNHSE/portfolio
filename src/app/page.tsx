import { TracingBeamDemo } from "@/components/main/Demo";
import Hero from "@/components/main/Hero";
import WorkExperience from "@/components/main/WorkExperience";

export default function Home() {
  return (
    <div>
      <header className="h-10"></header>
      <main className="flex flex-col justify-center min-h-screen py-2">
        <Hero />
        <div className="section-separator"></div>
        <WorkExperience />
        <div className="section-separator"></div>
W
      </main>
      <footer></footer>
    </div>
  );
}

