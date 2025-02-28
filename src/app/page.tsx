import Hero from "@/components/main/Hero";
import WorkExperience from "@/components/main/WorkExperience";

export default function Home() {
  return (
    <div>
      <header className="h-10"></header>
      <main className="flex flex-col justify-center min-h-screen py-2">
        <Hero />
        <div className="section-separator"></div>
        <WorkExperience
          company="FPT Software"
          description={["Developed scalable software solutions"]}
          endDate="2021"
          startDate="2019"
          title="Software Engineer"
          key={1}
        />
      </main>
      <footer></footer>
    </div>
  );
}

