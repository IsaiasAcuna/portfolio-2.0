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
            className="w-[250px] h-70 bg-gray-100 rounded-lg shadow-md flex flex-col items-center justify-center p-4"
        >
            <Image src={`/images/${imagen}`}
                alt={`Certificado ${titulo}`}
                className="rounded-[10px] mb-3"
                width={200}
                height={200}
            />
            <div className="text-center">
                <h3 className="text-[1.4em] font-semibold mb-1">
                    {titulo}
                </h3>
                <p className="text-[1.1em] text-gray-600">
                    {institucion} - {fecha}
                </p>
            </div>
        </article>
    )
}

export default CertificadosCard
