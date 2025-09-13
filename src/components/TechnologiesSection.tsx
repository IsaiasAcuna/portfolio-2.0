import React from 'react'
import TitleSection from './ui/TitleSection'
import { FaCode } from 'react-icons/fa6';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiMongodb, SiAxios } from 'react-icons/si';
import LogoLoop from '@/animations/LogoLoop';

const techLogos = [
  { node: <SiHtml5 />, title: "HTML5", href: "https://tailwindcss.com" },
  { node: <SiCss3 />, title: "CSS3", href: "https://tailwindcss.com"},
  { node: <SiJavascript/>, title: "JavaScript", href: "https://tailwindcss.com" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiMongodb />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiAxios />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

const TecnologiesSection = () => {
  return (
    <section>
      <TitleSection title="Tecnologias" icon={<FaCode size={40} />} />

      <div style={{ height: 'auto', position: 'relative', overflow: 'hidden'}}>
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={70}
          gap={100}
          pauseOnHover={false}
          scaleOnHover
          fadeOut
          fadeOutColor="transaparent"
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  )
}

export default TecnologiesSection
