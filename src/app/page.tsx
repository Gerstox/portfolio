import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between bg-white dark:bg-gray-900">
      <Header />
      <AboutMe />
      <Projects />
      <Experience />

      <Education />
      <section id="contact"></section>
    </main>
  );
}
