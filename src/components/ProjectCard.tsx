import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  techs: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link, techs }) => {
  return (
    <article className="bg-white h-[450px] rounded-lg shadow-3xl p-6 flex flex-col w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-3xl font-bold text-slate-800">{title}</h3>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-xl text-slate-600 hover:text-green-600">
          <i className="bx bx-link-external"><FaExternalLinkAlt /></i>
        </a>
      </div>

      <p className="text-gray-700 text-base mb-4">{description}</p>

      <img src={image} alt={title} className="rounded-md h-48 object-cover mb-4" />

      <div className="flex justify-center gap-6 mt-auto">
        {techs.map((tech, index) => (
          <img key={index} src={`/svg/${tech}`} alt="tech-logo" className="w-7 h-7" />
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
