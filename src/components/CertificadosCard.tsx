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
            className="bg-[#232323d6] backdrop-blur-2xl rounded-lg w-[100%] h-35 lg:w-[250px] lg:h-65 flex p-1 lg:flex-col lg:items-center lg:justify-center lg:p-4 "
        >
            <Image src={`/images/${imagen}`}
                alt={`Certificado ${titulo}`}
                className="rounded-[10px] my-auto h-[90%] lg:mb-3 lg:w-[90%] lg:h-[90%]"
                width={150}
                height={170}
            />
            <div className="text-center mx-auto my-auto lg:mx-none lg:my-none">
                <h3 className="text-[1.2em] lg:text-[1.4em] font-semibold mb-1">
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
