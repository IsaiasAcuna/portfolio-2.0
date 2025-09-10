import React from 'react';
import TitleSection from './ui/TitleSection';
import { PiCertificateBold } from 'react-icons/pi';

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
    institucion: 'Aprende Programando',
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
    titulo: 'Desarrollo Web 5',
    institucion: 'Talento Tech',
    fecha: 'Diciembre 2024',
    imagen: 'Certificado_DW4.jpg',
  },
];

const Certificados = () => {
  return (
    <section id="Certificados">
      <TitleSection title='Certificados' icon={<PiCertificateBold size={40} />} />

      <div className="flex flex-wrap justify-center gap-6">
        {certificados.map((cert, index) => (
          <article
            key={index}
            className="w-[250px] bg-gray-100 rounded-lg shadow-md flex flex-col items-center p-4"
          >
            <img src={`/images/${cert.imagen}`}
              alt={`Certificado ${cert.titulo}`}
              className="w-[200px] rounded-[10px] mb-3"
            />
            <div className="text-center">
              <h3 className="text-[1.4em] text-[var(--first-color-font)] font-semibold mb-1">
                {cert.titulo}
              </h3>
              <p className="text-[1.1em] text-gray-600">
                {cert.institucion} - {cert.fecha}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certificados;
