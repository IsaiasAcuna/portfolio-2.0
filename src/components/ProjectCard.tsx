import Image from 'next/image';
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
    <article className="bg-[#232323] h-[450px] rounded-lg shadow-3xl p-6 flex flex-col justify-between w-full max-w-md">

      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-bold text-white">{title}</h3>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-xl text-slate-600 hover:text-green-600">
          <i><FaExternalLinkAlt /></i>
        </a>
      </div>

      <p className="text-[#bdbcbc] text-base">{description}</p>

      <Image src={`/images/${image}`} alt={title} 
        className="rounded-md h-48 object-cover"
        width={1000}
        height={1000} />

      <div className="flex justify-center gap-[6%]">
        {techs.map((tech, index) => (
          <img key={index} src={`/svg/${tech}`} alt="tech-logo" className="w-7 h-7" />
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
