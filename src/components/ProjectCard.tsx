import Image from 'next/image';
import React, { JSX } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], // podés agregar más si querés
  display: 'swap',
});

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  techs:  JSX.Element[]
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link, techs }) => {
  
  return (
    <article className="bg-[#232323b2] backdrop-blur-2xl h-[490px] lg:h-[450px] rounded-lg shadow-3xl p-6 flex flex-col justify-between w-full max-w-md">

      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-bold text-emerald-400">{title}</h3>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-xl text-slate-600 hover:text-green-600">
          <i><FaExternalLinkAlt /></i>
        </a>
      </div>

      <p className={`${dmSans.className}text-[#e5e5e5] text-base`}>{description}</p>

      <figure className='overflow-hidden rounded-lg'>
        <Image src={`/images/${image}`} alt={title} 
          className="rounded-md h-48 object-cover transform-scale-110 transition duration-500 hover:scale-125"
          width={1000}
          height={1000} />

      </figure>


      <div className="flex justify-center gap-[6%]">
        
        {techs.map((tech, index) => (
          <span key={index} className="text-3xl">{tech}</span>
        ))}
        
      </div>
    </article>
  );
};

export default ProjectCard;
