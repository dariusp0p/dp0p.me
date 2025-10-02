import React from "react";

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name }) => (
  <div className="flex flex-col items-center justify-center bg-card rounded-lg shadow transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl p-4 w-24 h-28 cursor-pointer">
    <div className="text-4xl mb-2">{icon}</div>
    <span className="text-sm font-medium text-card-foreground">{name}</span>
  </div>
);

export default SkillCard;
