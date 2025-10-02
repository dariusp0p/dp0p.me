import React from "react";
import ProjectCard from "../ProjectCard";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS", "React"],
    images: ["/portfolio1.png", "/portfolio2.png"],
    link: "https://dp0p.me",
  },
  {
    title: "Task Manager",
    description: "A cross-platform desktop app for managing tasks and todos.",
    tech: ["Electron", "React", "SQLite"],
    images: ["/task1.png", "/task2.png"],
    link: "https://github.com/dariusp0p/task-manager",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="min-h-screen flex flex-col items-center bg-background p-4 lg:p-64 lg:pt-10 lg:pb-16">
      <h2 className="text-5xl font-bold mb-10 text-left w-full max-w-4xl mx-auto">
        My Projects
      </h2>
      <div className="grid gap-8 w-full max-w-4xl mx-auto grid-cols-1 md:grid-cols-2">
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
