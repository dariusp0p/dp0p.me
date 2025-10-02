import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Hero from "@/components/ui/sections/Hero";
import Skills from "@/components/ui/sections/Skills";
import Projects from "@/components/ui/sections/Projects";
import Footer from "@/components/ui/Footer";

const navItems = [
  {
    name: "Home",
    link: "#hero",
  },
  {
    name: "About Me",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "AddPoster",
    link: "/add-poster",
  },
];

export default function Home() {
  return (
    <main>
      <FloatingNav navItems={navItems} />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
