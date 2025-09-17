
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiMongodb, SiAxios } from 'react-icons/si';

export const projects = [
  {
    title: 'MediaSongs (Next.JS)',
    description: 'Reproductor funcional mejorado de canciones. Creado con Next.JS, React, TailwindCSS, AXIOS y Mongodb',
    image: 'presentacion-mediasongs-card-proyectos.jpg',
    link: 'https://porfolio.dev/',
    techs: [<SiNextdotjs key={'next'}/>, <SiTypescript key={'next'}/>, <SiTailwindcss key={'next'}/>, <SiMongodb key={'next'}/>],
  },
  {
    title: 'Liverpool Create Team',
    description: 'Sitio Web complementado con Backend para gestionar jugadores del Liverpool FC y crear tu propio club de tus sueños.',
    image: 'presentacion-card-liverpoolapp.webp',
    link: 'https://liverpool-web-6eys.onrender.com/',
    techs: [<SiNextdotjs key={'next'}/>, <SiTypescript key={'next'}/>, <SiTailwindcss key={'next'}/>,<SiAxios key={'next'} />, <SiMongodb key={'next'}/>],
  },
  {
    title: 'GameStore',
    description: 'Ecomerce sobre el sector gaming. Creado con Next.JS, React, AXIOS y JSON server',
    image: '/assets/images/presentacion-mediasongs-card-proyectos.jpg',
    link: 'https://mediasongs.netlify.app/',
    techs: [<SiReact key={'next'}/>, <SiNextdotjs key={'next'}/>, <SiAxios key={'next'}/>],
  },
  
  {
    title: 'MediaSongs (Vainilla)',
    description: 'Reproductor funcional limitado de canciones. Creado desde cero con HTML, CSS y JS',
    image: 'presentacion-mediasongs-card-proyectos.jpg',
    link: 'https://mediasongs.netlify.app/',
    techs: [<SiHtml5 key={'next'}/>, <SiCss3 key={'next'}/>, <SiJavascript key={'next'}/>],
  },
];

