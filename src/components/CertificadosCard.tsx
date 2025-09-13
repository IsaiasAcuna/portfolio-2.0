import React from 'react'
import Image from 'next/image';

interface CertificadosCardProps {
    imagen: string;
    titulo: string;
    institucion: string;
    fecha: string
}

const CertificadosCard = ({ imagen, titulo, institucion, fecha }: CertificadosCardProps) => {
    return (
        <article
            className="bg-[#232323b2] backdrop-blur-2xl w-[100%] lg:w-[250px] h-65 rounded-lg flex flex-col items-center justify-center p-4"
        >
            <Image src={`/images/${imagen}`}
                alt={`Certificado ${titulo}`}
                className="rounded-[10px] mb-3"
                width={180}
                height={180}
            />
            <div className="text-center">
                <h3 className="text-[1.3em] lg:text-[1.4em] font-semibold mb-1">
                    {titulo}
                </h3>
                <p className="text-[1em] text-gray-300">
                    {institucion}
                </p>
                <p className="text-1xl text-gray-500">
                    {fecha}
                </p>
            </div>
        </article>
    )
}

export default CertificadosCard
