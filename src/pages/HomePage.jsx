import {Navbar} from "../components/navbar";
import { Hero } from "../features/Presentation";
import { AboutMe } from "../features/AboutMe";
import { Technologies } from "../features/stack";
import { Projects } from "../features/Allprojects";
import { Contact } from "../features/ContactMe";
import { EducationExperience } from "../features/Experience";
import { Footer } from "../features/Footer";

export function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-secondary antialiased">
      <Navbar />
      <main>
        <section id="hero" className="scroll-mt-20">
          <Hero />
        </section>
        <section id="about" className="scroll-mt-20">
          <AboutMe />
        </section>
        <section id="technologies" className="scroll-mt-20">
          <Technologies />
        </section>
        <section id="experience" className="scroll-mt-20">
          <EducationExperience />
        </section>
        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>
        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
        <section id="footer" className="scroll-mt-20">
          <Footer />
        </section>
      </main>
    </div>
  );
}
