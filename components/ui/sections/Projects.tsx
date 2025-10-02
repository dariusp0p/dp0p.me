import React from "react";
import ProjectCard from "../ProjectCard";

const projects = [
  {
    title: "Desktop Application - AddPoster",
    description:
      "Cross-platform desktop app to automate posting in Facebook groups. Features custom HWID-bound license manager, monthly expiry, code obfuscation, auto-update, and packaged for Windows/macOS.",
    tech: [
      "Python",
      "Selenium WebDriver",
      "PyQt",
      "SQLite",
      "PyInstaller",
      "Inno Setup",
    ],
    images: [
      "/projects/AddPoster/demo_1.png",
      "/projects/AddPoster/demo_2.png",
      "/projects/AddPoster/demo_3.png",
      "/projects/AddPoster/demo_4.png",
      "/projects/AddPoster/demo_6.png",
    ],
    link: "https://github.com/dariusp0p/addposter",
  },
  {
    title: "Python Application - HotelSimulator",
    description:
      "Python app with layered architecture, drag-and-drop floor canvas, advanced reservation checks, hotel occupancy simulator, timeline, statistics, and 3D graph.",
    tech: ["Python", "Software Architecture", "PyQt", "SQLite"],
    images: [
      "/projects/HotelSimulator/demo_1.png",
      "/projects/HotelSimulator/demo_2.png",
      "/projects/HotelSimulator/demo_3.png",
      "/projects/HotelSimulator/demo_4.png",
    ],
    link: "https://github.com/dariusp0p/hotelsimulator",
  },
  {
    title: "Full-stack Website Application - Mindify",
    description:
      "Hackathon project: Django app for real-time group learning, room creation, and AI integration. Built with a team during ITEC Hackathon.",
    tech: [
      "Python",
      "Django",
      "Bootstrap",
      "Project Management",
      "Team Coordination",
    ],
    images: [
      "/projects/Mindify/demo_1.png",
      "/projects/Mindify/demo_2.png",
      "/projects/Mindify/demo_3.png",
      "/projects/Mindify/demo_4.png",
      "/projects/Mindify/demo_5.png",
    ],
    link: "https://github.com/dariusp0p/mindify",
  },
  {
    title: "Full-stack Website - Forever Living Products Team",
    description:
      "Presentation website with authentication, ready for video tutorial integration. Collaborated on visual design and brand identity, including team logo.",
    tech: [
      "Web Development",
      "Web Design",
      "HTML5",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "Client Work",
    ],
    images: [
      "/projects/ForeverWebsite/demo_1.png",
      "/projects/ForeverWebsite/demo_2.png",
      "/projects/ForeverWebsite/demo_3.png",
      "/projects/ForeverWebsite/demo_4.png",
    ],
    link: "https://github.com/dariusp0p/flp-website",
  },
  {
    title: "Personal Portfolio Website",
    description: "This very website! :)",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    images: ["/projects/Portfolio/demo_1.png"],
    link: "https://dp0p.me",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center bg-background p-4 lg:p-64 lg:pt-10 lg:pb-16"
    >
      <h2 className="text-5xl font-bold mb-10 text-left w-full max-w-4xl mx-auto">
        My Projects
      </h2>
      <div className="grid gap-8 w-full max-w-4xl mx-auto grid-cols-1 md:grid-cols-2 2xl:grid-cols-3">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            tech={project.tech}
            images={project.images}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
