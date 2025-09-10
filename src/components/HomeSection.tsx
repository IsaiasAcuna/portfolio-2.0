import React from 'react'
import { BiLogoLinkedinSquare } from 'react-icons/bi';
import Button from './ui/Button';
import { FaGithub } from 'react-icons/fa';

const HomeSection = () => {
  return (
    <section
      id="Inicio"
      className="w-full h-[70vh] pt-[10%] flex flex-col items-center mb-[10%]"
    >

      <figure className="image flex flex-col items-center">
        <img
          src="/face.webp"
          alt="Foto de Isaías"
          className="w-[200px] h-[200px] rounded-full object-cover"
        />
      </figure>

      <div className="text-center">
        <h1 className="text-[65px] m-0 text-black">Hello! I'm Acuña Isaías</h1>
        <h2 className="text-[40px] font-bold text-green-600 mt-[-1%] tracking-[-1.5px]">
          Desarrollador Web FullStack
        </h2>

        <div className="mt-[4%] flex justify-center gap-[5%]">
          <button className="text-[20px] border border-gray-400 rounded-[10px] px-2 py-1 bg-transparent transition duration-200 hover:bg-green-700">
            <a
              href="#"
              className="flex items-center font-semibold text-[var(--first-color-font)] transition duration-200 hover:text-white"
            >
              <i className="bx bx-mail-send text-black pr-[5px] transition duration-200 hover:text-white" />
              Contáctame
            </a>
          </button>
          <button className="text-[20px] border border-gray-400 rounded-[10px] px-2 py-1 bg-transparent transition duration-200 hover:bg-green-700">
            <a
              href="#"
              className="flex items-center font-semibold text-[var(--first-color-font)] transition duration-200 hover:text-white"
            >
              <i className="bx bxl-linkedin-square text-black pr-[5px] transition duration-200 hover:text-white"><BiLogoLinkedinSquare /></i>
              LinkedIn
            </a>
          </button>
          <Button title='GitHub' icon={<FaGithub/>} link={'https://github.com/isaiasacuna'} />
        </div>

        <p className="mt-[4%] text-[1.4em] text-slate-700">
          Especializado en Stack MERN.
        </p>
      </div>

      
    </section>
  )
}

export default HomeSection
