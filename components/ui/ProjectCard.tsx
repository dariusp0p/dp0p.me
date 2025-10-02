import React from "react";
import ThumbnailCarousel from "./ThumbnailCarousel";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  images: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  images,
  link,
}) => {
  return (
    <div className="bg-card rounded-xl shadow-xl p-4 flex flex-col max-w-xl mx-auto mb-8">
      <ThumbnailCarousel images={images} alt={title} />
      <h3 className="text-2xl font-bold mb-2 text-card-foreground">{title}</h3>
      <p className="text-base mb-3 text-card-foreground">{description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {tech.map((t, idx) => (
          <span
            key={idx}
            className="bg-neutral-200 dark:bg-neutral-700 text-xs px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block text-blue-600 font-semibold hover:underline"
      >
        Go to page &rarr;
      </a>
    </div>
  );
};

export default ProjectCard;
