import React, { ReactNode } from 'react'

interface TitleSectionProps {
    title: string,
    icon: ReactNode
}

const TitleSection: React.FC<TitleSectionProps> = ( {title, icon} ) => {
  return (
    <div className="flex items-center my-[5%]">
        <i>{icon}</i>
        <h2 className="text-[45px] font-bold pl-[2%]">{title}</h2>
    </div>
  )
}

export default TitleSection
