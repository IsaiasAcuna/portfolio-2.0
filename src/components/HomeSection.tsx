import React from 'react'
import Image from 'next/image';
import Button from './ui/Button';
import { BiMailSend } from 'react-icons/bi';
import { BiLogoLinkedinSquare } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import SplitText from '@/animations/SplitText';
import RotatingText from '@/animations/RotatingText';

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

                <figure className="flex flex-col items-center">
                    <Image
                        src="/images/isaias-acuna-face.jpg"
                        alt="Foto de Isaías"
                        className=" rounded-[100%] object-cover"
                        width={200}
                        height={200}
                        priority
                    />
                </figure>

                <div className="flex flex-col items-center text-center mt-[6%]">

                    <SplitText
                        text="Hi! I'm Acuña Isaías"
                        className="text-4xl md:text-6xl font-semibold tracking-[-1.5px]"
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
                    <h2 className="text-2xl font-semibold md:text-[40px] text-green-600 tracking-[-1.5px]">
                        Desarrollador Web FullStack
                    </h2>

                    <div className="m-[5%] flex flex-col items-center gap-y-2 md:flex-row md:justify-center md:gap-[5%]">

                        <Button title='Contactame' icon={<BiMailSend />} link={'https://mail.google.com/mail/?view=cm&fs=1&to=acunaisaias504@gmail.com"'} />
                        <Button title='LinkedIn' icon={<BiLogoLinkedinSquare />} link={'https://www.linkedin.com/in/isaiasacuna/'} />
                        <Button title='GitHub' icon={<FaGithub />} link={'https://github.com/isaiasacuna'} />
                    </div>

                    <span className='w-[90%] mt-[4%] flex items-center justify-center'>
                        <p className="text-1xl md:text-3xl text-white-700">
                            Especializado en
                        </p>
                        <RotatingText
                            texts={['React.JS', 'Next.JS', 'TailwindCSS', 'MongoDB', 'TypeScript']}
                            mainClassName="text-1xl md:text-3xl px-1 sm:px-1 md:px-2 text-white overflow-hidden justify-center"
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={2300}
                        />
                    </span>
                </div>


            </section>
        </>
    )
}

export default HomeSection
