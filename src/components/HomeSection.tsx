import React from 'react'
import Image from 'next/image';
import Button from './ui/Button';
import { BiMailSend } from 'react-icons/bi';
import { BiLogoLinkedinSquare } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import SplitText from '@/animations/SplitText';
import ElectricBorder from '@/animations/ElectricBorder'
import Prism from '@/animations/Prism';




const HomeSection = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <>

    
    
    <section
      id="Inicio"
      className="w-full h-[100dvh] flex flex-col items-center justify-center"
    >

    

      <ElectricBorder
        color="#1CA008"
        speed={1}
        chaos={0.5}
        thickness={2}
        style={{ borderRadius: 100 }}
      >

        <figure className="flex flex-col items-center rounded-full">
              <Image
                src="/face.webp"
                alt="Foto de Isaías"
                className="rounded-full object-cover"
                width={200}
                height={200}
                priority
              />
        </figure>

        </ElectricBorder>
      


      <div className="text-center mt-[8%]">
        <SplitText
          text="Hello! I'm Acuña Isaías"
          className="text-6xl font-semibold tracking-[-1.5px]"
          delay={60}
          duration={0.2}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <h2 className="text-[40px] text-green-400 mt-[-1%] tracking-[-1.5px]">
          Desarrollador Web FullStack
        </h2>

        <div className="mt-[4%] flex justify-center gap-[5%]">
          <Button title='Contactame' icon={<BiMailSend />} link={'https://mail.google.com/mail/?view=cm&fs=1&to=acunaisaias504@gmail.com"'}/>
          <Button title='LinkedIn' icon={<BiLogoLinkedinSquare/>} link={'https://www.linkedin.com/in/isaiasacuna/'} /> 
          <Button title='GitHub' icon={<FaGithub/>} link={'https://github.com/isaiasacuna'} />
        </div>

        <p className="mt-[4%] text-[1.4em] text-slate-700">
          Especializado en Stack MERN.
        </p>
      </div>

      
    </section>
    </>
  )
}

export default HomeSection
