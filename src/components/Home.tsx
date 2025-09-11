import React from 'react'
import HomeSection from './HomeSection'
import ProyectsSection from './ProjectsSection'
import TecnologiesSection from './TechnologiesSection'
import SobreMi from './SobreMi'
import Certificados from './Certificados'


const HomePage = () => {
  return (
    <main className='container mx-auto px-4'>
        <HomeSection />

        <ProyectsSection />

        <TecnologiesSection />

        <SobreMi />

        <Certificados />

    </main>
  )
}

export default HomePage
