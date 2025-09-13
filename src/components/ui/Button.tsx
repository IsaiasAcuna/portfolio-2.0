
import { ReactNode } from 'react'

interface ButtonProps {
    title: string;
    icon: ReactNode
    link: string;
}

const Button: React.FC<ButtonProps> = ({ title, icon, link }) => {
  return (
    <button className="w-auto text-[20px] border-b border-transparent md:border md:rounded-xl px-5 py-2 bg-transparent transition duration-150 hover:border-b-green-500 lg:hover:border-green-500">
            <a
              href={link}
              className="flex items-center transition duration-200"
            >
              <i className="text-black pr-3 transition duration-200">{icon}</i>
              {title}
            </a>
          </button>
  )
}

export default Button
