import { FloatingNav } from "@/components/ui/floating-navbar";
import Hero from "@/components/ui/hero";

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
      <section
        id="about"
        className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              Hello! I'm Darius Pop, a developer with a passion for creating
              elegant solutions to complex problems.
            </p>
            <p className="text-lg mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vel est vel nisl finibus fermentum. Sed euismod, dui quis aliquam
              malesuada, nisi nunc ultricies nunc, vitae lacinia nisi nisl non
              nunc.
            </p>
            <p className="text-lg">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Donec vel magna eget massa tristique
              tempor. Cras efficitur, ligula vitae efficitur feugiat, nisi odio
              aliquam nisl, vel finibus nulla mauris vel ex.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
