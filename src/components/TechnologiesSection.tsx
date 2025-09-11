import React from 'react'
import TitleSection from './ui/TitleSection'
import { FaCode } from 'react-icons/fa6';

const technologies = [
  'html5.svg',
  'css_old.svg',
  'javascript.svg',
  'typescript.svg',
  'bootstrap.svg',
  'git.svg',
  'github-light.svg',
  'nodejs.svg',
  'react_light.svg',
  'nextjs_icon_dark.svg',
  'tailwindcss.svg',
  'mongodb.svg',
  'expressjs.svg',
]

const TecnologiesSection = () => {
  return (
    <section>
      <TitleSection title="Tecnologias" icon={<FaCode size={40} />} />

      <div className="grid grid-cols-7 justify-items-center ">
        {technologies.map((tecnology, index) => <img key={index} src={`/svg/${tecnology}`} className='w-20 h-20 mb-[40%]' />)}
      </div>
    </section>
  )
}

export default TecnologiesSection
