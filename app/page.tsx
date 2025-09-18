import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Navigation } from "@/components/navigation";
import { ScrollFloat } from "@/components/scroll-float";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ScrollFloat>
        <Hero />
      </ScrollFloat>
      <ScrollFloat delay={200} direction="up">
        <About />
      </ScrollFloat>
      <ScrollFloat delay={300} direction="left">
        <Skills />
        <ScrollFloat delay={300} direction="left">
          <Education />
        </ScrollFloat>
      </ScrollFloat>
      <ScrollFloat delay={300} direction="right">
        <Projects />
      </ScrollFloat>
      <ScrollFloat delay={400} direction="up">
        <Experience />
      </ScrollFloat>
      <ScrollFloat delay={500} direction="up">
        <Contact />
      </ScrollFloat>
    </main>
  );
}
