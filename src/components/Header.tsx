import React from 'react'
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], // podés agregar más si querés
  display: 'swap',
});

const Header = () => {
  return (
    <header className={`${dmSans.className} fixed top-0 w-full flex justify-center z-[100] bg-transparent`}>
      <nav className="flex justify-center gap-8 lg:gap-3 lg:my-[0.5%] w-[100%] lg:w-[auto] h-13 lg:h-15 backdrop-blur-xl shadow-[0px_8px_9px_-2px_rgba(0,0,0,0.25)] lg:rounded-[30px] lg:border-[1px] lg:border-gray-500">
        <a
          href="#Inicio"
          className="font-semibold px-2 lg:px-5 flex items-center lg:gap-2 no-underline hover:text-green-500"
        >
          <i className="text-[1.2em]" />
          Inicio
        </a>
        <a
          href="#Proyectos"
          className="font-semibold text-base px-2 lg:px-5 flex items-center gap-2 no-underline hover:text-green-500"
        >
          <i className="text-[1.2em]" />
          Proyectos
        </a>
        <a
          href="#SobreMi"
          className="font-semibold text-base px-2 lg:px-5 flex items-center gap-2 no-underline hover:text-green-500"
        >
          Sobre mi
        </a>
      </nav>
    </header>
  )
}

export default Header
