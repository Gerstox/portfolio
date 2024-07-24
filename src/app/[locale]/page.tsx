import AboutMe from "@/components/AboutMe";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between bg-white dark:bg-gray-900 py-20">
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
      {/* Falta página de todos los proyectos */}
      {/* Falta página de todas las certificaciones */}
      {/* Falta desplegar en Internet Vercel o GithubPages} */}
    </main>
  );
}
