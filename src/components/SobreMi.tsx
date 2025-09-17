import React from 'react';
import TitleSection from './ui/TitleSection';
import { RiUserFollowLine } from 'react-icons/ri';
import Image from 'next/image';

const SobreMi = () => {
   return (
      <>
         <section id="SobreMi" className='container my-20'>
            <TitleSection title='Sobre mi' icon={<RiUserFollowLine size={40} />} />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
               <div className="w-[90%] lg:w-[60%] text-[1.3em] font-medium leading-relaxed text-slate-700 space-y-4">
                  <p>
                     Desde el tercer año de mi secundaria entré por primera vez al mundo del desarrollo web con HTML y luego con CSS por mi cuenta.
                  </p>
                  <p>
                     Hoy en día, he dedicado tiempo a <span className="bg-green-600 px-1">desarrollar mis proyectos en este rubro</span>, abarcando tanto el front-end como el back-end, lo que me ha permitido <span className="bg-green-600 px-1">mejorar mis habilidades técnicas y reforzar mi capacidad</span> de resolver problemas.
                  </p>
                  <p>
                     Estoy entusiasmado por iniciar mi carrera profesional y contribuir con <span className="bg-green-600 px-1">ideas frescas, energía y un compromiso sólido</span> para crear productos digitales de calidad.
                  </p>



                  <div className='flex flex-col-reverse lg:flex-row items-center justify-center gap-10 mt-10'>



                  <a href="https://github.com/IsaiasAcuna">
                     <img src='https://github-readme-stats.vercel.app/api/top-langs/?username=isaiasacuna&show_icons=true&theme=tokyonight&hide_border=true&locale=en'></img>
                  </a>
                  <a href="https://github.com/IsaiasAcuna">
                     <img src='https://github-readme-stats.vercel.app/api?username=isaiasacuna&show_icons=true&theme=tokyonight&hide_border=true&locale=en'></img>
                  </a>
                  </div>


                  </div>

                  <Image
                     src="/images/isaias-acuna-person-animated.png"
                     width={290}
                     height={290}
                     alt="Foto de Isaias Acuña, desarrollador web"
                     className="hidden lg:block rounded-[10px] rounded-b-[40%] rotate-[5deg]"
                  />


            </div>
         </section>
      </>
   );
}

export default SobreMi
