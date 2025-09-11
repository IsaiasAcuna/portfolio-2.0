import React from 'react'
import { BiHome } from 'react-icons/bi';
import { BiGridAlt } from 'react-icons/bi';
import { BiSolidFace } from 'react-icons/bi';

const Header = () => {
  return (
    <header className="fixed top-0 w-full flex justify-center z-[100] bg-transparent">
      <nav className="my-[0.5%] flex justify-center backdrop-blur-xl shadow-[0px_8px_9px_-2px_rgba(0,0,0,0.25)] rounded-[10px]">
        <a
          href="#Inicio"
          className="text-[var(--first-color-font)] font-semibold text-base px-6 py-2 flex items-center gap-2 no-underline"
        >
          <i className="bx bx-home text-[var(--first-color-font)] text-[1.2em]" />
          Inicio
        </a>
        <a
          href="#Proyectos"
          className="text-[var(--first-color-font)] font-semibold text-base px-6 py-2 flex items-center gap-2 no-underline"
        >
          <i className="bx bx-code-alt text-[var(--first-color-font)] text-[1.2em]" />
          Proyectos
        </a>
        <a
          href="#SobreMi"
          className="text-[var(--first-color-font)] font-semibold text-base px-6 py-2 flex items-center gap-2 no-underline"
        >
          <i className="bx bx-user-check text-[var(--first-color-font)] text-[1.2em]" />
          Sobre mí
        </a>
      </nav>
    </header>
  )
}

export default Header
