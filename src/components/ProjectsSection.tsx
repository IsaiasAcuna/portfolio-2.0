import { projects } from '@/data/projects'
import React from 'react'
import ProyectCard from './ProjectCard'
import TitleSection from './ui/TitleSection'
import { BiGridAlt } from 'react-icons/bi';

const ProjectsSection = () => {
  return (

    <>
    <section>

        <TitleSection title={'Proyectos'} icon={<BiGridAlt size={50} /> } />
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-stretch justify-items-stretch gap-y-[2%]">
            {projects.map((project, index) => (
            <ProyectCard key={index} {...project} />
          ))}
        </div>

    </section>

    </>


  )
}

export default ProjectsSection
