import React from 'react';
import TitleSection from './ui/TitleSection';
import { RiUserFollowLine } from 'react-icons/ri';
import Image from 'next/image';

const SobreMi = () => {
  return (
    <>
      <section id="SobreMi">
        <TitleSection title='Sobre mi' icon={<RiUserFollowLine size={40} />} />

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="w-[80%] md:w-[550px] text-[1.3em] font-medium leading-relaxed text-slate-700 space-y-4">
            <p>
              Desde el tercer año de mi secundaria entré por primera vez al mundo del desarrollo web con HTML y luego con CSS por mi cuenta.
            </p>
            <p>
              Hoy en día, he dedicado tiempo a <span className="bg-green-600 px-1 font-semibold">desarrollar mis proyectos en este rubro</span>, abarcando tanto el front-end como el back-end, lo que me ha permitido <span className="bg-green-600 font-semibold">mejorar mis habilidades técnicas y reforzar mi capacidad</span> de resolver problemas.
            </p>
            <p>
              Estoy entusiasmado por iniciar mi carrera profesional y contribuir con <span className="bg-green-600 font-semibold">ideas frescas, energía y un compromiso sólido</span> para crear productos digitales de calidad.
            </p>
          </div>

          <Image
            src="/images/IMG_20250314_005530_677.webp"
            width={290}
            height={290}
            alt="Foto de Isaias Acuña, desarrollador web"
            className="w-[290px] rounded-[10px] border-[10px] border-[var(--first-color-global)] rotate-[5deg]"
          />
        </div>
      </section>
    </>
  );
}

export default SobreMi
