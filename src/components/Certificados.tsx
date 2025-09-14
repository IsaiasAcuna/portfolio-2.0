import React from 'react';
import TitleSection from './ui/TitleSection';
import { PiCertificateBold } from 'react-icons/pi';
import CertificadosCard from './CertificadosCard';

const certificados = [
  {
    titulo: 'Desarrollo Web 1',
    institucion: 'Aprende Programando',
    fecha: 'Julio 2023',
    imagen: 'Certificado_DW1.jpg',
  },
  {
    titulo: 'Desarrollo Web 2',
    institucion: 'Aprende Programando',
    fecha: 'Diciembre 2023',
    imagen: 'Certificado_DW2.jpg',
  },
  {
    titulo: 'Desarrollo Web 3',
    institucion: 'Talento Tech',
    fecha: 'Julio 2024',
    imagen: 'Certificado_DW3.jpg',
  },
  {
    titulo: 'Desarrollo Web 4',
    institucion: 'Talento Tech',
    fecha: 'Diciembre 2024',
    imagen: 'Certificado_DW4.jpg',
  },
  {
    titulo: 'Desarrollo Fullstack',
    institucion: 'Academia Numen',
    fecha: 'Agosto 2025',
    imagen: 'Certificado_DW4.jpg',
  },
];

const Certificados = () => {
  return (
    <section id="Certificados" className='mb-40'>
      <TitleSection title='Certificados' icon={<PiCertificateBold size={40} />} />

      <div className="grid grid-cols-1 justify-items-center gap-3 lg:grid-cols-5 lg:justify-center md:gap-6">
        {certificados.map((cert, index) => (
          <CertificadosCard {...cert} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Certificados;
